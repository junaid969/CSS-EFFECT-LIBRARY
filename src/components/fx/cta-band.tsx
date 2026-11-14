"use client";

import { useRef } from "react";
import { ArrowDown } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { EFFECT_COUNT } from "@/data/effects";
import { EASE } from "./motion-primitives";

export function CtaBand() {
  const bandRef = useRef<HTMLDivElement>(null);

  // Orbs drift apart as the band scrolls through the viewport
  const { scrollYProgress } = useScroll({
    target: bandRef,
    offset: ["start end", "end start"],
  });
  const orbLeftY = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const orbRightY = useTransform(scrollYProgress, [0, 1], [-40, 60]);

  return (
    <section aria-label="Get started">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20 lg:px-8">
        <motion.div
          ref={bandRef}
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: EASE }}
          className="relative overflow-hidden rounded-2xl bg-slate-950 px-6 py-14 text-center text-white sm:px-12 md:py-16"
        >
          {/* Parallax glow */}
          <motion.div
            aria-hidden="true"
            style={{ y: orbLeftY }}
            className="pointer-events-none absolute -left-20 -top-20 h-56 w-56"
          >
            <div className="fx-float h-full w-full rounded-full bg-[#f07025]/25 blur-[90px]" />
          </motion.div>
          <motion.div
            aria-hidden="true"
            style={{ y: orbRightY }}
            className="pointer-events-none absolute -bottom-24 -right-16 h-56 w-56"
          >
            <div className="fx-float-slow h-full w-full rounded-full bg-[#ec4899]/20 blur-[90px]" />
          </motion.div>

          <div className="relative">
            <motion.h2
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.65, delay: 0.1, ease: EASE }}
              className="mx-auto max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl"
            >
              Ready to ship something beautiful?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.65, delay: 0.2, ease: EASE }}
              className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/70"
            >
              {EFFECT_COUNT} hand-crafted effects are waiting in the gallery.
              Find the one your project needs and copy it in a single click —
              free, forever.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.65, delay: 0.3, ease: EASE }}
              className="mt-8"
            >
              <a
                href="#gallery"
                className="fx-btn-shine inline-flex h-12 items-center gap-2 rounded-full bg-[#f07025] px-8 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#e0611a] hover:shadow-lg hover:shadow-[#f07025]/30 active:translate-y-0 active:scale-[0.97]"
              >
                Browse the library
                <ArrowDown className="h-4 w-4" />
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
