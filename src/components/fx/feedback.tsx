"use client";

import { useEffect, useRef, useState } from "react";
import {
  Bug,
  CheckCircle2,
  Clock3,
  Lightbulb,
  Loader2,
  Lock,
  MessageSquareHeart,
  Send,
  ShieldCheck,
  Sparkles,
  Star,
  Wrench,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import { Reveal } from "./motion-primitives";

const MAX_MESSAGE = 1000;

const FEEDBACK_TYPES = [
  { id: "general", label: "General", icon: MessageSquareHeart },
  { id: "suggestion", label: "Suggestion", icon: Lightbulb },
  { id: "bug", label: "Bug report", icon: Bug },
  { id: "feature", label: "Feature request", icon: Wrench },
] as const;

type FeedbackType = (typeof FEEDBACK_TYPES)[number]["id"];

type SubmitState = "idle" | "submitting" | "success" | "error";

type Stats = {
  total: number;
  averageRating: number;
};

function Stars({
  value,
  onChange,
  disabled,
}: {
  value: number;
  onChange: (rating: number) => void;
  disabled?: boolean;
}) {
  const [hover, setHover] = useState(0);
  const shown = hover || value;

  return (
    <div
      className="flex items-center gap-1.5"
      role="radiogroup"
      aria-label="Overall rating (required)"
    >
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          role="radio"
          aria-checked={value === star}
          aria-label={`Rate ${star} out of 5 stars`}
          disabled={disabled}
          onMouseEnter={() => setHover(star)}
          onMouseLeave={() => setHover(0)}
          onFocus={() => setHover(star)}
          onBlur={() => setHover(0)}
          onClick={() => onChange(star)}
          className="rounded-md p-1 transition-transform focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f07025] hover:scale-110 disabled:cursor-not-allowed disabled:opacity-60"
        >
          <Star
            className={cn(
              "h-6 w-6 transition-colors",
              star <= shown
                ? "fill-[#f07025] text-[#f07025]"
                : "fill-transparent text-muted-foreground/50"
            )}
          />
        </button>
      ))}
      {value > 0 && (
        <span className="ml-1.5 font-mono text-xs text-muted-foreground">
          {value}/5
        </span>
      )}
    </div>
  );
}

function StatPill({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border bg-background/60 px-4 py-3">
      <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
        {label}
      </p>
      <p className="mt-1 text-lg font-semibold tabular-nums">{value}</p>
    </div>
  );
}

