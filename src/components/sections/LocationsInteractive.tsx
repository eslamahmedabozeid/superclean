"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { LUXURY_EASE } from "@/components/ui/MotionReveal";

export interface LocationBranch {
  id: number;
  title: string;
  address: string;
  pinPos: { top: string; left: string };
  googleMapsUrl: string;
}

interface LocationsInteractiveProps {
  branches: LocationBranch[];
}

export default function LocationsInteractive({
  branches,
}: LocationsInteractiveProps) {
  const [activeBranch, setActiveBranch] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
      {/* Left Column: Branch Location Cards */}
      <div className="lg:col-span-4 flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: LUXURY_EASE }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-[56px] font-normal tracking-tight text-[#0A0C0C] leading-[1.08] uppercase">
            OUR
            <br />
            LOCATIONS
          </h2>
          <div className="w-[60px] sm:w-[80px] h-[2px] bg-[#0A0C0C] mt-3.5 sm:mt-4 mb-8 sm:mb-10" />
        </motion.div>

        <div className="space-y-4 sm:space-y-5">
          {branches.map((branch, index) => {
            const isActive = activeBranch === branch.id;

            return (
              <motion.div
                key={branch.id}
                initial={{ opacity: 0, x: -25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.75,
                  delay: 0.15 + index * 0.15,
                  ease: LUXURY_EASE,
                }}
                onMouseEnter={() => setActiveBranch(branch.id)}
                onMouseLeave={() => setActiveBranch(null)}
                className={`bg-white border p-6 sm:p-7 rounded-[2px] transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "border-[#0A0C0C] shadow-[0_12px_28px_-6px_rgba(0,0,0,0.08)] translate-x-1"
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
                  className="inline-flex items-center gap-2 text-[13px] font-medium text-[#0A0C0C] mt-4 hover:opacity-75 transition-opacity group"
                >
                  <span>View on Map</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1 duration-200" />
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Right Column: Architectural City Map Box with Pins */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98, y: 20 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 0.1, ease: LUXURY_EASE }}
        className="lg:col-span-8 relative w-full h-[400px] sm:h-[480px] lg:h-[540px] bg-[#F7F7F7] border border-[#0A0C0C] rounded-[2px] overflow-hidden"
      >
        <Image
          src="/image/help/map.png"
          alt="Riyadh Map"
          fill
          className="object-cover object-center opacity-90"
          sizes="(max-width: 1024px) 100vw, 65vw"
        />

        {/* Pin 1 */}
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.8 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 0.35,
            ease: LUXURY_EASE,
          }}
          className="absolute z-20 transition-transform duration-300 hover:scale-110 cursor-pointer"
          style={{
            top: branches[0]?.pinPos.top || "20%",
            left: branches[0]?.pinPos.left || "47%",
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
        </motion.div>

        {/* Pin 2 */}
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.8 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: LUXURY_EASE,
          }}
          className="absolute z-20 transition-transform duration-300 hover:scale-110 cursor-pointer"
          style={{
            top: branches[1]?.pinPos.top || "62%",
            left: branches[1]?.pinPos.left || "72%",
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
        </motion.div>
      </motion.div>
    </div>
  );
}
