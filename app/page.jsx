import BaseLayout from "@/components/layout/BaseLayout";

const techs = [
  { name: "Git", logo: "/svg/git.svg", path: "https://git-scm.com/" },
  { name: "Node.js", logo: "/svg/nodejs.svg", path: "https://nodejs.org/" },
  {
    name: "JavaScript",
    logo: "/svg/javascript.svg",
    path: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    name: "TypeScript",
    logo: "/svg/typescript.svg",
    path: "https://www.typescriptlang.org/",
  },
  { name: "Redux", logo: "/svg/redux.svg", path: "https://redux.js.org/" },
  {
    name: "Firebase",
    logo: "/svg/firebase.svg",
    path: "https://firebase.google.com/",
  },
  {
    name: "CSS",
    logo: "/svg/css.svg",
    path: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    name: "TailwindCSS",
    logo: "/svg/tailwindcss.svg",
    path: "https://tailwindcss.com/",
  },
  {
    name: "HTML",
    logo: "/svg/html.svg",
    path: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  { name: "React", logo: "/svg/react.svg", path: "https://reactjs.org/" },
  { name: "Next.js", logo: "/svg/nextjs.svg", path: "https://nextjs.org/" },
  { name: "Vue.js", logo: "/svg/vuejs.svg", path: "https://vuejs.org/" },
  { name: "Nuxt.js", logo: "/svg/nuxtjs.svg", path: "https://nuxtjs.org/" },
  { name: "Solid.js", logo: "/svg/solidjs.svg", path: "https://solidjs.com/" },
  { name: "Astro", logo: "/svg/astro.svg", path: "https://astro.build/" },
  { name: "Express", logo: "/svg/express.svg", path: "https://expressjs.com/" },
  {
    name: "MongoDB",
    logo: "/svg/mongodb.svg",
    path: "https://www.mongodb.com/",
  },
  {
    name: "PostgreSQL",
    logo: "/svg/postgresql.svg",
    path: "https://www.postgresql.org/",
  },
];

const frontendSkills = [
  "Realizo sitios responsive con React o Solid.",
  "Utilizo Photoshop, Illustrator, entre otros, para adaptar imágenes y exportar en formatos optimizados.",
  "Domino CSS y SASS, y me adapto a frameworks como Bootstrap y Tailwind.",
  "Administro datos utilizando métodos HTTP con fetch o axios.",
];

const backendSkills = [
  "Creo API REST utilizando el módulo de Express.",
  "Conecto bases de datos relacionales y no relacionales (MySQL, MongoDB...).",
  "Diseño modelos relacionales y no relacionales.",
  "Utilizo módulos de npm.js según necesidades del proyecto.",
];

const experiences = [
  {
    title: "Freelancer",
    date: "Ene 2023 - Presente",
    desc: "Me desempeñé como desarrolladora freelance en diversos proyectos, desde landing pages hasta aplicaciones web interactivas. Algunos de estos proyectos se encuentran en la sección Proyectos.",
    techs: "HTML, CSS, ReactJs, Redux, Swiper, NodeJs, Mercado Pago, Firebase",
    href: "#projects",
  },
  {
    title: "DigiChanges",
    date: "Ago 2024 - May 2025",
    desc: "Trabajé como desarrolladora front end en DigiChanges, colaborando en equipo para implementar funcionalidades completas del lado del cliente, priorizando una experiencia de usuario intuitiva y eficiente.",
    techs:
      "HTML, CSS, Tailwind, NextJs, ReactJs, VueJs, NuxtJs, Astro, SolidJs, NodeJs",
    href: "https://digichanges.com/es/",
    external: true,
  },
];

const projects = [
  {
    name: "Infinity",
    techs: "React, Redux, CSS, Swiper",
    href: "#projects",
    media: { type: "video", src: "/infinity/infinity.mp4" },
    desc: "Proyecto interactivo con carruseles y gestión de estado.",
  },
  {
    name: "Share It",
    techs: "ReactJs, NodeJs, Mercado Pago, Firebase",
    href: "https://github.com/henry19ag15/finalproject",
    external: true,
    media: { type: "image", src: "/share-it/1.png" },
    desc: "Aplicación de compartir contenido con pagos integrados.",
  },
  {
    name: "L2 Rossek",
    techs: "HTML, CSS",
    href: "https://l2rossek.com/donate/index.html",
    external: true,
    media: { type: "video", src: "/L2Rossek/l2rossek.mp4" },
    desc: "Landing page para servidor de juego.",
  },
  {
    name: "Construction Site",
    techs: "Next.js, Tailwind CSS, Headless UI, Heroicons",
    href: "https://construction-site-liard.vercel.app/",
    external: true,
    media: { type: "image", src: "/construction-site/image.png" },
    desc: "Sitio web de construcción con múltiples secciones y páginas.",
  },
  {
    name: "Dashboard Landing",
    techs: "Next.js, Tailwind CSS, HeroUI, Framer Motion, Zustand",
    href: "https://dashboard-landing-demo.vercel.app/",
    external: true,
    media: { type: "image", src: "/dashboard-demo/image.png" },
    desc: "Demo interactiva de un dashboard de gestión de órdenes.",
  },
  {
    name: "Tour Landing Page",
    techs: "HTML, CSS, JavaScript, Webpack",
    href: "https://tour-landing-page.netlify.app/",
    external: true,
    media: { type: "image", src: "/tour-site/image.png" },
    desc: "Landing page de turismo con galería y formulario de contacto.",
  },
];

export default function Home() {
  return (
    <BaseLayout>
      <section
        id="welcome"
        className="relative w-full min-h-screen bg-cover bg-fixed bg-center bg-no-repeat pt-32 lg:pt-40"
        style={{ backgroundImage: "url('/bg.png')" }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 mx-auto flex min-h-[calc(100vh-10rem)] max-w-7xl flex-col items-center justify-center gap-12 px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <div className="text-center md:text-left">
            <h1 className="text-5xl font-extrabold tracking-tight text-zinc-100 sm:text-6xl lg:text-7xl">
              Mia Passalia
            </h1>
            <p className="mt-6 text-xl italic text-zinc-100 sm:text-2xl">
              Desarrollador Fullstack
            </p>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row md:justify-start">
              <a
                href="#about-me"
                className="rounded-md bg-emerald-700 px-6 py-3 text-lg font-semibold text-white shadow hover:bg-emerald-600 transition-colors"
              >
                Conóceme
              </a>
              <a
                href="#projects"
                className="text-lg font-semibold leading-6 text-zinc-100 hover:text-emerald-300 transition-colors"
              >
                Ver proyectos <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
          <div className="w-full max-w-md md:max-w-lg">
            <img
              src="/welcomeImg.png"
              alt="Mia Passalia"
              className="h-auto w-full object-contain drop-shadow-lg"
            />
          </div>
        </div>
      </section>

      <section id="about-me" className="py-24 bg-[#0b0c0d]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
              Sobre mí
            </h2>
            <p className="mt-6 text-lg leading-8 text-zinc-300">
              Mi nombre es{" "}
              <span className="font-semibold text-emerald-500">Mia</span>, tengo
              26 años y soy de Argentina. En 2021 decidí darle un giro a mi vida
              y comenzar a estudiar desarrollo de software.
            </p>
            <p className="mt-4 text-lg leading-8 text-zinc-300">
              Me considero una persona creativa e innovadora, poniendo como
              principal característica la flexibilidad y la iniciativa para
              investigar y adaptarme a las nuevas tecnologías. Estoy en
              constante aprendizaje y evolucionando como desarrolladora en cada
              paso.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="rounded-2xl bg-[#151618] p-8">
              <h3 className="border-b-2 border-cyan-500 pb-2 text-xl font-semibold text-zinc-100">
                En el Front-end
              </h3>
              <ul className="mt-6 space-y-3">
                {frontendSkills.map((skill, i) => (
                  <li key={i} className="flex items-start gap-3 text-zinc-300">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-emerald-500" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl bg-[#151618] p-8">
              <h3 className="border-b-2 border-cyan-500 pb-2 text-xl font-semibold text-zinc-100">
                En el Back-end
              </h3>
              <ul className="mt-6 space-y-3">
                {backendSkills.map((skill, i) => (
                  <li key={i} className="flex items-start gap-3 text-zinc-300">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-emerald-500" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="technologies" className="py-24 bg-[#0b0c0d]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
              Tech Skills
            </h2>
            <p className="mt-4 text-lg text-zinc-400">
              Estas son algunas de las tecnologías a las cuales más dedico
              tiempo
            </p>
          </div>
          <div className="mt-12 grid grid-cols-3 gap-8 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9">
            {techs.map((tech) => (
              <a
                key={tech.name}
                href={tech.path}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-2"
              >
                <img
                  src={tech.logo}
                  alt={tech.name}
                  className="h-12 w-12 object-contain transition group-hover:scale-110 md:h-16 md:w-16"
                />
                <span className="text-center text-xs font-medium text-zinc-300">
                  {tech.name}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="py-24 bg-[#0b0c0d]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
              Mi Experiencia
            </h2>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
            {experiences.map((exp) => (
              <a
                key={exp.title}
                href={exp.href}
                target={exp.external ? "_blank" : undefined}
                rel={exp.external ? "noopener noreferrer" : undefined}
                className="group block rounded-2xl border border-cyan-700 bg-[#151618] p-8 text-white shadow-lg transition hover:scale-[1.01] hover:border-emerald-500"
              >
                <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
                  <h3 className="text-2xl font-semibold">{exp.title}</h3>
                  <span className="text-xs italic text-zinc-400">
                    {exp.date}
                  </span>
                </div>
                <p className="mt-4 text-sm text-zinc-300">{exp.desc}</p>
                <p className="mt-4 text-sm font-semibold text-emerald-400">
                  {exp.techs}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="py-24 bg-[#0b0c0d]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
              Mis Proyectos
            </h2>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <a
                key={project.name}
                href={project.href}
                target={project.external ? "_blank" : undefined}
                rel={project.external ? "noopener noreferrer" : undefined}
                className="group block overflow-hidden rounded-2xl bg-[#151618] shadow-lg ring-1 ring-zinc-800 transition hover:ring-emerald-500 hover:shadow-xl"
              >
                <div className="relative aspect-video w-full bg-gray-900">
                  {project.media ? (
                    project.media.type === "video" ? (
                      <video
                        src={project.media.src}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <img
                        src={project.media.src}
                        alt={project.name}
                        className="h-full w-full object-cover"
                      />
                    )
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900">
                      <span className="text-2xl font-bold text-gray-600">
                        {project.name.charAt(0)}
                      </span>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-zinc-100">
                    {project.name}
                  </h3>
                  <p className="mt-3 text-sm text-zinc-400">{project.desc}</p>
                  <p className="mt-4 text-sm font-semibold text-emerald-500">
                    {project.techs}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 text-center bg-[#0b0c0d]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            ¿Trabajamos juntos?
          </h2>
          <p className="mt-4 text-lg text-zinc-400">
            Podés contactarme por LinkedIn o ver mis proyectos en GitHub.
          </p>
          <div className="mt-10 flex justify-center gap-6">
            <a
              href="https://www.linkedin.com/in/ninamiapassalia/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-emerald-700 px-6 py-3 text-lg font-semibold text-white hover:bg-emerald-600 transition-colors"
            >
              <img
                src="/svg/linkedin.svg"
                alt="LinkedIn"
                className="h-5 w-5 invert"
              />
              LinkedIn
            </a>
            <a
              href="https://www.github.com/MiaPass"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-lg font-semibold leading-6 text-zinc-100 hover:text-emerald-400 transition-colors"
            >
              <img
                src="/svg/github.svg"
                alt="GitHub"
                className="h-5 w-5 invert"
              />
              GitHub <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>
    </BaseLayout>
  );
}
