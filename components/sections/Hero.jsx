"use client";

import { useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { ArrowRight, ArrowUpRight, ExternalLink } from "lucide";
import { MorphIcon } from "morphicons/react";
import { gsap, useGSAP, SplitText, ScrollToPlugin } from "@/lib/gsap";
import { addMotionMatch, fadeInReduced, motion } from "@/lib/motion";
import { profile } from "@/data/profile";
import DeviceMockup from "@/components/ui/DeviceMockup";
import Magnetic from "@/components/ui/Magnetic";

/** Hero showcase: ReaperSquad company homepage */
const heroShowcase = {
  href: "https://www.reapersquad.online/en",
  mockupSrc: "/projects/reapersquad/cover.png",
};

function MorphLink({
  href,
  className,
  children,
  idleIcon,
  hoverIcon,
  iconSize = 18,
  external = false,
  onClick,
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={href}
      className={className}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
      {...(external
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
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

function scrollToFeatured(event) {
  event.preventDefault();
  const target = document.querySelector("#featured");
  if (!target) return;

  gsap.to(window, {
    duration: motion.slow,
    ease: motion.easeSmoothOut,
    scrollTo: { y: target, offsetY: 72 },
  });
}

export default function Hero() {
  const t = useTranslations("welcome");
  const scope = useRef(null);
  const headlineRef = useRef(null);
  const glowRef = useRef(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      addMotionMatch(mm, {
        reduced: () => {
          fadeInReduced(gsap, ".hero-fade", { delay: 0 });
        },
        full: () => {
          const headline = headlineRef.current;
          let split;

          if (headline) {
            split = SplitText.create(headline, {
              type: "words",
              aria: "auto",
            });
          }

          const words = split?.words?.length ? split.words : ".hero-headline";
          const intro = [".hero-badge", words, ".hero-subtitle", ".hero-cta", ".hero-image"];

          gsap.set(intro.flat(), { opacity: 0 });
          gsap.set([".hero-badge", ".hero-subtitle", ".hero-cta"], {
            y: motion.distanceMedium,
          });
          gsap.set(words, { y: motion.distanceLarge });
          gsap.set(".hero-image", { scale: motion.scaleLarge });

          const tl = gsap.timeline({
            defaults: { ease: motion.easeSmoothOut },
          });

          tl.to(".hero-badge", {
            opacity: 1,
            y: 0,
            duration: motion.fast,
          })
            .to(
              words,
              {
                opacity: 1,
                y: 0,
                duration: motion.slow,
                stagger: motion.stagger * 1.5,
              },
              `-=${motion.quick}`,
            )
            .to(
              ".hero-subtitle",
              {
                opacity: 1,
                y: 0,
                duration: motion.medium,
              },
              `-=${motion.fast}`,
            )
            .to(
              ".hero-cta",
              {
                opacity: 1,
                y: 0,
                duration: motion.fast,
                stagger: motion.stagger * 2,
              },
              `-=${motion.quick}`,
            )
            .to(
              ".hero-image",
              {
                opacity: 1,
                scale: 1,
                duration: motion.slow,
              },
              `-=${motion.medium}`,
            );

          return () => {
            split?.revert();
          };
        },
      });

      mm.add(
        "(prefers-reduced-motion: no-preference) and (pointer: fine)",
        () => {
          const glow = glowRef.current;
          if (!glow) return;

          const pos = { x: window.innerWidth * 0.6, y: window.innerHeight * 0.35 };
          const target = { x: pos.x, y: pos.y };

          gsap.set(glow, { x: pos.x, y: pos.y, xPercent: -50, yPercent: -50 });

          const onMove = (event) => {
            target.x = event.clientX;
            target.y = event.clientY;
          };

          const ticker = () => {
            pos.x += (target.x - pos.x) * 0.08;
            pos.y += (target.y - pos.y) * 0.08;
            gsap.set(glow, { x: pos.x, y: pos.y });
          };

          window.addEventListener("pointermove", onMove);
          gsap.ticker.add(ticker);

          return () => {
            window.removeEventListener("pointermove", onMove);
            gsap.ticker.remove(ticker);
          };
        },
      );

      return () => mm.revert();
    },
    { scope },
  );

  // ScrollToPlugin is registered in lib/gsap; reference keeps tree-shake from dropping it.
  void ScrollToPlugin;

  return (
    <section
      ref={scope}
      id="welcome"
      className="relative isolate min-h-[calc(100vh-4rem)] overflow-hidden"
    >
      <div
        className="absolute inset-0 -z-20 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: "url('/bg.png')" }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 -z-10 bg-linear-to-br from-background via-background/95 to-background/80"
        aria-hidden="true"
      />

      <div
        ref={glowRef}
        className="hero-cursor-glow pointer-events-none absolute top-0 left-0 -z-10 hidden h-[28rem] w-[28rem] rounded-full blur-3xl md:block"
        style={{ background: "var(--glow)" }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-16 bottom-10 -z-10 h-80 w-80 rounded-full blur-3xl"
        style={{
          background: "color-mix(in oklch, var(--primary) 18%, transparent)",
        }}
        aria-hidden="true"
      />

      <div className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-7xl flex-col items-center justify-center gap-8 px-6 py-12 md:flex-row md:items-center md:justify-between md:gap-10 md:py-16 lg:px-8">
        <div className="relative max-w-xl text-center md:text-left">
          <div
            className="pointer-events-none absolute -inset-x-6 -inset-y-8 -z-10 rounded-3xl bg-background/75 blur-2xl md:-inset-x-10 md:-inset-y-10"
            aria-hidden="true"
          />
          {profile.available ? (
            <p className="hero-badge hero-fade mb-4 inline-flex items-center gap-2 rounded-full border border-border/80 bg-card/60 px-3 py-1.5 text-sm text-muted-foreground backdrop-blur-sm">
              <span className="hero-available-dot relative flex h-2 w-2" aria-hidden="true">
                <span className="hero-available-dot-ping absolute inset-0 rounded-full bg-success" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
              </span>
              {t("available")}
            </p>
          ) : null}

          <h1
            ref={headlineRef}
            className="hero-headline hero-fade font-display text-3xl font-semibold tracking-tight text-foreground text-balance sm:text-4xl lg:text-5xl"
          >
            {t("headline")}
          </h1>

          <p className="hero-subtitle hero-fade mt-4 text-base text-foreground/80 sm:text-lg">
            {t("subtitle")}
          </p>

          <div className="mt-7 flex flex-col items-center gap-3 sm:flex-row md:justify-start">
            <Magnetic className="hero-cta hero-fade inline-flex">
              <MorphLink
                href="#featured"
                onClick={scrollToFeatured}
                className="inline-flex items-center gap-2 rounded-(--radius) bg-primary px-6 py-3 text-base font-semibold text-primary-foreground transition hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                idleIcon={ArrowRight}
                hoverIcon={ArrowUpRight}
              >
                {t("viewProjects")}
              </MorphLink>
            </Magnetic>
            <MorphLink
              href={heroShowcase.href}
              external
              className="hero-cta hero-fade inline-flex items-center gap-2 rounded-(--radius) border border-border px-6 py-3 text-base font-semibold text-foreground transition hover:border-foreground/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              idleIcon={ExternalLink}
              hoverIcon={ArrowUpRight}
            >
              {t("secondaryCta")}
            </MorphLink>
          </div>
        </div>

        <div className="hero-image hero-fade w-full max-w-[240px] shrink-0 sm:max-w-sm md:max-w-md lg:max-w-[28rem]">
          <div className="relative">
            <div
              className="absolute -inset-6 -z-10 rounded-[calc(var(--radius)+1rem)] opacity-50 blur-3xl"
              style={{ background: "var(--glow)" }}
              aria-hidden="true"
            />
            <DeviceMockup
              src={heroShowcase.mockupSrc}
              alt={t("mockupAlt")}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
