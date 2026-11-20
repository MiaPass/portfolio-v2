"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Menu, X } from "lucide";
import { MorphIcon } from "morphicons/react";
import { Link } from "@/i18n/navigation";
import LanguageSwitcher from "./LanguageSwitcher";
import { profile } from "@/data/profile";

const socials = [
  {
    name: "GitHub",
    href: profile.github,
    icon: "/svg/github.svg",
  },
  {
    name: "LinkedIn",
    href: profile.linkedin,
    icon: "/svg/linkedin.svg",
  },
];

export default function Navbar() {
  const t = useTranslations("nav");
  const [open, setOpen] = useState(false);

  const links = [
    { name: t("home"), href: "#welcome" },
    { name: t("featured"), href: "#featured" },
    { name: t("projects"), href: "#projects" },
    { name: t("about"), href: "#about" },
    { name: t("experience"), href: "#experience" },
    { name: t("tech"), href: "#stack" },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link
          href="/"
          className="font-display text-xl font-semibold tracking-tight text-foreground"
        >
          {profile.name}
        </Link>

        <div className="hidden items-center gap-6 lg:flex">
          {links.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition hover:text-primary"
            >
              {item.name}
            </a>
          ))}
          <LanguageSwitcher />
          <div className="flex items-center gap-3 border-l border-border pl-4">
            {socials.map((item) => (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-6 w-6 items-center justify-center opacity-70 transition hover:opacity-100"
              >
                <span className="sr-only">{item.name}</span>
                <img src={item.icon} alt="" className="h-5 w-5 invert" />
              </a>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <LanguageSwitcher />
          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            className="rounded-lg p-2 text-muted-foreground transition hover:bg-accent hover:text-foreground"
          >
            <span className="sr-only">{t("toggleMenu")}</span>
            <MorphIcon
              icon={open ? X : Menu}
              size={24}
              spring="snappy"
              reducedMotion="user"
            />
          </button>
        </div>
      </nav>

      {open && (
        <div id="mobile-nav" className="border-t border-border lg:hidden">
          <div className="space-y-1 px-6 py-4">
            {links.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-2 text-base font-medium text-muted-foreground transition hover:bg-accent hover:text-foreground"
              >
                {item.name}
              </a>
            ))}
            <div className="flex gap-4 px-3 pt-3">
              {socials.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="flex h-8 w-8 items-center justify-center"
                >
                  <span className="sr-only">{item.name}</span>
                  <img src={item.icon} alt="" className="h-6 w-6 invert" />
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
