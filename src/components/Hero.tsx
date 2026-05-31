"use client";

import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      {/* Background aerial city video with dark wash */}
      <div className="absolute inset-0 -z-10">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover"
        >
          <source
            src="https://videos.pexels.com/video-files/11016337/11016337-uhd_2560_1440_30fps.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
      </div>

      <div className="mx-auto w-full max-w-container px-5 pt-28 md:px-8">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          className="mb-6 text-sm font-medium uppercase tracking-[0.2em] text-white/70"
        >
          M14O | AI infrastructure intelligence
        </motion.p>

        <h1 className="max-w-4xl text-[2.75rem] font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl">
          <motion.span
            className="block"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease }}
          >
            AI Infrastructure Intelligence for Small Cities
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease }}
          className="mt-7 max-w-xl text-lg leading-relaxed text-white/80"
        >
          Upload your municipal data. Get consultant-grade analysis in 60 seconds. Infrastructure risks, sustainability opportunities, redevelopment blueprints, and funding recommendations. What costs $50,000 from a consulting firm, we deliver for a fraction of the price.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65, ease }}
          className="mt-10 flex flex-wrap items-center gap-3"
        >
          <a
            href="mailto:founders@m14o.com"
            className="rounded-full bg-white px-7 py-3 text-sm font-medium text-black transition-transform hover:-translate-y-0.5"
          >
            Request a Free Pilot Analysis
          </a>
          <a
            href="#intro"
            className="rounded-full border border-white/30 px-7 py-3 text-sm font-medium text-white transition-colors hover:bg-white/10"
          >
            See How It Works
          </a>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="text-xl"
        >
          ↓
        </motion.div>
      </motion.div>
    </section>
  );
}
