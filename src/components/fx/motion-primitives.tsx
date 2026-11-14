"use client";

import { motion, MotionConfig } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Shared motion design system for CSS Effects Lab.
 * One easing curve + consistent durations keep every animation
 * feeling like it belongs to the same product.
 */

/** Premium ease-out curve (fast start, silky settle). */
export const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

/** Global motion config: honors the user's reduced-motion preference. */
export function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}

interface RevealProps {
  children: ReactNode;
  /** Extra delay in seconds (used to stagger siblings). */
  delay?: number;
  /** Initial vertical offset in px. */
  y?: number;
  duration?: number;
  className?: string;
}

/** Fade + rise once the element scrolls into view. */
export function Reveal({
  children,
  delay = 0,
  y = 26,
  duration = 0.65,
  className,
}: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-70px" }}
      transition={{ duration, delay, ease: EASE }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/** Gentle page-load transition for the whole app shell. */
export function PageTransition({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: EASE }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
