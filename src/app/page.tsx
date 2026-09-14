import React from "react";
import HeroSection from "@/components/home/HeroSection";
import StatsSection from "@/components/home/StatsSection";
import OurServicesSection from "@/components/home/OurServicesSection";

export default function HomePage() {
  return (
    <div className="w-full bg-white">
      <HeroSection />
      <StatsSection />
      <OurServicesSection />
    </div>
  );
}
