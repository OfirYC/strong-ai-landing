/*
 * Strong AI — Stats & Testimonials Section
 * Light theme with blue accents
 */

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

function AnimatedNumber({ target }: { target: number }) {
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
    </span>
  );
}

const testimonials = [
  {
    quote: "Finally an app that doesn't just save numbers — it actually understands my training. Asked it to build me a peaking block and it nailed the percentages based on my actual PRs.",
    author: "Marcus T.",
    role: "Powerlifter, 5 years",
    initials: "M",
  },
  {
    quote: "The AI coach caught that I was under-recovering before I did. It noticed my volume had spiked 40% over three weeks and suggested a deload. That's the kind of insight a real coach gives you.",
    author: "Sarah K.",
    role: "Competitive CrossFitter",
    initials: "S",
  },
  {
    quote: "I've tried every tracker. Strong AI is the first one where logging a set actually takes less time than the rest between sets. And the AI is genuinely useful, not just a gimmick.",
    author: "James R.",
    role: "Strength & Conditioning Coach",
    initials: "J",
  },
];

export default function StatsSection() {
  return (
    <section className="relative py-20 lg:py-28 bg-white">
      <div className="container">
        {/* Stats grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 pb-20 border-b border-gray-200"
        >
          {[
            { label: "Exercise Types", value: 13 },
            { label: "AI Tool Rounds", value: 6, suffix: "×" },
            { label: "Data-Grounded", value: 100, suffix: "%" },
            { label: "Platforms", value: 3 },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                <AnimatedNumber target={stat.value} />
                {stat.suffix}
              </div>
              <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-12 text-center">
            What athletes are saying
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, i) => (
              <motion.div
                key={testimonial.author}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-gray-50 rounded-2xl p-6 border border-gray-200 hover:border-blue-200 transition-colors"
              >
                <div className="flex items-start gap-3 mb-4">
                  <div className="text-xl font-bold text-blue-600">"</div>
                </div>
                <p className="text-gray-700 leading-relaxed mb-6 text-sm">
                  {testimonial.quote}
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-sm">
                    {testimonial.initials}
                  </div>
                  <div>
                    <div className="font-semibold text-black text-sm">{testimonial.author}</div>
                    <div className="text-xs text-gray-500">{testimonial.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
