// "use client";

// import { useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { testimonials, stats } from "@/data/testimonials";
// import { Testimonial } from "@/types/testimonial";

// // ── Filter categories ──────────────────────────────────────────────────────
// const FILTERS = ["All", "Zoho Services", "AI Agent", "Automation", "Custom Development"];

// // Trusted-by logos (marquee strip)
// const LOGOS = [
//   { src: "/images/logos/swingfit.svg", alt: "SwingFit Academies" },
//   { src: "/images/logos/optimal.svg",  alt: "Optimal Fitness" },
//   // add more here
// ];

// // ── Sub-components ─────────────────────────────────────────────────────────

// function StarRating({ rating }: { rating: number }) {
//   return (
//     <div className="flex gap-1">
//       {[1,2,3,4,5].map((i) => (
//         <svg key={i} width="18" height="18" viewBox="0 0 24 24"
//           fill={i <= rating ? "#7c3aed" : "none"}
//           stroke={i <= rating ? "#7c3aed" : "#d1d5db"}
//           strokeWidth="1.5"
//         >
//           <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
//         </svg>
//       ))}
//     </div>
//   );
// }

// function TestimonialCard({ t }: { t: Testimonial }) {
//   return (
//     <div className="bg-white rounded-2xl p-6 flex flex-col justify-between gap-6"
//       style={{ boxShadow: "0 1px 4px rgba(0,0,0,0.06)" }}>
//       <p className="text-gray-600 text-sm leading-relaxed">{t.quote}</p>
//       <div>
//         <StarRating rating={t.rating} />
//         <div className="flex items-center gap-3 mt-4">
//           <div className="relative w-11 h-11 rounded-full overflow-hidden shrink-0">
//             <Image src={t.avatar} alt={t.name} fill className="object-cover" />
//           </div>
//           <div>
//             <p className="text-gray-900 font-bold text-sm">{t.name}</p>
//             <p className="text-gray-400 text-xs">{t.company}</p>
//             <p className="text-gray-400 text-xs">{t.location}</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// function FeaturedCard({ t }: { t: Testimonial }) {
//   return (
//     <div className="rounded-2xl p-8 flex flex-col justify-between row-span-2"
//       style={{ backgroundColor: "#1f1e1c", minHeight: 420 }}>
//       <div>
//         <svg width="32" height="28" viewBox="0 0 36 30" fill="#4b5563">
//           <path d="M0 30V18C0 8.4 5.4 2.4 16.2 0l2.4 3.6C13.2 5.4 10.2 8.4 9.6 13.2H16.2V30H0zm19.8 0V18C19.8 8.4 25.2 2.4 36 0l2.4 3.6C33 5.4 30 8.4 29.4 13.2H36V30H19.8z"/>
//         </svg>
//         <p className="text-gray-200 text-sm leading-relaxed mt-5">{t.quote}</p>
//       </div>
//       <div>
//         <StarRating rating={t.rating} />
//         <div className="flex items-center gap-3 mt-4">
//           <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0">
//             <Image src={t.avatar} alt={t.name} fill className="object-cover" />
//           </div>
//           <div>
//             <p className="text-white font-bold text-sm">{t.name}</p>
//             <p className="text-gray-400 text-xs">{t.company}</p>
//             <p className="text-gray-400 text-xs">{t.location}</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// // ── Main Page ──────────────────────────────────────────────────────────────

// export default function CustomerStoriesPage() {
//   const [activeFilter, setActiveFilter] = useState("All");

//   // Sort by date desc — latest = featured
//   const sorted = [...testimonials].sort(
//     (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
//   );

//   const featured = sorted[0];

//   // Filter rest (category field on testimonial, "All" shows everything)
//   const filtered = sorted.slice(1).filter(
//     (t) => activeFilter === "All" || t.category === activeFilter
//   );

//   return (
//     <main className="w-full" style={{ backgroundColor: "#FFFCF8" }}>

