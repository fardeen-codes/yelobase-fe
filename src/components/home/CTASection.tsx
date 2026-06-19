"use client";

import Image from "next/image";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="w-full px-6 py-10 md:py-16" style={{ backgroundColor: "#fdf8f6" }}>

      {/* Outer wrapper — overflow visible taaki decorations bahar nikal sakein */}
      <div className="relative mx-auto max-w-6xl">

        {/* Top-left chalk — half bahar, half andar */}
        <div
          className="pointer-events-none absolute z-10 select-none"
          style={{ top: -24, left: 32, width: 72, height: 72 }}
        >
          <Image src="/images/logos/cta-img-2.svg" alt="" fill className="object-contain" />
        </div>

        {/* Bottom-right coin — half bahar */}
        <div
          className="pointer-events-none absolute z-10 select-none"
          style={{ bottom: -24, right: 32, width: 64, height: 64 }}
        >
          <Image src="/images/logos/cta-img-1.svg" alt="" fill className="object-contain" />
        </div>

        {/* Dark card — NO overflow-hidden */}
        <div
          className="relative rounded-2xl px-10 py-14 md:px-16"
          style={{ backgroundColor: "#111110" }}
        >
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">

            {/* Left */}
            <div className="max-w-xl">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: "#4ecca3" }}>
                Scale With Clarity
              </p>
              <h2
                className="mb-4 text-3xl font-bold leading-tight text-white md:text-4xl"
                style={{ fontFamily: "monospace" }}
              >
                Ready to build a system<br />that actually scales?
              </h2>
              <p className="max-w-md text-sm leading-relaxed text-gray-400">
                Book a free Systems Audit. We&apos;ll look at your current setup, identify the
                biggest gaps, and tell you exactly what we&apos;d do — no obligation.
              </p>
            </div>

            {/* Button */}
            <div className="shrink-0">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl px-8 py-4 text-sm font-semibold text-white transition-opacity hover:opacity-90"
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