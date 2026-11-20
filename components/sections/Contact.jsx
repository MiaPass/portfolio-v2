"use client";

import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { Check, Copy, Download } from "lucide";
import { MorphIcon } from "morphicons/react";
import Reveal from "@/components/motion/Reveal";
import Magnetic from "@/components/ui/Magnetic";
import { profile } from "@/data/profile";

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
    <section id="contact" className="scroll-mt-20 bg-background py-24 text-center">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <h2 className="font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            {t("title")}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-foreground/75">
            {t("subtitle")}
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Magnetic
              as="button"
              type="button"
              onClick={copyEmail}
              className="inline-flex items-center gap-2 rounded-(--radius) bg-primary px-6 py-3 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
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

            <Magnetic
              as="a"
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-(--radius) border border-border bg-card/50 px-6 py-3 text-base font-semibold text-foreground transition hover:border-primary/50 hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              <img src="/svg/linkedin.svg" alt="" className="h-5 w-5 invert" />
              {t("linkedin")}
            </Magnetic>

            <Magnetic
              as="a"
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-(--radius) border border-border bg-card/50 px-6 py-3 text-base font-semibold text-foreground transition hover:border-primary/50 hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              <img src="/svg/github.svg" alt="" className="h-5 w-5 invert" />
              {t("github")}
            </Magnetic>

            <Magnetic
              as="a"
              href={cvHref}
              download
              className="inline-flex items-center gap-2 rounded-(--radius) border border-border bg-card/50 px-6 py-3 text-base font-semibold text-foreground transition hover:border-primary/50 hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              <MorphIcon
                icon={Download}
                size={18}
                spring="smooth"
                reducedMotion="user"
              />
              {t("downloadCv")}
            </Magnetic>
          </div>

          <p className="mt-6 font-mono text-sm text-muted-foreground">
            {profile.email}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
