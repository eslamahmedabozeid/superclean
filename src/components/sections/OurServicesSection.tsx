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
    <section className="w-full bg-white py-14 sm:py-20 lg:py-28 border-b border-[#EBEBEB]">
      <div className="w-full px-5 sm:px-10 md:px-16 lg:px-24 xl:px-28">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-16 lg:mb-20 px-4">
          <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-normal tracking-tight sm:tracking-[0.04em] text-[#0A0C0C] uppercase">
            OUR SERVICES
          </h2>
          <div className="w-[60px] sm:w-[80px] h-[2px] bg-[#0A0C0C] mx-auto mt-3.5 sm:mt-4" />
        </div>

        {/* 4 Cards Grid with Dark Border & Shadow on Hover */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-7">
          {services.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-[#EBEBEB] p-6 sm:p-8 md:p-10 min-h-[260px] sm:min-h-[300px] lg:min-h-[330px] rounded-[2px] transition-all duration-300 hover:border-[#0A0C0C] hover:shadow-[0_12px_28px_-6px_rgba(0,0,0,0.1)] cursor-pointer flex flex-col justify-start"
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
              <div className="mt-6 sm:mt-10">
                <h3 className="text-[17px] sm:text-[19px] font-normal text-[#0A0C0C] tracking-tight">
                  {item.title}
                </h3>
                <p className="text-[13px] sm:text-[14px] text-[#7A7A7A] font-normal mt-2.5 sm:mt-3 leading-[1.55] max-w-[260px]">
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
