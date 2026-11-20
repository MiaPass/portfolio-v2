"use client";

import { useRef, useState } from "react";
import { flushSync } from "react-dom";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { ArrowRight, ArrowUpRight, Images } from "lucide";
import { MorphIcon } from "morphicons/react";
import { otherProjects, projectFilterTags } from "@/data/projects";
import ProjectGalleryModal from "@/components/ui/ProjectGalleryModal";
import { gsap, useGSAP, ScrollTrigger, Flip } from "@/lib/gsap";
import { addMotionMatch, fadeInReduced, motion, prefersReducedMotion } from "@/lib/motion";

function bentoSpan(index) {
  // Compact bento rhythm on large screens
  if (index === 0) return "md:col-span-4 md:row-span-2";
  if (index === 1 || index === 2) return "md:col-span-2";
  if (index === 3) return "md:col-span-3";
  if (index === 4) return "md:col-span-3";
  return "md:col-span-2";
}

function ProjectMedia({ project, name, featured }) {
  if (!project.media) {
    return (
      <div className="flex h-full w-full items-center justify-center bg-muted">
        <span className="font-display text-2xl font-bold text-muted-foreground">
          {name.charAt(0)}
        </span>
      </div>
    );
  }

  if (project.media.type === "video") {
    return (
      <video
        src={project.media.src}
        autoPlay
        loop
        muted
        playsInline
        className="h-full w-full object-cover"
      />
    );
  }

  return (
    <Image
      src={project.media.src}
      alt={name}
      fill
      className="object-cover transition duration-(--duration-fast) group-hover:scale-[1.03]"
      sizes={
        featured
          ? "(max-width: 768px) 100vw, 66vw"
          : "(max-width: 768px) 100vw, 33vw"
      }
    />
  );
}

function getProjectActionIcon(isGallery, hovered) {
  if (isGallery) return Images;
  if (hovered) return ArrowUpRight;
  return ArrowRight;
}

function ProjectCardContent({ project, hovered, name, desc, large }) {
  const isGallery = project.mode === "gallery";
  const actionIcon = getProjectActionIcon(isGallery, hovered);

  return (
    <>
      <div
        className={`relative w-full overflow-hidden bg-muted ${large ? "aspect-[16/11] md:min-h-[280px] md:aspect-auto md:h-full" : "aspect-video"}`}
      >
        <ProjectMedia project={project} name={name} featured={large} />
        <span className="pointer-events-none absolute right-3 top-3 inline-flex rounded-full bg-background/70 p-2 text-foreground ring-1 ring-border backdrop-blur-sm">
          <MorphIcon
            icon={actionIcon}
            size={16}
            spring="smooth"
            reducedMotion="user"
          />
        </span>
      </div>
      <div className={`p-5 text-left ${large ? "md:p-6" : ""}`}>
        <h3
          className={`font-display font-semibold text-foreground ${large ? "text-2xl" : "text-lg"}`}
        >
          {name}
        </h3>
        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
          {desc}
        </p>
        <p className="mt-3 font-mono text-[11px] tracking-wide text-primary">
          {project.techs}
        </p>
      </div>
    </>
  );
}

const cardClassName =
  "project-card group flex h-full w-full flex-col overflow-hidden rounded-(--radius) bg-card text-left shadow-lg ring-1 ring-border transition duration-(--duration-fast) ease-(--ease-smooth-out) hover:ring-primary hover:shadow-primary/10";

function ProjectCard({ project, onOpenGallery, large }) {
  const t = useTranslations("projects");
  const [hovered, setHovered] = useState(false);
  const name = t(`items.${project.id}.name`);
  const desc = t(`items.${project.id}.desc`);

  const sharedProps = {
    className: cardClassName,
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => setHovered(false),
    onFocus: () => setHovered(true),
    onBlur: () => setHovered(false),
  };

  const content = (
    <ProjectCardContent
      project={project}
      hovered={hovered}
      name={name}
      desc={desc}
      large={large}
    />
  );

  if (project.mode === "gallery") {
    return (
      <button
        type="button"
        onClick={() => onOpenGallery(project)}
        aria-label={`${t("openGallery")}: ${name}`}
        {...sharedProps}
      >
        {content}
      </button>
    );
  }

  return (
    <a
      href={project.href}
      target={project.external ? "_blank" : undefined}
      rel={project.external ? "noopener noreferrer" : undefined}
      {...sharedProps}
    >
      {content}
    </a>
  );
}

