# M14O — the operating system for cities

A modern single-page marketing site inspired by livetheresidency.com. Built with Next.js 15 (App Router), TypeScript, Tailwind CSS, and Framer Motion. Clean, minimal, premium — with light/dark mode and subtle scroll animations.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000

```bash
npm run build && npm start   # production
```

## Project structure

```
src/
  app/
    layout.tsx        Root layout, Inter font, theme provider
    page.tsx          Homepage — assembles all sections
    globals.css       Design tokens (CSS vars) + light/dark themes
  components/
    Navbar.tsx        Sticky nav, theme toggle, CTA
    Hero.tsx          Full-screen hero with city background
    Sections.tsx      Intro · ForCities · Builders
    FAQ.tsx           Accordion FAQ
    CTA.tsx           Join section + Footer
    Reveal.tsx        Reusable scroll-reveal wrapper (Framer Motion)
    ThemeProvider.tsx Light/dark mode context (persists to localStorage)
  data/
    content.ts        Builders + FAQ content — EDIT HERE to customize
```

## Customizing content

- **Builders & FAQ:** edit `src/data/content.ts`.
- **Headlines & copy:** each section lives in its own component under `src/components/`.
- **Background images:** swap the Unsplash URLs in `Hero.tsx`, `Sections.tsx`, and `CTA.tsx`. For a video hero, replace the background `div` with a `<video autoPlay muted loop playsInline>`.
- **Colors / theme:** edit the CSS variables in `src/app/globals.css` (`:root` for light, `.dark` for dark) and `tailwind.config.ts`.
- **CTA link:** update the `Contact` hrefs (currently `mailto:hello@m14o.com`).

## Notes

- Mobile-first and fully responsive.
- Theme respects system preference on first visit, then remembers your choice.
- Builder photos use grayscale → color on hover; swap in real founder photos via `content.ts`.
