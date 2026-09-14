import React from "react";
import Image from "next/image";
import { FadeIn, ScaleIn } from "@/components/ui/MotionReveal";

export default function DownloadAppSection() {
  return (
    <section className="relative w-full bg-white border-b overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left Column: Full-Bleed iPhone Mockup on Stone (Edge-to-Edge 50% split) */}
        <ScaleIn
          duration={1.1}
          className="relative w-full lg:min-h-full bg-neutral-900 overflow-hidden"
        >
          <img
            className="w-full h-full object-cover"
            src="/image/downloadapp/FreeiPhoneAir.png"
            alt="SuperClean App on iPhone"
          />
        </ScaleIn>

        {/* Right Column: Title, Description & Store Actions */}
        <div className="flex flex-col items-center justify-center text-center px-5 sm:px-10 md:px-16 lg:px-20 xl:px-24 py-14 sm:py-20 lg:py-24">
          <FadeIn
            direction="up"
            distance={30}
            duration={0.85}
            className="mx-auto flex flex-col items-center w-full max-w-lg"
          >
            {/* Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-[50px] xl:text-[56px] tracking-tight text-[#0A0C0C] leading-[1.1]">
              GET THE SUPER CLEAN
              EXPERIENCE
            </h2>

            {/* Description */}
            <p className="text-[14px] sm:text-[20px] text-[#4A4D4D] font-normal leading-[1.65] mt-5 mb-8 sm:mb-10 max-w-[440px]">
              Enjoy flawless schedules, order tracking, and dedicated service
              right at your fingertips. Available now on your favorite store.
            </p>

            {/* Action Group: QR Code SVG + App Store Buttons */}
            <FadeIn
              direction="up"
              distance={20}
              delay={0.2}
              duration={0.75}
              className="flex flex-wrap sm:flex-nowrap items-center justify-center gap-3.5 sm:gap-4"
            >
              {/* Scan to Download QR Box */}
              <div className="border border-[#0A0C0C] p-3 flex flex-col items-center justify-between w-[130px] sm:w-[145px] h-[130px] sm:h-[136px] rounded-none shrink-0 bg-white hover:shadow-sm transition-shadow">
                <div className="w-[76px] sm:w-[82px] h-[76px] sm:h-[82px] flex items-center justify-center">
                  <Image
                    src="/image/downloadapp/qr-graphic.svg"
                    alt="QR Code"
                    width={82}
                    height={82}
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-[9px] sm:text-[10px] font-normal tracking-[0.08em] text-[#0A0C0C] uppercase select-none mt-1">
                  SCAN TO DOWNLOAD
                </span>
              </div>

              {/* Store Buttons Stack */}
              <div className="flex flex-col gap-2.5 sm:gap-3.5 shrink-0">
                {/* App Store */}
                <a
                  href="#"
                  className="border border-[#0A0C0C] px-4 sm:px-5 py-2 sm:py-2.5 flex items-center gap-3 sm:gap-3.5 w-[175px] sm:w-[190px] h-[58px] sm:h-[60px] rounded-none hover:bg-neutral-900 hover:text-white group transition-all duration-300 text-left bg-white"
                >
                  <div className="w-5 h-6 flex items-center justify-center shrink-0">
                    <Image
                      src="/image/downloadapp/Iconios.svg"
                      alt="Apple App Store"
                      width={20}
                      height={24}
                      className="w-5 h-auto object-contain group-hover:brightness-0 group-hover:invert transition-all"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[11px] sm:text-[12px] text-[#0A0C0C] group-hover:text-white/80 font-normal leading-tight transition-colors">
                      Available now
                    </span>
                    <span className="text-[20px] sm:text-[22px] font-normal text-[#0A0C0C] group-hover:text-white tracking-tight leading-tight mt-0.5 transition-colors">
                      App Store
                    </span>
                  </div>
                </a>

                {/* Google Play Store */}
                <a
                  href="#"
                  className="border border-[#0A0C0C] px-4 sm:px-5 py-2 sm:py-2.5 flex items-center gap-3 sm:gap-3.5 w-[175px] sm:w-[190px] h-[58px] sm:h-[60px] rounded-none hover:bg-neutral-900 hover:text-white group transition-all duration-300 text-left bg-white"
                >
                  <div className="w-5 h-6 flex items-center justify-center shrink-0">
                    <Image
                      src="/image/downloadapp/Icongoogle.svg"
                      alt="Google Play Store"
                      width={20}
                      height={22}
                      className="w-5 h-auto object-contain group-hover:brightness-0 group-hover:invert transition-all"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[11px] sm:text-[12px] text-[#0A0C0C] group-hover:text-white/80 font-normal leading-tight transition-colors">
                      Available now
                    </span>
                    <span className="text-[20px] sm:text-[22px] font-normal text-[#0A0C0C] group-hover:text-white tracking-tight leading-tight mt-0.5 transition-colors">
                      Play Store
                    </span>
                  </div>
                </a>
              </div>
            </FadeIn>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
