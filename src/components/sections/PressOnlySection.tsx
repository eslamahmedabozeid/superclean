import React from "react";
import Image from "next/image";
import { FadeIn, StaggerContainer, StaggerItem, CardLift } from "@/components/ui/MotionReveal";

interface FeatureCard {
  title: string;
  description: string;
}

export default function PressOnlySection() {
  const features: FeatureCard[] = [
    {
      title: "STEAM & HAND PRESS",
      description: "Perfect mix of efficiency and quality.",
    },
    {
      title: "PER-PIECE PRICING",
      description: "Fair rates structured by item.",
    },
    {
      title: "SAME-DAY SERVICE",
      description: "Urgent collections processed immediately.",
    },
    {
      title: "NO MINIMUM ORDER",
      description: "No order is too small for our expert team.",
    },
  ];

  return (
    <section className="w-full bg-[#F5F5F5] py-10 sm:py-16 lg:py-20 border-b border-[#EDEDED]">
      <div className="w-full px-5 sm:px-10 md:px-16 lg:px-24 xl:px-28 mx-auto max-w-[1600px]">
        {/* Top Showcase Image Card */}
        <FadeIn
          direction="up"
          distance={30}
          duration={0.85}
          className="relative w-full h-[360px] sm:h-[460px] md:h-[500px] lg:h-[540px] rounded-[3px] overflow-hidden group bg-neutral-900"
        >
          {/* Background Image */}
          <Image
            src="/image/service/fife.png"
            alt="Press Only - Expert Steaming and Hand Pressing"
            fill
            className="object-cover object-center transition-transform duration-700 rounded-[4px] ease-out group-hover:scale-[1.02]"
            sizes="(max-width: 1280px) 100vw, 1400px"
          />

          {/* Dark Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-transparent" />

          {/* Bottom Left Content Overlay */}
          <div className="absolute bottom-6 sm:bottom-10 md:bottom-12 left-6 sm:left-10 md:left-12 right-6 sm:right-10 md:right-12 max-w-xl z-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[36px] font-normal tracking-[0.04em] text-white uppercase">
              PRESS ONLY
            </h2>
            <p className="mt-2.5 sm:mt-3 text-[13px] sm:text-[14px] md:text-[15px] text-white/85 font-normal leading-relaxed max-w-lg">
              Perfect for items laundered at home that demand crisp, flawless
              structure. Every sleeve and seam is monitored by senior press
              masters.
            </p>
          </div>
        </FadeIn>

        {/* 4 Feature Sub-cards Grid */}
        <StaggerContainer
          staggerDelay={0.1}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6 mt-6 sm:mt-16 items-stretch"
        >
          {features.map((item, index) => (
            <StaggerItem key={index} direction="up" distance={25} duration={0.7} className="h-full">
              <CardLift liftY={-3} className="h-full">
                <div className="h-full bg-white border border-[#EBEBEB] p-5 sm:p-6 rounded-[2px] transition-all duration-300 hover:border-[#0A0C0C] flex flex-col justify-start">
                  <h3 className="text-[15px] sm:text-[14px] font-normal tracking-[0.04em] text-[#111] uppercase">
                    {item.title}
                  </h3>
                  <p className="text-[12px] sm:text-[13px] text-[#333] font-normal mt-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </CardLift>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
