import type { Effect } from "./effects";

/**
 * 2026 trend additions — aurora gradients, glassmorphism 2.0, animated
 * gradient borders, morphing blobs, marquees, spotlight cards, skeleton
 * shimmer, 3D wireframes, mesh gradients, conic loaders, stroke text and
 * physics-feel micro-interactions.
 */
export const EFFECTS_2026: Effect[] = [
  // ---------------------------------------------------------------- BUTTONS
  {
    id: "aurora-glow-btn",
    name: "Aurora Glow Button",
    category: "buttons",
    description:
      "A dark glass button with a swirling blurred aurora burning inside its frame — the signature 2026 look.",
    tags: ["aurora", "glow", "gradient", "2026"],
    html: `<button class="fx-aurora-btn">Aurora Glow</button>`,
    css: `.fx-aurora-btn {
  position: relative;
  padding: 15px 40px;
  font-size: 16px;
  font-weight: 600;
  color: #f8fafc;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 12px;
  cursor: pointer;
  overflow: hidden;
  z-index: 1;
  transition: border-color 0.3s ease;
}
.fx-aurora-btn::before {
  content: "";
  position: absolute;
  inset: -60%;
  background: conic-gradient(
    from 0deg,
    #f07025,
    #ec4899,
    #22d3ee,
    #8b5cf6,
    #f07025
  );
  filter: blur(22px);
  opacity: 0.5;
  z-index: -1;
  animation: fx-aurora-rotate 4s linear infinite;
  transition: opacity 0.3s ease;
}
.fx-aurora-btn:hover {
  border-color: rgba(255, 255, 255, 0.45);
}
.fx-aurora-btn:hover::before {
  opacity: 0.95;
}
@keyframes fx-aurora-rotate {
  to {
    transform: rotate(360deg);
  }
}`,
  },
  {
    id: "glass-btn",
    name: "Glassmorphism Button",
    category: "buttons",
    description:
      "Frosted glass pill using backdrop-filter — glassmorphism 2.0 in its purest form.",
    tags: ["glass", "blur", "frosted", "2026"],
    html: `<button class="fx-glass-btn">Glass Button</button>`,
    css: `.fx-glass-btn {
  padding: 14px 36px;
  font-size: 16px;
  font-weight: 600;
  color: #f8fafc;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.25);
  border-radius: 999px;
  cursor: pointer;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25);
  transition: all 0.3s ease;
}
.fx-glass-btn:hover {
  background: rgba(255, 255, 255, 0.16);
  border-color: rgba(255, 255, 255, 0.5);
  transform: translateY(-2px);
}
.fx-glass-btn:active {
  transform: translateY(0) scale(0.97);
}`,
  },
  {
    id: "arrow-slide-btn",
    name: "Arrow Slide Button",
    category: "buttons",
    description:
      "The arrow nudges forward with a springy overshoot when you hover — a micro-interaction staple.",
    tags: ["arrow", "spring", "micro-interaction"],
    html: `<button class="fx-arrow-btn">Get Started <span class="fx-arrow-btn-icon">&#8594;</span></button>`,
    css: `.fx-arrow-btn {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 14px 30px;
  font-size: 16px;
  font-weight: 600;
  color: #0b1120;
  background: #f07025;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  overflow: hidden;
  transition: background 0.25s ease;
}
.fx-arrow-btn-icon {
  display: inline-block;
  transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.fx-arrow-btn:hover {
  background: #fb923c;
}
.fx-arrow-btn:hover .fx-arrow-btn-icon {
  transform: translateX(6px);
}`,
  },
  {
    id: "clip-corner-btn",
    name: "Sci-Fi Corner Cut Button",
    category: "buttons",
    description:
      "Angular clip-path corners give a cyber HUD feel; hover floods the frame with color.",
    tags: ["clip-path", "scifi", "cyber", "2026"],
    html: `<button class="fx-clip-btn">ENGAGE</button>`,
    css: `.fx-clip-btn {
  padding: 15px 40px;
  font-size: 15px;
  font-weight: 700;
  letter-spacing: 2px;
  color: #f07025;
  background: transparent;
  border: none;
  cursor: pointer;
  box-shadow: inset 0 0 0 2px #f07025;
  clip-path: polygon(
    0 0,
    calc(100% - 16px) 0,
    100% 16px,
    100% 100%,
    16px 100%,
    0 calc(100% - 16px)
  );
  transition: color 0.25s ease, background 0.25s ease;
}
.fx-clip-btn:hover {
  color: #0b1120;
  background: #f07025;
}`,
  },
  {
    id: "squeeze-btn",
    name: "Squish Press Button",
    category: "buttons",
    description:
      "A springy squish on hover that compresses further on click — physical, toy-like feedback.",
    tags: ["spring", "press", "squish"],
    html: `<button class="fx-squeeze-btn">Squish Me</button>`,
    css: `.fx-squeeze-btn {
  padding: 14px 36px;
  font-size: 16px;
  font-weight: 600;
  color: #ffffff;
  background: #10b981;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  box-shadow: 0 4px 14px rgba(16, 185, 129, 0.35);
  transition: transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1),
    box-shadow 0.25s ease;
}
.fx-squeeze-btn:hover {
  transform: scale(0.94);
  box-shadow: 0 2px 8px rgba(16, 185, 129, 0.3);
}
.fx-squeeze-btn:active {
  transform: scale(0.88);
}`,
  },

  // ---------------------------------------------------------------- LOADERS
  {
    id: "skeleton-shimmer",
    name: "Skeleton Shimmer",
    category: "loaders",
    description:
      "The 2026-standard loading placeholder: avatar and text lines swept by a soft light.",
    tags: ["skeleton", "shimmer", "loading", "2026"],
    html: `<div class="fx-skeleton"><div class="fx-skeleton-avatar"></div><div class="fx-skeleton-lines"><span></span><span></span><span></span></div></div>`,
    css: `.fx-skeleton {
  display: flex;
  gap: 14px;
  align-items: center;
}
.fx-skeleton-avatar {
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background: linear-gradient(
    100deg,
    #1e293b 40%,
    #334155 50%,
    #1e293b 60%
  );
  background-size: 200% 100%;
  animation: fx-skeleton-sweep 1.4s linear infinite;
}
.fx-skeleton-lines {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.fx-skeleton-lines span {
  height: 12px;
  width: 160px;
  border-radius: 6px;
  background: linear-gradient(
    100deg,
    #1e293b 40%,
    #334155 50%,
    #1e293b 60%
  );
  background-size: 200% 100%;
  animation: fx-skeleton-sweep 1.4s linear infinite;
}
.fx-skeleton-lines span:nth-child(2) {
  width: 130px;
  animation-delay: 0.15s;
}
.fx-skeleton-lines span:nth-child(3) {
  width: 100px;
  animation-delay: 0.3s;
}
@keyframes fx-skeleton-sweep {
  to {
    background-position: -200% 0;
  }
}`,
  },
  {
    id: "dot-grid-pulse",
    name: "Dot Grid Pulse",
    category: "loaders",
    description:
      "A 3x3 grid of dots pulsing in a diagonal wave — tidy and hypnotic.",
    tags: ["grid", "pulse", "wave"],
    html: `<div class="fx-dot-grid"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></div>`,
    css: `.fx-dot-grid {
  display: grid;
  grid-template-columns: repeat(3, 14px);
  gap: 8px;
}
.fx-dot-grid span {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: #f07025;
  animation: fx-dot-grid-pulse 1.2s ease-in-out infinite;
}
.fx-dot-grid span:nth-child(1) { animation-delay: 0s; }
.fx-dot-grid span:nth-child(2) { animation-delay: 0.1s; }
.fx-dot-grid span:nth-child(3) { animation-delay: 0.2s; }
.fx-dot-grid span:nth-child(4) { animation-delay: 0.1s; }
.fx-dot-grid span:nth-child(5) { animation-delay: 0.2s; }
.fx-dot-grid span:nth-child(6) { animation-delay: 0.3s; }
.fx-dot-grid span:nth-child(7) { animation-delay: 0.2s; }
.fx-dot-grid span:nth-child(8) { animation-delay: 0.3s; }
.fx-dot-grid span:nth-child(9) { animation-delay: 0.4s; }
@keyframes fx-dot-grid-pulse {
  0%,
  100% {
    transform: scale(0.55);
    opacity: 0.35;
  }
  50% {
    transform: scale(1);
    opacity: 1;
  }
}`,
  },
  {
    id: "morph-blob-loader",
    name: "Morphing Blob",
    category: "loaders",
    description:
      "An organic blob that continuously reshapes itself — morphing blobs are everywhere in 2026.",
    tags: ["blob", "morph", "organic", "2026"],
    html: `<div class="fx-morph-blob"></div>`,
    css: `.fx-morph-blob {
  width: 64px;
  height: 64px;
  background: linear-gradient(135deg, #f07025, #ec4899);
  animation: fx-morph 3s ease-in-out infinite;
}
@keyframes fx-morph {
  0%,
  100% {
    border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
    transform: rotate(0deg);
  }
  50% {
    border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
    transform: rotate(90deg) scale(1.08);
  }
}`,
  },
  {
    id: "clock-loader",
    name: "Clock Loader",
    category: "loaders",
    description:
      "A tiny clock with a fast minute hand and a slow hour hand ticking around the dial.",
    tags: ["clock", "time", "spinner"],
    html: `<div class="fx-clock"></div>`,
    css: `.fx-clock {
  position: relative;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  border: 4px solid #1e293b;
  background: #0f172a;
  box-shadow: 0 0 0 2px rgba(240, 112, 37, 0.2);
}
.fx-clock::before,
.fx-clock::after {
  content: "";
  position: absolute;
  left: 50%;
  bottom: 50%;
  width: 3px;
  margin-left: -1.5px;
  border-radius: 2px;
  background: #f07025;
  transform-origin: bottom center;
}
.fx-clock::before {
  height: 18px;
  animation: fx-clock-spin 2s linear infinite;
}
.fx-clock::after {
  height: 12px;
  background: #94a3b8;
  animation: fx-clock-spin 8s linear infinite;
}
@keyframes fx-clock-spin {
  to {
    transform: rotate(360deg);
  }
}`,
  },
  {
    id: "conic-ring",
    name: "Conic Gradient Ring",
    category: "loaders",
    description:
      "A smooth conic-gradient comet tail masked into a ring — cleaner than any border hack.",
    tags: ["conic", "ring", "modern", "2026"],
    html: `<div class="fx-conic-ring"></div>`,
    css: `.fx-conic-ring {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: conic-gradient(
    from 0deg,
    transparent 0 70%,
    #22d3ee 85%,
    #f07025 100%
  );
  -webkit-mask: radial-gradient(
    farthest-side,
    transparent calc(100% - 7px),
    #000 calc(100% - 6px)
  );
  mask: radial-gradient(
    farthest-side,
    transparent calc(100% - 7px),
    #000 calc(100% - 6px)
  );
  animation: fx-conic-spin 1.1s linear infinite;
}
@keyframes fx-conic-spin {
  to {
    transform: rotate(360deg);
  }
}`,
  },

  // ------------------------------------------------------------ TEXT EFFECTS
  {
    id: "aurora-text",
    name: "Aurora Text",
    category: "text",
    description:
      "Crisp white letters floating over a blurred flowing gradient ghost of themselves.",
    tags: ["aurora", "glow", "gradient", "2026"],
    html: `<h2 class="fx-aurora-text" data-text="AURORA">AURORA</h2>`,
    css: `.fx-aurora-text {
  position: relative;
  font-size: 44px;
  font-weight: 900;
  letter-spacing: 2px;
  color: #f8fafc;
}
.fx-aurora-text::before {
  content: attr(data-text);
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, #f07025, #ec4899, #22d3ee, #f07025);
  background-size: 300% auto;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  filter: blur(16px);
  opacity: 0.85;
  z-index: -1;
  animation: fx-aurora-text-flow 4s linear infinite;
}
@keyframes fx-aurora-text-flow {
  to {
    background-position: 300% center;
  }
}`,
  },
  {
    id: "shimmer-text",
    name: "Shimmer Text",
    category: "text",
    description:
      "A bright gleam sweeps across muted letters, matching modern skeleton loading states.",
    tags: ["shimmer", "gleam", "loading"],
    html: `<h2 class="fx-shimmer-text">Loading magic...</h2>`,
    css: `.fx-shimmer-text {
  font-size: 32px;
  font-weight: 800;
  background: linear-gradient(110deg, #475569 40%, #f8fafc 50%, #475569 60%);
  background-size: 250% 100%;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  animation: fx-shimmer-sweep 2.2s linear infinite;
}
@keyframes fx-shimmer-sweep {
  to {
    background-position: -250% 0;
  }
}`,
  },
  {
    id: "stroke-fill-text",
    name: "Stroke Fill Text",
    category: "text",
    description:
      "Hollow outlined letters that flood with color and glow when hovered.",
    tags: ["outline", "stroke", "hover", "2026"],
    html: `<h2 class="fx-stroke-text">OUTLINE</h2>`,
    css: `.fx-stroke-text {
  font-size: 44px;
  font-weight: 900;
  letter-spacing: 3px;
  color: transparent;
  -webkit-text-stroke: 2px #f07025;
  cursor: pointer;
  transition: color 0.35s ease, text-shadow 0.35s ease;
}
.fx-stroke-text:hover {
  color: #f07025;
  text-shadow: 0 0 24px rgba(240, 112, 37, 0.55);
}`,
  },
  {
    id: "marquee",
    name: "Infinite Marquee",
    category: "text",
    description:
      "The retro marquee is back: an edge-masked ticker that loops forever and pauses on hover.",
    tags: ["marquee", "ticker", "loop", "2026"],
    html: `<div class="fx-marquee"><div class="fx-marquee-track"><span>fresh css effects &bull; 2026 edition &bull; pure css only &bull; copy and paste &bull;&nbsp;</span><span>fresh css effects &bull; 2026 edition &bull; pure css only &bull; copy and paste &bull;&nbsp;</span></div></div>`,
    css: `.fx-marquee {
  width: 280px;
  padding: 10px 0;
  overflow: hidden;
  border-top: 1px solid rgba(255, 255, 255, 0.15);
  border-bottom: 1px solid rgba(255, 255, 255, 0.15);
  -webkit-mask-image: linear-gradient(
    90deg,
    transparent,
    #000 12%,
    #000 88%,
    transparent
  );
  mask-image: linear-gradient(
    90deg,
    transparent,
    #000 12%,
    #000 88%,
    transparent
  );
}
.fx-marquee-track {
  display: flex;
  width: max-content;
  animation: fx-marquee-scroll 9s linear infinite;
}
.fx-marquee-track span {
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 2px;
  white-space: nowrap;
  text-transform: uppercase;
  color: #cbd5e1;
}
.fx-marquee:hover .fx-marquee-track {
  animation-play-state: paused;
}
@keyframes fx-marquee-scroll {
  to {
    transform: translateX(-50%);
  }
}`,
  },
  {
    id: "highlight-sweep-text",
    name: "Highlight Sweep Text",
    category: "text",
    description:
      "A marker-style highlight paints itself across the words on hover, like swiping a pen.",
    tags: ["highlight", "marker", "hover"],
    html: `<h2 class="fx-highlight-text"><span>Hover to highlight</span></h2>`,
    css: `.fx-highlight-text span {
  font-size: 26px;
  font-weight: 700;
  color: #e2e8f0;
  padding: 2px 6px;
  cursor: pointer;
  background-image: linear-gradient(
    120deg,
    rgba(240, 112, 37, 0) 0%,
    rgba(240, 112, 37, 0.85) 100%
  );
  background-repeat: no-repeat;
  background-size: 0% 100%;
  transition: background-size 0.45s ease, color 0.3s ease;
}
.fx-highlight-text:hover span {
  background-size: 100% 100%;
  color: #ffffff;
}`,
  },

  // -------------------------------------------------------------- HOVER CARDS
  {
    id: "glass-card",
    name: "Glassmorphism Card",
    category: "hover",
    description:
      "A frosted glass panel floating over colorful blurred blobs — glassmorphism done right.",
    tags: ["glass", "blur", "frosted", "2026"],
    html: `<div class="fx-glass-stage"><span class="fx-glass-blob"></span><span class="fx-glass-blob b"></span><div class="fx-glass-card"><h4>Glass Card</h4><p>Frosted glass over glowing color.</p></div></div>`,
    css: `.fx-glass-stage {
  position: relative;
  width: 260px;
  height: 170px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.fx-glass-blob {
  position: absolute;
  width: 110px;
  height: 110px;
  border-radius: 50%;
  background: #f07025;
  filter: blur(30px);
  opacity: 0.8;
  top: 4px;
  left: 14px;
}
.fx-glass-blob.b {
  background: #22d3ee;
  top: 64px;
  left: 136px;
  opacity: 0.7;
}
.fx-glass-card {
  position: relative;
  width: 230px;
  padding: 20px;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.07);
  border: 1px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  transition: transform 0.3s ease, border-color 0.3s ease,
    background 0.3s ease;
}
.fx-glass-card:hover {
  transform: translateY(-6px);
  border-color: rgba(255, 255, 255, 0.45);
  background: rgba(255, 255, 255, 0.11);
}
.fx-glass-card h4 {
  font-size: 17px;
  font-weight: 700;
  color: #ffffff;
}
.fx-glass-card p {
  margin-top: 6px;
  font-size: 13px;
  line-height: 1.55;
  color: rgba(226, 232, 240, 0.78);
}`,
  },
  {
    id: "animated-gradient-border-card",
    name: "Animated Gradient Border Card",
    category: "hover",
    description:
      "The border itself is a flowing gradient — the padding-box/border-box double background trick.",
    tags: ["border", "gradient", "animated", "2026"],
    html: `<div class="fx-agb-card"><h4>Animated Border</h4><p>The border gradient flows forever.</p></div>`,
    css: `.fx-agb-card {
  width: 240px;
  padding: 24px;
  border-radius: 14px;
  border: 2px solid transparent;
  background: linear-gradient(#18181b, #18181b) padding-box,
    linear-gradient(90deg, #f07025, #ec4899, #22d3ee, #f07025) border-box;
  background-size: 100% 100%, 300% 300%;
  animation: fx-agb-flow 4s linear infinite;
  cursor: pointer;
}
.fx-agb-card h4 {
  font-size: 17px;
  font-weight: 700;
  color: #fafafa;
}
.fx-agb-card p {
  margin-top: 8px;
  font-size: 13px;
  line-height: 1.55;
  color: #a1a1aa;
}
@keyframes fx-agb-flow {
  0% {
    background-position: 0 0, 0% 50%;
  }
  100% {
    background-position: 0 0, 100% 50%;
  }
}`,
  },
  {
    id: "spotlight-card",
    name: "Spotlight Card",
    category: "hover",
    description:
      "A soft radial light blooms over the surface on hover — the classic dashboard glow.",
    tags: ["spotlight", "glow", "radial", "2026"],
    html: `<div class="fx-spot-card"><h4>Spotlight</h4><p>A soft light blooms over the surface.</p></div>`,
    css: `.fx-spot-card {
  position: relative;
  width: 240px;
  padding: 24px;
  border-radius: 14px;
  background: #1e293b;
  border: 1px solid #334155;
  overflow: hidden;
  cursor: pointer;
  transition: border-color 0.3s ease, transform 0.3s ease;
}
.fx-spot-card::after {
  content: "";
  position: absolute;
  inset: 0;
  background: radial-gradient(
    240px circle at 30% 0%,
    rgba(240, 112, 37, 0.28),
    transparent 65%
  );
  opacity: 0;
  transition: opacity 0.4s ease;
  pointer-events: none;
}
.fx-spot-card:hover {
  border-color: rgba(240, 112, 37, 0.6);
  transform: translateY(-4px);
}
.fx-spot-card:hover::after {
  opacity: 1;
}
.fx-spot-card h4 {
  position: relative;
  font-size: 17px;
  font-weight: 700;
  color: #f8fafc;
}
.fx-spot-card p {
  position: relative;
  margin-top: 8px;
  font-size: 13px;
  line-height: 1.55;
  color: #94a3b8;
}`,
  },
  {
    id: "tilt-card",
    name: "3D Tilt Card",
    category: "hover",
    description:
      "The card leans into a perspective tilt with a directional shadow, like a physical tile.",
    tags: ["3d", "tilt", "perspective"],
    html: `<div class="fx-tilt-card"><h4>3D Tilt</h4><p>Hover and the card leans toward you.</p></div>`,
    css: `.fx-tilt-card {
  width: 240px;
  padding: 24px;
  border-radius: 14px;
  background: linear-gradient(145deg, #1e293b, #0f172a);
  border: 1px solid #334155;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  transform: perspective(700px) rotateX(0deg) rotateY(0deg);
  transition: transform 0.35s ease, box-shadow 0.35s ease;
}
.fx-tilt-card:hover {
  transform: perspective(700px) rotateX(8deg) rotateY(-8deg)
    translateY(-4px);
  box-shadow: -14px 18px 30px rgba(0, 0, 0, 0.45);
}
.fx-tilt-card h4 {
  font-size: 17px;
  font-weight: 700;
  color: #f8fafc;
}
.fx-tilt-card p {
  margin-top: 8px;
  font-size: 13px;
  line-height: 1.55;
  color: #94a3b8;
}`,
  },
  {
    id: "reveal-card",
    name: "Expand on Hover Card",
    category: "hover",
    description:
      "Hidden content slides open with a max-height transition — perfect for FAQ-style cards.",
    tags: ["expand", "reveal", "accordion", "2026"],
    html: `<div class="fx-reveal-card"><h4>Reveal Card</h4><p class="fx-reveal-card-teaser">Hover to expand...</p><p class="fx-reveal-card-more">This hidden paragraph slides open using a max-height transition.</p></div>`,
    css: `.fx-reveal-card {
  width: 240px;
  padding: 22px;
  border-radius: 14px;
  background: #18181b;
  border: 1px solid #3f3f46;
  cursor: pointer;
}
.fx-reveal-card h4 {
  font-size: 17px;
  font-weight: 700;
  color: #fafafa;
}
.fx-reveal-card-teaser {
  margin-top: 8px;
  font-size: 13px;
  color: #a1a1aa;
}
.fx-reveal-card-more {
  max-height: 0;
  overflow: hidden;
  opacity: 0;
  margin-top: 0;
  font-size: 13px;
  line-height: 1.55;
  color: #f07025;
  transition: max-height 0.45s ease, opacity 0.35s ease,
    margin-top 0.35s ease;
}
.fx-reveal-card:hover .fx-reveal-card-more {
  max-height: 120px;
  opacity: 1;
  margin-top: 10px;
}`,
  },

  // --------------------------------------------------------------- BACKGROUNDS
  {
    id: "aurora-bg",
    name: "Aurora Background",
    category: "backgrounds",
    description:
      "Two vast blurred ribbons of teal, violet and pink drifting like polar lights.",
    tags: ["aurora", "ambient", "gradient", "2026"],
    html: `<div class="fx-aurora-bg"><span></span><span></span></div>`,
    css: `.fx-aurora-bg {
  position: absolute;
  inset: 0;
  overflow: hidden;
  background: #05070f;
}
.fx-aurora-bg span {
  position: absolute;
  width: 70%;
  height: 55%;
  border-radius: 50%;
  filter: blur(46px);
  opacity: 0.5;
}
.fx-aurora-bg span:nth-child(1) {
  background: linear-gradient(120deg, #22d3ee, #8b5cf6, #ec4899);
  top: -18%;
  left: -12%;
  animation: fx-aurora-drift-a 9s ease-in-out infinite alternate;
}
.fx-aurora-bg span:nth-child(2) {
  background: linear-gradient(300deg, #10b981, #22d3ee, #8b5cf6);
  bottom: -22%;
  right: -14%;
  animation: fx-aurora-drift-b 11s ease-in-out infinite alternate;
}
@keyframes fx-aurora-drift-a {
  0% {
    transform: translate(0, 0) rotate(0deg) scale(1);
  }
  100% {
    transform: translate(22%, 18%) rotate(24deg) scale(1.18);
  }
}
@keyframes fx-aurora-drift-b {
  0% {
    transform: translate(0, 0) rotate(0deg) scale(1.1);
  }
  100% {
    transform: translate(-20%, -16%) rotate(-20deg) scale(0.95);
  }
}`,
  },
  {
    id: "mesh-gradient-bg",
    name: "Mesh Gradient Background",
    category: "backgrounds",
    description:
      "Four soft color points blended into a living mesh that slowly shifts its hue.",
    tags: ["mesh", "gradient", "hue-rotate", "2026"],
    html: `<div class="fx-mesh-bg"></div>`,
    css: `.fx-mesh-bg {
  position: absolute;
  inset: 0;
  background: radial-gradient(at 20% 25%, #f07025 0px, transparent 50%),
    radial-gradient(at 75% 20%, #ec4899 0px, transparent 50%),
    radial-gradient(at 80% 80%, #8b5cf6 0px, transparent 50%),
    radial-gradient(at 15% 85%, #22d3ee 0px, transparent 50%),
    #0f172a;
  filter: blur(2px) saturate(1.15);
  animation: fx-mesh-hue 10s ease-in-out infinite alternate;
}
@keyframes fx-mesh-hue {
  from {
    filter: blur(2px) saturate(1.15) hue-rotate(0deg);
  }
  to {
    filter: blur(2px) saturate(1.3) hue-rotate(40deg);
  }
}`,
  },
  {
    id: "starfield-bg",
    name: "Twinkling Starfield",
    category: "backgrounds",
    description:
      "Two layers of box-shadow stars twinkle out of sync over a deep space gradient.",
    tags: ["stars", "night", "twinkle", "2026"],
    html: `<div class="fx-starfield"><span></span><span></span></div>`,
    css: `.fx-starfield {
  position: absolute;
  inset: 0;
  overflow: hidden;
  background: radial-gradient(
    ellipse at 50% 0%,
    #101c3a 0%,
    #05070f 70%
  );
}
.fx-starfield span {
  position: absolute;
  top: 0;
  left: 0;
  width: 2px;
  height: 2px;
  border-radius: 50%;
  background: transparent;
}
.fx-starfield span:nth-child(1) {
  box-shadow: 30px 40px #fff, 120px 90px #cbd5e1, 210px 30px #fff,
    300px 140px #fff, 90px 180px #94a3b8, 380px 60px #fff,
    440px 190px #e2e8f0, 520px 40px #fff, 560px 150px #94a3b8,
    620px 90px #fff, 700px 30px #e2e8f0, 760px 170px #fff,
    180px 220px #fff, 640px 230px #cbd5e1, 260px 260px #fff;
  animation: fx-star-twinkle 2.4s ease-in-out infinite alternate;
}
.fx-starfield span:nth-child(2) {
  box-shadow: 70px 120px #fff, 170px 60px #94a3b8, 240px 170px #fff,
    330px 220px #cbd5e1, 420px 110px #fff, 500px 200px #fff,
    590px 60px #cbd5e1, 680px 150px #fff, 740px 240px #fff,
    140px 250px #fff, 460px 20px #e2e8f0, 20px 210px #cbd5e1;
  animation: fx-star-twinkle 3.4s ease-in-out infinite alternate-reverse;
}
@keyframes fx-star-twinkle {
  from {
    opacity: 0.35;
  }
  to {
    opacity: 1;
  }
}`,
  },
  {
    id: "light-beams-bg",
    name: "Rotating Light Beams",
    category: "backgrounds",
    description:
      "Searchlight rays sweep in a circle from below, masked to fade with distance.",
    tags: ["beams", "conic", "spotlight", "2026"],
    html: `<div class="fx-beams-bg"></div>`,
    css: `.fx-beams-bg {
  position: absolute;
  inset: 0;
  overflow: hidden;
  background: radial-gradient(
    circle at 50% 120%,
    #1a1208 0%,
    #0b0e1a 55%,
    #05070f 100%
  );
}
.fx-beams-bg::before {
  content: "";
  position: absolute;
  left: 50%;
  top: 100%;
  width: 220%;
  height: 220%;
  transform-origin: top center;
  background: repeating-conic-gradient(
    from 0deg at 50% 0%,
    rgba(240, 112, 37, 0.22) 0deg 6deg,
    transparent 6deg 14deg
  );
  filter: blur(6px);
  -webkit-mask-image: radial-gradient(
    circle at 50% 0%,
    #000 0%,
    transparent 62%
  );
  mask-image: radial-gradient(circle at 50% 0%, #000 0%, transparent 62%);
  animation: fx-beams-rotate 14s linear infinite;
}
@keyframes fx-beams-rotate {
  from {
    transform: translateX(-50%) rotate(0deg);
  }
  to {
    transform: translateX(-50%) rotate(360deg);
  }
}`,
  },

  // ---------------------------------------------------------------- ANIMATIONS
  {
    id: "heartbeat",
    name: "Heartbeat Pulse",
    category: "animations",
    description:
      "A pure-CSS heart with the unmistakable double-thump rhythm.",
    tags: ["heart", "rhythm", "pulse"],
    html: `<div class="fx-heartbeat"></div>`,
    css: `.fx-heartbeat {
  position: relative;
  width: 70px;
  height: 63px;
  animation: fx-heartbeat 1.4s ease-in-out infinite;
}
.fx-heartbeat::before,
.fx-heartbeat::after {
  content: "";
  position: absolute;
  top: 0;
  width: 35px;
  height: 56px;
  border-radius: 35px 35px 0 0;
  background: #ef4444;
}
.fx-heartbeat::before {
  left: 35px;
  transform: rotate(45deg);
  transform-origin: 0 100%;
}
.fx-heartbeat::after {
  left: 0;
  transform: rotate(-45deg);
  transform-origin: 100% 100%;
}
@keyframes fx-heartbeat {
  0%,
  100% {
    transform: scale(1);
  }
  14% {
    transform: scale(1.15);
  }
  28% {
    transform: scale(1);
  }
  42% {
    transform: scale(1.15);
  }
  60% {
    transform: scale(1);
  }
}`,
  },
  {
    id: "jello-wiggle",
    name: "Jello Wiggle",
    category: "animations",
    description:
      "A gelatinous wobble that squashes and stretches once per hover — pure cartoon physics.",
    tags: ["hover", "jello", "squash", "fun"],
    html: `<div class="fx-jello-box">Hover me</div>`,
    css: `.fx-jello-box {
  padding: 20px 32px;
  background: linear-gradient(135deg, #8b5cf6, #6d28d9);
  border-radius: 12px;
  color: #ffffff;
  font-weight: 600;
  cursor: pointer;
}
.fx-jello-box:hover {
  animation: fx-jello 0.9s ease;
}
@keyframes fx-jello {
  0% {
    transform: scale(1, 1);
  }
  25% {
    transform: scale(0.9, 1.1);
  }
  50% {
    transform: scale(1.1, 0.9);
  }
  75% {
    transform: scale(0.95, 1.05);
  }
  100% {
    transform: scale(1, 1);
  }
}`,
  },
  {
    id: "pendulum-swing",
    name: "Pendulum Swing",
    category: "animations",
    description:
      "A glowing bob swings from a fixed pivot with natural eased momentum.",
    tags: ["pendulum", "swing", "physics"],
    html: `<div class="fx-swing"></div>`,
    css: `.fx-swing {
  position: relative;
  width: 3px;
  height: 84px;
  border-radius: 2px;
  background: #475569;
  transform-origin: top center;
  animation: fx-swing 1.8s ease-in-out infinite alternate;
}
.fx-swing::after {
  content: "";
  position: absolute;
  bottom: -7px;
  left: 50%;
  margin-left: -8px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #f07025;
  box-shadow: 0 0 10px rgba(240, 112, 37, 0.6);
}
@keyframes fx-swing {
  from {
    transform: rotate(-28deg);
  }
  to {
    transform: rotate(28deg);
  }
}`,
  },
  {
    id: "rotating-cube",
    name: "3D Wireframe Cube",
    category: "animations",
    description:
      "A glowing orange wireframe cube tumbling through 3D space with preserve-3d.",
    tags: ["3d", "cube", "wireframe", "2026"],
    html: `<div class="fx-cube-stage"><div class="fx-cube"><span class="fx-cube-face front"></span><span class="fx-cube-face back"></span><span class="fx-cube-face right"></span><span class="fx-cube-face left"></span><span class="fx-cube-face top"></span><span class="fx-cube-face bottom"></span></div></div>`,
    css: `.fx-cube-stage {
  perspective: 420px;
}
.fx-cube {
  position: relative;
  width: 64px;
  height: 64px;
  transform-style: preserve-3d;
  animation: fx-cube-spin 6s linear infinite;
}
.fx-cube-face {
  position: absolute;
  inset: 0;
  border: 1px solid rgba(240, 112, 37, 0.9);
  background: rgba(240, 112, 37, 0.12);
  box-shadow: inset 0 0 18px rgba(240, 112, 37, 0.25);
}
.fx-cube-face.front { transform: translateZ(32px); }
.fx-cube-face.back { transform: rotateY(180deg) translateZ(32px); }
.fx-cube-face.right { transform: rotateY(90deg) translateZ(32px); }
.fx-cube-face.left { transform: rotateY(-90deg) translateZ(32px); }
.fx-cube-face.top { transform: rotateX(90deg) translateZ(32px); }
.fx-cube-face.bottom { transform: rotateX(-90deg) translateZ(32px); }
@keyframes fx-cube-spin {
  0% {
    transform: rotateX(-18deg) rotateY(0deg);
  }
  100% {
    transform: rotateX(-18deg) rotateY(360deg);
  }
}`,
  },
  {
    id: "bounce-arrow",
    name: "Scroll Cue Arrow",
    category: "animations",
    description:
      "The universal scroll-down chevron bouncing gently at the bottom of hero sections.",
    tags: ["arrow", "scroll", "cue"],
    html: `<div class="fx-bounce-arrow" aria-hidden="true"></div>`,
    css: `.fx-bounce-arrow {
  width: 22px;
  height: 22px;
  border-right: 4px solid #f07025;
  border-bottom: 4px solid #f07025;
  animation: fx-arrow-bounce 1.6s ease-in-out infinite;
}
@keyframes fx-arrow-bounce {
  0%,
  100% {
    transform: rotate(45deg) translate(0, 0);
    opacity: 0.9;
  }
  50% {
    transform: rotate(45deg) translate(8px, 8px);
    opacity: 0.5;
  }
}`,
  },
];
