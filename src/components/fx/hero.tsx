"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowDown, MousePointerClick } from "lucide-react";
import {
  animate,
  motion,
  useInView,
  useScroll,
  useTransform,
} from "framer-motion";
import { EFFECTS, EFFECT_COUNT, CATEGORIES } from "@/data/effects";
import { EffectPreview } from "./effect-preview";
import { EASE } from "./motion-primitives";

const FEATURED_IDS = ["gradient-text", "aurora-glow-btn", "rotating-cube"];

/** Cascade timings — one rhythm for the whole hero. */
const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE },
  },
};

const parentVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.08 } },
};

function CountUp({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 1.4,
      ease: "easeOut",
      onUpdate: (latest) => setDisplay(Math.round(latest)),
    });
    return () => controls.stop();
  }, [inView, value]);

  return (
    <span ref={ref} className="text-xl font-semibold tabular-nums text-[#f07025]">
      {display}
      {suffix}
    </span>
  );
}

export function Hero() {
  const featured = FEATURED_IDS.map((id) =>
    EFFECTS.find((effect) => effect.id === id)
  ).filter((effect): effect is (typeof EFFECTS)[number] => Boolean(effect));

  const sectionRef = useRef<HTMLElement>(null);

  // Parallax: decorative layers drift at different speeds while scrolling away
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const orbLeftY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const orbRightY = useTransform(scrollYProgress, [0, 1], [0, -110]);
  const gridY = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 70]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0.45]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden border-b bg-slate-950 text-white"
    >
      {/* Decorative moving grid */}
      <style
        dangerouslySetInnerHTML={{
          __html: `.fx-hero-grid {
  position: absolute;
  inset: 0;
  background-image: linear-gradient(rgba(240, 112, 37, 0.12) 1px, transparent 1px),
    linear-gradient(90deg, rgba(240, 112, 37, 0.12) 1px, transparent 1px);
  background-size: 40px 40px;
  animation: fx-grid-move 2.4s linear infinite;
  mask-image: radial-gradient(ellipse 90% 80% at 50% 20%, black 30%, transparent 75%);
  -webkit-mask-image: radial-gradient(ellipse 90% 80% at 50% 20%, black 30%, transparent 75%);
}
@keyframes fx-grid-move {
  to {
    background-position: 40px 40px;
  }
}`,
        }}
      />
      <motion.div className="fx-hero-grid" style={{ y: gridY }} aria-hidden="true" />

      {/* Parallax glow orbs (outer = scroll drift, inner = gentle float) */}
      <motion.div
        aria-hidden="true"
        style={{ y: orbLeftY }}
        className="pointer-events-none absolute -left-32 top-10 h-72 w-72"
      >
        <div className="fx-float h-full w-full rounded-full bg-[#f07025]/20 blur-[110px]" />
      </motion.div>
      <motion.div
        aria-hidden="true"
        style={{ y: orbRightY }}
        className="pointer-events-none absolute -right-24 bottom-0 h-64 w-64"
      >
        <div className="fx-float-slow h-full w-full rounded-full bg-[#ec4899]/15 blur-[110px]" />
      </motion.div>

      <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-20 sm:px-6 md:pb-20 md:pt-24 lg:px-8">
        <motion.div
          variants={parentVariants}
          initial="hidden"
          animate="show"
          style={{ y: contentY, opacity: contentOpacity }}
          className="mx-auto max-w-3xl text-center"
        >
          <motion.p
            variants={itemVariants}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 font-mono text-xs font-medium uppercase tracking-[0.2em] text-white/80 backdrop-blur"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#f07025] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#f07025]" />
            </span>
            100% Pure CSS · Zero JavaScript
          </motion.p>

          {/* Clip reveal: title rises out of its mask */}
          <div className="overflow-hidden py-1">
            <motion.h1
              initial={{ y: "105%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.95, ease: EASE, delay: 0.14 }}
              className="fx-hero-title mt-6 text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl"
            >
              CSS Effects Lab
            </motion.h1>
          </div>

          <motion.p
            variants={itemVariants}
            className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/70"
          >
            A complete library of hand-crafted CSS effects with live online
            demonstrations and copy-ready code. Hover it, click it, love it —
            then paste it straight into your project.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <a
              href="#gallery"
              className="fx-btn-shine inline-flex h-11 items-center gap-2 rounded-full bg-[#f07025] px-7 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#e0611a] hover:shadow-lg hover:shadow-[#f07025]/30 active:translate-y-0 active:scale-[0.97]"
            >
              Browse the library
              <ArrowDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
            </a>
            <a
              href="#how-it-works"
              className="inline-flex h-11 items-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 text-sm font-semibold text-white/85 backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-white/40 hover:bg-white/10 hover:text-white active:translate-y-0 active:scale-[0.97]"
            >
              <MousePointerClick className="h-4 w-4" />
              See how it works
            </a>
          </motion.div>

          {/* Quick stats */}
          <motion.dl
            variants={itemVariants}
            className="mx-auto mt-10 flex flex-wrap items-center justify-center gap-x-10 gap-y-3 font-mono text-sm"
          >
            <div className="flex items-baseline gap-2">
              <dt className="text-white/50">Effects</dt>
              <dd>
                <CountUp value={EFFECT_COUNT} />
              </dd>
            </div>
            <div className="flex items-baseline gap-2">
              <dt className="text-white/50">Categories</dt>
              <dd>
                <CountUp value={CATEGORIES.length - 1} />
              </dd>
            </div>
            <div className="flex items-baseline gap-2">
              <dt className="text-white/50">Dependencies</dt>
              <dd>
                <CountUp value={0} />
              </dd>
            </div>
          </motion.dl>
        </motion.div>

        {/* Live featured demos */}
        <div className="mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-3">
          {featured.map((effect, index) => (
            <motion.div
              key={effect.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.7,
                delay: 0.12 + index * 0.12,
                ease: EASE,
              }}
              className="group overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur transition-all duration-500 hover:-translate-y-1.5 hover:border-white/25 hover:bg-white/[0.06] hover:shadow-2xl hover:shadow-black/40"
            >
              <EffectPreview effect={effect} className="h-40" />
              <div className="flex items-center justify-between px-4 py-3">
                <span className="text-sm font-medium text-white/85">
                  {effect.name}
                </span>
                <span className="font-mono text-[10px] uppercase tracking-wider text-white/40 transition-colors duration-300 group-hover:text-[#f07025]">
                  live demo
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
