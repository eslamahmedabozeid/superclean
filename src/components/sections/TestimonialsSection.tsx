import React from "react";
import { FadeIn, UnderlineReveal } from "@/components/ui/MotionReveal";
import TestimonialsSlider, { Testimonial } from "./TestimonialsSlider";

export default function TestimonialsSection() {
  const testimonials: Testimonial[] = [
    {
      platform: "App Store Review",
      comment:
        "I really appreciate how straightforward the laundry service is and how quickly their customer support responds. I can't see myself managing without it. In a city like KSA where convenience rules, this is absolute perfection.",
      name: "ABDULLAH ALQAHTANI",
      role: "Executive Tech Lead",
    },
    {
      platform: "Google Review",
      comment:
        "Super Clean has transformed my weekly routine. The garments come back impeccable every single time. True five-star concierge service. They handle high-end linen and traditional silks with complete mastery.",
      name: "MOHAMMED ALHARBI",
      role: "Private Investor",
    },
    {
      platform: "Trustpilot Review",
      comment:
        "The pickup was on time, tracking was seamless, and my suits came back perfectly pressed. Exceptional service in every detail. It sets a new standard for luxury garment care in the region.",
      name: "FAISAL ALOTAIBI",
      role: "Creative Director",
    },
    {
      platform: "App Store Review",
      comment:
        "Their attention to detail with bespoke cashmere and delicate embroidery is unmatched. Delivery is always punctual with pristine signature packaging. Truly the gold standard.",
      name: "NOURA AL-SUDIARI",
      role: "Fashion Stylist & Collector",
    },
    {
      platform: "VIP Concierge Review",
      comment:
        "White-glove dry cleaning that delivers on every promise. The custom leather carrier bags and botanical care make it a pleasure every week. Unrivaled consistency.",
      name: "KHALID AL-DOSARI",
      role: "Managing Partner",
    },
  ];

  return (
    <section className="w-full bg-white py-14 sm:py-20 lg:py-30 border-b border-[#EBEBEB] overflow-hidden">
      <div className="w-full px-5 sm:px-10 md:px-16 lg:px-24 xl:px-28">
        {/* Section Header */}
        <FadeIn
          direction="up"
          distance={25}
          duration={0.8}
          className="text-center mb-10 sm:mb-16 lg:mb-24 px-4"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-normal tracking-tight sm:tracking-[0.04em] text-[#0A0C0C] uppercase">
            WHAT OUR CLIENTS SAY
          </h2>
          <UnderlineReveal className="w-[60px] sm:w-[80px] h-[2px] bg-[#0A0C0C] mx-auto mt-3.5 sm:mt-4" />
        </FadeIn>

        {/* Testimonials Autoplay Slider */}
        <TestimonialsSlider testimonials={testimonials} />
      </div>
    </section>
  );
}
