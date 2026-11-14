import { EFFECTS_2026 } from "./effects-2026";
import { EFFECTS_BUTTONS_PRO } from "./effects-buttons-pro";
import { EFFECTS_LOADERS_PRO } from "./effects-loaders-pro";
import { EFFECTS_TEXT_PRO } from "./effects-text-pro";
import { EFFECTS_HOVER_PRO } from "./effects-hover-pro";
import { EFFECTS_BG_ANIM_PRO } from "./effects-bg-anim-pro";

export type EffectCategory =
  | "buttons"
  | "loaders"
  | "text"
  | "hover"
  | "backgrounds"
  | "animations";

export interface Effect {
  id: string;
  name: string;
  category: EffectCategory;
  description: string;
  tags: string[];
  /** Raw HTML used for the live preview (also shown as copyable code) */
  html: string;
  /** Pure CSS used for the live preview (also shown as copyable code) */
  css: string;
}

export const CATEGORIES: { id: EffectCategory | "all"; label: string }[] = [
  { id: "all", label: "All Effects" },
  { id: "buttons", label: "Buttons" },
  { id: "loaders", label: "Loaders" },
  { id: "text", label: "Text Effects" },
  { id: "hover", label: "Hover Cards" },
  { id: "backgrounds", label: "Backgrounds" },
  { id: "animations", label: "Animations" },
];

