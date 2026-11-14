import { NextResponse } from "next/server";
import { CATEGORIES, EFFECTS } from "@/data/effects";

export async function GET() {
  return NextResponse.json({
    ok: true,
    total: EFFECTS.length,
    categories: CATEGORIES.map((category) => ({
      ...category,
      count:
        category.id === "all"
          ? EFFECTS.length
          : EFFECTS.filter((effect) => effect.category === category.id).length,
    })),
    effects: EFFECTS,
  });
}
