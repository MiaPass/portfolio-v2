"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { ArrowUpRight, ExternalLink, Images } from "lucide";
import { MorphIcon } from "morphicons/react";
import { featuredProjects } from "@/data/projects";
import Tilt from "@/components/ui/Tilt";
import ProjectGalleryModal from "@/components/ui/ProjectGalleryModal";
import { gsap, useGSAP, ScrollTrigger } from "@/lib/gsap";
import { addMotionMatch, fadeInReduced, motion } from "@/lib/motion";

function CoverMedia({ project, name }) {
  if (project.media?.type === "video") {
    return (
      <video
        src={project.media.src}
        autoPlay
        loop
        muted
        playsInline
        className="featured-cover-media h-full w-full scale-110 object-cover"
      />
    );
  }

  const src = project.media?.src;
  if (!src) {
    return (
      <div className="flex h-full w-full items-center justify-center bg-muted">
        <span className="font-display text-4xl font-bold text-muted-foreground">
          {name.charAt(0)}
        </span>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={name}
      fill
      className="featured-cover-media object-cover scale-110"
      sizes="(max-width: 768px) 100vw, 50vw"
    />
  );
}

function CaseLinks({ project, t }) {
  const links = [];

  if (project.demoUrl || (project.mode === "link" && project.href)) {
    links.push({
      key: "demo",
      href: project.demoUrl || project.href,
      label: t("demo"),
      external: true,
    });
  }

  if (project.repoUrl) {
    links.push({
      key: "repo",
      href: project.repoUrl,
      label: t("code"),
      external: true,
    });
  }

  if (project.mode === "gallery") {
    links.push({
      key: "gallery",
      href: `#gallery-${project.id}`,
      label: t("openGallery"),
      external: false,
      gallery: true,
    });
  }

  if (!links.length) return null;

  return (
    <div className="mt-6 flex flex-wrap gap-3">
      {links.map((link) =>
        link.gallery ? (
          <span
            key={link.key}
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary"
          >
            <MorphIcon icon={Images} size={16} reducedMotion="user" />
            {link.label}
          </span>
        ) : (
          <a
            key={link.key}
            href={link.href}
            target={link.external ? "_blank" : undefined}
            rel={link.external ? "noopener noreferrer" : undefined}
            className="inline-flex items-center gap-2 rounded-(--radius) border border-border bg-card/50 px-4 py-2 text-sm font-semibold text-foreground transition hover:border-primary/50 hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
          >
            {link.label}
            <MorphIcon
              icon={link.external ? ExternalLink : ArrowUpRight}
              size={16}
              reducedMotion="user"
            />
          </a>
        ),
      )}
    </div>
  );
}

function FeaturedCase({ project, index, onOpenGallery }) {
  const t = useTranslations("projects");
  const tFeatured = useTranslations("featured");
  const name = t(`items.${project.id}.name`);
  const problem = t(`items.${project.id}.problem`);
  const whatIDid = t(`items.${project.id}.whatIDid`);
  const decisions = t.raw(`items.${project.id}.decisions`);
  const reversed = index % 2 === 1;

  return (
    <article
      className="featured-case grid items-center gap-10 lg:grid-cols-2 lg:gap-14"
      data-reversed={reversed ? "true" : "false"}
    >
      <div
        className={`featured-cover relative ${reversed ? "lg:order-2" : ""}`}
      >
        <Tilt max={8} className="w-full">
          <div className="featured-cover-clip relative aspect-[16/10] overflow-hidden rounded-(--radius) bg-muted ring-1 ring-border">
            <CoverMedia project={project} name={name} />
          </div>
        </Tilt>
      </div>

      <div className={`featured-copy ${reversed ? "lg:order-1" : ""}`}>
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
          {tFeatured("label")}
        </p>
        <h3 className="mt-3 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          {name}
        </h3>

        <div className="mt-6 space-y-4 text-base leading-relaxed text-foreground/80">
          <p>
            <span className="font-semibold text-foreground">
              {tFeatured("problem")}{" "}
            </span>
            {problem}
          </p>
          <p>
            <span className="font-semibold text-foreground">
              {tFeatured("whatIDid")}{" "}
            </span>
            {whatIDid}
          </p>
        </div>

        <div className="mt-6">
          <p className="text-sm font-semibold text-foreground">
            {tFeatured("decisions")}
          </p>
          <ul className="mt-3 space-y-2 text-sm leading-relaxed text-foreground/80">
            {(Array.isArray(decisions) ? decisions : []).map((item) => (
              <li key={item} className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-6 font-mono text-xs tracking-wide text-primary sm:text-sm">
          {project.techs}
        </p>

        {project.mode === "gallery" ? (
          <div className="mt-6">
            <button
              type="button"
              onClick={() => onOpenGallery?.(project)}
              className="inline-flex items-center gap-2 rounded-(--radius) border border-border bg-card/50 px-4 py-2 text-sm font-semibold text-foreground transition hover:border-primary/50 hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              {t("openGallery")}
              <MorphIcon icon={Images} size={16} reducedMotion="user" />
            </button>
          </div>
        ) : (
          <CaseLinks project={project} t={t} />
        )}
      </div>
    </article>
  );
}

export default function FeaturedProjects() {
  const t = useTranslations("featured");
  const tProjects = useTranslations("projects");
  const scope = useRef(null);
  const [galleryProject, setGalleryProject] = useState(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      const cases = gsap.utils.toArray(".featured-case", scope.current);

      addMotionMatch(mm, {
        reduced: () => {
          fadeInReduced(gsap, cases, {
            scrollTrigger: {
              trigger: scope.current,
              start: "top 80%",
              once: true,
            },
          });
        },
        full: () => {
          cases.forEach((caseEl) => {
            const cover = caseEl.querySelector(".featured-cover-clip");
            const media = caseEl.querySelector(".featured-cover-media");
            const copy = caseEl.querySelector(".featured-copy");

            if (cover) {
              gsap.fromTo(
                cover,
                { clipPath: "inset(12% 12% 12% 12% round 12px)", opacity: 0.4 },
                {
                  clipPath: "inset(0% 0% 0% 0% round 12px)",
                  opacity: 1,
                  duration: motion.slow,
                  ease: motion.easeSmoothOut,
                  scrollTrigger: {
                    trigger: caseEl,
                    start: "top 75%",
                    once: true,
                  },
                },
              );
            }

            if (media) {
              gsap.fromTo(
                media,
                { yPercent: -6 },
                {
                  yPercent: 6,
                  ease: "none",
                  scrollTrigger: {
                    trigger: caseEl,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true,
                  },
                },
              );
            }

            if (copy) {
              gsap.fromTo(
                copy,
                { opacity: 0, y: motion.distanceLarge },
                {
                  opacity: 1,
                  y: 0,
                  duration: motion.medium,
                  ease: motion.easeSmoothOut,
                  scrollTrigger: {
                    trigger: caseEl,
                    start: "top 70%",
                    once: true,
                  },
                },
              );
            }
          });
        },
      });

      ScrollTrigger.refresh();
      return () => mm.revert();
    },
    { scope },
  );

  return (
    <section
      ref={scope}
      id="featured"
      className="scroll-mt-20 bg-background py-24"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            {t("title")}
          </h2>
          <p className="mt-4 text-base text-foreground/75 sm:text-lg">
            {t("subtitle")}
          </p>
        </div>

        <div className="mt-16 space-y-24 lg:space-y-32">
          {featuredProjects.map((project, index) => (
            <FeaturedCase
              key={project.id}
              project={project}
              index={index}
              onOpenGallery={setGalleryProject}
            />
          ))}
        </div>
      </div>

      <ProjectGalleryModal
        key={galleryProject?.id ?? "featured-closed"}
        isOpen={Boolean(galleryProject)}
        onClose={() => setGalleryProject(null)}
        title={
          galleryProject
            ? tProjects(`items.${galleryProject.id}.name`)
            : undefined
        }
        images={galleryProject?.gallery ?? []}
      />
    </section>
  );
}
