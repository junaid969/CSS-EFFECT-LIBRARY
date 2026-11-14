"use client";

import { useState } from "react";
import { Menu, Sparkles } from "lucide-react";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
} from "framer-motion";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./theme-toggle";
import { FxLogo } from "./fx-logo";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "#palettes", label: "Palettes" },
  { href: "#gallery", label: "Gallery" },
  { href: "#how-it-works", label: "How it works" },
  { href: "#features", label: "Features" },
  { href: "#faq", label: "FAQ" },
  { href: "#feedback", label: "Feedback" },
];

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden="true"
      className="fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-gradient-to-r from-[#f07025] via-[#ec4899] to-[#f07025]"
      style={{ scaleX }}
    />
  );
}

function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          aria-label="Open navigation menu"
          className="h-9 w-9 rounded-full md:hidden"
        >
          <Menu className="h-4 w-4" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" aria-describedby={undefined} className="w-72">
        <SheetTitle className="flex items-center gap-2 text-base font-semibold">
          <FxLogo badgeClassName="h-8 w-8" markClassName="h-4 w-4" />
          CSS Effects Lab
        </SheetTitle>
        <nav aria-label="Mobile" className="mt-6 flex flex-col gap-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2.5 text-sm font-medium text-foreground/70 transition-colors hover:bg-muted hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#gallery"
            onClick={() => setOpen(false)}
            className="mt-3 inline-flex items-center justify-center gap-1.5 rounded-full bg-[#f07025] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#e0611a]"
          >
            <Sparkles className="h-4 w-4" />
            Explore effects
          </a>
        </nav>
      </SheetContent>
    </Sheet>
  );
}

export function SiteHeader() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  useMotionValueEvent(scrollY, "change", (latest) => setScrolled(latest > 12));

  return (
    <>
      <ScrollProgress />
      <header
        className={cn(
          "sticky top-0 z-50 border-b backdrop-blur transition-all duration-500",
          scrolled
            ? "border-border/80 bg-background/85 shadow-[0_10px_36px_-18px_rgba(0,0,0,0.25)] supports-[backdrop-filter]:bg-background/70"
            : "border-transparent bg-background/60 supports-[backdrop-filter]:bg-background/45"
        )}
      >
        <div
          className={cn(
            "mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 transition-all duration-500 sm:px-6 lg:px-8",
            scrolled ? "h-14" : "h-16"
          )}
        >
          <a
            href="#"
            className="group flex items-center gap-2.5"
            aria-label="CSS Effects Lab home"
          >
            <FxLogo
              badgeClassName="h-9 w-9 transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110"
              markClassName="h-5 w-5"
            />
            <span className="flex flex-col justify-center gap-0.5">
              <span className="text-lg font-semibold leading-none tracking-tight">
                CSS Effects Lab
              </span>
              <span className="font-mono text-[10px] font-medium uppercase leading-none tracking-wider text-[#f07025]">
                Effect Library
              </span>
            </span>
          </a>

          <nav aria-label="Primary" className="hidden items-center gap-1 md:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="fx-nav-link rounded-full px-4 py-2 text-sm font-medium text-foreground/60 transition-colors duration-300 hover:bg-foreground/5 hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2.5">
            <ThemeToggle />
            <a
              href="#gallery"
              className="fx-btn-shine hidden items-center rounded-full bg-[#f07025] px-5 py-2 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#e0611a] hover:shadow-lg hover:shadow-[#f07025]/30 active:translate-y-0 active:scale-[0.97] sm:inline-flex"
            >
              Explore
            </a>
            <MobileMenu />
          </div>
        </div>
      </header>
    </>
  );
}
