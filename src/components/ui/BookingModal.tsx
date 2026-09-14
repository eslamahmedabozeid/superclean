"use client";

import React, { useState } from "react";
import { useModal } from "@/context/ModalContext";
import {
  X,
  Sparkles,
  CheckCircle2,
  Calendar,
  Clock,
  Home,
  ShieldCheck,
  Tag,
  ArrowRight,
  RefreshCw,
  Phone,
} from "lucide-react";
import confetti from "canvas-confetti";

interface AddOn {
  id: string;
  name: string;
  price: number;
  icon: string;
}

const ADD_ONS: AddOn[] = [
  { id: "fridge", name: "Inside Fridge Clean", price: 30, icon: "❄️" },
  { id: "oven", name: "Deep Oven Degrease", price: 35, icon: "🍳" },
  { id: "windows", name: "Interior Window Panels", price: 45, icon: "🪟" },
  { id: "carpet", name: "Carpet Steam Shampoo", price: 65, icon: "🧶" },
  { id: "balcony", name: "Balcony / Patio Wash", price: 30, icon: "🌿" },
  { id: "pets", name: "Pet Hair & Odor Neutralizer", price: 25, icon: "🐾" },
];

const SERVICES = [
  {
    id: "standard",
    name: "Standard Home Clean",
    basePrice: 110,
    desc: "Perfect for routine maintenance & fresh spaces",
  },
  {
    id: "deep",
    name: "Deep Clean Deluxe",
    basePrice: 175,
    desc: "Intensive top-to-bottom scrub & sanitize",
  },
  {
    id: "move",
    name: "Move-In / Move-Out Clean",
    basePrice: 220,
    desc: "100% bond & landlord inspection ready guarantee",
  },
  {
    id: "commercial",
    name: "Commercial & Office Space",
    basePrice: 190,
    desc: "Disinfected workspaces for teams & clients",
  },
  {
    id: "eco",
    name: "Eco-Green Sanitization",
    basePrice: 155,
    desc: "100% non-toxic, pet & infant safe botanical clean",
  },
];

