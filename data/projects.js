/** Demo URL for Pulso — change here to update Hero CTA and featured case. */
export const pulsoDemoUrl = "https://web-steel-five-33.vercel.app";

export const projectFilterTags = ["React", "Vue/Nuxt", "Next", "Landing"];

export const projects = [
  {
    id: "pulso",
    featured: true,
    tags: ["Vue/Nuxt"],
    techs:
      "Nuxt 3, Pinia, Dexie, NestJS, Prisma, PostgreSQL, PWA, pnpm monorepo",
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
    id: "reapersquad-accounts",
    featured: true,
    tags: ["Next", "React"],
    techs: "Next.js, React, Tailwind CSS, Zustand, Docker, Coolify",
    mode: "link",
    href: "https://accounts.reapersquad.online/",
    demoUrl: "https://accounts.reapersquad.online/",
    external: true,
    media: { type: "image", src: "/projects/reapersquad-accounts/cover.png" },
  },
  {
    id: "dashboard-landing",
    featured: true,
    tags: ["Next", "Landing", "React"],
    techs: "Next.js, Tailwind CSS, HeroUI, Framer Motion, Zustand, Vercel",
    mode: "link",
    href: "https://dashboard-landing-demo.vercel.app/",
    demoUrl: "https://dashboard-landing-demo.vercel.app/",
    external: true,
    media: { type: "image", src: "/projects/dashboard-demo/image.png" },
  },
  // Other projects — ReaperSquad site first
  {
    id: "reapersquad",
    tags: ["Next", "Landing"],
    techs: "Next.js, React, Tailwind CSS, Docker, Coolify",
    mode: "link",
    href: "https://www.reapersquad.online/en",
    external: true,
    media: { type: "image", src: "/projects/reapersquad/cover.png" },
  },
  {
    id: "liquidacion",
    tags: ["Next", "React"],
    techs: "React, Next.js, Tailwind CSS",
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
    tags: ["Vue/Nuxt"],
    techs: "Vue.js, Nuxt.js",
    mode: "link",
    href: "https://x-28.com/",
    external: true,
    media: { type: "image", src: "/projects/x28/cover.png" },
  },
  {
    id: "infinity",
    tags: ["React"],
    techs: "React, Redux, CSS, Swiper",
    mode: "link",
    href: "#projects",
    media: { type: "video", src: "/projects/infinity/infinity.mp4" },
  },
  {
    id: "share-it",
    tags: ["React"],
    techs: "ReactJs, NodeJs, Mercado Pago, Firebase",
    mode: "link",
    href: "https://github.com/henry19ag15/finalproject",
    external: true,
    media: { type: "image", src: "/projects/share-it/1.png" },
  },
  {
    id: "l2-rossek",
    tags: ["Landing"],
    techs: "HTML, CSS",
    mode: "link",
    href: "https://l2rossek.com/donate/index.html",
    external: true,
    media: { type: "video", src: "/projects/L2Rossek/l2rossek.mp4" },
  },
  {
    id: "construction-site",
    tags: ["Next", "Landing"],
    techs: "Next.js, Tailwind CSS, Headless UI, Heroicons, Vercel",
    mode: "link",
    href: "https://construction-site-liard.vercel.app/",
    external: true,
    media: { type: "image", src: "/projects/construction-site/image.png" },
  },
  {
    id: "tour-landing",
    tags: ["Landing"],
    techs: "HTML, CSS, JavaScript, Webpack, Netlify",
    mode: "link",
    href: "https://tour-landing-page.netlify.app/",
    external: true,
    media: { type: "image", src: "/projects/tour-site/image.png" },
  },
];

export const featuredProjects = projects.filter((project) => project.featured);

export const otherProjects = projects.filter((project) => !project.featured);

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
    name: "PWA",
    logo: "/svg/pwa.svg",
    path: "https://web.dev/progressive-web-apps/",
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
    name: "Dexie",
    logo: "/svg/dexie.svg",
    path: "https://dexie.org/",
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
    name: "Git",
    logo: "/svg/git.svg",
    path: "https://git-scm.com/",
    group: "tools",
  },
  {
    name: "Redux",
    logo: "/svg/redux.svg",
    path: "https://redux.js.org/",
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
    id: "digichanges",
    href: "https://digichanges.com/es/",
    external: true,
  },
  {
    id: "freelancer",
    href: "#projects",
  },
];
