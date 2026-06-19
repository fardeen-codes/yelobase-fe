"use client";

import Image from "next/image";

const features = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    text: "Official Zoho Partner — verified, trained, and recognized by Zoho",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/>
        <rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>
      </svg>
    ),
    text: "100+ implementations across CRM, Books, Inventory, Analytics, Creator, People, and more",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    ),
    text: "Serving clients in India, US, UK, UAE, and Australia",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a5 5 0 1 0 0 10A5 5 0 0 0 12 2z"/><path d="M6 21v-1a6 6 0 0 1 6-6v0a6 6 0 0 1 6 6v1"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    text: "5–7 years of deep Zoho ecosystem experience",
  },
];

export default function ZohoPartnership() {
  return (
    <section
      className="w-full px-6 py-20 md:py-12"
      style={{ backgroundColor: "#fdf8f6" }}
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-16">

        {/* Left */}
        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: "#4ecca3" }}>
            Zoho Partnership
          </p>
          <h2 className="mb-5 text-[42px] font-semibold leading-tight text-gray-900 md:text-[42px]">
            We are an Official Zoho Partner. That&apos;s not a badge, it&apos;s a foundation.
          </h2>
          <p className="mb-8 max-w-lg text-base leading-relaxed text-gray-500">
            Our founders built their careers inside the Zoho ecosystem. We know it at the
            level of architecture, not just administration. That depth is what separates a
            system that works from one that just looks like it does.
          </p>

          {/* Feature list */}
          <ul className="mb-10 space-y-6">
            {features.map((f, i) => (
              <li key={i} className="flex items-start gap-4">
                <span className="mt-0.5 shrink-0 text-gray-400">{f.icon}</span>
                <p className="text-sm leading-relaxed text-gray-600">{f.text}</p>
              </li>
            ))}
          </ul>

          <p className="max-w-lg text-base leading-relaxed text-gray-500">
            Zoho is where we start. As your business grows, we grow the architecture
            with it — adding integrations, third-party tools, and AI layers as you need them.
          </p>
        </div>

        {/* Right — illustration */}
        <div className="flex items-center justify-center">
          <Image
            src="/images/logos/zoho-partnership.svg"
            alt="Zoho and Yelobase partnership illustration"
            width={520}
            height={480}
            className="w-full max-w-md object-contain md:max-w-lg"
            priority
          />
        </div>

      </div>
    </section>
  );
}