import React from "react";
import Image from "next/image";

export default function OurMissionSection() {
  return (
    <section className="relative w-full bg-white overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px] lg:min-h-[680px]">
        {/* Left Column: Mission Typography & Narrative */}
        <div className="flex flex-col justify-center px-5 sm:px-10 md:px-16 lg:px-20 xl:px-24 py-14 sm:py-20 lg:py-24 order-2 lg:order-1">
          <div className="w-full max-w-xl">
            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] xl:text-[44px] font-normal tracking-tight text-[#0A0C0C] uppercase leading-none mb-8 sm:mb-10">
              OUR MISSION
            </h2>

            {/* Narrative Paragraphs */}
            <div className="space-y-6 text-[14px] sm:text-[16px] lg:text-[16px] text-[#555] font-normal leading-[1.75]">
              <p>
                Super Clean is driven by a clear mission: to elevate fabric care
                across Saudi Arabia through exceptional quality, meticulous
                attention to detail, and a seamless customer experience.
              </p>

              <p>
                We believe every garment deserves professional care. From
                everyday thobes and abayas to luxury garments and delicate
                fabrics, our specialists combine advanced cleaning techniques
                with expert craftsmanship to preserve the quality, elegance, and
                longevity of every piece entrusted to us.
              </p>

              <p>
                Every day, Super Clean remains committed to delivering premium
                fabric care with reliability, convenience, and uncompromising
                excellence, ensuring every customer receives a service
                experience that reflects the highest standards of quality.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Master Craftsman Hand-Pressing Photography */}
        <div className="relative w-full min-h-[360px] sm:min-h-[480px] lg:min-h-full bg-neutral-900 overflow-hidden order-1 lg:order-2">
          <Image
            src="/image/about/3.png"
            alt="Our Mission - Precision and Craftsmanship"
            fill
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  );
}
