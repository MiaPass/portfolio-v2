"use client";

import { useRef } from "react";
import { whenNearViewport } from "@/lib/deferMotion";
import { gsap, useGSAP, ScrollTrigger } from "@/lib/gsap";
import { addMotionMatch, fadeInReduced, motion } from "@/lib/motion";

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
      return whenNearViewport(scope.current, () => {
        const mm = gsap.matchMedia();

        const getTargets = () => {
          if (selector) {
            return gsap.utils.toArray(selector, scope.current);
          }
          return scope.current;
        };

        const scrollTriggerBase = {
          trigger: scope.current,
          start: "top 85%",
          once,
          toggleActions: once ? "play none none none" : "play none none reverse",
        };

        addMotionMatch(mm, {
          reduced: () => {
            const targets = getTargets();
            if (!targets || (Array.isArray(targets) && targets.length === 0)) {
              return;
            }
            fadeInReduced(gsap, targets, {
              delay,
              scrollTrigger: scrollTriggerBase,
            });
          },
          full: () => {
            const targets = getTargets();
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
                scrollTrigger: scrollTriggerBase,
              },
            );
          },
        });

        ScrollTrigger.refresh();
        return () => mm.revert();
      });
    },
    { scope },
  );

  return (
    <div ref={scope} className={className}>
      {children}
    </div>
  );
}
