import React from "react";
import HeroSection from "@/components/home/HeroSection";
import StatsSection from "@/components/home/StatsSection";

export default function HomePage() {
  return (
    <div className="w-full bg-white">
      <HeroSection />
      <StatsSection />
    </div>
  );
}
