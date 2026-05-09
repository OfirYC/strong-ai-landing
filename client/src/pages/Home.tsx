/*
 * Strong AI — Landing Page
 * Light theme with blue accents, clean and modern
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
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <StatsSection />
        <ComparisonSection />
        <TrackerSection />
        <AICoachSection />
        <ProfileSection />
        <HowItWorksSection />
        <TechSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
