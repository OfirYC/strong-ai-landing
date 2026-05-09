/*
 * Strong AI — AI Coach Section
 * Emphasizes personalized, adaptive coaching that learns from user data
 */

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Brain, MessageSquare, Database, Zap, TrendingUp, AlertCircle } from "lucide-react";

const capabilities = [
  {
    icon: Database,
    title: "Knows your complete history",
    description: "Every workout, every PR, every injury. The AI has full context on you — it doesn't guess, it looks it up.",
    color: "#0066FF",
  },
  {
    icon: AlertCircle,
    title: "Understands your injuries",
    description: "Your injury history, current pain points, and recovery patterns are injected into every conversation. It coaches around what hurts.",
    color: "#FF3B30",
  },
  {
    icon: TrendingUp,
    title: "Identifies your patterns",
    description: "Over time, it notices what triggers your injuries, what makes you stronger, what works for *you* specifically.",
    color: "#0066FF",
  },
  {
    icon: Zap,
    title: "Adapts to your life",
    description: "Your goals change. Your schedule changes. Your injuries change. The AI adapts its coaching in real time.",
    color: "#0052CC",
  },
  {
    icon: MessageSquare,
    title: "Conversational coaching",
    description: "Ask anything about your training. The AI responds with facts grounded in your actual data, not generic advice.",
    color: "#0066FF",
  },
  {
    icon: Brain,
    title: "Learns what works for you",
    description: "Every interaction teaches the AI more about you. Over weeks and months, it becomes your personal coach.",
    color: "#9945FF",
  },
];

const chatExamples = [
  {
    question: "My knee has been bothering me. What should I change?",
    answer: "Looking at your history: you've had knee issues after high-volume leg days with minimal recovery. I'd suggest reducing volume by 20% this week, adding an extra rest day, and swapping deep squats for leg press to reduce knee stress. Your sleep has been 6 hours — that's likely a factor too.",
    tools: ["history", "injury_data", "recovery_metrics"],
  },
  {
    question: "Am I ready to increase my bench press training?",
    answer: "Your bench has stalled for 3 weeks at 140kg. Your sleep is good (7.5 hrs avg), but your HRV is low — suggesting under-recovery. I'd recommend a deload week first, then increase volume gradually. Your nutrition looks solid, so recovery is the limiting factor here.",
    tools: ["pr_tracking", "sleep_data", "hrv_data"],
  },
  {
    question: "What's been my biggest strength gain?",
    answer: "Your squat is up 15kg in 8 weeks — that's solid. The pattern: you've been consistent with 3 leg days per week, your sleep improved from 6.5 to 7.5 hours, and you added protein tracking. The consistency + recovery combo is working.",
    tools: ["strength_trends", "sleep_tracking", "nutrition_data"],
  },
];

function ToolCallBadge({ tool }: { tool: string }) {
  return (
    <span className="inline-flex items-center gap-1 text-[10px] font-mono text-blue-600 bg-blue-100 border border-blue-200 px-2 py-0.5 rounded">
      <Database className="w-2.5 h-2.5" />
      {tool}
    </span>
  );
}