//       {/* ── HERO ── */}
//       <section className="text-center px-6 pt-20 pb-10 max-w-3xl mx-auto">
//         <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-3" style={{ color: "#4ecca3" }}>
//           Wall of Love
//         </p>
//         <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
//           Customer Stories
//         </h1>
//         <p className="text-gray-500 text-base">
//           Every review is real. Every project delivered. Every client gets our best.
//         </p>
//       </section>

//       {/* ── STATS BAR ── */}
//       <section className="px-6 pb-10 max-w-[62.5rem] mx-auto">
//         <div className="rounded-2xl px-8 py-5 grid grid-cols-4 gap-4 items-center"
//           style={{ backgroundColor: "#FAEBEB" }}>
//           {stats.map((s) => (
//             <div key={s.label} className="text-center">
//               <p className="text-2xl font-bold text-gray-900">
//                 {s.value} <span className="text-gray-500 text-sm font-normal">{s.sublabel}</span>
//               </p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* ── LOGO MARQUEE ── */}
//       <section className="overflow-hidden py-4 mb-10">
//         <div className="flex justify-center gap-12 animate-marquee whitespace-nowrap px-6">
//           {[...LOGOS, ...LOGOS].map((l, i) => (
//             <div key={i} className="relative h-8 w-32 shrink-0 grayscale opacity-60">
//               <Image src={l.src} alt={l.alt} fill className="object-contain" />
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* ── FILTER TABS ── */}
//       <section className="px-6 mb-10 flex justify-center">
//         <div className="flex gap-2 flex-wrap justify-center">
//           {FILTERS.map((f) => (
//             <button
//               key={f}
//               onClick={() => setActiveFilter(f)}
//               className="px-5 py-2 rounded-full text-sm font-medium transition-all"
//               style={{
//                 backgroundColor: activeFilter === f ? "#7c3aed" : "white",
//                 color: activeFilter === f ? "white" : "#374151",
//                 boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
//               }}
//             >
//               {f}
//             </button>
//           ))}
//         </div>
//       </section>

//       {/* ── TESTIMONIALS GRID ── */}
//       <section className="px-6 max-w-6xl mx-auto mb-20">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//           {/* Featured dark card — spans 2 rows */}
//           <FeaturedCard t={featured} />

//           {/* Rest of testimonials */}
//           {filtered.map((t) => (
//             <TestimonialCard key={t.id} t={t} />
//           ))}
//         </div>
//       </section>

//       {/* ── BOTTOM CTA ── */}
//       <section className="px-6 pb-20 max-w-6xl mx-auto">
//         <div className="relative rounded-2xl px-10 md:px-16 py-14" style={{ backgroundColor: "#e8e4df" }}>

//           {/* Chalk decoration top-left */}
//           <div className="absolute -top-5 left-10 w-14 h-14 pointer-events-none">
//             <Image src="/images/logos/cta-img-2.svg" alt="" fill className="object-contain" />
//           </div>
//           {/* Coin decoration bottom-right */}
//           <div className="absolute -bottom-5 right-10 w-12 h-12 pointer-events-none">
//             <Image src="/images/logos/cta-img-1.svg" alt="" fill className="object-contain" />
//           </div>

//           <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
//             <div className="max-w-lg">
//               <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-3" style={{ color: "#4ecca3" }}>
//                 Start Your Project Today
//               </p>
//               <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-3"
//                 style={{ fontFamily: "monospace" }}>
//                 Ready to join our success stories?
//               </h2>
//               <p className="text-gray-500 text-sm">
//                 Let's discuss how we can help transform your business operations.
//               </p>
//             </div>
//             <Link
//               href="/contact"
//               className="shrink-0 inline-flex items-center gap-2 font-semibold text-white px-7 py-3.5 rounded-xl text-sm hover:opacity-90 transition-opacity"
//               style={{ backgroundColor: "#f07272" }}
//             >
//               Get started
//               <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
//                 <path d="M5 12h14M12 5l7 7-7 7"/>
//               </svg>
//             </Link>
//           </div>
//         </div>
//       </section>

//     </main>
//   );
// }

