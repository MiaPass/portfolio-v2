"use client";

import { useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { ArrowRight, ArrowUpRight, ChevronDown, UserRound } from "lucide";
import { MorphIcon } from "morphicons/react";
import { gsap, useGSAP } from "@/lib/gsap";
import { motion } from "@/lib/motion";

function MorphLink({
  href,
  className,
  children,
  idleIcon,
  hoverIcon,
  iconSize = 18,
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={href}
      className={className}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
    >
      {children}
      <MorphIcon
        icon={hovered ? hoverIcon : idleIcon}
        size={iconSize}
        spring="smooth"
        reducedMotion="user"
      />
    </a>
  );
}

export default function Welcome() {
  const t = useTranslations("welcome");
  const scope = useRef(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const tl = gsap.timeline({
          defaults: { ease: motion.easeSmoothOut },
        });

        tl.from(".welcome-title", {
          opacity: 0,
          y: motion.distanceLarge + 8,
          duration: motion.slow,
        })
          .from(
            ".welcome-subtitle",
            {
              opacity: 0,
              y: motion.distanceMedium + 8,
              duration: motion.medium,
            },
            `-=${motion.fast}`,
          )
          .from(
            ".welcome-cta",
            {
              opacity: 0,
              y: motion.distanceMedium,
              duration: motion.fast,
              stagger: motion.stagger * 2,
            },
            `-=${motion.quick}`,
          )
          .from(
            ".welcome-image",
            {
              opacity: 0,
              scale: motion.scaleLarge,
              duration: motion.slow,
            },
            `-=${motion.medium}`,
          );
      });
    },
    { scope },
  );

  return (
    <section
      ref={scope}
      id="welcome"
      className="relative isolate min-h-[calc(100vh-4rem)] overflow-hidden"
    >
      <div
        className="absolute inset-0 -z-20 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/bg.png')" }}
      />
      <div className="absolute inset-0 -z-10 bg-linear-to-br from-background via-background/90 to-background/70" />
      <div
        className="pointer-events-none absolute -left-24 top-24 -z-10 h-72 w-72 rounded-full blur-3xl"
        style={{ background: "var(--glow)" }}
      />
      <div
        className="pointer-events-none absolute -right-16 bottom-10 -z-10 h-80 w-80 rounded-full blur-3xl"
        style={{
          background: "color-mix(in oklch, var(--primary) 18%, transparent)",
        }}
      />

      <div className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-7xl flex-col items-center justify-center gap-12 px-6 py-20 md:flex-row md:items-center md:justify-between lg:px-8">
        <div className="max-w-xl text-center md:text-left">
          <p className="welcome-subtitle mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            {t("role")}
          </p>
          <h1 className="welcome-title font-display text-5xl font-semibold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            Mia Passalia
          </h1>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row md:justify-start">
            <MorphLink
              href="#about-me"
              className="welcome-cta inline-flex items-center gap-2 rounded-(--radius) bg-primary px-6 py-3 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition hover:brightness-110"
              idleIcon={UserRound}
              hoverIcon={ChevronDown}
            >
              {t("meet")}
            </MorphLink>
            <MorphLink
              href="#projects"
              className="welcome-cta inline-flex items-center gap-2 text-base font-semibold text-foreground/90 transition hover:text-primary"
              idleIcon={ArrowRight}
              hoverIcon={ArrowUpRight}
            >
              {t("viewProjects")}
            </MorphLink>
          </div>
        </div>
        <div className="welcome-image w-full max-w-md md:max-w-lg">
          <div className="relative">
            <div
              className="absolute -inset-4 -z-10 rounded-[calc(var(--radius)+1rem)] opacity-60 blur-2xl"
              style={{ background: "var(--glow)" }}
            />
            <img
              src="/welcomeImg.png"
              alt="Mia Passalia"
              className="h-auto w-full object-contain drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
