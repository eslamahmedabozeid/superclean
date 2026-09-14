import React from "react";
import Image from "next/image";
import { FadeIn, ScaleIn, UnderlineReveal, StaggerContainer, StaggerItem } from "@/components/ui/MotionReveal";

export default function TermsPage() {
  const sections = [
    {
      title: "1. Definitions",
      content:
        '"Website" refers to Super Clean and all related digital services, mobile applications, and digital interfaces. "Customer" (also referred to as "user", "you", or "your") refers to any individual or entity browsing, accessing, or purchasing services from this website. "Products" refers to all premium laundry, dry cleaning, pressing, and specialty textile restoration services provided by Super Clean.',
    },
    {
      title: "2. Use of the Website",
      content:
        "To use our digital systems or request pickups, you must be at least 18 years of age. You agree to provide accurate, current, and complete information during registration or order placement. Any unauthorized use of the Website, including but not limited to fraudulent bookings, automated harvesting, or unlawful activities, is strictly prohibited and subject to immediate service termination.",
    },
    {
      title: "3. Orders & Payment",
      content:
        "All dry cleaning and wash-and-fold bookings are subject to final capacity and fabric evaluation. We reserve the absolute right to refuse service for garments that present extreme risk of structural degradation or hazard. Payments must be processed through our authorized digital gateways prior to final drop-off, utilizing accepted credit cards or digital payment solutions.",
    },
    {
      title: "4. Garment Care & Inspection",
      content:
        "Every garment is individually inspected by our textile specialists upon intake. Any pre-existing damage, delicate embellishments, or unique fiber vulnerabilities will be cataloged. While we exercise extreme couture care and adhere to manufacturer care guidelines, Super Clean is not liable for inherent manufacturer flaws or color bleeding caused by non-colorfast dye techniques.",
    },
    {
      title: "5. Pickup & Delivery Protocol",
      content:
        "Valet collection and delivery windows are scheduled via the app. Customers must ensure availability during the confirmed timeframe. Unattended drop-offs requested by the customer are carried out at the customer's sole risk once confirmed delivered by our logistics team.",
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
            src="/image/term/1.png"
            alt="Terms and Conditions - SuperClean Luxury Garment Care"
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
              TERMS & CONDITIONS
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
              Welcome to Super Clean. By accessing this website and purchasing our
              services, you agree to be bound by the following Terms & Conditions.
              Please read them carefully.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Terms Content Body */}
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
