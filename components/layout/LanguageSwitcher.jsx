"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { Languages } from "lucide";
import { MorphIcon } from "morphicons/react";
import { routing } from "@/i18n/routing";

export default function LanguageSwitcher() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  function switchLocale() {
    const next = locale === "es" ? "en" : "es";
    router.replace(pathname, { locale: next });
  }

  const nextLabel = locale === "es" ? "EN" : "ES";

  return (
    <button
      type="button"
      onClick={switchLocale}
      className="t-lang-switch inline-flex items-center gap-2 rounded-lg px-2.5 py-1.5 text-sm font-semibold text-muted-foreground transition hover:bg-accent hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
      aria-label={`${t("language")}: ${nextLabel}`}
      title={`${t("language")}: ${nextLabel}`}
    >
      <MorphIcon
        icon={Languages}
        size={18}
        spring="smooth"
        reducedMotion="user"
      />
      <span key={nextLabel} className="t-lang-label font-mono text-xs tracking-wide">
        {nextLabel}
      </span>
      <span className="sr-only">{routing.locales.join(", ")}</span>
    </button>
  );
}
