"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { ArrowUpRight, ExternalLink, Images } from "lucide";
import { MorphIcon } from "morphicons/react";
import { featuredProjects } from "@/data/projects";
import Tilt from "@/components/ui/Tilt";
import SectionHeading from "@/components/ui/SectionHeading";
import ProjectGalleryModal from "@/components/ui/ProjectGalleryModal";
import { formatTechList } from "@/lib/formatTech";
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
      sizes="(max-width: 768px) 100vw, 60vw"
    />
  );
}

const linkButtonClass =
  "inline-flex items-center gap-2 rounded-(--radius) border border-border px-4 py-2 text-sm font-semibold text-foreground transition hover:border-foreground/40 hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring";

function CaseLinks({ project, t, onOpenGallery }) {
  const hasGallery = Array.isArray(project.gallery) && project.gallery.length > 0;
  const demoHref = project.demoUrl || (project.mode === "link" ? project.href : null);

  if (!demoHref && !project.repoUrl && !hasGallery && project.mode !== "gallery") {
    return null;
  }

  return (
    <div className="mt-6 flex flex-wrap gap-3">
      {demoHref ? (
        <a
          href={demoHref}
          target="_blank"
          rel="noopener noreferrer"
          className={linkButtonClass}
        >
          {t("demo")}
          <MorphIcon icon={ExternalLink} size={16} reducedMotion="user" />
        </a>
      ) : null}

      {hasGallery || project.mode === "gallery" ? (
        <button
          type="button"
          onClick={() => onOpenGallery?.(project)}
          className={linkButtonClass}
        >
          {t("viewScreenshots")}
          <MorphIcon icon={Images} size={16} reducedMotion="user" />
        </button>
      ) : null}

      {project.repoUrl ? (
        <a
          href={project.repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={linkButtonClass}
        >
          {t("code")}
          <MorphIcon icon={ArrowUpRight} size={16} reducedMotion="user" />
        </a>
      ) : null}
    </div>
  );
}

function CaseMeta({ project }) {
  const tFeatured = useTranslations("featured");
  if (!project.year && !project.kind) return null;
  const kind = project.kind ? tFeatured(`kinds.${project.kind}`) : null;
  return (
    <p className="text-sm text-muted-foreground">
      {[project.year, kind].filter(Boolean).join(" · ")}
    </p>
  );
}

function CaseBody({ project, dense = false }) {
  const t = useTranslations("projects");
  const tFeatured = useTranslations("featured");
  const name = t(`items.${project.id}.name`);
  const problem = t(`items.${project.id}.problem`);
  const whatIDid = t(`items.${project.id}.whatIDid`);
  const decisions = t.raw(`items.${project.id}.decisions`);

  return (
    <div className="featured-copy">
      <CaseMeta project={project} />
      <h3
        className={`mt-2 font-display font-semibold tracking-tight text-foreground ${
          dense ? "text-2xl sm:text-3xl" : "text-3xl sm:text-4xl lg:text-5xl"
        }`}
      >
        {name}
      </h3>

      <div
        className={`mt-5 space-y-4 leading-relaxed text-foreground/80 ${
          dense ? "text-sm sm:text-base" : "text-base sm:text-lg"
        }`}
      >
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

      {!dense ? (
        <div className="mt-6">
          <p className="text-sm font-semibold text-foreground">
            {tFeatured("decisions")}
          </p>
          <ul className="mt-3 space-y-2 text-sm leading-relaxed text-foreground/75">
            {(Array.isArray(decisions) ? decisions : []).map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      ) : null}

      <p className="mt-5 text-sm text-muted-foreground">
        {formatTechList(project.techs)}
      </p>
    </div>
  );
}

function LeadCase({ project, onOpenGallery }) {
  const t = useTranslations("projects");
  const name = t(`items.${project.id}.name`);

  return (
    <article className="featured-case featured-case--lead grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
      <div className="featured-cover relative lg:col-span-7">
        <Tilt max={6} className="w-full">
          <div className="featured-cover-clip relative aspect-[16/10] overflow-hidden rounded-(--radius) bg-muted">
            <CoverMedia project={project} name={name} />
          </div>
        </Tilt>
      </div>
      <div className="lg:col-span-5">
        <CaseBody project={project} />
        <CaseLinks project={project} t={t} onOpenGallery={onOpenGallery} />
      </div>
    </article>
  );
}

function SecondaryCase({ project, onOpenGallery }) {
  const t = useTranslations("projects");
  const name = t(`items.${project.id}.name`);

  return (
    <article className="featured-case featured-case--secondary grid gap-6 sm:grid-cols-2 sm:items-start sm:gap-8">
      <div className="featured-cover relative">
        <div className="featured-cover-clip relative aspect-[16/10] overflow-hidden rounded-(--radius) bg-muted">
          <CoverMedia project={project} name={name} />
        </div>
      </div>
      <div>
        <CaseBody project={project} dense />
        <CaseLinks project={project} t={t} onOpenGallery={onOpenGallery} />
      </div>
    </article>
  );
}

export default function FeaturedProjects() {
  const t = useTranslations("featured");
  const tProjects = useTranslations("projects");
  const scope = useRef(null);
  const [galleryProject, setGalleryProject] = useState(null);

  const [lead, ...rest] = featuredProjects;

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
                { clipPath: "inset(8% 8% 8% 8% round 12px)", opacity: 0.5 },
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

            if (media && caseEl.classList.contains("featured-case--lead")) {
              gsap.fromTo(
                media,
                { yPercent: -4 },
                {
                  yPercent: 4,
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
        <SectionHeading index="01">{t("title")}</SectionHeading>

        <div className="mt-14 space-y-20 lg:space-y-28">
          {lead ? (
            <LeadCase project={lead} onOpenGallery={setGalleryProject} />
          ) : null}

          {rest.length ? (
            <div className="grid gap-16 lg:grid-cols-2 lg:gap-12">
              {rest.map((project) => (
                <SecondaryCase
                  key={project.id}
                  project={project}
                  onOpenGallery={setGalleryProject}
                />
              ))}
            </div>
          ) : null}
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
