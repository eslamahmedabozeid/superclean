import React from "react";
import Image from "next/image";

export default function DownloadAppSection() {
  return (
    <section className="relative w-full bg-white border-b  overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 ">
        {/* Left Column: Full-Bleed iPhone Mockup on Stone (Edge-to-Edge 50% split) */}
        <div className="relative w-full lg:min-h-full bg-neutral-900 overflow-hidden">
          <img className="w-full h-full object-cover" src="/image/downloadapp/FreeiPhoneAir.png" alt="SuperClean App on iPhone" />
        </div>

        {/* Right Column: Title, Description & Store Actions */}
        <div className="flex flex-col items-center justify-center text-center px-5 sm:px-10 md:px-16 lg:px-20 xl:px-24 py-14 sm:py-20 lg:py-24">
          <div className="mx-auto flex flex-col items-center w-full max-w-lg">
            {/* Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-[50px] xl:text-[56px] font-normal tracking-tight text-[#0A0C0C] leading-[1.1]">
              GET THE SUPER CLEAN
              EXPERIENCE
            </h2>

            {/* Description */}
            <p className="text-[14px] sm:text-[20px] text-[#4A4D4D] font-normal leading-[1.65] mt-5 mb-8 sm:mb-10 max-w-[440px]">
              Enjoy flawless schedules, order tracking, and dedicated service
              right at your fingertips. Available now on your favorite store.
            </p>

            {/* Action Group: QR Code SVG + App Store Buttons */}
            <div className="flex flex-wrap sm:flex-nowrap items-center justify-center gap-3.5 sm:gap-4">
              {/* Scan to Download QR Box */}
              <div className="border border-[#0A0C0C] p-3 flex flex-col items-center justify-between w-[130px] sm:w-[145px] h-[130px] sm:h-[136px] rounded-none shrink-0 bg-white">
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
                  className="border border-[#0A0C0C] px-4 sm:px-5 py-2 sm:py-2.5 flex items-center gap-3 sm:gap-3.5 w-[175px] sm:w-[190px] h-[58px] sm:h-[60px] rounded-none hover:bg-neutral-50 transition-colors text-left bg-white"
                >
                  <div className="w-5 h-6 flex items-center justify-center shrink-0">
                    <Image
                      src="/image/downloadapp/Iconios.svg"
                      alt="Apple App Store"
                      width={20}
                      height={24}
                      className="w-5 h-auto object-contain"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[11px] sm:text-[12px] text-[#0A0C0C] font-normal leading-tight">
                      Available now
                    </span>
                    <span className="text-[20px] sm:text-[22px] font-normal text-[#0A0C0C] tracking-tight leading-tight mt-0.5">
                      App Store
                    </span>
                  </div>
                </a>

                {/* Google Play Store */}
                <a
                  href="#"
                  className="border border-[#0A0C0C] px-4 sm:px-5 py-2 sm:py-2.5 flex items-center gap-3 sm:gap-3.5 w-[175px] sm:w-[190px] h-[58px] sm:h-[60px] rounded-none hover:bg-neutral-50 transition-colors text-left bg-white"
                >
                  <div className="w-5 h-6 flex items-center justify-center shrink-0">
                    <Image
                      src="/image/downloadapp/Icongoogle.svg"
                      alt="Google Play Store"
                      width={20}
                      height={22}
                      className="w-5 h-auto object-contain"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[11px] sm:text-[12px] text-[#0A0C0C] font-normal leading-tight">
                      Available now
                    </span>
                    <span className="text-[20px] sm:text-[22px] font-normal text-[#0A0C0C] tracking-tight leading-tight mt-0.5">
                      Play Store
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
