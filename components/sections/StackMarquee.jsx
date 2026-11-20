"use client";

import { useTranslations } from "next-intl";
import Reveal from "@/components/motion/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { techGroups } from "@/data/projects";

export default function StackMarquee() {
  const t = useTranslations("tech");

  return (
    <section id="stack" className="scroll-mt-20 bg-background py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <SectionHeading index="05">{t("title")}</SectionHeading>
        </Reveal>

        <div className="mt-12 max-w-3xl space-y-10">
          {techGroups.map((group) => (
            <div key={group.id}>
              <h3 className="text-sm font-medium text-foreground">
                {t(`groups.${group.id}`)}
              </h3>
              <p className="mt-2 text-base leading-relaxed text-muted-foreground">
                {group.items.map((tech) => tech.name).join(" · ")}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
