"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Reveal } from "./Reveal";
import { faqs } from "@/data/content";

function Item({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-line">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between gap-6 py-6 text-left"
      >
        <span className="text-lg font-medium tracking-tight md:text-xl">
          {q}
        </span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.25 }}
          className="shrink-0 text-2xl leading-none text-muted"
        >
          +
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="max-w-2xl pb-6 leading-relaxed text-muted">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQ() {
  return (
    <section id="faq" className="bg-surface py-28 md:py-36">
      <div className="mx-auto max-w-container px-5 md:px-8">
        <div className="grid gap-12 md:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <div className="md:sticky md:top-28">
              <p className="mb-5 text-sm font-medium uppercase tracking-[0.2em] text-muted">
                faq
              </p>
              <h2 className="text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
                questions?
              </h2>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div>
              {faqs.map((f) => (
                <Item key={f.q} q={f.q} a={f.a} />
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
