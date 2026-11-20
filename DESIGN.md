# Design system — Mia Passalia portfolio

## Mode

**Experience** (portfolio) with Persuade CTAs.

## Visual world

Dark **Tangerine**-inspired theme (palette only; no shadcn/ui).

- Night slate-blue surfaces (`oklch` ~262° hue)
- Primary citrus orange `oklch(0.64 0.17 36.44)` / ~`#df5e3a`
- Radius `0.75rem`
- Atmosphere via soft primary glow, not flat black

## Typography

- Display: **Fraunces** (`--font-display`)
- Body: **Plus Jakarta Sans** (`--font-body`)
- Mono: **JetBrains Mono** (`--font-mono`)

## Motion

transitions.dev tokens in `:root` (`--duration-*`, `--ease-*`, `--scale-*`).
GSAP reads seconds via `lib/motion.js`. Modal uses `.t-modal` open/close recipe.
Respect `prefers-reduced-motion`.

## i18n

`next-intl` with `es` (default) and `en`. Routes `/es`, `/en`.
