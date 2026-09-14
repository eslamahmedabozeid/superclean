"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Help", href: "/help" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-neutral-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-1 flex items-center justify-start">
            <Link href="/" className="inline-flex items-center">
              <Image
                src="/image/Vector.png"
                alt="SuperClean Logo"
                width={28}
                height={36}
                className="h-9 w-auto object-contain"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation (Centered) */}
          <nav className="hidden md:flex items-center justify-center gap-10">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative text-[15px] font-normal transition-colors duration-200 py-1 ${
                    isActive
                      ? "text-neutral-900 font-medium"
                      : "text-neutral-400 hover:text-neutral-900"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-[-2px] left-1/2 -translate-x-1/2 w-4 h-[1.5px] bg-neutral-900 rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Download App Button (Right) */}
          <div className="flex-1 hidden md:flex items-center justify-end">
            <button
              type="button"
              className="inline-flex items-center justify-center gap-2.5 bg-[#0A0C0C] hover:bg-neutral-800 text-white text-[14px] font-normal tracking-[0.03em] px-5 py-2.5 rounded-[3px] transition-colors shadow-xs cursor-pointer"
            >
              <Image
                src="/image/download.svg"
                alt=""
                width={16}
                height={16}
                className="w-4 h-4 object-contain shrink-0"
              />
              <span>Download App</span>
            </button>
          </div>

          {/* Mobile Hamburger Menu Toggle */}
          <div className="flex md:hidden items-center gap-3">
            <button
              type="button"
              className="inline-flex items-center gap-1.5 bg-[#0A0C0C] text-white text-xs font-normal px-3 py-2 rounded-[3px]"
            >
              <Image
                src="/image/download.svg"
                alt=""
                width={14}
                height={14}
                className="w-3.5 h-3.5 object-contain shrink-0"
              />
              <span>App</span>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-neutral-700 hover:text-neutral-900 rounded-md"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-neutral-100 px-6 py-4 space-y-3 shadow-lg animate-in slide-in-from-top-2 duration-200">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);

            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block py-2 text-base transition-colors ${
                  isActive
                    ? "text-neutral-900 font-semibold"
                    : "text-neutral-500 hover:text-neutral-900"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          <div className="pt-2 border-t border-neutral-100">
            <button
              type="button"
              className="w-full flex items-center justify-center gap-2.5 bg-[#0A0C0C] text-white text-sm font-normal py-3 rounded-[3px]"
            >
              <Image
                src="/image/download.svg"
                alt=""
                width={16}
                height={16}
                className="w-4 h-4 object-contain shrink-0"
              />
              <span>Download App</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
