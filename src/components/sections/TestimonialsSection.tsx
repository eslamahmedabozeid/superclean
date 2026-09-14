"use client";

import React, { useState, useEffect } from "react";

interface Testimonial {
  platform: string;
  comment: string;
  name: string;
  role: string;
}

export default function TestimonialsSection() {
  const testimonials: Testimonial[] = [
    {
      platform: "App Store Review",
      comment:
        "I really appreciate how straightforward the laundry service is and how quickly their customer support responds. I can't see myself managing without it. In a city like KSA where convenience rules, this is absolute perfection.",
      name: "ABDULLAH ALQAHTANI",
      role: "Executive Tech Lead",
    },
    {
      platform: "Google Review",
      comment:
        "Super Clean has transformed my weekly routine. The garments come back impeccable every single time. True five-star concierge service. They handle high-end linen and traditional silks with complete mastery.",
      name: "MOHAMMED ALHARBI",
      role: "Private Investor",
    },
    {
      platform: "Trustpilot Review",
      comment:
        "The pickup was on time, tracking was seamless, and my suits came back perfectly pressed. Exceptional service in every detail. It sets a new standard for luxury garment care in the region.",
      name: "FAISAL ALOTAIBI",
      role: "Creative Director",
    },
    {
      platform: "App Store Review",
      comment:
        "Their attention to detail with bespoke cashmere and delicate embroidery is unmatched. Delivery is always punctual with pristine signature packaging. Truly the gold standard.",
      name: "NOURA AL-SUDIARI",
      role: "Fashion Stylist & Collector",
    },
    {
      platform: "VIP Concierge Review",
      comment:
        "White-glove dry cleaning that delivers on every promise. The custom leather carrier bags and botanical care make it a pleasure every week. Unrivaled consistency.",
      name: "KHALID AL-DOSARI",
      role: "Managing Partner",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [isPaused, setIsPaused] = useState(false);

  // Responsive items per page
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

  // Autoplay functionality (every 3.5 seconds)
  useEffect(() => {
    if (isPaused || maxIndex <= 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 3500);

    return () => clearInterval(interval);
  }, [isPaused, maxIndex]);

  return (
    <section className="w-full bg-white py-14 sm:py-20 lg:py-30 border-b border-[#EBEBEB] overflow-hidden">
      <div className="w-full px-5 sm:px-10 md:px-16 lg:px-24 xl:px-28">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-16 lg:mb-24 px-4">
          <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-normal tracking-tight sm:tracking-[0.04em] text-[#0A0C0C] uppercase">
            WHAT OUR CLIENTS SAY
          </h2>
          <div className="w-[60px] sm:w-[80px] h-[2px] bg-[#0A0C0C] mx-auto mt-3.5 sm:mt-4" />
        </div>

        {/* Testimonials Autoplay Slider Container */}
        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Slider Viewport */}
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
                      {/* Quote mark & Platform */}
                      <div className="flex items-center gap-2 mb-3 sm:mb-4">
                        <span className="text-[#9A9A9A] text-xl font-serif leading-none select-none">
                          &ldquo;
                        </span>
                        <span className="text-[14px] sm:text-[16px] text-[#0A0C0C] font-normal">
                          {item.platform}
                        </span>
                      </div>

                      {/* Comment */}
                      <p className="text-[13px] sm:text-[15px] text-[#7A7A7A] font-normal leading-[1.65] mb-6 sm:mb-8 min-h-[90px] sm:min-h-[110px]">
                        {item.comment}
                      </p>
                    </div>

                    {/* Author Info */}
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
        </div>
      </div>
    </section>
  );
}
