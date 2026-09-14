import React from "react";
import { FadeIn, UnderlineReveal } from "@/components/ui/MotionReveal";
import FAQAccordion, { FAQItem } from "./FAQAccordion";

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

  return (
    <section className="w-full bg-white py-14 sm:py-20 lg:py-28 border-b border-[#EBEBEB]">
      <div className="w-full px-5 sm:px-8 mx-auto max-w-4xl">
        {/* Section Header */}
        <FadeIn
          direction="up"
          distance={25}
          duration={0.8}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-[56px] font-normal tracking-tight sm:tracking-[0.04em] text-[#0A0C0C] uppercase">
            COMMON QUESTIONS
          </h2>
          <UnderlineReveal className="w-[60px] sm:w-[80px] h-[2px] bg-[#0A0C0C] mx-auto mt-3.5 sm:mt-4" />
        </FadeIn>

        {/* Accordion List Component */}
        <FAQAccordion faqs={faqs} />
      </div>
    </section>
  );
}
