/** Demo URL for Pulso — change here to update Hero CTA and featured case. */
export const pulsoDemoUrl = "https://web-steel-five-33.vercel.app";

/** Work-type filters for "Otros proyectos" (not tech). */
export const projectFilterTypes = ["webapp", "dashboard", "website"];

export const projects = [
  {
    id: "reapersquad-accounts",
    featured: true,
    year: 2025,
    kind: "work",
    type: "dashboard",
    techs: "Next.js, React, TailwindCSS, Zustand, Docker, Coolify",
    mode: "link",
    href: "https://accounts.reapersquad.online/",
    demoUrl: "https://accounts.reapersquad.online/",
    external: true,
    media: { type: "image", src: "/projects/reapersquad-accounts/cover.png" },
  },
  {
    id: "pulso",
    featured: true,
    year: 2026,
    kind: "personal",
    type: "webapp",
    techs:
      "Nuxt.js, Pinia, Dexie, NestJS, Prisma, PostgreSQL, PWA, pnpm monorepo",
    mode: "link",
    href: pulsoDemoUrl,
    demoUrl: pulsoDemoUrl,
    external: true,
    media: { type: "image", src: "/projects/pulso/image3.jpg" },
    gallery: [
      "/projects/pulso/image.jpg",
      "/projects/pulso/image2.jpg",
      "/projects/pulso/image3.jpg",
    ],
  },
  {
    id: "dashboard-landing",
    featured: true,
    year: 2025,
    kind: "demo",
    type: "website",
    techs: "Next.js, TailwindCSS, HeroUI, Framer Motion, Zustand, Vercel",
    mode: "link",
    href: "https://dashboard-landing-demo.vercel.app/",
    demoUrl: "https://dashboard-landing-demo.vercel.app/",
    external: true,
    media: { type: "image", src: "/projects/dashboard-demo/image.png" },
  },
  // Other projects (sorted newest → oldest via otherProjects)
  {
    id: "construction-site",
    year: 2026,
    type: "website",
    techs: "Next.js, TailwindCSS, Headless UI, Heroicons, Vercel",
    mode: "link",
    href: "https://construction-site-liard.vercel.app/",
    external: true,
    media: { type: "image", src: "/projects/construction-site/image.png" },
  },
  {
    id: "reapersquad",
    year: 2026,
    type: "website",
    techs: "Next.js, React, TailwindCSS, Docker, Coolify",
    mode: "link",
    href: "https://www.reapersquad.online/en",
    external: true,
    media: { type: "image", src: "/projects/reapersquad/cover.png" },
  },
  {
    id: "next-experience",
    year: 2025,
    yearLabel: "2021–2022 · 2024–2025",
    type: "webapp",
    techs: "Next.js, React, TailwindCSS, Supabase",
    mode: "static",
    media: { type: "placeholder" },
  },
  {
    id: "liquidacion",
    year: 2025,
    yearLabel: "2024–2025",
    client: "DigiChanges",
    type: "dashboard",
    techs: "React, Next.js, TailwindCSS",
    mode: "gallery",
    media: { type: "image", src: "/projects/liquidacion/cover.png" },
    gallery: [
      "/projects/liquidacion/cover.png",
      "/projects/liquidacion/1.png",
      "/projects/liquidacion/2.png",
      "/projects/liquidacion/3.png",
    ],
  },
  {
    id: "x28",
    year: 2025,
    yearLabel: "2024–2025",
    client: "DigiChanges",
    type: "webapp",
    techs: "Vue.js, Nuxt.js",
    mode: "link",
    href: "https://x-28.com/",
    external: true,
    media: { type: "image", src: "/projects/x28/cover.png" },
  },
  {
    id: "tour-landing",
    year: 2023,
    type: "website",
    techs: "HTML, CSS, JavaScript, Webpack, Netlify",
    mode: "link",
    href: "https://tour-landing-page.netlify.app/",
    external: true,
    media: { type: "image", src: "/projects/tour-site/image.png" },
  },
  {
    id: "infinity",
    year: 2022,
    type: "website",
    techs: "React, Redux, CSS, Swiper",
    mode: "link",
    href: "#projects",
    media: { type: "video", src: "/projects/infinity/infinity.mp4" },
  },
  {
    id: "l2-rossek",
    year: 2022,
    type: "website",
    techs: "HTML, CSS",
    mode: "link",
    href: "https://l2rossek.com/donate/index.html",
    external: true,
    media: { type: "video", src: "/projects/L2Rossek/l2rossek.mp4" },
  },
  {
    id: "share-it",
    year: 2021,
    type: "webapp",
    techs: "React, Node.js, Mercado Pago, Firebase",
    mode: "link",
    href: "https://github.com/henry19ag15/finalproject",
    external: true,
    media: { type: "image", src: "/projects/share-it/1.png" },
  },
];

