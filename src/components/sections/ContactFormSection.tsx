import React from "react";
import Image from "next/image";
import { FadeIn, UnderlineReveal, ScaleIn } from "@/components/ui/MotionReveal";
import ContactFormInteractive from "./ContactFormInteractive";

export default function ContactFormSection() {
  return (
    <section className="w-full bg-white py-14 sm:py-20 lg:py-28 border-b border-[#EBEBEB]">
      <div className="w-full px-5 sm:px-10 md:px-16 lg:px-24 xl:px-28 mx-auto max-w-[1500px]">
        {/* Section Header */}
        <FadeIn
          direction="up"
          distance={25}
          duration={0.8}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-normal tracking-tight sm:tracking-[0.04em] text-[#0A0C0C] uppercase">
            CONTACT US
          </h2>
          <UnderlineReveal className="w-[60px] sm:w-[80px] h-[2px] bg-[#0A0C0C] mx-auto mt-3.5 sm:mt-4" />
        </FadeIn>

        {/* 2-Column Layout: Packaging Image + Form Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Left Column: Image */}
          <ScaleIn
            duration={1}
            initialScale={1.04}
            className="lg:col-span-5 relative w-full min-h-[380px] sm:min-h-[460px] lg:min-h-full rounded-[2px] overflow-hidden bg-neutral-900"
          >
            <Image
              src="/image/help/2.png"
              alt="SuperClean Signature Garment Packaging"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
          </ScaleIn>

          {/* Right Column: Interactive Contact Form Component */}
          <ContactFormInteractive />
        </div>
      </div>
    </section>
  );
}
