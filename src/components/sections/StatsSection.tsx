"use client";

import React, { useEffect, useRef, useState } from "react";

interface StatConfig {
  target: number;
  decimals?: number;
  suffix: string;
  label: string;
}

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

  const sectionRef = useRef<HTMLDivElement>(null);
  const [hasStarted, setHasStarted] = useState(false);
  const [counts, setCounts] = useState<number[]>(statsConfig.map(() => 0));

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    const duration = 2000; // 2 seconds count-up duration
    let startTime: number | null = null;
    let animationFrameId: number;

    const updateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Ease-out cubic formula for smooth slowing down at the end
      const easeOut = 1 - Math.pow(1 - progress, 3);

      setCounts(
        statsConfig.map((stat) => {
          return stat.target * easeOut;
        })
      );

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(updateCount);
      } else {
        setCounts(statsConfig.map((stat) => stat.target));
      }
    };

    animationFrameId = requestAnimationFrame(updateCount);

    return () => cancelAnimationFrame(animationFrameId);
  }, [hasStarted]);

  const formatValue = (index: number) => {
    const stat = statsConfig[index];
    const current = counts[index];

    let formattedNumber: string;
    if (stat.decimals && stat.decimals > 0) {
      formattedNumber = current.toFixed(stat.decimals);
    } else {
      formattedNumber = Math.floor(current).toLocaleString("en-US");
    }

    return `${formattedNumber}${stat.suffix}`;
  };

  return (
    <section
      ref={sectionRef}
      className="w-full bg-white border-b border-[#EBEBEB]"
    >
      <div className="w-full px-5 sm:px-10 md:px-16 lg:px-20 xl:px-28 py-10 sm:py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 text-center">
          {statsConfig.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center py-2"
            >
              <span className="text-xl sm:text-2xl lg:text-[24px] font-normal tracking-tight text-[#0A0C0C]">
                {formatValue(index)}
              </span>
              <span className="text-xs sm:text-[15px] lg:text-[16px] font-normal mt-1.5 sm:mt-2 tracking-normal text-[#9A9A9A]">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