"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { testimonials, stats } from "@/data/testimonials";
import { Testimonial } from "@/types/testimonial";

// ── Filter categories ──────────────────────────────────────────────────────
const FILTERS = ["All", "Zoho Services", "AI Agent", "Automation", "Custom Development"];

// Trusted-by logos (marquee strip)
const LOGOS = [
  { src: "/images/logos/swingfit.svg", alt: "SwingFit Academies" },
  { src: "/images/logos/optimal.svg", alt: "Optimal Fitness" },
  { src: "/images/logos/swingfit.svg", alt: "SwingFit Academies" },
  { src: "/images/logos/optimal.svg", alt: "Optimal Fitness" },
  { src: "/images/logos/swingfit.svg", alt: "SwingFit Academies" },
  { src: "/images/logos/optimal.svg", alt: "Optimal Fitness" },
  { src: "/images/logos/swingfit.svg", alt: "SwingFit Academies" },
  { src: "/images/logos/optimal.svg", alt: "Optimal Fitness" },
];

// ── Sub-components ─────────────────────────────────────────────────────────

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((i) => (
        <svg key={i} width="18" height="18" viewBox="0 0 24 24"
          fill={i <= rating ? "#7c3aed" : "none"}
          stroke={i <= rating ? "#7c3aed" : "#d1d5db"}
          strokeWidth="1.5"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  );
}

