import React from "react";
import ServiceHeroSection from "@/components/sections/ServiceHeroSection";
import CleanAndPressSection from "@/components/sections/CleanAndPressSection";
import WashAndFoldSection from "@/components/sections/WashAndFoldSection";
import BedAndBathSection from "@/components/sections/BedAndBathSection";
import PressOnlySection from "@/components/sections/PressOnlySection";
import DownloadAppSection from "@/components/sections/DownloadAppSection";

export default function ServicesPage() {
  return (
    <div className="w-full bg-white">
      <ServiceHeroSection />
      <CleanAndPressSection />
      <WashAndFoldSection />
      <BedAndBathSection />
      <PressOnlySection />
      <DownloadAppSection />
    </div>
  );
}
