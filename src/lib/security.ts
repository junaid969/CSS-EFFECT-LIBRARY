import { createHash } from "crypto";

/**
 * Lightweight, dependency-free security utilities.
 * All state lives in local memory (single-instance deployment).
 */

/* ------------------------------------------------------------------ */
/* Rate limiting (sliding window, per key)                             */
/* ------------------------------------------------------------------ */

const RATE_POST_MAX = 5; // feedback submissions
const RATE_POST_WINDOW_MS = 10 * 60 * 1000; // per 10 minutes
const RATE_GET_MAX = 120; // read-only stats
const RATE_GET_WINDOW_MS = 60 * 1000; // per minute

type Hit = { hits: number[]; };

const buckets = new Map<string, Hit>();
let sweepCounter = 0;

function sweepExpired(now: number) {
  if (buckets.size < 5_000) return;
  for (const [key, hit] of buckets) {
    hit.hits = hit.hits.filter((t) => now - t < RATE_POST_WINDOW_MS);
    if (hit.hits.length === 0) buckets.delete(key);
  }
}

export type RateResult = {
  allowed: boolean;
  remaining: number;
  retryAfterSec: number;
};

export function rateLimit(
  key: string,
  max: number,
  windowMs: number
): RateResult {
  const now = Date.now();
  sweepCounter += 1;
  if (sweepCounter % 500 === 0) sweepExpired(now);

  const hit = buckets.get(key) ?? { hits: [] };
  hit.hits = hit.hits.filter((t) => now - t < windowMs);

  if (hit.hits.length >= max) {
    const oldest = hit.hits[0] ?? now;
    buckets.set(key, hit);
    return {
      allowed: false,
      remaining: 0,
      retryAfterSec: Math.max(1, Math.ceil((oldest + windowMs - now) / 1000)),
    };
  }

  hit.hits.push(now);
  buckets.set(key, hit);
  return {
    allowed: true,
    remaining: max - hit.hits.length,
    retryAfterSec: 0,
  };
}

export function limitFeedbackPost(key: string): RateResult {
  return rateLimit(`post:${key}`, RATE_POST_MAX, RATE_POST_WINDOW_MS);
}

export function limitFeedbackGet(key: string): RateResult {
  return rateLimit(`get:${key}`, RATE_GET_MAX, RATE_GET_WINDOW_MS);
}

/* ------------------------------------------------------------------ */
/* Client fingerprint (salted hash — raw IP is never persisted)        */
/* ------------------------------------------------------------------ */

const SALT = "fx-lab::v1::client-hash";

export function getClientIp(headers: Headers): string {
  const forwarded = headers.get("x-forwarded-for");
  if (forwarded) {
    const first = forwarded.split(",")[0]?.trim();
    if (first) return first;
  }
  return headers.get("x-real-ip")?.trim() || "unknown";
}

export function clientKey(headers: Headers): string {
  const ip = getClientIp(headers);
  const ua = headers.get("user-agent")?.slice(0, 180) ?? "";
  return createHash("sha256")
    .update(`${SALT}|${ip}|${ua}`)
    .digest("hex")
    .slice(0, 32);
}

/* ------------------------------------------------------------------ */
/* Input sanitization                                                  */
/* ------------------------------------------------------------------ */

/** Strip control characters, collapse runs of blank lines / spaces. */
export function sanitizeText(input: string, maxLength: number): string {
  const cleaned = input
    .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, "")
    .replace(/\r\n?/g, "\n")
    .replace(/[ \t]{2,}/g, " ")
    .replace(/\n{3,}/g, "\n\n")
    .replace(/[<>]/g, "")
    .trim();

  return cleaned.length > maxLength ? cleaned.slice(0, maxLength) : cleaned;
}

/** Heuristic URL spam check: more than `limit` links is almost always spam. */
export function looksLikeLinkSpam(text: string, limit = 3): boolean {
  const matches = text.match(/https?:\/\//gi);
  return (matches?.length ?? 0) > limit;
}

/** Max accepted JSON body size in characters. */
export const MAX_BODY_CHARS = 8_192;

export function jsonError(
  error: string,
  status: number,
  extraHeaders?: Record<string, string>
) {
  return Response.json({ ok: false, error }, { status, headers: extraHeaders });
}
