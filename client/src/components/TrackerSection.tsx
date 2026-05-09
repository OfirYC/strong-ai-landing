/*
 * Strong AI — Tracker Section
 * Design: Asymmetric layout, ember orange accents for physical/workout elements
 * Left: feature list with animated icons, Right: floating UI mockup over image
 * Background: dark with ember glow
 */

import { motion } from "framer-motion";
import { Timer, Trophy, Repeat2, Calendar, BarChart3, Dumbbell } from "lucide-react";

const TRACKER_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663643511140/mYfssEJUacXwGC44k6oMNk/tracker-mockup-bg-4ABW4uFHuNAsQRotjumawT.webp";
const WORKOUT_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663643511140/mYfssEJUacXwGC44k6oMNk/feature-workout-eHydvKwRwXeVLxrF2eht7Z.webp";

const features = [
  {
    icon: Timer,
    title: "Zero-friction logging",
    description: "Pick an exercise, see your last session's numbers, log sets inline. The timer runs in the background. Less time logging, more time lifting.",
    color: "#FF6B35",
  },
  {
    icon: Trophy,
    title: "Automatic PR detection",
    description: "Hit a new 1RM or rep PR and the app flags it instantly — no manual tracking, no thinking required.",
    color: "#FF6B35",
  },
  {
    icon: Dumbbell,
    title: "13 exercise types",
    description: "Barbell, machine, bodyweight, cardio, mobility — only the fields that make sense for each type. No irrelevant inputs cluttering your screen.",
    color: "#FF6B35",
  },
  {
    icon: Repeat2,
    title: "Templates & programs",
    description: "Save any workout as a template. Templates remember default sets so you're never starting from scratch.",
    color: "#FF9A6C",
  },
  {
    icon: Calendar,
    title: "Scheduled workouts",
    description: "Set a recurring bench day on Tuesdays and the app will remind you. Your program, on autopilot.",
    color: "#FF9A6C",
  },
  {
    icon: BarChart3,
    title: "Full history & trends",
    description: "Your complete workout history, always accessible. Filter by exercise and see exactly how your numbers have moved over time.",
    color: "#FF9A6C",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: "easeOut" as const },
  }),
};

// Simulated workout log UI
function WorkoutMockup() {
  const sets = [
    { set: 1, weight: "100kg", reps: 5, done: true },
    { set: 2, weight: "100kg", reps: 5, done: true },
    { set: 3, weight: "102.5kg", reps: 4, done: true, pr: true },
    { set: 4, weight: "102.5kg", reps: 3, done: false },
  ];

  return (
    <div className="glass-card rounded-2xl overflow-hidden shadow-2xl shadow-black/60 border border-[#FF6B35]/15 w-full">
      {/* Header */}
      <div className="px-5 py-4 border-b border-white/[0.06] flex items-center justify-between bg-[#1A1A24]/80">
        <div>
          <div className="text-xs text-white/40 mb-0.5 font-medium tracking-wide uppercase">Today</div>
          <div className="text-base font-bold text-white" style={{ fontFamily: "'Syne', sans-serif" }}>
            Push Day A
          </div>
        </div>
        <div className="flex items-center gap-1.5 bg-[#FF6B35]/15 text-[#FF9A6C] text-xs font-semibold px-2.5 py-1 rounded-full border border-[#FF6B35]/20">
          <Timer className="w-3 h-3" />
          42:17
        </div>
      </div>

      {/* Exercise */}
      <div className="px-5 py-4">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-semibold text-white">Bench Press</span>
          <span className="text-xs text-white/40">Last: 100kg × 5</span>
        </div>

        {/* Sets table */}
        <div className="space-y-2">
          <div className="grid grid-cols-4 text-xs text-white/30 font-medium mb-1 px-1">
            <span>SET</span>
            <span>WEIGHT</span>
            <span>REPS</span>
            <span></span>
          </div>
          {sets.map((s) => (
            <div
              key={s.set}
              className={`grid grid-cols-4 items-center px-3 py-2.5 rounded-lg text-sm transition-colors ${
                s.done
                  ? "bg-white/[0.04] text-white/80"
                  : "bg-[#FF6B35]/8 border border-[#FF6B35]/20 text-white"
              }`}
            >
              <span className="text-white/40 text-xs font-mono">{s.set}</span>
              <span className="font-semibold">{s.weight}</span>
              <span>{s.reps}</span>
              <div className="flex justify-end">
                {s.pr && (
                  <span className="text-[10px] font-bold text-[#FF6B35] bg-[#FF6B35]/15 px-1.5 py-0.5 rounded border border-[#FF6B35]/25">
                    PR
                  </span>
                )}
                {s.done && !s.pr && (
                  <span className="w-4 h-4 rounded-full bg-green-500/20 flex items-center justify-center">
                    <span className="w-2 h-2 rounded-full bg-green-400" />
                  </span>
                )}
                {!s.done && (
                  <span className="w-4 h-4 rounded-full border border-[#FF6B35]/50" />
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Rest timer */}
        <div className="mt-4 flex items-center justify-between px-3 py-2.5 rounded-lg bg-[#4F8EF7]/8 border border-[#4F8EF7]/15">
          <span className="text-xs text-[#7BB3FF]">Rest timer</span>
          <span className="text-sm font-bold text-[#7BB3FF] font-mono">1:30</span>
        </div>
      </div>
    </div>
  );
}

export default function TrackerSection() {
  return (
    <section id="tracker" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-15"
        style={{ backgroundImage: `url(${TRACKER_BG})` }}
      />
      <div className="absolute inset-0 bg-[#111118]/88" />

      {/* Ember glow */}
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] rounded-full bg-[#FF6B35]/8 blur-[160px] pointer-events-none -translate-y-1/2" />

      <div className="container relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 lg:mb-20"
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-[#FF6B35] mb-3 block">
            The Tracker
          </span>
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight max-w-2xl"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Logging a set should take{" "}
            <span className="text-ember-gradient">less time than resting.</span>
          </h2>
        </motion.div>

        {/* Content grid */}
        <div className="grid lg:grid-cols-[1fr_420px] gap-12 lg:gap-16 items-start">
          {/* Features list */}
          <div className="grid sm:grid-cols-2 gap-5">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="glass-card rounded-xl p-5 hover:border-[#FF6B35]/20 transition-all duration-300 group"
              >
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center mb-3"
                  style={{ background: `${feature.color}18` }}
                >
                  <feature.icon className="w-[18px] h-[18px]" style={{ color: feature.color }} />
                </div>
                <h3
                  className="text-sm font-bold text-white mb-1.5"
                  style={{ fontFamily: "'Syne', sans-serif" }}
                >
                  {feature.title}
                </h3>
                <p className="text-xs text-white/50 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Right: image + floating mockup */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col gap-6"
          >
            {/* Background image */}
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src={WORKOUT_IMG}
                alt="Athlete gripping barbell with chalk dust"
                className="w-full object-cover aspect-[4/3]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111118]/70 via-transparent to-transparent" />
              {/* Overlay badge */}
              <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-[#FF6B35]/90 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                <Trophy className="w-3.5 h-3.5" />
                New PR Detected!
              </div>
            </div>

            {/* Workout mockup */}
            <WorkoutMockup />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
