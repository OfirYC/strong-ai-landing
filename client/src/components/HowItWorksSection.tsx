/*
 * Strong AI — How It Works Section
 * Light theme with blue accents
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
    color: "#0066FF",
  },
  {
    number: "02",
    icon: Dumbbell,
    title: "Log your workouts",
    description:
      "Pick an exercise, see your last session's numbers as a reference, and log sets inline. Weight and reps update with a tap. The timer runs in the background. When you're done, finish the workout and it's saved. Personal records are detected automatically.",
    color: "#0066FF",
  },
  {
    number: "03",
    icon: Brain,
    title: "Chat with your coach",
    description:
      "Open the coach and ask anything about your training. Under the hood, it runs a tool-calling loop — querying your real database records before responding. Workout history, PRs, templates, schedule, profile. It uses those to ground its answers in facts, then crafts a response.",
    color: "#0052CC",
  },
  {
    number: "04",
    icon: TrendingUp,
    title: "Track your progress",
    description:
      "Your full workout history is always there — scroll back, filter by exercise, see how your numbers have moved over time. Strong AI keeps your data in sync across all devices over WebSocket. Change something on your phone and it appears on your tablet instantly.",
    color: "#0052CC",
  },
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="relative py-24 lg:py-32 bg-white">
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-20"
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-blue-600 mb-3 block">
            How It Works
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black leading-tight">
            From first rep to{" "}
            <span className="text-blue-gradient">peak performance</span>
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="relative max-w-4xl mx-auto">
          {/* Connecting line */}
          <div className="absolute left-[39px] top-12 bottom-12 w-px bg-gradient-to-b from-blue-600/30 via-blue-400/20 to-transparent hidden md:block" />

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
                      background: `${step.color}15`,
                      borderColor: `${step.color}30`,
                    }}
                  >
                    <step.icon className="w-5 h-5" style={{ color: step.color }} />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 bg-gray-50 rounded-2xl p-6 md:p-8 hover:border-blue-300 transition-all duration-300 border border-gray-200">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div className="flex items-center gap-3">
                      <span
                        className="text-xs font-mono font-bold"
                        style={{ color: step.color, opacity: 0.7 }}
                      >
                        {step.number}
                      </span>
                      <h3 className="text-lg font-bold text-black">
                        {step.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
