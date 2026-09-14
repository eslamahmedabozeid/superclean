import React from "react";
import Image from "next/image";

interface FeatureItem {
  label: string;
  description: string;
}

export default function WhySuperCleanSection() {
  const features: FeatureItem[] = [
    {
      label: "24H TURNAROUND",
      description:
        "Collection to doorstep in 24 hours. Same-day processing, configured to your schedule.",
    },
    {
      label: "FULLY INSURED",
      description:
        "500 SAR coverage per garment. Your collection, fully protected.",
    },
    {
      label: "REAL-TIME GPS",
      description:
        "From dispatch to doorstep. Live-status tracking from your personal dashboard.",
    },
    {
      label: "ECO-FRIENDLY",
      description:
        "Organic surfactants. Low-impact technology. Safe on stitching, gentle on the planet.",
    },
  ];

  return (
    <section className="relative w-full bg-white border-b border-[#EBEBEB] overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px] lg:min-h-[680px]">
        {/* Left Column: Title & Feature Breakdown */}
        <div className="flex flex-col justify-center px-5 sm:px-10 md:px-16 lg:px-20 xl:px-24 py-14 sm:py-20 lg:py-24">
          <div className="w-full max-w-xl mx-auto">
            {/* Centered Title & Underline */}
            <div className="text-center mb-10 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl lg:text-[48px] font-normal tracking-tight text-[#0A0C0C]">
                Why Super Clean
              </h2>
              <div className="w-[60px] sm:w-[80px] h-[2px] bg-[#0A0C0C] mx-auto mt-3.5 sm:mt-4" />
            </div>

            {/* Feature Rows */}
            <div className="divide-y divide-[#EBEBEB] border-t border-b border-[#EBEBEB]">
              {features.map((item, index) => (
                <div
                  key={index}
                  className="py-5 sm:py-7 flex flex-col sm:flex-row sm:items-start gap-1.5 sm:gap-8"
                >
                  <span className="w-full sm:w-[180px] lg:w-[200px] shrink-0 text-[13px] sm:text-[14px] font-normal tracking-[0.05em] text-[#0A0C0C] uppercase">
                    {item.label}
                  </span>
                  <p className="text-[13px] sm:text-[14px] text-[#7A7A7A] font-normal leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Architectural Garment Runway Photography */}
        <div className="relative w-full min-h-[340px] sm:min-h-[480px] lg:min-h-full bg-neutral-900 overflow-hidden">
          <Image
            src="/image/photo-right.png"
            alt="Why Super Clean - Luxury Garment Gallery"
            fill
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  );
}
