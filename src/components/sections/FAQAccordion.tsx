"use client";

import React, { useState } from "react";
import { Plus, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { LUXURY_EASE } from "@/components/ui/MotionReveal";

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  faqs: FAQItem[];
}

export default function FAQAccordion({ faqs }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-3 sm:space-y-3.5">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;

        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.65,
              delay: index * 0.08,
              ease: LUXURY_EASE,
            }}
            className={`bg-white border rounded-[2px] transition-colors duration-200 overflow-hidden ${
              isOpen ? "border-[#0A0C0C]" : "border-[#EBEBEB] hover:border-neutral-400"
            }`}
          >
            {/* Accordion Question Header */}
            <button
              type="button"
              onClick={() => toggleFAQ(index)}
              className="w-full flex items-center justify-between gap-4 px-6 sm:px-8 py-5 sm:py-5.5 text-left cursor-pointer hover:bg-neutral-50/50 transition-colors"
              aria-expanded={isOpen}
            >
              <span className="text-[18px] sm:text-[16px] md:text-[17px] font-normal text-[#0A0C0C] tracking-tight">
                {faq.question}
              </span>
              <span className="shrink-0 text-neutral-800 transition-transform duration-300">
                {isOpen ? (
                  <X className="w-4 h-4 stroke-[1.75]" />
                ) : (
                  <Plus className="w-4 h-4 stroke-[1.75]" />
                )}
              </span>
            </button>

            {/* Smooth Animated Accordion Answer Body */}
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{
                    duration: 0.35,
                    ease: LUXURY_EASE,
                  }}
                  className="overflow-hidden"
                >
                  <div className="px-6 sm:px-8 pb-5 sm:pb-6 pt-1 text-[13px] sm:text-[14px] text-[#7A7A7A] font-normal leading-[1.65]">
                    <p className="max-w-2xl">{faq.answer}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
}
