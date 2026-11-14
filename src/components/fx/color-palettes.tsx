"use client";

import { useMemo, useState } from "react";
import { Check, Copy, Paintbrush } from "lucide-react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import {
  PALETTES,
  PALETTE_TAGS,
  paletteToCss,
  type Palette,
  type PaletteColor,
  type PaletteTag,
} from "@/data/palettes";
import { EASE, Reveal } from "./motion-primitives";

async function copyText(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    try {
      const textarea = document.createElement("textarea");
      textarea.value = text;
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      return true;
    } catch {
      return false;
    }
  }
}

/* ------------------------------------------------------------------ */
/* Mini live preview: a tiny fake website painted with the palette.    */
/* ------------------------------------------------------------------ */
function PreviewMockup({
  colors,
  tags,
}: {
  colors: PaletteColor[];
  tags: string[];
}) {
  const [bg, surface, accent, text, muted] = colors.map((c) => c.hex);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none relative h-40 overflow-hidden border-b"
      style={{ backgroundColor: bg }}
    >
      <div className="absolute inset-0 transition-transform duration-500 ease-out group-hover:scale-[1.04]">
        {/* Hero skeleton */}
        <div className="px-4 pt-10">
          <div
            className="h-3 w-2/3 rounded-full"
            style={{ backgroundColor: text, opacity: 0.92 }}
          />
          <div
            className="mt-2 h-2 w-1/2 rounded-full"
            style={{ backgroundColor: muted, opacity: 0.5 }}
          />
          <div className="mt-3 flex items-center gap-2">
            <span
              className="h-5 w-16 rounded-full"
              style={{ backgroundColor: accent }}
            />
            <span
              className="h-5 w-12 rounded-full border"
              style={{ borderColor: muted, opacity: 0.55 }}
            />
          </div>
        </div>

        {/* Card strip */}
        <div className="absolute inset-x-4 bottom-3 flex gap-2">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="h-10 flex-1 rounded-md p-1.5"
              style={{ backgroundColor: surface }}
            >
              <span
                className="block h-1.5 w-6 rounded-full"
                style={{ backgroundColor: accent, opacity: i === 0 ? 1 : 0.4 }}
              />
              <span
                className="mt-1.5 block h-1 w-full rounded-full"
                style={{ backgroundColor: muted, opacity: 0.35 }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Theme chip */}
      <span className="absolute left-3 top-3 rounded-full bg-slate-950/70 px-2.5 py-1 font-mono text-[10px] font-medium uppercase tracking-wider text-slate-300 backdrop-blur">
        {tags.join(" · ")}
      </span>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* One palette card.                                                    */
/* ------------------------------------------------------------------ */
function PaletteCard({ palette, index }: { palette: Palette; index: number }) {
  const { toast } = useToast();
  const [copiedHex, setCopiedHex] = useState<string | null>(null);
  const [copiedCss, setCopiedCss] = useState(false);
  const textColor = palette.colors[3].hex;

  const handleCopyColor = async (color: PaletteColor) => {
    const success = await copyText(color.hex);
    if (success) {
      setCopiedHex(color.hex);
      toast({
        title: "Hex code copied",
        description: `${color.hex} — ${color.name}`,
      });
      setTimeout(() => setCopiedHex(null), 1600);
    } else {
      toast({
        title: "Copy failed",
        description: "Please copy the hex code manually.",
        variant: "destructive",
      });
    }
  };

  const handleCopyCss = async () => {
    const success = await copyText(paletteToCss(palette));
    if (success) {
      setCopiedCss(true);
      toast({
        title: "Palette copied as CSS",
        description: `${palette.name} variables are on your clipboard.`,
      });
      setTimeout(() => setCopiedCss(false), 1600);
    } else {
      toast({
        title: "Copy failed",
        description: "Please copy the variables manually.",
        variant: "destructive",
      });
    }
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.65, delay: (index % 3) * 0.1, ease: EASE }}
      className="group flex flex-col overflow-hidden rounded-xl border bg-card shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:border-[#f07025]/45 hover:shadow-lg hover:shadow-[#f07025]/5"
    >
      <PreviewMockup colors={palette.colors} tags={palette.tags} />

      <div className="flex flex-1 flex-col gap-3 p-5">
        <div>
          <h3 className="text-base font-semibold tracking-tight">
            {palette.name}
          </h3>
          <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
            {palette.vibe}
          </p>
        </div>

        <div className="flex flex-wrap gap-1.5">
          {palette.useCases.map((useCase) => (
            <Badge
              key={useCase}
              variant="secondary"
              className="px-2 py-0 text-[11px] font-normal"
            >
              {useCase}
            </Badge>
          ))}
        </div>

        {/* Swatches: click to copy hex */}
        <div className="mt-1 grid grid-cols-5 gap-1.5">
          {palette.colors.map((color) => (
            <button
              key={color.hex + color.role}
              type="button"
              onClick={() => handleCopyColor(color)}
              aria-label={`Copy ${color.name} ${color.hex}`}
              className="group/swatch flex min-w-0 flex-col items-center gap-1 rounded-md outline-none focus-visible:ring-2 focus-visible:ring-[#f07025]"
            >
              <span
                className="relative flex h-11 w-full items-center justify-center rounded-md border shadow-sm transition-transform duration-300 group-hover/swatch:-translate-y-0.5 group-hover/swatch:scale-[1.07]"
                style={{ backgroundColor: color.hex }}
              >
                {copiedHex === color.hex ? (
                  <Check className="h-4 w-4 drop-shadow" style={{ color: textColor }} />
                ) : null}
              </span>
              <span className="font-mono text-[10px] leading-none tracking-wide text-foreground/80">
                {color.hex}
              </span>
              <span
                className="w-full truncate text-center text-[10px] leading-tight text-muted-foreground"
                title={color.name}
              >
                {color.name}
              </span>
            </button>
          ))}
        </div>

        {/* Copy whole palette as CSS variables */}
        <button
          type="button"
          onClick={handleCopyCss}
          aria-label={`Copy ${palette.name} palette as CSS variables`}
          className="mt-auto inline-flex h-9 items-center justify-center gap-1.5 rounded-md border bg-background pt-0 text-xs font-medium transition-colors hover:border-[#f07025] hover:text-[#f07025]"
        >
          {copiedCss ? (
            <>
              <Check className="h-3.5 w-3.5 text-green-600" />
              Variables copied
            </>
          ) : (
            <>
              <Copy className="h-3.5 w-3.5" />
              Copy CSS variables
            </>
          )}
        </button>
      </div>
    </motion.article>
  );
}

