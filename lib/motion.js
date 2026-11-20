/** transitions.dev motion tokens as JS numbers (seconds) for GSAP */

export const motion = {
  stagger: 0.04,
  micro: 0.08,
  quick: 0.15,
  fast: 0.25,
  medium: 0.35,
  slow: 0.4,
  verySlow: 0.5,
  easeSmoothOut: "power2.out",
  distanceMedium: 12,
  distanceLarge: 28,
  scaleLarge: 0.96,
};

/** SSR-safe: true when the user prefers reduced motion. */
export function prefersReducedMotion() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/**
 * Register full vs reduced motion branches on a GSAP matchMedia instance.
 * @param {import("gsap").MatchMedia} mm
 * @param {{ full?: () => void | (() => void), reduced?: () => void | (() => void) }} handlers
 */
export function addMotionMatch(mm, { full, reduced } = {}) {
  if (reduced) {
    mm.add("(prefers-reduced-motion: reduce)", reduced);
  }
  if (full) {
    mm.add("(prefers-reduced-motion: no-preference)", full);
  }
  return mm;
}

/**
 * Short opacity-only fade for reduced-motion contexts.
 * @param {import("gsap").default} gsap
 * @param {gsap.TweenTarget} targets
 * @param {{ delay?: number, duration?: number, scrollTrigger?: object }} [opts]
 */
export function fadeInReduced(gsap, targets, opts = {}) {
  const { delay = 0, duration = motion.quick, scrollTrigger } = opts;
  return gsap.fromTo(
    targets,
    { opacity: 0 },
    {
      opacity: 1,
      duration,
      delay,
      ease: motion.easeSmoothOut,
      immediateRender: false,
      ...(scrollTrigger ? { scrollTrigger } : {}),
    },
  );
}
