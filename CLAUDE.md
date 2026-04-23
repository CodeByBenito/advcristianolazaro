# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm install        # Install dependencies
npm run dev        # Start dev server at http://localhost:3000
npm run build      # Production build (outputs to dist/)
npm run preview    # Preview production build locally
npm run lint       # Type-check with TypeScript (no emit)
npm run clean      # Remove dist/
```

There are no automated tests in this project.

## Environment

Copy `.env.example` to `.env.local` and set:
- `GEMINI_API_KEY` — required for any Gemini AI integration
- `APP_URL` — base URL for the app (used for self-referential links)

## Architecture

Single-page marketing website for criminal defense lawyer Dr. Cristiano Lázaro Fiuza. Built with React 19 + Vite + Tailwind CSS v4. No routing — the entire app is one scrollable page.

**`src/App.tsx`** is the page shell. It renders sections in order: `Navbar → Hero → About → Expertise → Authority → Cases → Differentials → Testimonials → Contact → Footer`, plus two global overlays: `CustomCursor` (desktop-only custom cursor) and `ScrollProgressBar`.

**Section components** (`src/components/`) are self-contained and communicate via anchor links (`#sobre`, `#contato`, etc.) — no shared state or context.

**Animation** uses `motion/react` (Framer Motion). Entrance animations on scroll use `whileInView` with `viewport={{ once: true }}`. Hero animations use `initial`/`animate` directly.

**Design tokens** are defined in `src/index.css` via Tailwind v4's `@theme` block:
- `gold-{200–600}` — primary brand accent (gold tones)
- `dark-{700–900}` — dark backgrounds
- `light-{50–200}` — warm off-white backgrounds
- Fonts: `font-serif` = Playfair Display, `font-sans` = Inter

**`AnimatedCounter`** (`src/components/AnimatedCounter.tsx`) animates numbers on scroll into view — used in the Hero stats row.

**`TiltCard`** and **`RevealText`** are reusable animation primitives used across sections.

The contact form (`Contact.tsx`) is UI-only — the submit button has `type="button"` and no handler. The primary CTA routes to `https://contate.me/profcristianolazaro` (WhatsApp link).

Images are hosted externally on `i.ibb.co` with `referrerPolicy="no-referrer"`.
