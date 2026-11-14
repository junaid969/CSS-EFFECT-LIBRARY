import type { Effect } from "./effects";

/**
 * Pro batch: 11 background effects + 10 animation effects (ids prefixed pg-).
 */
export const EFFECTS_BG_ANIM_PRO: Effect[] = [
  // ---------------------------------------------------------------- BACKGROUNDS
  {
    id: "pg-aurora-waves",
    name: "Aurora Waves",
    category: "backgrounds",
    description:
      "Two huge blurred gradient waves in pink, violet and cyan swirl and morph slowly behind each other.",
    tags: ["aurora", "waves", "gradient", "ambient"],
    html: `<div class="fx-pg-aurora-waves"></div>`,
    css: `.fx-pg-aurora-waves {
  position: absolute;
  inset: 0;
  overflow: hidden;
  background: #0b1120;
}
.fx-pg-aurora-waves::before,
.fx-pg-aurora-waves::after {
  content: "";
  position: absolute;
  left: -30%;
  top: -20%;
  width: 160%;
  height: 140%;
  filter: blur(52px);
  opacity: 0.5;
}
.fx-pg-aurora-waves::before {
  background: linear-gradient(115deg, #ec4899, #a78bfa 45%, #22d3ee);
  animation: fx-pg-aurora-waves-swirl-a 16s ease-in-out infinite alternate;
}
.fx-pg-aurora-waves::after {
  background: linear-gradient(245deg, #22d3ee, #ec4899 55%, #a78bfa);
  animation: fx-pg-aurora-waves-swirl-b 12s ease-in-out infinite alternate-reverse;
}
@keyframes fx-pg-aurora-waves-swirl-a {
  0% {
    transform: translate(-5%, 4%) rotate(0deg) scale(1);
    border-radius: 42% 58% 62% 38% / 55% 44% 56% 45%;
  }
  50% {
    border-radius: 58% 42% 46% 54% / 44% 58% 42% 56%;
  }
  100% {
    transform: translate(7%, -6%) rotate(24deg) scale(1.18);
    border-radius: 46% 54% 58% 42% / 52% 46% 54% 48%;
  }
}
@keyframes fx-pg-aurora-waves-swirl-b {
  0% {
    transform: translate(6%, -5%) rotate(14deg) scale(1.12);
    border-radius: 55% 45% 48% 52% / 46% 54% 46% 54%;
  }
  100% {
    transform: translate(-7%, 6%) rotate(-18deg) scale(0.92);
    border-radius: 44% 56% 52% 48% / 56% 44% 54% 46%;
  }
}`,
  },
  {
    id: "pg-stripe-candy",
    name: "Candy Stripe Scroll",
    category: "backgrounds",
    description:
      "Vivid diagonal candy stripes in orange, pink and amber scroll endlessly in one direction.",
    tags: ["stripes", "candy", "pattern", "scroll"],
    html: `<div class="fx-pg-stripe-candy"></div>`,
    css: `.fx-pg-stripe-candy {
  position: absolute;
  inset: 0;
  overflow: hidden;
  background: #0b1120;
}
.fx-pg-stripe-candy::before {
  content: "";
  position: absolute;
  left: -50%;
  top: -50%;
  width: 200%;
  height: 200%;
  background: repeating-linear-gradient(
    90deg,
    #f07025 0px,
    #f07025 20px,
    #ec4899 20px,
    #ec4899 40px,
    #fbbf24 40px,
    #fbbf24 60px,
    #ec4899 60px,
    #ec4899 80px
  );
  animation: fx-pg-stripe-candy-scroll 2.4s linear infinite;
}
.fx-pg-stripe-candy::after {
  content: "";
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse at center, transparent 40%, rgba(11, 17, 32, 0.6) 100%);
}
@keyframes fx-pg-stripe-candy-scroll {
  from {
    transform: rotate(45deg) translateX(0);
  }
  to {
    transform: rotate(45deg) translateX(80px);
  }
}`,
  },
  {
    id: "pg-bubble-rise",
    name: "Bubble Rise",
    category: "backgrounds",
    description:
      "Soft translucent bubbles of many sizes wobble upward from the bottom on staggered loops.",
    tags: ["bubbles", "float", "ambient"],
    html: `<div class="fx-pg-bubble-rise"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></div>`,
    css: `.fx-pg-bubble-rise {
  position: absolute;
  inset: 0;
  overflow: hidden;
  background: linear-gradient(180deg, #101a36, #0b1120);
}
.fx-pg-bubble-rise span {
  position: absolute;
  bottom: -24px;
  border-radius: 50%;
  background: radial-gradient(circle at 32% 30%, rgba(255, 255, 255, 0.75) 0 12%, rgba(34, 211, 238, 0.35) 32%, rgba(34, 211, 238, 0.08) 70%);
  box-shadow: inset -2px -3px 6px rgba(34, 211, 238, 0.4);
  opacity: 0;
  animation: fx-pg-bubble-rise-float 7s linear infinite;
}
.fx-pg-bubble-rise span:nth-child(1) { left: 6%; width: 20px; height: 20px; animation-duration: 8s; }
.fx-pg-bubble-rise span:nth-child(2) { left: 18%; width: 12px; height: 12px; animation-duration: 6s; animation-delay: 1.2s; }
.fx-pg-bubble-rise span:nth-child(3) { left: 30%; width: 26px; height: 26px; animation-duration: 9s; animation-delay: 2.8s; }
.fx-pg-bubble-rise span:nth-child(4) { left: 42%; width: 10px; height: 10px; animation-duration: 5.5s; animation-delay: 0.6s; }
.fx-pg-bubble-rise span:nth-child(5) { left: 54%; width: 18px; height: 18px; animation-duration: 7.5s; animation-delay: 3.4s; }
.fx-pg-bubble-rise span:nth-child(6) { left: 65%; width: 14px; height: 14px; animation-duration: 6.5s; animation-delay: 1.9s; }
.fx-pg-bubble-rise span:nth-child(7) { left: 76%; width: 24px; height: 24px; animation-duration: 8.5s; animation-delay: 4.2s; }
.fx-pg-bubble-rise span:nth-child(8) { left: 86%; width: 11px; height: 11px; animation-duration: 5s; animation-delay: 2.4s; }
.fx-pg-bubble-rise span:nth-child(9) { left: 94%; width: 16px; height: 16px; animation-duration: 7s; animation-delay: 5s; }
.fx-pg-bubble-rise span:nth-child(10) { left: 48%; width: 9px; height: 9px; animation-duration: 6.2s; animation-delay: 5.6s; }
@keyframes fx-pg-bubble-rise-float {
  0% {
    transform: translate(0, 0) scale(0.5);
    opacity: 0;
  }
  10% {
    opacity: 0.85;
  }
  30% {
    transform: translate(10px, -70px) scale(1);
  }
  55% {
    transform: translate(-9px, -140px);
  }
  80% {
    transform: translate(8px, -210px);
    opacity: 0.7;
  }
  100% {
    transform: translate(-4px, -260px) scale(1.05);
    opacity: 0;
  }
}`,
  },
  {
    id: "pg-conic-blur",
    name: "Conic Blur Spin",
    category: "backgrounds",
    description:
      "A giant heavily blurred conic rainbow spins slowly and fills the canvas with drifting color.",
    tags: ["conic", "rainbow", "blur", "gradient"],
    html: `<div class="fx-pg-conic-blur"></div>`,
    css: `.fx-pg-conic-blur {
  position: absolute;
  inset: 0;
  overflow: hidden;
  background: #0b1120;
}
.fx-pg-conic-blur::before {
  content: "";
  position: absolute;
  left: 50%;
  top: 50%;
  width: 260%;
  height: 260%;
  background: conic-gradient(
    from 0deg,
    #f07025,
    #ec4899,
    #a78bfa,
    #22d3ee,
    #34d399,
    #fbbf24,
    #f07025
  );
  filter: blur(60px);
  opacity: 0.55;
  animation: fx-pg-conic-blur-spin 18s linear infinite;
}
.fx-pg-conic-blur::after {
  content: "";
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse at center, transparent 30%, #0b1120 96%);
}
@keyframes fx-pg-conic-blur-spin {
  from {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  to {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}`,
  },
  {
    id: "pg-grid-pulse",
    name: "Grid Pulse Sweep",
    category: "backgrounds",
    description:
      "A faint wireframe grid with a bright radial glow that travels diagonally across the lines.",
    tags: ["grid", "glow", "pulse", "tech"],
    html: `<div class="fx-pg-grid-pulse"></div>`,
    css: `.fx-pg-grid-pulse {
  position: absolute;
  inset: 0;
  overflow: hidden;
  background: #0b1120;
}
.fx-pg-grid-pulse::before {
  content: "";
  position: absolute;
  inset: 0;
  background:
    linear-gradient(rgba(148, 163, 184, 0.18) 1px, transparent 1px),
    linear-gradient(90deg, rgba(148, 163, 184, 0.18) 1px, transparent 1px);
  background-size: 26px 26px;
  animation: fx-pg-grid-pulse-breathe 5s ease-in-out infinite alternate;
}
.fx-pg-grid-pulse::after {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 240px;
  height: 240px;
  margin: -120px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(34, 211, 238, 0.42) 0%, rgba(34, 211, 238, 0.14) 45%, transparent 70%);
  mix-blend-mode: screen;
  animation: fx-pg-grid-pulse-sweep 5s ease-in-out infinite alternate;
}
@keyframes fx-pg-grid-pulse-sweep {
  from {
    transform: translate(-40px, -30px) scale(0.85);
    opacity: 0.75;
  }
  to {
    transform: translate(560px, 160px) scale(1.1);
    opacity: 1;
  }
}
@keyframes fx-pg-grid-pulse-breathe {
  from {
    opacity: 0.65;
  }
  to {
    opacity: 1;
  }
}`,
  },
  {
    id: "pg-bokeh-drift",
    name: "Bokeh Drift",
    category: "backgrounds",
    description:
      "Large soft-focus bokeh discs in five colors drift lazily in different directions.",
    tags: ["bokeh", "blur", "ambient", "soft"],
    html: `<div class="fx-pg-bokeh-drift"><span></span><span></span><span></span><span></span><span></span><span></span></div>`,
    css: `.fx-pg-bokeh-drift {
  position: absolute;
  inset: 0;
  overflow: hidden;
  background: #0b1120;
}
.fx-pg-bokeh-drift span {
  position: absolute;
  border-radius: 50%;
  filter: blur(5px);
}
.fx-pg-bokeh-drift span:nth-child(1) {
  left: 6%;
  top: 12%;
  width: 96px;
  height: 96px;
  background: radial-gradient(circle at 50% 50%, rgba(236, 72, 153, 0.22) 52%, rgba(236, 72, 153, 0.5) 66%, transparent 72%);
  animation: fx-pg-bokeh-drift-a 11s ease-in-out infinite alternate;
}
.fx-pg-bokeh-drift span:nth-child(2) {
  right: 10%;
  top: 6%;
  width: 64px;
  height: 64px;
  background: radial-gradient(circle at 50% 50%, rgba(34, 211, 238, 0.22) 52%, rgba(34, 211, 238, 0.5) 66%, transparent 72%);
  animation: fx-pg-bokeh-drift-b 9s ease-in-out infinite alternate;
}
.fx-pg-bokeh-drift span:nth-child(3) {
  left: 22%;
  bottom: 4%;
  width: 74px;
  height: 74px;
  background: radial-gradient(circle at 50% 50%, rgba(251, 191, 36, 0.2) 52%, rgba(251, 191, 36, 0.48) 66%, transparent 72%);
  animation: fx-pg-bokeh-drift-c 12s ease-in-out infinite alternate;
}
.fx-pg-bokeh-drift span:nth-child(4) {
  right: 26%;
  bottom: 10%;
  width: 110px;
  height: 110px;
  background: radial-gradient(circle at 50% 50%, rgba(167, 139, 250, 0.18) 52%, rgba(167, 139, 250, 0.45) 66%, transparent 72%);
  animation: fx-pg-bokeh-drift-b 14s ease-in-out infinite alternate-reverse;
}
.fx-pg-bokeh-drift span:nth-child(5) {
  left: 46%;
  top: 30%;
  width: 52px;
  height: 52px;
  background: radial-gradient(circle at 50% 50%, rgba(52, 211, 153, 0.2) 52%, rgba(52, 211, 153, 0.5) 66%, transparent 72%);
  animation: fx-pg-bokeh-drift-a 8s ease-in-out infinite alternate-reverse;
}
.fx-pg-bokeh-drift span:nth-child(6) {
  right: 44%;
  top: 16%;
  width: 40px;
  height: 40px;
  background: radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.16) 52%, rgba(255, 255, 255, 0.4) 66%, transparent 72%);
  animation: fx-pg-bokeh-drift-c 10s ease-in-out infinite alternate-reverse;
}
@keyframes fx-pg-bokeh-drift-a {
  from {
    transform: translate(0, 0) scale(1);
  }
  to {
    transform: translate(56px, -34px) scale(1.14);
  }
}
@keyframes fx-pg-bokeh-drift-b {
  from {
    transform: translate(0, 0) scale(1.08);
  }
  to {
    transform: translate(-64px, 30px) scale(0.9);
  }
}
@keyframes fx-pg-bokeh-drift-c {
  from {
    transform: translate(-24px, 14px) scale(0.95);
  }
  to {
    transform: translate(44px, -26px) scale(1.12);
  }
}`,
  },
  {
    id: "pg-twinkle-dots",
    name: "Twinkle Dots",
    category: "backgrounds",
    description:
      "Tiny colored star dots twinkle on staggered rhythms across two layered fields.",
    tags: ["stars", "twinkle", "dots", "night"],
    html: `<div class="fx-pg-twinkle-dots"></div>`,
    css: `.fx-pg-twinkle-dots {
  position: absolute;
  inset: 0;
  overflow: hidden;
  background: radial-gradient(ellipse at 50% 0%, #101c3a 0%, #0b1120 70%);
}
.fx-pg-twinkle-dots::before,
.fx-pg-twinkle-dots::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 2px;
  height: 2px;
  border-radius: 50%;
  background: transparent;
}
.fx-pg-twinkle-dots::before {
  box-shadow: 24px 30px #22d3ee, 90px 80px #ffffff, 160px 40px #22d3ee,
    240px 120px #ffffff, 320px 60px #a78bfa, 410px 150px #22d3ee,
    480px 30px #ffffff, 560px 110px #a78bfa, 630px 60px #22d3ee,
    120px 170px #ffffff, 300px 180px #22d3ee, 520px 190px #ffffff,
    60px 130px #a78bfa, 700px 170px #22d3ee, 200px 20px #ffffff,
    380px 20px #a78bfa;
  animation: fx-pg-twinkle-dots-glow-a 2.2s ease-in-out infinite;
}
.fx-pg-twinkle-dots::after {
  width: 3px;
  height: 3px;
  box-shadow: 50px 60px #fbbf24, 140px 130px #ec4899, 210px 90px #fbbf24,
    280px 30px #ec4899, 350px 160px #fbbf24, 440px 90px #ec4899,
    510px 160px #fbbf24, 600px 130px #ec4899, 670px 40px #fbbf24,
    30px 180px #ec4899, 180px 110px #fbbf24, 420px 40px #ec4899,
    580px 20px #fbbf24, 730px 120px #ec4899;
  animation: fx-pg-twinkle-dots-glow-b 3.4s ease-in-out infinite;
}
@keyframes fx-pg-twinkle-dots-glow-a {
  0%,
  100% {
    opacity: 0.25;
  }
  18% {
    opacity: 1;
  }
  42% {
    opacity: 0.35;
  }
  70% {
    opacity: 0.9;
  }
}
@keyframes fx-pg-twinkle-dots-glow-b {
  0%,
  100% {
    opacity: 0.9;
  }
  25% {
    opacity: 0.2;
  }
  55% {
    opacity: 0.75;
  }
  80% {
    opacity: 0.3;
  }
}`,
  },
  {
    id: "pg-digital-rain",
    name: "Digital Rain",
    category: "backgrounds",
    description:
      "Thin neon light streaks fall continuously in masked columns at two different speeds.",
    tags: ["rain", "matrix", "neon", "cyber"],
    html: `<div class="fx-pg-digital-rain"></div>`,
    css: `.fx-pg-digital-rain {
  position: absolute;
  inset: 0;
  overflow: hidden;
  background-color: #0b1120;
  background-image: repeating-linear-gradient(90deg, rgba(148, 163, 184, 0.08) 0 1px, transparent 1px 42px);
}
.fx-pg-digital-rain::before,
.fx-pg-digital-rain::after {
  content: "";
  position: absolute;
  inset: 0;
  -webkit-mask-image: repeating-linear-gradient(90deg, #000 0 2px, transparent 2px 42px);
  mask-image: repeating-linear-gradient(90deg, #000 0 2px, transparent 2px 42px);
}
.fx-pg-digital-rain::before {
  background-image: repeating-linear-gradient(180deg, transparent 0 52px, rgba(34, 211, 238, 0.7) 52px 58px, transparent 58px 64px);
  animation: fx-pg-digital-rain-fall-a 1.4s linear infinite;
}
.fx-pg-digital-rain::after {
  background-image: repeating-linear-gradient(180deg, transparent 0 66px, rgba(52, 211, 153, 0.5) 66px 71px, transparent 71px 80px);
  -webkit-mask-image: repeating-linear-gradient(90deg, transparent 0 21px, #000 21px 23px, transparent 23px 42px);
  mask-image: repeating-linear-gradient(90deg, transparent 0 21px, #000 21px 23px, transparent 23px 42px);
  animation: fx-pg-digital-rain-fall-b 2.3s linear infinite;
}
@keyframes fx-pg-digital-rain-fall-a {
  from {
    background-position: 0 0;
  }
  to {
    background-position: 0 64px;
  }
}
@keyframes fx-pg-digital-rain-fall-b {
  from {
    background-position: 0 0;
  }
  to {
    background-position: 0 80px;
  }
}`,
  },
  {
    id: "pg-lava-lamp",
    name: "Lava Lamp Blobs",
    category: "backgrounds",
    description:
      "Two huge blurred blobs morph, stretch and drift like a slow-motion lava lamp.",
    tags: ["blobs", "lava", "blur", "morph"],
    html: `<div class="fx-pg-lava-lamp"></div>`,
    css: `.fx-pg-lava-lamp {
  position: absolute;
  inset: 0;
  overflow: hidden;
  background: #0b1120;
}
.fx-pg-lava-lamp::before,
.fx-pg-lava-lamp::after {
  content: "";
  position: absolute;
  width: 65%;
  height: 85%;
  filter: blur(42px);
  mix-blend-mode: screen;
  opacity: 0.55;
}
.fx-pg-lava-lamp::before {
  left: -8%;
  top: -12%;
  background: radial-gradient(circle at 40% 40%, #ec4899, #a78bfa 70%, transparent 75%);
  animation: fx-pg-lava-lamp-morph-a 14s ease-in-out infinite;
}
.fx-pg-lava-lamp::after {
  right: -10%;
  bottom: -18%;
  background: radial-gradient(circle at 60% 60%, #f07025, #ec4899 65%, transparent 72%);
  animation: fx-pg-lava-lamp-morph-b 11s ease-in-out infinite;
}
@keyframes fx-pg-lava-lamp-morph-a {
  0%,
  100% {
    transform: translate(0, 0) scale(1);
    border-radius: 46% 54% 58% 42% / 52% 46% 54% 48%;
  }
  33% {
    transform: translate(10%, 14%) scale(1.15);
    border-radius: 62% 38% 44% 56% / 44% 62% 38% 56%;
  }
  66% {
    transform: translate(-8%, -6%) scale(0.9);
    border-radius: 40% 60% 56% 44% / 58% 40% 60% 42%;
  }
}
@keyframes fx-pg-lava-lamp-morph-b {
  0%,
  100% {
    transform: translate(0, 0) scale(1.05);
    border-radius: 54% 46% 42% 58% / 48% 54% 46% 52%;
  }
  40% {
    transform: translate(-12%, -16%) scale(0.88);
    border-radius: 44% 56% 60% 40% / 56% 44% 58% 42%;
  }
  70% {
    transform: translate(8%, 10%) scale(1.18);
    border-radius: 58% 42% 48% 52% / 42% 58% 44% 56%;
  }
}`,
  },
  {
    id: "pg-checker-pulse",
    name: "Checker Pulse",
    category: "backgrounds",
    description:
      "A checkerboard of violet and cyan squares whose alternating cells breathe out of phase.",
    tags: ["checker", "pattern", "pulse"],
    html: `<div class="fx-pg-checker-pulse"></div>`,
    css: `.fx-pg-checker-pulse {
  position: absolute;
  inset: 0;
  overflow: hidden;
  background: #0b1120;
}
.fx-pg-checker-pulse::before,
.fx-pg-checker-pulse::after {
  content: "";
  position: absolute;
  inset: 0;
  background: repeating-conic-gradient(rgba(167, 139, 250, 0.55) 0% 25%, transparent 0% 50%) 0 0 / 44px 44px;
  animation: fx-pg-checker-pulse-breathe 3.2s ease-in-out infinite;
}
.fx-pg-checker-pulse::after {
  background: repeating-conic-gradient(rgba(34, 211, 238, 0.55) 0% 25%, transparent 0% 50%) 22px 22px / 44px 44px;
  animation-delay: -1.6s;
}
@keyframes fx-pg-checker-pulse-breathe {
  0%,
  100% {
    opacity: 0.15;
  }
  50% {
    opacity: 0.9;
  }
}`,
  },
  {
    id: "pg-sunrise-band",
    name: "Sunrise Band",
    category: "backgrounds",
    description:
      "A blurred amber-to-violet horizon band slowly shifts and breathes like a living sunrise.",
    tags: ["sunrise", "gradient", "horizon", "warm"],
    html: `<div class="fx-pg-sunrise-band"></div>`,
    css: `.fx-pg-sunrise-band {
  position: absolute;
  inset: 0;
  overflow: hidden;
  background: linear-gradient(180deg, #0b1120 0%, #131b33 55%, #0b1120 100%);
}
.fx-pg-sunrise-band::before {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  top: 28%;
  height: 44%;
  background: linear-gradient(90deg, #fbbf24, #f07025 25%, #ec4899 50%, #a78bfa 75%, #fbbf24);
  background-size: 200% 100%;
  filter: blur(26px);
  opacity: 0.8;
  animation: fx-pg-sunrise-band-shift 10s linear infinite,
    fx-pg-sunrise-band-breathe 5s ease-in-out infinite alternate;
}
.fx-pg-sunrise-band::after {
  content: "";
  position: absolute;
  left: 10%;
  right: 10%;
  bottom: 8%;
  height: 14%;
  background: linear-gradient(90deg, #fbbf24, #ec4899, #a78bfa);
  filter: blur(18px);
  opacity: 0.25;
  animation: fx-pg-sunrise-band-glow 5s ease-in-out infinite alternate;
}
@keyframes fx-pg-sunrise-band-shift {
  from {
    background-position: 0% 0%;
  }
  to {
    background-position: 200% 0%;
  }
}
@keyframes fx-pg-sunrise-band-breathe {
  from {
    transform: scaleY(0.85);
    opacity: 0.65;
  }
  to {
    transform: scaleY(1.1);
    opacity: 0.9;
  }
}
@keyframes fx-pg-sunrise-band-glow {
  from {
    opacity: 0.15;
  }
  to {
    opacity: 0.35;
  }
}`,
  },

  // ---------------------------------------------------------------- ANIMATIONS
  {
    id: "pg-levitate-orb",
    name: "Levitating Orb",
    category: "animations",
    description:
      "A glossy orange orb levitates in place while its ground shadow shrinks and grows in sync.",
    tags: ["orb", "levitate", "shadow"],
    html: `<div class="fx-pg-levitate-orb"></div>`,
    css: `.fx-pg-levitate-orb {
  position: relative;
  width: 60px;
  height: 96px;
}
.fx-pg-levitate-orb::before {
  content: "";
  position: absolute;
  left: 50%;
  top: 4px;
  width: 52px;
  height: 52px;
  margin-left: -26px;
  border-radius: 50%;
  background: radial-gradient(circle at 32% 28%, rgba(255, 255, 255, 0.85) 0 10%, transparent 12%),
    radial-gradient(circle at 35% 30%, #fbbf24, #f07025 55%, #c2410c 90%);
  box-shadow: 0 0 24px rgba(240, 112, 37, 0.45), inset 0 -6px 14px rgba(124, 45, 18, 0.55);
  animation: fx-pg-levitate-orb-float 2.8s ease-in-out infinite alternate;
}
.fx-pg-levitate-orb::after {
  content: "";
  position: absolute;
  left: 50%;
  bottom: 6px;
  width: 54px;
  height: 12px;
  margin-left: -27px;
  border-radius: 50%;
  background: radial-gradient(ellipse at center, rgba(0, 0, 0, 0.65) 0%, rgba(0, 0, 0, 0.25) 55%, transparent 75%);
  animation: fx-pg-levitate-orb-shadow 2.8s ease-in-out infinite alternate;
}
@keyframes fx-pg-levitate-orb-float {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-30px);
  }
}
@keyframes fx-pg-levitate-orb-shadow {
  from {
    transform: scaleX(1);
    opacity: 0.7;
  }
  to {
    transform: scaleX(0.55);
    opacity: 0.25;
  }
}`,
  },
  {
    id: "pg-gyro-rings",
    name: "Gyroscope Rings",
    category: "animations",
    description:
      "Three thin neon rings gyroscope around a pulsing amber core on different axes.",
    tags: ["rings", "3d", "gyroscope", "neon"],
    html: `<div class="fx-pg-gyro-rings"><span></span><span></span><span></span></div>`,
    css: `.fx-pg-gyro-rings {
  position: relative;
  width: 96px;
  height: 96px;
  transform-style: preserve-3d;
  perspective: 480px;
}
.fx-pg-gyro-rings span {
  position: absolute;
  inset: 0;
  border-radius: 50%;
}
.fx-pg-gyro-rings span:nth-child(1) {
  border: 2px solid #22d3ee;
  box-shadow: 0 0 12px rgba(34, 211, 238, 0.35), inset 0 0 12px rgba(34, 211, 238, 0.25);
  animation: fx-pg-gyro-rings-spin-a 4.2s linear infinite;
}
.fx-pg-gyro-rings span:nth-child(2) {
  border: 2px solid #ec4899;
  box-shadow: 0 0 12px rgba(236, 72, 153, 0.35), inset 0 0 12px rgba(236, 72, 153, 0.25);
  animation: fx-pg-gyro-rings-spin-b 5.6s linear infinite;
}
.fx-pg-gyro-rings span:nth-child(3) {
  border: 2px solid #a78bfa;
  box-shadow: 0 0 12px rgba(167, 139, 250, 0.35), inset 0 0 12px rgba(167, 139, 250, 0.25);
  animation: fx-pg-gyro-rings-spin-c 7s linear infinite;
}
.fx-pg-gyro-rings::after {
  content: "";
  position: absolute;
  left: 50%;
  top: 50%;
  width: 26px;
  height: 26px;
  margin: -13px 0 0 -13px;
  border-radius: 50%;
  background: radial-gradient(circle at 35% 30%, #fde68a, #fbbf24 55%, #b45309);
  animation: fx-pg-gyro-rings-core 1.8s ease-in-out infinite;
}
@keyframes fx-pg-gyro-rings-spin-a {
  from {
    transform: rotateX(68deg) rotateZ(0deg);
  }
  to {
    transform: rotateX(68deg) rotateZ(360deg);
  }
}
@keyframes fx-pg-gyro-rings-spin-b {
  from {
    transform: rotateY(68deg) rotateX(0deg);
  }
  to {
    transform: rotateY(68deg) rotateX(360deg);
  }
}
@keyframes fx-pg-gyro-rings-spin-c {
  from {
    transform: rotateX(24deg) rotateY(-30deg) rotateZ(0deg);
  }
  to {
    transform: rotateX(24deg) rotateY(-30deg) rotateZ(-360deg);
  }
}
@keyframes fx-pg-gyro-rings-core {
  0%,
  100% {
    transform: scale(1);
    box-shadow: 0 0 14px rgba(251, 191, 36, 0.55);
  }
  50% {
    transform: scale(1.18);
    box-shadow: 0 0 26px rgba(251, 191, 36, 0.85);
  }
}`,
  },
  {
    id: "pg-seesaw",
    name: "Seesaw Tilt",
    category: "animations",
    description:
      "A plank carrying two glowing weights tips back and forth above a violet pivot.",
    tags: ["seesaw", "tilt", "physics"],
    html: `<div class="fx-pg-seesaw"><span class="fx-pg-seesaw-plank"></span></div>`,
    css: `.fx-pg-seesaw {
  position: relative;
  width: 160px;
  height: 104px;
}
.fx-pg-seesaw::before {
  content: "";
  position: absolute;
  left: 50%;
  bottom: 2px;
  width: 140px;
  height: 3px;
  margin-left: -70px;
  border-radius: 2px;
  background: rgba(148, 163, 184, 0.35);
}
.fx-pg-seesaw::after {
  content: "";
  position: absolute;
  left: 50%;
  bottom: 5px;
  margin-left: -15px;
  width: 0;
  height: 0;
  border-left: 15px solid transparent;
  border-right: 15px solid transparent;
  border-bottom: 30px solid #a78bfa;
  filter: drop-shadow(0 0 8px rgba(167, 139, 250, 0.45));
}
.fx-pg-seesaw-plank {
  position: absolute;
  left: 50%;
  bottom: 34px;
  width: 136px;
  height: 9px;
  margin-left: -68px;
  border-radius: 5px;
  background: linear-gradient(180deg, #fbbf24, #f07025);
  box-shadow: 0 2px 8px rgba(240, 112, 37, 0.4);
  transform-origin: center center;
  animation: fx-pg-seesaw-tilt 3s ease-in-out infinite alternate;
}
.fx-pg-seesaw-plank::before,
.fx-pg-seesaw-plank::after {
  content: "";
  position: absolute;
  top: -17px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
}
.fx-pg-seesaw-plank::before {
  left: 6px;
  background: radial-gradient(circle at 32% 30%, #f9a8d4, #ec4899 60%, #9d174d);
  box-shadow: 0 0 10px rgba(236, 72, 153, 0.5);
}
.fx-pg-seesaw-plank::after {
  right: 6px;
  background: radial-gradient(circle at 32% 30%, #a5f3fc, #22d3ee 60%, #0e7490);
  box-shadow: 0 0 10px rgba(34, 211, 238, 0.5);
}
@keyframes fx-pg-seesaw-tilt {
  from {
    transform: rotate(9deg);
  }
  to {
    transform: rotate(-9deg);
  }
}`,
  },
  {
    id: "pg-rocket-bob",
    name: "Rocket Bob",
    category: "animations",
    description:
      "A tiny gradient rocket bobs up and down while its flame flickers underneath.",
    tags: ["rocket", "flame", "bob", "cute"],
    html: `<div class="fx-pg-rocket-bob"><span class="fx-pg-rocket-bob-fin fx-pg-rocket-bob-fin-l"></span><span class="fx-pg-rocket-bob-fin fx-pg-rocket-bob-fin-r"></span></div>`,
    css: `.fx-pg-rocket-bob {
  position: relative;
  width: 36px;
  height: 64px;
  border-radius: 20px 20px 12px 12px / 38px 38px 14px 14px;
  background: linear-gradient(180deg, #fbbf24 0%, #f07025 50%, #ec4899 100%);
  box-shadow: inset -5px -5px 10px rgba(157, 23, 77, 0.45),
    inset 4px 5px 8px rgba(255, 255, 255, 0.3),
    0 0 20px rgba(240, 112, 37, 0.35);
  animation: fx-pg-rocket-bob-hover 2.6s ease-in-out infinite alternate;
}
.fx-pg-rocket-bob::before {
  content: "";
  position: absolute;
  top: 13px;
  left: 50%;
  width: 17px;
  height: 17px;
  margin-left: -8.5px;
  border-radius: 50%;
  border: 3px solid #e2e8f0;
  background: radial-gradient(circle at 35% 30%, #cffafe, #22d3ee 60%, #0e7490);
  box-shadow: 0 0 8px rgba(34, 211, 238, 0.6);
}
.fx-pg-rocket-bob::after {
  content: "";
  position: absolute;
  bottom: -17px;
  left: 50%;
  width: 15px;
  height: 20px;
  margin-left: -7.5px;
  background: linear-gradient(0deg, rgba(236, 72, 153, 0), #f07025 40%, #fbbf24 90%);
  border-radius: 50% 50% 0 50%;
  transform-origin: top center;
  animation: fx-pg-rocket-bob-flicker 0.24s ease-in-out infinite alternate;
}
.fx-pg-rocket-bob-fin {
  position: absolute;
  bottom: 3px;
  width: 15px;
  height: 26px;
  background: linear-gradient(180deg, #ec4899, #9d174d);
}
.fx-pg-rocket-bob-fin-l {
  left: -11px;
  border-radius: 14px 0 4px 14px;
  transform: rotate(6deg);
  box-shadow: 0 0 10px rgba(236, 72, 153, 0.4);
}
.fx-pg-rocket-bob-fin-r {
  right: -11px;
  border-radius: 0 14px 14px 4px;
  transform: rotate(-6deg);
  box-shadow: 0 0 10px rgba(236, 72, 153, 0.4);
}
@keyframes fx-pg-rocket-bob-hover {
  from {
    transform: translateY(8px);
  }
  to {
    transform: translateY(-14px);
  }
}
@keyframes fx-pg-rocket-bob-flicker {
  from {
    transform: rotate(45deg) scale(0.82, 0.9);
    opacity: 0.75;
  }
  to {
    transform: rotate(45deg) scale(1.05, 1.15);
    opacity: 1;
  }
}`,
  },
  {
    id: "pg-elastic-stamp",
    name: "Elastic Stamp",
    category: "animations",
    description:
      "A badge stamp slams down with elastic overshoot, holds, and repeats its impression.",
    tags: ["stamp", "elastic", "overshoot"],
    html: `<div class="fx-pg-elastic-stamp"><span class="fx-pg-elastic-stamp-star"></span></div>`,
    css: `.fx-pg-elastic-stamp {
  position: relative;
  width: 86px;
  height: 86px;
  border-radius: 16px;
  border: 3px solid #f07025;
  background: rgba(240, 112, 37, 0.1);
  animation: fx-pg-elastic-stamp-slam 2.8s ease infinite;
}
.fx-pg-elastic-stamp::after {
  content: "";
  position: absolute;
  inset: 5px;
  border: 2px dashed rgba(240, 112, 37, 0.55);
  border-radius: 11px;
}
.fx-pg-elastic-stamp-star {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 42px;
  height: 42px;
  margin: -21px 0 0 -21px;
  background: linear-gradient(180deg, #fbbf24, #f07025);
  clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
  filter: drop-shadow(0 0 6px rgba(251, 191, 36, 0.6));
}
@keyframes fx-pg-elastic-stamp-slam {
  0% {
    transform: scale(2.4) rotate(-10deg);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  16% {
    transform: scale(0.9) rotate(2deg);
    box-shadow: 0 12px 30px rgba(240, 112, 37, 0.5);
  }
  26% {
    transform: scale(1.07) rotate(-1deg);
  }
  36% {
    transform: scale(0.98) rotate(0.5deg);
  }
  44%,
  82% {
    transform: scale(1) rotate(0deg);
    opacity: 1;
    box-shadow: 0 6px 18px rgba(240, 112, 37, 0.25);
  }
  92% {
    transform: scale(1);
    opacity: 0;
  }
  100% {
    transform: scale(2.4) rotate(-10deg);
    opacity: 0;
  }
}`,
  },
  {
    id: "pg-planet-moons",
    name: "Planet Moons",
    category: "animations",
    description:
      "A ringed violet planet with two glowing moons orbiting at different speeds and radii.",
    tags: ["planet", "orbit", "space", "moons"],
    html: `<div class="fx-pg-planet-moons"><span></span><span></span></div>`,
    css: `.fx-pg-planet-moons {
  position: relative;
  width: 120px;
  height: 120px;
}
.fx-pg-planet-moons::before {
  content: "";
  position: absolute;
  left: 50%;
  top: 50%;
  width: 46px;
  height: 46px;
  margin: -23px 0 0 -23px;
  border-radius: 50%;
  background: radial-gradient(circle at 32% 28%, #ddd6fe, #a78bfa 45%, #6d28d9 85%);
  box-shadow: 0 0 22px rgba(167, 139, 250, 0.55), inset -6px -6px 12px rgba(49, 46, 129, 0.6);
}
.fx-pg-planet-moons::after {
  content: "";
  position: absolute;
  left: 50%;
  top: 50%;
  width: 84px;
  height: 26px;
  margin: -13px 0 0 -42px;
  border: 3px solid rgba(251, 191, 36, 0.75);
  border-radius: 50%;
  transform: rotate(-16deg);
  box-shadow: 0 0 10px rgba(251, 191, 36, 0.3), inset 0 0 10px rgba(251, 191, 36, 0.2);
}
.fx-pg-planet-moons span {
  position: absolute;
  left: 50%;
  top: 50%;
  border-radius: 50%;
}
.fx-pg-planet-moons span:nth-child(1) {
  width: 78px;
  height: 78px;
  margin: -39px 0 0 -39px;
  animation: fx-pg-planet-moons-orbit-a 5.5s linear infinite;
}
.fx-pg-planet-moons span:nth-child(2) {
  width: 116px;
  height: 116px;
  margin: -58px 0 0 -58px;
  animation: fx-pg-planet-moons-orbit-b 9s linear infinite;
}
.fx-pg-planet-moons span::before {
  content: "";
  position: absolute;
  left: 50%;
  top: -5px;
  width: 11px;
  height: 11px;
  margin-left: -5.5px;
  border-radius: 50%;
  background: radial-gradient(circle at 32% 30%, #a5f3fc, #22d3ee 60%, #155e75);
  box-shadow: 0 0 8px rgba(34, 211, 238, 0.7);
}
.fx-pg-planet-moons span:nth-child(2)::before {
  top: auto;
  bottom: -4px;
  width: 8px;
  height: 8px;
  margin-left: -4px;
  background: radial-gradient(circle at 32% 30%, #fbcfe8, #ec4899 60%, #9d174d);
  box-shadow: 0 0 8px rgba(236, 72, 153, 0.7);
}
@keyframes fx-pg-planet-moons-orbit-a {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
@keyframes fx-pg-planet-moons-orbit-b {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(-360deg);
  }
}`,
  },
  {
    id: "pg-step-dots",
    name: "Walking Step Dots",
    category: "animations",
    description:
      "Four colored dots hop along a faint track one after another, pausing between steps.",
    tags: ["dots", "steps", "loader", "walk"],
    html: `<div class="fx-pg-step-dots"><span></span><span></span><span></span><span></span></div>`,
    css: `.fx-pg-step-dots {
  position: relative;
  width: 150px;
  height: 22px;
}
.fx-pg-step-dots::before {
  content: "";
  position: absolute;
  left: 0;
  right: 8px;
  bottom: 1px;
  height: 2px;
  border-radius: 1px;
  background: rgba(148, 163, 184, 0.25);
}
.fx-pg-step-dots span {
  position: absolute;
  left: 0;
  top: 6px;
  width: 11px;
  height: 11px;
  border-radius: 50%;
  opacity: 0;
  animation: fx-pg-step-dots-walk 3.6s linear infinite;
}
.fx-pg-step-dots span:nth-child(1) {
  background: #f07025;
  box-shadow: 0 0 10px rgba(240, 112, 37, 0.6);
  animation-delay: 0s;
}
.fx-pg-step-dots span:nth-child(2) {
  background: #ec4899;
  box-shadow: 0 0 10px rgba(236, 72, 153, 0.6);
  animation-delay: -0.9s;
}
.fx-pg-step-dots span:nth-child(3) {
  background: #22d3ee;
  box-shadow: 0 0 10px rgba(34, 211, 238, 0.6);
  animation-delay: -1.8s;
}
.fx-pg-step-dots span:nth-child(4) {
  background: #34d399;
  box-shadow: 0 0 10px rgba(52, 211, 153, 0.6);
  animation-delay: -2.7s;
}
@keyframes fx-pg-step-dots-walk {
  0% {
    transform: translate(0, 0);
    opacity: 0;
  }
  5% {
    opacity: 1;
  }
  12% {
    transform: translate(0, 0);
  }
  24% {
    transform: translate(30px, -7px);
  }
  30% {
    transform: translate(34px, 0);
  }
  36% {
    transform: translate(34px, 0);
  }
  48% {
    transform: translate(64px, -7px);
  }
  54% {
    transform: translate(68px, 0);
  }
  60% {
    transform: translate(68px, 0);
  }
  72% {
    transform: translate(98px, -7px);
  }
  78% {
    transform: translate(102px, 0);
  }
  84% {
    transform: translate(102px, 0);
    opacity: 1;
  }
  96% {
    transform: translate(136px, -5px);
    opacity: 0.9;
  }
  100% {
    transform: translate(140px, 0);
    opacity: 0;
  }
}`,
  },
  {
    id: "pg-swing-bell",
    name: "Swinging Bell",
    category: "animations",
    description:
      "A golden bell swings from its knob with a decaying wobble, rests, then rings again.",
    tags: ["bell", "swing", "wobble"],
    html: `<div class="fx-pg-swing-bell"><span class="fx-pg-swing-bell-lip"></span></div>`,
    css: `.fx-pg-swing-bell {
  position: relative;
  width: 52px;
  height: 58px;
  transform-origin: 50% -12px;
  background: linear-gradient(180deg, #fde68a 0%, #fbbf24 45%, #f07025 100%);
  border-radius: 26px 26px 10px 10px / 46px 46px 10px 10px;
  box-shadow: inset -4px -4px 8px rgba(180, 83, 9, 0.5), 0 0 18px rgba(251, 191, 36, 0.35);
  animation: fx-pg-swing-bell-ring 3s ease-in-out infinite;
}
.fx-pg-swing-bell::before {
  content: "";
  position: absolute;
  top: -7px;
  left: 50%;
  width: 10px;
  height: 10px;
  margin-left: -5px;
  border-radius: 50%;
  background: radial-gradient(circle at 35% 30%, #fde68a, #d97706);
}
.fx-pg-swing-bell::after {
  content: "";
  position: absolute;
  bottom: -8px;
  left: 50%;
  width: 10px;
  height: 10px;
  margin-left: -5px;
  border-radius: 50%;
  background: radial-gradient(circle at 35% 30%, #fbbf24, #b45309);
  box-shadow: 0 0 8px rgba(251, 191, 36, 0.5);
  animation: fx-pg-swing-bell-clap 3s ease-in-out infinite;
}
.fx-pg-swing-bell-lip {
  position: absolute;
  left: 50%;
  bottom: -3px;
  width: 58px;
  height: 9px;
  margin-left: -29px;
  border-radius: 5px;
  background: linear-gradient(180deg, #f07025, #b45309);
  box-shadow: 0 2px 8px rgba(180, 83, 9, 0.5);
}
@keyframes fx-pg-swing-bell-ring {
  0%,
  100% {
    transform: rotate(0deg);
  }
  6% {
    transform: rotate(15deg);
  }
  16% {
    transform: rotate(-12deg);
  }
  26% {
    transform: rotate(9deg);
  }
  36% {
    transform: rotate(-6deg);
  }
  46% {
    transform: rotate(4deg);
  }
  56% {
    transform: rotate(-2deg);
  }
  66% {
    transform: rotate(1deg);
  }
  76% {
    transform: rotate(0deg);
  }
}
@keyframes fx-pg-swing-bell-clap {
  0%,
  100% {
    transform: translateX(0);
  }
  8% {
    transform: translateX(5px);
  }
  18% {
    transform: translateX(-4px);
  }
  28% {
    transform: translateX(3px);
  }
  38% {
    transform: translateX(-2px);
  }
  48% {
    transform: translateX(1px);
  }
  60%,
  100% {
    transform: translateX(0);
  }
}`,
  },
  {
    id: "pg-pinwheel",
    name: "Pinwheel Spin",
    category: "animations",
    description:
      "A four-blade pinwheel on a stick spins with playful bursts of fast and slow rotation.",
    tags: ["pinwheel", "spin", "toy"],
    html: `<div class="fx-pg-pinwheel"><span class="fx-pg-pinwheel-wheel"><span></span><span></span><span></span><span></span></span></div>`,
    css: `.fx-pg-pinwheel {
  position: relative;
  width: 64px;
  height: 116px;
}
.fx-pg-pinwheel::before {
  content: "";
  position: absolute;
  left: 50%;
  top: 58px;
  width: 5px;
  height: 56px;
  margin-left: -2.5px;
  border-radius: 3px;
  background: linear-gradient(180deg, #cbd5e1, #64748b);
}
.fx-pg-pinwheel-wheel {
  position: absolute;
  left: 2px;
  top: 0;
  width: 60px;
  height: 60px;
  filter: drop-shadow(0 0 10px rgba(236, 72, 153, 0.35));
  animation: fx-pg-pinwheel-spin 5s infinite;
}
.fx-pg-pinwheel-wheel span {
  position: absolute;
  left: 0;
  top: 0;
  width: 30px;
  height: 30px;
  transform-origin: 100% 100%;
  border-radius: 100% 0 12% 0;
}
.fx-pg-pinwheel-wheel span:nth-child(1) {
  background: #f07025;
  transform: rotate(0deg);
}
.fx-pg-pinwheel-wheel span:nth-child(2) {
  background: #ec4899;
  transform: rotate(90deg);
}
.fx-pg-pinwheel-wheel span:nth-child(3) {
  background: #22d3ee;
  transform: rotate(180deg);
}
.fx-pg-pinwheel-wheel span:nth-child(4) {
  background: #a78bfa;
  transform: rotate(270deg);
}
.fx-pg-pinwheel-wheel::after {
  content: "";
  position: absolute;
  left: 50%;
  top: 50%;
  width: 14px;
  height: 14px;
  margin: -7px 0 0 -7px;
  border-radius: 50%;
  background: #0b1120;
  box-shadow: 0 0 0 3px #fbbf24;
}
@keyframes fx-pg-pinwheel-spin {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0.55, 0.05, 0.35, 1);
  }
  30% {
    transform: rotate(560deg);
    animation-timing-function: ease-in-out;
  }
  55% {
    transform: rotate(720deg);
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  100% {
    transform: rotate(1080deg);
  }
}`,
  },
  {
    id: "pg-cascade-balls",
    name: "Cascade Balls",
    category: "animations",
    description:
      "Three glossy balls bounce in a staggered cascade, squashing flat at every impact.",
    tags: ["balls", "bounce", "squash", "cascade"],
    html: `<div class="fx-pg-cascade-balls"><span></span><span></span><span></span></div>`,
    css: `.fx-pg-cascade-balls {
  position: relative;
  width: 96px;
  height: 84px;
}
.fx-pg-cascade-balls::before {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 2px;
  border-radius: 1px;
  background: rgba(148, 163, 184, 0.3);
}
.fx-pg-cascade-balls span {
  position: absolute;
  bottom: 2px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  transform-origin: center bottom;
  animation: fx-pg-cascade-balls-bounce 1.5s cubic-bezier(0.3, 0, 0.6, 1) infinite;
}
.fx-pg-cascade-balls span:nth-child(1) {
  left: 4px;
  background: radial-gradient(circle at 32% 30%, #fcd34d, #f07025 60%, #9a3412);
  box-shadow: 0 0 12px rgba(240, 112, 37, 0.55);
}
.fx-pg-cascade-balls span:nth-child(2) {
  left: 38px;
  background: radial-gradient(circle at 32% 30%, #a5f3fc, #22d3ee 60%, #155e75);
  box-shadow: 0 0 12px rgba(34, 211, 238, 0.55);
  animation-delay: 0.25s;
}
.fx-pg-cascade-balls span:nth-child(3) {
  left: 72px;
  background: radial-gradient(circle at 32% 30%, #6ee7b7, #34d399 60%, #065f46);
  box-shadow: 0 0 12px rgba(52, 211, 153, 0.55);
  animation-delay: 0.5s;
}
@keyframes fx-pg-cascade-balls-bounce {
  0% {
    transform: translateY(0) scale(1.3, 0.65);
  }
  14% {
    transform: translateY(0) scale(1, 1);
  }
  50% {
    transform: translateY(-58px) scale(0.92, 1.08);
  }
  86% {
    transform: translateY(0) scale(1, 1);
  }
  100% {
    transform: translateY(0) scale(1.3, 0.65);
  }
}`,
  },
];
