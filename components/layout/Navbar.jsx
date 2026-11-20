"use client";

import { useEffect, useState } from "react";
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

const SECTION_IDS = [
  "welcome",
  "featured",
  "projects",
  "about",
  "experience",
  "stack",
  "contact",
];

export default function Navbar() {
  const t = useTranslations("nav");
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("welcome");
  const [progress, setProgress] = useState(0);

  const links = [
    { name: t("home"), href: "#welcome", id: "welcome" },
    { name: t("featured"), href: "#featured", id: "featured" },
    { name: t("projects"), href: "#projects", id: "projects" },
    { name: t("about"), href: "#about", id: "about" },
    { name: t("experience"), href: "#experience", id: "experience" },
    { name: t("tech"), href: "#stack", id: "stack" },
    { name: t("contact"), href: "#contact", id: "contact" },
  ];

  useEffect(() => {
    function onScroll() {
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      setProgress(max > 0 ? Math.min(1, doc.scrollTop / max) : 0);
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const elements = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      Boolean,
    );
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target?.id) {
          setActive(visible[0].target.id);
        }
      },
      {
        rootMargin: "-30% 0px -55% 0px",
        threshold: [0.1, 0.25, 0.5],
      },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-0.5 origin-left bg-primary"
        style={{ transform: `scaleX(${progress})` }}
        aria-hidden="true"
      />
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link
          href="/"
          className="font-display text-xl font-semibold tracking-tight text-foreground transition hover:text-primary"
        >
          {profile.name}
        </Link>

        <div className="hidden items-center gap-5 lg:flex">
          {links.map((item) => {
            const isActive = active === item.id;
            return (
              <a
                key={item.href}
                href={item.href}
                aria-current={isActive ? "true" : undefined}
                className={`text-sm font-medium transition hover:text-primary ${
                  isActive ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {item.name}
              </a>
            );
          })}
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
            {links.map((item) => {
              const isActive = active === item.id;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  aria-current={isActive ? "true" : undefined}
                  className={`block rounded-lg px-3 py-2 text-base font-medium transition hover:bg-accent hover:text-foreground ${
                    isActive ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  {item.name}
                </a>
              );
            })}
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
