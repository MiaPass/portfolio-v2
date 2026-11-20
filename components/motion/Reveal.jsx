"use client";

import { useRef } from "react";
import { gsap, useGSAP, ScrollTrigger } from "@/lib/gsap";
import { motion } from "@/lib/motion";

export default function Reveal({
  children,
  className = "",
  y = motion.distanceLarge,
  delay = 0,
  stagger = motion.stagger,
  selector,
  once = true,
}) {
  const scope = useRef(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: reduce)", () => {
        const targets = selector
          ? scope.current?.querySelectorAll(selector)
          : scope.current;
        if (targets) gsap.set(targets, { clearProps: "all" });
      });

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const targets = selector
          ? gsap.utils.toArray(selector, scope.current)
          : scope.current;

        if (!targets || (Array.isArray(targets) && targets.length === 0)) {
          return;
        }

        gsap.fromTo(
          targets,
          { opacity: 0, y },
          {
            opacity: 1,
            y: 0,
            duration: motion.slow,
            delay,
            stagger: selector ? stagger : 0,
            ease: motion.easeSmoothOut,
            immediateRender: false,
            scrollTrigger: {
              trigger: scope.current,
              start: "top 85%",
              once,
              toggleActions: once
                ? "play none none none"
                : "play none none reverse",
            },
          },
        );
      });

      ScrollTrigger.refresh();

      return () => mm.revert();
    },
    { scope },
  );

  return (
    <div ref={scope} className={className}>
      {children}
    </div>
  );
}
