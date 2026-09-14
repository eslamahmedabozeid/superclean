import React from "react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative w-full border-b border-neutral-100 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[calc(100vh-5rem)]">
        {/* Left Column: Typography & Action */}
        <div className="flex flex-col justify-center px-8 sm:px-14 md:px-20 lg:px-24 xl:px-28 py-16 sm:py-20 lg:py-0">
          <div className="">
            <h1 className="text-4xl sm:text-5xl lg:text-[58px] xl:text-[68px] font-normal tracking-tight text-neutral-900 leading-[1.08]">
              Exceptional Care for <br />
              Every Garment.
            </h1>

            <p className="mt-7 text-base sm:text-[18px] text-[#0A0C0C] leading-relaxed max-w-[430px]">
              White-glove care for high-end fabrics, tailored garments, and
              precious home linens. Nothing less.
            </p>

            <div className="mt-9">
              <button
                type="button"
                className="inline-flex items-center justify-center gap-3 bg-[#0A0C0C] hover:bg-neutral-800 text-white text-[15px] font-normal tracking-[0.03em] px-7 py-3.5 rounded-[3px] transition-colors shadow-xs cursor-pointer"
              >
                <Image
                  src="/image/download.svg"
                  alt=""
                  width={18}
                  height={18}
                  className="w-[18px] h-[18px] object-contain shrink-0"
                />
                <span className="text-[16px]">Download App</span>
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: Hero Image */}
        <div className="relative w-full min-h-[480px] sm:min-h-[560px] lg:min-h-full bg-neutral-900 overflow-hidden">
          <Image
            src="/image/Hero-Right-Image.png"
            alt="Exceptional Care for Every Garment"
            fill
            className="object-cover object-center"
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  );
}
