import type { Effect } from "./effects";

/**
 * Pro batch: 21 hover card effects (ids prefixed ph-).
 */
export const EFFECTS_HOVER_PRO: Effect[] = [
  {
    id: "ph-glare-sweep",
    name: "Glare Sweep Card",
    category: "hover",
    description:
      "A diagonal glare beam streaks across the glass surface on hover while the card lifts.",
    tags: ["hover", "glare", "glass", "light"],
    html: `<div class="fx-ph-glare-sweep"><h3>Glare Sweep</h3><p>Hover and a beam of light streaks past.</p></div>`,
    css: `.fx-ph-glare-sweep {
  position: relative;
  width: 240px;
  padding: 20px;
  border-radius: 14px;
  background: linear-gradient(145deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.03));
  border: 1px solid rgba(255, 255, 255, 0.16);
  color: #f8fafc;
  overflow: hidden;
  box-shadow: 0 10px 26px rgba(0, 0, 0, 0.35);
  transition: transform 0.4s ease, border-color 0.4s ease;
}
.fx-ph-glare-sweep h3 {
  margin: 0 0 8px;
  font-size: 18px;
  font-weight: 700;
}
.fx-ph-glare-sweep p {
  margin: 0;
  font-size: 13px;
  line-height: 1.5;
  color: #cbd5e1;
}
.fx-ph-glare-sweep::after {
  content: "";
  position: absolute;
  top: -70%;
  left: -30%;
  width: 50%;
  height: 240%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.45), transparent);
  transform: rotate(22deg) translateX(-260%);
  transition: transform 0.55s ease;
  pointer-events: none;
}
.fx-ph-glare-sweep:hover {
  transform: translateY(-4px);
  border-color: rgba(34, 211, 238, 0.55);
}
.fx-ph-glare-sweep:hover::after {
  transform: rotate(22deg) translateX(260%);
}`,
  },
  {
    id: "ph-chase-border",
    name: "Chase Border Card",
    category: "hover",
    description:
      "Three tiny bright dots orbit the card border nonstop and flare up on hover.",
    tags: ["hover", "border", "orbit", "dots"],
    html: `<div class="fx-ph-chase-border"><h3>Chase Border</h3><p>Three bright dots chase along the edge.</p></div>`,
    css: `@property --fx-ph-chase-angle {
  syntax: "<angle>";
  initial-value: 0deg;
  inherits: false;
}
.fx-ph-chase-border {
  position: relative;
  width: 240px;
  padding: 20px;
  border-radius: 14px;
  background: #131c30;
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: #f8fafc;
  transition: transform 0.4s ease, border-color 0.4s ease;
}
.fx-ph-chase-border h3 {
  margin: 0 0 8px;
  font-size: 18px;
  font-weight: 700;
}
.fx-ph-chase-border p {
  margin: 0;
  font-size: 13px;
  line-height: 1.5;
  color: #cbd5e1;
}
.fx-ph-chase-border::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: inherit;
  padding: 2px;
  --fx-ph-chase-angle: 0deg;
  background: conic-gradient(
    from var(--fx-ph-chase-angle),
    #22d3ee 0deg 24deg,
    transparent 24deg 120deg,
    #ec4899 120deg 144deg,
    transparent 144deg 240deg,
    #fbbf24 240deg 264deg,
    transparent 264deg 360deg
  );
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask-composite: exclude;
  opacity: 0.45;
  animation: fx-ph-chase-border-spin 3s linear infinite;
  transition: opacity 0.4s ease, filter 0.4s ease;
  pointer-events: none;
}
.fx-ph-chase-border:hover {
  transform: translateY(-4px);
  border-color: rgba(34, 211, 238, 0.4);
}
.fx-ph-chase-border:hover::before {
  opacity: 1;
  filter: drop-shadow(0 0 6px rgba(34, 211, 238, 0.8));
}
@keyframes fx-ph-chase-border-spin {
  to {
    --fx-ph-chase-angle: 360deg;
  }
}`,
  },
  {
    id: "ph-glass-deep",
    name: "Deep Glass Card",
    category: "hover",
    description:
      "The frosted glass deepens its blur, lifts gently and brightens its violet border on hover.",
    tags: ["hover", "glass", "blur", "frosted"],
    html: `<div class="fx-ph-glass-deep"><h3>Deep Glass</h3><p>Hover to thicken the frosted blur.</p></div>`,
    css: `.fx-ph-glass-deep {
  width: 240px;
  padding: 20px;
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.07);
  border: 1px solid rgba(255, 255, 255, 0.18);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  color: #f8fafc;
  box-shadow: 0 8px 22px rgba(0, 0, 0, 0.3);
  transition: transform 0.4s ease, background 0.4s ease, border-color 0.4s ease,
    box-shadow 0.4s ease, backdrop-filter 0.4s ease;
}
.fx-ph-glass-deep h3 {
  margin: 0 0 8px;
  font-size: 18px;
  font-weight: 700;
}
.fx-ph-glass-deep p {
  margin: 0;
  font-size: 13px;
  line-height: 1.5;
  color: #cbd5e1;
}
.fx-ph-glass-deep:hover {
  transform: translateY(-6px);
  background: rgba(255, 255, 255, 0.13);
  border-color: rgba(167, 139, 250, 0.75);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  box-shadow: 0 18px 40px rgba(0, 0, 0, 0.45),
    0 0 26px rgba(167, 139, 250, 0.28);
}`,
  },
  {
    id: "ph-fan-stack",
    name: "Fan Stack Card",
    category: "hover",
    description:
      "Two hidden layers fan out behind the card like spread playing cards on hover.",
    tags: ["hover", "3d", "stack", "layers"],
    html: `<div class="fx-ph-fan-stack"><h3>Fan Stack</h3><p>Hover to fan out the hidden layers.</p></div>`,
    css: `.fx-ph-fan-stack {
  position: relative;
  width: 240px;
  padding: 20px;
  border-radius: 14px;
  background: linear-gradient(160deg, #1f2a44, #131c30);
  border: 1px solid rgba(255, 255, 255, 0.14);
  color: #f8fafc;
  transition: border-color 0.4s ease, box-shadow 0.4s ease;
}
.fx-ph-fan-stack h3 {
  margin: 0 0 8px;
  font-size: 18px;
  font-weight: 700;
}
.fx-ph-fan-stack p {
  margin: 0;
  font-size: 13px;
  line-height: 1.5;
  color: #cbd5e1;
}
.fx-ph-fan-stack::before,
.fx-ph-fan-stack::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: inherit;
  border: 1px solid rgba(255, 255, 255, 0.16);
  z-index: -1;
  transition: transform 0.45s cubic-bezier(0.22, 1, 0.36, 1);
}
.fx-ph-fan-stack::before {
  background: linear-gradient(150deg, rgba(240, 112, 37, 0.65), rgba(236, 72, 153, 0.5));
}
.fx-ph-fan-stack::after {
  background: linear-gradient(150deg, rgba(34, 211, 238, 0.6), rgba(167, 139, 250, 0.5));
}
.fx-ph-fan-stack:hover {
  border-color: rgba(255, 255, 255, 0.35);
  box-shadow: 0 12px 26px rgba(0, 0, 0, 0.4);
}
.fx-ph-fan-stack:hover::before {
  transform: rotate(-6deg) translate(-12px, 2px);
}
.fx-ph-fan-stack:hover::after {
  transform: rotate(6deg) translate(12px, 2px);
}`,
  },
  {
    id: "ph-slide-panel",
    name: "Slide Up Panel",
    category: "hover",
    description:
      "A bold orange-pink action tray slides up over the lower half of the card on hover.",
    tags: ["hover", "panel", "slide", "action"],
    html: `<div class="fx-ph-slide-panel"><h3>Slide Panel</h3><p>Hover to raise the action tray.</p><div class="fx-ph-slide-panel-tray">View Project &#8594;</div></div>`,
    css: `.fx-ph-slide-panel {
  position: relative;
  overflow: hidden;
  width: 240px;
  padding: 20px;
  border-radius: 14px;
  background: linear-gradient(160deg, #1c2740, #121a2e);
  border: 1px solid rgba(255, 255, 255, 0.12);
  color: #f8fafc;
  transition: transform 0.4s ease, border-color 0.4s ease;
}
.fx-ph-slide-panel h3 {
  margin: 0 0 8px;
  font-size: 18px;
  font-weight: 700;
}
.fx-ph-slide-panel p {
  margin: 0;
  font-size: 13px;
  line-height: 1.5;
  color: #cbd5e1;
}
.fx-ph-slide-panel-tray {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 46px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(90deg, #f07025, #ec4899);
  color: #0b1120;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 1px;
  transform: translateY(101%);
  transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1);
}
.fx-ph-slide-panel:hover {
  transform: translateY(-3px);
  border-color: rgba(240, 112, 37, 0.6);
}
.fx-ph-slide-panel:hover .fx-ph-slide-panel-tray {
  transform: translateY(0);
}`,
  },
  {
    id: "ph-corner-brackets",
    name: "Corner Brackets Card",
    category: "hover",
    description:
      "Four L-shaped green brackets draw in toward the card corners on hover.",
    tags: ["hover", "brackets", "corners", "frame"],
    html: `<div class="fx-ph-corner-brackets"><h3>Corner Brackets</h3><p>Hover to draw the brackets in.</p></div>`,
    css: `.fx-ph-corner-brackets {
  position: relative;
  width: 240px;
  padding: 20px;
  border-radius: 12px;
  background: linear-gradient(160deg, rgba(255, 255, 255, 0.06), rgba(255, 255, 255, 0.02));
  border: 1px solid rgba(255, 255, 255, 0.12);
  color: #f8fafc;
  transition: transform 0.4s ease, border-color 0.4s ease;
}
.fx-ph-corner-brackets h3 {
  margin: 0 0 8px;
  font-size: 18px;
  font-weight: 700;
}
.fx-ph-corner-brackets p {
  margin: 0;
  font-size: 13px;
  line-height: 1.5;
  color: #cbd5e1;
}
.fx-ph-corner-brackets::before,
.fx-ph-corner-brackets::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: inherit;
  pointer-events: none;
  transition: background-size 0.35s ease;
}
.fx-ph-corner-brackets::before {
  background:
    linear-gradient(#34d399, #34d399) left top no-repeat,
    linear-gradient(#34d399, #34d399) left top no-repeat,
    linear-gradient(#34d399, #34d399) right bottom no-repeat,
    linear-gradient(#34d399, #34d399) right bottom no-repeat;
  background-size: 0 0, 0 0, 0 0, 0 0;
}
.fx-ph-corner-brackets::after {
  background:
    linear-gradient(#34d399, #34d399) right top no-repeat,
    linear-gradient(#34d399, #34d399) right top no-repeat,
    linear-gradient(#34d399, #34d399) left bottom no-repeat,
    linear-gradient(#34d399, #34d399) left bottom no-repeat;
  background-size: 0 0, 0 0, 0 0, 0 0;
}
.fx-ph-corner-brackets:hover {
  transform: translateY(-3px);
  border-color: rgba(52, 211, 153, 0.55);
}
.fx-ph-corner-brackets:hover::before,
.fx-ph-corner-brackets:hover::after {
  background-size: 20px 2px, 2px 20px, 20px 2px, 2px 20px;
}`,
  },
  {
    id: "ph-ripple-card",
    name: "Ripple Pulse Card",
    category: "hover",
    description:
      "Concentric cyan rings ripple outward from the card center on hover.",
    tags: ["hover", "ripple", "rings", "pulse"],
    html: `<div class="fx-ph-ripple-card"><h3>Ripple Pulse</h3><p>Hover and rings ripple outward.</p></div>`,
    css: `.fx-ph-ripple-card {
  position: relative;
  overflow: hidden;
  width: 240px;
  padding: 20px;
  border-radius: 14px;
  background: linear-gradient(160deg, #16233c, #101a2e);
  border: 1px solid rgba(34, 211, 238, 0.35);
  color: #f8fafc;
  transition: transform 0.4s ease, border-color 0.4s ease, box-shadow 0.4s ease;
}
.fx-ph-ripple-card h3 {
  margin: 0 0 8px;
  font-size: 18px;
  font-weight: 700;
}
.fx-ph-ripple-card p {
  margin: 0;
  font-size: 13px;
  line-height: 1.5;
  color: #cbd5e1;
}
.fx-ph-ripple-card::before,
.fx-ph-ripple-card::after {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  width: 60px;
  height: 60px;
  margin: -30px 0 0 -30px;
  border: 2px solid rgba(34, 211, 238, 0.8);
  border-radius: 50%;
  opacity: 0;
  pointer-events: none;
}
.fx-ph-ripple-card:hover {
  transform: translateY(-3px);
  border-color: rgba(34, 211, 238, 0.7);
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.4), 0 0 20px rgba(34, 211, 238, 0.2);
}
.fx-ph-ripple-card:hover::before {
  animation: fx-ph-ripple-card-ripple 1.4s ease-out infinite;
}
.fx-ph-ripple-card:hover::after {
  animation: fx-ph-ripple-card-ripple 1.4s ease-out 0.7s infinite;
}
@keyframes fx-ph-ripple-card-ripple {
  0% {
    transform: scale(0.4);
    opacity: 0.9;
  }
  100% {
    transform: scale(3.2);
    opacity: 0;
  }
}`,
  },
  {
    id: "ph-hue-shift",
    name: "Hue Shift Card",
    category: "hover",
    description:
      "The vivid gradient face rotates its hues through 60 degrees on hover.",
    tags: ["hover", "gradient", "hue", "color"],
    html: `<div class="fx-ph-hue-shift"><h3>Hue Shift</h3><p>Hover to spin the gradient hues.</p></div>`,
    css: `.fx-ph-hue-shift {
  width: 240px;
  padding: 20px;
  border-radius: 14px;
  background: linear-gradient(130deg, #f07025, #ec4899 48%, #a78bfa);
  border: 1px solid rgba(255, 255, 255, 0.35);
  color: #ffffff;
  box-shadow: 0 10px 26px rgba(0, 0, 0, 0.35);
  transition: filter 0.45s ease, transform 0.45s ease, border-color 0.45s ease;
}
.fx-ph-hue-shift h3 {
  margin: 0 0 8px;
  font-size: 18px;
  font-weight: 800;
  text-shadow: 0 1px 6px rgba(0, 0, 0, 0.3);
}
.fx-ph-hue-shift p {
  margin: 0;
  font-size: 13px;
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.9);
}
.fx-ph-hue-shift:hover {
  filter: hue-rotate(60deg) saturate(1.4);
  transform: translateY(-4px);
  border-color: rgba(255, 255, 255, 0.7);
}`,
  },
  {
    id: "ph-inner-zoom",
    name: "Inner Zoom Frame",
    category: "hover",
    description:
      "The framed artwork inside the card zooms closer on hover while the frame holds still.",
    tags: ["hover", "zoom", "frame", "scale"],
    html: `<div class="fx-ph-inner-zoom"><div class="fx-ph-inner-zoom-frame"><span class="fx-ph-inner-zoom-art"></span><span class="fx-ph-inner-zoom-dot"></span></div><h3>Inner Zoom</h3><p>Hover to zoom the framed art.</p></div>`,
    css: `.fx-ph-inner-zoom {
  width: 240px;
  padding: 18px;
  border-radius: 14px;
  background: linear-gradient(160deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.03));
  border: 1px solid rgba(255, 255, 255, 0.14);
  color: #f8fafc;
  transition: transform 0.4s ease, border-color 0.4s ease, box-shadow 0.4s ease;
}
.fx-ph-inner-zoom-frame {
  position: relative;
  height: 46px;
  margin-bottom: 10px;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid rgba(34, 211, 238, 0.4);
  background: #0d1526;
}
.fx-ph-inner-zoom-art {
  position: absolute;
  inset: -10%;
  background: repeating-linear-gradient(
    45deg,
    rgba(34, 211, 238, 0.55) 0 8px,
    rgba(167, 139, 250, 0.55) 8px 16px
  );
  transition: transform 0.45s cubic-bezier(0.22, 1, 0.36, 1);
}
.fx-ph-inner-zoom-dot {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 12px;
  height: 12px;
  margin: -6px 0 0 -6px;
  border-radius: 50%;
  background: #fbbf24;
  box-shadow: 0 0 10px rgba(251, 191, 36, 0.8);
  transition: transform 0.45s cubic-bezier(0.22, 1, 0.36, 1);
}
.fx-ph-inner-zoom h3 {
  margin: 0 0 6px;
  font-size: 18px;
  font-weight: 700;
}
.fx-ph-inner-zoom p {
  margin: 0;
  font-size: 13px;
  line-height: 1.5;
  color: #cbd5e1;
}
.fx-ph-inner-zoom:hover {
  transform: translateY(-3px);
  border-color: rgba(34, 211, 238, 0.55);
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.4);
}
.fx-ph-inner-zoom:hover .fx-ph-inner-zoom-art {
  transform: scale(1.12);
}
.fx-ph-inner-zoom:hover .fx-ph-inner-zoom-dot {
  transform: scale(1.2);
}`,
  },
  {
    id: "ph-long-shadow",
    name: "Long Diffuse Shadow",
    category: "hover",
    description:
      "The card lifts and a long diffuse colored shadow spreads far beneath it on hover.",
    tags: ["hover", "shadow", "lift", "depth"],
    html: `<div class="fx-ph-long-shadow"><h3>Long Shadow</h3><p>Hover to lift into a long glow.</p></div>`,
    css: `.fx-ph-long-shadow {
  width: 240px;
  padding: 20px;
  border-radius: 14px;
  background: linear-gradient(160deg, #1f2a44, #131c30);
  border: 1px solid rgba(255, 255, 255, 0.12);
  color: #f8fafc;
  box-shadow: 0 6px 14px rgba(0, 0, 0, 0.35);
  transition: transform 0.4s ease, box-shadow 0.45s ease, border-color 0.4s ease;
}
.fx-ph-long-shadow h3 {
  margin: 0 0 8px;
  font-size: 18px;
  font-weight: 700;
}
.fx-ph-long-shadow p {
  margin: 0;
  font-size: 13px;
  line-height: 1.5;
  color: #cbd5e1;
}
.fx-ph-long-shadow:hover {
  transform: translateY(-12px);
  border-color: rgba(240, 112, 37, 0.5);
  box-shadow: 0 42px 60px -18px rgba(240, 112, 37, 0.42),
    0 24px 40px -20px rgba(236, 72, 153, 0.32);
}`,
  },
  {
    id: "ph-accent-bar",
    name: "Accent Bar Card",
    category: "hover",
    description:
      "A glowing orange-pink bar slides in along the left edge and shines on hover.",
    tags: ["hover", "bar", "accent", "glow"],
    html: `<div class="fx-ph-accent-bar"><h3>Accent Bar</h3><p>Hover to slide in the glowing bar.</p></div>`,
    css: `.fx-ph-accent-bar {
  position: relative;
  overflow: hidden;
  width: 240px;
  padding: 20px 20px 20px 26px;
  border-radius: 14px;
  background: linear-gradient(160deg, rgba(255, 255, 255, 0.07), rgba(255, 255, 255, 0.02));
  border: 1px solid rgba(255, 255, 255, 0.12);
  color: #f8fafc;
  transition: transform 0.4s ease, border-color 0.4s ease;
}
.fx-ph-accent-bar h3 {
  margin: 0 0 8px;
  font-size: 18px;
  font-weight: 700;
}
.fx-ph-accent-bar p {
  margin: 0;
  font-size: 13px;
  line-height: 1.5;
  color: #cbd5e1;
}
.fx-ph-accent-bar::before {
  content: "";
  position: absolute;
  left: 0;
  top: 14px;
  bottom: 14px;
  width: 4px;
  border-radius: 0 4px 4px 0;
  background: linear-gradient(180deg, #f07025, #ec4899);
  transform: scaleY(0);
  transform-origin: top;
  transition: transform 0.4s ease, box-shadow 0.4s ease;
}
.fx-ph-accent-bar:hover {
  transform: translateX(6px);
  border-color: rgba(240, 112, 37, 0.55);
}
.fx-ph-accent-bar:hover::before {
  transform: scaleY(1);
  box-shadow: 0 0 14px rgba(240, 112, 37, 0.8);
}`,
  },
  {
    id: "ph-gradient-wipe",
    name: "Gradient Wipe Card",
    category: "hover",
    description:
      "A cyan-violet gradient wash wipes diagonally across the card face on hover.",
    tags: ["hover", "gradient", "wipe", "overlay"],
    html: `<div class="fx-ph-gradient-wipe"><h3>Gradient Wipe</h3><p>Hover to wipe color across the face.</p></div>`,
    css: `.fx-ph-gradient-wipe {
  position: relative;
  overflow: hidden;
  width: 240px;
  padding: 20px;
  border-radius: 14px;
  background: linear-gradient(160deg, #1c2740, #121a2e);
  border: 1px solid rgba(255, 255, 255, 0.12);
  color: #f8fafc;
  transition: transform 0.4s ease, border-color 0.4s ease;
}
.fx-ph-gradient-wipe h3 {
  margin: 0 0 8px;
  font-size: 18px;
  font-weight: 700;
}
.fx-ph-gradient-wipe p {
  margin: 0;
  font-size: 13px;
  line-height: 1.5;
  color: #cbd5e1;
}
.fx-ph-gradient-wipe::after {
  content: "";
  position: absolute;
  inset: -20%;
  background: linear-gradient(
    120deg,
    transparent 30%,
    rgba(34, 211, 238, 0.35) 45%,
    rgba(167, 139, 250, 0.35) 55%,
    transparent 70%
  );
  transform: translateX(-110%);
  transition: transform 0.5s ease;
  pointer-events: none;
}
.fx-ph-gradient-wipe:hover {
  transform: translateY(-3px);
  border-color: rgba(167, 139, 250, 0.55);
}
.fx-ph-gradient-wipe:hover::after {
  transform: translateX(110%);
}`,
  },
  {
    id: "ph-spring-rotate",
    name: "Spring Rotate Card",
    category: "hover",
    description:
      "The card springs into a slight rotation with a playful overshoot on hover.",
    tags: ["hover", "spring", "rotate", "bounce"],
    html: `<div class="fx-ph-spring-rotate"><h3>Spring Rotate</h3><p>Hover for a springy little tilt.</p></div>`,
    css: `.fx-ph-spring-rotate {
  width: 240px;
  padding: 20px;
  border-radius: 14px;
  background: linear-gradient(160deg, rgba(167, 139, 250, 0.14), rgba(255, 255, 255, 0.04));
  border: 1px solid rgba(167, 139, 250, 0.35);
  color: #f8fafc;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
  transition: transform 0.45s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.45s ease;
}
.fx-ph-spring-rotate h3 {
  margin: 0 0 8px;
  font-size: 18px;
  font-weight: 700;
  color: #d8ccff;
}
.fx-ph-spring-rotate p {
  margin: 0;
  font-size: 13px;
  line-height: 1.5;
  color: #cbd5e1;
}
.fx-ph-spring-rotate:hover {
  transform: rotate(-3deg) scale(1.06);
  box-shadow: 0 18px 36px rgba(0, 0, 0, 0.45),
    0 0 24px rgba(167, 139, 250, 0.35);
}`,
  },
  {
    id: "ph-dash-glow",
    name: "Dashed Glow Border",
    category: "hover",
    description:
      "The dashed amber border fuses into a solid glowing frame on hover.",
    tags: ["hover", "border", "dashed", "glow"],
    html: `<div class="fx-ph-dash-glow"><h3>Dash Glow</h3><p>Hover to fuse the border into light.</p></div>`,
    css: `.fx-ph-dash-glow {
  width: 240px;
  padding: 20px;
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.04);
  border: 2px dashed rgba(251, 191, 36, 0.55);
  color: #f8fafc;
  transition: background 0.4s ease, border-color 0.4s ease, box-shadow 0.4s ease,
    transform 0.4s ease;
}
.fx-ph-dash-glow h3 {
  margin: 0 0 8px;
  font-size: 18px;
  font-weight: 700;
  color: #fde68a;
}
.fx-ph-dash-glow p {
  margin: 0;
  font-size: 13px;
  line-height: 1.5;
  color: #cbd5e1;
}
.fx-ph-dash-glow:hover {
  border-style: solid;
  border-color: #fbbf24;
  background: rgba(251, 191, 36, 0.1);
  box-shadow: 0 0 24px rgba(251, 191, 36, 0.35),
    0 12px 28px rgba(0, 0, 0, 0.4);
  transform: translateY(-4px);
}`,
  },
  {
    id: "ph-arrow-cta",
    name: "Arrow CTA Card",
    category: "hover",
    description:
      "A round arrow chip slides in from the right while the title shifts left on hover.",
    tags: ["hover", "arrow", "cta", "chip"],
    html: `<div class="fx-ph-arrow-cta"><h3>Arrow CTA</h3><p>Hover to summon the arrow chip.</p><span class="fx-ph-arrow-cta-chip">&#8594;</span></div>`,
    css: `.fx-ph-arrow-cta {
  position: relative;
  width: 240px;
  padding: 20px 58px 20px 20px;
  border-radius: 14px;
  background: linear-gradient(160deg, rgba(251, 191, 36, 0.12), rgba(255, 255, 255, 0.04));
  border: 1px solid rgba(251, 191, 36, 0.35);
  color: #f8fafc;
  transition: border-color 0.4s ease, box-shadow 0.4s ease;
}
.fx-ph-arrow-cta h3 {
  margin: 0 0 8px;
  font-size: 18px;
  font-weight: 700;
  transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.fx-ph-arrow-cta p {
  margin: 0;
  font-size: 13px;
  line-height: 1.5;
  color: #cbd5e1;
}
.fx-ph-arrow-cta-chip {
  position: absolute;
  right: 14px;
  top: 22px;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #fbbf24, #f07025);
  color: #0b1120;
  font-size: 16px;
  font-weight: 800;
  opacity: 0;
  transform: translateX(18px) scale(0.5);
  transition: opacity 0.35s ease, transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.fx-ph-arrow-cta:hover {
  border-color: rgba(251, 191, 36, 0.7);
  box-shadow: 0 0 22px rgba(251, 191, 36, 0.25),
    0 12px 28px rgba(0, 0, 0, 0.4);
}
.fx-ph-arrow-cta:hover h3 {
  transform: translateX(-14px);
}
.fx-ph-arrow-cta:hover .fx-ph-arrow-cta-chip {
  opacity: 1;
  transform: translateX(0) scale(1);
}`,
  },
  {
    id: "ph-half-flip",
    name: "Half Split Reveal",
    category: "hover",
    description:
      "The top and bottom halves slide apart to reveal a glowing color core on hover.",
    tags: ["hover", "split", "reveal", "core"],
    html: `<div class="fx-ph-half-flip"><div class="fx-ph-half-flip-core"><span>Hello!</span></div><div class="fx-ph-half-flip-top"><h3>Half Split</h3></div><div class="fx-ph-half-flip-bottom"><p>Hover to part the halves.</p></div></div>`,
    css: `.fx-ph-half-flip {
  position: relative;
  width: 240px;
  height: 118px;
  border-radius: 14px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.14);
  color: #f8fafc;
  transition: border-color 0.4s ease, box-shadow 0.4s ease;
}
.fx-ph-half-flip-core {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: radial-gradient(circle at 50% 45%, rgba(255, 255, 255, 0.3), transparent 55%),
    linear-gradient(135deg, #22d3ee, #a78bfa);
}
.fx-ph-half-flip-core span {
  font-size: 15px;
  font-weight: 800;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: #0b1120;
}
.fx-ph-half-flip-top,
.fx-ph-half-flip-bottom {
  position: absolute;
  left: 0;
  right: 0;
  height: 50%;
  display: flex;
  transition: transform 0.45s cubic-bezier(0.22, 1, 0.36, 1);
}
.fx-ph-half-flip-top {
  top: 0;
  align-items: flex-end;
  padding: 0 20px 6px;
  background: linear-gradient(160deg, #26314b, #1a2439);
}
.fx-ph-half-flip-bottom {
  bottom: 0;
  align-items: flex-start;
  padding: 6px 20px 0;
  background: linear-gradient(20deg, #223052, #16203a);
}
.fx-ph-half-flip-top h3 {
  margin: 0;
  font-size: 18px;
  font-weight: 700;
}
.fx-ph-half-flip-bottom p {
  margin: 0;
  font-size: 13px;
  line-height: 1.5;
  color: #cbd5e1;
}
.fx-ph-half-flip:hover {
  border-color: rgba(34, 211, 238, 0.6);
  box-shadow: 0 0 24px rgba(34, 211, 238, 0.25);
}
.fx-ph-half-flip:hover .fx-ph-half-flip-top {
  transform: translateY(-100%);
}
.fx-ph-half-flip:hover .fx-ph-half-flip-bottom {
  transform: translateY(100%);
}`,
  },
  {
    id: "ph-icon-pop",
    name: "Icon Pop Badge",
    category: "hover",
    description:
      "A golden circular badge bounces in above the title with a springy overshoot on hover.",
    tags: ["hover", "icon", "badge", "bounce"],
    html: `<div class="fx-ph-icon-pop"><div class="fx-ph-icon-pop-slot"><span class="fx-ph-icon-pop-badge">&#10022;</span></div><h3>Icon Pop</h3><p>Hover to bounce the badge in.</p></div>`,
    css: `.fx-ph-icon-pop {
  width: 240px;
  padding: 20px;
  border-radius: 14px;
  text-align: center;
  background: linear-gradient(160deg, rgba(255, 255, 255, 0.07), rgba(255, 255, 255, 0.02));
  border: 1px solid rgba(255, 255, 255, 0.12);
  color: #f8fafc;
  transition: transform 0.4s ease, border-color 0.4s ease, box-shadow 0.4s ease;
}
.fx-ph-icon-pop-slot {
  max-height: 0;
  margin-bottom: 0;
  overflow: hidden;
  display: flex;
  justify-content: center;
  transition: max-height 0.35s ease, margin-bottom 0.35s ease;
}
.fx-ph-icon-pop-badge {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #fbbf24, #f07025);
  color: #0b1120;
  font-size: 18px;
  font-weight: 700;
  box-shadow: 0 6px 16px rgba(251, 191, 36, 0.4);
  transform: scale(0) rotate(-40deg);
  transition: transform 0.45s cubic-bezier(0.34, 1.7, 0.64, 1) 0.05s;
}
.fx-ph-icon-pop h3 {
  margin: 0 0 6px;
  font-size: 18px;
  font-weight: 700;
}
.fx-ph-icon-pop p {
  margin: 0;
  font-size: 13px;
  line-height: 1.5;
  color: #cbd5e1;
}
.fx-ph-icon-pop:hover {
  transform: translateY(-4px);
  border-color: rgba(251, 191, 36, 0.6);
  box-shadow: 0 14px 30px rgba(0, 0, 0, 0.4);
}
.fx-ph-icon-pop:hover .fx-ph-icon-pop-slot {
  max-height: 46px;
  margin-bottom: 10px;
}
.fx-ph-icon-pop:hover .fx-ph-icon-pop-badge {
  transform: scale(1) rotate(0deg);
}`,
  },
  {
    id: "ph-ambient-sheen",
    name: "Ambient Sheen Card",
    category: "hover",
    description:
      "A soft sheen drifts across the glass continuously and brightens on hover.",
    tags: ["hover", "sheen", "glass", "ambient"],
    html: `<div class="fx-ph-ambient-sheen"><h3>Ambient Sheen</h3><p>A slow light drifts and brightens.</p></div>`,
    css: `.fx-ph-ambient-sheen {
  position: relative;
  overflow: hidden;
  width: 240px;
  padding: 20px;
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.16);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  color: #f8fafc;
  box-shadow: 0 8px 22px rgba(0, 0, 0, 0.3);
  transition: transform 0.4s ease, border-color 0.4s ease, box-shadow 0.4s ease;
}
.fx-ph-ambient-sheen h3 {
  margin: 0 0 8px;
  font-size: 18px;
  font-weight: 700;
}
.fx-ph-ambient-sheen p {
  margin: 0;
  font-size: 13px;
  line-height: 1.5;
  color: #cbd5e1;
}
.fx-ph-ambient-sheen::before {
  content: "";
  position: absolute;
  top: -30%;
  bottom: -30%;
  left: -60%;
  width: 45%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.16), transparent);
  transform: skewX(-18deg);
  opacity: 0.5;
  animation: fx-ph-ambient-sheen-drift 4.5s linear infinite;
  transition: opacity 0.4s ease;
  pointer-events: none;
}
.fx-ph-ambient-sheen:hover {
  transform: translateY(-4px);
  border-color: rgba(34, 211, 238, 0.6);
  box-shadow: 0 14px 30px rgba(0, 0, 0, 0.4), 0 0 20px rgba(34, 211, 238, 0.2);
}
.fx-ph-ambient-sheen:hover::before {
  opacity: 1;
}
@keyframes fx-ph-ambient-sheen-drift {
  from {
    transform: skewX(-18deg) translateX(0);
  }
  to {
    transform: skewX(-18deg) translateX(360%);
  }
}`,
  },
  {
    id: "ph-glow-ring",
    name: "Glow Ring Pulse",
    category: "hover",
    description:
      "A green glow ring pulses outward around the card edges on hover.",
    tags: ["hover", "glow", "ring", "pulse"],
    html: `<div class="fx-ph-glow-ring"><h3>Glow Ring</h3><p>Hover to pulse the halo outward.</p></div>`,
    css: `.fx-ph-glow-ring {
  width: 240px;
  padding: 20px;
  border-radius: 14px;
  background: linear-gradient(160deg, rgba(52, 211, 153, 0.1), rgba(255, 255, 255, 0.03));
  border: 1px solid rgba(52, 211, 153, 0.4);
  color: #f8fafc;
  box-shadow: 0 8px 22px rgba(0, 0, 0, 0.35);
  transition: transform 0.4s ease, border-color 0.4s ease;
}
.fx-ph-glow-ring h3 {
  margin: 0 0 8px;
  font-size: 18px;
  font-weight: 700;
  color: #a7f3d0;
}
.fx-ph-glow-ring p {
  margin: 0;
  font-size: 13px;
  line-height: 1.5;
  color: #cbd5e1;
}
.fx-ph-glow-ring:hover {
  transform: translateY(-4px);
  border-color: rgba(52, 211, 153, 0.85);
  animation: fx-ph-glow-ring-pulse 1.6s ease-in-out infinite;
}
@keyframes fx-ph-glow-ring-pulse {
  0%,
  100% {
    box-shadow: 0 0 0 0 rgba(52, 211, 153, 0.35),
      0 8px 22px rgba(0, 0, 0, 0.35);
  }
  50% {
    box-shadow: 0 0 0 8px rgba(52, 211, 153, 0.18),
      0 0 36px 6px rgba(52, 211, 153, 0.45);
  }
}`,
  },
  {
    id: "ph-shadow-stack",
    name: "Shadow Stack Card",
    category: "hover",
    description:
      "Stacked cyan, pink and orange shadows cascade beneath the card on hover.",
    tags: ["hover", "shadow", "stack", "color"],
    html: `<div class="fx-ph-shadow-stack"><h3>Shadow Stack</h3><p>Hover to cascade colored shadows.</p></div>`,
    css: `.fx-ph-shadow-stack {
  width: 240px;
  padding: 20px;
  border-radius: 14px;
  background: linear-gradient(160deg, #1f2a44, #131c30);
  border: 1px solid rgba(255, 255, 255, 0.12);
  color: #f8fafc;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.35);
  transition: transform 0.4s ease, box-shadow 0.45s ease, border-color 0.4s ease;
}
.fx-ph-shadow-stack h3 {
  margin: 0 0 8px;
  font-size: 18px;
  font-weight: 700;
}
.fx-ph-shadow-stack p {
  margin: 0;
  font-size: 13px;
  line-height: 1.5;
  color: #cbd5e1;
}
.fx-ph-shadow-stack:hover {
  transform: translateY(-8px);
  border-color: rgba(255, 255, 255, 0.3);
  box-shadow: 0 4px 0 -1px rgba(34, 211, 238, 0.55),
    0 12px 0 -3px rgba(236, 72, 153, 0.45),
    0 22px 0 -5px rgba(240, 112, 37, 0.4),
    0 34px 46px -12px rgba(0, 0, 0, 0.55);
}`,
  },
  {
    id: "ph-tilt-glide",
    name: "Tilt Glide Parallax",
    category: "hover",
    description:
      "The card glides toward the top-right while its content counter-drifts for parallax depth on hover.",
    tags: ["hover", "parallax", "glide", "depth"],
    html: `<div class="fx-ph-tilt-glide"><div class="fx-ph-tilt-glide-inner"><h3>Tilt Glide</h3><p>Hover to drift with parallax.</p></div></div>`,
    css: `.fx-ph-tilt-glide {
  width: 240px;
  padding: 20px;
  border-radius: 14px;
  background: linear-gradient(150deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.03));
  border: 1px solid rgba(255, 255, 255, 0.14);
  color: #f8fafc;
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.35);
  transition: transform 0.4s ease, box-shadow 0.4s ease, border-color 0.4s ease;
}
.fx-ph-tilt-glide-inner {
  transition: transform 0.4s ease;
}
.fx-ph-tilt-glide h3 {
  margin: 0 0 8px;
  font-size: 18px;
  font-weight: 700;
}
.fx-ph-tilt-glide p {
  margin: 0;
  font-size: 13px;
  line-height: 1.5;
  color: #cbd5e1;
}
.fx-ph-tilt-glide:hover {
  transform: translate(6px, -6px);
  border-color: rgba(34, 211, 238, 0.5);
  box-shadow: -10px 16px 32px rgba(0, 0, 0, 0.5),
    0 0 18px rgba(34, 211, 238, 0.2);
}
.fx-ph-tilt-glide:hover .fx-ph-tilt-glide-inner {
  transform: translate(-4px, 3px);
}`,
  },
];
