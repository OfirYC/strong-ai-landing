/*
 * Strong AI — Hero Section
 * Emphasizes data-driven injury prevention and personalized coaching
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
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16 bg-white">
      {/* Background image with light overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{ backgroundImage: `url(${HERO_BG})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 via-white to-white" />

      <div className="container relative z-10 py-20">
        <div className="max-w-3xl">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Badge */}
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase bg-blue-100 text-blue-700 border border-blue-200">
                <Sparkles className="w-3 h-3" />
                AI That Learns Your Body
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[0.95] tracking-tight text-black mb-6"
            >
              Stop getting injured.
              <br />
              <span className="text-blue-gradient">Start optimizing.</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl text-gray-600 max-w-xl leading-relaxed mb-10 font-medium"
            >
              Most trainers can't see patterns. Strong AI does. Every workout, every recovery metric, every check-in gets analyzed to identify what triggers your injuries and what makes you stronger. Your personal data becomes your competitive advantage.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-base px-8 h-14 shadow-lg hover:shadow-xl transition-all duration-200 group"
              >
                Get Early Access
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-gray-300 text-black hover:bg-gray-50 text-base px-8 h-14"
                onClick={() => document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" })}
              >
                See How It Works
              </Button>
            </motion.div>

            {/* Key benefits row */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-8 mt-14 pt-10 border-t border-gray-200"
            >
              {[
                { value: "Daily", label: "AI Check-ins" },
                { value: "Real-time", label: "Injury Detection" },
                { value: "Garmin + Nutrition", label: "Full Context" },
                { value: "100%", label: "Personalized" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-bold text-black">
                    {stat.value}
                  </div>
                  <div className="text-xs text-gray-500 mt-0.5 tracking-wide font-medium">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-gray-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
      >
        <span className="text-xs tracking-widest uppercase font-medium">Scroll</span>
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </motion.div>
    </section>
  );
}
