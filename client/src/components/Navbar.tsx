/*
 * Strong AI — Navbar Component
 * Light theme with blue accent, clean and minimal
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm"
          : "bg-white"
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <img
              src="/manus-storage/output_936045-removebg_3799a138.png"
              alt="Strong AI"
              className="w-8 h-8 object-contain group-hover:opacity-80 transition-opacity"
            />
            <span className="text-lg font-bold tracking-tight text-black">
              Strong<span className="text-blue-600">AI</span>
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-600 hover:text-black transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-blue-600 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              variant="ghost"
              size="sm"
              className="text-gray-600 hover:text-black hover:bg-gray-100"
            >
              Sign In
            </Button>
            <Button
              size="sm"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-md hover:shadow-lg transition-all duration-200"
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
            <span className={`w-5 h-0.5 bg-black transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`w-5 h-0.5 bg-black transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`w-5 h-0.5 bg-black transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 border-t border-gray-200 ${
            mobileOpen ? "max-h-72 pb-4" : "max-h-0"
          }`}
        >
          <nav className="flex flex-col gap-1 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="px-2 py-2.5 text-sm font-medium text-gray-600 hover:text-black hover:bg-gray-100 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="flex flex-col gap-2 mt-3 pt-3 border-t border-gray-200">
              <Button variant="ghost" size="sm" className="text-gray-600 hover:text-black justify-start">
                Sign In
              </Button>
              <Button
                size="sm"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold"
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
