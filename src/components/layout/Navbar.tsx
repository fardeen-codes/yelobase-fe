'use client';

import Image from "next/image";
import Link from 'next/link';
import { useState } from 'react';

import { routes } from '@/constants/routes';

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="" style={{ backgroundColor: "#FFFCF8" }}>
      <div className="mx-auto flex max-w-7xl items-center justify-between p-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-12">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logos/yb-logo.svg"
              alt="Yelobase Logo"
              width={140}
              height={40}
              priority
              className="h-10 w-auto"
            />
          </Link>
          <nav className="hidden items-center gap-8 md:flex">
            <Link href={routes.services} className="text-black transition hover:text-[#FF7070]">Services</Link>
            <Link href={routes.industries} className="text-black transition hover:text-[#FF7070]">Industries</Link>
            <Link href={routes.customerStories} className="text-black transition hover:text-[#FF7070]">Customer Stories</Link>
            <Link href={routes.blogs} className="text-black transition hover:text-[#FF7070]">Blog</Link>
            <Link href={routes.about} className="text-black transition hover:text-[#FF7070]">About</Link>
            <Link href={routes.contact} className="text-black transition hover:text-[#FF7070]">Contact Us</Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <Link href={routes.contact} className="hover:bg-brand-400 inline-flex rounded-lg bg-black px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#FF7070]">Book Free Audit</Link>
          <button type="button" onClick={() => setOpen(!open)} className="inline-flex size-10 items-center justify-center rounded-full border border-slate-800 text-slate-300 hover:border-slate-700 hover:text-white md:hidden">☰</button>
        </div>
      </div>
      <div className={open ? 'block' : 'hidden'}>
        <div className="space-y-4 border-t border-slate-900/80 bg-slate-950/95 px-4 py-5 md:hidden">
          <Link href={routes.blogs} className="block text-slate-300 hover:text-[#FF7070]">Blog</Link>
          <Link href={routes.customerStories} className="block text-slate-300 hover:text-[#FF7070]">Stories</Link>
          <Link href={routes.contact} className="block text-slate-300 hover:text-[#FF7070]">Contact</Link>
        </div>
      </div>
    </header>
  );
}
