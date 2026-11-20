import { getTranslations, setRequestLocale } from "next-intl/server";
import Hero from "@/components/sections/Hero";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import Projects from "@/components/sections/Projects";
import ContactActions from "@/components/sections/ContactActions";
import Reveal from "@/components/motion/Reveal";
import { techs, experienceIds } from "@/data/projects";
import { getAge } from "@/data/profile";

export default async function HomePage({ params }) {
  const { locale } = await params;
  setRequestLocale(locale);

  const tAbout = await getTranslations("about");
  const tTech = await getTranslations("tech");
  const tExp = await getTranslations("experience");
  const tContact = await getTranslations("contact");

  const frontendSkills = tAbout.raw("frontendSkills");
  const backendSkills = tAbout.raw("backendSkills");

  return (
    <>
      <Hero />

      <FeaturedProjects />

      <Projects />

      <section id="about-me" className="bg-background py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              {tAbout("title")}
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              {tAbout("p1Before")}{" "}
              <span className="font-semibold text-primary">Mia</span>
              {tAbout("p1After", { age: getAge() })}
            </p>
            <p className="mt-4 text-lg leading-8 text-muted-foreground">
              {tAbout("p2")}
            </p>
          </Reveal>
          <Reveal
            className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2"
            selector=".about-card"
            stagger={0.12}
          >
            <div className="about-card rounded-(--radius) bg-card p-8 ring-1 ring-border">
              <h3 className="border-b-2 border-primary pb-2 font-display text-xl font-semibold text-foreground">
                {tAbout("frontend")}
              </h3>
              <ul className="mt-6 space-y-3">
                {frontendSkills.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-start gap-3 text-muted-foreground"
                  >
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
            <div className="about-card rounded-(--radius) bg-card p-8 ring-1 ring-border">
              <h3 className="border-b-2 border-primary pb-2 font-display text-xl font-semibold text-foreground">
                {tAbout("backend")}
              </h3>
              <ul className="mt-6 space-y-3">
                {backendSkills.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-start gap-3 text-muted-foreground"
                  >
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="technologies" className="bg-background py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal className="text-center">
            <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              {tTech("title")}
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              {tTech("subtitle")}
            </p>
          </Reveal>
          <Reveal
            className="mt-12 grid grid-cols-3 gap-8 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9"
            selector=".tech-item"
            stagger={0.04}
            y={20}
          >
            {techs.map((tech) => (
              <a
                key={tech.name}
                href={tech.path}
                target="_blank"
                rel="noopener noreferrer"
                className="tech-item group flex flex-col items-center gap-2"
              >
                <img
                  src={tech.logo}
                  alt={tech.name}
                  className="h-12 w-12 object-contain transition duration-(--duration-fast) group-hover:scale-110 md:h-16 md:w-16"
                />
                <span className="text-center text-xs font-medium text-muted-foreground group-hover:text-foreground">
                  {tech.name}
                </span>
              </a>
            ))}
          </Reveal>
        </div>
      </section>

      <section id="experience" className="bg-background py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal className="text-center">
            <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              {tExp("title")}
            </h2>
          </Reveal>
          <Reveal
            className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2"
            selector=".exp-card"
            stagger={0.12}
          >
            {experienceIds.map((exp) => (
              <a
                key={exp.id}
                href={exp.href}
                target={exp.external ? "_blank" : undefined}
                rel={exp.external ? "noopener noreferrer" : undefined}
                className="exp-card group block rounded-(--radius) border border-border bg-card p-8 text-foreground shadow-lg transition duration-(--duration-fast) hover:border-primary hover:shadow-primary/10"
              >
                <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
                  <h3 className="font-display text-2xl font-semibold">
                    {tExp(`items.${exp.id}.title`)}
                  </h3>
                  <span className="font-mono text-xs text-muted-foreground">
                    {tExp(`items.${exp.id}.date`)}
                  </span>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {tExp(`items.${exp.id}.desc`)}
                </p>
                <p className="mt-4 text-sm font-semibold text-primary">
                  {tExp(`items.${exp.id}.techs`)}
                </p>
              </a>
            ))}
          </Reveal>
        </div>
      </section>

      <section id="contact" className="bg-background py-24 text-center">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              {tContact("title")}
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              {tContact("subtitle")}
            </p>
            <ContactActions />
          </Reveal>
        </div>
      </section>
    </>
  );
}
