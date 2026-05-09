/*
 * Strong AI — How It Works Section
 * Design: Numbered steps with connecting lines, alternating ember/electric accents
 * Clean dark surface cards, minimal and focused
 */

import { motion } from "framer-motion";
import { UserCircle, Dumbbell, Brain, TrendingUp } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: UserCircle,
    title: "Set up your profile",
    description:
      "Tell Strong AI about your training background, current goals, any injuries or limitations, and how long you've been lifting. This isn't a form that disappears — the AI reads it every time you chat. A secondary AI pass extracts structured insights: training phase, injury flags, experience level, strengths.",
    accent: "#FF6B35",
    badge: "Onboarding",
  },
  {
    number: "02",
    icon: Dumbbell,
    title: "Log your workouts",
    description:
      "Pick an exercise, see your last session's numbers as a reference, and log sets inline. Weight and reps update with a tap. The timer runs in the background. When you're done, finish the workout and it's saved. Personal records are detected automatically.",
    accent: "#FF6B35",
    badge: "Tracking",
  },
  {
    number: "03",
    icon: Brain,
    title: "Ask your AI coach",
    description:
      "Open the coach and ask anything about your training. Under the hood, it runs a tool-calling loop — querying your real database records before responding. Workout history, PRs, templates, schedule, profile. It uses those to ground its answers in facts, then crafts a response.",
    accent: "#4F8EF7",
    badge: "AI Coaching",
  },
  {
    number: "04",
    icon: TrendingUp,
    title: "Track your progress",
    description:
      "Your full workout history is always there — scroll back, filter by exercise, see how your numbers have moved over time. Strong AI keeps your data in sync across all devices over WebSocket. Change something on your phone and it appears on your tablet instantly.",
    accent: "#4F8EF7",
    badge: "Progress",
  },
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-20"
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-white/40 mb-3 block">
            How It Works
          </span>
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            From first rep to{" "}
            <span className="text-ember-gradient">peak performance</span>
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="relative max-w-4xl mx-auto">
          {/* Connecting line */}
          <div className="absolute left-[39px] top-12 bottom-12 w-px bg-gradient-to-b from-[#FF6B35]/40 via-[#4F8EF7]/40 to-transparent hidden md:block" />

          <div className="space-y-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
                className="flex gap-6 md:gap-8 group"
              >
                {/* Step indicator */}
                <div className="flex-shrink-0 flex flex-col items-center">
                  <div
                    className="w-[52px] h-[52px] rounded-xl flex items-center justify-center border transition-all duration-300 group-hover:scale-105"
                    style={{
                      background: `${step.accent}18`,
                      borderColor: `${step.accent}30`,
                    }}
                  >
                    <step.icon className="w-5 h-5" style={{ color: step.accent }} />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 glass-card rounded-2xl p-6 md:p-8 hover:border-white/10 transition-all duration-300">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div className="flex items-center gap-3">
                      <span
                        className="text-xs font-mono font-bold"
                        style={{ color: step.accent, opacity: 0.7 }}
                      >
                        {step.number}
                      </span>
                      <h3
                        className="text-lg font-bold text-white"
                        style={{ fontFamily: "'Syne', sans-serif" }}
                      >
                        {step.title}
                      </h3>
                    </div>
                    <span
                      className="text-xs font-semibold px-2.5 py-1 rounded-full flex-shrink-0"
                      style={{
                        background: `${step.accent}15`,
                        color: step.accent,
                        border: `1px solid ${step.accent}25`,
                      }}
                    >
                      {step.badge}
                    </span>
                  </div>
                  <p className="text-sm text-white/55 leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
