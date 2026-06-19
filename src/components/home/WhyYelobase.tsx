"use client";

import Image from "next/image";

const rows = [
  {
    vendor: "Sells licenses",
    agency: "Installs software",
    partner: "Architects your system",
  },
  {
    vendor: "Builds and leaves",
    agency: "Delivers project",
    partner: "Stays as your tech team",
  },
  {
    vendor: "Advises on features",
    agency: "Responds to tickets",
    partner: "Proactively optimizes",
  },
];

function BoltIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
  );
}

export default function WhyYelobase() {
  // Table has header + 3 rows. Each row ~64px, header ~56px
  // Floating card should overflow top and bottom by ~24px
  const OVERFLOW = 28;

  return (
    <section
      className="w-full px-6 py-20 md:py-12 flex flex-col items-center"
      style={{ backgroundColor: "#fde8e8" }}
    >
      {/* Header */}
      <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-4" style={{ color: "#4ecca3" }}>
        Why Yelobase?
      </p>
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center leading-tight mb-4 max-w-2xl">
        We&apos;re not your vendor. We&apos;re your technology partner
      </h2>
      <p className="text-gray-500 text-base text-center mb-14">
        There&apos;s a difference — and it matters more than you&apos;d think.
      </p>

      {/* Outer wrapper — gives room for overflow */}
      <div
        className="relative w-full max-w-4xl"
        style={{ paddingTop: OVERFLOW, paddingBottom: OVERFLOW }}
      >
        {/* Dark comparison table */}
        <div
          className="rounded-2xl overflow-hidden w-full"
          style={{ backgroundColor: "#2c2b29" }}
        >
          {/* Header row */}
          <div className="grid grid-cols-3 px-8 py-5 border-b border-white/10">
            <p className="text-white text-sm">
              <span className="font-bold">Software</span>{" "}
              <span className="text-gray-400 font-normal">vendor</span>
            </p>
            <p className="text-white text-sm">
              <span className="font-bold">Implementation</span>{" "}
              <span className="text-gray-400 font-normal">Agency</span>
            </p>
            <p /> {/* covered by floating card */}
          </div>

          {/* Data rows */}
          {rows.map((row, i) => (
            <div
              key={i}
              className="grid grid-cols-3 px-8 py-5"
              style={{
                borderBottom: i < rows.length - 1 ? "1px solid rgba(255,255,255,0.07)" : "none",
              }}
            >
              <p className="text-gray-300 text-sm">{row.vendor}</p>
              <p className="text-gray-300 text-sm">{row.agency}</p>
              <p />
            </div>
          ))}
        </div>

        {/* Floating Yelobase card — overflows top & bottom */}
        <div
          className="absolute right-0 rounded-2xl overflow-hidden shadow-2xl"
          style={{
            width: "34%",
            top: 0,       // flush with padding top = OVERFLOW px above table
            bottom: 0,    // flush with padding bottom = OVERFLOW px below table
            zIndex: 10,
          }}
        >
          {/* Coral header */}
          <div
            className="flex items-center gap-2 px-6"
            style={{
              backgroundColor: "#f07272",
              height: `calc(56px + ${OVERFLOW}px)`, // header height + overflow
              // paddingTop: OVERFLOW,
            }}
          >
            {/* <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path d="M4 4l16 16M20 4L4 20" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
            </svg>
            <span className="text-white font-bold text-base">Yelobase</span> */}
            <Image
              src="/images/logos/yb-white.svg"
              alt="Zoho and Yelobase partnership illustration"
              width={98}
              height={32}
              style={{width:"98px"}}
              className="w-full max-w-md md:max-w-lg object-contain"
              priority
            />
            <span className="text-white/70 text-sm font-normal ml-1">Partner</span>
          </div>

          {/* Dark rows — stretch to fill remaining space */}
          <div
            className="flex flex-col"
            style={{
              backgroundColor: "#1c1b19",
              flex: 1,
            }}
          >
            {rows.map((row, i) => (
              <div
                key={i}
                className="flex items-center gap-3 px-6"
                style={{
                  height: i === rows.length - 1
                    ? `calc(64px + ${OVERFLOW}px)`  // last row gets bottom overflow
                    : "64px",
                  borderBottom: i < rows.length - 1 ? "1px solid rgba(255,255,255,0.07)" : "none",
                  alignItems: i === rows.length - 1 ? "flex-start" : "center",
                  paddingTop: i === rows.length - 1 ? "20px" : undefined,
                }}
              >
                <BoltIcon />
                <p className="text-white text-sm font-medium">{row.partner}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quote */}
      <div className="flex flex-col items-center mt-6 gap-1">
        <p className="text-base italic" style={{ color: "#9ca3af" }}>
          &ldquo;Leave the headache to us.&rdquo;
        </p>
        <div className="w-32 h-0.5" style={{ backgroundColor: "#4ecca3" }} />
      </div>
    </section>
  );
}