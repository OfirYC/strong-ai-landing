/*
 * Strong AI — CTA Section + Footer
 * Design: Bold full-width CTA with ember gradient, email capture, minimal footer
 */

import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Apple, Globe, CheckCircle } from "lucide-react";
import { toast } from "sonner";

export function CTASection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
    toast.success("You're on the list!", {
      description: "We'll reach out when early access opens.",
    });
  };

  return (
    <section className="relative py-24 lg:py-36 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1A0E08] via-[#111118] to-[#080D1A]" />

      {/* Glow blobs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[450px] rounded-full bg-[#FF6B35]/10 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] rounded-full bg-[#4F8EF7]/8 blur-[110px] pointer-events-none" />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />

      <div className="container relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-2xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase bg-[#FF6B35]/15 text-[#FF9A6C] border border-[#FF6B35]/25 mb-8">
            <Zap className="w-3 h-3" />
            Early Access Now Open
          </div>

          <h2
            className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-[0.95] tracking-tight mb-6"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Stop logging.
            <br />
            <span className="text-ember-gradient">Start training.</span>
          </h2>

          <p className="text-lg text-white/55 max-w-lg mx-auto leading-relaxed mb-10">
            Join athletes who train with a coach that actually knows them. Strong AI is available on iOS, Android, and Web.
          </p>

          {/* Email form */}
          {!submitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-8">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-5 py-3.5 rounded-xl bg-white/[0.07] border border-white/[0.12] text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#FF6B35]/50 focus:bg-white/[0.09] transition-all"
              />
              <Button
                type="submit"
                className="bg-[#FF6B35] hover:bg-[#e85c28] text-white font-semibold px-6 py-3.5 h-auto shadow-xl shadow-orange-900/40 hover:shadow-orange-900/60 transition-all duration-200 group whitespace-nowrap"
              >
                Get Early Access
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          ) : (
            <div className="flex items-center justify-center gap-2 mb-8 text-green-400">
              <CheckCircle className="w-5 h-5" />
              <span className="font-semibold">You're on the list — we'll be in touch!</span>
            </div>
          )}

          <p className="text-xs text-white/25 mb-10">No spam. Unsubscribe any time.</p>

          {/* Platform badges */}
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { icon: Apple, label: "iOS" },
              { icon: Globe, label: "Android" },
              { icon: Globe, label: "Web" },
            ].map((platform) => (
              <div
                key={platform.label}
                className="flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm text-white/45 border border-white/[0.06]"
              >
                <platform.icon className="w-3.5 h-3.5" />
                {platform.label}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] py-12 bg-[#0A0A10]">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#FF6B35] to-[#C44D1E] flex items-center justify-center shadow-lg shadow-orange-900/30">
              <Zap className="w-3.5 h-3.5 text-white fill-white" />
            </div>
            <span
              className="text-base font-bold tracking-tight text-white"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Strong<span className="text-[#FF6B35]">AI</span>
            </span>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {["Privacy Policy", "Terms of Service", "Contact"].map((link) => (
              <a
                key={link}
                href="#"
                className="text-sm text-white/35 hover:text-white/65 transition-colors"
              >
                {link}
              </a>
            ))}
          </nav>

          {/* Copyright */}
          <div className="text-sm text-white/25">
            © {new Date().getFullYear()} Strong AI. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
