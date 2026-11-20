"use client";

import { useRef } from "react";
import { useTranslations } from "next-intl";
import { experienceIds } from "@/data/projects";
import { gsap, useGSAP, ScrollTrigger } from "@/lib/gsap";
import { addMotionMatch, fadeInReduced, motion } from "@/lib/motion";

export default function ExperienceTimeline() {
  const t = useTranslations("experience");
  const scope = useRef(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      const line = scope.current?.querySelector(".exp-line-progress");
      const items = gsap.utils.toArray(".exp-item", scope.current);

      addMotionMatch(mm, {
        reduced: () => {
          if (line) gsap.set(line, { scaleY: 1 });
          fadeInReduced(gsap, items, {
            scrollTrigger: {
              trigger: scope.current,
              start: "top 75%",
              once: true,
            },
          });
        },
        full: () => {
          if (line) {
            gsap.fromTo(
              line,
              { scaleY: 0 },
              {
                scaleY: 1,
                ease: "none",
                scrollTrigger: {
                  trigger: scope.current?.querySelector(".exp-track"),
                  start: "top 70%",
                  end: "bottom 30%",
                  scrub: true,
                },
              },
            );
          }

          items.forEach((item) => {
            gsap.fromTo(
              item,
              { opacity: 0, y: motion.distanceLarge },
              {
                opacity: 1,
                y: 0,
                duration: motion.medium,
                ease: motion.easeSmoothOut,
                scrollTrigger: {
                  trigger: item,
                  start: "top 80%",
                  once: true,
                },
              },
            );
          });
        },
      });

      ScrollTrigger.refresh();
      return () => mm.revert();
    },
    { scope },
  );

  return (
    <section
      ref={scope}
      id="experience"
      className="scroll-mt-20 bg-background py-24"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            {t("title")}
          </h2>
        </div>

        <div className="exp-track relative mx-auto mt-16 max-w-3xl">
          <div
            className="absolute top-2 bottom-2 left-[11px] w-px bg-border md:left-1/2 md:-translate-x-px"
            aria-hidden="true"
          />
          <div
            className="exp-line-progress absolute top-2 bottom-2 left-[11px] origin-top w-px bg-primary md:left-1/2 md:-translate-x-px"
            aria-hidden="true"
          />

          <ol className="space-y-12">
            {experienceIds.map((exp, index) => {
              const side = index % 2 === 0 ? "left" : "right";
              return (
                <li key={exp.id} className="exp-item relative">
                  <span
                    className="absolute top-3 left-1.5 z-10 h-4 w-4 rounded-full border-2 border-primary bg-background md:left-1/2 md:-translate-x-1/2"
                    aria-hidden="true"
                  />
                  <a
                    href={exp.href}
                    target={exp.external ? "_blank" : undefined}
                    rel={exp.external ? "noopener noreferrer" : undefined}
                    className={`ml-10 block rounded-(--radius) border border-border bg-card p-6 shadow-lg transition duration-(--duration-fast) hover:border-primary hover:shadow-primary/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring md:ml-0 md:w-[calc(50%-2rem)] ${
                      side === "left"
                        ? "md:mr-auto md:pr-2"
                        : "md:ml-auto md:pl-2"
                    }`}
                  >
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                      <h3 className="font-display text-xl font-semibold text-foreground">
                        {t(`items.${exp.id}.title`)}
                      </h3>
                      <span className="font-mono text-xs text-muted-foreground">
                        {t(`items.${exp.id}.date`)}
                      </span>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-foreground/75">
                      {t(`items.${exp.id}.desc`)}
                    </p>
                    <p className="mt-3 font-mono text-xs tracking-wide text-primary">
                      {t(`items.${exp.id}.techs`)}
                    </p>
                  </a>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
