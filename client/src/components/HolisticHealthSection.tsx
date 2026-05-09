/*
 * Strong AI — Holistic Health Section
 * Highlights integration of training, recovery, and nutrition data
 */

import { motion } from "framer-motion";
import { Heart, Apple, Zap, Brain } from "lucide-react";

const integrations = [
  {
    icon: Heart,
    title: "Recovery Metrics",
    description: "Garmin integration pulls HRV, sleep quality, and recovery scores. Strong AI uses this to adjust your training intensity and warn you when you're under-recovered.",
    color: "#FF3B30",
    highlight: "HRV + Sleep = Smarter Training",
  },
  {
    icon: Apple,
    title: "Nutrition Tracking",
    description: "Log meals with AI-powered scanning and analysis. Strong AI correlates your nutrition with performance and recovery to optimize your diet for *your* goals.",
    color: "#34C759",
    highlight: "Food + Performance = Data-Driven Nutrition",
  },
  {
    icon: Zap,
    title: "Workout Context",
    description: "Every recommendation considers your complete picture: current workload, sleep, nutrition, stress, and injury history. No generic advice.",
    color: "#0066FF",
    highlight: "Full Context = Better Coaching",
  },
  {
    icon: Brain,
    title: "Memory & Learning",
    description: "Strong AI builds a memory of what works for you. Over time, it gets smarter about predicting what will help you reach your goals without getting injured.",
    color: "#9945FF",
    highlight: "AI That Knows You",
  },
];

export default function HolisticHealthSection() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-white">
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-20 max-w-2xl mx-auto"
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-blue-600 mb-3 block">
            Complete Picture
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black leading-tight">
            One app. All your data.
          </h2>
          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            Training alone doesn't tell the whole story. Strong AI integrates your workouts, recovery metrics, nutrition, and daily check-ins into one unified coaching system.
          </p>
        </motion.div>

        {/* Integration cards grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {integrations.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
              className="relative group overflow-hidden rounded-2xl p-8 border border-gray-200 hover:border-blue-300 transition-all duration-300 bg-gradient-to-br from-white to-gray-50"
            >
              {/* Icon */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300"
                style={{ background: `${item.color}15` }}
              >
                <item.icon className="w-6 h-6" style={{ color: item.color }} />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-black mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-5 text-sm">
                {item.description}
              </p>

              {/* Highlight badge */}
              <div
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold"
                style={{
                  background: `${item.color}12`,
                  color: item.color,
                  border: `1px solid ${item.color}25`,
                }}
              >
                <Zap className="w-3 h-3" />
                {item.highlight}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-600 text-base leading-relaxed max-w-2xl mx-auto">
            The more data Strong AI has, the smarter it becomes. Every workout, every sleep night, every meal — it's all connected. That's how you get truly personalized coaching.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
