"use client";

import { ClipboardCopy, MonitorPlay, Rocket } from "lucide-react";
import { motion } from "framer-motion";
import { Reveal, EASE } from "./motion-primitives";

const STEPS = [
  {
    number: "01",
    icon: MonitorPlay,
    title: "Browse & preview",
    description:
      "Every effect runs live on the page. Hover it, click it, watch the animation — no screenshots, the real thing.",
  },
  {
    number: "02",
    icon: ClipboardCopy,
    title: "Copy the code",
    description:
      "Open the HTML or CSS tab and copy exactly what you see. Clean, formatted, dependency-free code in one click.",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Paste into your project",
    description:
      "Drop it into any website or framework — React, Next.js, WordPress, plain HTML. Pure CSS works everywhere.",
  },
];

/** Cascade timings — one rhythm for the whole page. */
const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay: 0, ease: EASE },
  },
};

const connectorVariants = {
  hidden: { scaleX: 0 },
  show: {
    scaleX: 1,
    transition: { duration: 0.6, delay: 0.45, ease: EASE },
  },
};

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="scroll-mt-20 border-y bg-muted/40"
    >
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-[#f07025]">
              How it works
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              From discovery to production in three steps
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              No sign-up, no installs, no build steps. The entire library is
              designed to get an effect into your project in under a minute.
            </p>
          </Reveal>
        </div>

        <ol className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {STEPS.map((step, index) => (
            <motion.li
              key={step.number}
              variants={cardVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.65,
                delay: index * 0.12,
                ease: EASE,
              }}
              className="group relative rounded-xl border bg-card p-6 shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:border-[#f07025]/40 hover:shadow-lg hover:shadow-[#f07025]/5"
            >
              <div className="flex items-center justify-between">
                <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#f07025]/10 text-[#f07025] transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6">
                  <step.icon className="h-5 w-5" />
                </span>
                <span className="font-mono text-3xl font-bold text-foreground/10 transition-colors duration-500 group-hover:text-[#f07025]/25">
                  {step.number}
                </span>
              </div>
              <h3 className="mt-5 text-lg font-semibold tracking-tight">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>

              {/* Connector draws itself in when its card appears (desktop only) */}
              {index < STEPS.length - 1 && (
                <motion.span
                  aria-hidden="true"
                  variants={connectorVariants}
                  className="absolute -right-4 top-1/2 hidden h-px w-8 origin-left bg-gradient-to-r from-[#f07025]/50 to-transparent md:block"
                />
              )}
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
