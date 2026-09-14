import React from "react";
import HeroSection from "@/components/home/HeroSection";
import StatsSection from "@/components/home/StatsSection";
import OurServicesSection from "@/components/home/OurServicesSection";
import ProcessSection from "@/components/home/ProcessSection";

export default function HomePage() {
  return (
    <div className="w-full bg-white">
      <HeroSection />
      <StatsSection />
      <OurServicesSection />
      <ProcessSection />
    </div>
  );
}
