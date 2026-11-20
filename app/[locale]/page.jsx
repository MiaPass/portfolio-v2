import { getTranslations, setRequestLocale } from "next-intl/server";
import Hero from "@/components/sections/Hero";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import Projects from "@/components/sections/Projects";
import About from "@/components/sections/About";
import ExperienceTimeline from "@/components/sections/ExperienceTimeline";
import StackMarquee from "@/components/sections/StackMarquee";
import ContactActions from "@/components/sections/ContactActions";
import Reveal from "@/components/motion/Reveal";

export default async function HomePage({ params }) {
  const { locale } = await params;
  setRequestLocale(locale);

  const tContact = await getTranslations("contact");

  return (
    <>
      <Hero />
      <FeaturedProjects />
      <Projects />
      <About />
      <ExperienceTimeline />
      <StackMarquee />

      <section id="contact" className="scroll-mt-20 bg-background py-24 text-center">
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
