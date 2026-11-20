"use client";

import { useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { ArrowRight, ArrowUpRight, Images } from "lucide";
import { MorphIcon } from "morphicons/react";
import { projects } from "@/data/projects";
import ProjectGalleryModal from "@/components/ui/ProjectGalleryModal";
import { gsap, useGSAP, ScrollTrigger } from "@/lib/gsap";
import { motion } from "@/lib/motion";

function ProjectMedia({ project, name }) {
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
    <img
      src={project.media.src}
      alt={name}
      className="h-full w-full object-cover"
    />
  );
}

function getProjectActionIcon(isGallery, hovered) {
  if (isGallery) return Images;
  if (hovered) return ArrowUpRight;
  return ArrowRight;
}

function ProjectCardContent({ project, hovered, name, desc }) {
  const isGallery = project.mode === "gallery";
  const actionIcon = getProjectActionIcon(isGallery, hovered);

  return (
    <>
      <div className="relative aspect-video w-full bg-muted">
        <ProjectMedia project={project} name={name} />
        <span className="pointer-events-none absolute right-3 top-3 inline-flex rounded-full bg-background/70 p-2 text-foreground backdrop-blur-sm ring-1 ring-border">
          <MorphIcon
            icon={actionIcon}
            size={16}
            spring="smooth"
            reducedMotion="user"
          />
        </span>
      </div>
      <div className="p-6 text-left">
        <h3 className="font-display text-xl font-semibold text-foreground">
          {name}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          {desc}
        </p>
        <p className="mt-4 text-sm font-semibold text-primary">
          {project.techs}
        </p>
      </div>
    </>
  );
}

const cardClassName =
  "project-card group block w-full overflow-hidden rounded-(--radius) bg-card text-left shadow-lg ring-1 ring-border transition duration-(--duration-fast) ease-(--ease-smooth-out) hover:ring-primary hover:shadow-primary/10";

function ProjectCard({ project, onOpenGallery }) {
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

  if (project.mode === "gallery") {
    return (
      <button
        type="button"
        onClick={() => onOpenGallery(project)}
        aria-label={`${t("openGallery")}: ${name}`}
        {...sharedProps}
      >
        <ProjectCardContent
          project={project}
          hovered={hovered}
          name={name}
          desc={desc}
        />
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
      <ProjectCardContent
        project={project}
        hovered={hovered}
        name={name}
        desc={desc}
      />
    </a>
  );
}

export default function Projects() {
  const t = useTranslations("projects");
  const scope = useRef(null);
  const [galleryProject, setGalleryProject] = useState(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(".project-card", { clearProps: "all" });
      });

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const cards = gsap.utils.toArray(".project-card", scope.current);
        if (!cards.length) return;

        gsap.fromTo(
          cards,
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
      });

      ScrollTrigger.refresh();

      return () => mm.revert();
    },
    { scope },
  );

  return (
    <section ref={scope} id="featured" className="scroll-mt-20 bg-background py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            {t("title")}
          </h2>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenGallery={setGalleryProject}
            />
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