function ChatDemo() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [displayedAnswer, setDisplayedAnswer] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [showTools, setShowTools] = useState(false);

  useEffect(() => {
    setDisplayedAnswer("");
    setShowTools(false);
    setIsTyping(true);

    const toolDelay = setTimeout(() => {
      setShowTools(true);
    }, 300);

    const typeDelay = setTimeout(() => {
      const answer = chatExamples[activeIdx].answer;
      let i = 0;
      const interval = setInterval(() => {
        if (i < answer.length) {
          setDisplayedAnswer(answer.slice(0, i + 1));
          i++;
        } else {
          clearInterval(interval);
          setIsTyping(false);
        }
      }, 16);
      return () => clearInterval(interval);
    }, 800);

    return () => {
      clearTimeout(toolDelay);
      clearTimeout(typeDelay);
    };
  }, [activeIdx]);

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-200 w-full">
      {/* Header */}
      <div className="px-5 py-4 border-b border-gray-200 flex items-center gap-3 bg-gray-50">
        <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center shadow-md">
          <Brain className="w-4 h-4 text-white" />
        </div>
        <div>
          <div className="text-sm font-bold text-black">Your AI Coach</div>
          <div className="text-xs text-blue-600 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
            Online · Analyzing your data
          </div>
        </div>
      </div>

      {/* Question tabs */}
      <div className="flex gap-1 px-4 pt-3 pb-1 overflow-x-auto scrollbar-none">
        {chatExamples.map((ex, i) => (
          <button
            key={i}
            onClick={() => setActiveIdx(i)}
            className={`text-xs px-3 py-1.5 rounded-full whitespace-nowrap transition-all duration-200 font-medium ${
              activeIdx === i
                ? "bg-blue-100 text-blue-700 border border-blue-200"
                : "text-gray-500 hover:text-gray-700 hover:bg-gray-100"
            }`}
          >
            Example {i + 1}
          </button>
        ))}
      </div>

      {/* Chat */}
      <div className="px-5 py-4 space-y-3 min-h-[240px]">
        {/* User message */}
        <div className="flex justify-end">
          <div className="bg-blue-100 border border-blue-200 text-gray-800 text-sm px-4 py-3 rounded-2xl rounded-tr-sm max-w-[90%]">
            {chatExamples[activeIdx].question}
          </div>
        </div>

        {/* Tool calls indicator */}
        {showTools && (
          <motion.div
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-wrap gap-1.5 pl-10"
          >
            {chatExamples[activeIdx].tools.map((tool) => (
              <ToolCallBadge key={tool} tool={tool} />
            ))}
          </motion.div>
        )}

        {/* AI response */}
        {showTools && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex gap-3"
          >
            <div className="w-7 h-7 rounded-full bg-blue-100 border border-blue-200 flex items-center justify-center flex-shrink-0 mt-0.5">
              <Brain className="w-3.5 h-3.5 text-blue-600" />
            </div>
            <div className="bg-gray-50 border border-gray-200 text-gray-800 text-sm px-4 py-3 rounded-2xl rounded-tl-sm max-w-[90%] leading-relaxed">
              {displayedAnswer}
              {isTyping && (
                <span className="inline-flex gap-0.5 ml-1 align-middle">
                  <span className="w-1 h-1 rounded-full bg-blue-600 animate-bounce" style={{ animationDelay: "0ms" }} />
                  <span className="w-1 h-1 rounded-full bg-blue-600 animate-bounce" style={{ animationDelay: "150ms" }} />
                  <span className="w-1 h-1 rounded-full bg-blue-600 animate-bounce" style={{ animationDelay: "300ms" }} />
                </span>
              )}
            </div>
          </motion.div>
        )}
      </div>

      {/* Input bar */}
      <div className="px-5 pb-4">
        <div className="flex items-center gap-2 bg-gray-100 border border-gray-200 rounded-xl px-4 py-3">
          <span className="text-sm text-gray-500 flex-1">Ask about your training...</span>
          <div className="w-6 h-6 rounded-lg bg-blue-100 flex items-center justify-center">
            <Zap className="w-3 h-3 text-blue-600" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function AICoachSection() {
  return (
    <section id="ai-coach" className="relative py-24 lg:py-32 overflow-hidden bg-gray-50">
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
            Personalized Coaching
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black leading-tight max-w-2xl">
            A coach that knows you.
          </h2>
          <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-xl">
            Not a generic chatbot. Your AI coach has full access to your training history, recovery data, injury patterns, and goals. Every recommendation is grounded in *your* data.
          </p>
        </motion.div>

        {/* Content grid */}
        <div className="grid lg:grid-cols-[480px_1fr] gap-12 lg:gap-16 items-start">
          {/* Left: Chat demo */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <ChatDemo />
          </motion.div>

          {/* Right: Capabilities */}
          <div className="grid sm:grid-cols-2 gap-5">
            {capabilities.map((cap, i) => (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07, ease: "easeOut" }}
                className="bg-white rounded-xl p-5 hover:border-blue-300 transition-all duration-300 border border-gray-200"
              >
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center mb-3"
                  style={{ background: `${cap.color}15` }}
                >
                  <cap.icon className="w-[18px] h-[18px]" style={{ color: cap.color }} />
                </div>
                <h3 className="text-sm font-bold text-black mb-1.5">
                  {cap.title}
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">{cap.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
