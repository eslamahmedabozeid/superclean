import React from "react";
import Image from "next/image";

export default function OurVisionSection() {
  return (
    <section className="relative w-full bg-white overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px] lg:min-h-[680px]">
        {/* Left Column: Luxury Walk-in Wardrobe Photography */}
        <div className="relative w-full min-h-[360px] sm:min-h-[480px] lg:min-h-full bg-neutral-900 overflow-hidden">
          <Image
            src="/image/about/4.png"
            alt="Our Vision - The Future of Luxury Fabric Care"
            fill
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>

        {/* Right Column: Vision Typography & Narrative */}
        <div className="flex flex-col justify-center px-5 sm:px-10 md:px-16 lg:px-20 xl:px-24 py-14 sm:py-20 lg:py-24">
          <div className="w-full max-w-xl">
            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] xl:text-[44px] font-normal tracking-tight text-[#0A0C0C] uppercase leading-none mb-8 sm:mb-10">
              OUR VISION
            </h2>

            {/* Narrative Paragraphs */}
            <div className="space-y-6 text-[14px] sm:text-[16px] lg:text-[16px] text-[#555] font-normal leading-[1.75]">
              <p>
                Our vision is to become Saudi Arabia&apos;s most trusted premium
                fabric care brand, recognized for setting new standards in
                quality, innovation, and customer experience.
              </p>

              <p>
                We aspire to transform the way garment care is experienced by
                combining advanced technology, skilled craftsmanship, and
                exceptional service to protect every garment while exceeding
                customer expectations at every stage of the journey.
              </p>

              <p>
                As we continue to grow, Super Clean aims to become the preferred
                choice for premium fabric care, delivering excellence, trust,
                and lasting value to customers across the Kingdom for generations
                to come.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