export const featuredProjects = projects.filter((project) => project.featured);

export const otherProjects = projects
  .filter((project) => !project.featured)
  .slice()
  .sort((a, b) => (b.year ?? 0) - (a.year ?? 0));

export const techs = [
  {
    name: "React",
    logo: "/svg/react.svg",
    path: "https://reactjs.org/",
    group: "frontend",
  },
  {
    name: "Next.js",
    logo: "/svg/nextjs.svg",
    path: "https://nextjs.org/",
    group: "frontend",
  },
  {
    name: "Vue.js",
    logo: "/svg/vuejs.svg",
    path: "https://vuejs.org/",
    group: "frontend",
  },
  {
    name: "Nuxt.js",
    logo: "/svg/nuxtjs.svg",
    path: "https://nuxtjs.org/",
    group: "frontend",
  },
  {
    name: "TypeScript",
    logo: "/svg/typescript.svg",
    path: "https://www.typescriptlang.org/",
    group: "frontend",
  },
  {
    name: "JavaScript",
    logo: "/svg/javascript.svg",
    path: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    group: "frontend",
  },
  {
    name: "TailwindCSS",
    logo: "/svg/tailwindcss.svg",
    path: "https://tailwindcss.com/",
    group: "frontend",
  },
  {
    name: "Redux",
    logo: "/svg/redux.svg",
    path: "https://redux.js.org/",
    group: "frontend",
  },
  {
    name: "Dexie",
    logo: "/svg/dexie.svg",
    path: "https://dexie.org/",
    group: "frontend",
  },
  {
    name: "Node.js",
    logo: "/svg/nodejs.svg",
    path: "https://nodejs.org/",
    group: "backend",
  },
  {
    name: "Express",
    logo: "/svg/express.svg",
    path: "https://expressjs.com/",
    group: "backend",
  },
  {
    name: "Prisma",
    logo: "/svg/prisma.svg",
    path: "https://www.prisma.io/",
    group: "backend",
  },
  {
    name: "PostgreSQL",
    logo: "/svg/postgresql.svg",
    path: "https://www.postgresql.org/",
    group: "backend",
  },
  {
    name: "MongoDB",
    logo: "/svg/mongodb.svg",
    path: "https://www.mongodb.com/",
    group: "backend",
  },
  {
    name: "Supabase",
    logo: "/svg/supabase.svg",
    path: "https://supabase.com/",
    group: "backend",
  },
  {
    name: "Git",
    logo: "/svg/git.svg",
    path: "https://git-scm.com/",
    group: "tools",
  },
  {
    name: "Firebase",
    logo: "/svg/firebase.svg",
    path: "https://firebase.google.com/",
    group: "tools",
  },
  {
    name: "Astro",
    logo: "/svg/astro.svg",
    path: "https://astro.build/",
    group: "tools",
  },
];

export const techGroups = [
  {
    id: "frontend",
    items: techs.filter((tech) => tech.group === "frontend"),
  },
  {
    id: "backend",
    items: techs.filter((tech) => tech.group === "backend"),
  },
  {
    id: "tools",
    items: techs.filter((tech) => tech.group === "tools"),
  },
];

export const experienceIds = [
  {
    id: "reapersquad",
    href: "https://www.reapersquad.online/en",
    external: true,
    current: true,
    start: "2025-01",
    end: null,
  },
  {
    id: "digichanges",
    href: "https://digichanges.com/es/",
    external: true,
    start: "2024-08",
    end: "2025-05",
  },
  {
    id: "freelancer",
    href: "#projects",
    start: "2022-01",
    end: "2026-08",
  },
];
