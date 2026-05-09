/*
 * Strong AI — Home Page
 * Design: Dark Athletic Premium — Obsidian & Ember
 * Assembles all landing page sections in order
 */

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import ComparisonSection from "@/components/ComparisonSection";
import TrackerSection from "@/components/TrackerSection";
import AICoachSection from "@/components/AICoachSection";
import ProfileSection from "@/components/ProfileSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import TechSection from "@/components/TechSection";
import { CTASection, Footer } from "@/components/CTASection";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#111118] text-white overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <StatsSection />
      <div className="separator-glow mx-auto max-w-5xl" />
      <ComparisonSection />
      <TrackerSection />
      <AICoachSection />
      <ProfileSection />
      <HowItWorksSection />
      <TechSection />
      <CTASection />
      <Footer />
    </div>
  );
}
