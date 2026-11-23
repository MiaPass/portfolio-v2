"use client";

import { useEffect, useRef, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { ArrowUp, Check, Download } from "lucide";
import { MorphIcon } from "morphicons/react";
import Magnetic from "@/components/ui/Magnetic";
import { profile } from "@/data/profile";
import { gsap, useGSAP, ScrollToPlugin } from "@/lib/gsap";
import { addMotionMatch, motion, prefersReducedMotion } from "@/lib/motion";

const linkClass =
  "text-sm text-muted-foreground underline-offset-4 transition hover:text-secondary hover:underline hover:decoration-secondary";

const secondaryBtnClass =
  "inline-flex items-center gap-2 rounded-(--radius) border border-border px-5 py-2.5 text-sm font-semibold text-foreground transition hover:border-foreground/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring";

function BuenosAiresTime({ locale, label }) {
  const [time, setTime] = useState(null);

  useEffect(() => {
    const formatter = new Intl.DateTimeFormat(locale, {
      timeZone: "America/Buenos_Aires",
      hour: "2-digit",
      minute: "2-digit",
    });

    const tick = () => setTime(formatter.format(new Date()));
    tick();
    const id = window.setInterval(tick, 60_000);
    return () => window.clearInterval(id);
  }, [locale]);

  if (!time) {
    return (
      <p className="text-sm text-muted-foreground">
        {label}
        <span className="sr-only">…</span>
      </p>
    );
  }

  return (
    <p className="text-sm text-muted-foreground" suppressHydrationWarning>
      {label}: <time dateTime={time}>{time}</time>
    </p>
  );
}

export default function Footer() {
  const t = useTranslations();
  const tFooter = useTranslations("footer");
  const locale = useLocale();
  const [copied, setCopied] = useState(false);
  const nameRef = useRef(null);
  const cvHref = profile.cv[locale] || profile.cv.es;

  const navLinks = [
    { name: t("nav.home"), href: "#welcome" },
    { name: t("nav.featured"), href: "#featured" },
    { name: t("nav.projects"), href: "#projects" },
    { name: t("nav.about"), href: "#about" },
    { name: t("nav.experience"), href: "#experience" },
    { name: t("nav.tech"), href: "#stack" },
    { name: t("nav.contact"), href: "#contact" },
  ];

  const socialLinks = [
    { name: tFooter("github"), href: profile.github },
    { name: tFooter("linkedin"), href: profile.linkedin },
  ];

  const nameChars = profile.name.split("");

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  }

  function scrollToTop() {
    void ScrollToPlugin;
    if (prefersReducedMotion()) {
      window.scrollTo(0, 0);
      return;
    }
    gsap.to(window, {
      duration: motion.slow,
      scrollTo: { y: 0 },
      ease: motion.easeSmoothOut,
    });
  }

  useGSAP(
    () => {
      const root = nameRef.current;
      if (!root) return undefined;

      const letters = root.querySelectorAll(".footer-letter");
      const mm = gsap.matchMedia();

      addMotionMatch(mm, {
        reduced: () => {
          gsap.set(letters, { clearProps: "transform", opacity: 0.35, y: 0 });
        },
        full: () => {
          gsap.set(letters, { y: "0.55em", opacity: 0 });
          gsap.to(letters, {
            y: 0,
            opacity: 0.35,
            duration: motion.medium,
            stagger: motion.stagger,
            ease: motion.easeSmoothOut,
            scrollTrigger: {
              trigger: root,
              start: "top 90%",
              once: true,
            },
          });
        },
      });

      return () => mm.revert();
    },
    { scope: nameRef },
  );

  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 pt-20 pb-10 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            {tFooter("ctaTitle")}
          </h2>
          <p className="mt-3 text-base text-muted-foreground sm:text-lg">
            {tFooter("ctaSubtitle")}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Magnetic
              as="button"
              type="button"
              onClick={copyEmail}
              className={`inline-flex items-center gap-2 rounded-(--radius) px-5 py-3 text-sm font-semibold transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring sm:text-base ${
                copied
                  ? "border border-border bg-card text-secondary"
                  : "bg-primary text-primary-foreground hover:brightness-110"
              }`}
              aria-live="polite"
            >
              {copied ? (
                <>
                  <MorphIcon
                    icon={Check}
                    size={18}
                    spring="snappy"
                    reducedMotion="user"
                  />
                  {tFooter("copied")}
                </>
              ) : (
                profile.email
              )}
            </Magnetic>

            <a href={cvHref} download className={secondaryBtnClass}>
              <MorphIcon
                icon={Download}
                size={16}
                spring="smooth"
                reducedMotion="user"
              />
              {tFooter("downloadCv")}
            </a>
          </div>
        </div>

        <div className="mt-16 grid gap-10 border-t border-border pt-12 sm:grid-cols-3">
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-foreground">
              {tFooter("navTitle")}
            </h3>
            <ul className="mt-4 space-y-2">
              {navLinks.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className={linkClass}>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-foreground">
              {tFooter("socialTitle")}
            </h3>
            <ul className="mt-4 space-y-2">
              {socialLinks.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkClass}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-foreground">
              {tFooter("infoTitle")}
            </h3>
            <div className="mt-4 space-y-2">
              <p className="text-sm text-muted-foreground">
                {tFooter("location")}
              </p>
              <BuenosAiresTime
                locale={locale}
                label={tFooter("localTime")}
              />
            </div>
          </div>
        </div>

        <p
          ref={nameRef}
          className="footer-giant-name mt-16 w-full overflow-hidden text-center font-display font-semibold leading-none tracking-tight text-muted-foreground"
          style={{ fontSize: "clamp(2.25rem, 12vw, 7rem)" }}
          aria-label={profile.name}
        >
          {nameChars.map((char, index) => (
            <span
              key={`${char}-${index}`}
              className="footer-letter inline-block opacity-[0.35]"
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-6">
          <p className="text-sm text-muted-foreground">{tFooter("copyright")}</p>
          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 text-sm text-muted-foreground underline-offset-4 transition hover:text-secondary hover:underline hover:decoration-secondary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
          >
            {tFooter("backToTop")}
            <MorphIcon
              icon={ArrowUp}
              size={16}
              spring="snappy"
              reducedMotion="user"
            />
          </button>
        </div>
      </div>
    </footer>
  );
}
