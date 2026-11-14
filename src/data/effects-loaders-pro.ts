import type { Effect } from "./effects";

/**
 * Pro batch: 21 loader effects (ids prefixed pl-).
 */
export const EFFECTS_LOADERS_PRO: Effect[] = [
  // -------------------------------------------------------------- LOADERS
  {
    id: "pl-wave-dots",
    name: "Wave Dots",
    category: "loaders",
    description:
      "Five dots ride an invisible sine wave, each one arriving a beat later than the last.",
    tags: ["dots", "wave", "stagger"],
    html: `<div class="fx-pl-wave-dots"><span class="fx-pl-wave-dots-dot"></span><span class="fx-pl-wave-dots-dot"></span><span class="fx-pl-wave-dots-dot"></span><span class="fx-pl-wave-dots-dot"></span><span class="fx-pl-wave-dots-dot"></span></div>`,
    css: `.fx-pl-wave-dots {
  display: flex;
  align-items: center;
  gap: 10px;
  height: 56px;
}
.fx-pl-wave-dots-dot {
  width: 13px;
  height: 13px;
  border-radius: 50%;
  background: #22d3ee;
  animation: fx-pl-wave-dots-ride 1.15s ease-in-out infinite;
}
.fx-pl-wave-dots-dot:nth-child(2) {
  background: #a78bfa;
  animation-delay: 0.13s;
}
.fx-pl-wave-dots-dot:nth-child(3) {
  background: #ec4899;
  animation-delay: 0.26s;
}
.fx-pl-wave-dots-dot:nth-child(4) {
  background: #fbbf24;
  animation-delay: 0.39s;
}
.fx-pl-wave-dots-dot:nth-child(5) {
  background: #34d399;
  animation-delay: 0.52s;
}
@keyframes fx-pl-wave-dots-ride {
  0%, 100% { transform: translateY(16px) scale(0.85); }
  50% { transform: translateY(-16px) scale(1); }
}`,
  },
  {
    id: "pl-flip-cascade",
    name: "Flip Cascade",
    category: "loaders",
    description:
      "Three rounded squares somersault around the Y axis one after another in an endless relay.",
    tags: ["flip", "cascade", "3d"],
    html: `<div class="fx-pl-flip-cascade"><span class="fx-pl-flip-cascade-square"></span><span class="fx-pl-flip-cascade-square"></span><span class="fx-pl-flip-cascade-square"></span></div>`,
    css: `.fx-pl-flip-cascade {
  display: flex;
  gap: 16px;
  perspective: 420px;
}
.fx-pl-flip-cascade-square {
  width: 30px;
  height: 30px;
  border-radius: 8px;
  background: #a78bfa;
  box-shadow: 0 0 14px rgba(167, 139, 250, 0.45);
  animation: fx-pl-flip-cascade-flip 1.9s cubic-bezier(0.45, 0, 0.25, 1) infinite;
}
.fx-pl-flip-cascade-square:nth-child(2) {
  background: #ec4899;
  box-shadow: 0 0 14px rgba(236, 72, 153, 0.45);
  animation-delay: 0.22s;
}
.fx-pl-flip-cascade-square:nth-child(3) {
  background: #22d3ee;
  box-shadow: 0 0 14px rgba(34, 211, 238, 0.45);
  animation-delay: 0.44s;
}
@keyframes fx-pl-flip-cascade-flip {
  0%, 18% { transform: rotateY(0deg); }
  50%, 68% { transform: rotateY(180deg); }
  100% { transform: rotateY(360deg); }
}`,
  },
  {
    id: "pl-hourglass",
    name: "Flip Hourglass",
    category: "loaders",
    description:
      "An amber hourglass drains its sand, tips over, and starts pouring again every couple of seconds.",
    tags: ["hourglass", "flip", "time"],
    html: `<div class="fx-pl-hourglass"><span class="fx-pl-hourglass-top"></span><span class="fx-pl-hourglass-bottom"></span></div>`,
    css: `.fx-pl-hourglass {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  animation: fx-pl-hourglass-flip 2.2s cubic-bezier(0.7, 0, 0.3, 1) infinite;
}
.fx-pl-hourglass-top {
  width: 0;
  height: 0;
  border-left: 17px solid transparent;
  border-right: 17px solid transparent;
  border-top: 24px solid #fbbf24;
  transform-origin: top center;
  animation: fx-pl-hourglass-drain 2.2s ease-in infinite;
}
.fx-pl-hourglass-bottom {
  width: 0;
  height: 0;
  border-left: 17px solid transparent;
  border-right: 17px solid transparent;
  border-bottom: 24px solid #fbbf24;
  transform-origin: bottom center;
  animation: fx-pl-hourglass-fill 2.2s ease-out infinite;
}
@keyframes fx-pl-hourglass-flip {
  0%, 55% { transform: rotate(0deg); }
  100% { transform: rotate(180deg); }
}
@keyframes fx-pl-hourglass-drain {
  0% { transform: scaleY(1); }
  55%, 100% { transform: scaleY(0.12); }
}
@keyframes fx-pl-hourglass-fill {
  0% { transform: scaleY(0.12); }
  55%, 100% { transform: scaleY(1); }
}`,
  },
  {
    id: "pl-radar",
    name: "Radar Sweep",
    category: "loaders",
    description:
      "A green radar disc spins a glowing sweep wedge while two blips ping their echoes back.",
    tags: ["radar", "sweep", "ping"],
    html: `<div class="fx-pl-radar"><span class="fx-pl-radar-sweep"></span><span class="fx-pl-radar-blip"></span><span class="fx-pl-radar-blip fx-pl-radar-blip-b"></span></div>`,
    css: `.fx-pl-radar {
  position: relative;
  width: 110px;
  height: 110px;
  border-radius: 50%;
  border: 2px solid rgba(52, 211, 153, 0.45);
  overflow: hidden;
  background: radial-gradient(circle, rgba(52, 211, 153, 0.14), rgba(52, 211, 153, 0.03));
}
.fx-pl-radar-sweep {
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background: conic-gradient(from 0deg, rgba(52, 211, 153, 0.55), rgba(52, 211, 153, 0) 75deg);
  animation: fx-pl-radar-spin 2.6s linear infinite;
}
.fx-pl-radar::before {
  content: "";
  position: absolute;
  inset: 26px;
  border-radius: 50%;
  border: 1px solid rgba(52, 211, 153, 0.3);
}
.fx-pl-radar-blip {
  position: absolute;
  top: 32px;
  left: 72px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #34d399;
  opacity: 0.6;
  animation: fx-pl-radar-ping 2.6s ease-out infinite;
}
.fx-pl-radar-blip-b {
  top: 74px;
  left: 30px;
  animation-delay: 1.3s;
}
@keyframes fx-pl-radar-spin {
  to { transform: rotate(360deg); }
}
@keyframes fx-pl-radar-ping {
  0% { box-shadow: 0 0 0 0 rgba(52, 211, 153, 0.7); opacity: 1; }
  70% { box-shadow: 0 0 0 16px rgba(52, 211, 153, 0); opacity: 1; }
  100% { box-shadow: 0 0 0 0 rgba(52, 211, 153, 0); opacity: 0.6; }
}`,
  },
  {
    id: "pl-grid-wave",
    name: "Grid Wave",
    category: "loaders",
    description:
      "A three-by-three panel of tiles pulses bright in a diagonal wave that rolls corner to corner.",
    tags: ["grid", "wave", "tiles"],
    html: `<div class="fx-pl-grid-wave"><span class="fx-pl-grid-wave-cell"></span><span class="fx-pl-grid-wave-cell"></span><span class="fx-pl-grid-wave-cell"></span><span class="fx-pl-grid-wave-cell"></span><span class="fx-pl-grid-wave-cell"></span><span class="fx-pl-grid-wave-cell"></span><span class="fx-pl-grid-wave-cell"></span><span class="fx-pl-grid-wave-cell"></span><span class="fx-pl-grid-wave-cell"></span></div>`,
    css: `.fx-pl-grid-wave {
  display: grid;
  grid-template-columns: repeat(3, 26px);
  gap: 8px;
}
.fx-pl-grid-wave-cell {
  width: 26px;
  height: 26px;
  border-radius: 7px;
  background: #1e293b;
  transform: scale(0.75);
  animation: fx-pl-grid-wave-pulse 1.6s ease-in-out infinite;
}
.fx-pl-grid-wave-cell:nth-child(1) { animation-delay: 0s; }
.fx-pl-grid-wave-cell:nth-child(2),
.fx-pl-grid-wave-cell:nth-child(4) { animation-delay: 0.16s; }
.fx-pl-grid-wave-cell:nth-child(3),
.fx-pl-grid-wave-cell:nth-child(5),
.fx-pl-grid-wave-cell:nth-child(7) { animation-delay: 0.32s; }
.fx-pl-grid-wave-cell:nth-child(6),
.fx-pl-grid-wave-cell:nth-child(8) { animation-delay: 0.48s; }
.fx-pl-grid-wave-cell:nth-child(9) { animation-delay: 0.64s; }
@keyframes fx-pl-grid-wave-pulse {
  0%, 100% { transform: scale(0.75); background: #1e293b; }
  35% { transform: scale(1); background: #22d3ee; }
}`,
  },
  {
    id: "pl-pacman",
    name: "Pacman Munch",
    category: "loaders",
    description:
      "A chomping arcade mouth runs down the lane, eats three pellets one by one, then resets for another pass.",
    tags: ["pacman", "arcade", "chomp"],
    html: `<div class="fx-pl-pacman"><span class="fx-pl-pacman-mouth"></span><span class="fx-pl-pacman-dot"></span><span class="fx-pl-pacman-dot"></span><span class="fx-pl-pacman-dot"></span></div>`,
    css: `.fx-pl-pacman {
  position: relative;
  width: 172px;
  height: 44px;
}
.fx-pl-pacman-mouth {
  position: absolute;
  top: 2px;
  left: 2px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #fbbf24;
  clip-path: polygon(50% 50%, 100% 32%, 100% 0, 0 0, 0 100%, 100% 100%, 100% 68%);
  animation: fx-pl-pacman-run 4.2s linear infinite, fx-pl-pacman-chomp 0.5s ease-in-out infinite;
}
.fx-pl-pacman-dot {
  position: absolute;
  top: 18px;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #ec4899;
}
.fx-pl-pacman-dot:nth-child(2) { left: 106px; animation: fx-pl-pacman-eat-a 4.2s linear infinite; }
.fx-pl-pacman-dot:nth-child(3) { left: 130px; animation: fx-pl-pacman-eat-b 4.2s linear infinite; }
.fx-pl-pacman-dot:nth-child(4) { left: 154px; animation: fx-pl-pacman-eat-c 4.2s linear infinite; }
@keyframes fx-pl-pacman-run {
  0%, 6% { transform: translateX(0); }
  82%, 100% { transform: translateX(128px); }
}
@keyframes fx-pl-pacman-chomp {
  0%, 100% { clip-path: polygon(50% 50%, 100% 48%, 100% 0, 0 0, 0 100%, 100% 100%, 100% 52%); }
  50% { clip-path: polygon(50% 50%, 100% 18%, 100% 0, 0 0, 0 100%, 100% 100%, 100% 82%); }
}
@keyframes fx-pl-pacman-eat-a {
  0%, 36% { transform: scale(1); opacity: 1; }
  42%, 100% { transform: scale(0); opacity: 0; }
}
@keyframes fx-pl-pacman-eat-b {
  0%, 48% { transform: scale(1); opacity: 1; }
  54%, 100% { transform: scale(0); opacity: 0; }
}
@keyframes fx-pl-pacman-eat-c {
  0%, 60% { transform: scale(1); opacity: 1; }
  66%, 100% { transform: scale(0); opacity: 0; }
}`,
  },
  {
    id: "pl-eclipse",
    name: "Eclipse Orbit",
    category: "loaders",
    description:
      "A blazing amber disc circles the rim of a shadowed disc, grazing its edge like a solar eclipse on loop.",
    tags: ["eclipse", "orbit", "glow"],
    html: `<div class="fx-pl-eclipse"><span class="fx-pl-eclipse-dark"></span><span class="fx-pl-eclipse-orbit"><span class="fx-pl-eclipse-sun"></span></span></div>`,
    css: `.fx-pl-eclipse {
  position: relative;
  width: 100px;
  height: 100px;
}
.fx-pl-eclipse-dark {
  position: absolute;
  inset: 16px;
  border-radius: 50%;
  background: #1e293b;
  border: 2px solid rgba(148, 163, 184, 0.3);
  box-shadow: inset 0 0 18px rgba(34, 211, 238, 0.15);
}
.fx-pl-eclipse-orbit {
  position: absolute;
  inset: 0;
  animation: fx-pl-eclipse-spin 3s linear infinite;
}
.fx-pl-eclipse-sun {
  position: absolute;
  top: -6px;
  left: 35px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: #fbbf24;
  box-shadow: 0 0 16px rgba(251, 191, 36, 0.75);
}
@keyframes fx-pl-eclipse-spin {
  to { transform: rotate(360deg); }
}`,
  },
  {
    id: "pl-drop-stack",
    name: "Drop Stack",
    category: "loaders",
    description:
      "Three colored slabs fall from above, bounce once, and stack into a neat pile before clearing for the next round.",
    tags: ["stack", "drop", "bounce"],
    html: `<div class="fx-pl-drop-stack"><span class="fx-pl-drop-stack-bar"></span><span class="fx-pl-drop-stack-bar"></span><span class="fx-pl-drop-stack-bar"></span></div>`,
    css: `.fx-pl-drop-stack {
  position: relative;
  width: 64px;
  height: 60px;
}
.fx-pl-drop-stack-bar {
  position: absolute;
  left: 10px;
  width: 44px;
  height: 11px;
  border-radius: 6px;
  opacity: 0;
  animation: fx-pl-drop-stack-fall 2.4s ease-in-out infinite;
}
.fx-pl-drop-stack-bar:nth-child(1) { bottom: 0; background: #22d3ee; }
.fx-pl-drop-stack-bar:nth-child(2) { bottom: 14px; background: #a78bfa; animation-delay: 0.25s; }
.fx-pl-drop-stack-bar:nth-child(3) { bottom: 28px; background: #ec4899; animation-delay: 0.5s; }
@keyframes fx-pl-drop-stack-fall {
  0% { transform: translateY(-52px); opacity: 0; }
  32% { transform: translateY(0); opacity: 1; }
  42% { transform: translateY(-7px); }
  50%, 86% { transform: translateY(0); opacity: 1; }
  100% { transform: translateY(0); opacity: 0; }
}`,
  },
  {
    id: "pl-sonar",
    name: "Sonar Ping",
    category: "loaders",
    description:
      "Concentric rings ripple outward from a glowing cyan core like sonar pulses crossing deep water.",
    tags: ["sonar", "ping", "rings"],
    html: `<div class="fx-pl-sonar"><span class="fx-pl-sonar-core"></span><span class="fx-pl-sonar-ring"></span><span class="fx-pl-sonar-ring"></span><span class="fx-pl-sonar-ring"></span></div>`,
    css: `.fx-pl-sonar {
  position: relative;
  width: 92px;
  height: 92px;
}
.fx-pl-sonar-core {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 12px;
  height: 12px;
  margin: -6px 0 0 -6px;
  border-radius: 50%;
  background: #22d3ee;
  box-shadow: 0 0 12px rgba(34, 211, 238, 0.8);
}
.fx-pl-sonar-ring {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 14px;
  height: 14px;
  margin: -7px 0 0 -7px;
  border-radius: 50%;
  border: 2px solid #22d3ee;
  opacity: 0;
  animation: fx-pl-sonar-ping 2.4s cubic-bezier(0.2, 0.4, 0.4, 1) infinite;
}
.fx-pl-sonar-ring:nth-child(3) { animation-delay: 0.8s; }
.fx-pl-sonar-ring:nth-child(4) { animation-delay: 1.6s; }
@keyframes fx-pl-sonar-ping {
  0% { transform: scale(1); opacity: 0.85; }
  100% { transform: scale(6.5); opacity: 0; }
}`,
  },
  {
    id: "pl-windmill",
    name: "Windmill Flutter",
    category: "loaders",
    description:
      "Six pastel blades spin like a windmill while each one flutters on its own slightly offset phase.",
    tags: ["windmill", "spin", "blades"],
    html: `<div class="fx-pl-windmill"><span class="fx-pl-windmill-blade"></span><span class="fx-pl-windmill-blade"></span><span class="fx-pl-windmill-blade"></span><span class="fx-pl-windmill-blade"></span><span class="fx-pl-windmill-blade"></span><span class="fx-pl-windmill-blade"></span></div>`,
    css: `.fx-pl-windmill {
  position: relative;
  width: 68px;
  height: 68px;
  animation: fx-pl-windmill-spin 4.5s linear infinite;
}
.fx-pl-windmill-blade {
  position: absolute;
  left: 30px;
  bottom: 34px;
  width: 8px;
  height: 30px;
  border-radius: 4px;
  transform-origin: 50% 100%;
  background: #22d3ee;
  --a: 0deg;
  animation: fx-pl-windmill-sway 1.4s ease-in-out infinite;
}
.fx-pl-windmill-blade:nth-child(2) { --a: 60deg; background: #a78bfa; animation-delay: -0.12s; }
.fx-pl-windmill-blade:nth-child(3) { --a: 120deg; background: #ec4899; animation-delay: -0.24s; }
.fx-pl-windmill-blade:nth-child(4) { --a: 180deg; background: #fbbf24; animation-delay: -0.36s; }
.fx-pl-windmill-blade:nth-child(5) { --a: 240deg; background: #34d399; animation-delay: -0.48s; }
.fx-pl-windmill-blade:nth-child(6) { --a: 300deg; background: #f07025; animation-delay: -0.6s; }
@keyframes fx-pl-windmill-sway {
  0%, 100% { transform: rotate(calc(var(--a) - 11deg)); }
  50% { transform: rotate(calc(var(--a) + 11deg)); }
}
@keyframes fx-pl-windmill-spin {
  to { transform: rotate(360deg); }
}`,
  },
  {
    id: "pl-helix",
    name: "Helix Strand",
    category: "loaders",
    description:
      "Two strands of dots rise and fall out of phase, weaving a floating DNA ladder in mid-air.",
    tags: ["helix", "dna", "strand"],
    html: `<div class="fx-pl-helix"><div class="fx-pl-helix-strand"><span class="fx-pl-helix-dot"></span><span class="fx-pl-helix-dot"></span><span class="fx-pl-helix-dot"></span><span class="fx-pl-helix-dot"></span></div><div class="fx-pl-helix-strand fx-pl-helix-strand-b"><span class="fx-pl-helix-dot"></span><span class="fx-pl-helix-dot"></span><span class="fx-pl-helix-dot"></span><span class="fx-pl-helix-dot"></span></div></div>`,
    css: `.fx-pl-helix {
  display: flex;
  gap: 26px;
  height: 92px;
  align-items: center;
}
.fx-pl-helix-strand {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.fx-pl-helix-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #22d3ee;
  animation: fx-pl-helix-rise 2.1s linear infinite;
}
.fx-pl-helix-strand-b .fx-pl-helix-dot {
  background: #ec4899;
}
.fx-pl-helix-strand .fx-pl-helix-dot:nth-child(2) { animation-delay: -0.18s; }
.fx-pl-helix-strand .fx-pl-helix-dot:nth-child(3) { animation-delay: -0.36s; }
.fx-pl-helix-strand .fx-pl-helix-dot:nth-child(4) { animation-delay: -0.54s; }
.fx-pl-helix-strand-b .fx-pl-helix-dot:nth-child(1) { animation-delay: -1.05s; }
.fx-pl-helix-strand-b .fx-pl-helix-dot:nth-child(2) { animation-delay: -1.23s; }
.fx-pl-helix-strand-b .fx-pl-helix-dot:nth-child(3) { animation-delay: -1.41s; }
.fx-pl-helix-strand-b .fx-pl-helix-dot:nth-child(4) { animation-delay: -1.59s; }
@keyframes fx-pl-helix-rise {
  0% { transform: translateY(22px); opacity: 0; }
  20%, 80% { opacity: 1; }
  100% { transform: translateY(-22px); opacity: 0; }
}`,
  },
  {
    id: "pl-gooey-blobs",
    name: "Gooey Blobs",
    category: "loaders",
    description:
      "Two vivid blobs drift toward each other, melt into one rounded shape, then pull apart and start over.",
    tags: ["gooey", "blob", "merge"],
    html: `<div class="fx-pl-gooey-blobs"><span class="fx-pl-gooey-blobs-blob fx-pl-gooey-blobs-blob-a"></span><span class="fx-pl-gooey-blobs-blob fx-pl-gooey-blobs-blob-b"></span></div>`,
    css: `.fx-pl-gooey-blobs {
  position: relative;
  width: 120px;
  height: 56px;
}
.fx-pl-gooey-blobs-blob {
  position: absolute;
  top: 8px;
  width: 40px;
  height: 40px;
  opacity: 0.85;
}
.fx-pl-gooey-blobs-blob-a {
  left: 8px;
  background: #ec4899;
  animation: fx-pl-gooey-blobs-meet-a 2.8s ease-in-out infinite, fx-pl-gooey-blobs-morph 2.8s ease-in-out infinite;
}
.fx-pl-gooey-blobs-blob-b {
  right: 8px;
  background: #a78bfa;
  animation: fx-pl-gooey-blobs-meet-b 2.8s ease-in-out infinite, fx-pl-gooey-blobs-morph 2.8s ease-in-out infinite;
}
@keyframes fx-pl-gooey-blobs-meet-a {
  0%, 100% { transform: translateX(0); }
  50% { transform: translateX(28px); }
}
@keyframes fx-pl-gooey-blobs-meet-b {
  0%, 100% { transform: translateX(0); }
  50% { transform: translateX(-28px); }
}
@keyframes fx-pl-gooey-blobs-morph {
  0%, 100% { border-radius: 58% 42% 55% 45% / 48% 60% 40% 52%; }
  50% { border-radius: 50%; }
}`,
  },
  {
    id: "pl-tumble",
    name: "Tumble Roll",
    category: "loaders",
    description:
      "A rounded orange square tumbles end over end down a short line, then rolls back the other way.",
    tags: ["tumble", "roll", "cube"],
    html: `<div class="fx-pl-tumble"><span class="fx-pl-tumble-cube"></span></div>`,
    css: `.fx-pl-tumble {
  position: relative;
  width: 130px;
  height: 44px;
}
.fx-pl-tumble::after {
  content: "";
  position: absolute;
  bottom: 2px;
  left: 8px;
  width: 114px;
  height: 2px;
  border-radius: 2px;
  background: rgba(148, 163, 184, 0.25);
}
.fx-pl-tumble-cube {
  position: absolute;
  bottom: 6px;
  left: 50px;
  width: 30px;
  height: 30px;
  border-radius: 8px;
  background: #f07025;
  box-shadow: 0 0 14px rgba(240, 112, 37, 0.5);
  animation: fx-pl-tumble-roll 2.6s ease-in-out infinite;
}
@keyframes fx-pl-tumble-roll {
  0% { transform: translateX(-46px) rotate(0deg); }
  12.5% { transform: translateX(-23px) rotate(90deg); }
  25% { transform: translateX(0px) rotate(180deg); }
  37.5% { transform: translateX(23px) rotate(270deg); }
  50% { transform: translateX(46px) rotate(360deg); }
  62.5% { transform: translateX(23px) rotate(270deg); }
  75% { transform: translateX(0px) rotate(180deg); }
  87.5% { transform: translateX(-23px) rotate(90deg); }
  100% { transform: translateX(-46px) rotate(0deg); }
}`,
  },
  {
    id: "pl-orbit-square",
    name: "Square Orbit",
    category: "loaders",
    description:
      "A glowing cyan dot patrols the perimeter of a square track without ever slowing down.",
    tags: ["orbit", "square", "patrol"],
    html: `<div class="fx-pl-orbit-square"><span class="fx-pl-orbit-square-dot"></span></div>`,
    css: `.fx-pl-orbit-square {
  position: relative;
  width: 66px;
  height: 66px;
  border: 2px solid rgba(148, 163, 184, 0.35);
  border-radius: 10px;
}
.fx-pl-orbit-square-dot {
  position: absolute;
  top: -6px;
  left: -6px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #22d3ee;
  box-shadow: 0 0 12px rgba(34, 211, 238, 0.8);
  animation: fx-pl-orbit-square-patrol 3.4s linear infinite;
}
@keyframes fx-pl-orbit-square-patrol {
  0% { transform: translate(0, 0); }
  25% { transform: translate(62px, 0); }
  50% { transform: translate(62px, 62px); }
  75% { transform: translate(0, 62px); }
  100% { transform: translate(0, 0); }
}`,
  },
  {
    id: "pl-scan-beam",
    name: "Scan Beam",
    category: "loaders",
    description:
      "A luminous cyan beam glides up and down a dark rail like a scanner reading a page.",
    tags: ["scan", "beam", "glow"],
    html: `<div class="fx-pl-scan-beam"><span class="fx-pl-scan-beam-rail"></span><span class="fx-pl-scan-beam-light"></span></div>`,
    css: `.fx-pl-scan-beam {
  position: relative;
  width: 64px;
  height: 96px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.fx-pl-scan-beam-rail {
  width: 6px;
  height: 88px;
  border-radius: 4px;
  background: rgba(148, 163, 184, 0.18);
}
.fx-pl-scan-beam-light {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 52px;
  height: 7px;
  margin: -3.5px 0 0 -26px;
  border-radius: 4px;
  background: #22d3ee;
  box-shadow: 0 0 14px rgba(34, 211, 238, 0.8), 0 0 30px rgba(34, 211, 238, 0.35);
  animation: fx-pl-scan-beam-sweep 1.9s ease-in-out infinite alternate;
}
@keyframes fx-pl-scan-beam-sweep {
  from { transform: translateY(-40px); }
  to { transform: translateY(40px); }
}`,
  },
  {
    id: "pl-spinner-dots",
    name: "Spinner Dots",
    category: "loaders",
    description:
      "Eight dots around a circle ignite one by one in a crisp iOS-style chase around the dial.",
    tags: ["spinner", "dots", "sequence"],
    html: `<div class="fx-pl-spinner-dots"><span class="fx-pl-spinner-dots-dot"></span><span class="fx-pl-spinner-dots-dot"></span><span class="fx-pl-spinner-dots-dot"></span><span class="fx-pl-spinner-dots-dot"></span><span class="fx-pl-spinner-dots-dot"></span><span class="fx-pl-spinner-dots-dot"></span><span class="fx-pl-spinner-dots-dot"></span><span class="fx-pl-spinner-dots-dot"></span></div>`,
    css: `.fx-pl-spinner-dots {
  position: relative;
  width: 64px;
  height: 64px;
}
.fx-pl-spinner-dots-dot {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 9px;
  height: 9px;
  margin: -4.5px 0 0 -4.5px;
  border-radius: 50%;
  background: #f07025;
  opacity: 0.2;
  animation: fx-pl-spinner-dots-glow 1.4s linear infinite;
}
.fx-pl-spinner-dots-dot:nth-child(1) { transform: rotate(0deg) translateY(-25px); }
.fx-pl-spinner-dots-dot:nth-child(2) { transform: rotate(45deg) translateY(-25px); animation-delay: 0.13s; }
.fx-pl-spinner-dots-dot:nth-child(3) { transform: rotate(90deg) translateY(-25px); animation-delay: 0.26s; }
.fx-pl-spinner-dots-dot:nth-child(4) { transform: rotate(135deg) translateY(-25px); animation-delay: 0.39s; }
.fx-pl-spinner-dots-dot:nth-child(5) { transform: rotate(180deg) translateY(-25px); animation-delay: 0.52s; }
.fx-pl-spinner-dots-dot:nth-child(6) { transform: rotate(225deg) translateY(-25px); animation-delay: 0.65s; }
.fx-pl-spinner-dots-dot:nth-child(7) { transform: rotate(270deg) translateY(-25px); animation-delay: 0.78s; }
.fx-pl-spinner-dots-dot:nth-child(8) { transform: rotate(315deg) translateY(-25px); animation-delay: 0.91s; }
@keyframes fx-pl-spinner-dots-glow {
  0%, 10%, 100% { opacity: 0.2; }
  5% { opacity: 1; }
}`,
  },
  {
    id: "pl-fill-bar",
    name: "Fill Drain Bar",
    category: "loaders",
    description:
      "A pill-shaped track fills with a hot gradient, pauses at full, then drains back for the next pass.",
    tags: ["progress", "bar", "gradient"],
    html: `<div class="fx-pl-fill-bar"><span class="fx-pl-fill-bar-level"></span></div>`,
    css: `.fx-pl-fill-bar {
  width: 132px;
  height: 16px;
  border-radius: 999px;
  background: rgba(148, 163, 184, 0.14);
  border: 1px solid rgba(148, 163, 184, 0.25);
  overflow: hidden;
}
.fx-pl-fill-bar-level {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 999px;
  background: linear-gradient(90deg, #f07025, #ec4899, #a78bfa);
  transform-origin: left center;
  transform: scaleX(0);
  animation: fx-pl-fill-bar-pour 2.8s ease-in-out infinite;
}
.fx-pl-fill-bar-level::after {
  content: "";
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  width: 5px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.85);
}
@keyframes fx-pl-fill-bar-pour {
  0% { transform: scaleX(0); }
  42%, 58% { transform: scaleX(1); }
  100% { transform: scaleX(0); }
}`,
  },
  {
    id: "pl-squash-ball",
    name: "Squash Ball",
    category: "loaders",
    description:
      "A green ball bounces with cartoon squash and stretch while its shadow swells and fades beneath it.",
    tags: ["bounce", "squash", "physics"],
    html: `<div class="fx-pl-squash-ball"><span class="fx-pl-squash-ball-body"></span><span class="fx-pl-squash-ball-shadow"></span></div>`,
    css: `.fx-pl-squash-ball {
  position: relative;
  width: 70px;
  height: 92px;
}
.fx-pl-squash-ball-body {
  position: absolute;
  bottom: 16px;
  left: 50%;
  width: 24px;
  height: 24px;
  margin-left: -12px;
  border-radius: 50%;
  background: #34d399;
  box-shadow: 0 0 14px rgba(52, 211, 153, 0.5);
  transform-origin: 50% 100%;
  animation: fx-pl-squash-ball-hop 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
.fx-pl-squash-ball-shadow {
  position: absolute;
  bottom: 4px;
  left: 50%;
  width: 30px;
  height: 8px;
  margin-left: -15px;
  border-radius: 50%;
  background: rgba(2, 6, 23, 0.75);
  animation: fx-pl-squash-ball-shadow-pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
@keyframes fx-pl-squash-ball-hop {
  0%, 100% { transform: translateY(-48px) scale(0.94, 1.06); }
  46% { transform: translateY(0) scale(1); }
  50% { transform: translateY(0) scale(1.3, 0.7); }
  54% { transform: translateY(0) scale(1); }
}
@keyframes fx-pl-squash-ball-shadow-pulse {
  0%, 100% { transform: scale(0.45); opacity: 0.35; }
  50% { transform: scale(1); opacity: 0.7; }
}`,
  },
  {
    id: "pl-chain-wave",
    name: "Chain Wave",
    category: "loaders",
    description:
      "Three linked rings pass a lift along the chain like energy traveling from link to link.",
    tags: ["chain", "links", "wave"],
    html: `<div class="fx-pl-chain-wave"><span class="fx-pl-chain-wave-link"></span><span class="fx-pl-chain-wave-link"></span><span class="fx-pl-chain-wave-link"></span></div>`,
    css: `.fx-pl-chain-wave {
  display: flex;
  align-items: center;
}
.fx-pl-chain-wave-link {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 4px solid #22d3ee;
  animation: fx-pl-chain-wave-lift 1.6s ease-in-out infinite;
}
.fx-pl-chain-wave-link:nth-child(2) {
  margin: 0 -8px;
  border-color: #a78bfa;
  animation-delay: 0.2s;
}
.fx-pl-chain-wave-link:nth-child(3) {
  border-color: #ec4899;
  animation-delay: 0.4s;
}
@keyframes fx-pl-chain-wave-lift {
  0%, 100% { transform: translateY(0); }
  30% { transform: translateY(-16px); }
}`,
  },
  {
    id: "pl-ticks",
    name: "Tick Chase",
    category: "loaders",
    description:
      "A ring of clock ticks stays calm while one amber tick sprints around the dial forever.",
    tags: ["ticks", "chase", "ring"],
    html: `<div class="fx-pl-ticks"><span class="fx-pl-ticks-mark"></span><span class="fx-pl-ticks-mark"></span><span class="fx-pl-ticks-mark"></span><span class="fx-pl-ticks-mark"></span><span class="fx-pl-ticks-mark"></span><span class="fx-pl-ticks-mark"></span><span class="fx-pl-ticks-mark"></span><span class="fx-pl-ticks-mark"></span><span class="fx-pl-ticks-mark"></span><span class="fx-pl-ticks-mark"></span><span class="fx-pl-ticks-mark"></span><span class="fx-pl-ticks-mark"></span><span class="fx-pl-ticks-runner"></span></div>`,
    css: `.fx-pl-ticks {
  position: relative;
  width: 76px;
  height: 76px;
}
.fx-pl-ticks-mark {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 3px;
  height: 11px;
  margin: -5.5px 0 0 -1.5px;
  border-radius: 2px;
  background: rgba(148, 163, 184, 0.4);
}
.fx-pl-ticks-mark:nth-child(1) { transform: rotate(0deg) translateY(-30px); }
.fx-pl-ticks-mark:nth-child(2) { transform: rotate(30deg) translateY(-30px); }
.fx-pl-ticks-mark:nth-child(3) { transform: rotate(60deg) translateY(-30px); }
.fx-pl-ticks-mark:nth-child(4) { transform: rotate(90deg) translateY(-30px); }
.fx-pl-ticks-mark:nth-child(5) { transform: rotate(120deg) translateY(-30px); }
.fx-pl-ticks-mark:nth-child(6) { transform: rotate(150deg) translateY(-30px); }
.fx-pl-ticks-mark:nth-child(7) { transform: rotate(180deg) translateY(-30px); }
.fx-pl-ticks-mark:nth-child(8) { transform: rotate(210deg) translateY(-30px); }
.fx-pl-ticks-mark:nth-child(9) { transform: rotate(240deg) translateY(-30px); }
.fx-pl-ticks-mark:nth-child(10) { transform: rotate(270deg) translateY(-30px); }
.fx-pl-ticks-mark:nth-child(11) { transform: rotate(300deg) translateY(-30px); }
.fx-pl-ticks-mark:nth-child(12) { transform: rotate(330deg) translateY(-30px); }
.fx-pl-ticks-runner {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 4px;
  height: 14px;
  margin: -7px 0 0 -2px;
  border-radius: 2px;
  background: #fbbf24;
  box-shadow: 0 0 10px rgba(251, 191, 36, 0.8);
  animation: fx-pl-ticks-chase 2.6s linear infinite;
}
@keyframes fx-pl-ticks-chase {
  from { transform: rotate(0deg) translateY(-30px); }
  to { transform: rotate(360deg) translateY(-30px); }
}`,
  },
  {
    id: "pl-shapeshift",
    name: "Shapeshift Morph",
    category: "loaders",
    description:
      "A gradient shape morphs from circle to rounded square to pill while hue-rotating through the spectrum.",
    tags: ["morph", "shape", "hue"],
    html: `<div class="fx-pl-shapeshift"><span class="fx-pl-shapeshift-core"></span></div>`,
    css: `.fx-pl-shapeshift {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90px;
  height: 90px;
}
.fx-pl-shapeshift-core {
  width: 46px;
  height: 46px;
  background: linear-gradient(135deg, #ec4899, #a78bfa);
  box-shadow: 0 0 20px rgba(236, 72, 153, 0.45);
  animation: fx-pl-shapeshift-morph 3.2s ease-in-out infinite, fx-pl-shapeshift-hue 3.2s linear infinite;
}
@keyframes fx-pl-shapeshift-morph {
  0%, 100% { width: 46px; height: 46px; border-radius: 50%; }
  34% { width: 46px; height: 46px; border-radius: 11px; }
  67% { width: 68px; height: 30px; border-radius: 15px; }
}
@keyframes fx-pl-shapeshift-hue {
  0% { filter: hue-rotate(0deg); }
  100% { filter: hue-rotate(360deg); }
}`,
  },
];
