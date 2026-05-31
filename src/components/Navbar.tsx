"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "What is M14O?", href: "#intro" },
  { label: "Who Is it For?", href: "#for" },
  { label: "Our Founders", href: "#builders" },
  { label: "FAQ", href: "#faq" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div
        className={`mx-auto flex max-w-container items-center justify-between px-5 transition-all duration-300 md:px-8 ${
          scrolled || mobileOpen ? "py-3" : "py-5"
        }`}
        style={{
          backgroundColor: scrolled || mobileOpen ? "var(--bg)" : "transparent",
          borderBottom: scrolled || mobileOpen ? "1px solid var(--line)" : "1px solid transparent",
        }}
      >
        <a href="#top" className="flex items-center gap-2">
          <span className="text-lg font-semibold tracking-tight">M14O</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted transition-colors hover:text-fg"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#join"
            className="rounded-full bg-[var(--fg)] px-5 py-2 text-sm font-medium text-[var(--bg)] transition-opacity hover:opacity-85"
          >
            Contact
          </a>
          <button
            onClick={() => setMobileOpen((o) => !o)}
            className="flex h-9 w-9 items-center justify-center rounded-md md:hidden"
            aria-label="Toggle menu"
          >
            <motion.div className="flex flex-col gap-[5px]">
              <motion.span
                animate={mobileOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                className="block h-[2px] w-5 bg-[var(--fg)]"
              />
              <motion.span
                animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
                className="block h-[2px] w-5 bg-[var(--fg)]"
              />
              <motion.span
                animate={mobileOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                className="block h-[2px] w-5 bg-[var(--fg)]"
              />
            </motion.div>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-b border-line md:hidden"
            style={{ backgroundColor: "var(--bg)" }}
          >
            <div className="mx-auto flex max-w-container flex-col gap-4 px-5 pb-6 pt-2">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-base text-muted transition-colors hover:text-fg"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
