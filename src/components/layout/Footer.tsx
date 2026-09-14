"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Sparkles,
  ShieldCheck,
  Heart,
  Phone,
  Mail,
  MapPin,
  CheckCircle,
  ArrowRight,
  Send,
  Star,
  Award,
} from "lucide-react";
import { useModal } from "@/context/ModalContext";

export default function Footer() {
  const { openBooking } = useModal();
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="bg-slate-950 text-white relative overflow-hidden pt-16 pb-12 border-t border-slate-800">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-sky-500/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Pre-Footer Callout Banner */}
        <div className="bg-gradient-to-r from-sky-900/60 via-slate-900 to-teal-900/60 border border-sky-800/40 rounded-3xl p-6 sm:p-8 mb-14 backdrop-blur-md flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-400 uppercase tracking-wider mb-1">
              <Award className="w-4 h-4" /> 100% Satisfaction Guarantee
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              Experience the joy of a spotless, pristine home.
            </h3>
            <p className="text-slate-300 text-sm max-w-xl">
              Book your trusted, insured, and 5-star background-checked cleaner in under 60 seconds.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <button
              onClick={() => openBooking()}
              className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-sky-500 to-emerald-500 hover:from-sky-400 hover:to-emerald-400 text-slate-950 font-bold text-sm shadow-lg shadow-sky-500/25 transition-all hover:scale-105 cursor-pointer flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              Book Instant Clean
            </button>
            <a
              href="tel:18007873725"
              className="px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-sm border border-white/10 transition-colors flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-sky-400" />
              (800) 787-3725
            </a>
          </div>
        </div>

        {/* Main Footer Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-sky-500 to-emerald-400 flex items-center justify-center text-white shadow-md">
                <Sparkles className="w-4 h-4 text-amber-200" />
              </div>
              <span className="text-2xl font-black tracking-tight text-white">
                SUPER<span className="text-sky-400">CLEAN</span>
              </span>
            </Link>

            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Your premier professional cleaning service. Eco-friendly products, vetted 5-star specialists, and guaranteed spotless living for homes and workplaces.
            </p>

            {/* Guarantee badges */}
            <div className="space-y-2 pt-1">
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>$2,000,000 Bonded & Insured Liability</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <CheckCircle className="w-4 h-4 text-sky-400" />
                <span>100% Background Checked & Verified Specialists</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                <span>4.9 / 5 Rating based on 15,000+ reviews</span>
              </div>
            </div>
          </div>

          {/* Quick Links / Services */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-200 mb-4">
              Our Services
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <Link
                  href="/services"
                  onClick={() => openBooking({ service: "Deep Clean Deluxe" })}
                  className="hover:text-sky-400 transition"
                >
                  Deep Cleaning
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  onClick={() => openBooking({ service: "Standard Home Clean" })}
                  className="hover:text-sky-400 transition"
                >
                  Standard Regular Clean
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  onClick={() => openBooking({ service: "Move-In / Move-Out Clean" })}
                  className="hover:text-sky-400 transition"
                >
                  Move-In / Move-Out
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  onClick={() => openBooking({ service: "Commercial & Office Space" })}
                  className="hover:text-sky-400 transition"
                >
                  Commercial & Offices
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  onClick={() => openBooking({ service: "Eco-Green Sanitization" })}
                  className="hover:text-sky-400 transition"
                >
                  Eco-Safe Sanitization
                </Link>
              </li>
            </ul>
          </div>

          {/* Company & Support Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-200 mb-4">
              Company
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <Link href="/" className="hover:text-sky-400 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-sky-400 transition">
                  All Services & Pricing
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-sky-400 transition">
                  About SuperClean
                </Link>
              </li>
              <li>
                <Link href="/help" className="hover:text-sky-400 transition">
                  Help & FAQs
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-sky-400 transition">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-sky-400 transition">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-200 mb-4">
              Stay Spotless
            </h4>
            <p className="text-xs text-slate-400 mb-3">
              Subscribe for exclusive seasonal cleaning discounts and home care tips.
            </p>

            {subscribed ? (
              <div className="bg-emerald-950/60 border border-emerald-800 p-3 rounded-xl text-emerald-300 text-xs flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>You are on the VIP discount list!</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-800 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-sky-500 pr-10"
                  />
                  <button
                    type="submit"
                    className="absolute right-2 top-2 p-1 rounded-lg bg-sky-600 hover:bg-sky-500 text-white transition"
                    aria-label="Submit newsletter"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
                <span className="text-[11px] text-slate-500 block">
                  No spam ever. Unsubscribe anytime.
                </span>
              </form>
            )}

            <div className="mt-4 pt-3 border-t border-slate-800/80 space-y-1.5 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-sky-400" />
                <span>support@superclean.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                <span>Serving 45+ Metro Areas Nationwide</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} SuperClean Technologies Inc. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/terms" className="hover:text-slate-300 transition">
              Terms of Service
            </Link>
            <Link href="/privacy" className="hover:text-slate-300 transition">
              Privacy Policy
            </Link>
            <Link href="/help" className="hover:text-slate-300 transition">
              Help Center
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
