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
      className="flex w-full flex-col items-center px-6 py-20 md:py-12"
      style={{ backgroundColor: "#fde8e8" }}
    >
      {/* Header */}
      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: "#4ecca3" }}>
        Why Yelobase?
      </p>
      <h2 className="mb-4 max-w-2xl text-center text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
        We&apos;re not your vendor. We&apos;re your technology partner
      </h2>
      <p className="mb-14 text-center text-base text-gray-500">
        There&apos;s a difference — and it matters more than you&apos;d think.
      </p>

      {/* Outer wrapper — gives room for overflow */}
      <div
        className="relative w-full max-w-4xl"
        style={{ paddingTop: OVERFLOW, paddingBottom: OVERFLOW }}
      >
        {/* Dark comparison table */}
        <div
          className="w-full overflow-hidden rounded-2xl"
          style={{ backgroundColor: "#2c2b29" }}
        >
          {/* Header row */}
          <div className="grid grid-cols-3 border-b border-white/10 px-8 py-5">
            <p className="text-sm text-white">
              <span className="font-bold">Software</span>{" "}
              <span className="font-normal text-gray-400">vendor</span>
            </p>
            <p className="text-sm text-white">
              <span className="font-bold">Implementation</span>{" "}
              <span className="font-normal text-gray-400">Agency</span>
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
              <p className="text-sm text-gray-300">{row.vendor}</p>
              <p className="text-sm text-gray-300">{row.agency}</p>
              <p />
            </div>
          ))}
        </div>

        {/* Floating Yelobase card — overflows top & bottom */}
        <div
          className="absolute right-0 overflow-hidden rounded-2xl shadow-2xl"
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
              className="w-full max-w-md object-contain md:max-w-lg"
              priority
            />
            <span className="ml-1 text-sm font-normal text-white/70">Partner</span>
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
                <p className="text-sm font-medium text-white">{row.partner}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quote */}
      <div className="mt-6 flex flex-col items-center gap-1">
        <p className="text-base italic" style={{ color: "#9ca3af" }}>
          &ldquo;Leave the headache to us.&rdquo;
        </p>
        <div className="h-0.5 w-32" style={{ backgroundColor: "#4ecca3" }} />
      </div>
    </section>
  );
}