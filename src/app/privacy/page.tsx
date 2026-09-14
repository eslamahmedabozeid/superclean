import React from "react";
import Image from "next/image";
import { FadeIn, ScaleIn, UnderlineReveal, StaggerContainer, StaggerItem } from "@/components/ui/MotionReveal";

export default function PrivacyPage() {
  const sections = [
    {
      title: "1. Collection of Information",
      content:
        "We collect personal information that you voluntarily provide when registering, placing an order, or communicating with us. This may include your name, physical address for pickup/delivery, email address, phone number, and payment details processed through our highly secure payment partners.",
    },
    {
      title: "2. How We Use Your Data",
      content:
        "Your personal information is used directly to facilitate our premium services. This includes coordinating garment pickups, processing dry cleaning and ironing orders, completing drop-off schedules, maintaining active client logs, and ensuring seamless communication through our bespoke application interfaces.",
    },
    {
      title: "3. Information Sharing",
      content:
        "Super Clean will never sell, trade, or rent your personal identification information to third parties. We may share limited operational datasets with trusted logistics and digital infrastructure partners strictly necessary to execute your delivery requests and optimize app performance.",
    },
    {
      title: "4. Security & Retention",
      content:
        "We adopt industry-best data collection, storage, and processing practices alongside robust security measures to protect against unauthorized access, alteration, disclosure, or destruction of your personal credentials and order history stored on our secure servers.",
    },
    {
      title: "5. Your Rights & Preferences",
      content:
        "You maintain full control over your personal data. You may review, update, or request the deletion of your profile details and stored delivery addresses at any time directly through your account settings or by contacting our concierge support desk.",
    },
  ];

  return (
    <div className="w-full bg-white">
      {/* Hero Banner */}
      <section className="relative w-full h-[400px] sm:h-[480px] lg:h-[540px] flex items-center justify-center overflow-hidden border-b border-[#EBEBEB]">
        {/* Background Image with subtle zoom */}
        <ScaleIn
          duration={1.2}
          initialScale={1.06}
          className="absolute inset-0"
        >
          <Image
            src="/image/term/2.png"
            alt="Privacy Policy - SuperClean Luxury Garment Care"
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
              PRIVACY POLICY
            </h1>
          </FadeIn>

          {/* White Accent Underline */}
          <UnderlineReveal
            delay={0.25}
            duration={0.8}
            className="w-[60px] sm:w-[80px] h-[1.5px] sm:h-[2px] bg-white mx-auto mt-4 sm:mt-5 mb-5 sm:mb-6"
          />

          {/* Subtitle */}
          <FadeIn
            direction="up"
            distance={18}
            delay={0.35}
            duration={0.8}
          >
            <p className="text-[14px] sm:text-[16px] md:text-[17px] text-white/85 font-normal leading-relaxed max-w-2xl mx-auto">
              At Super Clean, we are committed to protecting your privacy. This
              Privacy Policy explains how we collect, use, disclose, and safeguard
              your personal information when you use our services.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Privacy Policy Content Body */}
      <section className="w-full bg-white py-14 sm:py-20 lg:py-24">
        <StaggerContainer
          staggerDelay={0.1}
          className="w-full max-w-4xl mx-auto px-5 sm:px-8 space-y-10 sm:space-y-12"
        >
          {sections.map((item, index) => (
            <StaggerItem
              key={index}
              direction="up"
              distance={24}
              duration={0.75}
              className="space-y-3"
            >
              <h2 className="text-[18px] sm:text-[20px] font-medium text-[#0A0C0C] tracking-tight">
                {item.title}
              </h2>
              <p className="text-[14px] sm:text-[15px] text-[#555] font-normal leading-[1.8]">
                {item.content}
              </p>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>
    </div>
  );
}
