"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  ArrowDownWideNarrow,
  ChevronDown,
  FlaskConical,
  Heart,
  LayoutGrid,
  Search,
  SearchX,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
  CATEGORIES,
  EFFECTS,
  EFFECT_COUNT,
  type Effect,
  type EffectCategory,
} from "@/data/effects";
import { EffectCard } from "./effect-card";
import { Reveal } from "./motion-primitives";

type CategoryId = EffectCategory | "all" | "favorites";
type SortId = "featured" | "az" | "za";

interface CategoryWithCount {
  id: CategoryId;
  label: string;
  count: number;
}

const STATIC_CATEGORIES: CategoryWithCount[] = CATEGORIES.map((category) => ({
  id: category.id,
  label: category.label,
  count:
    category.id === "all"
      ? EFFECT_COUNT
      : EFFECTS.filter((effect) => effect.category === category.id).length,
}));

const FAVORITES_KEY = "fx-favorites";
const PAGE_SIZE = 24;

export function EffectGallery() {
  const [effects, setEffects] = useState<Effect[]>(EFFECTS);
  const [categories, setCategories] =
    useState<CategoryWithCount[]>(STATIC_CATEGORIES);
  const [active, setActive] = useState<CategoryId>("all");
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState<SortId>("featured");
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const [loading, setLoading] = useState(true);
  const [favorites, setFavorites] = useState<Set<string>>(new Set());
  const searchRef = useRef<HTMLInputElement>(null);

  // Filter changes reset pagination
  const updateActive = useCallback((id: CategoryId) => {
    setActive(id);
    setVisibleCount(PAGE_SIZE);
  }, []);
  const updateQuery = useCallback((value: string) => {
    setQuery(value);
    setVisibleCount(PAGE_SIZE);
  }, []);
  const updateSort = useCallback((value: SortId) => {
    setSort(value);
    setVisibleCount(PAGE_SIZE);
  }, []);

  // Load favorites from localStorage
  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(FAVORITES_KEY);
      if (raw) setFavorites(new Set(JSON.parse(raw) as string[]));
    } catch {
      // Ignore malformed storage
    }
  }, []);

  // Hydrate from the API so the gallery reflects live backend data
  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const res = await fetch("/api/effects");
        const data = await res.json();
        if (!cancelled && data?.ok && Array.isArray(data.effects)) {
          setEffects(data.effects);
          setCategories(data.categories ?? STATIC_CATEGORIES);
        }
      } catch {
        // Bundled data already rendered — nothing to do
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  // Listen for category filter events (dispatched by footer category links)
  useEffect(() => {
    const handler = (event: Event) => {
      const detail = (event as CustomEvent<CategoryId>).detail;
      if (typeof detail === "string") {
        updateActive(detail);
        document
          .getElementById("gallery")
          ?.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };
    window.addEventListener("fx-category", handler);
    return () => window.removeEventListener("fx-category", handler);
  }, [updateActive]);

  // Keyboard shortcut: "/" focuses search, Escape clears it
  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null;
      const isTyping =
        target &&
        (target.tagName === "INPUT" ||
          target.tagName === "TEXTAREA" ||
          target.isContentEditable);

      if (event.key === "/" && !isTyping) {
        event.preventDefault();
        searchRef.current?.focus();
      }
      if (event.key === "Escape" && target === searchRef.current) {
        updateQuery("");
        searchRef.current?.blur();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  const resetFilters = useCallback(() => {
    updateQuery("");
    updateActive("all");
  }, [updateQuery, updateActive]);

  const toggleFavorite = useCallback((id: string) => {
    setFavorites((previous) => {
      const next = new Set(previous);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      try {
        window.localStorage.setItem(FAVORITES_KEY, JSON.stringify([...next]));
      } catch {
        // Storage unavailable — favorites stay in memory
      }
      return next;
    });
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    const list = effects.filter((effect) => {
      const inCategory =
        active === "all" ||
        (active === "favorites" && favorites.has(effect.id)) ||
        effect.category === active;
      const inQuery =
        q === "" ||
        effect.name.toLowerCase().includes(q) ||
        effect.description.toLowerCase().includes(q) ||
        effect.tags.some((tag) => tag.toLowerCase().includes(q));
      return inCategory && inQuery;
    });

    if (sort === "az") {
      return [...list].sort((a, b) => a.name.localeCompare(b.name));
    }
    if (sort === "za") {
      return [...list].sort((a, b) => b.name.localeCompare(a.name));
    }
    return list;
  }, [effects, active, query, sort, favorites]);

  const visible = filtered.slice(0, visibleCount);
  const hasMore = filtered.length > visibleCount;

  const pills: CategoryWithCount[] = [
    ...categories,
    {
      id: "favorites",
      label: "Favorites",
      count: favorites.size,
    },
  ];

  return (
    <section id="gallery" className="scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20 lg:px-8">
        {/* Section heading — staggered scroll reveal */}
        <div className="text-center">
          <Reveal>
            <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-[#f07025]">
              The Library
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              {EFFECT_COUNT} effects. Copy, paste, done.
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
              Every card is a live demonstration running real CSS right here on
              the page. Hover, click, watch — then open the HTML or CSS tab and
              copy exactly what you see.
            </p>
          </Reveal>
        </div>

        {/* Controls */}
        <Reveal delay={0.2} className="mt-10 flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
          <div
            className="flex flex-wrap items-center gap-2"
            role="tablist"
            aria-label="Filter effects by category"
          >
            {pills.map((category) => {
              const isActive = active === category.id;
              const isFavorites = category.id === "favorites";
              return (
                <button
                  key={category.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => updateActive(category.id)}
                  className={`inline-flex items-center gap-1.5 rounded-full border px-4 py-2 text-sm font-medium transition-all ${
                    isActive
                      ? "border-[#f07025] bg-[#f07025] text-white shadow-sm"
                      : "border-border bg-background text-foreground/70 hover:border-foreground/30 hover:text-foreground"
                  }`}
                >
                  {category.id === "all" ? (
                    <LayoutGrid className="h-3.5 w-3.5" />
                  ) : isFavorites ? (
                    <Heart
                      className={`h-3.5 w-3.5 ${
                        isActive ? "fill-white" : ""
                      }`}
                    />
                  ) : null}
                  {category.label}
                  <span
                    className={`font-mono text-[11px] ${
                      isActive
                        ? "text-white/80"
                        : "text-muted-foreground"
                    }`}
                  >
                    {category.count}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="relative w-full xl:w-80">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              ref={searchRef}
              value={query}
              onChange={(event) => updateQuery(event.target.value)}
              placeholder="Search effects, tags..."
              aria-label="Search effects"
              className="h-10 rounded-full pl-9 pr-9"
            />
            <kbd
              aria-hidden="true"
              className="pointer-events-none absolute right-3 top-1/2 hidden -translate-y-1/2 rounded border border-border bg-muted px-1.5 py-0.5 font-mono text-[10px] font-medium text-muted-foreground sm:block"
            >
              /
            </kbd>
          </div>
        </Reveal>

        {/* Result meta + sort */}
        <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
          <p className="text-sm text-muted-foreground">
            Showing{" "}
            <span className="font-semibold text-foreground">
              {filtered.length}
            </span>{" "}
            {filtered.length === 1 ? "effect" : "effects"}
            {active === "favorites" && " from your favorites"}
            {active !== "all" && active !== "favorites" &&
              " in this category"}
            {query && (
              <>
                {" "}
                for &quot;<span className="text-foreground">{query}</span>
                &quot;
              </>
            )}
          </p>

          <div className="flex items-center gap-2">
            {loading && (
              <span className="font-mono text-xs text-muted-foreground">
                syncing with API...
              </span>
            )}
            <ArrowDownWideNarrow className="h-4 w-4 text-muted-foreground" />
            <Select
              value={sort}
              onValueChange={(value) => updateSort(value as SortId)}
            >
              <SelectTrigger
                aria-label="Sort effects"
                className="h-9 w-[170px] rounded-full text-sm"
              >
                <SelectValue placeholder="Sort" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="featured">Featured order</SelectItem>
                <SelectItem value="az">Name A–Z</SelectItem>
                <SelectItem value="za">Name Z–A</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Grid */}
        {visible.length > 0 ? (
          <>
            <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {visible.map((effect, index) => (
                <EffectCard
                  key={effect.id}
                  effect={effect}
                  index={index}
                  isFavorite={favorites.has(effect.id)}
                  onToggleFavorite={toggleFavorite}
                />
              ))}
            </div>

            {/* Load more pagination */}
            {hasMore && (
              <div className="mt-10 flex flex-col items-center gap-3">
                <p className="font-mono text-xs text-muted-foreground">
                  Showing {visible.length} of {filtered.length} effects
                </p>
                <button
                  type="button"
                  onClick={() =>
                    setVisibleCount((count) => count + PAGE_SIZE)
                  }
                  className="inline-flex items-center gap-1.5 rounded-full border px-6 py-2.5 text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 hover:border-[#f07025] hover:text-[#f07025] hover:shadow-lg hover:shadow-[#f07025]/10 active:translate-y-0 active:scale-[0.97]"
                >
                  Load more effects
                  <ChevronDown className="h-4 w-4" />
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="mt-6 flex flex-col items-center gap-3 rounded-xl border border-dashed py-16 text-center">
            {active === "favorites" ? (
              <>
                <Heart className="h-8 w-8 text-muted-foreground" />
                <p className="text-sm font-medium">No favorites yet</p>
                <p className="max-w-sm text-sm text-muted-foreground">
                  Tap the heart on any effect to save it here. Your favorites
                  are stored in this browser.
                </p>
              </>
            ) : (
              <>
                <SearchX className="h-8 w-8 text-muted-foreground" />
                <p className="text-sm font-medium">
                  No effects match your search
                </p>
                <p className="text-sm text-muted-foreground">
                  Try a different keyword or clear the filters.
                </p>
              </>
            )}
            <button
              type="button"
              onClick={resetFilters}
              className="mt-1 inline-flex items-center gap-1.5 rounded-full border px-4 py-2 text-sm font-medium transition-colors hover:border-[#f07025] hover:text-[#f07025]"
            >
              <FlaskConical className="h-4 w-4" />
              Reset filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
