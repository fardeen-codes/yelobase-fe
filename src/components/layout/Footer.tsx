// import Link from 'next/link';

// import { routes } from '@/constants/routes';

// export function Footer() {
//   return (
//     <footer className="border-t border-slate-900/80 bg-slate-950/95 py-10">
//       <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
//         <div>
//           <p className="text-sm font-semibold text-white">Yelobase</p>
//           <p className="mt-2 text-sm text-slate-500">Modern WordPress strategy and execution.
// </p>
//         </div>
//         <div className="flex flex-wrap gap-4 text-sm text-slate-400">
//           <Link href={routes.blogs} className="hover:text-white">Blog</Link>
//           <Link href={routes.customerStories} className="hover:text-white">Customer stories</Link>
//           <Link href={routes.contact} className="hover:text-white">Contact</Link>
//         </div>
//       </div>
//     </footer>
//   );
// }

// components/Footer.tsx

import { Mail, MapPin,Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const services = [
  "Zoho Automation",
  "AI Agents",
  "Data Migration",
  "Pricing",
];

const companyLinks = [
  "About Us",
  "Wall of Love",
  "Contact",
  "Privacy Policy",
  "Terms of Service",
];

export function Footer() {
  return (
    <footer className="bg-[#090911] text-white">
      <div className="container mx-auto px-6 pt-16">
        {/* Top Section */}
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">
  {/* Left Side */}
  <div className="flex flex-col gap-12 sm:flex-row sm:gap-24 lg:gap-32">
    {/* Services */}
    <div>
      <h3 className="mb-8 text-sm font-semibold uppercase text-neutral-500">
        Services
      </h3>

      <ul className="space-y-6">
        {services.map((item) => (
          <li key={item}>
            <Link
              href="#"
              className="text-[18px] text-neutral-100 transition hover:text-white"
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </div>

    {/* Company */}
    <div>
      <h3 className="mb-8 text-sm font-semibold uppercase text-neutral-500">
        Company
      </h3>

      <ul className="space-y-6">
        {companyLinks.map((item) => (
          <li key={item}>
            <Link
              href="#"
              className="text-[18px] text-neutral-100 transition hover:text-white"
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </div>

  {/* Right Side - Contact */}
  <div className="flex flex-col gap-8 lg:items-start">
    <div className="flex items-center gap-4">
      <Mail className="size-6 text-neutral-400" />

      <a
        href="mailto:hello@yelobase.com"
        className="text-[18px] text-neutral-100 hover:text-white"
      >
        hello@yelobase.com
      </a>
    </div>

    <div className="flex items-center gap-4">
      <Phone className="size-6 text-neutral-400" />

      <a
        href="tel:+919551714690"
        className="text-[18px] text-neutral-100 hover:text-white"
      >
        +91 9551714690
      </a>
    </div>

    <div className="flex items-center gap-4">
      <MapPin className="size-6 text-neutral-400" />

      <span className="text-[18px] text-neutral-100">
        USA, UK, UAE, India
      </span>
    </div>
  </div>
</div>

        {/* Bottom Card */}
        <div className="mt-16 rounded-b-none rounded-t-[20px] bg-black p-8">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center">
            {/* Logos */}
            <div className="flex flex-shrink-0 items-center gap-6">
              <Image
                src="/images/logos/yb-logo-white.svg"
                alt="Yelobase"
                width={150}
                height={40}
                className="h-auto"
              />

              <div className="h-10 w-px bg-neutral-700" />

              <Image
                src="/images/logos/zoho-partner.svg"
                alt="Zoho Authorized Partner"
                width={140}
                height={48}
                className="h-auto"
              />
            </div>

            {/* Description */}
            <p className="max-w-4xl text-[17px] leading-8 text-neutral-400">
              Transforming businesses through intelligent Zoho automation and
              custom AI agents. We help companies streamline operations and
              enhance productivity across all industries.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}