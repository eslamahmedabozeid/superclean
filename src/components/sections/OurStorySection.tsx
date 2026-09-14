import React from "react";
import Image from "next/image";

export default function OurStorySection() {
  return (
    <section className="relative w-full bg-white  overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px] lg:min-h-[680px]">
        {/* Left Column: Workshop Tailor & Steam Iron Craftsmanship Photography */}
        <div className="relative w-full min-h-[360px] sm:min-h-[480px] lg:min-h-full bg-neutral-900 overflow-hidden">
          <Image
            src="/image/about/2.png"
            alt="Our Story - Craftsmanship and Heritage"
            fill
            priority
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>

        {/* Right Column: Story Typography & Narrative */}
        <div className="flex flex-col justify-center px-5 sm:px-10 md:px-16 lg:px-20 xl:px-24 py-14 sm:py-20 lg:py-24">
          <div className="w-full max-w-xl">
            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] xl:text-[44px] font-normal tracking-tight text-[#0A0C0C] uppercase leading-none">
              OUR STORY
            </h2>

            {/* Sub-label */}
            <p className="text-[12px] sm:text-[12px] font-normal tracking-[0.14em] text-[#9A9A9A] uppercase mt-3 mb-8 sm:mb-10">
              SINCE 2003
            </p>

            {/* Narrative Paragraphs */}
            <div className="space-y-6 text-[14px] sm:text-[16px] lg:text-[16px] text-[#555] font-normal leading-[1.75]">
              <p>
                Super Clean was founded with a simple vision: to redefine fabric
                care through exceptional quality, attention to detail, and a
                seamless customer experience.
              </p>

              <p>
                We believe every garment deserves expert treatment. From
                everyday essentials to luxury pieces, our team combines advanced
                care techniques with meticulous craftsmanship to preserve the
                quality, elegance, and longevity of every item we handle.
              </p>

              <p>
                Today, Super Clean continues to set a higher standard for premium
                fabric care across Saudi Arabia, delivering convenience,
                reliability, and uncompromising excellence with every order.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
