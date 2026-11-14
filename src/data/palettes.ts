/**
 * Hand-picked website color palettes.
 * Every palette ships with named colors, hex codes, filter tags and
 * suggested use-cases. The 60-30-10 balance rule applies to all of them:
 * Background (60%) -> Surface / Text (30%) -> Accent (10%).
 */

export const PALETTE_TAGS = [
  "dark",
  "light",
  "warm",
  "cool",
  "vibrant",
  "minimal",
] as const;

export type PaletteTag = (typeof PALETTE_TAGS)[number];

export interface PaletteColor {
  /** Human-friendly color name, e.g. "Ember Orange". */
  name: string;
  /** Hex code, e.g. "#F07025". */
  hex: string;
  /** Role inside the palette. */
  role: "Background" | "Surface" | "Accent" | "Text" | "Muted";
}

export interface Palette {
  id: string;
  name: string;
  /** One-line description of the combo's personality. */
  vibe: string;
  tags: PaletteTag[];
  useCases: string[];
  /** Always 5 colors, ordered: Background, Surface, Accent, Text, Muted. */
  colors: PaletteColor[];
}

export const PALETTES: Palette[] = [
  {
    id: "midnight-ember",
    name: "Midnight Ember",
    vibe:
      "Deep ink night warmed by a glowing ember accent — the exact combo this site runs on.",
    tags: ["dark", "warm"],
    useCases: ["SaaS", "Dashboards", "Developer tools"],
    colors: [
      { name: "Ink Night", hex: "#0B1120", role: "Background" },
      { name: "Slate Deep", hex: "#16213A", role: "Surface" },
      { name: "Ember Orange", hex: "#F07025", role: "Accent" },
      { name: "Cloud White", hex: "#F8FAFC", role: "Text" },
      { name: "Dusk Steel", hex: "#8CA3C3", role: "Muted" },
    ],
  },
  {
    id: "forest-calm",
    name: "Forest Calm",
    vibe:
      "Deep pine greens with a fresh mint spark — calm, natural and trustworthy.",
    tags: ["dark", "cool"],
    useCases: ["Wellness", "Eco brands", "Finance"],
    colors: [
      { name: "Pine Night", hex: "#0C1F17", role: "Background" },
      { name: "Forest Shade", hex: "#16352A", role: "Surface" },
      { name: "Spring Leaf", hex: "#4ADE80", role: "Accent" },
      { name: "Mint Foam", hex: "#ECFDF5", role: "Text" },
      { name: "Fern Mist", hex: "#7FB89A", role: "Muted" },
    ],
  },
  {
    id: "royal-gold",
    name: "Royal Gold",
    vibe:
      "Near-black warmth with brushed gold — quiet luxury without the noise.",
    tags: ["dark", "warm"],
    useCases: ["Luxury", "Law firms", "Finance"],
    colors: [
      { name: "Onyx Night", hex: "#12100C", role: "Background" },
      { name: "Espresso Black", hex: "#221D13", role: "Surface" },
      { name: "Royal Gold", hex: "#D4A94A", role: "Accent" },
      { name: "Champagne", hex: "#F7F1E3", role: "Text" },
      { name: "Bronze Mist", hex: "#9A8A68", role: "Muted" },
    ],
  },
  {
    id: "ocean-teal",
    name: "Ocean Teal",
    vibe:
      "Deep ocean tones with a mint glow — fresh, clean and quietly modern.",
    tags: ["dark", "cool"],
    useCases: ["Travel", "Fintech", "Health"],
    colors: [
      { name: "Abyss Teal", hex: "#062A30", role: "Background" },
      { name: "Deep Kelp", hex: "#0E3E46", role: "Surface" },
      { name: "Lagoon Mint", hex: "#2DD4BF", role: "Accent" },
      { name: "Foam White", hex: "#F0FDFA", role: "Text" },
      { name: "Reef Mist", hex: "#7FB8B0", role: "Muted" },
    ],
  },
  {
    id: "warm-sand",
    name: "Warm Sand",
    vibe:
      "Sun-baked neutrals with terracotta heat — soft, human and editorial.",
    tags: ["light", "warm", "minimal"],
    useCases: ["Portfolio", "Lifestyle", "Interior"],
    colors: [
      { name: "Ivory Sand", hex: "#FAF6F0", role: "Background" },
      { name: "Dune Beige", hex: "#EFE4D4", role: "Surface" },
      { name: "Terracotta", hex: "#C2703D", role: "Accent" },
      { name: "Roast Brown", hex: "#3E2E22", role: "Text" },
      { name: "Mocha Mist", hex: "#97897A", role: "Muted" },
    ],
  },
  {
    id: "paper-mono",
    name: "Paper Mono",
    vibe:
      "Pure black-and-white discipline — content first, chrome last.",
    tags: ["light", "minimal"],
    useCases: ["Editorial", "Agency", "Documentation"],
    colors: [
      { name: "Pure White", hex: "#FFFFFF", role: "Background" },
      { name: "Paper Gray", hex: "#F4F4F5", role: "Surface" },
      { name: "Ink Black", hex: "#18181B", role: "Accent" },
      { name: "Graphite", hex: "#52525B", role: "Text" },
      { name: "Silver Fog", hex: "#A1A1AA", role: "Muted" },
    ],
  },
  {
    id: "coral-dusk",
    name: "Coral Dusk",
    vibe:
      "Blush creams with a coral jolt — friendly, appetizing and warm.",
    tags: ["light", "warm", "vibrant"],
    useCases: ["Food", "Events", "Lifestyle"],
    colors: [
      { name: "Shell Cream", hex: "#FFF4F0", role: "Background" },
      { name: "Peach Blush", hex: "#FFDCD2", role: "Surface" },
      { name: "Coral Punch", hex: "#FF6B5E", role: "Accent" },
      { name: "Rosewood", hex: "#5C2320", role: "Text" },
      { name: "Clay Rose", hex: "#C98F86", role: "Muted" },
    ],
  },
  {
    id: "cyber-grape",
    name: "Cyber Grape",
    vibe:
      "A violet void with a lilac glow — bold, playful and futuristic.",
    tags: ["dark", "vibrant"],
    useCases: ["Gaming", "Music", "Crypto"],
    colors: [
      { name: "Void Plum", hex: "#0D0B1A", role: "Background" },
      { name: "Deep Violet", hex: "#241B3E", role: "Surface" },
      { name: "Lilac Pop", hex: "#A78BFA", role: "Accent" },
      { name: "Petal White", hex: "#F5F3FF", role: "Text" },
      { name: "Iris Fog", hex: "#8E7CC3", role: "Muted" },
    ],
  },
  {
    id: "neo-citrus",
    name: "Neo Citrus",
    vibe:
      "Citrus creams with tangerine energy — loud in the best possible way.",
    tags: ["light", "warm", "vibrant"],
    useCases: ["Marketing", "Startups", "Education"],
    colors: [
      { name: "Cream Lemon", hex: "#FFFBEA", role: "Background" },
      { name: "Soft Lemon", hex: "#FDEBB2", role: "Surface" },
      { name: "Tangerine", hex: "#F97316", role: "Accent" },
      { name: "Charcoal", hex: "#1C1917", role: "Text" },
      { name: "Dried Citrus", hex: "#8A7A55", role: "Muted" },
    ],
  },
  {
    id: "berry-bloom",
    name: "Berry Bloom",
    vibe:
      "Rose creams with berry confidence — soft power for bold brands.",
    tags: ["light", "vibrant"],
    useCases: ["Beauty", "Fashion", "Kids"],
    colors: [
      { name: "Blossom White", hex: "#FFF1F6", role: "Background" },
      { name: "Rose Petal", hex: "#FBD5E4", role: "Surface" },
      { name: "Berry Punch", hex: "#DB2777", role: "Accent" },
      { name: "Mulberry", hex: "#4C0519", role: "Text" },
      { name: "Dusty Rose", hex: "#C0839E", role: "Muted" },
    ],
  },
];

/** Builds a copy-ready `:root { --var: hex }` block for one palette. */
export function paletteToCss(palette: Palette): string {
  const lines = palette.colors.map(
    (color) => `  --${color.role.toLowerCase()}: ${color.hex}; /* ${color.name} */`,
  );
  return `/* ${palette.name} — color palette from CSS Effects Lab */\n:root {\n${lines.join("\n")}\n}`;
}
