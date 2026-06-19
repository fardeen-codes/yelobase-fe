"use client";

const services = [
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>
      </svg>
    ),
    title: ["Zoho", "Implementation"],
    tag: "Foundation",
    back: "Full deployment of CRM, Books, Inventory, People, Creator, Analytics, and more. Configured for your real processes, not a default template.",
    link: "Learn More",
    tagColor: "#a78bfa",
    backBg: "#ede9fe",
    backAccent: "#6d28d9",
    backBody: "#4c1d95",
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/>
        <rect x="3" y="14" width="7" height="7" rx="1"/><path d="M17.5 14v3M14 17.5h7"/>
      </svg>
    ),
    title: ["End-to-End", "Automation"],
    tag: "Efficiency",
    back: "We map, build, and maintain automated workflows across your entire Zoho stack — so your team stops doing manually what a system can handle instantly.",
    link: "See How",
    tagColor: "#34d399",
    backBg: "#d1fae5",
    backAccent: "#065f46",
    backBody: "#064e3b",
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: ["Managed Services", "Retainer"],
    tag: "Partnership",
    back: "We stay on as your dedicated tech team — updates, new automations, user issues, and continuous improvement every single month.",
    link: "Get Started",
    tagColor: "#f472b6",
    backBg: "#fce7f3",
    backAccent: "#9d174d",
    backBody: "#831843",
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/>
      </svg>
    ),
    title: ["Training &", "Enablement"],
    tag: "Growth",
    back: "We train your team to own and operate the systems we build — so you're never dependent on us for day-to-day tasks.",
    link: "Explore",
    tagColor: "#fbbf24",
    backBg: "#fef9c3",
    backAccent: "#92400e",
    backBody: "#78350f",
  },
];

export function Results() {
  return (
    <>
      <style>{`
        .flip-wrapper {
          perspective: 1200px;
          width: 100%;
          height: 194px;
        }
        .flip-inner {
          position: relative;
          width: 100%;
          height: 100%;
          transform-style: preserve-3d;
          transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          will-change: transform;
        }
        .flip-wrapper:hover .flip-inner {
          transform: rotateY(180deg);
        }
        .flip-front,
        .flip-back {
          position: absolute;
          inset: 0;
          border-radius: 1rem;
          padding: 1.5rem;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }
        .flip-back {
          transform: rotateY(180deg);
        }
      `}</style>

      <section className="w-full px-6 py-20 md:py-24" style={{ backgroundColor: "#fdf8f6" }}>
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-16">

          {/* Left */}
          <div className="md:pr-8">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: "#4ecca3" }}>
              What We Do
            </p>
            <h2 className="mb-6 text-[42px] font-semibold leading-[1.1] text-gray-900">
              We build and manage your business operating system.
            </h2>
            <p className="max-w-md text-base leading-relaxed text-gray-500">
              Most Zoho partners implement and disappear. We don&apos;t. We become your
              technology arm — designing your systems, automating your operations,
              and staying on as the team that keeps everything running.
            </p>
          </div>

          {/* Right: 2×2 grid */}
          <div className="grid grid-cols-2 gap-4">
            {services.map((s, i) => (
              <div key={i} className="flip-wrapper">
                <div className="flip-inner">

                  {/* FRONT */}
                  <div
                    className="flip-front flex flex-col justify-between bg-white"
                    style={{ boxShadow: "0 1px 4px rgba(0,0,0,0.06), 0 4px 20px rgba(0,0,0,0.04)" }}
                  >
                    <span style={{ color: "#9ca3af" }}>{s.icon}</span>
                    <div>
                      {/* Title split into 2 lines */}
                      <div className="mb-1">
                        {s.title.map((line, j) => (
                          <p key={j} className="text-[15px] font-bold leading-snug text-gray-900">
                            {line}
                          </p>
                        ))}
                      </div>
                      <p className="text-xs font-medium" style={{ color: s.tagColor }}>{s.tag}</p>
                    </div>
                  </div>

                  {/* BACK */}
                  <div
                    className="flip-back flex flex-col justify-between"
                    style={{ backgroundColor: s.backBg }}
                  >
                    <p className="text-sm leading-relaxed" style={{ color: s.backBody }}>{s.back}</p>
                    <a href="#" className="text-sm font-semibold underline underline-offset-2" style={{ color: s.backAccent }}>
                      {s.link} →
                    </a>
                  </div>

                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}