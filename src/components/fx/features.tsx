"use client";

import {
  Blocks,
  ClipboardCheck,
  HeartHandshake,
  MonitorPlay,
  Sparkles,
  Zap,
} from "lucide-react";
import { motion } from "framer-motion";
import { Reveal, EASE } from "./motion-primitives";

const FEATURES = [
  {
    icon: Zap,
    title: "Zero dependencies",
    description:
      "No jQuery, no libraries, no npm installs. Just a small snippet of CSS that you fully own and control.",
  },
  {
    icon: Sparkles,
    title: "Pure CSS, no JavaScript",
    description:
      "Every animation is powered by modern CSS — keyframes, transitions, transforms. Lightning fast and framework safe.",
  },
  {
    icon: ClipboardCheck,
    title: "Copy-ready code",
    description:
      "Each effect ships with clean, formatted HTML and CSS. Copy the exact code you see running in the demo.",
  },
  {
    icon: MonitorPlay,
    title: "Live demonstrations",
    description:
      "What you preview is what you paste. All demos run the real code right in your browser — hover, click and watch.",
  },
  {
    icon: Blocks,
    title: "Framework agnostic",
    description:
      "Works in React, Next.js, Vue, Svelte, WordPress, Shopify, plain HTML — anywhere CSS is supported.",
  },
  {
    icon: HeartHandshake,
    title: "Free for any project",
    description:
      "Use every effect in personal, client, or commercial work. No attribution required, no hidden paywalls.",
  },
];

export function Features() {
  return (
    <section id="features" className="scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-[#f07025]">
              Why CSS Effects Lab
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Built for developers who ship
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Everything in the lab follows one rule: the code you copy should
              just work — anywhere, on any stack, with nothing else to install.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.65,
                delay: (index % 3) * 0.1,
                ease: EASE,
              }}
              className="group rounded-xl border bg-card p-6 shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:border-[#f07025]/40 hover:shadow-lg hover:shadow-[#f07025]/5"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-[#f07025]/10 text-[#f07025] transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6">
                <feature.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-base font-semibold tracking-tight">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