export function FeedbackSection() {
  const { toast } = useToast();
  const mountedAt = useRef(Date.now());

  const [rating, setRating] = useState(0);
  const [type, setType] = useState<FeedbackType>("general");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  // Honeypot — real users never see or fill this field.
  const [honeypot, setHoneypot] = useState("");
  const [state, setState] = useState<SubmitState>("idle");
  const [errorText, setErrorText] = useState("");
  const [stats, setStats] = useState<Stats | null>(null);

  useEffect(() => {
    mountedAt.current = Date.now();

    let cancelled = false;
    fetch("/api/feedback")
      .then((res) => (res.ok ? res.json() : Promise.reject(new Error("failed"))))
      .then((data: Stats) => {
        if (!cancelled && typeof data.total === "number") setStats(data);
      })
      .catch(() => {
        /* stats are optional — silently ignore */
      });

    return () => {
      cancelled = true;
    };
  }, []);

  const remaining = MAX_MESSAGE - message.length;
  const canSubmit =
    rating > 0 && message.trim().length >= 4 && message.length <= MAX_MESSAGE;

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (state === "submitting" || !canSubmit) return;

    if (rating === 0) {
      setErrorText("Please select a star rating first.");
      return;
    }

    setState("submitting");
    setErrorText("");

    const elapsedMs = Date.now() - mountedAt.current;

    try {
      const res = await fetch("/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          rating,
          category: type,
          name,
          email,
          message,
          website: honeypot,
          elapsedMs,
        }),
      });

      const data = (await res.json().catch(() => ({}))) as {
        ok?: boolean;
        error?: string;
      };

      if (!res.ok || !data.ok) {
        setState("error");
        setErrorText(
          data.error ||
            "Something went wrong while sending your feedback. Please try again."
        );
        if (res.status === 429) {
          toast({
            title: "Too many attempts",
            description: data.error || "Please wait a few minutes and try again.",
            variant: "destructive",
          });
        }
        return;
      }

      setState("success");
      setStats((prev) =>
        prev
          ? {
              total: prev.total + 1,
              averageRating:
                Math.round(
                  ((prev.averageRating * prev.total + rating) / (prev.total + 1)) *
                    10
                ) / 10,
            }
          : { total: 1, averageRating: rating }
      );
      toast({
        title: "Feedback received",
        description: "Thank you! Your feedback helps us improve the library.",
      });
    } catch {
      setState("error");
      setErrorText(
        "Network error — please check your connection and try again."
      );
    }
  }

  function resetForm() {
    setRating(0);
    setType("general");
    setName("");
    setEmail("");
    setMessage("");
    setHoneypot("");
    setState("idle");
    setErrorText("");
    mountedAt.current = Date.now();
  }

  return (
    <section id="feedback" className="scroll-mt-20 border-y bg-muted/40">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-14">
          {/* Left: intro + trust + stats */}
          <Reveal>
            <div>
            <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-[#f07025]">
              Feedback
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Tell us what you think
            </h2>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-muted-foreground">
              Found a bug? Want a new effect? Your feedback is saved directly in
              our database and reviewed regularly — every suggestion shapes the
              next version of the library.
            </p>

            <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2.5">
                <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-[#f07025]" />
                Validated, sanitized and rate-limited to stop spam and abuse.
              </li>
              <li className="flex items-start gap-2.5">
                <Lock className="mt-0.5 h-4 w-4 shrink-0 text-[#f07025]" />
                Your name and email are optional — we never store your IP
                address.
              </li>
              <li className="flex items-start gap-2.5">
                <Clock3 className="mt-0.5 h-4 w-4 shrink-0 text-[#f07025]" />
                Feedback is reviewed within a few days. Bug reports get priority.
              </li>
            </ul>

            {stats && (
              <div className="mt-8 grid max-w-sm grid-cols-2 gap-3">
                <StatPill label="Feedback received" value={String(stats.total)} />
                <StatPill
                  label="Average rating"
                  value={stats.total > 0 ? `${stats.averageRating}/5` : "—"}
                />
              </div>
            )}
            </div>
          </Reveal>

          {/* Right: form card */}
          <Reveal delay={0.14} className="rounded-2xl">
            <div className="h-full rounded-2xl border bg-background p-6 shadow-sm transition-shadow duration-500 hover:shadow-lg sm:p-8">
            {state === "success" ? (
              <div
                className="flex min-h-[420px] flex-col items-center justify-center text-center"
                role="status"
              >
                <span className="relative flex h-20 w-20 items-center justify-center">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#f07025]/20" />
                  <span className="relative flex h-16 w-16 items-center justify-center rounded-full bg-[#f07025]">
                    <CheckCircle2 className="h-8 w-8 text-white" />
                  </span>
                </span>
                <h3 className="mt-6 text-2xl font-semibold">
                  Thank you{name ? `, ${name}` : ""}!
                </h3>
                <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
                  Your feedback has been saved and will be reviewed soon. If you
                  reported a bug, we really appreciate the details — it makes
                  fixing it much faster.
                </p>
                <Button
                  type="button"
                  variant="outline"
                  onClick={resetForm}
                  className="mt-8 rounded-full"
                >
                  <Sparkles className="h-4 w-4" />
                  Send more feedback
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                {/* Honeypot: hidden from humans, traps naive bots */}
                <div aria-hidden="true" className="absolute left-[-9999px] top-[-9999px] h-0 w-0 overflow-hidden">
                  <label htmlFor="fx-website">Leave this field empty</label>
                  <input
                    id="fx-website"
                    name="website"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)}
                  />
                </div>

                <div className="flex flex-col gap-5">
                  <div>
                    <Label className="text-sm font-medium">
                      Rate your experience{" "}
                      <span className="text-[#f07025]">*</span>
                    </Label>
                    <div className="mt-2.5">
                      <Stars
                        value={rating}
                        onChange={setRating}
                        disabled={state === "submitting"}
                      />
                    </div>
                  </div>

                  <div>
                    <Label className="text-sm font-medium">
                      What is this about?
                    </Label>
                    <div
                      className="mt-2.5 flex flex-wrap gap-2"
                      role="radiogroup"
                      aria-label="Feedback type"
                    >
                      {FEEDBACK_TYPES.map((item) => {
                        const Icon = item.icon;
                        const active = type === item.id;
                        return (
                          <button
                            key={item.id}
                            type="button"
                            role="radio"
                            aria-checked={active}
                            disabled={state === "submitting"}
                            onClick={() => setType(item.id)}
                            className={cn(
                              "inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-xs font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f07025] disabled:cursor-not-allowed disabled:opacity-60",
                              active
                                ? "border-[#f07025] bg-[#f07025] text-white"
                                : "border-border bg-transparent text-muted-foreground hover:border-[#f07025]/60 hover:text-foreground"
                            )}
                          >
                            <Icon className="h-3.5 w-3.5" />
                            {item.label}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="flex flex-col gap-1.5">
                      <Label htmlFor="fx-name" className="text-sm font-medium">
                        Name <span className="text-muted-foreground">(optional)</span>
                      </Label>
                      <Input
                        id="fx-name"
                        placeholder="Jane Doe"
                        maxLength={60}
                        autoComplete="name"
                        disabled={state === "submitting"}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <Label htmlFor="fx-email" className="text-sm font-medium">
                        Email <span className="text-muted-foreground">(optional)</span>
                      </Label>
                      <Input
                        id="fx-email"
                        type="email"
                        placeholder="jane@example.com"
                        maxLength={120}
                        autoComplete="email"
                        disabled={state === "submitting"}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="fx-message" className="text-sm font-medium">
                        Message <span className="text-[#f07025]">*</span>
                      </Label>
                      <span
                        className={cn(
                          "font-mono text-[11px] tabular-nums",
                          remaining <= 100
                            ? "text-amber-600 dark:text-amber-400"
                            : "text-muted-foreground"
                        )}
                      >
                        {message.length}/{MAX_MESSAGE}
                      </span>
                    </div>
                    <Textarea
                      id="fx-message"
                      required
                      placeholder="Tell us what you love, what's broken, or what you'd like to see next…"
                      rows={5}
                      maxLength={MAX_MESSAGE}
                      disabled={state === "submitting"}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="resize-y min-h-[110px]"
                      aria-describedby="fx-message-hint"
                    />
                    <p
                      id="fx-message-hint"
                      className="text-xs text-muted-foreground"
                    >
                      Max {MAX_MESSAGE.toLocaleString()} characters. Plain text
                      only.
                    </p>
                  </div>

                  {state === "error" && errorText && (
                    <div
                      role="alert"
                      className="rounded-lg border border-destructive/40 bg-destructive/10 px-4 py-3 text-sm text-destructive"
                    >
                      {errorText}
                    </div>
                  )}

                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <Button
                      type="submit"
                      disabled={state === "submitting" || !canSubmit}
                      className="fx-btn-shine rounded-full bg-[#f07025] text-white shadow-sm shadow-[#f07025]/20 transition-all duration-300 enabled:hover:-translate-y-0.5 enabled:hover:bg-[#e0611a] enabled:hover:shadow-lg enabled:hover:shadow-[#f07025]/25 enabled:active:translate-y-0 enabled:active:scale-[0.97] sm:min-w-44"
                    >
                      {state === "submitting" ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" />
                          Sending…
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4" />
                          Send feedback
                        </>
                      )}
                    </Button>
                    <p className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                      <Lock className="h-3 w-3" />
                      Protected by rate limiting &amp; spam filters
                    </p>
                  </div>
                </div>
              </form>
            )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
