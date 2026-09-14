"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

export interface BookingDetails {
  service?: string;
  frequency?: "one-time" | "weekly" | "bi-weekly" | "monthly";
  bedrooms?: number;
  bathrooms?: number;
}

interface ModalContextType {
  isBookingOpen: boolean;
  openBooking: (details?: BookingDetails) => void;
  closeBooking: () => void;
  bookingDetails: BookingDetails;
  setBookingDetails: React.Dispatch<React.SetStateAction<BookingDetails>>;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export function ModalProvider({ children }: { children: ReactNode }) {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingDetails, setBookingDetails] = useState<BookingDetails>({
    service: "Deep Home Clean",
    frequency: "one-time",
    bedrooms: 2,
    bathrooms: 2,
  });

  const openBooking = (details?: BookingDetails) => {
    if (details) {
      setBookingDetails((prev) => ({ ...prev, ...details }));
    }
    setIsBookingOpen(true);
  };

  const closeBooking = () => {
    setIsBookingOpen(false);
  };

  return (
    <ModalContext.Provider
      value={{
        isBookingOpen,
        openBooking,
        closeBooking,
        bookingDetails,
        setBookingDetails,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
}
