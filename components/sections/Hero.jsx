"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { ArrowRight, ArrowUpRight, ExternalLink } from "lucide";
import { MorphIcon } from "morphicons/react";
import { gsap, useGSAP, SplitText, ScrollToPlugin } from "@/lib/gsap";
import { addMotionMatch, fadeInReduced, motion } from "@/lib/motion";
import { profile } from "@/data/profile";
import { pulsoDemoUrl } from "@/data/projects";

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
        className="absolute inset-0 -z-20 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/bg.png')" }}
      />
      <div className="absolute inset-0 -z-10 bg-linear-to-br from-background via-background/90 to-background/70" />

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
        <div className="max-w-xl text-center md:text-left">
          {profile.available ? (
            <p className="hero-badge hero-fade mb-4 inline-flex items-center gap-2 rounded-full border border-border/80 bg-card/60 px-3 py-1.5 text-sm text-muted-foreground backdrop-blur-sm">
              <span className="hero-available-dot relative flex h-2 w-2" aria-hidden="true">
                <span className="hero-available-dot-ping absolute inset-0 rounded-full bg-primary" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
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

          <p className="hero-subtitle hero-fade mt-4 text-base text-muted-foreground sm:text-lg">
            {t("subtitle")}
          </p>

          <div className="mt-7 flex flex-col items-center gap-3 sm:flex-row md:justify-start">
            <MorphLink
              href="#featured"
              onClick={scrollToFeatured}
              className="hero-cta hero-fade inline-flex items-center gap-2 rounded-(--radius) bg-primary px-6 py-3 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              idleIcon={ArrowRight}
              hoverIcon={ArrowUpRight}
            >
              {t("viewProjects")}
            </MorphLink>
            <MorphLink
              href={pulsoDemoUrl}
              external
              className="hero-cta hero-fade inline-flex items-center gap-2 rounded-(--radius) border border-border bg-card/40 px-6 py-3 text-base font-semibold text-foreground transition hover:border-primary/50 hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              idleIcon={ExternalLink}
              hoverIcon={ArrowUpRight}
            >
              {t("tryPulso")}
            </MorphLink>
          </div>
        </div>

        <div className="hero-image hero-fade w-full max-w-sm shrink-0 md:max-w-md lg:max-w-[26rem]">
          <div className="relative aspect-square">
            <div
              className="absolute -inset-4 -z-10 rounded-[calc(var(--radius)+1rem)] opacity-60 blur-2xl"
              style={{ background: "var(--glow)" }}
              aria-hidden="true"
            />
            <Image
              src="/welcomeImg.png"
              alt={profile.name}
              width={640}
              height={640}
              priority
              className="h-auto w-full object-contain drop-shadow-2xl"
              sizes="(max-width: 768px) 80vw, 416px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
