"use client";

import { motion } from "framer-motion";
import type { EffectCategory } from "@/data/effects";
import { Reveal, EASE } from "./motion-primitives";
import { FxLogo } from "./fx-logo";

const QUICK_LINKS = [
  { href: "#palettes", label: "Color palettes" },
  { href: "#gallery", label: "Effect Gallery" },
  { href: "#how-it-works", label: "How it works" },
  { href: "#features", label: "Features" },
  { href: "#faq", label: "FAQ" },
  { href: "#feedback", label: "Give feedback" },
];

const CATEGORY_LINKS: { id: EffectCategory; label: string }[] = [
  { id: "buttons", label: "Buttons" },
  { id: "loaders", label: "Loaders" },
  { id: "text", label: "Text Effects" },
  { id: "hover", label: "Hover Cards" },
  { id: "backgrounds", label: "Backgrounds" },
  { id: "animations", label: "Animations" },
];

function filterCategory(id: EffectCategory) {
  window.dispatchEvent(new CustomEvent("fx-category", { detail: id }));
}

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t bg-slate-950 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <Reveal className="lg:col-span-2">
            <div className="flex items-center gap-2.5">
              <FxLogo badgeClassName="h-9 w-9" markClassName="h-5 w-5" />
              <span className="text-lg font-semibold tracking-tight text-white">
                CSS Effects Lab
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-400">
              Complete online demonstrations with copy-ready CSS code. Every
              effect is pure CSS — no JavaScript, no dependencies. Crafted for
              developers who want to ship faster.
            </p>
            <p className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 font-mono text-[11px] uppercase tracking-wider text-slate-400">
              <span className="h-1.5 w-1.5 rounded-full bg-[#f07025]" />
              Free for personal & commercial use
            </p>
          </Reveal>

          {/* Quick links */}
          <Reveal delay={0.1}>
            <nav aria-label="Quick links">
            <p className="font-mono text-xs font-medium uppercase tracking-wider text-slate-500">
              Quick links
            </p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {QUICK_LINKS.map((link) => (
                <li key={link.href + link.label}>
                  <a
                    href={link.href}
                    className="inline-flex items-center gap-1.5 text-slate-400 transition-all duration-300 hover:translate-x-1 hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          </Reveal>

          {/* Categories */}
          <Reveal delay={0.2}>
            <nav aria-label="Browse by category">
            <p className="font-mono text-xs font-medium uppercase tracking-wider text-slate-500">
              Categories
            </p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {CATEGORY_LINKS.map((category) => (
                <li key={category.id}>
                  <button
                    type="button"
                    onClick={() => filterCategory(category.id)}
                    className="inline-flex items-center gap-1.5 text-slate-400 transition-all duration-300 hover:translate-x-1 hover:text-white"
                  >
                    {category.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
          </Reveal>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
          className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-slate-500 sm:flex-row"
        >
          <p>
            &copy; {year} CSS Effects Lab. All effects are free to use in any
            project.
          </p>
          <p className="font-mono">
            Built with Next.js + Tailwind CSS · Pure CSS, zero dependencies
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
