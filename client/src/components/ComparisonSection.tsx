/*
 * Strong AI — Comparison Section
 * Outcome-driven: What you get vs what generic trackers offer
 */

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const comparisons = [
  { feature: "Logs your workouts", others: true, strongAI: true },
  { feature: "Shows your history", others: true, strongAI: true },
  { feature: "Tracks PRs", others: "partial", strongAI: true },
  { feature: "Identifies injury triggers", others: false, strongAI: true },
  { feature: "Daily AI check-ins on your health", others: false, strongAI: true },
  { feature: "Predicts injuries before they happen", others: false, strongAI: true },
  { feature: "Integrates Garmin recovery data", others: false, strongAI: true },
  { feature: "Tracks nutrition & correlates with performance", others: false, strongAI: true },
  { feature: "AI learns what works specifically for you", others: false, strongAI: true },
  { feature: "Adapts coaching based on your unique patterns", others: false, strongAI: true },
];

type FeatureValue = boolean | "partial";

function FeatureIcon({ value, isStrongAI }: { value: FeatureValue; isStrongAI?: boolean }) {
  if (value === true) {
    return (
      <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
        isStrongAI ? "bg-blue-100" : "bg-gray-100"
      }`}>
        <Check className={`w-3.5 h-3.5 ${isStrongAI ? "text-blue-600" : "text-gray-400"}`} />
      </div>
    );
  }
  if (value === "partial") {
    return (
      <div className="w-6 h-6 rounded-full flex items-center justify-center bg-gray-100">
        <div className="w-2 h-2 rounded-full bg-gray-400" />
      </div>
    );
  }
  return (
    <div className="w-6 h-6 rounded-full flex items-center justify-center bg-gray-50">
      <X className="w-3.5 h-3.5 text-gray-300" />
    </div>
  );
}

export default function ComparisonSection() {
  return (
    <section className="relative py-20 lg:py-28 bg-gradient-to-b from-gray-50 via-white to-gray-50 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-10"
          animate={{
            x: [0, -50, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 12, repeat: Infinity }}
          style={{ bottom: "-20%", left: "-10%" }}
        />
      </div>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-gray-500 mb-3 block">
            Why Strong AI Is Different
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-black leading-tight">
            Generic trackers log data.
            <br />
            <span className="text-blue-gradient">Strong AI prevents injury.</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-3xl mx-auto"
        >
          {/* Table header */}
          <div className="grid grid-cols-[1fr_100px_140px] gap-4 px-5 py-3 mb-2">
            <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide">What You Get</div>
            <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide text-center">Generic Apps</div>
            <div className="text-xs font-semibold text-blue-600 uppercase tracking-wide text-center">Strong AI</div>
          </div>

          {/* Table rows */}
          <div className="bg-white rounded-2xl overflow-hidden divide-y divide-gray-200 border border-gray-200 shadow-sm">
            {comparisons.map((row, i) => (
              <motion.div
                key={row.feature}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                whileHover={{ backgroundColor: "rgba(59, 130, 246, 0.03)" }}
                className="group grid grid-cols-[1fr_100px_140px] gap-4 px-5 py-3.5 items-center transition-all duration-300"
              >
                <span className="text-sm text-gray-700 font-medium">{row.feature}</span>
                <div className="flex justify-center">
                  <FeatureIcon value={row.others as FeatureValue} />
                </div>
                <div className="flex justify-center">
                  <FeatureIcon value={row.strongAI as FeatureValue} isStrongAI />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom insight */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 p-5 rounded-xl bg-blue-50 border border-blue-200"
          >
            <p className="text-sm text-gray-700">
              <span className="font-semibold text-black">The difference:</span> Other apps are spreadsheets. Strong AI is a coach that learns from your data to keep you healthy and performing at your best.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
