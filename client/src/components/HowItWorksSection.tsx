/*
 * Strong AI — How It Works Section
 * Outcome-focused: How the system learns and adapts
 */

import { motion } from "framer-motion";
import { UserCircle, Dumbbell, Brain, TrendingUp } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: UserCircle,
    title: "You set up your profile",
    description:
      "Tell Strong AI about your training history, current goals, any injuries, and what you want to achieve. This becomes the foundation for all coaching.",
    color: "#0066FF",
  },
  {
    number: "02",
    icon: Dumbbell,
    title: "You log your workouts",
    description:
      "Fast, frictionless logging. Every set, every PR, every workout gets saved with full context. The data flows in automatically from Garmin and nutrition tracking too.",
    color: "#0066FF",
  },
  {
    number: "03",
    icon: Brain,
    title: "AI learns your patterns",
    description:
      "Daily check-ins ask about soreness, pain, and how you're feeling. Over weeks and months, the AI identifies what triggers your injuries and what makes you stronger.",
    color: "#0052CC",
  },
  {
    number: "04",
    icon: TrendingUp,
    title: "You get smarter coaching",
    description:
      "The AI adapts. It warns you before injury patterns repeat. It suggests progressions based on what's worked for you. It becomes your personal coach.",
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
            The Flywheel
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black leading-tight">
            How Strong AI gets smarter
          </h2>
          <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Every workout, every recovery metric, every check-in feeds the system. The more data you give it, the smarter it becomes.
          </p>
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

        {/* Bottom insight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-600 text-base leading-relaxed max-w-2xl mx-auto">
            This is the flywheel: more data → smarter AI → better coaching → better results → more motivation to log → more data. The longer you use Strong AI, the better it gets at keeping you healthy and performing at your best.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
