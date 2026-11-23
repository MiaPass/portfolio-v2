"use client";

import { useRef } from "react";

const MAX_TILT = 10;

/**
 * transitions.dev card-tilt wrapper.
 * Tracks pointer on the flat outer shell; tilts the inner card.
 * No tilt when prefers-reduced-motion or coarse pointers (CSS + JS).
 */
export default function Tilt({ children, className = "", max = MAX_TILT }) {
  const rootRef = useRef(null);
  const cardRef = useRef(null);
  const rectRef = useRef(null);

  function reset() {
    const root = rootRef.current;
    const card = cardRef.current;
    if (!root || !card) return;
    rectRef.current = null;
    root.classList.remove("is-hover");
    card.classList.remove("is-tilting");
    card.style.setProperty("--tilt-rx", "0deg");
    card.style.setProperty("--tilt-ry", "0deg");
  }

  function cacheRect() {
    const root = rootRef.current;
    if (!root) return;
    rectRef.current = root.getBoundingClientRect();
  }

  function track(event) {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const root = rootRef.current;
    const card = cardRef.current;
    const rect = rectRef.current;
    if (!root || !card || !rect) return;

    const px = Math.min(
      1,
      Math.max(0, (event.clientX - rect.left) / rect.width),
    );
    const py = Math.min(
      1,
      Math.max(0, (event.clientY - rect.top) / rect.height),
    );

    root.classList.add("is-hover");
    card.classList.add("is-tilting");
    card.style.setProperty("--tilt-ry", `${((px - 0.5) * max).toFixed(2)}deg`);
    card.style.setProperty("--tilt-rx", `${((0.5 - py) * max).toFixed(2)}deg`);
    card.style.setProperty("--tilt-gx", `${(px * 100).toFixed(1)}%`);
    card.style.setProperty("--tilt-gy", `${(py * 100).toFixed(1)}%`);
  }

  return (
    <div
      ref={rootRef}
      className={`t-tilt ${className}`}
      onPointerEnter={cacheRect}
      onPointerMove={track}
      onPointerLeave={(event) => {
        if (event.pointerType === "mouse") reset();
      }}
      onPointerUp={reset}
      onPointerCancel={reset}
    >
      <div ref={cardRef} className="t-tilt-card">
        {children}
        <div className="t-tilt-glare" aria-hidden="true" />
      </div>
    </div>
  );
}
