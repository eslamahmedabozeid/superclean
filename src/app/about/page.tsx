import React from "react";
import AboutHeroSection from "@/components/sections/AboutHeroSection";
import OurStorySection from "@/components/sections/OurStorySection";

export default function AboutPage() {
  return (
    <div className="w-full bg-white">
      <AboutHeroSection />
      <OurStorySection />
    </div>
  );
}