/* ------------------------------------------------------------------ */
/* 60-30-10 educational strip.                                          */
/* ------------------------------------------------------------------ */
function BalanceRule() {
  return (
    <Reveal delay={0.2}>
      <div className="mt-10 flex flex-col gap-5 rounded-xl border bg-card p-6 shadow-sm sm:flex-row sm:items-center">
        <div className="flex-1">
          <h3 className="inline-flex items-center gap-2 text-base font-semibold tracking-tight">
            <Paintbrush className="h-4 w-4 text-[#f07025]" />
            The 60-30-10 rule
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Give roughly <strong className="text-foreground">60%</strong> of the
            page to your background,{" "}
            <strong className="text-foreground">30%</strong> to surfaces and
            text, and save your loudest color for the final{" "}
            <strong className="text-foreground">10%</strong>. Every palette
            below already follows this balance — pick one and it will just
            work.
          </p>
        </div>
        <div className="sm:w-64">
          <div
            className="flex h-3.5 overflow-hidden rounded-full border shadow-inner"
            aria-hidden="true"
          >
            <span className="w-[60%] bg-muted" />
            <span className="w-[30%] bg-foreground/25" />
            <span className="w-[10%] bg-[#f07025]" />
          </div>
          <div className="mt-2.5 flex flex-wrap gap-x-4 gap-y-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-muted ring-1 ring-border" />
              60% Dominant
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-foreground/25" />
              30% Secondary
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-[#f07025]" />
              10% Accent
            </span>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

/* ------------------------------------------------------------------ */
/* Section.                                                             */
/* ------------------------------------------------------------------ */
type ActiveTag = "all" | PaletteTag;

export function ColorPalettes() {
  const [activeTag, setActiveTag] = useState<ActiveTag>("all");

  const filtered = useMemo(
    () =>
      activeTag === "all"
        ? PALETTES
        : PALETTES.filter((palette) => palette.tags.includes(activeTag)),
    [activeTag],
  );

  return (
    <section id="palettes" className="scroll-mt-20 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-[#f07025]">
              Color Palettes
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Color combos that just work
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Ten hand-picked palettes with named colors, hex codes and live
              previews. Click any swatch to copy its hex, or grab the whole
              palette as ready-to-paste CSS variables.
            </p>
          </Reveal>
        </div>

        {/* Filter pills */}
        <Reveal delay={0.24}>
          <div
            role="group"
            aria-label="Filter palettes by mood"
            className="mt-10 flex flex-wrap items-center justify-center gap-2"
          >
            {(["all", ...PALETTE_TAGS] as ActiveTag[]).map((tag) => {
              const active = activeTag === tag;
              return (
                <button
                  key={tag}
                  type="button"
                  onClick={() => setActiveTag(tag)}
                  aria-pressed={active}
                  className={cn(
                    "rounded-full border px-4 py-1.5 font-mono text-[11px] font-medium uppercase tracking-wider transition-all duration-300",
                    active
                      ? "border-transparent bg-[#f07025] text-white shadow-sm"
                      : "border-border bg-background text-muted-foreground hover:-translate-y-0.5 hover:border-[#f07025]/50 hover:text-foreground",
                  )}
                >
                  {tag}
                </button>
              );
            })}
          </div>
          <p
            className="mt-3 text-center font-mono text-[11px] uppercase tracking-wider text-muted-foreground"
            aria-live="polite"
          >
            Showing {filtered.length} of {PALETTES.length} palettes
          </p>
        </Reveal>

        {/* Palette grid */}
        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((palette, index) => (
            <PaletteCard
              key={palette.id}
              palette={palette}
              index={index}
            />
          ))}
        </div>

        <BalanceRule />
      </div>
    </section>
  );
}
