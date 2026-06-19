"use client";

import { useEffect, useRef, useState } from "react";

const problems = [
  "Invoices get delayed because no one was notified.",
  "You can't see real cash flow without opening five files.",
  "Follow-ups fall through the cracks every single week.",
  "Your team wastes hours on work that should be automatic.",
];

const solutions = [
  "Notifications and follow-ups happen automatically.",
  "Cash flow is visible on one live dashboard, always.",
  "Nothing slips — every task is tracked and assigned.",
  "Your team focuses on work that actually moves the needle.",
];

export function Services() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const scrollable = rect.height - window.innerHeight;
      const scrolled = Math.min(Math.max(-rect.top, 0), scrollable);

      const p = scrollable > 0 ? scrolled / scrollable : 0;
      setProgress(p);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const solutionTranslate = 180 - progress * 180;
  const problemOpacity = Math.max(1 - progress * 1.4, 0);
  const solutionOpacity = Math.min(progress * 1.5, 1);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[125vh] overflow-hidden"
      style={{
        backgroundColor: interpolateColor("#161616", "#F5F5F2", progress),
        backgroundImage:
          progress < 0.55
            ? `
              linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
            `
            : "none",
        backgroundSize: "60px 60px",
      }}
    >
      <div className="sticky top-12 flex min-h-screen items-center justify-center px-6">
        <div className="relative h-[700px] w-full max-w-[1000px]">
          {/* WHITE CARD */}
          <div
            className="absolute left-1/2 top-0 -translate-x-1/2 rounded-[24px] bg-[#F4F4F3] shadow-2xl"
            style={{
              width: "623.88px",
              height: "516px",
              opacity: problemOpacity,
              transform: `translateX(-50%) scale(${0.97 + progress * 0.03})`,
            }}
          >
            <div className="p-12">
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-[#E05A4E]">
                Reality Check
              </p>

              <h2 className="mb-5 text-[36px] font-semibold leading-[1.05] text-[#111]">
                Sounds like your
                <br />
                Monday?
              </h2>

              <p className="mb-8 text-lg text-[#555]">
                If this sounds familiar, your systems may be holding your growth
                back.
              </p>

              <ul className="space-y-5">
                {problems.map((item, index) => (
                  <li key={index} className="flex gap-3">
                    <span className="mt-[2px] text-red-500">⊗</span>
                    <span className="text-[#444]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* DARK CARD */}
          <div
            className="absolute left-1/2 rounded-[24px] border border-violet-500 bg-[#09090B] shadow-2xl"
            style={{
              width: "734.18px",
              height: "622.92px",
              top: "220px",
              opacity: solutionOpacity,
              transform: `translateX(-50%) translateY(${solutionTranslate}px)`,
            }}
          >
            <div className="p-14">
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-[#4ECCA3]">
                Our Take
              </p>

              <h2 className="mb-5 text-[42px] font-semibold leading-[1.05] text-white">
                This isn’t a tool issue,
                <br />
                it’s a system issue.
              </h2>

              <p className="mb-8 text-lg text-[#9F9F9F]">
                Most companies have the tools—what they lack is a system that
                connects and scales. That’s where we come in.
              </p>

              <ul className="space-y-5">
                {solutions.map((item, index) => (
                  <li key={index} className="flex gap-3">
                    <span className="mt-[2px] text-green-400">✓</span>
                    <span className="text-[#D2D2D2]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function interpolateColor(color1: string, color2: string, factor: number) {
  const c1 = hexToRgb(color1);
  const c2 = hexToRgb(color2);

  const r = Math.round(c1.r + factor * (c2.r - c1.r));
  const g = Math.round(c1.g + factor * (c2.g - c1.g));
  const b = Math.round(c1.b + factor * (c2.b - c1.b));

  return `rgb(${r}, ${g}, ${b})`;
}

function hexToRgb(hex: string) {
  return {
    r: parseInt(hex.slice(1, 3), 16),
    g: parseInt(hex.slice(3, 5), 16),
    b: parseInt(hex.slice(5, 7), 16),
  };
}