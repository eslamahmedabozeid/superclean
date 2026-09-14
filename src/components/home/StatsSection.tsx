import React from "react";

export default function StatsSection() {
  const stats = [
    {
      value: "15,000+",
      label: "Happy Customers",
    },
    {
      value: "50+ Boutique",
      label: "Locations",
    },
    {
      value: "24/7 Dedicated",
      label: "Concierge Support",
    },
    {
      value: "99.9%",
      label: "Satisfaction Rate",
    },
  ];

  return (
    <section className="w-full bg-white border-b border-[#EBEBEB]">
      <div className="mx-auto px-6 sm:px-8 lg:px-12 py-12 sm:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6 text-center">
          {stats.map((item, index) => (
            <div key={index} className="flex flex-col items-center justify-center">
              <span className="text-2xl sm:text-3xl lg:text-[24px] font-normal tracking-tight text-[#0A0C0C]">
                {item.value}
              </span>
              <span className="text-xs sm:text-[16px] font-normal mt-2 tracking-normal text-[#9A9A9A]">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
