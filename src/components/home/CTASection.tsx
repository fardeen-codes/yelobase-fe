"use client";

import Image from "next/image";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="w-full px-6 py-10 md:py-16" style={{ backgroundColor: "#fdf8f6" }}>

      {/* Outer wrapper — overflow visible taaki decorations bahar nikal sakein */}
      <div className="relative max-w-6xl mx-auto">

        {/* Top-left chalk — half bahar, half andar */}
        <div
          className="absolute pointer-events-none select-none z-10"
          style={{ top: -24, left: 32, width: 72, height: 72 }}
        >
          <Image src="/images/logos/cta-img-2.svg" alt="" fill className="object-contain" />
        </div>

        {/* Bottom-right coin — half bahar */}
        <div
          className="absolute pointer-events-none select-none z-10"
          style={{ bottom: -24, right: 32, width: 64, height: 64 }}
        >
          <Image src="/images/logos/cta-img-1.svg" alt="" fill className="object-contain" />
        </div>

        {/* Dark card — NO overflow-hidden */}
        <div
          className="relative rounded-2xl px-10 md:px-16 py-14"
          style={{ backgroundColor: "#111110" }}
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">

            {/* Left */}
            <div className="max-w-xl">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-4" style={{ color: "#4ecca3" }}>
                Scale With Clarity
              </p>
              <h2
                className="text-3xl md:text-4xl font-bold leading-tight mb-4 text-white"
                style={{ fontFamily: "monospace" }}
              >
                Ready to build a system<br />that actually scales?
              </h2>
              <p className="text-gray-400 text-sm leading-relaxed max-w-md">
                Book a free Systems Audit. We'll look at your current setup, identify the
                biggest gaps, and tell you exactly what we'd do — no obligation.
              </p>
            </div>

            {/* Button */}
            <div className="shrink-0">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 font-semibold text-white px-8 py-4 rounded-xl text-sm transition-opacity hover:opacity-90"
                style={{ backgroundColor: "#f07272" }}
              >
                Book Free Audit
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}