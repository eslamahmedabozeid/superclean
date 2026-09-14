"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { LUXURY_EASE } from "@/components/ui/MotionReveal";

export interface Testimonial {
  platform: string;
  comment: string;
  name: string;
  role: string;
}

interface TestimonialsSliderProps {
  testimonials: Testimonial[];
}

export default function TestimonialsSlider({
  testimonials,
}: TestimonialsSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, testimonials.length - itemsPerPage);

  useEffect(() => {
    if (isPaused || maxIndex <= 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 3500);

    return () => clearInterval(interval);
  }, [isPaused, maxIndex]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.85, delay: 0.15, ease: LUXURY_EASE }}
      className="relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)`,
          }}
        >
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 px-4 sm:px-8 md:px-10 border-r border-[#EBEBEB]"
              style={{ width: `${100 / itemsPerPage}%` }}
            >
              <div className="h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-3 sm:mb-4">
                    <span className="text-[#9A9A9A] text-xl font-serif leading-none select-none">
                      &ldquo;
                    </span>
                    <span className="text-[14px] sm:text-[16px] text-[#0A0C0C] font-normal">
                      {item.platform}
                    </span>
                  </div>

                  <p className="text-[13px] sm:text-[15px] text-[#7A7A7A] font-normal leading-[1.65] mb-6 sm:mb-8 min-h-[90px] sm:min-h-[110px]">
                    {item.comment}
                  </p>
                </div>

                <div className="pt-2">
                  <h4 className="text-[13px] sm:text-[14px] font-normal tracking-[0.06em] text-[#0A0C0C] uppercase">
                    {item.name}
                  </h4>
                  <p className="text-[12px] sm:text-[13px] text-[#9A9A9A] font-normal mt-0.5">
                    {item.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
