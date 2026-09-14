import React from "react";
import Image from "next/image";

interface ServiceItem {
  iconSrc: string;
  title: string;
  description: string;
}

export default function OurServicesSection() {
  const services: ServiceItem[] = [
    {
      iconSrc: "/image/icons/tshirt.svg",
      title: "Clean & Press",
      description: "Organic dry cleaning. Bespoke hand pressing.",
    },
    {
      iconSrc: "/image/icons/compress.svg",
      title: "Wash & Fold",
      description: "Each garment washed alone. Folded with precision.",
    },
    {
      iconSrc: "/image/icons/bed.svg",
      title: "Bed & Bath",
      description: "Pristine restoration for towels and bed linens.",
    },
    {
      iconSrc: "/image/icons/Vector.svg",
      title: "Press Only",
      description: "Expert wrinkle elimination. Nothing overlooked.",
    },
  ];

  return (
    <section className="w-full bg-white py-20 sm:py-28 border-b border-[#EBEBEB]">
      <div className="w-full px-8 sm:px-14 md:px-20 lg:px-24 xl:px-28">
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-normal tracking-[0.04em] text-[#0A0C0C] uppercase">
            OUR SERVICES
          </h2>
          <div className="w-14 h-[1.5px] bg-[#0A0C0C] mx-auto mt-4" />
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {services.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-[#EBEBEB] p-8 sm:p-9 md:p-10 min-h-[300px] lg:min-h-[330px] rounded-[2px] transition-all duration-200 hover:border-neutral-400 flex flex-col justify-start"
            >
              {/* Icon */}
              <div className="w-7 h-7 flex items-center justify-start">
                <Image
                  src={item.iconSrc}
                  alt={item.title}
                  width={24}
                  height={24}
                  className="w-6 h-6 object-contain"
                />
              </div>

              {/* Title & Description */}
              <div className="mt-8 sm:mt-10">
                <h3 className="text-[18px] sm:text-[19px] font-normal text-[#0A0C0C] tracking-tight">
                  {item.title}
                </h3>
                <p className="text-[14px] text-[#7A7A7A] font-normal mt-3 leading-[1.55] max-w-[260px]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
