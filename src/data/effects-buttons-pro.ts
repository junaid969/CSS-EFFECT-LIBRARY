import type { Effect } from "./effects";

/**
 * Pro batch: 21 button effects (ids prefixed pb-).
 */
export const EFFECTS_BUTTONS_PRO: Effect[] = [
  {
    id: "pb-liquid-btn",
    name: "Liquid Fill Button",
    category: "buttons",
    description:
      "A cyan liquid rises from the bottom of the button on hover, its spinning wavy crest flooding the label with color.",
    tags: ["hover", "liquid", "fill", "wave"],
    html: `<button class="fx-pb-liquid-btn">Hover Me</button>`,
    css: `.fx-pb-liquid-btn {
  position: relative;
  padding: 14px 36px;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 1px;
  color: #22d3ee;
  background: transparent;
  border: 2px solid #22d3ee;
  border-radius: 999px;
  cursor: pointer;
  overflow: hidden;
  z-index: 1;
  transition: color 0.5s ease 0.15s;
}
.fx-pb-liquid-btn::before {
  content: "";
  position: absolute;
  top: 165%;
  left: 50%;
  width: 170px;
  height: 170px;
  margin-left: -85px;
  border-radius: 42%;
  background: #22d3ee;
  z-index: -1;
  animation: fx-pb-liquid-btn-wave 5s linear infinite;
  transition: top 0.85s ease-in-out;
}
.fx-pb-liquid-btn:hover {
  color: #0b1120;
}
.fx-pb-liquid-btn:hover::before {
  top: 65%;
}
@keyframes fx-pb-liquid-btn-wave {
  to {
    transform: rotate(360deg);
  }
}`,
  },
  {
    id: "pb-magnet-btn",
    name: "Magnet Lift Button",
    category: "buttons",
    description:
      "The button lifts toward you on hover with a gentle scale-up while a soft green glow blooms beneath it.",
    tags: ["hover", "lift", "glow"],
    html: `<button class="fx-pb-magnet-btn">Attract Me</button>`,
    css: `.fx-pb-magnet-btn {
  padding: 14px 36px;
  font-size: 16px;
  font-weight: 600;
  color: #0b1120;
  background: #34d399;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  box-shadow: 0 4px 14px rgba(52, 211, 153, 0.25);
  transition: transform 0.35s ease, box-shadow 0.35s ease;
}
.fx-pb-magnet-btn:hover {
  transform: translateY(-4px) scale(1.04);
  box-shadow: 0 18px 38px rgba(52, 211, 153, 0.5),
    0 6px 16px rgba(52, 211, 153, 0.35);
}
.fx-pb-magnet-btn:active {
  transform: translateY(-1px) scale(1.01);
  box-shadow: 0 8px 20px rgba(52, 211, 153, 0.4);
}`,
  },
  {
    id: "pb-conic-border-btn",
    name: "Conic Spin Border",
    category: "buttons",
    description:
      "A vivid rainbow conic border spins endlessly around the dark frame; hovering brightens the face inside.",
    tags: ["border", "conic", "spin", "gradient"],
    html: `<button class="fx-pb-conic-border-btn"><span class="fx-pb-conic-border-btn-face">Conic Spin</span></button>`,
    css: `.fx-pb-conic-border-btn {
  position: relative;
  padding: 3px;
  background: transparent;
  border: none;
  border-radius: 16px;
  cursor: pointer;
  overflow: hidden;
}
.fx-pb-conic-border-btn::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  width: 300%;
  aspect-ratio: 1;
  background: conic-gradient(
    from 0deg,
    #f07025,
    #ec4899,
    #a78bfa,
    #22d3ee,
    #34d399,
    #f07025
  );
  animation: fx-pb-conic-border-btn-spin 3s linear infinite;
}
.fx-pb-conic-border-btn-face {
  position: relative;
  display: block;
  padding: 13px 34px;
  font-size: 16px;
  font-weight: 600;
  color: #f8fafc;
  background: #101a33;
  border-radius: 13px;
  transition: background 0.3s ease, color 0.3s ease;
}
.fx-pb-conic-border-btn:hover .fx-pb-conic-border-btn-face {
  background: #1d2c52;
  color: #ffffff;
}
@keyframes fx-pb-conic-border-btn-spin {
  from {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  to {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}`,
  },
  {
    id: "pb-candy-btn",
    name: "Candy Press Button",
    category: "buttons",
    description:
      "A chunky glossy candy button with a hard bottom shadow that presses down flush when hovered, like a physical sweet.",
    tags: ["hover", "press", "candy", "3d"],
    html: `<button class="fx-pb-candy-btn">Sweet!</button>`,
    css: `.fx-pb-candy-btn {
  padding: 14px 36px;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 1px;
  color: #ffffff;
  background: #ec4899;
  border: none;
  border-radius: 999px;
  cursor: pointer;
  box-shadow: inset 0 3px 0 rgba(255, 255, 255, 0.45),
    inset 0 -4px 0 rgba(0, 0, 0, 0.2), 0 7px 0 #9d174d,
    0 12px 20px rgba(236, 72, 153, 0.35);
  transition: transform 0.15s ease, box-shadow 0.15s ease,
    background 0.2s ease;
}
.fx-pb-candy-btn:hover {
  transform: translateY(5px);
  background: #db2777;
  box-shadow: inset 0 3px 0 rgba(255, 255, 255, 0.3),
    inset 0 -4px 0 rgba(0, 0, 0, 0.2), 0 2px 0 #9d174d,
    0 5px 10px rgba(236, 72, 153, 0.4);
}
.fx-pb-candy-btn:active {
  transform: translateY(7px);
  box-shadow: inset 0 3px 0 rgba(255, 255, 255, 0.25), 0 0 0 #9d174d;
}`,
  },
  {
    id: "pb-glitch-btn",
    name: "Glitch Label Button",
    category: "buttons",
    description:
      "On hover the label splits into red and cyan ghost copies that jitter and slice in a retro glitch rhythm.",
    tags: ["hover", "glitch", "chromatic"],
    html: `<button class="fx-pb-glitch-btn" data-text="GLITCH">GLITCH</button>`,
    css: `.fx-pb-glitch-btn {
  position: relative;
  padding: 14px 36px;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 2px;
  color: #f8fafc;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.25s ease;
}
.fx-pb-glitch-btn::before,
.fx-pb-glitch-btn::after {
  content: attr(data-text);
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  opacity: 0;
  pointer-events: none;
}
.fx-pb-glitch-btn:hover {
  background: rgba(255, 255, 255, 0.09);
  border-color: rgba(255, 255, 255, 0.4);
}
.fx-pb-glitch-btn:hover::before {
  opacity: 0.9;
  color: #ef4444;
  animation: fx-pb-glitch-btn-jitter 0.5s steps(3, end) infinite;
}
.fx-pb-glitch-btn:hover::after {
  opacity: 0.9;
  color: #22d3ee;
  animation: fx-pb-glitch-btn-jitter 0.5s steps(3, end) infinite reverse;
}
@keyframes fx-pb-glitch-btn-jitter {
  0% {
    transform: translate(-3px, -2px);
    clip-path: inset(0 0 55% 0);
  }
  50% {
    transform: translate(2px, 1px);
    clip-path: inset(45% 0 0 0);
  }
  100% {
    transform: translate(-1px, 2px);
    clip-path: inset(20% 0 35% 0);
  }
}`,
  },
  {
    id: "pb-ping-btn",
    name: "Ping Rings Button",
    category: "buttons",
    description:
      "Hovering fires two concentric amber rings that expand and fade outward from the pill in a sonar ping.",
    tags: ["hover", "ping", "rings"],
    html: `<button class="fx-pb-ping-btn">Ping Me</button>`,
    css: `.fx-pb-ping-btn {
  position: relative;
  padding: 14px 36px;
  font-size: 16px;
  font-weight: 600;
  color: #fbbf24;
  background: transparent;
  border: 2px solid #fbbf24;
  border-radius: 999px;
  cursor: pointer;
  z-index: 1;
  transition: background 0.3s ease, box-shadow 0.3s ease;
}
.fx-pb-ping-btn::before,
.fx-pb-ping-btn::after {
  content: "";
  position: absolute;
  inset: -2px;
  border: 2px solid #fbbf24;
  border-radius: 999px;
  opacity: 0;
  pointer-events: none;
  z-index: -1;
}
.fx-pb-ping-btn:hover {
  background: rgba(251, 191, 36, 0.12);
  box-shadow: 0 0 24px rgba(251, 191, 36, 0.35);
}
.fx-pb-ping-btn:hover::before {
  animation: fx-pb-ping-btn-ring 1.4s ease-out infinite;
}
.fx-pb-ping-btn:hover::after {
  animation: fx-pb-ping-btn-ring 1.4s ease-out 0.45s infinite;
}
@keyframes fx-pb-ping-btn-ring {
  0% {
    transform: scale(1);
    opacity: 0.7;
  }
  100% {
    transform: scale(1.65);
    opacity: 0;
  }
}`,
  },
  {
    id: "pb-race-btn",
    name: "Comet Race Button",
    category: "buttons",
    description:
      "A glowing comet dot races across the button face again and again while hovered, trailing amber light.",
    tags: ["hover", "comet", "race"],
    html: `<button class="fx-pb-race-btn">Race</button>`,
    css: `.fx-pb-race-btn {
  position: relative;
  padding: 14px 36px;
  font-size: 16px;
  font-weight: 600;
  color: #f8fafc;
  background: #111c36;
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 10px;
  cursor: pointer;
  overflow: hidden;
  transition: border-color 0.3s ease, background 0.3s ease;
}
.fx-pb-race-btn::after {
  content: "";
  position: absolute;
  top: 50%;
  left: -18%;
  width: 12px;
  height: 12px;
  margin-top: -6px;
  border-radius: 50%;
  background: #fbbf24;
  box-shadow: -16px 0 10px -2px rgba(251, 191, 36, 0.9),
    -30px 0 18px -4px rgba(251, 191, 36, 0.5);
  opacity: 0;
}
.fx-pb-race-btn:hover {
  border-color: rgba(251, 191, 36, 0.6);
  background: #16233f;
}
.fx-pb-race-btn:hover::after {
  animation: fx-pb-race-btn-zoom 0.9s linear infinite;
}
@keyframes fx-pb-race-btn-zoom {
  0% {
    left: -18%;
    opacity: 0;
  }
  12% {
    opacity: 1;
  }
  85% {
    opacity: 1;
  }
  100% {
    left: 108%;
    opacity: 0;
  }
}`,
  },
  {
    id: "pb-swap-btn",
    name: "Label Swap Button",
    category: "buttons",
    description:
      "Two stacked labels trade places on hover: the first slides up out of view as the second springs in from below.",
    tags: ["hover", "swap", "text"],
    html: `<button class="fx-pb-swap-btn"><span class="fx-pb-swap-btn-clip"><span class="fx-pb-swap-btn-a">Download</span><span class="fx-pb-swap-btn-b">Ready?</span></span></button>`,
    css: `.fx-pb-swap-btn {
  padding: 14px 36px;
  font-size: 16px;
  font-weight: 600;
  color: #0b1120;
  background: #fbbf24;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: background 0.3s ease;
}
.fx-pb-swap-btn:hover {
  background: #fcd34d;
}
.fx-pb-swap-btn-clip {
  display: block;
  height: 22px;
  overflow: hidden;
}
.fx-pb-swap-btn-a,
.fx-pb-swap-btn-b {
  display: block;
  height: 22px;
  line-height: 22px;
  text-align: center;
  transition: transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.fx-pb-swap-btn-b {
  transform: translateY(100%);
}
.fx-pb-swap-btn:hover .fx-pb-swap-btn-a {
  transform: translateY(-100%);
}
.fx-pb-swap-btn:hover .fx-pb-swap-btn-b {
  transform: translateY(0);
}`,
  },
  {
    id: "pb-pixel-btn",
    name: "Pixel Invert Button",
    category: "buttons",
    description:
      "An 8-bit pixel button with stepped corners and chunky bevels that inverts its green and midnight palette on hover.",
    tags: ["pixel", "retro", "invert", "hover"],
    html: `<button class="fx-pb-pixel-btn">PLAYER 1</button>`,
    css: `.fx-pb-pixel-btn {
  padding: 14px 28px;
  font-family: "Courier New", monospace;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 3px;
  color: #052e16;
  background: #34d399;
  border: none;
  cursor: pointer;
  clip-path: polygon(
    0 8px,
    8px 8px,
    8px 0,
    calc(100% - 8px) 0,
    calc(100% - 8px) 8px,
    100% 8px,
    100% calc(100% - 8px),
    calc(100% - 8px) calc(100% - 8px),
    calc(100% - 8px) 100%,
    8px 100%,
    8px calc(100% - 8px),
    0 calc(100% - 8px)
  );
  box-shadow: inset 5px 5px 0 rgba(255, 255, 255, 0.35),
    inset -5px -5px 0 rgba(6, 78, 59, 0.85);
  transition: background 0.2s steps(2, end), color 0.2s steps(2, end),
    box-shadow 0.2s steps(2, end);
}
.fx-pb-pixel-btn:hover {
  color: #34d399;
  background: #131c33;
  box-shadow: inset 5px 5px 0 rgba(52, 211, 153, 0.45),
    inset -5px -5px 0 rgba(255, 255, 255, 0.15);
}`,
  },
  {
    id: "pb-draw-btn",
    name: "Outline Draw Button",
    category: "buttons",
    description:
      "On hover a cyan outline draws itself around the button, sweeping the top edge before the sides snap into place.",
    tags: ["hover", "outline", "draw"],
    html: `<button class="fx-pb-draw-btn">Draw Me</button>`,
    css: `.fx-pb-draw-btn {
  position: relative;
  padding: 14px 36px;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 1px;
  color: #e2e8f0;
  background: rgba(255, 255, 255, 0.04);
  border: none;
  border-radius: 2px;
  cursor: pointer;
  transition: color 0.4s ease 0.25s;
}
.fx-pb-draw-btn::before,
.fx-pb-draw-btn::after {
  content: "";
  position: absolute;
  width: 0;
  height: 0;
  border: 0 solid #22d3ee;
}
.fx-pb-draw-btn::before {
  top: 0;
  left: 0;
  border-top-width: 2px;
  border-left-width: 2px;
}
.fx-pb-draw-btn::after {
  bottom: 0;
  right: 0;
  border-bottom-width: 2px;
  border-right-width: 2px;
}
.fx-pb-draw-btn:hover {
  color: #22d3ee;
}
.fx-pb-draw-btn:hover::before,
.fx-pb-draw-btn:hover::after {
  animation: fx-pb-draw-btn-draw 0.6s ease forwards;
}
@keyframes fx-pb-draw-btn-draw {
  0% {
    width: 0;
    height: 0;
  }
  45% {
    width: 100%;
    height: 0;
  }
  100% {
    width: 100%;
    height: 100%;
  }
}`,
  },
  {
    id: "pb-heartglow-btn",
    name: "Heartbeat Glow Button",
    category: "buttons",
    description:
      "A pink glow pulses in a double-thump heartbeat rhythm; hovering makes the pulse bigger and brighter.",
    tags: ["glow", "pulse", "heartbeat"],
    html: `<button class="fx-pb-heartglow-btn">Beat</button>`,
    css: `.fx-pb-heartglow-btn {
  padding: 14px 36px;
  font-size: 16px;
  font-weight: 600;
  color: #fecdd3;
  background: #22101f;
  border: 2px solid #ec4899;
  border-radius: 999px;
  cursor: pointer;
  animation: fx-pb-heartglow-btn-beat 1.8s ease-in-out infinite;
  transition: color 0.3s ease, background 0.3s ease;
}
.fx-pb-heartglow-btn:hover {
  color: #ffffff;
  background: #38122f;
  animation: fx-pb-heartglow-btn-throb 1.8s ease-in-out infinite;
}
@keyframes fx-pb-heartglow-btn-beat {
  0%,
  28%,
  60%,
  100% {
    box-shadow: 0 0 0 0 rgba(236, 72, 153, 0.4);
  }
  14% {
    box-shadow: 0 0 22px 4px rgba(236, 72, 153, 0.55);
  }
  42% {
    box-shadow: 0 0 16px 2px rgba(236, 72, 153, 0.35);
  }
}
@keyframes fx-pb-heartglow-btn-throb {
  0%,
  28%,
  60%,
  100% {
    box-shadow: 0 0 0 0 rgba(236, 72, 153, 0.65);
  }
  14% {
    box-shadow: 0 0 34px 10px rgba(236, 72, 153, 0.8);
  }
  42% {
    box-shadow: 0 0 26px 6px rgba(236, 72, 153, 0.6);
  }
}`,
  },
  {
    id: "pb-diagonal-btn",
    name: "Diagonal Split Button",
    category: "buttons",
    description:
      "A pink triangle sweeps across the violet face on hover, splitting the button into two vivid diagonal halves.",
    tags: ["hover", "diagonal", "split"],
    html: `<button class="fx-pb-diagonal-btn">Split</button>`,
    css: `.fx-pb-diagonal-btn {
  position: relative;
  padding: 14px 36px;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 1px;
  color: #ffffff;
  background: #7c3aed;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  overflow: hidden;
  z-index: 1;
  transition: color 0.35s ease;
}
.fx-pb-diagonal-btn::before {
  content: "";
  position: absolute;
  inset: 0;
  background: #ec4899;
  clip-path: polygon(0 0, 100% 0, 0 100%);
  transform: translateX(-105%);
  transition: transform 0.45s ease;
  z-index: -1;
}
.fx-pb-diagonal-btn:hover::before {
  transform: translateX(0);
}`,
  },
  {
    id: "pb-ghost-btn",
    name: "Ghost Morph Button",
    category: "buttons",
    description:
      "A sharp-cornered ghost outline morphs into a fully filled violet pill on hover, softening its radius as it fills.",
    tags: ["hover", "morph", "pill"],
    html: `<button class="fx-pb-ghost-btn">Ghost Pill</button>`,
    css: `.fx-pb-ghost-btn {
  padding: 12px 34px;
  font-size: 16px;
  font-weight: 600;
  color: #a78bfa;
  background: transparent;
  border: 2px solid #a78bfa;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.35s ease, color 0.35s ease,
    border-radius 0.35s ease, box-shadow 0.35s ease;
}
.fx-pb-ghost-btn:hover {
  color: #0b1120;
  background: #a78bfa;
  border-radius: 999px;
  box-shadow: 0 8px 24px rgba(167, 139, 250, 0.45);
}`,
  },
  {
    id: "pb-spring-btn",
    name: "Spring Bounce Button",
    category: "buttons",
    description:
      "Hovering triggers a springy squash-and-stretch bounce with overshoot easing plus a lifted orange shadow.",
    tags: ["hover", "spring", "bounce"],
    html: `<button class="fx-pb-spring-btn">Boing!</button>`,
    css: `.fx-pb-spring-btn {
  padding: 14px 36px;
  font-size: 16px;
  font-weight: 700;
  color: #ffffff;
  background: #f07025;
  border: none;
  border-radius: 14px;
  cursor: pointer;
  box-shadow: 0 6px 16px rgba(240, 112, 37, 0.35);
  transition: box-shadow 0.3s ease;
}
.fx-pb-spring-btn:hover {
  animation: fx-pb-spring-btn-boing 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
  box-shadow: 0 14px 30px rgba(240, 112, 37, 0.5);
}
.fx-pb-spring-btn:active {
  transform: scale(0.96);
}
@keyframes fx-pb-spring-btn-boing {
  0% {
    transform: scale(1);
  }
  35% {
    transform: scale(1.12, 0.92);
  }
  60% {
    transform: scale(0.94, 1.08);
  }
  80% {
    transform: scale(1.05, 0.97);
  }
  100% {
    transform: scale(1);
  }
}`,
  },
  {
    id: "pb-stripes-btn",
    name: "Scrolling Stripes Button",
    category: "buttons",
    description:
      "Orange and pink candy stripes scroll diagonally behind the label forever; hovering adds a warm glow.",
    tags: ["stripes", "scroll", "candy", "loop"],
    html: `<button class="fx-pb-stripes-btn">Candy Rush</button>`,
    css: `.fx-pb-stripes-btn {
  padding: 14px 36px;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 1px;
  color: #ffffff;
  text-shadow: 0 2px 6px rgba(11, 17, 32, 0.85);
  background: repeating-linear-gradient(
    45deg,
    #f07025 0px,
    #f07025 14px,
    #ec4899 14px,
    #ec4899 28px
  );
  border: none;
  border-radius: 10px;
  cursor: pointer;
  box-shadow: 0 6px 18px rgba(236, 72, 153, 0.3);
  animation: fx-pb-stripes-btn-scroll 1s linear infinite;
  transition: box-shadow 0.3s ease, transform 0.3s ease;
}
.fx-pb-stripes-btn:hover {
  transform: scale(1.03);
  box-shadow: 0 10px 28px rgba(236, 72, 153, 0.55);
}
@keyframes fx-pb-stripes-btn-scroll {
  to {
    background-position: 39.6px 0;
  }
}`,
  },
  {
    id: "pb-terminal-btn",
    name: "Terminal Prompt Button",
    category: "buttons",
    description:
      "A retro terminal button with a blinking caret prompt that floods the little screen with green light on hover.",
    tags: ["terminal", "retro", "caret"],
    html: `<button class="fx-pb-terminal-btn"><span class="fx-pb-terminal-btn-prompt">&gt;</span>npm run dev<span class="fx-pb-terminal-btn-caret">_</span></button>`,
    css: `.fx-pb-terminal-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 14px 30px;
  font-family: "Courier New", monospace;
  font-size: 15px;
  font-weight: 700;
  letter-spacing: 1px;
  color: #34d399;
  background: #071322;
  border: 1px solid #14532d;
  border-radius: 8px;
  cursor: pointer;
  box-shadow: inset 0 0 18px rgba(52, 211, 153, 0.08);
  transition: box-shadow 0.3s ease, border-color 0.3s ease, color 0.3s ease;
}
.fx-pb-terminal-btn-prompt {
  color: #86efac;
}
.fx-pb-terminal-btn-caret {
  display: inline-block;
  animation: fx-pb-terminal-btn-blink 1.1s steps(1, end) infinite;
}
.fx-pb-terminal-btn:hover {
  color: #6ee7b7;
  border-color: #34d399;
  box-shadow: inset 0 0 26px rgba(52, 211, 153, 0.25),
    0 0 22px rgba(52, 211, 153, 0.35);
}
@keyframes fx-pb-terminal-btn-blink {
  0%,
  49% {
    opacity: 1;
  }
  50%,
  100% {
    opacity: 0;
  }
}`,
  },
  {
    id: "pb-dotted-spin-btn",
    name: "Dotted Halo Button",
    category: "buttons",
    description:
      "A dashed violet halo rotates slowly around this circular button at all times and turns cyan on hover.",
    tags: ["dashed", "spin", "halo", "circle"],
    html: `<button class="fx-pb-dotted-spin-btn">SCAN</button>`,
    css: `.fx-pb-dotted-spin-btn {
  position: relative;
  width: 92px;
  height: 92px;
  font-size: 15px;
  font-weight: 700;
  letter-spacing: 2px;
  color: #f8fafc;
  background: #1a2540;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  transition: background 0.3s ease, box-shadow 0.3s ease;
}
.fx-pb-dotted-spin-btn::before {
  content: "";
  position: absolute;
  inset: -8px;
  border: 2px dashed #a78bfa;
  border-radius: 50%;
  animation: fx-pb-dotted-spin-btn-rotate 9s linear infinite;
  transition: border-color 0.3s ease;
  pointer-events: none;
}
.fx-pb-dotted-spin-btn:hover {
  background: #27346b;
  box-shadow: 0 0 26px rgba(167, 139, 250, 0.45);
}
.fx-pb-dotted-spin-btn:hover::before {
  border-color: #22d3ee;
}
@keyframes fx-pb-dotted-spin-btn-rotate {
  to {
    transform: rotate(360deg);
  }
}`,
  },
  {
    id: "pb-underline-btn",
    name: "Glow Underline Button",
    category: "buttons",
    description:
      "A glowing cyan underline grows beneath the label on hover while the text lifts a couple of pixels.",
    tags: ["hover", "underline", "glow"],
    html: `<button class="fx-pb-underline-btn">Underline</button>`,
    css: `.fx-pb-underline-btn {
  position: relative;
  padding: 12px 10px;
  font-size: 17px;
  font-weight: 600;
  color: #cbd5e1;
  background: transparent;
  border: none;
  cursor: pointer;
  transition: transform 0.3s ease, color 0.3s ease;
}
.fx-pb-underline-btn::after {
  content: "";
  position: absolute;
  left: 50%;
  bottom: 2px;
  width: 0;
  height: 3px;
  border-radius: 3px;
  background: #22d3ee;
  box-shadow: 0 0 12px rgba(34, 211, 238, 0.8);
  transform: translateX(-50%);
  transition: width 0.35s ease;
}
.fx-pb-underline-btn:hover {
  color: #ffffff;
  transform: translateY(-2px);
}
.fx-pb-underline-btn:hover::after {
  width: 100%;
}`,
  },
  {
    id: "pb-frost-btn",
    name: "Frost Melt Button",
    category: "buttons",
    description:
      "A frosted glass pill with a blurred rainbow behind it; on hover the frost melts and the gradient snaps into focus.",
    tags: ["glass", "frost", "gradient", "blur"],
    html: `<button class="fx-pb-frost-btn">Frost</button>`,
    css: `.fx-pb-frost-btn {
  position: relative;
  padding: 14px 36px;
  font-size: 16px;
  font-weight: 600;
  color: #f8fafc;
  text-shadow: 0 1px 8px rgba(11, 17, 32, 0.65);
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.35);
  border-radius: 999px;
  cursor: pointer;
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  overflow: hidden;
  z-index: 1;
  transition: border-color 0.5s ease, box-shadow 0.5s ease;
}
.fx-pb-frost-btn::before,
.fx-pb-frost-btn::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: inherit;
  z-index: -1;
  transition: opacity 0.5s ease, filter 0.6s ease;
}
.fx-pb-frost-btn::before {
  background: linear-gradient(120deg, #ec4899, #a78bfa 50%, #22d3ee);
  opacity: 0.55;
  filter: blur(14px) saturate(0.8);
}
.fx-pb-frost-btn::after {
  background: rgba(255, 255, 255, 0.22);
}
.fx-pb-frost-btn:hover {
  border-color: rgba(255, 255, 255, 0.7);
  box-shadow: 0 10px 30px rgba(167, 139, 250, 0.45);
}
.fx-pb-frost-btn:hover::before {
  opacity: 1;
  filter: blur(0px) saturate(1.4);
}
.fx-pb-frost-btn:hover::after {
  opacity: 0.12;
}`,
  },
  {
    id: "pb-block3d-btn",
    name: "3D Block Press",
    category: "buttons",
    description:
      "A solid green block with a dark extruded side that slides flush underneath the face when pressed on hover.",
    tags: ["3d", "press", "block"],
    html: `<button class="fx-pb-block3d-btn">Push</button>`,
    css: `.fx-pb-block3d-btn {
  position: relative;
  padding: 14px 36px;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 1px;
  color: #06281c;
  background: transparent;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: transform 0.15s ease, color 0.15s ease;
}
.fx-pb-block3d-btn::before,
.fx-pb-block3d-btn::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 10px;
  transition: transform 0.15s ease;
}
.fx-pb-block3d-btn::before {
  background: #065f46;
  transform: translate(7px, 7px);
  z-index: -2;
}
.fx-pb-block3d-btn::after {
  background: #34d399;
  z-index: -1;
}
.fx-pb-block3d-btn:hover {
  transform: translate(7px, 7px);
  color: #052e16;
}
.fx-pb-block3d-btn:hover::before {
  transform: translate(0, 0);
}`,
  },
  {
    id: "pb-orbit-btn",
    name: "Satellite Orbit Button",
    category: "buttons",
    description:
      "A tiny orange satellite circles the button on a dashed orbit path forever, glowing hotter on hover.",
    tags: ["orbit", "satellite", "loop", "glow"],
    html: `<button class="fx-pb-orbit-btn"><span class="fx-pb-orbit-btn-sat"></span><span class="fx-pb-orbit-btn-label">Launch</span></button>`,
    css: `.fx-pb-orbit-btn {
  position: relative;
  padding: 14px 36px;
  font-size: 16px;
  font-weight: 600;
  color: #f8fafc;
  background: #131c36;
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 999px;
  cursor: pointer;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}
.fx-pb-orbit-btn-sat {
  position: absolute;
  inset: -42px;
  border-radius: inherit;
  animation: fx-pb-orbit-btn-rotate 3.5s linear infinite;
  pointer-events: none;
}
.fx-pb-orbit-btn-sat::before {
  content: "";
  position: absolute;
  top: -5px;
  left: 50%;
  width: 8px;
  height: 8px;
  margin-left: -4px;
  border-radius: 50%;
  background: #f07025;
  box-shadow: 0 0 10px rgba(240, 112, 37, 0.9);
  transition: background 0.3s ease, box-shadow 0.3s ease;
}
.fx-pb-orbit-btn-sat::after {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  width: 138px;
  height: 138px;
  margin: -69px 0 0 -69px;
  border: 1px dashed rgba(148, 163, 184, 0.35);
  border-radius: 50%;
}
.fx-pb-orbit-btn:hover {
  border-color: rgba(240, 112, 37, 0.6);
  box-shadow: 0 0 24px rgba(240, 112, 37, 0.3);
}
.fx-pb-orbit-btn:hover .fx-pb-orbit-btn-sat::before {
  background: #fb923c;
  box-shadow: 0 0 16px rgba(251, 146, 60, 1);
}
@keyframes fx-pb-orbit-btn-rotate {
  to {
    transform: rotate(360deg);
  }
}`,
  },
];
