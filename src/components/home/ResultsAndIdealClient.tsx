"use client";

import { useState } from "react";

const stats = [
  {
    value: "80%",
    valueColor: "#111827",
    label: "Reduction in manual work for a trading company after full Zoho automation",
    image: "/images/logos/results-1.svg",
    bg: "#ffffff",
    dark: false,
  },
  {
    value: "6 weeks",
    valueColor: "#111827",
    label: "from chaos to operational clarity, typical implementation timeline for SMBs",
    image: "/images/logos/results-2.svg",
    bg: "#ffffff",
    dark: false,
  },
  {
    value: "100%",
    valueColor: "#f07272",
    label: "user adoption in 3 weeks, consistently — because we build for people, not demos",
    image: "/images/logos/results-3.png",
    bg: "#1f1e1c",
    dark: true,
    showButton: true,
    avatars: [
      { src: "/images/logos/results-1.svg", style: { bottom: 80, left: 24, width: 72, height: 72 } },
      { src: "/images/logos/results-2.svg", style: { bottom: 110, right: 40, width: 56, height: 56 } },
      { src: "/images/logos/results-3.svg", style: { bottom: 40, right: 24, width: 56, height: 56 } },
    ],
  },
];

const idealClients = [
  {
    title: "Scaling Team",
    desc: "5–50+ users, growing fast with Zoho.",
  },
  {
    title: "Beyond Spreadsheets",
    desc: "Manual tools no longer cut it.",
  },
  {
    title: "Run, Not Support",
    desc: "Need a system that drives operations.",
  },
  {
    title: "Partner, Not Headache",
    desc: "No tech team—just results.",
  },
];

export function ResultsAndIdealClient() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="w-full px-6 py-20 md:py-12" style={{ backgroundColor: "#fdf8f6" }}>
      <div className="max-w-6xl mx-auto">

        {/* ── RESULTS SECTION ── */}
        <div className="text-center mb-12">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-3" style={{ color: "#4ecca3" }}>
            Proof
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Results our clients talk about.
          </h2>
        </div>

        {/* 3 stat cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-24">
          {stats.map((s, i) => (
            <div
              key={i}
              className="relative rounded-2xl overflow-hidden flex flex-col items-start gap-8"
              style={{
                backgroundColor: s.bg,
                boxShadow:
                  hoveredIndex === i
                    ? "0 20px 60px rgba(0,0,0,0.18)"
                    : "0 2px 12px rgba(0,0,0,0.06)",
                transform: hoveredIndex === i ? "translateY(-6px)" : "translateY(0)",
                transition: "all 0.3s cubic-bezier(0.4,0,0.2,1)",
                minHeight: 455.51,
                cursor: "default",
              }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Text top */}
              <div className="p-7 pb-4">
                <p
                  className="text-5xl font-bold mb-3"
                  style={{ color: s.valueColor }}
                >
                  {s.value}
                </p>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: s.dark ? "#9ca3af" : "#4b5563" }}
                >
                  {s.label}
                </p>
              </div>

              {/* Image fills bottom */}
              <div className="flex-1 mt-2">
                <img
                  src={s.image}
                  alt={s.value}
                  className="w-full h-full object-contain object-bottom px-6 pb-6"
                  style={{ maxHeight: 200 }}
                />

                {/* CTA button on dark card */}
                {s.showButton && (
                  <div className="absolute bottom-6 left-7">
                    <button className="bg-white text-gray-900 text-sm font-semibold px-5 py-2.5 rounded-full shadow hover:shadow-md transition-shadow">
                      Read Case Studies
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* ── IDEAL CLIENT SECTION ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">

          {/* Left */}
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-4" style={{ color: "#4ecca3" }}>
              Ideal Client
            </p>
            <h2 className="text-4xl font-bold text-gray-900 mb-5">
              Who we work with
            </h2>
            <p className="text-gray-500 text-base leading-relaxed mb-4">
              YeloBase is built for businesses that are already operational — and ready to systematize.
            </p>
            <p className="text-gray-500 text-base leading-relaxed">
              We work with founders, operations heads, and finance leads across professional services, trading, manufacturing, and SaaS companies — globally.
            </p>
          </div>

          {/* Right: 2x2 grid */}
          <div className="grid grid-cols-2 gap-3">
            {idealClients.map((c, i) => (
              <div
                key={i}
                className="rounded-xl p-5 bg-white"
                style={{
                  borderLeft: "3px solid #4ecca3",
                  boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
                }}
              >
                <p className="font-bold text-gray-900 text-sm mb-1">{c.title}</p>
                <p className="text-gray-500 text-sm leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}