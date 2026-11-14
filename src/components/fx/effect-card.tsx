"use client";

import { useState } from "react";
import { Check, Copy, Heart, MousePointer2 } from "lucide-react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import type { Effect } from "@/data/effects";
import { EffectPreview } from "./effect-preview";

const CATEGORY_LABELS: Record<string, string> = {
  buttons: "Button",
  loaders: "Loader",
  text: "Text",
  hover: "Hover Card",
  backgrounds: "Background",
  animations: "Animation",
};

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

function CodeBlock({ code }: { code: string }) {
  return (
    <pre className="fx-scroll max-h-64 overflow-auto rounded-lg border border-slate-800 bg-slate-950 p-4 text-left font-mono text-[12.5px] leading-relaxed text-slate-200">
      <code>{code}</code>
    </pre>
  );
}

interface EffectCardProps {
  effect: Effect;
  index?: number;
  isFavorite: boolean;
  onToggleFavorite: (id: string) => void;
}

export function EffectCard({
  effect,
  index = 0,
  isFavorite,
  onToggleFavorite,
}: EffectCardProps) {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<string>("html");
  const { toast } = useToast();

  const code = activeTab === "html" ? effect.html : effect.css;

  const handleCopy = async () => {
    const success = await copyText(code);
    if (success) {
      setCopied(true);
      toast({
        title: "Copied to clipboard",
        description: `${effect.name} ${activeTab.toUpperCase()} code copied.`,
      });
      setTimeout(() => setCopied(false), 1600);
    } else {
      toast({
        title: "Copy failed",
        description: "Please select the code manually and copy it.",
        variant: "destructive",
      });
    }
  };

  const handleFavorite = () => {
    onToggleFavorite(effect.id);
    toast({
      title: isFavorite ? "Removed from favorites" : "Added to favorites",
      description: isFavorite
        ? `${effect.name} was removed from your favorites.`
        : `${effect.name} was saved to your favorites.`,
    });
  };

  return (
    <article
      className="fx-card-enter group flex flex-col overflow-hidden rounded-xl border bg-card shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:border-[#f07025]/45 hover:shadow-lg hover:shadow-[#f07025]/5"
      style={{ animationDelay: `${(index % 12) * 45}ms` }}
    >
      {/* Live preview canvas */}
      <div className="relative">
        <EffectPreview effect={effect} className="h-48 border-b" />
        <span className="pointer-events-none absolute left-3 top-3 rounded-full bg-slate-950/70 px-2.5 py-1 font-mono text-[10px] font-medium uppercase tracking-wider text-slate-300 backdrop-blur">
          {CATEGORY_LABELS[effect.category]}
        </span>

        {/* Favorite button */}
        <motion.button
          type="button"
          whileTap={{ scale: 0.82 }}
          onClick={handleFavorite}
          aria-pressed={isFavorite}
          aria-label={
            isFavorite
              ? `Remove ${effect.name} from favorites`
              : `Add ${effect.name} to favorites`
          }
          className="absolute right-3 top-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-950/70 backdrop-blur transition-colors hover:bg-slate-900"
        >
          <Heart
            className={`h-4 w-4 transition-all duration-200 ${
              isFavorite
                ? "fill-[#f07025] text-[#f07025]"
                : "text-slate-300"
            }`}
          />
        </motion.button>

        <span className="pointer-events-none absolute bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-1 rounded-full bg-[#f07025]/90 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-white opacity-0 backdrop-blur transition-opacity duration-300 group-hover:opacity-100">
          <MousePointer2 className="h-3 w-3" />
          Try it
        </span>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-base font-semibold tracking-tight">
            {effect.name}
          </h3>
        </div>
        <p className="text-sm leading-relaxed text-muted-foreground">
          {effect.description}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {effect.tags.map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="px-2 py-0 text-[11px] font-normal"
            >
              #{tag}
            </Badge>
          ))}
        </div>

        {/* Code tabs */}
        <div className="mt-auto pt-1">
          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <div className="flex items-center justify-between gap-2">
              <TabsList className="h-8 bg-muted/70 p-0.5">
                <TabsTrigger
                  value="html"
                  className="h-7 rounded-md px-3 font-mono text-[11px]"
                >
                  HTML
                </TabsTrigger>
                <TabsTrigger
                  value="css"
                  className="h-7 rounded-md px-3 font-mono text-[11px]"
                >
                  CSS
                </TabsTrigger>
              </TabsList>
              <button
                type="button"
                onClick={handleCopy}
                aria-label={`Copy ${activeTab.toUpperCase()} code for ${effect.name}`}
                className="inline-flex h-8 items-center gap-1.5 rounded-md border bg-background px-3 text-xs font-medium transition-colors hover:border-[#f07025] hover:text-[#f07025]"
              >
                {copied ? (
                  <>
                    <Check className="h-3.5 w-3.5 text-green-600" />
                    Copied
                  </>
                ) : (
                  <>
                    <Copy className="h-3.5 w-3.5" />
                    Copy
                  </>
                )}
              </button>
            </div>
            <TabsContent value="html" className="mt-3">
              <CodeBlock code={effect.html} />
            </TabsContent>
            <TabsContent value="css" className="mt-3">
              <CodeBlock code={effect.css} />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </article>
  );
}
