"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

export default function ContactFormSection() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const maxChars = 200;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFullName("");
      setEmail("");
      setPhone("");
      setSubject("");
      setMessage("");
    }, 4000);
  };

  return (
    <section className="w-full bg-white py-14 sm:py-20 lg:py-28 border-b border-[#EBEBEB]">
      <div className="w-full px-5 sm:px-10 md:px-16 lg:px-24 xl:px-28 mx-auto max-w-[1500px]">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-normal tracking-tight sm:tracking-[0.04em] text-[#0A0C0C] uppercase">
            CONTACT US
          </h2>
          <div className="w-[60px] sm:w-[80px] h-[2px] bg-[#0A0C0C] mx-auto mt-3.5 sm:mt-4" />
        </div>

        {/* 2-Column Layout: Packaging Image + Form Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Left Column: Image */}
          <div className="lg:col-span-5 relative w-full min-h-[380px] sm:min-h-[460px] lg:min-h-full rounded-[2px] overflow-hidden bg-neutral-900">
            <Image
              src="/image/help/2.png"
              alt="SuperClean Signature Garment Packaging"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
          </div>

          {/* Right Column: Contact Form Box */}
          <div className="lg:col-span-7 bg-white border border-[#EBEBEB] p-6 sm:p-8 md:p-10 rounded-[2px] flex flex-col justify-between">
            <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
              {/* Row 1: Full Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                <div>
                  <label className="block text-[12px] sm:text-[13px] font-normal text-[#7A7A7A] mb-1.5">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Enter your full name"
                    className="w-full border border-[#EBEBEB] px-3.5 sm:px-4 py-2.5 sm:py-3 text-[13px] sm:text-[14px] text-[#0A0C0C] placeholder:text-[#B0B0B0] focus:outline-none focus:border-[#0A0C0C] rounded-[2px] bg-white transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[12px] sm:text-[13px] font-normal text-[#7A7A7A] mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full border border-[#EBEBEB] px-3.5 sm:px-4 py-2.5 sm:py-3 text-[13px] sm:text-[14px] text-[#0A0C0C] placeholder:text-[#B0B0B0] focus:outline-none focus:border-[#0A0C0C] rounded-[2px] bg-white transition-colors"
                  />
                </div>
              </div>

              {/* Row 2: Mobile Number & Subject */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                <div>
                  <label className="block text-[12px] sm:text-[13px] font-normal text-[#7A7A7A] mb-1.5">
                    Mobile Number
                  </label>
                  <div className="flex items-center border border-[#EBEBEB] rounded-[2px] overflow-hidden focus-within:border-[#0A0C0C] transition-colors bg-white">
                    <div className="flex items-center gap-1.5 px-3 py-2.5 sm:py-3 bg-neutral-50/50 border-r border-[#EBEBEB] text-[13px] sm:text-[14px] text-[#0A0C0C] select-none shrink-0">
                      <span className="text-[14px]">🇸🇦</span>
                      <span className="font-normal text-[#4A4D4D]">+966</span>
                    </div>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="000000"
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-[13px] sm:text-[14px] text-[#0A0C0C] placeholder:text-[#B0B0B0] focus:outline-none bg-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[12px] sm:text-[13px] font-normal text-[#7A7A7A] mb-1.5">
                    Subject *
                  </label>
                  <div className="relative">
                    <select
                      required
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="w-full appearance-none border border-[#EBEBEB] px-3.5 sm:px-4 py-2.5 sm:py-3 text-[13px] sm:text-[14px] text-[#0A0C0C] focus:outline-none focus:border-[#0A0C0C] rounded-[2px] bg-white transition-colors pr-10 cursor-pointer"
                    >
                      <option value="" disabled>
                        Select a subject
                      </option>
                      <option value="general">General Inquiry</option>
                      <option value="order">Order Status & Tracking</option>
                      <option value="concierge">Concierge Pickup Service</option>
                      <option value="bespoke">Bespoke Garment Request</option>
                      <option value="feedback">Feedback & Suggestions</option>
                    </select>
                    <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400 pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* Row 3: Message Textarea with Character Counter */}
              <div>
                <label className="block text-[12px] sm:text-[13px] font-normal text-[#7A7A7A] mb-1.5">
                  Message *
                </label>
                <div className="border border-[#EBEBEB] rounded-[2px] bg-[#FAFAFA] focus-within:border-[#0A0C0C] focus-within:bg-white transition-colors p-3.5">
                  <textarea
                    required
                    rows={6}
                    maxLength={maxChars}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="How can we help?"
                    className="w-full bg-transparent text-[13px] sm:text-[14px] text-[#0A0C0C] placeholder:text-[#B0B0B0] focus:outline-none resize-none leading-relaxed"
                  />
                  <div className="text-right text-[11px] text-[#A0A0A0] mt-1 select-none">
                    {message.length} / {maxChars} characters
                  </div>
                </div>
              </div>

              {/* Success Notification */}
              {submitted && (
                <div className="p-3 bg-neutral-900 text-white text-xs text-center rounded-[2px] animate-in fade-in duration-200">
                  Thank you. Your message has been received by our concierge
                  team.
                </div>
              )}

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-[#0A0C0C] hover:bg-neutral-800 text-white text-[14px] sm:text-[15px] font-normal tracking-[0.03em] py-3.5 sm:py-4 rounded-[2px] transition-colors cursor-pointer text-center"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
