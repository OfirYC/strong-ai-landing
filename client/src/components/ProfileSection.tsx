/*
 * Strong AI — Profile & Onboarding Section
 * Light theme with blue accents
 */

import { motion } from "framer-motion";
import { UserCircle, Tag, Zap } from "lucide-react";

const profileTags = [
  { label: "Intermediate", category: "Experience", color: "#0066FF" },
  { label: "Powerlifting", category: "Goal", color: "#0066FF" },
  { label: "Left shoulder", category: "Injury flag", color: "#FF3B30" },
  { label: "Strength phase", category: "Training phase", color: "#0066FF" },
  { label: "3 years lifting", category: "Training age", color: "#0066FF" },
  { label: "Squat specialist", category: "Strength", color: "#0052CC" },
];

function ProfileMockup() {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-200 w-full max-w-md mx-auto">
      {/* Header */}
      <div className="px-6 py-5 border-b border-gray-200 flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center text-white font-bold text-lg">
          M
        </div>
        <div>
          <div className="text-base font-bold text-black">Marcus T.</div>
          <div className="text-xs text-gray-500">Member since Jan 2024</div>
        </div>
      </div>

      {/* Profile text */}
      <div className="px-6 py-4 border-b border-gray-200">
        <div className="text-xs text-gray-500 uppercase tracking-wide font-semibold mb-2">Your Profile</div>
        <p className="text-sm text-gray-700 leading-relaxed">
          I've been lifting for 3 years, mainly powerlifting. Currently in a strength phase building toward a meet in October. Left shoulder has been bothering me since March — avoiding overhead pressing. Goal is a 200kg squat by competition.
        </p>
      </div>

      {/* AI-extracted tags */}
      <div className="px-6 py-4">
        <div className="flex items-center gap-2 mb-3">
          <Zap className="w-3.5 h-3.5 text-blue-600" />
          <span className="text-xs text-blue-600 font-semibold uppercase tracking-wide">
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
                border: `1px solid ${tag.color}30`,
              }}
            >
              <span className="font-semibold" style={{ color: tag.color }}>
                {tag.label}
              </span>
              <span className="text-gray-500 text-[10px]">{tag.category}</span>
            </div>
          ))}
        </div>
        <div className="mt-3 text-xs text-gray-500 flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
          Injected into every coaching conversation
        </div>
      </div>
    </div>
  );
}

export default function ProfileSection() {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden bg-white">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <span className="text-xs font-semibold tracking-widest uppercase text-gray-500 mb-3 block">
              Profile & Onboarding
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-black leading-tight mb-6">
              A coach that{" "}
              <span className="text-blue-gradient">remembers everything.</span>
            </h2>
            <div className="space-y-5 text-gray-600 text-base leading-relaxed">
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

            <div className="mt-8 flex items-start gap-3 p-4 rounded-xl bg-blue-50 border border-blue-200">
              <UserCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
              <div>
                <div className="text-sm font-semibold text-black mb-1">Smart profile extraction</div>
                <div className="text-xs text-gray-600 leading-relaxed">
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
