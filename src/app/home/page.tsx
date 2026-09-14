import React from "react";
import HeroSection from "@/components/sections/HeroSection";
import StatsSection from "@/components/sections/StatsSection";
import OurServicesSection from "@/components/sections/OurServicesSection";
import ProcessSection from "@/components/sections/ProcessSection";
import WhySuperCleanSection from "@/components/sections/WhySuperCleanSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import DownloadAppSection from "@/components/sections/DownloadAppSection";

export default function HomePage() {
  return (
    <div className="w-full bg-white">
      <HeroSection />
      <StatsSection />
      <OurServicesSection />
      <ProcessSection />
      <WhySuperCleanSection />
      <TestimonialsSection />
      <DownloadAppSection />
    </div>
  );
}
