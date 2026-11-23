"use client";

import { useRef } from "react";
import { useLocale, useTranslations } from "next-intl";
import { experienceIds } from "@/data/projects";
import { formatMonthYear } from "@/lib/formatDate";
import { formatTechList } from "@/lib/formatTech";
import SectionHeading from "@/components/ui/SectionHeading";
import { gsap, useGSAP, ScrollTrigger } from "@/lib/gsap";
import { addMotionMatch, fadeInReduced, motion } from "@/lib/motion";

export default function ExperienceTimeline() {
  const t = useTranslations("experience");
  const locale = useLocale();
  const scope = useRef(null);
  const presentLabel = t("present");

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
        <SectionHeading index="04">{t("title")}</SectionHeading>

        <div className="exp-track relative mx-auto mt-16 max-w-2xl">
          <div
            className="absolute top-2 bottom-2 left-[7px] w-px bg-border"
            aria-hidden="true"
          />
          <div
            className="exp-line-progress absolute top-2 bottom-2 left-[7px] origin-top w-px bg-primary"
            aria-hidden="true"
          />

          <ol className="space-y-14">
            {experienceIds.map((exp) => {
              const isCurrent = Boolean(exp.current);
              return (
                <li key={exp.id} className="exp-item relative pl-10">
                  <span
                    className="absolute top-1.5 left-0 z-10 flex h-4 w-4 items-center justify-center"
                    aria-hidden="true"
                  >
                    {isCurrent ? (
                      <span className="relative flex h-3 w-3">
                        <span className="hero-available-dot-ping absolute inset-0 rounded-full bg-success" />
                        <span className="relative inline-flex h-3 w-3 rounded-full bg-success ring-2 ring-background" />
                      </span>
                    ) : (
                      <span className="h-3 w-3 rounded-full border border-border bg-background" />
                    )}
                  </span>
                  <a
                    href={exp.href}
                    target={exp.external ? "_blank" : undefined}
                    rel={exp.external ? "noopener noreferrer" : undefined}
                    className="block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
                  >
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                      <div>
                        <h3 className="font-display text-xl font-semibold text-foreground sm:text-2xl">
                          {t(`items.${exp.id}.title`)}
                        </h3>
                        <p className="mt-0.5 text-sm text-muted-foreground">
                          {t(`items.${exp.id}.role`)}
                        </p>
                      </div>
                      <span className="shrink-0 text-sm text-muted-foreground">
                        {formatMonthYear(exp.start, locale)}
                        {" - "}
                        {exp.end ? (
                          formatMonthYear(exp.end, locale)
                        ) : (
                          <span className="font-medium text-secondary">
                            {presentLabel}
                          </span>
                        )}
                      </span>
                    </div>
                    {t.has(`items.${exp.id}.bullets`) ? (
                      <ul className="mt-3 max-w-prose list-disc space-y-1.5 pl-5 text-base leading-relaxed text-foreground/80">
                        {t.raw(`items.${exp.id}.bullets`).map((bullet) => (
                          <li key={bullet}>{bullet}</li>
                        ))}
                      </ul>
                    ) : (
                      <p className="mt-3 max-w-prose text-base leading-relaxed text-foreground/80">
                        {t(`items.${exp.id}.desc`)}
                      </p>
                    )}
                    <p className="mt-3 text-sm text-muted-foreground">
                      {formatTechList(t(`items.${exp.id}.techs`))}
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
