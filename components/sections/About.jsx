"use client";

import { useTranslations } from "next-intl";
import Reveal from "@/components/motion/Reveal";
import { profile, getAge } from "@/data/profile";

export default function About() {
  const t = useTranslations("about");
  const firstName = profile.name.split(" ")[0];

  return (
    <section id="about" className="scroll-mt-20 bg-background py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            {t("title")}
          </h2>
          <div className="mt-8 space-y-5 text-lg leading-8 text-foreground/80">
            <p>{t("line1", { name: firstName, age: getAge() })}</p>
            <p>{t("line2")}</p>
            <p>{t("line3")}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
