"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const links = [
  { label: "What is M14O?", href: "#intro" },
  { label: "Who Is it For?", href: "#for" },
  { label: "Our Founders", href: "#builders" },
  { label: "FAQ", href: "#faq" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

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
          scrolled ? "py-3" : "py-5"
        }`}
        style={{
          backgroundColor: scrolled ? "var(--bg)" : "transparent",
          borderBottom: scrolled ? "1px solid var(--line)" : "1px solid transparent",
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

        <div className="flex items-center gap-2">
          <a
            href="#join"
            className="rounded-full bg-[var(--fg)] px-5 py-2 text-sm font-medium text-[var(--bg)] transition-opacity hover:opacity-85"
          >
            Contact
          </a>
        </div>
      </div>
    </motion.header>
  );
}
