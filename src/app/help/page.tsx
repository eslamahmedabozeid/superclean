import React from "react";
import HelpHeroSection from "@/components/sections/HelpHeroSection";
import HelpContactCardsSection from "@/components/sections/HelpContactCardsSection";
import ContactFormSection from "@/components/sections/ContactFormSection";
import OurLocationsSection from "@/components/sections/OurLocationsSection";
import CommonQuestionsSection from "@/components/sections/CommonQuestionsSection";
import DownloadAppSection from "@/components/sections/DownloadAppSection";

export default function HelpPage() {
  return (
    <div className="w-full bg-white">
      <HelpHeroSection />
      <HelpContactCardsSection />
      <ContactFormSection />
      <OurLocationsSection />
      <CommonQuestionsSection />
      <DownloadAppSection />
    </div>
  );
}
