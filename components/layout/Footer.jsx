"use client";

import { useTranslations } from "next-intl";
import LanguageSwitcher from "./LanguageSwitcher";

const socials = [
  {
    name: "GitHub",
    href: "https://www.github.com/MiaPass",
    icon: "/svg/github.svg",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/ninamiapassalia/",
    icon: "/svg/linkedin.svg",
  },
];

export default function Footer() {
  const t = useTranslations();
  const year = new Date().getFullYear();

  const links = [
    { name: t("nav.home"), href: "#welcome" },
    { name: t("nav.featured"), href: "#featured" },
    { name: t("nav.projects"), href: "#projects" },
    { name: t("nav.about"), href: "#about" },
    { name: t("nav.experience"), href: "#experience" },
    { name: t("nav.tech"), href: "#stack" },
  ];

  return (
    <footer className="border-t border-border bg-card/40 py-12">
      <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
        <nav className="mb-8 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm">
          {links.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-muted-foreground transition hover:text-primary"
            >
              {item.name}
            </a>
          ))}
        </nav>
        <div className="mb-6 flex items-center justify-center gap-6">
          {socials.map((item) => (
            <a
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-70 transition hover:opacity-100"
            >
              <span className="sr-only">{item.name}</span>
              <img src={item.icon} alt="" className="h-6 w-6 invert" />
            </a>
          ))}
          <LanguageSwitcher />
        </div>
        <p className="text-sm text-muted-foreground">
          {t("footer.copy")} {year}
        </p>
      </div>
    </footer>
  );
}
