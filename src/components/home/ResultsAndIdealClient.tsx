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
      <div className="mx-auto max-w-6xl">

        {/* ── RESULTS SECTION ── */}
        <div className="mb-12 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: "#4ecca3" }}>
            Proof
          </p>
          <h2 className="text-4xl font-bold text-gray-900 md:text-5xl">
            Results our clients talk about.
          </h2>
        </div>

        {/* 3 stat cards */}
        <div className="mb-24 grid grid-cols-1 gap-4 md:grid-cols-3">
          {stats.map((s, i) => (
            <div
              key={i}
              className="relative flex flex-col items-start gap-8 overflow-hidden rounded-2xl"
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
                  className="mb-3 text-5xl font-bold"
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
              <div className="mt-2 flex-1">
                <img
                  src={s.image}
                  alt={s.value}
                  className="size-full object-contain object-bottom px-6 pb-6"
                  style={{ maxHeight: 200 }}
                />

                {/* CTA button on dark card */}
                {s.showButton && (
                  <div className="absolute bottom-6 left-7">
                    <button className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-gray-900 shadow transition-shadow hover:shadow-md">
                      Read Case Studies
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* ── IDEAL CLIENT SECTION ── */}
        <div className="grid grid-cols-1 items-start gap-12 md:grid-cols-2 md:gap-16">

          {/* Left */}
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: "#4ecca3" }}>
              Ideal Client
            </p>
            <h2 className="mb-5 text-4xl font-bold text-gray-900">
              Who we work with
            </h2>
            <p className="mb-4 text-base leading-relaxed text-gray-500">
              YeloBase is built for businesses that are already operational — and ready to systematize.
            </p>
            <p className="text-base leading-relaxed text-gray-500">
              We work with founders, operations heads, and finance leads across professional services, trading, manufacturing, and SaaS companies — globally.
            </p>
          </div>

          {/* Right: 2x2 grid */}
          <div className="grid grid-cols-2 gap-3">
            {idealClients.map((c, i) => (
              <div
                key={i}
                className="rounded-xl bg-white p-5"
                style={{
                  borderLeft: "3px solid #4ecca3",
                  boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
                }}
              >
                <p className="mb-1 text-sm font-bold text-gray-900">{c.title}</p>
                <p className="text-sm leading-relaxed text-gray-500">{c.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}