export default function BookingModal() {
  const { isBookingOpen, closeBooking, bookingDetails } = useModal();

  const [selectedService, setSelectedService] = useState<string>(
    bookingDetails.service || "Deep Clean Deluxe"
  );
  const [bedrooms, setBedrooms] = useState<number>(bookingDetails.bedrooms || 2);
  const [bathrooms, setBathrooms] = useState<number>(bookingDetails.bathrooms || 2);
  const [frequency, setFrequency] = useState<"one-time" | "weekly" | "bi-weekly" | "monthly">(
    bookingDetails.frequency || "one-time"
  );
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);
  const [date, setDate] = useState<string>("");
  const [timeSlot, setTimeSlot] = useState<string>("morning");

  // Contact info
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [notes, setNotes] = useState("");

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isBookingOpen) return null;

  // Calculate pricing
  const currentServiceObj =
    SERVICES.find((s) => s.name.toLowerCase().includes(selectedService.toLowerCase())) ||
    SERVICES[1];

  const basePrice = currentServiceObj.basePrice;
  const roomSurcharge = (bedrooms - 1) * 25 + (bathrooms - 1) * 20;
  const addOnsTotal = selectedAddOns.reduce((sum, addOnId) => {
    const item = ADD_ONS.find((a) => a.id === addOnId);
    return sum + (item ? item.price : 0);
  }, 0);

  const subtotal = Math.max(89, basePrice + roomSurcharge + addOnsTotal);

  let discountPercent = 0;
  if (frequency === "weekly") discountPercent = 0.2;
  if (frequency === "bi-weekly") discountPercent = 0.15;
  if (frequency === "monthly") discountPercent = 0.1;

  const discountAmount = Math.round(subtotal * discountPercent);
  const finalPrice = subtotal - discountAmount;

  const toggleAddOn = (id: string) => {
    setSelectedAddOns((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);
      try {
        confetti({
          particleCount: 120,
          spread: 70,
          origin: { y: 0.6 },
        });
      } catch {
        // Confetti fallback
      }
    }, 600);
  };

  const resetAndClose = () => {
    setIsSubmitted(false);
    closeBooking();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm transition-opacity"
        onClick={resetAndClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden z-10 my-auto max-h-[92vh] flex flex-col">
        {/* Header */}
        <div className="bg-gradient-to-r from-sky-600 via-teal-600 to-emerald-600 p-6 text-white flex items-start justify-between relative shrink-0">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-xs font-semibold backdrop-blur-sm mb-2 text-sky-100">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              Instant Booking & Instant Quote
            </div>
            <h3 className="text-2xl font-bold tracking-tight">
              Book Your Spotless Clean
            </h3>
            <p className="text-sky-100 text-sm mt-1">
              Top-rated vetted cleaners, 100% money-back satisfaction guarantee.
            </p>
          </div>
          <button
            onClick={resetAndClose}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 md:p-8 overflow-y-auto grow">
          {isSubmitted ? (
            <div className="text-center py-10 space-y-5">
              <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto ring-8 ring-emerald-50">
                <CheckCircle2 className="w-12 h-12" />
              </div>
              <h4 className="text-2xl font-bold text-slate-900">
                Booking Request Confirmed!
              </h4>
              <p className="text-slate-600 max-w-md mx-auto text-sm sm:text-base">
                Thank you, <span className="font-semibold text-slate-900">{fullName || "Valued Client"}</span>! We have received your booking for <span className="font-semibold text-sky-700">{selectedService}</span> on{" "}
                <span className="font-semibold text-slate-900">{date || "your selected date"}</span>. Our supervisor will text/call you within 15 minutes to confirm access details.
              </p>

              <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200/80 max-w-md mx-auto text-left text-sm space-y-2">
                <div className="flex justify-between text-slate-600">
                  <span>Estimated Total:</span>
                  <span className="font-bold text-emerald-600 text-base">${finalPrice}</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Address:</span>
                  <span className="font-medium text-slate-800">{address || "On file"}</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Frequency:</span>
                  <span className="capitalize font-medium text-slate-800">{frequency}</span>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  onClick={resetAndClose}
                  className="px-6 py-3 rounded-xl bg-slate-900 text-white font-medium hover:bg-slate-800 transition"
                >
                  Return to Website
                </button>
                <a
                  href="tel:18007873725"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-sky-50 text-sky-700 font-medium hover:bg-sky-100 transition"
                >
                  <Phone className="w-4 h-4" />
                  Call Support (1-800-SUPERCLEAN)
                </a>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Service Selection */}
              <div>
                <label className="block text-sm font-semibold text-slate-800 mb-2">
                  1. Choose Service Type
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {SERVICES.map((s) => (
                    <button
                      type="button"
                      key={s.id}
                      onClick={() => setSelectedService(s.name)}
                      className={`p-3.5 rounded-2xl text-left border transition-all ${
                        selectedService.toLowerCase() === s.name.toLowerCase()
                          ? "border-sky-500 bg-sky-50/70 shadow-sm ring-2 ring-sky-400/30"
                          : "border-slate-200 hover:border-slate-300 bg-white"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-slate-900 text-sm">{s.name}</span>
                        <span className="text-xs font-bold text-sky-600 bg-sky-100 px-2 py-0.5 rounded-full">
                          from ${s.basePrice}
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 mt-1 line-clamp-1">{s.desc}</p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Property Specs */}
              <div>
                <label className="block text-sm font-semibold text-slate-800 mb-2">
                  2. Property Size & Layout
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-slate-50 p-4 rounded-2xl border border-slate-200/70">
                  <div>
                    <span className="text-xs font-medium text-slate-600 block mb-1.5 flex items-center gap-1.5">
                      <Home className="w-3.5 h-3.5 text-slate-500" />
                      Bedrooms
                    </span>
                    <div className="flex items-center gap-2">
                      {[1, 2, 3, 4, 5].map((num) => (
                        <button
                          type="button"
                          key={num}
                          onClick={() => setBedrooms(num)}
                          className={`flex-1 py-1.5 rounded-xl text-sm font-semibold transition ${
                            bedrooms === num
                              ? "bg-sky-600 text-white shadow-sm"
                              : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-100"
                          }`}
                        >
                          {num === 5 ? "5+" : num}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <span className="text-xs font-medium text-slate-600 block mb-1.5 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-slate-500" />
                      Bathrooms
                    </span>
                    <div className="flex items-center gap-2">
                      {[1, 2, 3, 4].map((num) => (
                        <button
                          type="button"
                          key={num}
                          onClick={() => setBathrooms(num)}
                          className={`flex-1 py-1.5 rounded-xl text-sm font-semibold transition ${
                            bathrooms === num
                              ? "bg-sky-600 text-white shadow-sm"
                              : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-100"
                          }`}
                        >
                          {num === 4 ? "4+" : num}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Frequency Discount */}
              <div>
                <label className="block text-sm font-semibold text-slate-800 mb-2 flex items-center justify-between">
                  <span>3. Cleaning Frequency</span>
                  <span className="text-xs text-emerald-600 font-bold flex items-center gap-1">
                    <Tag className="w-3 h-3" /> Save up to 20%
                  </span>
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    { id: "one-time", label: "One-Time", badge: "Standard" },
                    { id: "weekly", label: "Weekly", badge: "Save 20%" },
                    { id: "bi-weekly", label: "Bi-Weekly", badge: "Save 15%" },
                    { id: "monthly", label: "Monthly", badge: "Save 10%" },
                  ].map((freq) => (
                    <button
                      type="button"
                      key={freq.id}
                      onClick={() => setFrequency(freq.id as any)}
                      className={`p-2.5 rounded-xl border text-center transition ${
                        frequency === freq.id
                          ? "border-emerald-500 bg-emerald-50/70 text-emerald-900 font-semibold ring-2 ring-emerald-400/30"
                          : "border-slate-200 bg-white text-slate-700 hover:border-slate-300"
                      }`}
                    >
                      <div className="text-xs font-semibold">{freq.label}</div>
                      <div
                        className={`text-[10px] font-bold mt-0.5 ${
                          frequency === freq.id ? "text-emerald-700" : "text-slate-400"
                        }`}
                      >
                        {freq.badge}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Optional Add-Ons */}
              <div>
                <label className="block text-sm font-semibold text-slate-800 mb-2">
                  4. Custom Add-Ons (Optional)
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {ADD_ONS.map((addOn) => {
                    const isChecked = selectedAddOns.includes(addOn.id);
                    return (
                      <button
                        type="button"
                        key={addOn.id}
                        onClick={() => toggleAddOn(addOn.id)}
                        className={`p-2.5 rounded-xl border text-left flex items-center gap-2 transition ${
                          isChecked
                            ? "border-sky-500 bg-sky-50/80 shadow-xs"
                            : "border-slate-200 bg-white hover:border-slate-300"
                        }`}
                      >
                        <span className="text-lg shrink-0">{addOn.icon}</span>
                        <div className="min-w-0">
                          <p className="text-xs font-medium text-slate-800 truncate">{addOn.name}</p>
                          <p className="text-[11px] font-bold text-sky-700">+${addOn.price}</p>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Date and Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-slate-500" />
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    required
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-slate-500" />
                    Arrival Window
                  </label>
                  <select
                    value={timeSlot}
                    onChange={(e) => setTimeSlot(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
                  >
                    <option value="morning">Morning (8:00 AM - 12:00 PM)</option>
                    <option value="afternoon">Afternoon (12:00 PM - 4:00 PM)</option>
                    <option value="evening">Late Afternoon (4:00 PM - 7:00 PM)</option>
                  </select>
                </div>
              </div>

              {/* Contact Info */}
              <div className="space-y-3 pt-2 border-t border-slate-100">
                <span className="block text-sm font-semibold text-slate-800">
                  5. Contact & Service Location
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="text"
                    required
                    placeholder="Full Name *"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
                  />
                  <input
                    type="tel"
                    required
                    placeholder="Phone Number *"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="email"
                    required
                    placeholder="Email Address *"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
                  />
                  <input
                    type="text"
                    required
                    placeholder="Street Address, Apt / Suite *"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
                  />
                </div>
                <textarea
                  rows={2}
                  placeholder="Special instructions or access notes (e.g. gate code, pets at home, key under mat)..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 resize-none"
                />
              </div>

              {/* Summary Bar & CTA */}
              <div className="bg-slate-900 rounded-2xl p-4 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-slate-300">Estimated Total:</span>
                    {discountAmount > 0 && (
                      <span className="text-xs line-through text-slate-400">
                        ${subtotal}
                      </span>
                    )}
                  </div>
                  <div className="text-2xl font-black text-emerald-400">
                    ${finalPrice}
                    <span className="text-xs font-normal text-slate-300 ml-1.5">
                      {frequency !== "one-time" ? `per ${frequency.replace("-", " ")}` : "total"}
                    </span>
                  </div>
                </div>

                <div className="w-full sm:w-auto flex items-center gap-3">
                  <div className="hidden md:flex items-center gap-1.5 text-[11px] text-slate-300">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    100% Satisfaction Guaranteed
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-bold rounded-xl shadow-lg hover:shadow-emerald-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {loading ? (
                      <>
                        <RefreshCw className="w-4 h-4 animate-spin" />
                        Processing...
                      </>
                    ) : (
                      <>
                        Confirm Booking
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
