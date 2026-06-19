// import { testimonials } from '@/data/testimonials';

// export function StoriesPreview() {
//   return (
//     <section className="space-y-8 rounded-[2rem] border border-slate-800 bg-slate-900/80 p-8 shadow-xl">
//       <div className="flex items-center justify-between gap-4">
//         <div>
//           <p className="text-brand-300 text-sm uppercase tracking-[0.24em]">Customer stories</p>
//           <h2 className="text-3xl font-semibold text-white">Success stories from partner clients</h2>
//         </div>
//       </div>
//       <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
//         {testimonials.map((item) => (
//           <article key={item.id} className="rounded-3xl border border-slate-800 bg-slate-950/80 p-6">
//             <p className="text-slate-300">“{item.quote}”</p>
//             <div className="mt-5 text-sm text-slate-400">
//               <p className="font-semibold text-white">{item.author}</p>
//               <p>{item.role}</p>
//             </div>
//           </article>
//         ))}
//       </div>
//     </section>
//   );
// }

"use client";

import Image from "next/image";
import Link from "next/link";
import { testimonials, stats } from "@/data/testimonials";
import { Testimonial } from "@/types/testimonial";

// Sort by date descending, latest = featured dark card
const sorted = [...testimonials].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
);
const featured: Testimonial = sorted[0];
const rest: Testimonial[] = sorted.slice(1, 3);

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((i) => (
        <svg
          key={i}
          width="20"
          height="20"
          viewBox="0 0 24 24"
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

function Avatar({ src, name }: { src: string; name: string }) {
  return (
    <div className="relative w-14 h-14 overflow-hidden shrink-0 border-white/20">
      <Image src={src} alt={name} fill className="object-cover" />
    </div>
  );
}

export function StoriesPreview() {
  return (
    <section className="w-full px-6 py-20 md:py-12" style={{ backgroundColor: "#fdf8f6" }}>
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-3" style={{ color: "#4ecca3" }}>
            Real Feedbacks
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Explore customer stories
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">

          {/* Featured dark card — col 1, spans 2 rows */}
          <div
            className="rounded-2xl p-8 flex flex-col justify-between md:row-span-2"
            style={{ backgroundColor: "#1f1e1c", minHeight: 420 }}
          >
            {/* Quote mark */}
            <div>
              <svg width="36" height="30" viewBox="0 0 36 30" fill="#4b5563">
                <path d="M0 30V18C0 8.4 5.4 2.4 16.2 0l2.4 3.6C13.2 5.4 10.2 8.4 9.6 13.2H16.2V30H0zm19.8 0V18C19.8 8.4 25.2 2.4 36 0l2.4 3.6C33 5.4 30 8.4 29.4 13.2H36V30H19.8z"/>
              </svg>
              <p className="text-gray-200 text-base leading-relaxed mt-6">
                {featured.quote}
              </p>
            </div>

            {/* Rating + author */}
            <div>
              <StarRating rating={featured.rating} />
              <div className="flex items-center gap-4 mt-5">
                <Avatar src={featured.avatar} name={featured.name} />
                <div>
                  <p className="text-white font-bold text-sm">{featured.name}</p>
                  <p className="text-gray-400 text-xs">{featured.company}</p>
                  <p className="text-gray-500 text-xs">{featured.location}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Stats card — col 2-3, row 1 */}
          <div
            className="md:col-span-2 rounded-2xl p-8 bg-white grid grid-cols-4 gap-4 items-center"
            style={{ boxShadow: "0 1px 4px rgba(0,0,0,0.06)" }}
          >
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col gap-1">
                <p className="text-[10px] font-semibold tracking-widest text-gray-400 uppercase">
                  {s.label}
                </p>
                <p className="text-3xl font-bold text-gray-900">{s.value}</p>
                <p className="text-xs text-gray-500">{s.sublabel}</p>
              </div>
            ))}
          </div>

          {/* Rest 2 testimonial cards — col 2 & 3, row 2 */}
          {rest.map((t) => (
            <div
              key={t.id}
              className="rounded-2xl p-7 bg-white flex flex-col justify-between"
              style={{
                boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
                minHeight: 220,
              }}
            >
              <p className="text-gray-600 text-sm leading-relaxed">{t.quote}</p>
              <div>
                <StarRating rating={t.rating} />
                <div className="flex items-center gap-3 mt-4">
                  <Avatar src={t.avatar} name={t.name} />
                  <div>
                    <p className="text-gray-900 font-bold text-sm">{t.name}</p>
                    <p className="text-gray-400 text-xs">{t.company}</p>
                    <p className="text-gray-400 text-xs">{t.location}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA button */}
        <div className="flex justify-center">
          <Link
            href="/customer-stories"
            className="flex items-center gap-2 border border-gray-400 text-gray-800 font-medium text-sm py-2.5 px-[18px] rounded-lg hover:bg-gray-50 transition-colors"
          >
            View All Success Stories
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </Link>
        </div>

      </div>
    </section>
  );
}