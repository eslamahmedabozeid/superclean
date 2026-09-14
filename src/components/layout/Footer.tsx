"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-[#0A0C0C] text-white pt-16 sm:pt-20 pb-12 overflow-hidden">
      <div className="w-full px-8 sm:px-14 md:px-20 lg:px-24 xl:px-28">
        {/* Top Brand Block */}
        <div className="flex flex-col items-start justify-start">
          <Link href="/" className="inline-flex items-center gap-3">
            <Image
              src="/image/Vector.svg"
              alt="SuperClean Logo"
              width={26}
              height={32}
              className="h-8 w-auto object-contain brightness-0 invert"
            />
            <span className="text-xl sm:text-2xl font-normal text-white tracking-tight">
              SuperClean
            </span>
          </Link>

          <p className="text-[14px] sm:text-[15px] text-[#9A9A9A] font-normal mt-3 leading-relaxed">
            Every garment handled with couture precision, absolute privacy, and
            eco-conscious care.
          </p>
        </div>

        {/* 3 Columns Navigation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-12 mt-14 sm:mt-18 pb-16 sm:pb-20">
          {/* Column 1: Quick Links */}
          <div>
            <h3 className="text-[18px] sm:text-[20px] font-normal text-white mb-6 tracking-tight">
              Quick Links
            </h3>
            <ul className="space-y-3.5 text-[14px] text-[#9A9A9A]">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-white transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/help"
                  className="hover:text-white transition-colors"
                >
                  Help Center
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Services */}
          <div>
            <h3 className="text-[18px] sm:text-[20px] font-normal text-white mb-6 tracking-tight">
              Services
            </h3>
            <ul className="space-y-3.5 text-[14px] text-[#9A9A9A]">
              <li>
                <Link
                  href="/services"
                  className="hover:text-white transition-colors"
                >
                  Clean & Press
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-white transition-colors"
                >
                  Wash & Fold
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-white transition-colors"
                >
                  Bed & Bath
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-white transition-colors"
                >
                  Press Only
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Concierge */}
          <div>
            <h3 className="text-[18px] sm:text-[20px] font-normal text-white mb-6 tracking-tight">
              Concierge
            </h3>
            <ul className="space-y-3.5 text-[14px] text-[#9A9A9A]">
              <li>Riyadh, Riyadh, Saudi Arabia 12311</li>
              <li>
                <a
                  href="tel:+966531801333"
                  className="hover:text-white transition-colors"
                >
                  +966 53 180 1333
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@supercleanluxurylaundry.com"
                  className="hover:text-white transition-colors"
                >
                  info@supercleanluxurylaundry.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright | Socials | Legal */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-[13px] text-[#737373]">
          {/* Copyright */}
          <p>© 2026 SuperClean Laundry. All rights reserved.</p>

          {/* Social Icons (Center) */}
          <div className="flex items-center gap-5">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
              aria-label="Instagram"
            >
              <Image
                src="/image/icons/instagram.svg"
                alt="Instagram"
                width={20}
                height={20}
                className="w-5 h-5 object-contain brightness-0 invert"
              />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
              aria-label="Facebook"
            >
              <Image
                src="/image/icons/facebook.svg"
                alt="Facebook"
                width={20}
                height={20}
                className="w-5 h-5 object-contain brightness-0 invert"
              />
            </a>
            <a
              href="https://snapchat.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
              aria-label="Snapchat"
            >
              <Image
                src="/image/icons/snapchat.svg"
                alt="Snapchat"
                width={20}
                height={20}
                className="w-5 h-5 object-contain brightness-0 invert"
              />
            </a>
          </div>

          {/* Legal Links (Right) */}
          <div className="flex items-center gap-6 text-[#9A9A9A]">
            <Link
              href="/terms"
              className="hover:text-white transition-colors text-[13px]"
            >
              Terms & Conditions
            </Link>
            <Link
              href="/privacy"
              className="hover:text-white transition-colors text-[13px]"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
