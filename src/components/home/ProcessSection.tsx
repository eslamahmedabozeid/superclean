import React from "react";
import Image from "next/image";

interface ProcessStep {
  step: string;
  imageSrc: string;
  iconSrc: string;
  title: string;
  description: string;
}

export default function ProcessSection() {
  const steps: ProcessStep[] = [
    {
      step: "01",
      imageSrc: "/image/process/column-01.png",
      iconSrc: "/image/process/icons/calendar.svg",
      title: "Schedule Pickup",
      description: "Curated experience tailored to your wardrobe needs.",
    },
    {
      step: "02",
      imageSrc: "/image/process/column-02.png",
      iconSrc: "/image/process/icons/truck.svg",
      title: "We Pick Up",
      description: "We preserve your garments in bespoke leather carrier bags.",
    },
    {
      step: "03",
      imageSrc: "/image/process/column-03.png",
      iconSrc: "/image/process/icons/broom.svg",
      title: "Cleaned Fresh",
      description: "Restoring original texture and hand-feel of each fiber.",
    },
    {
      step: "04",
      imageSrc: "/image/process/column-04.png",
      iconSrc: "/image/process/icons/route.svg",
      title: "Delivered Fresh",
      description: "Arrives in signature packaging, immaculate.",
    },
  ];

  return (
    <section className="w-full bg-white border-b border-[#EBEBEB]">
      {/* Section Header */}
      <div className="py-20 sm:py-24 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-[56px] font-normal tracking-[0.04em] text-[#0A0C0C] uppercase">
          THE SUPER CLEAN PROCESS
        </h2>
        <div className="w-[80px] h-[2px] bg-[#0A0C0C] mx-auto mt-4" />
      </div>

      {/* 4 Process Columns (Edge-to-Edge) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full">
        {steps.map((item, index) => (
          <div
            key={index}
            className="relative w-full h-[540px] sm:h-[600px] lg:h-[680px] overflow-hidden group "
          >
            {/* Background Image */}
            <Image
              src={item.imageSrc}
              alt={item.title}
              fill
              className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            />

            {/* Dark Gradient Overlay for Contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/25" />

            {/* Top Step Number */}
            <div className="absolute top-8 sm:top-10 left-8 sm:left-15 z-10">
              <span className="text-5xl sm:text-6xl lg:text-[64px] font-[200] text-white/70 tracking-tight font-sans">
                {item.step}
              </span>
            </div>

            {/* Bottom Content Block */}
            <div className="absolute bottom-8 sm:bottom-10 left-8 sm:left-10 right-8 sm:right-10 z-10">
              {/* Icon */}
              <div className="w-6 h-6 flex items-center justify-start mb-3">
                <Image
                  src={item.iconSrc}
                  alt={item.title}
                  width={20}
                  height={20}
                  className="w-5 h-5 object-contain brightness-0 invert"
                />
              </div>

              {/* Title */}
              <h3 className="text-white text-[18px] sm:text-[19px] font-normal tracking-tight">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-white/80 text-[14px] sm:text-[14px] font-normal mt-1.5 leading-[1.5] max-w-[260px]">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
