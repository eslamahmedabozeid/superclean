import React from "react";
import Image from "next/image";
import { FadeIn, ScaleIn } from "@/components/ui/MotionReveal";

export default function HeroSection() {
  return (
    <section className="relative w-full border-b border-[#C8C8C8] overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[calc(100vh-5rem)]">
        {/* Left Column: Typography & Action */}
        <div className="flex flex-col justify-center px-5 sm:px-10 md:px-16 lg:px-20 xl:px-28 py-12 sm:py-16 lg:py-0">
          <FadeIn direction="up" distance={35} duration={0.9}>
            <FadeIn direction="up" distance={25} delay={0.1} duration={0.85}>
              <h1 className="text-3xl sm:text-5xl lg:text-[58px] xl:text-[56px] font-normal tracking-tight text-neutral-900 leading-[1.1] sm:leading-[1.08]">
                Exceptional Care for <br />
                Every Garment.
              </h1>
            </FadeIn>

            <FadeIn direction="up" distance={20} delay={0.25} duration={0.85}>
              <p className="mt-5 sm:mt-7 text-[15px] sm:text-[18px] text-[#0A0C0C] leading-relaxed max-w-[430px]">
                White-glove care for high-end fabrics, tailored garments, and
                precious home linens. Nothing less.
              </p>
            </FadeIn>

            <FadeIn direction="up" distance={18} delay={0.4} duration={0.85} className="mt-7 sm:mt-9">
              <button
                type="button"
                className="inline-flex items-center justify-center gap-3 bg-[#0A0C0C] hover:bg-neutral-800 text-white text-[15px] font-normal tracking-[0.03em] px-6 sm:px-7 py-3 sm:py-3.5 rounded-[3px] transition-all duration-300 shadow-xs cursor-pointer hover:shadow-md hover:-translate-y-0.5"
              >
                <Image
                  src="/image/download.svg"
                  alt=""
                  width={18}
                  height={18}
                  className="w-[18px] h-[18px] object-contain shrink-0"
                />
                <span className="text-[15px] sm:text-[16px]">Download App</span>
              </button>
            </FadeIn>
          </FadeIn>
        </div>

        {/* Right Column: Hero Image with subtle scale fade-in */}
        <ScaleIn
          duration={1.2}
          initialScale={1.05}
          className="relative w-full min-h-[360px] sm:min-h-[480px] lg:min-h-full bg-neutral-900 overflow-hidden"
        >
          <Image
            src="/image/Hero-Right-Image.png"
            alt="Exceptional Care for Every Garment"
            fill
            className="object-cover object-center"
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </ScaleIn>
      </div>
    </section>
  );
}
