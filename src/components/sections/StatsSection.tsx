import React from "react";
import StatsCounter, { StatConfig } from "./StatsCounter";

export default function StatsSection() {
  const statsConfig: StatConfig[] = [
    {
      target: 15000,
      decimals: 0,
      suffix: "+",
      label: "Happy Customers",
    },
    {
      target: 50,
      decimals: 0,
      suffix: "+ Boutique",
      label: "Locations",
    },
    {
      target: 24,
      decimals: 0,
      suffix: "/7 Dedicated",
      label: "Concierge Support",
    },
    {
      target: 99.9,
      decimals: 1,
      suffix: "%",
      label: "Satisfaction Rate",
    },
  ];

  return (
    <section className="w-full bg-white border-b border-[#EBEBEB]">
      <div className="w-full px-5 sm:px-10 md:px-16 lg:px-20 xl:px-28 py-10 sm:py-16">
        <StatsCounter statsConfig={statsConfig} />
      </div>
    </section>
  );
}