export default function Projects() {
  const t = useTranslations("projects");
  const scope = useRef(null);
  const gridRef = useRef(null);
  const [galleryProject, setGalleryProject] = useState(null);
  const [filter, setFilter] = useState("all");

  const visibleProjects =
    filter === "all"
      ? otherProjects
      : otherProjects.filter((project) => project.tags?.includes(filter));

  function applyFilter(next) {
    if (next === filter) return;

    if (prefersReducedMotion() || !gridRef.current) {
      setFilter(next);
      return;
    }

    const shells = gsap.utils.toArray(".project-card-shell", gridRef.current);
    const state = Flip.getState(shells);

    flushSync(() => {
      setFilter(next);
    });

    Flip.from(state, {
      targets: ".project-card-shell",
      duration: motion.medium,
      ease: motion.easeSmoothOut,
      absolute: true,
      stagger: motion.stagger,
      nested: true,
      onEnter: (elements) =>
        gsap.fromTo(
          elements,
          { opacity: 0, scale: 0.96 },
          { opacity: 1, scale: 1, duration: motion.fast },
        ),
      onLeave: (elements) =>
        gsap.to(elements, { opacity: 0, scale: 0.96, duration: motion.quick }),
    });
  }

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      addMotionMatch(mm, {
        reduced: () => {
          fadeInReduced(gsap, ".project-card-shell", {
            scrollTrigger: {
              trigger: scope.current,
              start: "top 80%",
              once: true,
            },
          });
        },
        full: () => {
          const shells = gsap.utils.toArray(".project-card-shell", scope.current);
          if (!shells.length) return;

          gsap.fromTo(
            shells,
            { opacity: 0, y: motion.distanceLarge },
            {
              opacity: 1,
              y: 0,
              duration: motion.medium,
              stagger: motion.stagger * 2,
              ease: motion.easeSmoothOut,
              immediateRender: false,
              scrollTrigger: {
                trigger: scope.current,
                start: "top 80%",
                once: true,
              },
            },
          );
        },
      });

      ScrollTrigger.refresh();
      return () => mm.revert();
    },
    { scope },
  );

  const filters = ["all", ...projectFilterTags];

  return (
    <section
      ref={scope}
      id="projects"
      className="scroll-mt-20 bg-background py-24"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            {t("title")}
          </h2>
          <p className="mt-3 text-base text-foreground/75">{t("subtitle")}</p>
        </div>

        <div
          className="t-tabs mx-auto mt-10 flex w-fit max-w-full flex-wrap items-center justify-center gap-1 rounded-(--radius) border border-border bg-card/60 p-1"
          role="tablist"
          aria-label={t("title")}
        >
          {filters.map((tag) => {
            const active = filter === tag;
            const label = tag === "all" ? t("filterAll") : tag;
            return (
              <button
                key={tag}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => applyFilter(tag)}
                className={`rounded-[calc(var(--radius)-2px)] px-3 py-1.5 text-sm font-medium transition duration-(--duration-fast) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring ${
                  active
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {label}
              </button>
            );
          })}
        </div>

        <div
          ref={gridRef}
          className="projects-grid mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-6 md:gap-5"
        >
          {visibleProjects.map((project, index) => (
            <div
              key={project.id}
              className={`project-card-shell min-h-0 ${bentoSpan(index)}`}
              data-flip-id={project.id}
            >
              <ProjectCard
                project={project}
                onOpenGallery={setGalleryProject}
                large={index === 0 && filter === "all"}
              />
            </div>
          ))}
        </div>
      </div>

      <ProjectGalleryModal
        key={galleryProject?.id ?? "closed"}
        isOpen={Boolean(galleryProject)}
        onClose={() => setGalleryProject(null)}
        title={
          galleryProject ? t(`items.${galleryProject.id}.name`) : undefined
        }
        images={galleryProject?.gallery ?? []}
      />
    </section>
  );
}
