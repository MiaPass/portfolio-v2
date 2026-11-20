"use client";

import { useTranslations } from "next-intl";
import Reveal from "@/components/motion/Reveal";
import { techGroups } from "@/data/projects";

function MarqueeRow({ items }) {
  const loop = [...items, ...items];

  return (
    <div className="stack-marquee group relative overflow-hidden py-4">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-linear-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-linear-to-l from-background to-transparent" />
      <div className="stack-marquee-track flex w-max gap-10 group-hover:[animation-play-state:paused]">
        {loop.map((tech, index) => (
          <a
            key={`${tech.name}-${index}`}
            href={tech.path}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-28 shrink-0 flex-col items-center gap-2 opacity-80 transition hover:opacity-100"
          >
            {/* SVGs from /public — img avoids next/image SVG restrictions */}
            <img
              src={tech.logo}
              alt=""
              width={56}
              height={56}
              className="h-12 w-12 object-contain md:h-14 md:w-14"
            />
            <span className="text-center text-xs font-medium text-muted-foreground">
              {tech.name}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}

export default function StackMarquee() {
  const t = useTranslations("tech");

  return (
    <section id="stack" className="scroll-mt-20 bg-background py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal className="text-center">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            {t("title")}
          </h2>
          <p className="mt-4 text-base text-foreground/75 sm:text-lg">
            {t("subtitle")}
          </p>
        </Reveal>

        <div className="mt-14 space-y-10">
          {techGroups.map((group) => (
            <div key={group.id}>
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                {t(`groups.${group.id}`)}
              </h3>
              <MarqueeRow items={group.items} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
