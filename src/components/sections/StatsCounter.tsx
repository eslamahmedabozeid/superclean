"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { LUXURY_EASE } from "@/components/ui/MotionReveal";

export interface StatConfig {
  target: number;
  decimals?: number;
  suffix: string;
  label: string;
}

interface StatsCounterProps {
  statsConfig: StatConfig[];
}

export default function StatsCounter({ statsConfig }: StatsCounterProps) {
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
      { threshold: 0.05 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    const duration = 2000;
    let startTime: number | null = null;
    let animationFrameId: number;

    const updateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
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
  }, [hasStarted, statsConfig]);

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
    <div ref={sectionRef} className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 text-center">
      {statsConfig.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: index * 0.1, ease: LUXURY_EASE }}
          className="flex flex-col items-center justify-center py-2"
        >
          <span className="text-xl sm:text-2xl lg:text-[24px] font-normal tracking-tight text-[#0A0C0C]">
            {formatValue(index)}
          </span>
          <span className="text-xs sm:text-[15px] lg:text-[16px] font-normal mt-1.5 sm:mt-2 tracking-normal text-[#9A9A9A]">
            {item.label}
          </span>
        </motion.div>
      ))}
    </div>
  );
}
