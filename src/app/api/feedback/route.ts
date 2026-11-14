import { z } from "zod";
import { db } from "@/lib/db";
import {
  MAX_BODY_CHARS,
  clientKey,
  jsonError,
  limitFeedbackGet,
  limitFeedbackPost,
  looksLikeLinkSpam,
  sanitizeText,
} from "@/lib/security";

/** Minimum time (ms) between form open and submit — faster means a bot. */
const MIN_HUMAN_MS = 2_500;
/** Maximum plausible time the form can stay open before submitting. */
const MAX_HUMAN_MS = 7 * 24 * 60 * 60 * 1000;

const feedbackSchema = z.object({
  rating: z.number().int().min(1).max(5),
  category: z.enum(["general", "suggestion", "bug", "feature"]),
  name: z.string().max(60).optional().default(""),
  email: z
    .string()
    .max(120)
    .email("Please provide a valid email address.")
    .optional()
    .or(z.literal("")),
  message: z.string().min(4).max(1000),
  // Honeypot must be empty; bots fill every input they can find.
  website: z.string().max(0, "Your submission was flagged as spam.").optional().default(""),
  // Time from form open to submit, measured client-side.
  elapsedMs: z
    .number()
    .int()
    .min(MIN_HUMAN_MS, "Form submitted too quickly. Please try again.")
    .max(MAX_HUMAN_MS),
});

const statsCache = {
  data: null as null | {
    total: number;
    averageRating: number;
    distribution: Record<1 | 2 | 3 | 4 | 5, number>;
  },
  fetchedAt: 0,
};
const STATS_TTL_MS = 60_000;

export async function GET(request: Request) {
  const key = clientKey(request.headers);
  const limit = limitFeedbackGet(key);
  if (!limit.allowed) {
    return jsonError("Too many requests. Slow down a little.", 429, {
      "Retry-After": String(limit.retryAfterSec),
    });
  }

  try {
    const now = Date.now();
    if (!statsCache.data || now - statsCache.fetchedAt > STATS_TTL_MS) {
      const [total, avg, grouped] = await Promise.all([
        db.feedback.count(),
        db.feedback.aggregate({ _avg: { rating: true } }),
        db.feedback.groupBy({
          by: ["rating"],
          _count: { _all: true },
        }),
      ]);

      const distribution: Record<1 | 2 | 3 | 4 | 5, number> = {
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
      };
      for (const row of grouped) {
        if (row.rating >= 1 && row.rating <= 5) {
          distribution[row.rating as 1 | 2 | 3 | 4 | 5] = row._count._all;
        }
      }

      statsCache.data = {
        total,
        averageRating: Math.round((avg._avg.rating ?? 0) * 10) / 10,
        distribution,
      };
      statsCache.fetchedAt = now;
    }

    // Only aggregate, non-identifying data is exposed.
    return Response.json(
      { ok: true, ...statsCache.data },
      { headers: { "Cache-Control": "no-store" } }
    );
  } catch (error) {
    console.error("[feedback] GET failed:", error);
    return jsonError("Unable to load feedback stats right now.", 500);
  }
}

export async function POST(request: Request) {
  // 1) Basic content-type check.
  const contentType = request.headers.get("content-type") ?? "";
  if (!contentType.includes("application/json")) {
    return jsonError("Expected application/json body.", 415);
  }

  // 2) Abuse: rate limit per client (5 per 10 minutes).
  const key = clientKey(request.headers);
  const limit = limitFeedbackPost(key);
  if (!limit.allowed) {
    return jsonError(
      "You have sent several feedback messages already. Please wait a few minutes before trying again.",
      429,
      { "Retry-After": String(limit.retryAfterSec) }
    );
  }

  // 3) Read body with a hard size cap.
  let raw: string;
  try {
    raw = await request.text();
  } catch {
    return jsonError("Unable to read request body.", 400);
  }
  if (raw.length > MAX_BODY_CHARS) {
    return jsonError("Payload too large.", 413);
  }

  let body: unknown;
  try {
    body = JSON.parse(raw);
  } catch {
    return jsonError("Invalid JSON body.", 400);
  }

  // 4) Schema validation (includes honeypot + timing bot checks).
  const parsed = feedbackSchema.safeParse(body);
  if (!parsed.success) {
    const first = parsed.error.issues[0];
    return jsonError(
      first?.message || "Please check the form and try again.",
      400
    );
  }
  const data = parsed.data;

  // 5) Sanitize free-text fields.
  const name = data.name ? sanitizeText(data.name, 60) : "";
  const email = data.email ? data.email.trim().toLowerCase().slice(0, 120) : "";
  const message = sanitizeText(data.message, 1000);

  if (message.length < 4) {
    return jsonError("Message is too short.", 400);
  }
  if (looksLikeLinkSpam(message)) {
    return jsonError(
      "Your message contains too many links and was blocked as spam.",
      400
    );
  }

  // 6) Duplicate guard: same client + same message within 2 minutes.
  try {
    const twoMinAgo = new Date(Date.now() - 2 * 60 * 1000);
    const duplicate = await db.feedback.findFirst({
      where: { clientHash: key, message, createdAt: { gte: twoMinAgo } },
      select: { id: true },
    });
    if (duplicate) {
      return jsonError("This feedback was already received. Thank you!", 409);
    }

    const saved = await db.feedback.create({
      data: {
        name: name || null,
        email: email || null,
        rating: data.rating,
        category: data.category,
        message,
        clientHash: key,
        userAgent: request.headers.get("user-agent")?.slice(0, 300) ?? "",
      },
      select: { id: true },
    });

    statsCache.data = null; // invalidate aggregate cache

    return Response.json(
      { ok: true, id: saved.id },
      { status: 201, headers: { "Cache-Control": "no-store" } }
    );
  } catch (error) {
    console.error("[feedback] POST failed:", error);
    return jsonError(
      "We could not save your feedback right now. Please try again later.",
      500
    );
  }
}
