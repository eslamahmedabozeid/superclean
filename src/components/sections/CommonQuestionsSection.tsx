"use client";

import React, { useState } from "react";
import { Plus, X } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

export default function CommonQuestionsSection() {
  const faqs: FAQItem[] = [
    {
      question: "What standard payment methods do you accept?",
      answer:
        "We accept major credit cards, Apple Pay, and digital wallet processing seamlessly via our bespoke app.",
    },
    {
      question: "Do you have a premium dry cleaning option?",
      answer:
        "Yes, our couture dry cleaning uses hypoallergenic, organic solvents and bespoke hand pressing tailored for delicate silks, wools, and evening wear.",
    },
    {
      question: "Can I change my pickup address afterward?",
      answer:
        "You can adjust your collection or delivery address directly within the SuperClean app up to one hour before your scheduled valet window.",
    },
    {
      question: "What is your insurance coverage policy?",
      answer:
        "Every order is comprehensively protected with up to 500 SAR coverage per garment against any unforeseen loss or damage.",
    },
    {
      question: "How do you treat custom buttons and delicate accessories?",
      answer:
        "Our master pressers inspect all items upon intake and individually shield or hand-remove bespoke buttons, cufflinks, and delicate trims prior to cleaning.",
    },
  ];

  // Default first question open matching Figma design
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-white py-14 sm:py-20 lg:py-28 border-b border-[#EBEBEB]">
      <div className="w-full px-5 sm:px-8 mx-auto max-w-4xl">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-[56px] font-normal tracking-tight sm:tracking-[0.04em] text-[#0A0C0C] uppercase">
            COMMON QUESTIONS
          </h2>
          <div className="w-[60px] sm:w-[80px] h-[2px] bg-[#0A0C0C] mx-auto mt-3.5 sm:mt-4" />
        </div>

        {/* Accordion List */}
        <div className="space-y-3 sm:space-y-3.5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="bg-white border border-[#EBEBEB] rounded-[2px] transition-all duration-200 overflow-hidden"
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
                  <span className="shrink-0 text-neutral-800">
                    {isOpen ? (
                      <X className="w-4 h-4 stroke-[1.75]" />
                    ) : (
                      <Plus className="w-4 h-4 stroke-[1.75]" />
                    )}
                  </span>
                </button>

                {/* Accordion Answer Body */}
                {isOpen && (
                  <div className="px-6 sm:px-8 pb-5 sm:pb-6 pt-1 text-[13px] sm:text-[14px] text-[#7A7A7A] font-normal leading-[1.65] animate-in fade-in slide-in-from-top-1 duration-200">
                    <p className="max-w-2xl">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
