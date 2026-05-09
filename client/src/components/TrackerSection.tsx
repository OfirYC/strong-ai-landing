/*
 * Strong AI — Tracker Section
 * Light theme with blue accents
 */

import { motion } from "framer-motion";
import { Timer, Trophy, Repeat2, Calendar, BarChart3, Dumbbell } from "lucide-react";

const WORKOUT_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663643511140/mYfssEJUacXwGC44k6oMNk/feature-workout-eHydvKwRwXeVLxrF2eht7Z.webp";

const features = [
  {
    icon: Timer,
    title: "Zero-friction logging",
    description: "Pick an exercise, see your last session's numbers, log sets inline. The timer runs in the background. Less time logging, more time lifting.",
    color: "#0066FF",
  },
  {
    icon: Trophy,
    title: "Automatic PR detection",
    description: "Hit a new 1RM or rep PR and the app flags it instantly — no manual tracking, no thinking required.",
    color: "#0066FF",
  },
  {
    icon: Dumbbell,
    title: "13 exercise types",
    description: "Barbell, machine, bodyweight, cardio, mobility — only the fields that make sense for each type. No irrelevant inputs cluttering your screen.",
    color: "#0066FF",
  },
  {
    icon: Repeat2,
    title: "Templates & programs",
    description: "Save any workout as a template. Templates remember default sets so you're never starting from scratch.",
    color: "#0052CC",
  },
  {
    icon: Calendar,
    title: "Scheduled workouts",
    description: "Set a recurring bench day on Tuesdays and the app will remind you. Your program, on autopilot.",
    color: "#0052CC",
  },
  {
    icon: BarChart3,
    title: "Full history & trends",
    description: "Your complete workout history, always accessible. Filter by exercise and see exactly how your numbers have moved over time.",
    color: "#0052CC",
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

function WorkoutMockup() {
  const sets = [
    { set: 1, weight: "100kg", reps: 5, done: true },
    { set: 2, weight: "100kg", reps: 5, done: true },
    { set: 3, weight: "102.5kg", reps: 4, done: true, pr: true },
    { set: 4, weight: "102.5kg", reps: 3, done: false },
  ];

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-200 w-full">
      {/* Header */}
      <div className="px-5 py-4 border-b border-gray-200 flex items-center justify-between bg-gray-50">
        <div>
          <div className="text-xs text-gray-500 mb-0.5 font-medium tracking-wide uppercase">Today</div>
          <div className="text-base font-bold text-black">Push Day A</div>
        </div>
        <div className="flex items-center gap-1.5 bg-blue-100 text-blue-700 text-xs font-semibold px-2.5 py-1 rounded-full border border-blue-200">
          <Timer className="w-3 h-3" />
          42:17
        </div>
      </div>

      {/* Exercise */}
      <div className="px-5 py-4">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-semibold text-black">Bench Press</span>
          <span className="text-xs text-gray-500">Last: 100kg × 5</span>
        </div>

        {/* Sets table */}
        <div className="space-y-2">
          <div className="grid grid-cols-4 text-xs text-gray-500 font-medium mb-1 px-1">
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
                  ? "bg-gray-50 text-gray-700 border border-gray-200"
                  : "bg-blue-50 border border-blue-200 text-black"
              }`}
            >
              <span className="text-gray-500 text-xs font-mono">{s.set}</span>
              <span className="font-semibold">{s.weight}</span>
              <span>{s.reps}</span>
              <div className="flex justify-end">
                {s.pr && (
                  <span className="text-[10px] font-bold text-blue-600 bg-blue-100 px-1.5 py-0.5 rounded border border-blue-200">
                    PR
                  </span>
                )}
                {s.done && !s.pr && (
                  <span className="w-4 h-4 rounded-full bg-green-100 flex items-center justify-center">
                    <span className="w-2 h-2 rounded-full bg-green-500" />
                  </span>
                )}
                {!s.done && (
                  <span className="w-4 h-4 rounded-full border border-blue-300" />
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Rest timer */}
        <div className="mt-4 flex items-center justify-between px-3 py-2.5 rounded-lg bg-blue-50 border border-blue-200">
          <span className="text-xs text-blue-700">Rest timer</span>
          <span className="text-sm font-bold text-blue-700 font-mono">1:30</span>
        </div>
      </div>
    </div>
  );
}

export default function TrackerSection() {
  return (
    <section id="tracker" className="relative py-24 lg:py-32 overflow-hidden bg-white">
      <div className="container">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 lg:mb-20"
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-blue-600 mb-3 block">
            The Tracker
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black leading-tight max-w-2xl">
            Logging a set should take{" "}
            <span className="text-blue-gradient">less time than resting.</span>
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
                className="bg-gray-50 rounded-xl p-5 hover:border-blue-300 transition-all duration-300 group border border-gray-200"
              >
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center mb-3"
                  style={{ background: `${feature.color}15` }}
                >
                  <feature.icon className="w-[18px] h-[18px]" style={{ color: feature.color }} />
                </div>
                <h3 className="text-sm font-bold text-black mb-1.5">
                  {feature.title}
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">{feature.description}</p>
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
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              {/* Overlay badge */}
              <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-blue-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
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
