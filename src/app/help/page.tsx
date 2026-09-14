import React from "react";
import HelpHeroSection from "@/components/sections/HelpHeroSection";
import HelpContactCardsSection from "@/components/sections/HelpContactCardsSection";

export default function HelpPage() {
  return (
    <div className="w-full bg-white">
      <HelpHeroSection />
      <HelpContactCardsSection />
    </div>
  );
}
