import React from "react";
import Image from "next/image";
import { FadeIn, ScaleIn, UnderlineReveal } from "@/components/ui/MotionReveal";

export default function ServiceHeroSection() {
  return (
    <section className="relative w-full h-[400px] sm:h-[480px] lg:h-[540px] flex items-center justify-center overflow-hidden border-b border-[#EBEBEB]">
      {/* Background Image with subtle zoom */}
      <ScaleIn
        duration={1.2}
        initialScale={1.06}
        className="absolute inset-0"
      >
        <Image
          src="/image/service/banner.png"
          alt="Services - Luxury Garment Care"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
      </ScaleIn>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/65" />

      {/* Centered Content */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-5 sm:px-8 text-center flex flex-col items-center justify-center">
        {/* Title */}
        <FadeIn
          direction="up"
          distance={24}
          delay={0.1}
          duration={0.8}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-normal tracking-[0.06em] sm:tracking-[0.08em] text-white uppercase leading-none">
            SERVICES
          </h1>
        </FadeIn>

        {/* White Accent Underline */}
        <UnderlineReveal
          delay={0.25}
          duration={0.8}
          className="w-[60px] sm:w-[80px] h-[1.5px] sm:h-[2px] bg-white mx-auto mt-4 sm:mt-5 mb-5 sm:mb-6"
        />

        {/* Subtitle / Description */}
        <FadeIn
          direction="up"
          distance={18}
          delay={0.35}
          duration={0.8}
        >
          <p className="text-[14px] sm:text-[16px] md:text-[17px] text-white/85 font-normal leading-relaxed max-w-lg mx-auto">
            Premium laundry care designed around your lifestyle. Crafted{" "}
            <br className="hidden sm:inline" />
            with ultimate precision.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