function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <div className="bg-white rounded-2xl p-6 flex flex-col justify-between gap-6"
      style={{ boxShadow: "0 1px 4px rgba(0,0,0,0.06)" }}>
      <p className="text-gray-600 text-sm leading-relaxed">{t.quote}</p>
      <div>
        <StarRating rating={t.rating} />
        <div className="flex items-center gap-3 mt-4">
          <div className="relative w-11 h-11 rounded-full overflow-hidden shrink-0">
            <Image src={t.avatar} alt={t.name} fill className="object-cover" />
          </div>
          <div>
            <p className="text-gray-900 font-bold text-sm">{t.name}</p>
            <p className="text-gray-400 text-xs">{t.company}</p>
            <p className="text-gray-400 text-xs">{t.location}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function FeaturedCard({ t }: { t: Testimonial }) {
  return (
    <div className="rounded-2xl p-8 flex flex-col justify-between row-span-2"
      style={{ backgroundColor: "#1f1e1c", minHeight: 420 }}>
      <div>
        <svg width="32" height="28" viewBox="0 0 36 30" fill="#4b5563">
          <path d="M0 30V18C0 8.4 5.4 2.4 16.2 0l2.4 3.6C13.2 5.4 10.2 8.4 9.6 13.2H16.2V30H0zm19.8 0V18C19.8 8.4 25.2 2.4 36 0l2.4 3.6C33 5.4 30 8.4 29.4 13.2H36V30H19.8z" />
        </svg>
        <p className="text-gray-200 text-sm leading-relaxed mt-5">{t.quote}</p>
      </div>
      <div>
        <StarRating rating={t.rating} />
        <div className="flex items-center gap-3 mt-4">
          <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0">
            <Image src={t.avatar} alt={t.name} fill className="object-cover" />
          </div>
          <div>
            <p className="text-white font-bold text-sm">{t.name}</p>
            <p className="text-gray-400 text-xs">{t.company}</p>
            <p className="text-gray-400 text-xs">{t.location}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Main Page ──────────────────────────────────────────────────────────────

export default function CustomerStoriesPage() {
  // const [activeFilter, setActiveFilter] = useState("All");
  const [activeFilter, setActiveFilter] = useState(FILTERS[0]);
  const [hoveredFilter, setHoveredFilter] = useState<string | null>(null);


  // Sort by date desc — latest = featured
  const sorted = [...testimonials].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const featured = sorted[0];

  // Filter rest (category field on testimonial, "All" shows everything)
  const filtered = sorted.slice(1).filter(
    (t) => activeFilter === "All" || t.category === activeFilter
  );

  return (
    <main className="w-full" style={{ backgroundColor: "#FFFCF8" }}>

      {/* ── HERO ── */}
      <section className="text-center px-6 pt-20 pb-10 max-w-3xl mx-auto">
        <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-3" style={{ color: "#4ecca3" }}>
          Wall of Love
        </p>
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
          Customer Stories
        </h1>
        <p className="text-gray-500 text-base">
          Every review is real. Every project delivered. Every client gets our best.
        </p>
      </section>

      {/* ── STATS BAR ── */}
      <section className="px-6 pb-10 max-w-[62.5rem] mx-auto">
        <div className="rounded-2xl px-8 py-5 grid grid-cols-4 gap-4 items-center"
          style={{ backgroundColor: "#FAEBEB" }}>
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-2xl font-bold text-gray-900">
                {s.value} <span className="text-gray-500 text-sm font-normal">{s.sublabel}</span>
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── LOGO MARQUEE ── */}
      <section className="py-4 mb-10">
        <div className="w-full max-w-[1200px] mx-auto px-4">
          <div className="flex justify-between items-center gap-8">
            {LOGOS.map((l, i) => (
              <div key={i} className="relative h-8 w-24 shrink-0">
                <Image src={l.src} alt={l.alt} fill className="object-contain grayscale opacity-60" />
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ── FILTER TABS ── */}
      <section className="flex justify-center px-6 mb-10">
        <div className="inline-flex overflow-hidden rounded-[8px] border border-[#D1D5DB] bg-white shadow-sm">
          {FILTERS.map((filter, index) => {
            const isHovered = hoveredFilter === filter;
            const isActive = activeFilter === filter;

            const shouldHighlight = hoveredFilter
              ? isHovered
              : isActive;

            return (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                onMouseEnter={() => setHoveredFilter(filter)}
                onMouseLeave={() => setHoveredFilter(null)}
                className={`
            relative px-4 py-2.5 text-[14px] font-semibold
            transition-all duration-300 ease-in-out
            ${shouldHighlight
                    ? "bg-[#7C5CFC] text-white"
                    : "bg-white text-[#121115] hover:text-white"}
          `}
              >
                {filter}

                {/* Divider */}
                {index !== FILTERS.length - 1 && !shouldHighlight && (
                  <span className="absolute right-0 top-0 h-full w-px bg-[#D1D5DB]" />
                )}
              </button>
            );
          })}
        </div>
      </section>

      {/* ── TESTIMONIALS GRID ── */}
      <section className="px-6 max-w-6xl mx-auto mb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Featured dark card — spans 2 rows */}
          <FeaturedCard t={featured} />

          {/* Rest of testimonials */}
          {filtered.map((t) => (
            <TestimonialCard key={t.id} t={t} />
          ))}
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section className="px-6 pb-20 max-w-6xl mx-auto">
        <div className="relative rounded-2xl px-10 md:px-16 py-14" style={{ backgroundColor: "#e8e4df" }}>

          {/* Chalk decoration top-left */}
          <div className="absolute -top-5 left-10 w-14 h-14 pointer-events-none">
            <Image src="/images/logos/cta-img-2.svg" alt="" fill className="object-contain" />
          </div>
          {/* Coin decoration bottom-right */}
          <div className="absolute -bottom-5 right-10 w-12 h-12 pointer-events-none">
            <Image src="/images/logos/cta-img-1.svg" alt="" fill className="object-contain" />
          </div>

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div className="max-w-lg">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-3" style={{ color: "#4ecca3" }}>
                Start Your Project Today
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-3"
                style={{ fontFamily: "monospace" }}>
                Ready to join our success stories?
              </h2>
              <p className="text-gray-500 text-sm">
                Let's discuss how we can help transform your business operations.
              </p>
            </div>
            <Link
              href="/contact"
              className="shrink-0 inline-flex items-center gap-2 font-semibold text-white px-7 py-3.5 rounded-xl text-sm hover:opacity-90 transition-opacity"
              style={{ backgroundColor: "#f07272" }}
            >
              Get started
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}