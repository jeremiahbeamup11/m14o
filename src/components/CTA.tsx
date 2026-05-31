"use client";

import { Reveal } from "./Reveal";

export function Join() {
  return (
    <section id="join" className="relative overflow-hidden py-32 md:py-44">
      <div className="absolute inset-0 -z-10">
        <div
          className="h-full w-full bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=1920&q=80&auto=format&fit=crop')",
          }}
        />
        <div className="absolute inset-0 bg-black/80" />
      </div>

      <div className="mx-auto max-w-container px-5 text-center md:px-8">
        <Reveal>
          <p className="mb-6 text-sm font-medium uppercase tracking-[0.2em] text-white/60">
            Any Interest In M14O?
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mx-auto max-w-3xl text-4xl font-semibold leading-[1.08] tracking-tight text-white md:text-6xl">
            Lets Create The Future For Cities
          </h2>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/75">
            the next great city won&apos;t be run on guesswork. Lets Get The First City Running On M14O.
          </p>
        </Reveal>
        <Reveal delay={0.18}>
          <a
            href="mailto:founders@m14o.com"
            className="mt-10 inline-block rounded-full bg-white px-8 py-3.5 text-sm font-medium text-black transition-transform hover:-translate-y-0.5"
          >
            Contact
          </a>
        </Reveal>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-surface py-10">
      <div className="mx-auto flex max-w-container flex-col items-center justify-between gap-4 px-5 md:flex-row md:px-8">
        <span className="text-xs text-muted">
          © {new Date().getFullYear()} M14O
        </span>
        <div className="flex items-center gap-6 text-xs text-muted">
          <a href="/privacy-policy" className="transition-colors hover:text-fg">
            Privacy Policy
          </a>
          <a href="/terms-of-service" className="transition-colors hover:text-fg">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
}
