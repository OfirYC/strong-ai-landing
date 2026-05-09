/*
 * Strong AI — Tech Stack Section
 * Design: Dark, developer-focused, monospace font for tech details
 * Three columns: Frontend, Backend, AI layer
 * Architecture flow visualization
 */

import { motion } from "framer-motion";
import { Smartphone, Server, Cpu, ArrowRight, Wifi } from "lucide-react";

const PROGRESS_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663643511140/mYfssEJUacXwGC44k6oMNk/feature-progress-NFNGwP9LRCMKaQNLxv7jSQ.webp";

const techStacks = [
  {
    icon: Smartphone,
    title: "Frontend",
    color: "#FF6B35",
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
    color: "#4F8EF7",
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
    color: "#7BB3FF",
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
    { label: "iOS / Android / Web", sublabel: "React Native + Expo", color: "#FF6B35", icon: Smartphone },
    { label: "FastAPI Backend", sublabel: "Python + MongoDB + WebSocket", color: "#4F8EF7", icon: Server },
    { label: "AI Runner", sublabel: "OpenAI + Tool-calling loop", color: "#7BB3FF", icon: Cpu },
  ];

  return (
    <div className="glass-card rounded-2xl p-6 border border-white/[0.06]">
      <div className="text-xs text-white/40 uppercase tracking-wide font-semibold mb-5">Architecture Overview</div>
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
                <div className="text-sm font-bold text-white" style={{ fontFamily: "'Syne', sans-serif" }}>
                  {layer.label}
                </div>
                <div className="text-xs text-white/40 font-mono">{layer.sublabel}</div>
              </div>
            </div>
            {i < layers.length - 1 && (
              <div className="flex items-center justify-center py-1">
                <div className="flex flex-col items-center gap-0.5">
                  <div className="w-px h-3 bg-white/15" />
                  <ArrowRight className="w-3 h-3 text-white/20 rotate-90" />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* WebSocket badge */}
      <div className="mt-4 flex items-center gap-2 px-3 py-2 rounded-lg bg-green-500/8 border border-green-500/15">
        <Wifi className="w-3.5 h-3.5 text-green-400" />
        <span className="text-xs text-green-400/80">WebSocket persistent connection — real-time sync across all layers</span>
      </div>
    </div>
  );
}

export default function TechSection() {
  return (
    <section id="tech" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{ backgroundImage: `url(${PROGRESS_BG})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#111118] via-[#111118]/97 to-[#111118]" />

      {/* Dual glow */}
      <div className="absolute top-1/3 left-1/4 w-80 h-80 rounded-full bg-[#FF6B35]/6 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-80 h-80 rounded-full bg-[#4F8EF7]/6 blur-[120px] pointer-events-none" />

      <div className="container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 lg:mb-20"
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-white/40 mb-3 block">
            Under the Hood
          </span>
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight max-w-2xl"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Built for speed,{" "}
            <span className="text-electric-gradient">scale, and intelligence.</span>
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
                className="glass-card rounded-2xl p-6 hover:border-white/10 transition-all duration-300"
              >
                {/* Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background: `${stack.color}18`, border: `1px solid ${stack.color}25` }}
                  >
                    <stack.icon className="w-5 h-5" style={{ color: stack.color }} />
                  </div>
                  <h3
                    className="text-base font-bold text-white"
                    style={{ fontFamily: "'Syne', sans-serif" }}
                  >
                    {stack.title}
                  </h3>
                </div>

                {/* Items */}
                <div className="space-y-4">
                  {stack.items.map((item) => (
                    <div key={item.label} className="border-b border-white/[0.05] pb-3 last:border-0 last:pb-0">
                      <div
                        className="text-xs font-semibold mb-0.5"
                        style={{ fontFamily: "'Syne Mono', monospace", color: stack.color, opacity: 0.85 }}
                      >
                        {item.label}
                      </div>
                      <div className="text-xs text-white/40 leading-relaxed">{item.note}</div>
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
