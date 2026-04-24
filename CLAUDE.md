# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start Vite dev server with HMR
npm run build     # Build production bundle to /dist
npm run preview   # Preview production build locally
```

No linting, testing, or TypeScript tooling is configured.

## Architecture

Single-page React + Vite portfolio. No routing library — navigation is scroll-based with section IDs.

**Data flow:**
- `translations.json` holds all bilingual (EN/HU) content
- `src/data/content.js` detects browser locale and exports the correct language slice
- `src/data/assets.js` resolves image/document paths via `import.meta.url`
- All components receive content as props from `App.jsx`

**Key files:**
- `App.jsx` — top-level orchestrator; owns scroll-spy state, renders all sections and the sidebar
- `src/hooks/useScrollSpy.js` — tracks the active section ID as the user scrolls
- `src/hooks/useRevealSections.js` — IntersectionObserver-based reveal animations
- `src/styles/global.css` — all styling via CSS custom properties; single global stylesheet
- `translations.json` — edit here to change any visible text (both languages)

**Layout:** Fixed `Sidebar` on the left for desktop (collapses below 1100 px); `main.page` contains HeroSection → LicencesSection → ServicesSection → ContactSection → Footer.

## Deployment

Deployed to Vercel. The `dist/` output is git-ignored; Vercel builds from source on push to `main`.
