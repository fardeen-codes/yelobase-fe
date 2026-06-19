import Image from "next/image";
import Link from "next/link";

const companies = [
  "/images/logos/optimal.svg",
  "/images/logos/swingfit.svg",
  "/images/logos/optimal.svg",
  "/images/logos/swingfit.svg",
  "/images/logos/optimal.svg",
  "/images/logos/swingfit.svg",
  "/images/logos/optimal.svg",
  "/images/logos/swingfit.svg",
];

export function Hero() {
  return (
    <section className="overflow-hidden">
      <div className="mx-auto p-6">
        {/* Content */}
        <div className="mx-auto max-w-5xl text-center">
          <p className="font-mono text-3xl tracking-tight text-black md:text-5xl">
            Your Business Systems.
          </p>

          <h1 className="mt-2 font-mono text-5xl font-bold leading-none tracking-tight text-black md:text-7xl">
            Properly Built and Owned.
          </h1>

          <p className="text-center text-[18px] font-normal leading-6 tracking-normal text-[#3A3A3A]">
            We are a technology partner for growing businesses. Starting
            with Zoho and expanding across your entire <br />stack — we design,
            build, automate, and manage the systems that let you scale
            without chaos.
          </p>

          {/* CTA */}
          <div className="mt-10 flex flex-col items-center justify-center gap-5 sm:flex-row">
            <Link
              href="/work"
              className="font-semibold text-neutral-700 transition hover:text-black"
            >
              See our work
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-[#FF6D6D] px-6 py-3 font-semibold text-white transition hover:bg-[#ff5b5b]"
            >
              Book Free Audit
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Illustration */}
        <div className="mt-16 flex justify-center md:mt-20">
          <Image
            src="/images/logos/top-img.svg"
            alt="Business systems illustration"
            width={980}
            height={540}
            priority
            className="h-auto w-full max-w-[980px]"
          />
        </div>

        {/* Trusted Companies */}
        <div className="my-24">
          <p className="text-center text-sm font-bold uppercase tracking-wide text-neutral-700">
            Trusted by Companies
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-10 opacity-70">
            {companies.map((logo, index) => (
              <Image
                key={index}
                src={logo}
                alt="Company Logo"
                width={120}
                height={40}
                className="h-8 w-auto"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}