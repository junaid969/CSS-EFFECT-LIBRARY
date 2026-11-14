import type { Effect } from "./effects";

/**
 * Pro batch: 21 text effects (ids prefixed pt-).
 */
export const EFFECTS_TEXT_PRO: Effect[] = [
  {
    id: "pt-liquid-text",
    name: "Liquid Fill Text",
    category: "text",
    description:
      "The word starts hollow and fills from the bottom with a warm liquid gradient while hovered, like a glass filling up.",
    tags: ["hover", "gradient", "fill"],
    html: `<span class="fx-pt-liquid-text">Liquid</span>`,
    css: `.fx-pt-liquid-text {
  font-size: 48px;
  font-weight: 800;
  cursor: pointer;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke: 1px rgba(255, 255, 255, 0.22);
  background-image: linear-gradient(
    180deg,
    rgba(251, 191, 36, 0) 0%,
    rgba(251, 191, 36, 0) 38%,
    #fbbf24 52%,
    #f07025 74%,
    #ec4899 100%
  );
  background-size: 100% 230%;
  background-position: 0 0;
  background-repeat: no-repeat;
  -webkit-background-clip: text;
  background-clip: text;
  transition: background-position 1.5s ease-in-out;
}
.fx-pt-liquid-text:hover {
  background-position: 0 100%;
}`,
  },
  {
    id: "pt-rgb-split",
    name: "RGB Split Jitter",
    category: "text",
    description:
      "Pink and cyan copies of the word drift apart and jitter in choppy steps on hover, mimicking chromatic aberration.",
    tags: ["hover", "glitch", "chromatic"],
    html: `<span class="fx-pt-rgb-split" data-text="Chroma">Chroma</span>`,
    css: `.fx-pt-rgb-split {
  position: relative;
  display: inline-block;
  font-size: 48px;
  font-weight: 800;
  color: #f8fafc;
  cursor: pointer;
}
.fx-pt-rgb-split::before,
.fx-pt-rgb-split::after {
  content: attr(data-text);
  position: absolute;
  inset: 0;
  opacity: 0.85;
  pointer-events: none;
  transition: transform 0.2s ease;
}
.fx-pt-rgb-split::before {
  color: #ec4899;
  transform: translate(-3px, -2px);
}
.fx-pt-rgb-split::after {
  color: #22d3ee;
  transform: translate(3px, 2px);
}
.fx-pt-rgb-split:hover::before {
  animation: fx-pt-rgb-split-jitter-a 0.6s steps(2, end) infinite;
}
.fx-pt-rgb-split:hover::after {
  animation: fx-pt-rgb-split-jitter-b 0.6s steps(2, end) infinite;
}
@keyframes fx-pt-rgb-split-jitter-a {
  0% { transform: translate(-6px, -3px); }
  50% { transform: translate(-3px, 3px); }
  100% { transform: translate(-7px, 1px); }
}
@keyframes fx-pt-rgb-split-jitter-b {
  0% { transform: translate(6px, 3px); }
  50% { transform: translate(3px, -3px); }
  100% { transform: translate(7px, -1px); }
}`,
  },
  {
    id: "pt-sign-flicker",
    name: "Neon Sign Flicker",
    category: "text",
    description:
      "Each neon letter dims and re-ignites on its own irregular schedule, like a tired sign on a rainy street.",
    tags: ["neon", "flicker", "glow", "loop"],
    html: `<span class="fx-pt-sign-flicker"><span class="fx-pt-sign-flicker-ch">O</span><span class="fx-pt-sign-flicker-ch">P</span><span class="fx-pt-sign-flicker-ch">E</span><span class="fx-pt-sign-flicker-ch">N</span></span>`,
    css: `.fx-pt-sign-flicker {
  display: inline-flex;
  gap: 8px;
}
.fx-pt-sign-flicker-ch {
  font-size: 52px;
  font-weight: 800;
  color: #d9fbff;
  text-shadow: 0 0 8px #22d3ee, 0 0 22px rgba(34, 211, 238, 0.75),
    0 0 48px rgba(34, 211, 238, 0.4);
  animation: fx-pt-sign-flicker-dim 3.6s linear infinite;
}
.fx-pt-sign-flicker-ch:nth-child(2) { animation-duration: 4.2s; animation-delay: -1.3s; }
.fx-pt-sign-flicker-ch:nth-child(3) { animation-duration: 3.1s; animation-delay: -2.4s; }
.fx-pt-sign-flicker-ch:nth-child(4) { animation-duration: 4.7s; animation-delay: -0.6s; }
@keyframes fx-pt-sign-flicker-dim {
  0%, 100% { opacity: 1; }
  4% { opacity: 0.2; }
  6% { opacity: 0.9; }
  8% { opacity: 0.3; }
  11% { opacity: 1; }
  62% { opacity: 1; }
  64% { opacity: 0.5; }
  66% { opacity: 1; }
}`,
  },
  {
    id: "pt-breathe-space",
    name: "Breathing Letter Space",
    category: "text",
    description:
      "The tracking of the word slowly expands and contracts in a calm breathing rhythm while a violet glow swells with it.",
    tags: ["spacing", "loop", "minimal"],
    html: `<span class="fx-pt-breathe-space">Space</span>`,
    css: `.fx-pt-breathe-space {
  font-size: 46px;
  font-weight: 700;
  letter-spacing: 8px;
  color: #a78bfa;
  text-shadow: 0 0 24px rgba(167, 139, 250, 0.45);
  animation: fx-pt-breathe-space-open 3.8s ease-in-out infinite;
}
@keyframes fx-pt-breathe-space-open {
  0%, 100% {
    letter-spacing: 8px;
    opacity: 0.7;
    text-shadow: 0 0 24px rgba(167, 139, 250, 0.45);
  }
  50% {
    letter-spacing: 22px;
    opacity: 1;
    text-shadow: 0 0 36px rgba(167, 139, 250, 0.8);
  }
}`,
  },
  {
    id: "pt-slide-mask",
    name: "Sliding Word Mask",
    category: "text",
    description:
      "Two words share one overflow-hidden slot and take turns sliding up into view in an endless, seamless loop.",
    tags: ["loop", "mask", "slide"],
    html: `<span class="fx-pt-slide-mask"><span class="fx-pt-slide-mask-word">Rise</span><span class="fx-pt-slide-mask-word">Shine</span></span>`,
    css: `.fx-pt-slide-mask {
  display: inline-block;
  overflow: hidden;
  height: 60px;
}
.fx-pt-slide-mask-word {
  display: block;
  height: 60px;
  line-height: 60px;
  font-size: 44px;
  font-weight: 800;
  color: #22d3ee;
  animation: fx-pt-slide-mask-cycle 4s cubic-bezier(0.7, 0, 0.3, 1) infinite;
}
.fx-pt-slide-mask-word + .fx-pt-slide-mask-word {
  margin-top: -60px;
  color: #ec4899;
  animation-delay: -2s;
}
@keyframes fx-pt-slide-mask-cycle {
  0%, 40% { transform: translateY(0); }
  50%, 90% {
    transform: translateY(-60px);
    animation-timing-function: steps(1, end);
  }
  91% { transform: translateY(60px); }
  100% { transform: translateY(0); }
}`,
  },
  {
    id: "pt-outline-fill",
    name: "Outline Fill Hover",
    category: "text",
    description:
      "A hollow outlined word floods with a green-to-cyan gradient from left to right for as long as it is hovered.",
    tags: ["hover", "outline", "fill"],
    html: `<span class="fx-pt-outline-fill">Hollow</span>`,
    css: `.fx-pt-outline-fill {
  display: inline-block;
  padding: 0 6px;
  font-size: 48px;
  font-weight: 800;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke: 2px #34d399;
  background-image: linear-gradient(90deg, #34d399, #22d3ee);
  background-repeat: no-repeat;
  background-size: 0% 100%;
  background-position: 0 0;
  -webkit-background-clip: text;
  background-clip: text;
  cursor: pointer;
  transition: background-size 0.9s cubic-bezier(0.65, 0, 0.35, 1);
}
.fx-pt-outline-fill:hover {
  background-size: 100% 100%;
}`,
  },
  {
    id: "pt-fire-text",
    name: "Fire Glow Text",
    category: "text",
    description:
      "A hot amber-to-pink gradient word with a blurred flame glow underneath that flickers and licks like real fire.",
    tags: ["gradient", "glow", "fire", "loop"],
    html: `<span class="fx-pt-fire-text" data-text="Flame">Flame</span>`,
    css: `.fx-pt-fire-text {
  position: relative;
  z-index: 0;
  font-size: 50px;
  font-weight: 900;
  background: linear-gradient(180deg, #fbbf24 8%, #f07025 52%, #ec4899 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
.fx-pt-fire-text::before {
  content: attr(data-text);
  position: absolute;
  inset: 0;
  z-index: -1;
  color: #f07025;
  -webkit-text-fill-color: #f07025;
  filter: blur(16px);
  animation: fx-pt-fire-text-burn 1.7s ease-in-out infinite;
}
@keyframes fx-pt-fire-text-burn {
  0%, 100% { opacity: 0.5; transform: translateY(3px) scaleY(0.94); }
  35% { opacity: 0.95; transform: translateY(-2px) scaleY(1.05); }
  70% { opacity: 0.7; transform: translateY(5px) scaleY(0.97); }
}`,
  },
  {
    id: "pt-rainbow-letters",
    name: "Rainbow Hue Letters",
    category: "text",
    description:
      "Every letter spins through the full hue wheel on a staggered delay, producing a rolling rainbow across the word.",
    tags: ["loop", "color", "letters"],
    html: `<span class="fx-pt-rainbow-letters"><span class="fx-pt-rainbow-letters-ch">P</span><span class="fx-pt-rainbow-letters-ch">r</span><span class="fx-pt-rainbow-letters-ch">i</span><span class="fx-pt-rainbow-letters-ch">s</span><span class="fx-pt-rainbow-letters-ch">m</span></span>`,
    css: `.fx-pt-rainbow-letters {
  display: inline-flex;
}
.fx-pt-rainbow-letters-ch {
  display: inline-block;
  font-size: 48px;
  font-weight: 800;
  color: #f07025;
  animation: fx-pt-rainbow-letters-cycle 3.6s linear infinite;
}
.fx-pt-rainbow-letters-ch:nth-child(2) { animation-delay: -0.6s; }
.fx-pt-rainbow-letters-ch:nth-child(3) { animation-delay: -1.2s; }
.fx-pt-rainbow-letters-ch:nth-child(4) { animation-delay: -1.8s; }
.fx-pt-rainbow-letters-ch:nth-child(5) { animation-delay: -2.4s; }
@keyframes fx-pt-rainbow-letters-cycle {
  from { filter: hue-rotate(0deg); }
  to { filter: hue-rotate(360deg); }
}`,
  },
  {
    id: "pt-sweep-glow",
    name: "Sweeping Light Glow",
    category: "text",
    description:
      "A bright radial spotlight glides across violet-to-pink gradient letters over and over, leaving them glowing.",
    tags: ["loop", "glow", "sweep", "gradient"],
    html: `<span class="fx-pt-sweep-glow">Gleam</span>`,
    css: `.fx-pt-sweep-glow {
  font-size: 48px;
  font-weight: 800;
  background-image: radial-gradient(closest-side, #ffffff 0%, rgba(255, 255, 255, 0) 100%),
    linear-gradient(90deg, #a78bfa, #ec4899);
  background-size: 90px 100%, 100% 100%;
  background-position: -120px 0, 0 0;
  background-repeat: no-repeat;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: fx-pt-sweep-glow-move 2.6s linear infinite;
}
@keyframes fx-pt-sweep-glow-move {
  0% { background-position: -120px 0, 0 0; }
  100% { background-position: 520px 0, 0 0; }
}`,
  },
  {
    id: "pt-stack-echo",
    name: "Stacked Echo Layers",
    category: "text",
    description:
      "Orange and pink echo layers sit behind the word and spring further apart whenever the cursor arrives.",
    tags: ["hover", "layers", "3d"],
    html: `<span class="fx-pt-stack-echo" data-text="Stack">Stack</span>`,
    css: `.fx-pt-stack-echo {
  position: relative;
  z-index: 0;
  display: inline-block;
  font-size: 48px;
  font-weight: 900;
  color: #fbbf24;
  cursor: pointer;
  transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.fx-pt-stack-echo::before,
.fx-pt-stack-echo::after {
  content: attr(data-text);
  position: absolute;
  inset: 0;
  z-index: -1;
  transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.fx-pt-stack-echo::before {
  color: #f07025;
  transform: translate(5px, 5px);
}
.fx-pt-stack-echo::after {
  color: #ec4899;
  transform: translate(10px, 10px);
}
.fx-pt-stack-echo:hover {
  transform: translate(-5px, -5px);
}
.fx-pt-stack-echo:hover::before {
  transform: translate(9px, 9px);
}
.fx-pt-stack-echo:hover::after {
  transform: translate(16px, 16px);
}`,
  },
  {
    id: "pt-jelly-letters",
    name: "Jelly Letter Bounce",
    category: "text",
    description:
      "Letters take turns squashing and overshooting like jelly, sending a soft ripple across the word in a loop.",
    tags: ["loop", "bounce", "letters", "squash"],
    html: `<span class="fx-pt-jelly-letters"><span class="fx-pt-jelly-letters-ch">W</span><span class="fx-pt-jelly-letters-ch">o</span><span class="fx-pt-jelly-letters-ch">b</span><span class="fx-pt-jelly-letters-ch">b</span><span class="fx-pt-jelly-letters-ch">l</span><span class="fx-pt-jelly-letters-ch">e</span></span>`,
    css: `.fx-pt-jelly-letters {
  display: inline-flex;
}
.fx-pt-jelly-letters-ch {
  display: inline-block;
  font-size: 46px;
  font-weight: 800;
  color: #34d399;
  transform-origin: 50% 100%;
  animation: fx-pt-jelly-letters-bounce 2.4s ease-in-out infinite;
}
.fx-pt-jelly-letters-ch:nth-child(2) { animation-delay: 0.14s; }
.fx-pt-jelly-letters-ch:nth-child(3) { animation-delay: 0.28s; }
.fx-pt-jelly-letters-ch:nth-child(4) { animation-delay: 0.42s; }
.fx-pt-jelly-letters-ch:nth-child(5) { animation-delay: 0.56s; }
.fx-pt-jelly-letters-ch:nth-child(6) { animation-delay: 0.7s; }
@keyframes fx-pt-jelly-letters-bounce {
  0%, 52%, 100% { transform: translateY(0) scale(1, 1); }
  60% { transform: translateY(-14px) scale(0.94, 1.14); }
  68% { transform: translateY(0) scale(1.12, 0.84); }
  76% { transform: translateY(-6px) scale(0.98, 1.05); }
  84% { transform: translateY(0) scale(1.04, 0.96); }
}`,
  },
  {
    id: "pt-flip-word",
    name: "Flipping Word Card",
    category: "text",
    description:
      "The word rotates around its X axis every few seconds, revealing a mirrored pink back face before flipping home.",
    tags: ["loop", "flip", "3d"],
    html: `<span class="fx-pt-flip-word"><span class="fx-pt-flip-word-core" data-text="Twist">Twist</span></span>`,
    css: `.fx-pt-flip-word {
  display: inline-block;
  perspective: 700px;
}
.fx-pt-flip-word-core {
  position: relative;
  display: inline-block;
  font-size: 48px;
  font-weight: 900;
  color: #22d3ee;
  transform-style: preserve-3d;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  animation: fx-pt-flip-word-turn 4.4s cubic-bezier(0.65, 0, 0.35, 1) infinite;
}
.fx-pt-flip-word-core::after {
  content: attr(data-text);
  position: absolute;
  inset: 0;
  color: #ec4899;
  transform: rotateX(180deg);
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
}
@keyframes fx-pt-flip-word-turn {
  0%, 30% { transform: rotateX(0deg); }
  40%, 80% { transform: rotateX(180deg); }
  90%, 100% { transform: rotateX(360deg); }
}`,
  },
  {
    id: "pt-type-erase",
    name: "Type and Erase Loop",
    category: "text",
    description:
      "A monospace line types one word letter by letter, erases it, then types a second word, with a blinking caret riding the whole time.",
    tags: ["typing", "loop", "caret"],
    html: `<span class="fx-pt-type-erase"><span class="fx-pt-type-erase-stack"><span class="fx-pt-type-erase-word">Code</span><span class="fx-pt-type-erase-word fx-pt-type-erase-word-alt">Erase</span></span><span class="fx-pt-type-erase-caret"></span></span>`,
    css: `.fx-pt-type-erase {
  display: inline-flex;
  align-items: center;
  font-family: ui-monospace, "SF Mono", Menlo, Consolas, monospace;
  font-size: 38px;
  font-weight: 700;
}
.fx-pt-type-erase-stack {
  display: inline-grid;
  justify-items: start;
}
.fx-pt-type-erase-word {
  grid-area: 1 / 1;
  white-space: nowrap;
  overflow: hidden;
  width: 0ch;
  color: #22d3ee;
  animation: fx-pt-type-erase-a 8s linear infinite;
}
.fx-pt-type-erase-word-alt {
  color: #fbbf24;
  animation-name: fx-pt-type-erase-b;
}
.fx-pt-type-erase-caret {
  width: 4px;
  height: 0.9em;
  margin-left: 4px;
  background: #ec4899;
  animation: fx-pt-type-erase-ride 8s linear infinite,
    fx-pt-type-erase-blink 0.9s linear infinite;
}
@keyframes fx-pt-type-erase-a {
  0% { width: 0ch; animation-timing-function: steps(4, end); }
  10% { width: 4ch; }
  30% { width: 4ch; animation-timing-function: steps(4, end); }
  40%, 100% { width: 0ch; }
}
@keyframes fx-pt-type-erase-b {
  0%, 40% { width: 0ch; }
  50% { width: 0ch; animation-timing-function: steps(5, end); }
  60% { width: 5ch; }
  80% { width: 5ch; animation-timing-function: steps(5, end); }
  90%, 100% { width: 0ch; }
}
@keyframes fx-pt-type-erase-ride {
  0% { transform: translateX(-5ch); animation-timing-function: steps(4, end); }
  10% { transform: translateX(-1ch); }
  30% { transform: translateX(-1ch); animation-timing-function: steps(4, end); }
  40% { transform: translateX(-5ch); }
  50% { transform: translateX(-5ch); animation-timing-function: steps(5, end); }
  60% { transform: translateX(0ch); }
  80% { transform: translateX(0ch); animation-timing-function: steps(5, end); }
  90%, 100% { transform: translateX(-5ch); }
}
@keyframes fx-pt-type-erase-blink {
  0%, 55% { opacity: 1; }
  56%, 100% { opacity: 0.15; }
}`,
  },
  {
    id: "pt-echo-bounce",
    name: "Bouncing Echo Trail",
    category: "text",
    description:
      "The word hops while a pink echo copy follows the motion a beat behind, like a rubber-stamp trail.",
    tags: ["loop", "bounce", "shadow"],
    html: `<span class="fx-pt-echo-bounce" data-text="Bounce">Bounce</span>`,
    css: `.fx-pt-echo-bounce {
  position: relative;
  z-index: 0;
  display: inline-block;
  font-size: 48px;
  font-weight: 900;
  color: #fbbf24;
  transform-origin: 50% 100%;
  animation: fx-pt-echo-bounce-hop 1.5s cubic-bezier(0.35, 0, 0.4, 1) infinite;
}
.fx-pt-echo-bounce::after {
  content: attr(data-text);
  position: absolute;
  inset: 0;
  z-index: -1;
  color: #ec4899;
  opacity: 0.75;
  transform-origin: 50% 100%;
  animation: fx-pt-echo-bounce-hop 1.5s cubic-bezier(0.35, 0, 0.4, 1) infinite;
  animation-delay: 0.16s;
}
@keyframes fx-pt-echo-bounce-hop {
  0%, 100% { transform: translateY(0) scale(1, 1); }
  38% { transform: translateY(-30px) scale(0.96, 1.06); }
  62% { transform: translateY(0) scale(1.08, 0.86); }
  78% { transform: translateY(-8px) scale(0.99, 1.02); }
  90% { transform: translateY(0) scale(1, 1); }
}`,
  },
  {
    id: "pt-italic-snap",
    name: "Italic Snap Hover",
    category: "text",
    description:
      "On hover the word snaps into a sharp italic skew with a springy overshoot, then relaxes back when the cursor leaves.",
    tags: ["hover", "skew", "spring"],
    html: `<span class="fx-pt-italic-snap">Snap</span>`,
    css: `.fx-pt-italic-snap {
  display: inline-block;
  font-size: 48px;
  font-weight: 800;
  color: #a78bfa;
  cursor: pointer;
  transform: skewX(0deg);
  transition: transform 0.5s cubic-bezier(0.34, 2, 0.64, 1), color 0.3s ease,
    text-shadow 0.3s ease;
}
.fx-pt-italic-snap:hover {
  transform: skewX(-14deg) translateX(6px);
  color: #ec4899;
  text-shadow: 0 0 26px rgba(236, 72, 153, 0.55);
}`,
  },
  {
    id: "pt-glow-halo",
    name: "Pulsing Glow Halo",
    category: "text",
    description:
      "A soft violet halo breathes behind the word while a thin cyan ring keeps pinging outward around it.",
    tags: ["glow", "pulse", "loop", "halo"],
    html: `<span class="fx-pt-glow-halo">Halo</span>`,
    css: `.fx-pt-glow-halo {
  position: relative;
  z-index: 0;
  display: inline-block;
  font-size: 48px;
  font-weight: 800;
  color: #f8fafc;
  text-shadow: 0 0 18px rgba(167, 139, 250, 0.6);
}
.fx-pt-glow-halo::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  width: 150px;
  height: 150px;
  margin: -75px 0 0 -75px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(167, 139, 250, 0.55) 0%, rgba(167, 139, 250, 0.16) 48%, transparent 70%);
  z-index: -1;
  animation: fx-pt-glow-halo-pulse 3s ease-in-out infinite;
}
.fx-pt-glow-halo::after {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  width: 120px;
  height: 120px;
  margin: -60px 0 0 -60px;
  border: 2px solid rgba(34, 211, 238, 0.5);
  border-radius: 50%;
  z-index: -1;
  animation: fx-pt-glow-halo-ring 3s ease-out infinite;
}
@keyframes fx-pt-glow-halo-pulse {
  0%, 100% { transform: scale(0.75); opacity: 0.55; }
  50% { transform: scale(1.25); opacity: 1; }
}
@keyframes fx-pt-glow-halo-ring {
  0% { transform: scale(0.4); opacity: 0.9; }
  100% { transform: scale(1.9); opacity: 0; }
}`,
  },
  {
    id: "pt-stitch-label",
    name: "Embroidered Stitch Label",
    category: "text",
    description:
      "A patch-style label with dashed thread borders, embossed stitching shadows and a slow sheen traveling across the fabric.",
    tags: ["label", "dashed", "shimmer", "loop"],
    html: `<span class="fx-pt-stitch-label">Stitch</span>`,
    css: `.fx-pt-stitch-label {
  position: relative;
  display: inline-block;
  overflow: hidden;
  padding: 12px 30px;
  font-size: 34px;
  font-weight: 700;
  letter-spacing: 4px;
  color: #fbbf24;
  background: rgba(251, 191, 36, 0.07);
  border: 2px dashed #fbbf24;
  border-radius: 12px;
  outline: 2px dashed rgba(251, 191, 36, 0.35);
  outline-offset: 5px;
  text-shadow: 0 2px 0 rgba(0, 0, 0, 0.55), 0 -1px 0 rgba(255, 255, 255, 0.12);
}
.fx-pt-stitch-label::before {
  content: "";
  position: absolute;
  top: -30%;
  left: -70%;
  width: 34%;
  height: 160%;
  background: linear-gradient(105deg, transparent 0%, rgba(255, 255, 255, 0.4) 50%, transparent 100%);
  transform: skewX(-20deg);
  animation: fx-pt-stitch-label-sheen 3.4s ease-in-out infinite;
}
@keyframes fx-pt-stitch-label-sheen {
  0% { left: -70%; }
  55%, 100% { left: 130%; }
}`,
  },
  {
    id: "pt-split-reveal",
    name: "Split Reveal Hover",
    category: "text",
    description:
      "Cyan and pink halves of the word slide apart horizontally on hover, exposing the solid amber core underneath.",
    tags: ["hover", "clip-path", "reveal"],
    html: `<span class="fx-pt-split-reveal" data-text="Split">Split</span>`,
    css: `.fx-pt-split-reveal {
  position: relative;
  display: inline-block;
  font-size: 48px;
  font-weight: 900;
  color: #fbbf24;
  cursor: pointer;
}
.fx-pt-split-reveal::before,
.fx-pt-split-reveal::after {
  content: attr(data-text);
  position: absolute;
  inset: 0;
  transition: transform 0.45s cubic-bezier(0.7, 0, 0.3, 1);
}
.fx-pt-split-reveal::before {
  color: #22d3ee;
  clip-path: inset(0 0 50% 0);
}
.fx-pt-split-reveal::after {
  color: #ec4899;
  clip-path: inset(50% 0 0 0);
}
.fx-pt-split-reveal:hover::before {
  transform: translateX(-34px);
}
.fx-pt-split-reveal:hover::after {
  transform: translateX(34px);
}`,
  },
  {
    id: "pt-squiggle-underline",
    name: "Squiggle Underline Scroll",
    category: "text",
    description:
      "A wavy cyan squiggle crawls endlessly beneath the word like a thread being sewn along the baseline.",
    tags: ["loop", "underline", "wavy"],
    html: `<span class="fx-pt-squiggle-underline">Wavy</span>`,
    css: `.fx-pt-squiggle-underline {
  position: relative;
  display: inline-block;
  padding-bottom: 14px;
  font-size: 46px;
  font-weight: 800;
  color: #f8fafc;
}
.fx-pt-squiggle-underline::after {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 10px;
  background-image: radial-gradient(circle at 5px 11px, transparent 4px, #22d3ee 4px, #22d3ee 6px, transparent 6px);
  background-size: 10px 10px;
  background-repeat: repeat-x;
  animation: fx-pt-squiggle-underline-crawl 0.9s linear infinite;
}
@keyframes fx-pt-squiggle-underline-crawl {
  from { background-position-x: 0; }
  to { background-position-x: 10px; }
}`,
  },
  {
    id: "pt-slice-glitch",
    name: "Slice Glitch Loop",
    category: "text",
    description:
      "Clip-path slices of the word jump sideways in uneven steps before snapping back into place, looping forever.",
    tags: ["glitch", "clip-path", "loop"],
    html: `<span class="fx-pt-slice-glitch" data-text="Shatter">Shatter</span>`,
    css: `.fx-pt-slice-glitch {
  position: relative;
  display: inline-block;
  font-size: 48px;
  font-weight: 800;
  color: #e2e8f0;
}
.fx-pt-slice-glitch::before,
.fx-pt-slice-glitch::after {
  content: attr(data-text);
  position: absolute;
  inset: 0;
  pointer-events: none;
}
.fx-pt-slice-glitch::before {
  color: #22d3ee;
  clip-path: inset(0 0 55% 0);
  animation: fx-pt-slice-glitch-top 3.2s steps(1, end) infinite;
}
.fx-pt-slice-glitch::after {
  color: #ec4899;
  clip-path: inset(62% 0 0 0);
  animation: fx-pt-slice-glitch-bottom 3.2s steps(1, end) infinite;
}
@keyframes fx-pt-slice-glitch-top {
  0%, 20%, 63%, 90%, 100% { transform: translateX(0); }
  12% { transform: translateX(-9px); }
  16% { transform: translateX(7px); }
  55% { transform: translateX(-12px); }
  59% { transform: translateX(5px); }
  86% { transform: translateX(8px); }
}
@keyframes fx-pt-slice-glitch-bottom {
  0%, 22%, 65%, 92%, 100% { transform: translateX(0); }
  14% { transform: translateX(8px); }
  18% { transform: translateX(-6px); }
  57% { transform: translateX(10px); }
  61% { transform: translateX(-4px); }
  88% { transform: translateX(-7px); }
}`,
  },
  {
    id: "pt-candy-shadow",
    name: "Candy Hard Shadow",
    category: "text",
    description:
      "A chunky pink display word with a hard cyan shadow; on hover the shadow travels to the other side while the word squashes.",
    tags: ["hover", "shadow", "chunky"],
    html: `<span class="fx-pt-candy-shadow">Candy</span>`,
    css: `.fx-pt-candy-shadow {
  display: inline-block;
  font-size: 50px;
  font-weight: 900;
  color: #ec4899;
  text-shadow: 7px 7px 0 #22d3ee;
  cursor: pointer;
  transition: text-shadow 0.35s ease, transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.fx-pt-candy-shadow:hover {
  text-shadow: -7px 7px 0 #fbbf24;
  transform: scale(1.06, 0.9) rotate(-2deg);
}`,
  },
];
