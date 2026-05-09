/*
 * Strong AI — Navbar Component
 * Design: Frosted glass sticky nav, transitions from transparent to glass on scroll
 * Colors: Dark background, ember CTA button
 */

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Tracker", href: "#tracker" },
    { label: "AI Coach", href: "#ai-coach" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Tech", href: "#tech" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-xl bg-[#111118]/80 border-b border-white/[0.06] shadow-lg shadow-black/30"
          : "bg-transparent"
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between h-16 md:h-18">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#FF6B35] to-[#C44D1E] flex items-center justify-center shadow-lg shadow-orange-900/40 group-hover:shadow-orange-900/60 transition-shadow">
              <Zap className="w-4 h-4 text-white fill-white" />
            </div>
            <span
              className="text-lg font-bold tracking-tight text-white"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Strong<span className="text-[#FF6B35]">AI</span>
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-white/60 hover:text-white transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[#FF6B35] group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              variant="ghost"
              size="sm"
              className="text-white/70 hover:text-white hover:bg-white/5"
            >
              Sign In
            </Button>
            <Button
              size="sm"
              className="bg-[#FF6B35] hover:bg-[#e85c28] text-white font-semibold shadow-lg shadow-orange-900/30 hover:shadow-orange-900/50 transition-all duration-200"
            >
              Get Early Access
            </Button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span className={`w-5 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`w-5 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`w-5 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            mobileOpen ? "max-h-72 pb-4" : "max-h-0"
          }`}
        >
          <nav className="flex flex-col gap-1 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="px-2 py-2.5 text-sm font-medium text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="flex flex-col gap-2 mt-3 pt-3 border-t border-white/[0.08]">
              <Button variant="ghost" size="sm" className="text-white/70 hover:text-white justify-start">
                Sign In
              </Button>
              <Button
                size="sm"
                className="bg-[#FF6B35] hover:bg-[#e85c28] text-white font-semibold"
              >
                Get Early Access
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
