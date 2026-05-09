/*
 * Strong AI — Profile & Onboarding Section
 * Design: Split layout, profile card mockup on right, text on left
 * Ember accent for profile tags, electric blue for AI-extracted insights
 */

import { motion } from "framer-motion";
import { UserCircle, Tag, Zap } from "lucide-react";

const profileTags = [
  { label: "Intermediate", category: "Experience", color: "#FF6B35" },
  { label: "Powerlifting", category: "Goal", color: "#FF6B35" },
  { label: "Left shoulder", category: "Injury flag", color: "#ef4444" },
  { label: "Strength phase", category: "Training phase", color: "#4F8EF7" },
  { label: "3 years lifting", category: "Training age", color: "#4F8EF7" },
  { label: "Squat specialist", category: "Strength", color: "#7BB3FF" },
];

function ProfileMockup() {
  return (
    <div className="glass-card rounded-2xl overflow-hidden shadow-2xl shadow-black/50 border border-white/[0.08] w-full max-w-md mx-auto">
      {/* Header */}
      <div className="px-6 py-5 border-b border-white/[0.06] flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FF6B35] to-[#C44D1E] flex items-center justify-center text-white font-bold text-lg">
          M
        </div>
        <div>
          <div className="text-base font-bold text-white" style={{ fontFamily: "'Syne', sans-serif" }}>
            Marcus T.
          </div>
          <div className="text-xs text-white/40">Member since Jan 2024</div>
        </div>
      </div>

      {/* Profile text */}
      <div className="px-6 py-4 border-b border-white/[0.06]">
        <div className="text-xs text-white/40 uppercase tracking-wide font-semibold mb-2">Your Profile</div>
        <p className="text-sm text-white/65 leading-relaxed">
          I've been lifting for 3 years, mainly powerlifting. Currently in a strength phase building toward a meet in October. Left shoulder has been bothering me since March — avoiding overhead pressing. Goal is a 200kg squat by competition.
        </p>
      </div>

      {/* AI-extracted tags */}
      <div className="px-6 py-4">
        <div className="flex items-center gap-2 mb-3">
          <Zap className="w-3.5 h-3.5 text-[#4F8EF7]" />
          <span className="text-xs text-[#4F8EF7] font-semibold uppercase tracking-wide">
            AI-Extracted Insights
          </span>
        </div>
        <div className="flex flex-wrap gap-2">
          {profileTags.map((tag) => (
            <div
              key={tag.label}
              className="flex flex-col px-3 py-1.5 rounded-lg text-xs"
              style={{
                background: `${tag.color}12`,
                border: `1px solid ${tag.color}25`,
              }}
            >
              <span className="font-semibold" style={{ color: tag.color }}>
                {tag.label}
              </span>
              <span className="text-white/35 text-[10px]">{tag.category}</span>
            </div>
          ))}
        </div>
        <div className="mt-3 text-xs text-white/30 flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          Injected into every coaching conversation
        </div>
      </div>
    </div>
  );
}

export default function ProfileSection() {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden bg-[#0D0D14]">
      {/* Subtle glow */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 rounded-full bg-[#FF6B35]/6 blur-[120px] pointer-events-none -translate-y-1/2" />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <span className="text-xs font-semibold tracking-widest uppercase text-white/40 mb-3 block">
              Profile & Onboarding
            </span>
            <h2
              className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-6"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              A coach that{" "}
              <span className="text-ember-gradient">remembers everything.</span>
            </h2>
            <div className="space-y-5 text-white/60 text-base leading-relaxed">
              <p>
                When you first open the app, you tell it about yourself: your training background, current goals, any injuries or limitations, how long you've been lifting.
              </p>
              <p>
                This isn't a form that disappears. The AI reads it every time you chat. More importantly, a secondary AI pass extracts structured insights from your profile text — training phase, injury flags, experience level, strengths.
              </p>
              <p>
                Those tags get injected into every coaching conversation automatically. Update your profile any time and the coach adapts.
              </p>
            </div>

            <div className="mt-8 flex items-start gap-3 p-4 rounded-xl bg-[#4F8EF7]/8 border border-[#4F8EF7]/15">
              <UserCircle className="w-5 h-5 text-[#7BB3FF] flex-shrink-0 mt-0.5" />
              <div>
                <div className="text-sm font-semibold text-white mb-1">Smart profile extraction</div>
                <div className="text-xs text-white/50 leading-relaxed">
                  A secondary AI pass reads your profile text and extracts structured tags — current training phase, injury flags, experience level, and strengths — that get automatically injected into every coaching session.
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: profile mockup */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          >
            <ProfileMockup />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
