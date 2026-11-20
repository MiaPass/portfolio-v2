import { setRequestLocale } from "next-intl/server";
import Hero from "@/components/sections/Hero";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import Projects from "@/components/sections/Projects";
import About from "@/components/sections/About";
import ExperienceTimeline from "@/components/sections/ExperienceTimeline";
import StackMarquee from "@/components/sections/StackMarquee";
import Contact from "@/components/sections/Contact";

export default async function HomePage({ params }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Hero />
      <FeaturedProjects />
      <Projects />
      <About />
      <ExperienceTimeline />
      <StackMarquee />
      <Contact />
    </>
  );
}
