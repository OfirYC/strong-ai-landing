/*
 * Strong AI — Tech Stack Section
 * Light theme with blue accents
 */

import { motion } from "framer-motion";
import { Smartphone, Server, Cpu, ArrowRight, Wifi } from "lucide-react";

const techStacks = [
  {
    icon: Smartphone,
    title: "Frontend",
    color: "#0066FF",
    items: [
      { label: "React Native + Expo", note: "iOS, Android, Web from one codebase" },
      { label: "TypeScript", note: "Throughout the entire codebase" },
      { label: "Zustand", note: "One store per domain, smart pagination caching" },
      { label: "Expo Router", note: "File-based navigation" },
    ],
  },
  {
    icon: Server,
    title: "Backend",
    color: "#0066FF",
    items: [
      { label: "FastAPI + Python", note: "Fully async with Motor" },
      { label: "MongoDB", note: "Flexible document storage" },
      { label: "Pydantic v2", note: "Strict validation throughout" },
      { label: "WebSocket fan-out", note: "Custom observable database wrapper" },
    ],
  },
  {
    icon: Cpu,
    title: "AI Layer",
    color: "#0052CC",
    items: [
      { label: "OpenAI streaming", note: "Token-by-token response streaming" },
      { label: "Tool-calling loop", note: "Up to 6 rounds in runner.py" },
      { label: "Modular tools", note: "Exercise lookup, history, PRs, schedule, profile" },
      { label: "Dynamic system prompt", note: "Assembled fresh per request from live user data" },
    ],
  },
];

function ArchDiagram() {
  const layers = [
    { label: "iOS / Android / Web", sublabel: "React Native + Expo", color: "#0066FF", icon: Smartphone },
    { label: "FastAPI Backend", sublabel: "Python + MongoDB + WebSocket", color: "#0066FF", icon: Server },
    { label: "AI Runner", sublabel: "OpenAI + Tool-calling loop", color: "#0052CC", icon: Cpu },
  ];

  return (
    <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-lg">
      <div className="text-xs text-gray-500 uppercase tracking-wide font-semibold mb-5">Architecture Overview</div>
      <div className="flex flex-col gap-3">
        {layers.map((layer, i) => (
          <div key={layer.label}>
            <div
              className="flex items-center gap-4 p-4 rounded-xl"
              style={{ background: `${layer.color}10`, border: `1px solid ${layer.color}20` }}
            >
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ background: `${layer.color}20` }}
              >
                <layer.icon className="w-4.5 h-4.5" style={{ color: layer.color }} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-bold text-black">
                  {layer.label}
                </div>
                <div className="text-xs text-gray-500 font-mono">{layer.sublabel}</div>
              </div>
            </div>
            {i < layers.length - 1 && (
              <div className="flex items-center justify-center py-1">
                <div className="flex flex-col items-center gap-0.5">
                  <div className="w-px h-3 bg-gray-300" />
                  <ArrowRight className="w-3 h-3 text-gray-400 rotate-90" />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* WebSocket badge */}
      <div className="mt-4 flex items-center gap-2 px-3 py-2 rounded-lg bg-green-50 border border-green-200">
        <Wifi className="w-3.5 h-3.5 text-green-600" />
        <span className="text-xs text-green-700">WebSocket persistent connection — real-time sync across all layers</span>
      </div>
    </div>
  );
}

export default function TechSection() {
  return (
    <section id="tech" className="relative py-24 lg:py-32 overflow-hidden bg-gray-50">
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 lg:mb-20"
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-gray-500 mb-3 block">
            Under the Hood
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black leading-tight max-w-2xl">
            Built for speed,{" "}
            <span className="text-blue-gradient">scale, and intelligence.</span>
          </h2>
        </motion.div>

        {/* Two-column: tech cards + arch diagram */}
        <div className="grid lg:grid-cols-[1fr_380px] gap-8 items-start">
          {/* Tech stack cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {techStacks.map((stack, i) => (
              <motion.div
                key={stack.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
                className="bg-white rounded-2xl p-6 hover:border-blue-300 transition-all duration-300 border border-gray-200 shadow-sm"
              >
                {/* Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background: `${stack.color}18`, border: `1px solid ${stack.color}25` }}
                  >
                    <stack.icon className="w-5 h-5" style={{ color: stack.color }} />
                  </div>
                  <h3 className="text-base font-bold text-black">
                    {stack.title}
                  </h3>
                </div>

                {/* Items */}
                <div className="space-y-4">
                  {stack.items.map((item) => (
                    <div key={item.label} className="border-b border-gray-200 pb-3 last:border-0 last:pb-0">
                      <div
                        className="text-xs font-semibold mb-0.5"
                        style={{ fontFamily: "'Syne Mono', monospace", color: stack.color, opacity: 0.85 }}
                      >
                        {item.label}
                      </div>
                      <div className="text-xs text-gray-600 leading-relaxed">{item.note}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Architecture diagram */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          >
            <ArchDiagram />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
