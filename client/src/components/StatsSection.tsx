/*
 * Strong AI — Stats & Social Proof Section
 * Design: Dark surface cards, ember/electric accents, animated numbers
 * Horizontal divider with subtle glow
 */

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

function AnimatedNumber({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    const duration = 2000;
    const startTime = performance.now();
    const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);
    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOut(progress);
      setCount(Math.round(easedProgress * target));
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    const raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [isInView, target]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

const stats = [
  { value: 13, suffix: "", label: "Exercise Types", description: "Barbell to mobility, every movement covered" },
  { value: 6, suffix: "×", label: "AI Tool Rounds", description: "Rounds of tool-calling before each response" },
  { value: 100, suffix: "%", label: "Data-Grounded", description: "Every AI answer backed by your real data" },
  { value: 3, suffix: "", label: "Platforms", description: "iOS, Android, and Web from one codebase" },
];

const testimonials = [
  {
    quote: "Finally an app that doesn't just save numbers — it actually understands my training. Asked it to build me a peaking block and it nailed the percentages based on my actual PRs.",
    name: "Marcus T.",
    role: "Powerlifter, 5 years",
    accent: "#FF6B35",
  },
  {
    quote: "The AI coach caught that I was under-recovering before I did. It noticed my volume had spiked 40% over three weeks and suggested a deload. That's the kind of insight a real coach gives you.",
    name: "Sarah K.",
    role: "Competitive CrossFitter",
    accent: "#4F8EF7",
  },
  {
    quote: "I've tried every tracker. Strong AI is the first one where logging a set actually takes less time than the rest between sets. And the AI is genuinely useful, not just a gimmick.",
    name: "James R.",
    role: "Strength & Conditioning Coach",
    accent: "#FF6B35",
  },
];

export default function StatsSection() {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-[#0D0D14]" />

      <div className="container relative z-10">
        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/[0.05] rounded-2xl overflow-hidden mb-20">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-[#0D0D14] px-6 py-8 text-center"
            >
              <div
                className="text-4xl md:text-5xl font-extrabold mb-2 text-white"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                <AnimatedNumber target={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-sm font-semibold text-white/70 mb-1">{stat.label}</div>
              <div className="text-xs text-white/35 leading-snug">{stat.description}</div>
            </motion.div>
          ))}
        </div>

        {/* Separator */}
        <div className="separator-glow mb-20" />

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2
            className="text-3xl sm:text-4xl font-extrabold text-white"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            What athletes are saying
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: "easeOut" }}
              className="glass-card rounded-2xl p-6 flex flex-col gap-4 hover:border-white/10 transition-all duration-300"
            >
              {/* Quote mark */}
              <div
                className="text-4xl font-serif leading-none"
                style={{ color: t.accent, opacity: 0.5 }}
              >
                "
              </div>
              <p className="text-sm text-white/65 leading-relaxed flex-1 -mt-4">
                {t.quote}
              </p>
              <div className="flex items-center gap-3 pt-2 border-t border-white/[0.06]">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white"
                  style={{ background: `${t.accent}30`, border: `1px solid ${t.accent}40` }}
                >
                  {t.name[0]}
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">{t.name}</div>
                  <div className="text-xs text-white/40">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
