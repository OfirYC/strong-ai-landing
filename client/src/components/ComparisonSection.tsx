/*
 * Strong AI — Comparison Section
 * Light theme with blue accents, clean table design
 */

import { motion } from "framer-motion";
import { Check, X, Minus } from "lucide-react";

const features = [
  { feature: "Workout logging", others: true, strongAI: true },
  { feature: "Exercise history & trends", others: true, strongAI: true },
  { feature: "Personal record detection", others: "partial", strongAI: true },
  { feature: "AI coach with your data", others: false, strongAI: true },
  { feature: "Contextual coaching (injuries, goals)", others: false, strongAI: true },
  { feature: "Program generation from your history", others: false, strongAI: true },
  { feature: "Real-time cross-device sync", others: "partial", strongAI: true },
  { feature: "Streaming AI responses", others: false, strongAI: true },
  { feature: "Structured profile insights", others: false, strongAI: true },
  { feature: "Tool-calling for accurate answers", others: false, strongAI: true },
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
        <Minus className="w-3.5 h-3.5 text-gray-400" />
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
    <section className="relative py-20 lg:py-28 bg-gray-50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-gray-500 mb-3 block">
            The Difference
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-black leading-tight">
            Not just another{" "}
            <span className="text-blue-gradient">workout tracker.</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-2xl mx-auto"
        >
          {/* Table header */}
          <div className="grid grid-cols-[1fr_100px_140px] gap-4 px-5 py-3 mb-2">
            <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Feature</div>
            <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide text-center">Others</div>
            <div className="text-xs font-semibold text-blue-600 uppercase tracking-wide text-center">Strong AI</div>
          </div>

          {/* Table rows */}
          <div className="bg-white rounded-2xl overflow-hidden divide-y divide-gray-200 border border-gray-200">
            {features.map((row, i) => (
              <motion.div
                key={row.feature}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                className="grid grid-cols-[1fr_100px_140px] gap-4 px-5 py-3.5 items-center hover:bg-gray-50 transition-colors"
              >
                <span className="text-sm text-gray-700">{row.feature}</span>
                <div className="flex justify-center">
                  <FeatureIcon value={row.others as FeatureValue} />
                </div>
                <div className="flex justify-center">
                  <FeatureIcon value={row.strongAI as FeatureValue} isStrongAI />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
