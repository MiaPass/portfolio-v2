"use client";

import { useTranslations } from "next-intl";
import { ArrowRight, ArrowUpRight } from "lucide";
import MorphHoverIcon from "@/components/motion/MorphHoverIcon";

export default function ContactActions() {
  const t = useTranslations("contact");

  return (
    <div className="mt-10 flex flex-wrap justify-center gap-4">
      <a
        href="https://www.linkedin.com/in/ninamiapassalia/"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-(--radius) bg-primary px-6 py-3 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition hover:brightness-110"
      >
        <img src="/svg/linkedin.svg" alt="" className="h-5 w-5 invert" />
        {t("linkedin")}
      </a>
      <a
        href="https://www.github.com/MiaPass"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-(--radius) border border-border bg-card px-6 py-3 text-base font-semibold text-foreground transition hover:border-primary hover:text-primary"
      >
        <img src="/svg/github.svg" alt="" className="h-5 w-5 invert" />
        {t("github")}
        <MorphHoverIcon
          idleIcon={ArrowRight}
          hoverIcon={ArrowUpRight}
          size={18}
          className="text-current"
        />
      </a>
    </div>
  );
}
