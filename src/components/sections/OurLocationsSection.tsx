import React from "react";
import LocationsInteractive, { LocationBranch } from "./LocationsInteractive";

export default function OurLocationsSection() {
  const branches: LocationBranch[] = [
    {
      id: 1,
      title: "Riyadh Branch",
      address: "King Fahd Road Riyadh, Saudi Arabia",
      pinPos: { top: "20%", left: "47%" },
      googleMapsUrl: "https://maps.google.com/?q=Riyadh+Saudi+Arabia",
    },
    {
      id: 2,
      title: "Riyadh Branch",
      address: "King Fahd Road Riyadh, Saudi Arabia",
      pinPos: { top: "62%", left: "72%" },
      googleMapsUrl: "https://maps.google.com/?q=Riyadh+Saudi+Arabia",
    },
  ];

  return (
    <section className="w-full bg-[#F5F5F5] py-14 sm:py-20 lg:py-28 border-b border-[#EDEDED] overflow-hidden">
      <div className="w-full px-5 sm:px-10 md:px-16 lg:px-24 xl:px-28 mx-auto max-w-[1600px]">
        <LocationsInteractive branches={branches} />
      </div>
    </section>
  );
}
