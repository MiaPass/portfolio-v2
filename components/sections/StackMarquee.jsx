"use client";

import { useSyncExternalStore } from "react";
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

function TechSet({ items, decorative = false }) {
  return (
    <div
      className="flex w-max shrink-0 items-center gap-3 pe-3"
      aria-hidden={decorative ? true : undefined}
      inert={decorative || undefined}
    >
      {items.map((tech) => (
        <TechItem
          key={decorative ? `clone-${tech.name}` : tech.name}
          tech={tech}
          decorative={decorative}
        />
      ))}
    </div>
  );
}

function MarqueeRow({ items, reverse = false }) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return (
      <div className="flex flex-wrap gap-3 py-2">
        {items.map((tech) => (
          <TechItem key={tech.name} tech={tech} />
        ))}
      </div>
    );
  }

  return (
    <div className="stack-marquee group relative overflow-hidden py-2">
      <div
        className={`stack-marquee-track flex w-max ${
          reverse ? "stack-marquee-track--reverse" : ""
        }`}
      >
        <TechSet items={items} />
        <TechSet items={items} decorative />
      </div>
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
