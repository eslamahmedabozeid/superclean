import React from "react";
import ServiceHeroSection from "@/components/sections/ServiceHeroSection";
import CleanAndPressSection from "@/components/sections/CleanAndPressSection";

export default function ServicesPage() {
  return (
    <div className="w-full bg-white">
      <ServiceHeroSection />
      <CleanAndPressSection />
    </div>
  );
}
