import { cn } from "@/lib/utils";

/**
 * FxLogo — the CSS Effects Lab brand mark.
 * A gradient badge holding a `{ ✦ }` monogram: code braces
 * embracing a magic spark — effects + colors in one mark.
 */
export function FxLogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      {/* Left brace */}
      <path d="M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1" />
      {/* Right brace */}
      <path d="M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1" />
      {/* Center 4-point spark */}
      <path
        d="M12 9.2l.75 2.05L14.8 12l-2.05.75L12 14.8l-.75-2.05L9.2 12l2.05-.75z"
        fill="currentColor"
        stroke="none"
      />
    </svg>
  );
}

interface FxLogoProps {
  /** Badge size classes, e.g. "h-9 w-9". */
  badgeClassName?: string;
  /** Mark size classes, e.g. "h-5 w-5". */
  markClassName?: string;
}

export function FxLogo({
  badgeClassName = "h-9 w-9",
  markClassName = "h-5 w-5",
}: FxLogoProps) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "flex items-center justify-center rounded-xl bg-gradient-to-br from-[#fb923c] via-[#f07025] to-[#d95a10] shadow-[0_8px_20px_-8px_rgba(240,112,37,0.7),inset_0_1px_0_rgba(255,255,255,0.35)] ring-1 ring-white/25",
        badgeClassName,
      )}
    >
      <FxLogoMark className={markClassName} />
    </span>
  );
}
