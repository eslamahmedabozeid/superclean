"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface LocationBranch {
  id: number;
  title: string;
  address: string;
  pinPos: { top: string; left: string };
  googleMapsUrl: string;
}

export default function OurLocationsSection() {
  const branches: LocationBranch[] = [
    {
      id: 1,
      title: "Riyadh Branch",
      address: "King Fahd Road Riyadh, Saudi Arabia",
      pinPos: { top: "20%", left: "47%" },
      googleMapsUrl: "https://maps.google.com/?q=Riyadh+Saudi+Arabia",
    },
    {
      id: 2,
      title: "Riyadh Branch",
      address: "King Fahd Road Riyadh, Saudi Arabia",
      pinPos: { top: "62%", left: "72%" },
      googleMapsUrl: "https://maps.google.com/?q=Riyadh+Saudi+Arabia",
    },
  ];

  const [activeBranch, setActiveBranch] = useState<number | null>(null);

  return (
    <section className="w-full bg-[#F5F5F5] py-14 sm:py-20 lg:py-28 border-b border-[#EDEDED] overflow-hidden">
      <div className="w-full px-5 sm:px-10 md:px-16 lg:px-24 xl:px-28 mx-auto max-w-[1600px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Column: Title & Branch Location Cards */}
          <div className="lg:col-span-4 flex flex-col justify-center">
            {/* Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-[56px] font-normal tracking-tight text-[#0A0C0C] leading-[1.08] uppercase">
              OUR
              <br />
              LOCATIONS
            </h2>

            {/* Accent Underline */}
            <div className="w-[60px] sm:w-[80px] h-[2px] bg-[#0A0C0C] mt-3.5 sm:mt-4 mb-8 sm:mb-10" />

            {/* Location Cards */}
            <div className="space-y-4 sm:space-y-5">
              {branches.map((branch) => {
                const isActive = activeBranch === branch.id;

                return (
                  <div
                    key={branch.id}
                    onMouseEnter={() => setActiveBranch(branch.id)}
                    onMouseLeave={() => setActiveBranch(null)}
                    className={`bg-white border p-6 sm:p-7 rounded-[2px] transition-all duration-300 cursor-pointer ${isActive
                      ? "border-[#0A0C0C] shadow-[0_12px_28px_-6px_rgba(0,0,0,0.08)]"
                      : "border-[#EBEBEB] hover:border-[#0A0C0C]"
                      }`}
                  >
                    <h3 className="text-[17px] sm:text-[18px] font-normal text-[#0A0C0C] tracking-tight">
                      {branch.title}
                    </h3>
                    <p className="text-[13px] sm:text-[14px] text-[#9A9A9A] font-normal mt-1.5 leading-relaxed">
                      {branch.address}
                    </p>

                    <a
                      href={branch.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[13px] font-medium text-[#0A0C0C] mt-4 hover:opacity-75 transition-opacity"
                    >
                      <span>View on Map</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                    </a>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Architectural City Map Box with Pins */}
          <div className="lg:col-span-8 relative w-full h-[400px] sm:h-[480px] lg:h-[540px] bg-[#F7F7F7] border border-[#0A0C0C] rounded-[2px] overflow-hidden">
            {/* Map Graphic Background */}
            <Image
              src="/image/help/map.png"
              alt="Riyadh Map"
              fill
              className="object-cover object-center opacity-90"
              sizes="(max-width: 1024px) 100vw, 65vw"
            />



            {/* Pin 1 */}
            <div
              className="absolute z-20 transition-transform duration-300 hover:scale-110 cursor-pointer"
              style={{
                top: branches[0].pinPos.top,
                left: branches[0].pinPos.left,
                transform:
                  activeBranch === 1
                    ? "translate(-50%, -100%) scale(1.15)"
                    : "translate(-50%, -100%)",
              }}
              onMouseEnter={() => setActiveBranch(1)}
              onMouseLeave={() => setActiveBranch(null)}
            >
              <div className="relative w-[50px] sm:w-[64px] lg:w-[74px] h-[75px] sm:h-[96px] lg:h-[110px] drop-shadow-[0_10px_20px_rgba(0,0,0,0.4)]">
                <Image
                  src="/image/help/image9.svg"
                  alt="SuperClean Riyadh Pin 1"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* Pin 2 */}
            <div
              className="absolute z-20 transition-transform duration-300 hover:scale-110 cursor-pointer"
              style={{
                top: branches[1].pinPos.top,
                left: branches[1].pinPos.left,
                transform:
                  activeBranch === 2
                    ? "translate(-50%, -100%) scale(1.15)"
                    : "translate(-50%, -100%)",
              }}
              onMouseEnter={() => setActiveBranch(2)}
              onMouseLeave={() => setActiveBranch(null)}
            >
              <div className="relative w-[50px] sm:w-[64px] lg:w-[74px] h-[75px] sm:h-[96px] lg:h-[110px] drop-shadow-[0_10px_20px_rgba(0,0,0,0.4)]">
                <Image
                  src="/image/help/image9.svg"
                  alt="SuperClean Riyadh Pin 2"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
