"use client";

import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { Check, Copy, Download } from "lucide";
import { MorphIcon } from "morphicons/react";
import Reveal from "@/components/motion/Reveal";
import Magnetic from "@/components/ui/Magnetic";
import SectionHeading from "@/components/ui/SectionHeading";
import { profile } from "@/data/profile";

const secondaryClass =
  "inline-flex items-center gap-2 rounded-(--radius) border border-border px-5 py-2.5 text-sm font-semibold text-foreground transition hover:border-foreground/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring";

export default function Contact() {
  const t = useTranslations("contact");
  const locale = useLocale();
  const [copied, setCopied] = useState(false);
  const cvHref = profile.cv[locale] || profile.cv.es;

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  return (
    <section id="contact" className="scroll-mt-20 bg-background py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal className="max-w-2xl">
          <SectionHeading index="06">{t("title")}</SectionHeading>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Magnetic
              as="button"
              type="button"
              onClick={copyEmail}
              className="inline-flex items-center gap-2 rounded-(--radius) bg-primary px-6 py-3 text-base font-semibold text-primary-foreground transition hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              aria-live="polite"
            >
              <MorphIcon
                icon={copied ? Check : Copy}
                size={18}
                spring="snappy"
                reducedMotion="user"
              />
              {copied ? t("copied") : t("copyEmail")}
            </Magnetic>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={secondaryClass}
            >
              <img src="/svg/linkedin.svg" alt="" className="h-4 w-4 invert" />
              {t("linkedin")}
            </a>

            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className={secondaryClass}
            >
              <img src="/svg/github.svg" alt="" className="h-4 w-4 invert" />
              {t("github")}
            </a>

            <a href={cvHref} download className={secondaryClass}>
              <MorphIcon
                icon={Download}
                size={16}
                spring="smooth"
                reducedMotion="user"
              />
              {t("downloadCv")}
            </a>
          </div>

          <p className="mt-5 text-sm text-muted-foreground">{profile.email}</p>
        </Reveal>
      </div>
    </section>
  );
}
