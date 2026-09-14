import React from "react";
import AboutHeroSection from "@/components/sections/AboutHeroSection";
import OurStorySection from "@/components/sections/OurStorySection";
import OurMissionSection from "@/components/sections/OurMissionSection";
import OurVisionSection from "@/components/sections/OurVisionSection";
import WhySuperCleanSection from "@/components/sections/WhySuperCleanSection";
import ProcessSection from "@/components/sections/ProcessSection";
import DownloadAppSection from "@/components/sections/DownloadAppSection";

export default function AboutPage() {
  return (
    <div className="w-full bg-white">
      <AboutHeroSection />
      <OurStorySection />
      <OurMissionSection />
      <OurVisionSection />
      <WhySuperCleanSection />
      <ProcessSection />
      <DownloadAppSection />
    </div>
  );
}
