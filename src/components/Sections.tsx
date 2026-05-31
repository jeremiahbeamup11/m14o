"use client";

import { Reveal } from "./Reveal";
import { builders } from "@/data/content";

export function Intro() {
  return (
    <section id="intro" className="bg-surface py-28 md:py-36">
      <div className="mx-auto max-w-container px-5 md:px-8">
        <Reveal>
          <p className="mb-5 text-sm font-medium uppercase tracking-[0.2em] text-muted">
            what is M14O
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="max-w-3xl text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
            An Operating System that runs cities end to end with minimal human supervision.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {[
            {
              t: "Autonomous Monitoring",
              d: "Fully Autonomous Fleet Consistantly Monitoring City Infrastructure Searching For Inefficiencies Throughout The City.",
              img: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=800&q=80&auto=format&fit=crop",
            },
            {
              t: "A City Nervous System",
              d: "The M14O OS Will Become The Nervous System Of Cities Around The World, Ingesting And Analyzing Data Collected And Already Existing City Data Outputting Sustainable Solutions That Lead To The Succesion Of Fully Sustainble Life In Cities.",
              img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80&auto=format&fit=crop",
            },
            {
              t: "No Jobs Lost",
              d: "Humans Won't Be Fired While Being Replaced By Our System Only Reassigned To Further Help City Growth In Other Areas.",
              img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80&auto=format&fit=crop",
            },
          ].map((c, i) => (
            <Reveal key={c.t} delay={0.1 + i * 0.1}>
              <div className="overflow-hidden rounded-2xl border border-line bg-card">
                <div className="aspect-[16/9] overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={c.img}
                    alt={c.t}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold tracking-tight">{c.t}</h3>
                  <p className="mt-3 leading-relaxed text-muted">{c.d}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ForCities() {
  return (
    <section id="for" className="relative overflow-hidden py-28 md:py-36">
      <div className="absolute inset-0 -z-10">
        <div
          className="h-full w-full bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1444723121867-7a241cacace9?w=1920&q=80&auto=format&fit=crop')",
          }}
        />
        <div className="absolute inset-0 bg-black/75" />
      </div>

      <div className="mx-auto max-w-container px-5 md:px-8">
        <Reveal>
          <p className="mb-5 text-sm font-medium uppercase tracking-[0.2em] text-white/60">
            who this is for
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="max-w-3xl text-3xl font-semibold leading-tight tracking-tight text-white md:text-5xl">
            for cities all across the world.
          </h2>
        </Reveal>
        <div className="mt-12 max-w-2xl space-y-5 text-lg leading-relaxed text-white/80">
          <Reveal delay={0.1}>
            <p>
              Any City Still Struggling With Any Insufficiency Whether It Be Energy, Waste, Water, Finance, Etc M14O Is Made For That City. No City In The World Has Reached Full Sustainability... Yet. Some Have Come Close But At A Very High Cost And After A Very Long Time. M14O Speeds This Process Up And Lowers The Cost For Success.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function Builders() {
  return (
    <section id="builders" className="bg-surface py-28 md:py-36">
      <div className="mx-auto max-w-container px-5 md:px-8">
        <Reveal>
          <p className="mb-5 text-sm font-medium uppercase tracking-[0.2em] text-muted">
            our builders
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="max-w-3xl text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
            the people building the operating system for cities.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {builders.map((b, i) => (
            <Reveal key={b.name} delay={i * 0.08}>
              <article className="group h-full overflow-hidden rounded-2xl border border-line bg-card transition-transform duration-300 hover:-translate-y-1">
                {b.photo && (
                  <div className="aspect-[4/5] overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={b.photo}
                      alt={b.name}
                      className="h-full w-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
                    />
                  </div>
                )}
                <div className="p-5">
                  {"quote" in b && b.quote && (
                    <p className="mb-4 text-sm italic leading-relaxed text-fg">
                      &ldquo;{b.quote}&rdquo;
                    </p>
                  )}
                  {"signature" in b && b.signature ? (
                    <div className="flex items-center gap-2">
                      <span className="text-lg text-muted">–</span>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={b.signature}
                        alt={`${b.name} signature`}
                        className="h-24 w-auto object-contain"
                      />
                    </div>
                  ) : (
                    <h3 className="text-lg font-semibold tracking-tight">
                      {b.name}
                    </h3>
                  )}
                  <p className="mt-1 text-sm font-medium text-muted">{b.role}</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {b.bio}
                  </p>
                  {"twitter" in b && b.twitter && (
                    <a
                      href={b.twitter.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 flex items-center gap-2 text-sm text-muted transition-colors hover:text-fg"
                    >
                      <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622Zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                      <span>@{b.twitter.handle}</span>
                    </a>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
