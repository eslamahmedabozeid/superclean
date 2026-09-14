import React from "react";

interface ContactCard {
  title: string;
  description: string;
  actionText: string;
  actionHref: string;
}

export default function HelpContactCardsSection() {
  const cards: ContactCard[] = [
    {
      title: "Email Support",
      description:
        "Drop us a message for general questions or business inquiries.",
      actionText: "hello@superclean.com",
      actionHref: "mailto:hello@superclean.com",
    },
    {
      title: "WhatsApp Chat",
      description:
        "Get instant messaging answers with our quick concierge assistant.",
      actionText: "+966 53 180 1333",
      actionHref: "https://wa.me/966531801333",
    },
    {
      title: "Direct Call",
      description:
        "Speak directly with one of our specialized valet agents now.",
      actionText: "+966 53 180 1333",
      actionHref: "tel:+966531801333",
    },
  ];

  return (
    <section className="w-full bg-white py-14 sm:py-20 lg:py-24 border-b border-[#EBEBEB]">
      <div className="w-full px-5 sm:px-10 md:px-16 lg:px-24 xl:px-28 mx-auto max-w-[1600px]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {cards.map((item, index) => (
            <div
              key={index}
              className="bg-[#FAFAFA] border border-[#EBEBEB] p-8 sm:p-10 rounded-[2px] transition-all duration-300 hover:border-[#0A0C0C] hover:bg-white flex flex-col justify-between min-h-[220px] sm:min-h-[240px]"
            >
              <div>
                <h3 className="text-[20px] sm:text-[22px] font-normal text-[#0A0C0C] tracking-tight">
                  {item.title}
                </h3>
                <p className="text-[14px] text-[#7A7A7A] font-normal leading-relaxed mt-3.5 sm:mt-4">
                  {item.description}
                </p>
              </div>

              <div className="mt-8 sm:mt-10">
                <a
                  href={item.actionHref}
                  className="text-[14px] sm:text-[15px] font-medium text-[#0A0C0C] hover:opacity-75 transition-opacity inline-block"
                  target={item.actionHref.startsWith("http") ? "_blank" : undefined}
                  rel={item.actionHref.startsWith("http") ? "noopener noreferrer" : undefined}
                >
                  {item.actionText}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