const BASE_EFFECTS: Effect[] = [
  // ---------------------------------------------------------------- BUTTONS
  {
    id: "neon-glow-btn",
    name: "Neon Glow Button",
    category: "buttons",
    description:
      "A transparent button wrapped in a cyan neon aura that floods with light on hover.",
    tags: ["hover", "glow", "neon"],
    html: `<button class="fx-neon-btn">Hover Me</button>`,
    css: `.fx-neon-btn {
  padding: 14px 36px;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 1px;
  color: #22d3ee;
  background: transparent;
  border: 2px solid #22d3ee;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 0 10px rgba(34, 211, 238, 0.35),
    inset 0 0 10px rgba(34, 211, 238, 0.08);
}
.fx-neon-btn:hover {
  color: #0b1120;
  background: #22d3ee;
  box-shadow: 0 0 20px rgba(34, 211, 238, 0.8),
    0 0 60px rgba(34, 211, 238, 0.45);
}`,
  },
  {
    id: "slide-fill-btn",
    name: "Slide Fill Button",
    category: "buttons",
    description:
      "An orange layer slides in from the left behind the label, flipping the text color.",
    tags: ["hover", "fill", "slide"],
    html: `<button class="fx-slide-btn">Slide Fill</button>`,
    css: `.fx-slide-btn {
  position: relative;
  padding: 14px 36px;
  font-size: 16px;
  font-weight: 600;
  color: #f07025;
  background: transparent;
  border: 2px solid #f07025;
  border-radius: 999px;
  cursor: pointer;
  overflow: hidden;
  z-index: 1;
  transition: color 0.3s ease;
}
.fx-slide-btn::before {
  content: "";
  position: absolute;
  inset: 0;
  background: #f07025;
  transform: translateX(-101%);
  transition: transform 0.35s cubic-bezier(0.65, 0, 0.35, 1);
  z-index: -1;
}
.fx-slide-btn:hover {
  color: #ffffff;
}
.fx-slide-btn:hover::before {
  transform: translateX(0);
}`,
  },
  {
    id: "border-trace-btn",
    name: "Border Trace Button",
    category: "buttons",
    description:
      "Two corners draw the border around the button when you hover, like a live sketch.",
    tags: ["hover", "border", "draw"],
    html: `<button class="fx-trace-btn">Trace Border</button>`,
    css: `.fx-trace-btn {
  position: relative;
  padding: 14px 36px;
  font-size: 16px;
  font-weight: 600;
  color: #e2e8f0;
  background: transparent;
  border: none;
  cursor: pointer;
}
.fx-trace-btn::before,
.fx-trace-btn::after {
  content: "";
  position: absolute;
  width: 0;
  height: 0;
  border: 2px solid transparent;
  transition: width 0.25s ease 0.1s, height 0.25s ease;
}
.fx-trace-btn::before {
  top: 0;
  left: 0;
  border-top-color: #f07025;
  border-left-color: #f07025;
}
.fx-trace-btn::after {
  bottom: 0;
  right: 0;
  border-bottom-color: #f07025;
  border-right-color: #f07025;
}
.fx-trace-btn:hover::before,
.fx-trace-btn:hover::after {
  width: 100%;
  height: 100%;
}`,
  },
  {
    id: "shine-sweep-btn",
    name: "Shine Sweep Button",
    category: "buttons",
    description:
      "A diagonal light beam sweeps across the button once on every hover.",
    tags: ["hover", "shine", "sweep"],
    html: `<button class="fx-shine-btn">Shine Sweep</button>`,
    css: `.fx-shine-btn {
  position: relative;
  padding: 14px 36px;
  font-size: 16px;
  font-weight: 600;
  color: #fafafa;
  background: #18181b;
  border: 1px solid #3f3f46;
  border-radius: 10px;
  cursor: pointer;
  overflow: hidden;
}
.fx-shine-btn::after {
  content: "";
  position: absolute;
  top: 0;
  left: -75%;
  width: 50%;
  height: 100%;
  background: linear-gradient(
    120deg,
    transparent,
    rgba(255, 255, 255, 0.35),
    transparent
  );
  transform: skewX(-20deg);
}
.fx-shine-btn:hover::after {
  animation: fx-shine-sweep 0.9s ease;
}
@keyframes fx-shine-sweep {
  to {
    left: 125%;
  }
}`,
  },
  {
    id: "push-3d-btn",
    name: "3D Push Button",
    category: "buttons",
    description:
      "A chunky red button with a hard shadow that physically presses down when clicked.",
    tags: ["click", "3d", "press"],
    html: `<button class="fx-push-btn">Push Me</button>`,
    css: `.fx-push-btn {
  padding: 14px 36px;
  font-size: 16px;
  font-weight: 700;
  color: #ffffff;
  background: #ef4444;
  border: none;
  border-radius: 10px;
  box-shadow: 0 6px 0 #991b1b;
  cursor: pointer;
  transition: all 0.12s ease;
}
.fx-push-btn:hover {
  filter: brightness(1.08);
}
.fx-push-btn:active {
  transform: translateY(6px);
  box-shadow: 0 0 0 #991b1b;
}`,
  },
  {
    id: "gradient-flow-btn",
    name: "Gradient Flow Button",
    category: "buttons",
    description:
      "A four-color gradient endlessly flows through the button and gently scales on hover.",
    tags: ["gradient", "animated", "hover"],
    html: `<button class="fx-flow-btn">Gradient Flow</button>`,
    css: `.fx-flow-btn {
  padding: 14px 36px;
  font-size: 16px;
  font-weight: 600;
  color: #ffffff;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  background: linear-gradient(270deg, #f07025, #ec4899, #8b5cf6, #f07025);
  background-size: 300% 300%;
  animation: fx-flow-shift 4s ease infinite;
  transition: transform 0.2s ease;
}
.fx-flow-btn:hover {
  transform: scale(1.06);
}
@keyframes fx-flow-shift {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}`,
  },

  // ---------------------------------------------------------------- LOADERS
  {
    id: "ring-spinner",
    name: "Classic Ring Spinner",
    category: "loaders",
    description:
      "The timeless loading ring: a faded track with a single spinning accent arc.",
    tags: ["spinner", "loading", "classic"],
    html: `<div class="fx-ring-spinner" aria-label="Loading"></div>`,
    css: `.fx-ring-spinner {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  border: 5px solid rgba(255, 255, 255, 0.15);
  border-top-color: #f07025;
  animation: fx-ring-spin 0.9s linear infinite;
}
@keyframes fx-ring-spin {
  to {
    transform: rotate(360deg);
  }
}`,
  },
  {
    id: "bounce-dots",
    name: "Bouncing Dots Loader",
    category: "loaders",
    description:
      "Three dots bounce in sequence with a warm color gradient, perfect for chat loading states.",
    tags: ["dots", "bounce", "loading"],
    html: `<div class="fx-bounce-dots"><span></span><span></span><span></span></div>`,
    css: `.fx-bounce-dots {
  display: flex;
  gap: 10px;
}
.fx-bounce-dots span {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: #f07025;
  animation: fx-dots-bounce 0.6s ease-in-out infinite alternate;
}
.fx-bounce-dots span:nth-child(2) {
  background: #fb923c;
  animation-delay: 0.2s;
}
.fx-bounce-dots span:nth-child(3) {
  background: #fdba74;
  animation-delay: 0.4s;
}
@keyframes fx-dots-bounce {
  to {
    transform: translateY(-16px);
    opacity: 0.55;
  }
}`,
  },
  {
    id: "dual-ring",
    name: "Dual Counter-Ring",
    category: "loaders",
    description:
      "Two rings spin in opposite directions around the same axis for a hypnotic effect.",
    tags: ["spinner", "dual", "orbit"],
    html: `<div class="fx-dual-ring" aria-label="Loading"></div>`,
    css: `.fx-dual-ring {
  position: relative;
  width: 60px;
  height: 60px;
}
.fx-dual-ring::before,
.fx-dual-ring::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 50%;
  border: 4px solid transparent;
}
.fx-dual-ring::before {
  border-top-color: #22d3ee;
  animation: fx-dual-spin 1.2s linear infinite;
}
.fx-dual-ring::after {
  inset: 10px;
  border-bottom-color: #f07025;
  animation: fx-dual-spin 1.2s linear reverse infinite;
}
@keyframes fx-dual-spin {
  to {
    transform: rotate(360deg);
  }
}`,
  },
  {
    id: "typing-dots",
    name: "Typing Indicator",
    category: "loaders",
    description:
      "The familiar chat bubble with three blinking dots that wave in and out.",
    tags: ["chat", "typing", "blink"],
    html: `<div class="fx-typing"><span></span><span></span><span></span></div>`,
    css: `.fx-typing {
  display: flex;
  gap: 6px;
  padding: 16px 20px;
  background: #1e293b;
  border: 1px solid #334155;
  border-radius: 999px;
}
.fx-typing span {
  width: 8px;
  height: 8px;
  background: #94a3b8;
  border-radius: 50%;
  animation: fx-typing-blink 1.2s infinite;
}
.fx-typing span:nth-child(2) {
  animation-delay: 0.2s;
}
.fx-typing span:nth-child(3) {
  animation-delay: 0.4s;
}
@keyframes fx-typing-blink {
  0%,
  80%,
  100% {
    opacity: 0.25;
    transform: scale(0.8);
  }
  40% {
    opacity: 1;
    transform: scale(1);
  }
}`,
  },
  {
    id: "striped-bar",
    name: "Striped Progress Bar",
    category: "loaders",
    description:
      "A progress bar with candy-stripe texture that scrolls forever while work happens.",
    tags: ["progress", "stripes", "indeterminate"],
    html: `<div class="fx-progress"><div class="fx-progress-bar"></div></div>`,
    css: `.fx-progress {
  width: 220px;
  height: 14px;
  background: #1e293b;
  border: 1px solid #334155;
  border-radius: 999px;
  overflow: hidden;
}
.fx-progress-bar {
  height: 100%;
  width: 62%;
  border-radius: 999px;
  background: repeating-linear-gradient(
    45deg,
    #f07025 0 12px,
    #c2591d 12px 24px
  );
  background-size: 34px 34px;
  animation: fx-progress-stripes 0.8s linear infinite;
}
@keyframes fx-progress-stripes {
  to {
    background-position: 34px 0;
  }
}`,
  },
  {
    id: "orbit-loader",
    name: "Orbit Loader",
    category: "loaders",
    description:
      "A glowing satellite orbits a dashed ring while the ring itself slowly rotates.",
    tags: ["orbit", "satellite", "glow"],
    html: `<div class="fx-orbit" aria-label="Loading"></div>`,
    css: `.fx-orbit {
  position: relative;
  width: 70px;
  height: 70px;
}
.fx-orbit span {
  position: absolute;
  inset: 0;
  border-radius: 50%;
  border: 2px dashed rgba(240, 112, 37, 0.4);
  animation: fx-orbit-spin 8s linear infinite;
}
.fx-orbit::before {
  content: "";
  position: absolute;
  top: 0;
  left: 50%;
  margin-left: -7px;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: #f07025;
  box-shadow: 0 0 12px rgba(240, 112, 37, 0.8);
  transform-origin: 7px 35px;
  animation: fx-orbit-spin 2s linear infinite;
}
@keyframes fx-orbit-spin {
  to {
    transform: rotate(360deg);
  }
}`,
  },

  // ------------------------------------------------------------ TEXT EFFECTS
  {
    id: "gradient-text",
    name: "Animated Gradient Text",
    category: "text",
    description:
      "A moving multi-color gradient painted inside the letters using background-clip.",
    tags: ["gradient", "animated", "headline"],
    html: `<h2 class="fx-gradient-text">CSS Effects</h2>`,
    css: `.fx-gradient-text {
  font-size: 40px;
  font-weight: 800;
  letter-spacing: 1px;
  background: linear-gradient(90deg, #f07025, #ec4899, #22d3ee, #f07025);
  background-size: 300% auto;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  animation: fx-gradient-flow 4s linear infinite;
}
@keyframes fx-gradient-flow {
  to {
    background-position: 300% center;
  }
}`,
  },
  {
    id: "glitch-text",
    name: "Glitch Text",
    category: "text",
    description:
      "Cyberpunk-style glitch with sliced orange and cyan layers jittering behind the text.",
    tags: ["glitch", "cyberpunk", "clip-path"],
    html: `<h2 class="fx-glitch-text" data-text="GLITCH">GLITCH</h2>`,
    css: `.fx-glitch-text {
  position: relative;
  font-size: 40px;
  font-weight: 800;
  letter-spacing: 2px;
  color: #fafafa;
}
.fx-glitch-text::before,
.fx-glitch-text::after {
  content: attr(data-text);
  position: absolute;
  inset: 0;
}
.fx-glitch-text::before {
  color: #f07025;
  clip-path: inset(0 0 55% 0);
  animation: fx-glitch-a 2.4s infinite linear alternate;
}
.fx-glitch-text::after {
  color: #22d3ee;
  clip-path: inset(55% 0 0 0);
  animation: fx-glitch-b 3.1s infinite linear alternate;
}
@keyframes fx-glitch-a {
  0% {
    transform: translate(0);
  }
  20% {
    transform: translate(-3px, 2px);
  }
  40% {
    transform: translate(2px, -2px);
  }
  60% {
    transform: translate(-2px, -1px);
  }
  80% {
    transform: translate(3px, 1px);
  }
  100% {
    transform: translate(0);
  }
}
@keyframes fx-glitch-b {
  0% {
    transform: translate(0);
  }
  25% {
    transform: translate(3px, -2px);
  }
  50% {
    transform: translate(-3px, 2px);
  }
  75% {
    transform: translate(2px, 2px);
  }
  100% {
    transform: translate(0);
  }
}`,
  },
  {
    id: "typewriter",
    name: "Typewriter Text",
    category: "text",
    description:
      "Text typed character by character with a blinking caret, then deleted and retyped.",
    tags: ["typewriter", "steps", "caret"],
    html: `<h2 class="fx-typewriter">Pure CSS. No JS.</h2>`,
    css: `.fx-typewriter {
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  width: 16ch;
  border-right: 3px solid #f07025;
  font-size: 26px;
  font-weight: 600;
  font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
  color: #e2e8f0;
  animation: fx-typing 4s steps(16) infinite alternate,
    fx-caret 0.75s step-end infinite;
}
@keyframes fx-typing {
  from {
    width: 0;
  }
  to {
    width: 16ch;
  }
}
@keyframes fx-caret {
  50% {
    border-color: transparent;
  }
}`,
  },
  {
    id: "neon-flicker",
    name: "Neon Flicker Text",
    category: "text",
    description:
      "A pink neon sign that occasionally stutters and flickers like a dying tube.",
    tags: ["neon", "flicker", "sign"],
    html: `<h2 class="fx-neon-flicker">OPEN 24/7</h2>`,
    css: `.fx-neon-flicker {
  font-size: 38px;
  font-weight: 700;
  letter-spacing: 2px;
  color: #ffffff;
  text-shadow: 0 0 8px #ec4899, 0 0 24px #ec4899, 0 0 48px #ec4899;
  animation: fx-neon-flicker 2.4s infinite;
}
@keyframes fx-neon-flicker {
  0%,
  18%,
  22%,
  25%,
  53%,
  57%,
  100% {
    text-shadow: 0 0 8px #ec4899, 0 0 24px #ec4899, 0 0 48px #ec4899;
    opacity: 1;
  }
  20%,
  24%,
  55% {
    text-shadow: none;
    opacity: 0.6;
  }
}`,
  },
  {
    id: "text-3d",
    name: "Layered 3D Text",
    category: "text",
    description:
      "Stacked text-shadow layers build a chunky extrusion that lifts when hovered.",
    tags: ["3d", "shadow", "hover"],
    html: `<h2 class="fx-text-3d">EXTRUDE</h2>`,
    css: `.fx-text-3d {
  font-size: 42px;
  font-weight: 900;
  letter-spacing: 2px;
  color: #fafafa;
  cursor: pointer;
  transition: transform 0.25s ease;
  text-shadow: 1px 1px 0 #f07025, 2px 2px 0 #ea580c, 3px 3px 0 #c2410c,
    4px 4px 0 #9a3412, 5px 5px 0 #7c2d12, 8px 8px 12px rgba(0, 0, 0, 0.5);
}
.fx-text-3d:hover {
  transform: translate(-3px, -3px);
}`,
  },
  {
    id: "wave-text",
    name: "Wave Letters",
    category: "text",
    description:
      "Each letter rides an offset sine wave, a classic playful headline effect.",
    tags: ["wave", "letters", "bounce"],
    html: `<h2 class="fx-wave-text"><span>C</span><span>S</span><span>S</span><span>&nbsp;</span><span>i</span><span>s</span><span>&nbsp;</span><span>f</span><span>u</span><span>n</span><span>!</span></h2>`,
    css: `.fx-wave-text {
  display: flex;
  gap: 2px;
  font-size: 34px;
  font-weight: 800;
  color: #f07025;
}
.fx-wave-text span {
  display: inline-block;
  animation: fx-wave-bounce 1.2s ease-in-out infinite;
}
.fx-wave-text span:nth-child(odd) {
  animation-delay: 0.15s;
}
.fx-wave-text span:nth-child(3n) {
  animation-delay: 0.3s;
}
@keyframes fx-wave-bounce {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-14px);
  }
}`,
  },

  // -------------------------------------------------------------- HOVER CARDS
  {
    id: "lift-card",
    name: "Lift & Glow Card",
    category: "hover",
    description:
      "The card rises on hover with a soft orange glow beneath it, like floating.",
    tags: ["hover", "lift", "shadow"],
    html: `<div class="fx-lift-card"><h4>Lift &amp; Glow</h4><p>Hover the card to raise it with a warm glow.</p></div>`,
    css: `.fx-lift-card {
  width: 240px;
  padding: 24px;
  border-radius: 14px;
  background: #1e293b;
  border: 1px solid #334155;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease,
    border-color 0.3s ease;
}
.fx-lift-card h4 {
  font-size: 17px;
  font-weight: 700;
  color: #f8fafc;
}
.fx-lift-card p {
  margin-top: 8px;
  font-size: 13px;
  line-height: 1.55;
  color: #94a3b8;
}
.fx-lift-card:hover {
  transform: translateY(-8px);
  border-color: #f07025;
  box-shadow: 0 20px 40px rgba(240, 112, 37, 0.18),
    0 8px 16px rgba(0, 0, 0, 0.4);
}`,
  },
  {
    id: "gradient-border-card",
    name: "Gradient Border Card",
    category: "hover",
    description:
      "A rainbow gradient border fades in around the card using the mask compositing trick.",
    tags: ["hover", "border", "gradient"],
    html: `<div class="fx-gb-card"><h4>Gradient Border</h4><p>Hover to reveal the gradient border.</p></div>`,
    css: `.fx-gb-card {
  position: relative;
  width: 240px;
  padding: 24px;
  border-radius: 14px;
  background: #18181b;
  cursor: pointer;
}
.fx-gb-card h4 {
  font-size: 17px;
  font-weight: 700;
  color: #fafafa;
}
.fx-gb-card p {
  margin-top: 8px;
  font-size: 13px;
  line-height: 1.55;
  color: #a1a1aa;
}
.fx-gb-card::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 14px;
  padding: 2px;
  background: linear-gradient(135deg, #f07025, #ec4899, #22d3ee);
  -webkit-mask: linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask-composite: exclude;
  opacity: 0;
  transition: opacity 0.35s ease;
  pointer-events: none;
}
.fx-gb-card:hover::before {
  opacity: 1;
}`,
  },
  {
    id: "shine-card",
    name: "Shine Sweep Card",
    category: "hover",
    description:
      "A glossy beam of light slides diagonally across the card surface on hover.",
    tags: ["hover", "shine", "glossy"],
    html: `<div class="fx-shine-card"><h4>Shine Sweep</h4><p>Hover and watch the light pass.</p></div>`,
    css: `.fx-shine-card {
  position: relative;
  width: 240px;
  padding: 24px;
  border-radius: 14px;
  background: #1e293b;
  border: 1px solid #334155;
  overflow: hidden;
  cursor: pointer;
}
.fx-shine-card h4 {
  font-size: 17px;
  font-weight: 700;
  color: #f8fafc;
}
.fx-shine-card p {
  margin-top: 8px;
  font-size: 13px;
  line-height: 1.55;
  color: #94a3b8;
}
.fx-shine-card::after {
  content: "";
  position: absolute;
  top: 0;
  left: -80%;
  width: 60%;
  height: 100%;
  background: linear-gradient(
    100deg,
    transparent,
    rgba(255, 255, 255, 0.18),
    transparent
  );
  transform: skewX(-25deg);
  transition: left 0.6s ease;
}
.fx-shine-card:hover::after {
  left: 130%;
}`,
  },
  {
    id: "flip-card",
    name: "3D Flip Card",
    category: "hover",
    description:
      "The classic two-sided card that rotates 180 degrees in 3D space on hover.",
    tags: ["hover", "3d", "flip"],
    html: `<div class="fx-flip-card"><div class="fx-flip-inner"><div class="fx-flip-front">Hover to flip</div><div class="fx-flip-back">Hello from the back!</div></div></div>`,
    css: `.fx-flip-card {
  width: 240px;
  height: 150px;
  perspective: 1000px;
  cursor: pointer;
}
.fx-flip-inner {
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
}
.fx-flip-card:hover .fx-flip-inner {
  transform: rotateY(180deg);
}
.fx-flip-front,
.fx-flip-back {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 14px;
  font-weight: 600;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
}
.fx-flip-front {
  background: #1e293b;
  border: 1px solid #334155;
  color: #e2e8f0;
}
.fx-flip-back {
  background: #f07025;
  color: #ffffff;
  transform: rotateY(180deg);
}`,
  },

  // --------------------------------------------------------------- BACKGROUNDS
  {
    id: "gradient-bg",
    name: "Animated Gradient Background",
    category: "backgrounds",
    description:
      "A full-bleed gradient that slowly drifts between four brand colors.",
    tags: ["gradient", "background", "animated"],
    html: `<div class="fx-gradient-bg"></div>`,
    css: `.fx-gradient-bg {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    270deg,
    #f07025,
    #ec4899,
    #7c3aed,
    #0ea5e9,
    #f07025
  );
  background-size: 400% 400%;
  animation: fx-bg-flow 8s ease infinite;
}
@keyframes fx-bg-flow {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}`,
  },
  {
    id: "grid-bg",
    name: "Moving Grid Background",
    category: "backgrounds",
    description:
      "An orange blueprint grid that scrolls diagonally forever — great for hero sections.",
    tags: ["grid", "blueprint", "background"],
    html: `<div class="fx-grid-bg"></div>`,
    css: `.fx-grid-bg {
  position: absolute;
  inset: 0;
  background-image: linear-gradient(
      rgba(240, 112, 37, 0.25) 1px,
      transparent 1px
    ),
    linear-gradient(90deg, rgba(240, 112, 37, 0.25) 1px, transparent 1px);
  background-size: 32px 32px;
  animation: fx-grid-move 1.5s linear infinite;
}
@keyframes fx-grid-move {
  to {
    background-position: 32px 32px;
  }
}`,
  },
  {
    id: "orbs-bg",
    name: "Floating Orbs Background",
    category: "backgrounds",
    description:
      "Blurred glowing orbs drift and swell behind your content for instant depth.",
    tags: ["orbs", "blur", "ambient"],
    html: `<div class="fx-orbs-bg"><span></span><span></span><span></span></div>`,
    css: `.fx-orbs-bg {
  position: absolute;
  inset: 0;
  overflow: hidden;
  background: #0f172a;
}
.fx-orbs-bg span {
  position: absolute;
  border-radius: 50%;
  filter: blur(28px);
  opacity: 0.55;
}
.fx-orbs-bg span:nth-child(1) {
  width: 120px;
  height: 120px;
  background: #f07025;
  top: 12%;
  left: 10%;
  animation: fx-orb-float 6s ease-in-out infinite;
}
.fx-orbs-bg span:nth-child(2) {
  width: 90px;
  height: 90px;
  background: #ec4899;
  top: 42%;
  left: 55%;
  animation: fx-orb-float 8s ease-in-out infinite reverse;
}
.fx-orbs-bg span:nth-child(3) {
  width: 70px;
  height: 70px;
  background: #22d3ee;
  top: 62%;
  left: 22%;
  animation: fx-orb-float 7s ease-in-out infinite 1s;
}
@keyframes fx-orb-float {
  0%,
  100% {
    transform: translate(0, 0) scale(1);
  }
  50% {
    transform: translate(30px, -24px) scale(1.15);
  }
}`,
  },
  {
    id: "equalizer-bg",
    name: "Equalizer Bars Background",
    category: "backgrounds",
    description:
      "Twelve bars dance at the bottom of the container like a music visualizer.",
    tags: ["music", "bars", "visualizer"],
    html: `<div class="fx-eq-bg"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></div>`,
    css: `.fx-eq-bg {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: flex-end;
  gap: 6px;
  padding: 16px;
  background: #0f172a;
}
.fx-eq-bg span {
  flex: 1;
  height: 30%;
  border-radius: 4px 4px 0 0;
  background: linear-gradient(180deg, #f07025, #7c2d12);
  animation: fx-eq 1.1s ease-in-out infinite alternate;
}
.fx-eq-bg span:nth-child(2n) {
  animation-duration: 0.9s;
  height: 55%;
}
.fx-eq-bg span:nth-child(3n) {
  animation-duration: 1.3s;
  height: 70%;
  animation-delay: 0.2s;
}
.fx-eq-bg span:nth-child(5n) {
  animation-delay: 0.45s;
}
@keyframes fx-eq {
  from {
    height: 12%;
  }
  to {
    height: 88%;
  }
}`,
  },

  // ---------------------------------------------------------------- ANIMATIONS
  {
    id: "pulse-dot",
    name: "Notification Pulse",
    category: "animations",
    description:
      "The status dot that emits expanding rings — exactly like live presence indicators.",
    tags: ["pulse", "notification", "status"],
    html: `<div class="fx-pulse-dot"></div>`,
    css: `.fx-pulse-dot {
  position: relative;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: #ef4444;
}
.fx-pulse-dot::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background: #ef4444;
  animation: fx-pulse 1.6s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
@keyframes fx-pulse {
  0% {
    transform: scale(1);
    opacity: 0.7;
  }
  100% {
    transform: scale(2.6);
    opacity: 0;
  }
}`,
  },
  {
    id: "shake-box",
    name: "Shake Animation",
    category: "animations",
    description:
      "A rapid horizontal wobble that plays once per hover — ideal for wrong answers.",
    tags: ["hover", "shake", "feedback"],
    html: `<div class="fx-shake-box">Hover to shake</div>`,
    css: `.fx-shake-box {
  padding: 20px 32px;
  background: #1e293b;
  border: 1px solid #334155;
  border-radius: 12px;
  color: #e2e8f0;
  font-weight: 600;
  cursor: pointer;
}
.fx-shake-box:hover {
  animation: fx-shake 0.5s ease;
}
@keyframes fx-shake {
  0%,
  100% {
    transform: translateX(0);
  }
  15% {
    transform: translateX(-8px);
  }
  30% {
    transform: translateX(8px);
  }
  45% {
    transform: translateX(-6px);
  }
  60% {
    transform: translateX(6px);
  }
  75% {
    transform: translateX(-3px);
  }
  90% {
    transform: translateX(3px);
  }
}`,
  },
  {
    id: "float-box",
    name: "Floating Element",
    category: "animations",
    description:
      "A gradient tile levitates up and down on an endless eased loop with a soft shadow.",
    tags: ["float", "loop", "levitate"],
    html: `<div class="fx-float-box"></div>`,
    css: `.fx-float-box {
  width: 84px;
  height: 84px;
  border-radius: 20px;
  background: linear-gradient(135deg, #f07025, #c2410c);
  box-shadow: 0 18px 30px rgba(240, 112, 37, 0.35);
  animation: fx-float 3s ease-in-out infinite;
}
@keyframes fx-float {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-18px);
  }
}`,
  },
  {
    id: "bouncing-ball",
    name: "Bouncing Ball",
    category: "animations",
    description:
      "A glowing ball bounces with realistic easing using alternate direction.",
    tags: ["bounce", "ball", "physics"],
    html: `<div class="fx-ball-stage"><div class="fx-ball"></div></div>`,
    css: `.fx-ball-stage {
  display: flex;
  align-items: flex-end;
  height: 110px;
}
.fx-ball {
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background: #22d3ee;
  box-shadow: 0 0 12px rgba(34, 211, 238, 0.6);
  animation: fx-bounce 1s cubic-bezier(0.5, 0.05, 0.5, 1) infinite alternate;
}
@keyframes fx-bounce {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-84px);
  }
}`,
  },
];

/** Full library: fundamentals + 2026 trends + pro batches. */
export const EFFECTS: Effect[] = [
  ...BASE_EFFECTS,
  ...EFFECTS_2026,
  ...EFFECTS_BUTTONS_PRO,
  ...EFFECTS_LOADERS_PRO,
  ...EFFECTS_TEXT_PRO,
  ...EFFECTS_HOVER_PRO,
  ...EFFECTS_BG_ANIM_PRO,
];

export const EFFECT_COUNT = EFFECTS.length;
