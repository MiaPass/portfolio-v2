"use client";

import { useRef, useState } from "react";
import { flushSync } from "react-dom";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { otherProjects, projectFilterTags } from "@/data/projects";
import ProjectGalleryModal from "@/components/ui/ProjectGalleryModal";
import SectionHeading from "@/components/ui/SectionHeading";
import { formatTechList } from "@/lib/formatTech";
import { gsap, useGSAP, ScrollTrigger, Flip } from "@/lib/gsap";
import { addMotionMatch, fadeInReduced, motion, prefersReducedMotion } from "@/lib/motion";

function ProjectThumb({ project, name }) {
  if (!project.media) {
    return (
      <div className="flex h-full w-full items-center justify-center bg-muted text-sm font-medium text-muted-foreground">
        {name.charAt(0)}
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
      className="object-cover"
      sizes="(max-width: 768px) 100vw, 120px"
    />
  );
}

function ProjectRowContent({ project, name, desc }) {
  const year = project.yearLabel || project.year;
  const stack = formatTechList(project.techs);

  return (
    <>
      {/* Mobile: thumb first (order-1). Desktop: last column (order-5). */}
      <div className="relative order-1 aspect-[16/10] w-full overflow-hidden rounded-[4px] bg-muted md:order-5 md:aspect-auto md:h-[75px] md:w-[120px] md:justify-self-end">
        <ProjectThumb project={project} name={name} />
      </div>

      <div className="order-2 mt-4 flex items-baseline gap-3 md:mt-0 md:contents">
        {year ? (
          <span className="shrink-0 font-mono text-xs tracking-wide text-muted-foreground md:text-sm">
            {year}
          </span>
        ) : (
          <span className="hidden md:block" aria-hidden />
        )}

        <h3
          className="min-w-0 text-base font-medium text-foreground transition-colors duration-(--duration-fast) group-hover:text-secondary group-hover:underline group-hover:underline-offset-4 group-focus-visible:text-secondary group-focus-visible:underline group-focus-visible:underline-offset-4 md:text-[15px]"
          style={{ fontFamily: "var(--font-body), system-ui, sans-serif" }}
        >
          {name}
          <span
            aria-hidden
            className="ml-1.5 inline-block translate-y-px text-secondary opacity-0 transition-opacity duration-(--duration-fast) group-hover:opacity-100 group-focus-visible:opacity-100 motion-reduce:transition-none"
          >
            ↗
          </span>
        </h3>
      </div>

      <p className="order-3 mt-2 line-clamp-2 text-sm leading-relaxed text-muted-foreground md:mt-0">
        {desc}
      </p>

      <p className="order-4 mt-2 text-xs leading-relaxed text-muted-foreground md:mt-0 md:text-[13px]">
        {stack}
      </p>
    </>
  );
}

const rowClassName =
  "project-row group flex w-full flex-col border-b border-border py-5 text-left transition-[border-color] duration-(--duration-fast) ease-(--ease-smooth-out) hover:border-primary focus-visible:border-primary focus-visible:outline-none motion-reduce:transition-none md:grid md:grid-cols-[5.5rem_minmax(9rem,1.15fr)_minmax(11rem,1.4fr)_minmax(7rem,0.95fr)_7.5rem] md:items-center md:gap-x-6 md:py-4";

function ProjectRow({ project, onOpenGallery }) {
  const t = useTranslations("projects");
  const name = t(`items.${project.id}.name`);
  const desc = t(`items.${project.id}.desc`);

  const content = (
    <ProjectRowContent project={project} name={name} desc={desc} />
  );

  if (project.mode === "gallery") {
    return (
      <button
        type="button"
        onClick={() => onOpenGallery(project)}
        aria-label={`${t("openGallery")}: ${name}`}
        className={rowClassName}
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
      className={rowClassName}
    >
      {content}
    </a>
  );
}

export default function Projects() {
  const t = useTranslations("projects");
  const scope = useRef(null);
  const listRef = useRef(null);
  const [galleryProject, setGalleryProject] = useState(null);
  const [filter, setFilter] = useState("all");

  const visibleProjects =
    filter === "all"
      ? otherProjects
      : otherProjects.filter((project) => project.tags?.includes(filter));

  function applyFilter(next) {
    if (next === filter) return;

    if (prefersReducedMotion() || !listRef.current) {
      setFilter(next);
      return;
    }

    const shells = gsap.utils.toArray(".project-row-shell", listRef.current);
    const state = Flip.getState(shells);

    flushSync(() => {
      setFilter(next);
    });

    Flip.from(state, {
      targets: ".project-row-shell",
      duration: motion.medium,
      ease: motion.easeSmoothOut,
      absolute: true,
      stagger: motion.stagger,
      nested: true,
      onEnter: (elements) =>
        gsap.fromTo(
          elements,
          { opacity: 0 },
          { opacity: 1, duration: motion.fast },
        ),
      onLeave: (elements) =>
        gsap.to(elements, { opacity: 0, duration: motion.quick }),
    });
  }

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      addMotionMatch(mm, {
        reduced: () => {
          fadeInReduced(gsap, ".project-row-shell", {
            scrollTrigger: {
              trigger: scope.current,
              start: "top 80%",
              once: true,
            },
          });
        },
        full: () => {
          const shells = gsap.utils.toArray(".project-row-shell", scope.current);
          if (!shells.length) return;

          gsap.fromTo(
            shells,
            { opacity: 0, y: motion.distanceMedium },
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
        <SectionHeading index="02">{t("title")}</SectionHeading>

        <div
          className="t-tabs mt-10 flex w-fit max-w-full flex-wrap items-center gap-x-5 gap-y-2"
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
                className={`border-b-2 pb-1 text-sm font-medium transition-[color,border-color] duration-(--duration-fast) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring motion-reduce:transition-none ${
                  active
                    ? "border-primary text-foreground"
                    : "border-transparent text-muted-foreground hover:text-foreground"
                }`}
              >
                {label}
              </button>
            );
          })}
        </div>

        <div
          ref={listRef}
          className="projects-list mt-8 border-t border-border"
        >
          {visibleProjects.map((project) => (
            <div
              key={project.id}
              className="project-row-shell"
              data-flip-id={project.id}
            >
              <ProjectRow
                project={project}
                onOpenGallery={setGalleryProject}
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
