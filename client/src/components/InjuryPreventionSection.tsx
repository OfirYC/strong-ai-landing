/*
 * Strong AI — Injury Prevention Section
 * Highlights data-driven injury prevention through daily check-ins and pattern detection
 */

import { motion } from "framer-motion";
import { AlertCircle, TrendingUp, Zap, Calendar } from "lucide-react";

const PROGRESS_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663643511140/mYfssEJUacXwGC44k6oMNk/feature-progress-YJHvmD5Qk3xR8nZ2pL9mK4.webp";

const steps = [
  {
    icon: Calendar,
    title: "Daily Check-ins",
    description: "After every workout, Strong AI asks about soreness, pain points, and how you're feeling. It's contextual — it knows your injury history and adapts the questions.",
    color: "#0066FF",
  },
  {
    icon: TrendingUp,
    title: "Pattern Recognition",
    description: "Over weeks and months, the AI identifies correlations. It notices that hiking aggravates your achilles, or that high-volume leg days preceded your knee pain by 3 days.",
    color: "#0066FF",
  },
  {
    icon: Zap,
    title: "Predictive Insights",
    description: "Instead of reacting to injuries, you prevent them. The AI warns you before a pattern repeats and suggests adjustments to your training.",
    color: "#0052CC",
  },
  {
    icon: AlertCircle,
    title: "Personalized Prevention",
    description: "Every athlete is different. What triggers injury in one person might be the key to performance in another. Strong AI learns what works for *you*.",
    color: "#0052CC",
  },
];

export default function InjuryPreventionSection() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-gradient-to-b from-white via-blue-50/30 to-white">
      <div className="container">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 lg:mb-20 max-w-2xl"
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-blue-600 mb-3 block">
            The Intelligence Layer
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black leading-tight">
            Prevent injuries before they happen.
          </h2>
          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            Most apps react to injuries. Strong AI predicts them. By analyzing your daily check-ins, workout data, and recovery metrics, it identifies patterns that lead to injury — then warns you before they happen.
          </p>
        </motion.div>

        {/* Content grid */}
        <div className="grid lg:grid-cols-[1fr_420px] gap-12 lg:gap-16 items-start">
          {/* Left: Steps */}
          <div className="grid sm:grid-cols-2 gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
                className="bg-white rounded-xl p-6 border border-gray-200 hover:border-blue-300 transition-all duration-300"
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                  style={{ background: `${step.color}15` }}
                >
                  <step.icon className="w-5 h-5" style={{ color: step.color }} />
                </div>
                <h3 className="text-base font-bold text-black mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Right: Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col gap-4"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              <img
                src={PROGRESS_IMG}
                alt="Progress tracking and injury prevention analytics"
                className="w-full object-cover aspect-[4/5]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              {/* Overlay insight */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur text-black text-xs font-semibold px-3 py-2 rounded-lg border border-gray-200 shadow-lg">
                <div className="flex items-center gap-2 mb-1">
                  <AlertCircle className="w-3.5 h-3.5 text-blue-600" />
                  Pattern Detected
                </div>
                <div className="text-[11px] text-gray-600">
                  High volume + low sleep = achilles flare. Reduce volume this week.
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
