/*
 * Strong AI — Landing Page
 * Light theme with blue accents, clean and modern
 */

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import InjuryPreventionSection from "@/components/InjuryPreventionSection";
import HolisticHealthSection from "@/components/HolisticHealthSection";
import ComparisonSection from "@/components/ComparisonSection";
import TrackerSection from "@/components/TrackerSection";
import AICoachSection from "@/components/AICoachSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import TechSection from "@/components/TechSection";
import { CTASection, Footer } from "@/components/CTASection";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <InjuryPreventionSection />
        <HolisticHealthSection />
        <ComparisonSection />
        <TrackerSection />
        <AICoachSection />
        <HowItWorksSection />
        <TechSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
