/*
 * Strong AI — CTA Section + Footer
 * Light theme with blue accents
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
    <section className="relative py-24 lg:py-36 overflow-hidden bg-blue-50">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50 to-blue-100" />

      <div className="container relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-2xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase bg-blue-100 text-blue-700 border border-blue-200 mb-8">
            <Zap className="w-3 h-3" />
            Early Access Now Open
          </div>

          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-black leading-[0.95] tracking-tight mb-6">
            Stop logging.
            <br />
            <span className="text-blue-gradient">Start training.</span>
          </h2>

          <p className="text-lg text-gray-600 max-w-lg mx-auto leading-relaxed mb-10">
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
                className="flex-1 px-5 py-3.5 rounded-xl bg-white border border-gray-300 text-black placeholder-gray-400 text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
              />
              <Button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3.5 h-auto shadow-lg hover:shadow-xl transition-all duration-200 group whitespace-nowrap"
              >
                Get Early Access
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          ) : (
            <div className="flex items-center justify-center gap-2 mb-8 text-green-600">
              <CheckCircle className="w-5 h-5" />
              <span className="font-semibold">You're on the list — we'll be in touch!</span>
            </div>
          )}

          <p className="text-xs text-gray-500 mb-10">No spam. Unsubscribe any time.</p>

          {/* Platform badges */}
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { icon: Apple, label: "iOS" },
              { icon: Globe, label: "Android" },
              { icon: Globe, label: "Web" },
            ].map((platform) => (
              <div
                key={platform.label}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-white text-sm text-gray-600 border border-gray-200 shadow-sm"
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
    <footer className="relative border-t border-gray-200 py-12 bg-white">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-blue-600 flex items-center justify-center shadow-md">
              <Zap className="w-3.5 h-3.5 text-white fill-white" />
            </div>
            <span className="text-base font-bold tracking-tight text-black">
              Strong<span className="text-blue-600">AI</span>
            </span>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {["Privacy Policy", "Terms of Service", "Contact"].map((link) => (
              <a
                key={link}
                href="#"
                className="text-sm text-gray-500 hover:text-black transition-colors"
              >
                {link}
              </a>
            ))}
          </nav>

          {/* Copyright */}
          <div className="text-sm text-gray-500">
            © {new Date().getFullYear()} Strong AI. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
