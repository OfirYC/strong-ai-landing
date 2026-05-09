/*
 * Strong AI — Hero Section
 * Design: Full-viewport hero, dark gym image, large left-aligned headline
 * Ember orange CTA, electric blue secondary badge
 * Text: WHITE on dark background (Low-Key image)
 */

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, ChevronDown } from "lucide-react";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663643511140/mYfssEJUacXwGC44k6oMNk/hero-bg-2eZCHdrXoB3ywVGj4baZg3.webp";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${HERO_BG})` }}
      />
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#111118]/95 via-[#111118]/75 to-[#111118]/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#111118] via-transparent to-[#111118]/50" />

      {/* Ember glow blob */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full bg-[#FF6B35]/8 blur-[120px] pointer-events-none" />

      <div className="container relative z-10 pt-24 pb-20">
        <div className="max-w-3xl">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Badge */}
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase bg-[#4F8EF7]/15 text-[#7BB3FF] border border-[#4F8EF7]/25">
                <Sparkles className="w-3 h-3" />
                AI-Powered Training Partner
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-extrabold leading-[0.95] tracking-tight text-white mb-6"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Train smarter.
              <br />
              <span className="text-ember-gradient">Not just harder.</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl text-white/60 max-w-xl leading-relaxed mb-10 font-light"
            >
              Most workout apps are glorified spreadsheets. Strong AI combines a fast, frictionless tracker with an AI coach that has full context on your training — your history, your PRs, your injuries, your goals.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-[#FF6B35] hover:bg-[#e85c28] text-white font-semibold text-base px-8 h-14 shadow-xl shadow-orange-900/40 hover:shadow-orange-900/60 transition-all duration-200 group"
              >
                Get Early Access
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/20 text-white hover:bg-white/8 bg-transparent text-base px-8 h-14 backdrop-blur-sm"
                onClick={() => document.getElementById("tracker")?.scrollIntoView({ behavior: "smooth" })}
              >
                See How It Works
              </Button>
            </motion.div>

            {/* Stats row */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-8 mt-14 pt-10 border-t border-white/[0.08]"
            >
              {[
                { value: "13", label: "Exercise Types" },
                { value: "6×", label: "AI Tool Rounds" },
                { value: "Real-time", label: "Cross-device Sync" },
                { value: "iOS · Android · Web", label: "Platforms" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div
                    className="text-xl font-bold text-white"
                    style={{ fontFamily: "'Syne', sans-serif" }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-xs text-white/40 mt-0.5 tracking-wide">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
      >
        <span className="text-xs tracking-widest uppercase font-medium">Scroll</span>
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </motion.div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#111118] to-transparent pointer-events-none" />
    </section>
  );
}
