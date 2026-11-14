import { memo } from "react";
import type { Effect } from "@/data/effects";

/**
 * Renders a live, interactive preview of a CSS effect inside a dark
 * "canvas" panel. The effect's CSS is injected via a <style> tag and its
 * HTML via dangerouslySetInnerHTML. All effect CSS is namespaced under
 * unique `.fx-*` classes so nothing leaks into the host page.
 *
 * Memoized: host re-renders (favorites, copy toasts, gallery filters) must
 * never re-inject the preview markup, otherwise uncontrolled interactive
 * state inside the demo (flipped checkboxes, typed inputs, focus) is wiped.
 */
export const EffectPreview = memo(function EffectPreview({
  effect,
  className = "",
}: {
  effect: Effect;
  className?: string;
}) {
  return (
    <div
      className={`fx-canvas relative w-full overflow-hidden ${className}`}
      aria-label={`${effect.name} live preview`}
    >
      <style dangerouslySetInnerHTML={{ __html: effect.css }} />
      <div
        className="relative z-10 flex h-full w-full items-center justify-center p-4"
        dangerouslySetInnerHTML={{ __html: effect.html }}
      />
    </div>
  );
});
