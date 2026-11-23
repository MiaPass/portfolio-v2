/**
 * Canonical tech labels aligned with the Stack marquee.
 * Cards and Destacados go through normalizeTechName so spellings stay in sync.
 */
export const TECH_DISPLAY_NAMES = {
  react: "React",
  reactjs: "React",
  "react.js": "React",
  "node.js": "Node.js",
  nodejs: "Node.js",
  node: "Node.js",
  "next.js": "Next.js",
  next: "Next.js",
  nextjs: "Next.js",
  "vue.js": "Vue.js",
  vue: "Vue.js",
  vuejs: "Vue.js",
  "nuxt.js": "Nuxt.js",
  nuxt: "Nuxt.js",
  nuxtjs: "Nuxt.js",
  "nuxt 3": "Nuxt.js",
  express: "Express",
  mongodb: "MongoDB",
  postgresql: "PostgreSQL",
  postgres: "PostgreSQL",
  supabase: "Supabase",
  firebase: "Firebase",
  "mercado pago": "Mercado Pago",
  mercadopago: "Mercado Pago",
  tailwindcss: "TailwindCSS",
  "tailwind css": "TailwindCSS",
  tailwind: "TailwindCSS",
  typescript: "TypeScript",
  ts: "TypeScript",
  javascript: "JavaScript",
  js: "JavaScript",
};

export function normalizeTechName(name) {
  const trimmed = String(name ?? "").trim();
  if (!trimmed) return "";
  const key = trimmed.toLowerCase();
  return TECH_DISPLAY_NAMES[key] ?? trimmed;
}

/** Turn a tech string or list into "A, B, C" with canonical names. */
export function formatTechList(techs, { separator = ", " } = {}) {
  const parts = Array.isArray(techs)
    ? techs
    : String(techs ?? "")
        .split(/,\s*/)
        .map((part) => part.trim());

  return parts.map(normalizeTechName).filter(Boolean).join(separator);
}
