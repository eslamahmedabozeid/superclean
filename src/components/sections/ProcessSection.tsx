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
      <div className="py-14 sm:py-20 lg:py-24 px-5 sm:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[56px] font-normal tracking-tight sm:tracking-[0.04em] text-[#0A0C0C] uppercase">
          THE SUPER CLEAN PROCESS
        </h2>
        <div className="w-[60px] sm:w-[80px] h-[2px] bg-[#0A0C0C] mx-auto mt-3.5 sm:mt-4" />
      </div>

      {/* 4 Process Columns (Edge-to-Edge) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full">
        {steps.map((item, index) => (
          <div
            key={index}
            className="relative w-full h-[460px] sm:h-[560px] lg:h-[680px] overflow-hidden group"
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
            <div className="absolute top-6 sm:top-8 lg:top-10 left-6 sm:left-8 lg:left-12 z-10">
              <span className="text-4xl sm:text-5xl lg:text-[64px] font-[200] text-white/70 tracking-tight font-sans">
                {item.step}
              </span>
            </div>

            {/* Bottom Content Block */}
            <div className="absolute bottom-6 sm:bottom-8 lg:bottom-10 left-6 sm:left-8 lg:left-10 right-6 sm:right-8 lg:right-10 z-10">
              {/* Icon */}
              <div className="w-6 h-6 flex items-center justify-start mb-2.5 sm:mb-3">
                <Image
                  src={item.iconSrc}
                  alt={item.title}
                  width={20}
                  height={20}
                  className="w-5 h-5 object-contain brightness-0 invert"
                />
              </div>

              {/* Title */}
              <h3 className="text-white text-[17px] sm:text-[19px] font-normal tracking-tight">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-white/80 text-[13px] sm:text-[14px] font-normal mt-1 leading-[1.5] max-w-[280px]">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
