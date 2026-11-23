"use client";

import { useLayoutEffect, useMemo, useRef, useState, useSyncExternalStore } from "react";
import { useTranslations } from "next-intl";
import Reveal from "@/components/motion/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { techGroups } from "@/data/projects";
import { prefersReducedMotion } from "@/lib/motion";

function subscribeReducedMotion(onChange) {
  const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
  mq.addEventListener("change", onChange);
  return () => mq.removeEventListener("change", onChange);
}

function useReducedMotion() {
  return useSyncExternalStore(
    subscribeReducedMotion,
    prefersReducedMotion,
    () => false,
  );
}

const pillClass =
  "stack-tech group/tech inline-flex shrink-0 items-center gap-2 rounded-full border border-transparent bg-card px-3.5 py-2 text-muted-foreground transition-[color,border-color] duration-(--duration-fast) hover:border-secondary hover:text-secondary focus-visible:border-secondary focus-visible:text-secondary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring";

const setClass = "flex w-max shrink-0 items-center gap-3 pe-3";

function TechItem({ tech, decorative = false }) {
  const content = (
    <>
      <img
        src={tech.logo}
        alt=""
        width={26}
        height={26}
        className="h-[26px] w-[26px] object-contain opacity-90 transition-opacity duration-(--duration-fast) group-hover/tech:opacity-100"
      />
      <span className="whitespace-nowrap text-xs font-medium">{tech.name}</span>
    </>
  );

  if (decorative) {
    return (
      <span className={pillClass} aria-hidden="true">
        {content}
      </span>
    );
  }

  return (
    <a
      href={tech.path}
      target="_blank"
      rel="noopener noreferrer"
      className={pillClass}
    >
      {content}
    </a>
  );
}

function buildTrackItems(items, copies) {
  const track = [];
  for (let copy = 0; copy < copies; copy += 1) {
    for (const tech of items) {
      track.push({ tech, copy });
    }
  }
  return track;
}

function StaticRow({ items }) {
  return (
    <div className="flex w-full flex-wrap gap-3 py-2">
      {items.map((tech) => (
        <TechItem key={tech.name} tech={tech} />
      ))}
    </div>
  );
}

function MarqueeRow({ items, reverse = false }) {
  const reduceMotion = useReducedMotion();
  const containerRef = useRef(null);
  const measureRef = useRef(null);
  const [animating, setAnimating] = useState(false);
  const [copies, setCopies] = useState(1);

  useLayoutEffect(() => {
    const container = containerRef.current;
    const measure = measureRef.current;
    if (!container || !measure) return undefined;

    let raf = 0;
    const update = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        if (prefersReducedMotion()) {
          setAnimating(false);
          setCopies(1);
          return;
        }

        // Read layout in one frame, then schedule state writes.
        const containerW = container.clientWidth;
        const setW = measure.scrollWidth;
        if (!containerW || !setW || setW < containerW) {
          setAnimating(false);
          setCopies(1);
          return;
        }

        setCopies(Math.max(1, Math.ceil(containerW / setW)));
        setAnimating(true);
      });
    };

    update();
    const ro = new ResizeObserver(update);
    ro.observe(container);
    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, [items, reduceMotion]);

  const trackItems = useMemo(
    () => buildTrackItems(items, copies),
    [items, copies],
  );

  return (
    <div ref={containerRef} className="relative w-full">
      {/* Off-screen one-set measure (same gap/pills as the track) */}
      <div
        className="pointer-events-none fixed top-0 -left-[9999px] -z-10"
        aria-hidden="true"
      >
        <div ref={measureRef} className={setClass}>
          {items.map((tech) => (
            <TechItem key={`measure-${tech.name}`} tech={tech} decorative />
          ))}
        </div>
      </div>

      {!animating || reduceMotion ? (
        <StaticRow items={items} />
      ) : (
        <div className="stack-marquee group relative w-full overflow-hidden py-2">
          <div
            className={`stack-marquee-track flex w-max ${
              reverse ? "stack-marquee-track--reverse" : ""
            }`}
          >
            <div className={setClass}>
              {trackItems.map(({ tech, copy }) => (
                <TechItem
                  key={`a-${copy}-${tech.name}`}
                  tech={tech}
                  decorative={copy > 0}
                />
              ))}
            </div>
            <div className={setClass} aria-hidden="true" inert>
              {trackItems.map(({ tech, copy }) => (
                <TechItem
                  key={`b-${copy}-${tech.name}`}
                  tech={tech}
                  decorative
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function StackMarquee() {
  const t = useTranslations("tech");

  return (
    <section id="stack" className="scroll-mt-20 overflow-x-clip bg-background py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <SectionHeading index="05">{t("title")}</SectionHeading>
        </Reveal>

        <div className="mt-12 space-y-8">
          {techGroups.map((group, index) => (
            <div key={group.id}>
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-foreground">
                {t(`groups.${group.id}`)}
              </h3>
              <MarqueeRow items={group.items} reverse={index % 2 === 1} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
