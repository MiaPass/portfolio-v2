"use client";

import { useRef } from "react";
import { prefersReducedMotion } from "@/lib/motion";

/** Subtle magnetic pull toward the pointer on fine pointers. */
export default function Magnetic({
  children,
  className = "",
  strength = 0.25,
  as: Tag = "div",
  ...props
}) {
  const ref = useRef(null);
  const rectRef = useRef(null);

  function cacheRect() {
    const el = ref.current;
    if (!el) return;
    rectRef.current = el.getBoundingClientRect();
  }

  function onMove(event) {
    if (prefersReducedMotion()) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const el = ref.current;
    const rect = rectRef.current;
    if (!el || !rect) return;
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;
    el.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
  }

  function onLeave() {
    const el = ref.current;
    if (!el) return;
    rectRef.current = null;
    el.style.transform = "translate(0px, 0px)";
  }

  return (
    <Tag
      ref={ref}
      className={`magnetic-target ${className}`}
      onPointerEnter={cacheRect}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      {...props}
    >
      {children}
    </Tag>
  );
}
