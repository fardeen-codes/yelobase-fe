const fs = require('fs');
const path = require('path');
const root = path.resolve(__dirname);

const files = {
  '.gitignore': `# Node
node_modules
/.next
/.vercel
/dist

# Logs
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Env
.env.local
.env.*.local

# Misc
.DS_Store
`,
  'package.json': `{
  "name": "yelobase",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "format": "prettier --write ."
  },
  "dependencies": {
    "clsx": "^2.1.1",
    "framer-motion": "^11.0.0",
    "next": "15.2.4",
    "react": "18.3.1",
    "react-dom": "18.3.1",
    "react-hook-form": "^7.51.1",
    "tailwind-merge": "^1.15.0",
    "zod": "^3.26.0"
  },
  "devDependencies": {
    "@hookform/resolvers": "^3.1.2",
    "@types/node": "^20.14.0",
    "@types/react": "^18.3.5",
    "@types/react-dom": "^18.3.0",
    "@typescript-eslint/eslint-plugin": "^7.0.0",
    "@typescript-eslint/parser": "^7.0.0",
    "autoprefixer": "^10.4.19",
    "eslint": "^8.57.0",
    "eslint-config-next": "15.2.4",
    "eslint-config-prettier": "^9.0.0",
    "eslint-plugin-import": "^2.29.1",
    "eslint-plugin-react": "^7.33.2",
    "eslint-plugin-react-hooks": "^4.6.0",
    "eslint-plugin-simple-import-sort": "^10.0.0",
    "eslint-plugin-tailwindcss": "^3.10.0",
    "postcss": "^8.4.40",
    "prettier": "^3.0.0",
    "tailwindcss": "^3.4.4",
    "typescript": "^5.6.2"
  }
}
`,
  'next.config.ts': `import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
};

export default nextConfig;
`,
  'tsconfig.json': `{
  "compilerOptions": {
    "target": "ES2020",
    "lib": ["dom", "dom.iterable", "es2020"],
    "allowJs": false,
    "skipLibCheck": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "types": ["node"],
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["next-env.d.ts", ".next/types/**/*.ts", "src/**/*"],
  "exclude": ["node_modules"]
}
`,
  'next-env.d.ts': `/// <reference types="next" />
/// <reference types="next/image-types/global" />

// NOTE: This file should not be edited
`,
  'tailwind.config.ts': `import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f5f6ff',
          100: '#e7e9ff',
          500: '#3f46ff',
          700: '#2f36d6',
        },
      },
    },
  },
  plugins: [],
};

export default config;
`,
  'postcss.config.js': `module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
`,
  '.eslintrc.json': `{
  "extends": ["next/core-web-vitals", "plugin:@typescript-eslint/recommended", "prettier"],
  "plugins": ["@typescript-eslint", "simple-import-sort", "tailwindcss"],
  "rules": {
    "@typescript-eslint/no-unused-vars": ["error", { "argsIgnorePattern": "^_" }],
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "tailwindcss/classnames-order": "warn",
    "tailwindcss/enforces-shorthand": "warn",
    "tailwindcss/no-custom-classname": "off"
  }
}
`,
  '.prettierrc': `{
  "singleQuote": true,
  "trailingComma": "all",
  "printWidth": 90,
  "tabWidth": 2,
  "semi": true
}
`,
  'README.md': `# Yelobase

A production-ready Next.js 15 company website scaffold with App Router, TypeScript, Tailwind CSS, Shadcn UI conventions, Framer Motion, React Hook Form, Zod, and WordPress REST API integration.

## Getting Started

1. Install dependencies
   \`npm install\`
2. Create a \.env.local file with your WordPress API URL and revalidation secret.
3. Run the development server
   \`npm run dev\`
4. Build the project
   \`npm run build\`
`,
  '.env.local': `WORDPRESS_API_URL=https://example.com/wp-json/wp/v2
REVALIDATE_SECRET=replace_with_a_secret
`,
  'components.json': `{
  "name": "yelobase-ui",
  "version": "1.0.0",
  "components": [
    "button",
    "card",
    "badge",
    "input",
    "textarea",
    "dialog",
    "skeleton",
    "separator"
  ]
}
`,
  'public/robots.txt': `User-agent: *
Allow: /
`,
  'public/favicon.ico': '',
  'src/styles/globals.css': `@tailwind base;
@tailwind components;
@tailwind utilities;

html {
  scroll-behavior: smooth;
}

body {
  @apply bg-slate-950 text-slate-100 antialiased;
}

::selection {
  @apply bg-brand-500 text-white;
}
`,
  'src/app/layout.tsx': `import type { Metadata } from 'next';
import './globals.css';
import { siteConfig } from '@/constants/site';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-950 text-slate-100">
        <Navbar />
        <main className="min-h-[calc(100vh-6rem)]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
`,
  'src/app/page.tsx': `import { CTASection } from '@/components/home/CTASection';
import { Comparison } from '@/components/home/Comparison';
import { Hero } from '@/components/home/Hero';
import { ProblemSection } from '@/components/home/ProblemSection';
import { Results } from '@/components/home/Results';
import { Services } from '@/components/home/Services';
import { StoriesPreview } from '@/components/home/StoriesPreview';
import { TrustedBy } from '@/components/home/TrustedBy';
import { ZohoPartner } from '@/components/home/ZohoPartner';

export default function HomePage() {
  return (
    <div className="space-y-24 py-8 px-4 sm:px-6 lg:px-8">
      <Hero />
      <TrustedBy />
      <ProblemSection />
      <Services />
      <Comparison />
      <ZohoPartner />
      <Results />
      <StoriesPreview />
      <CTASection />
    </div>
  );
}
`,
  'src/app/loading.tsx': `export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4 text-slate-300">
      <div className="animate-pulse rounded-2xl border border-slate-800 bg-slate-900/80 p-10 text-center shadow-lg">
        <p>Loading Yelobase content...</p>
      </div>
    </div>
  );
}
`,
  'src/app/not-found.tsx': `import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-950 px-4 text-center text-slate-100">
      <div className="space-y-6 rounded-3xl border border-slate-800 bg-slate-900/80 p-10 shadow-xl">
        <h1 className="text-4xl font-semibold">Page not found</h1>
        <p className="max-w-xl text-slate-400">
          The page you&rsquo;re looking for does not exist or has been moved. Use the navigation to return home.
        </p>
        <Link href="/" className="inline-flex rounded-full bg-brand-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-400">
          Return home
        </Link>
      </div>
    </div>
  );
}
`,
  'src/app/sitemap.ts': `import { MetadataRoute } from 'next';
import { siteConfig } from '@/constants/site';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteConfig.url,
      lastModified: new Date(),
    },
    {
      url: siteConfig.url + '/blogs',
      lastModified: new Date(),
    },
    {
      url: siteConfig.url + '/contact',
      lastModified: new Date(),
    },
    {
      url: siteConfig.url + '/customer-stories',
      lastModified: new Date(),
    },
  ];
}
`,
  'src/app/robots.ts': `import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: '/sitemap.xml',
  };
}
`,
  'src/app/blogs/page.tsx': `import { FeaturedBlog } from '@/components/blog/FeaturedBlog';
import { BlogGrid } from '@/components/blog/BlogGrid';
import { Pagination } from '@/components/blog/Pagination';
import { getFeaturedPost, getPosts } from '@/services/wordpress.service';

export default async function BlogsPage() {
  const posts = await getPosts(1);
  const featuredPost = await getFeaturedPost();

  return (
    <div className="space-y-10 py-10 px-4 sm:px-6 lg:px-8">
      <div className="space-y-3">
        <h1 className="text-3xl font-semibold text-white">Latest insights</h1>
        <p className="max-w-2xl text-slate-400">
          Explore Yelobase editorial and WordPress content that helps teams scale operations and connect with customers.
        </p>
      </div>
      <FeaturedBlog post={featuredPost} />
      <BlogGrid posts={posts} />
      <Pagination currentPage={1} totalPages={5} />
    </div>
  );
}
`,
  'src/app/blogs/loading.tsx': `export default function LoadingBlogs() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center px-4 text-slate-300">
      <p>Loading blog stories...</p>
    </div>
  );
}
`,
  'src/app/blogs/[slug]/page.tsx': `import type { Metadata } from 'next';
import { BlogContent } from '@/components/blog/BlogContent';
import { RelatedBlogs } from '@/components/blog/RelatedBlogs';
import { ShareButtons } from '@/components/blog/ShareButtons';
import { getPostBySlug, getRelatedPosts } from '@/services/wordpress.service';
import { notFound } from 'next/navigation';

interface BlogPageProps {
  params: { slug: string };
}

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    return {
      title: 'Blog post not found',
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: BlogPageProps) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const related = await getRelatedPosts(post.categoryId);

  return (
    <div className="space-y-10 py-10 px-4 sm:px-6 lg:px-8">
      <BlogContent post={post} />
      <ShareButtons post={post} />
      <RelatedBlogs posts={related} />
    </div>
  );
}
`,
  'src/app/blogs/[slug]/loading.tsx': `export default function LoadingBlogDetails() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center px-4 text-slate-300">
      <p>Loading blog post...</p>
    </div>
  );
}
`,
  'src/app/customer-stories/page.tsx': `export default function CustomerStoriesPage() {
  return (
    <div className="space-y-8 py-10 px-4 sm:px-6 lg:px-8">
      <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-8 shadow-xl">
        <h1 className="text-3xl font-semibold text-white">Customer stories</h1>
        <p className="mt-3 text-slate-400">
          Discover how Yelobase partners help clients transform processes and deliver measurable growth.
        </p>
      </div>
    </div>
  );
}
`,
  'src/app/contact/page.tsx': `import { ContactForm } from '@/components/contact/ContactForm';

export default function ContactPage() {
  return (
    <div className="py-10 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl space-y-6 rounded-3xl border border-slate-800 bg-slate-900/80 p-8 shadow-xl">
        <div>
          <h1 className="text-3xl font-semibold text-white">Contact Yelobase</h1>
          <p className="mt-3 text-slate-400">
            Send us a message and we&rsquo;ll connect you with the right team for your WordPress and operations strategy.
          </p>
        </div>
        <ContactForm />
      </div>
    </div>
  );
}
`,
  'src/app/api/contact/route.ts': `import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { contactSchema } from '@/validations/contact.schema';
import { sendLead } from '@/services/lead.service';

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    const parsed = contactSchema.parse(data);

    await sendLead(parsed);

    return NextResponse.json({ success: true, message: 'Lead submitted successfully.' }, { status: 200 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ success: false, errors: error.flatten() }, { status: 422 });
    }

    return NextResponse.json({ success: false, message: 'Unable to process the contact request.' }, { status: 500 });
  }
}
`,
  'src/app/api/revalidate/route.ts': `import { NextRequest, NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';

export async function POST(request: NextRequest) {
  const secret = request.headers.get('x-revalidate-secret');
  const body = await request.json();

  if (secret !== process.env.REVALIDATE_SECRET) {
    return NextResponse.json({ revalidated: false, message: 'Invalid secret.' }, { status: 401 });
  }

  const path = body?.path || '/';

  try {
    await revalidatePath(path);
    return NextResponse.json({ revalidated: true, path });
  } catch (error) {
    return NextResponse.json({ revalidated: false, error: String(error) }, { status: 500 });
  }
}
`,
  'src/components/layout/Navbar.tsx': `'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { MobileMenu } from '@/components/layout/MobileMenu';
import { routes } from '@/constants/routes';

export function Navbar() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-900/80 bg-slate-950/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-lg font-semibold text-white">
          Yelobase
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          <Link href={routes.blogs} className="text-slate-300 transition hover:text-white">
            Blog
          </Link>
          <Link href={routes.customerStories} className="text-slate-300 transition hover:text-white">
            Stories
          </Link>
          <Link href={routes.contact} className="text-slate-300 transition hover:text-white">
            Contact
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link href={routes.contact} className="inline-flex rounded-full bg-brand-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-400">
            Get in touch
          </Link>
          <button
            type="button"
            onClick={() => setShowMobileMenu(!showMobileMenu)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-800 text-slate-300 hover:border-slate-700 hover:text-white md:hidden"
          >
            <span className="text-lg">☰</span>
          </button>
        </div>
      </div>
      <MobileMenu open={showMobileMenu} onClose={() => setShowMobileMenu(false)} />
    </header>
  );
}
`,
  'src/components/layout/MobileMenu.tsx': `'use client';

import Link from 'next/link';
import { routes } from '@/constants/routes';

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  return (
    <div className={`${open ? 'block' : 'hidden'} md:hidden border-t border-slate-900/80 bg-slate-950/95`}>
      <div className="space-y-4 px-4 py-5">
        <Link href={routes.blogs} onClick={onClose} className="block text-slate-300 hover:text-white">
          Blog
        </Link>
        <Link href={routes.customerStories} onClick={onClose} className="block text-slate-300 hover:text-white">
          Stories
        </Link>
        <Link href={routes.contact} onClick={onClose} className="block text-slate-300 hover:text-white">
          Contact
        </Link>
      </div>
    </div>
  );
}
`,
  'src/components/layout/Footer.tsx': `import Link from 'next/link';
import { routes } from '@/constants/routes';

export function Footer() {
  return (
    <footer className="border-t border-slate-900/80 bg-slate-950/95 py-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 sm:px-6 lg:px-8 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-sm font-semibold text-white">Yelobase</p>
          <p className="mt-2 text-sm text-slate-500">A modern WordPress strategy partner for digital teams.</p>
        </div>
        <div className="flex flex-wrap gap-4 text-sm text-slate-400">
          <Link href={routes.blogs} className="hover:text-white">
            Blog
          </Link>
          <Link href={routes.customerStories} className="hover:text-white">
            Customer stories
          </Link>
          <Link href={routes.contact} className="hover:text-white">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
`,
  'src/components/layout/CTA.tsx': `import { Button } from '@/components/ui/button';

export function CTA() {
  return (
    <section className="rounded-3xl border border-slate-800 bg-slate-900/80 p-8 text-center shadow-xl">
      <h2 className="text-2xl font-semibold text-white">Ready to launch your next WordPress initiative?</h2>
      <p className="mt-3 text-slate-400">
        Yelobase helps teams move from strategy to execution with reliable support and measurable outcomes.
      </p>
      <Button className="mt-6 inline-flex">Contact the team</Button>
    </section>
  );
}
`,
  'src/components/home/Hero.tsx': `'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section className="grid gap-10 rounded-[2rem] border border-slate-800 bg-slate-900/80 p-10 shadow-xl lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
        <p className="text-sm uppercase tracking-[0.26em] text-brand-300">Built for growth</p>
        <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          Yelobase helps teams scale WordPress, automation, and customer experience.
        </h1>
        <p className="max-w-2xl text-slate-400">
          Ship modern digital experiences with disciplined execution, expert WP engineering, and audience-first storytelling.
        </p>
        <div className="flex flex-wrap gap-4">
          <Button>Book a free review</Button>
          <Button variant="secondary">Explore services</Button>
        </div>
      </motion.div>
      <div className="rounded-3xl bg-slate-950 p-8 text-slate-300 shadow-inner sm:p-10">
        <p className="text-sm uppercase text-brand-300">Placeholder hero card</p>
        <div className="mt-6 space-y-4">
          <p>WordPress strategy, managed hosting, editorial processes, and measurable customer experiences—all under one roof.</p>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl bg-slate-900 p-4">
              <p className="text-sm uppercase text-slate-500">Speed</p>
              <p className="mt-2 text-lg font-semibold text-white">Performance first</p>
            </div>
            <div className="rounded-3xl bg-slate-900 p-4">
              <p className="text-sm uppercase text-slate-500">Support</p>
              <p className="mt-2 text-lg font-semibold text-white">24/7 delivery</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
`,
  'src/components/home/TrustedBy.tsx': `export function TrustedBy() {
  return (
    <section className="space-y-6 rounded-[2rem] border border-slate-800 bg-slate-900/80 p-8 shadow-xl">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-2xl font-semibold text-white">Trusted by growing teams</h2>
        <p className="text-sm text-slate-400">Support, strategy, and execution for product-led growth.</p>
      </div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        {['Stripe', 'HubSpot', 'Zendesk', 'Asana'].map((name) => (
          <div key={name} className="rounded-3xl border border-slate-800 bg-slate-950/70 p-4 text-center text-slate-200">
            {name}
          </div>
        ))}
      </div>
    </section>
  );
}
`,
  'src/components/home/ProblemSection.tsx': `export function ProblemSection() {
  return (
    <section className="grid gap-8 rounded-[2rem] border border-slate-800 bg-slate-900/80 p-8 shadow-xl lg:grid-cols-[1.3fr_0.7fr]">
      <div className="space-y-4">
        <p className="text-sm uppercase tracking-[0.24em] text-brand-300">Common challenges</p>
        <h2 className="text-3xl font-semibold text-white">The gap between vision and delivery is growing.</h2>
        <p className="text-slate-400">
          Teams are wrestling with content workflow, platform reliability, and internal alignment while customers expect faster digital experiences.
        </p>
      </div>
      <div className="space-y-4 rounded-3xl border border-slate-800 bg-slate-950/80 p-6">
        {['Fragmented publishing process', 'Slow editorial approvals', 'Unreliable hosting and integrations'].map((item) => (
          <div key={item} className="rounded-3xl bg-slate-900 p-4 text-slate-300">
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}
`,
  'src/components/home/Services.tsx': `import { services } from '@/data/services';
import { Badge } from '@/components/ui/badge';

export function Services() {
  return (
    <section className="space-y-8 rounded-[2rem] border border-slate-800 bg-slate-900/80 p-8 shadow-xl">
      <div className="space-y-2">
        <p className="text-sm uppercase tracking-[0.24em] text-brand-300">Capabilities</p>
        <h2 className="text-3xl font-semibold text-white">Engineering, content, and growth services</h2>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <article key={service.id} className="rounded-3xl border border-slate-800 bg-slate-950/80 p-6">
            <Badge variant="secondary">{service.category}</Badge>
            <h3 className="mt-4 text-xl font-semibold text-white">{service.title}</h3>
            <p className="mt-3 text-slate-400">{service.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
`,
  'src/components/home/Comparison.tsx': `export function Comparison() {
  return (
    <section className="grid gap-8 rounded-[2rem] border border-slate-800 bg-slate-900/80 p-8 shadow-xl lg:grid-cols-2">
      <div className="space-y-4">
        <p className="text-sm uppercase tracking-[0.24em] text-brand-300">Approach</p>
        <h2 className="text-3xl font-semibold text-white">A modern alternative to ad hoc WordPress delivery</h2>
        <p className="text-slate-400">
          Yelobase combines product discipline, managed hosting, and editorial governance so your team can move faster without sacrificing reliability.
        </p>
      </div>
      <div className="grid gap-4">
        {[
          { label: 'Traditional agencies', value: 'Siloed scope, slow launches' },
          { label: 'In-house operations', value: 'Overloaded teams and unclear ownership' },
          { label: 'Yelobase', value: 'Clear process, reliable delivery, fast feedback' },
        ].map((item) => (
          <div key={item.label} className="rounded-3xl border border-slate-800 bg-slate-950/80 p-5">
            <p className="text-sm uppercase text-slate-500">{item.label}</p>
            <p className="mt-2 text-slate-200">{item.value}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
`,
  'src/components/home/ZohoPartner.tsx': `export function ZohoPartner() {
  return (
    <section className="rounded-[2rem] border border-slate-800 bg-slate-900/80 p-8 text-center shadow-xl">
      <p className="text-sm uppercase tracking-[0.24em] text-brand-300">Partner network</p>
      <h2 className="mt-2 text-3xl font-semibold text-white">Partner integrations for CRM and automation</h2>
      <p className="mx-auto mt-4 max-w-2xl text-slate-400">
        We design WordPress solutions that connect cleanly to Zoho, HubSpot, and other marketing and operations platforms.
      </p>
    </section>
  );
}
`,
  'src/components/home/Results.tsx': `import { stats } from '@/data/stats';

export function Results() {
  return (
    <section className="space-y-8 rounded-[2rem] border border-slate-800 bg-slate-900/80 p-8 shadow-xl">
      <div className="space-y-2">
        <p className="text-sm uppercase tracking-[0.24em] text-brand-300">Results</p>
        <h2 className="text-3xl font-semibold text-white">Measurable outcomes for digital growth</h2>
      </div>
      <div className="grid gap-4 sm:grid-cols-3">
        {stats.map((stat) => (
          <div key={stat.label} className="rounded-3xl border border-slate-800 bg-slate-950/80 p-6 text-center">
            <p className="text-4xl font-semibold text-white">{stat.value}</p>
            <p className="mt-2 text-sm uppercase tracking-[0.2em] text-slate-500">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
`,
  'src/components/home/StoriesPreview.tsx': `import { testimonials } from '@/data/testimonials';

export function StoriesPreview() {
  return (
    <section className="space-y-8 rounded-[2rem] border border-slate-800 bg-slate-900/80 p-8 shadow-xl">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-[0.24em] text-brand-300">Customer stories</p>
          <h2 className="text-3xl font-semibold text-white">Success stories from our partner clients</h2>
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.slice(0, 3).map((testimonial) => (
          <article key={testimonial.id} className="rounded-3xl border border-slate-800 bg-slate-950/80 p-6">
            <p className="text-slate-400">{testimonial.quote}</p>
            <div className="mt-5 text-sm text-slate-300">
              <p className="font-semibold text-white">{testimonial.author}</p>
              <p className="text-slate-500">{testimonial.role}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
`,
  'src/components/home/CTASection.tsx': `import { CTA } from '@/components/layout/CTA';

export function CTASection() {
  return (
    <section className="py-10">
      <CTA />
    </section>
  );
}
`,
  'src/components/blog/FeaturedBlog.tsx': `import Link from 'next/link';
import { BlogPost } from '@/types/blog';

interface FeaturedBlogProps {
  post: BlogPost;
}

export function FeaturedBlog({ post }: FeaturedBlogProps) {
  return (
    <article className="rounded-[2rem] border border-slate-800 bg-slate-900/80 p-8 shadow-xl">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.24em] text-brand-300">Featured</p>
          <h2 className="mt-3 text-3xl font-semibold text-white">{post.title}</h2>
          <p className="mt-4 text-slate-400">{post.excerpt}</p>
        </div>
        <Link href={`/blogs/${post.slug}`} className="inline-flex rounded-full bg-brand-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-400">
          Read the story
        </Link>
      </div>
    </article>
  );
}
`,
  'src/components/blog/BlogCard.tsx': `import Link from 'next/link';
import { BlogPost } from '@/types/blog';

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="rounded-3xl border border-slate-800 bg-slate-950/80 p-6 transition hover:border-brand-500">
      <p className="text-sm uppercase tracking-[0.24em] text-brand-300">{post.category}</p>
      <h3 className="mt-3 text-xl font-semibold text-white">{post.title}</h3>
      <p className="mt-4 text-slate-400 line-clamp-3">{post.excerpt}</p>
      <div className="mt-6 flex items-center justify-between text-sm text-slate-500">
        <span>{post.date}</span>
        <Link href={`/blogs/${post.slug}`} className="text-brand-300 hover:text-brand-200">
          Read more
        </Link>
      </div>
    </article>
  );
}
`,
  'src/components/blog/BlogGrid.tsx': `import { BlogCard } from '@/components/blog/BlogCard';
import { BlogPost } from '@/types/blog';

interface BlogGridProps {
  posts: BlogPost[];
}

export function BlogGrid({ posts }: BlogGridProps) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <BlogCard key={post.id} post={post} />
      ))}
    </div>
  );
}
`,
  'src/components/blog/BlogFilters.tsx': `export function BlogFilters() {
  return (
    <div className="flex flex-wrap items-center gap-3 rounded-3xl border border-slate-800 bg-slate-950/80 p-4">
      <button className="rounded-full bg-slate-900 px-4 py-2 text-sm text-slate-300 hover:bg-slate-800">All categories</button>
      <button className="rounded-full border border-slate-800 px-4 py-2 text-sm text-slate-300 hover:border-brand-500">Strategy</button>
      <button className="rounded-full border border-slate-800 px-4 py-2 text-sm text-slate-300 hover:border-brand-500">Operations</button>
    </div>
  );
}
`,
  'src/components/blog/BlogContent.tsx': `import { BlogPost } from '@/types/blog';

interface BlogContentProps {
  post: BlogPost;
}

export function BlogContent({ post }: BlogContentProps) {
  return (
    <article className="space-y-6 rounded-[2rem] border border-slate-800 bg-slate-900/80 p-8 shadow-xl">
      <div className="space-y-3">
        <p className="text-sm uppercase tracking-[0.24em] text-brand-300">{post.category}</p>
        <h1 className="text-4xl font-semibold text-white">{post.title}</h1>
        <p className="text-sm text-slate-500">Published {post.date}</p>
      </div>
      <div className="space-y-4 text-slate-300" dangerouslySetInnerHTML={{ __html: post.content }} />
    </article>
  );
}
`,
  'src/components/blog/RelatedBlogs.tsx': `import Link from 'next/link';
import { BlogPost } from '@/types/blog';

interface RelatedBlogsProps {
  posts: BlogPost[];
}

export function RelatedBlogs({ posts }: RelatedBlogsProps) {
  return (
    <section className="space-y-4 rounded-[2rem] border border-slate-800 bg-slate-900/80 p-8 shadow-xl">
      <h2 className="text-2xl font-semibold text-white">Related articles</h2>
      <div className="grid gap-4 sm:grid-cols-2">
        {posts.map((post) => (
          <Link key={post.id} href={`/blogs/${post.slug}`} className="rounded-3xl border border-slate-800 bg-slate-950/80 p-5 transition hover:border-brand-500">
            <p className="text-sm uppercase tracking-[0.24em] text-brand-300">{post.category}</p>
            <h3 className="mt-3 text-lg font-semibold text-white">{post.title}</h3>
          </Link>
        ))}
      </div>
    </section>
  );
}
`,
  'src/components/blog/ShareButtons.tsx': `import { BlogPost } from '@/types/blog';

interface ShareButtonsProps {
  post: BlogPost;
}

export function ShareButtons({ post }: ShareButtonsProps) {
  return (
    <section className="rounded-[2rem] border border-slate-800 bg-slate-900/80 p-6 shadow-xl">
      <h2 className="text-lg font-semibold text-white">Share this post</h2>
      <div className="mt-4 flex flex-wrap gap-3">
        {[
          { label: 'Twitter', href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(post.url)}` },
          { label: 'LinkedIn', href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(post.url)}` },
        ].map((item) => (
          <a key={item.label} href={item.href} target="_blank" rel="noreferrer" className="rounded-full border border-slate-800 bg-slate-950/80 px-4 py-2 text-sm text-slate-200 transition hover:border-brand-500 hover:text-white">
            {item.label}
          </a>
        ))}
      </div>
    </section>
  );
}
`,
  'src/components/blog/Pagination.tsx': `interface PaginationProps {
  currentPage: number;
  totalPages: number;
}

export function Pagination({ currentPage, totalPages }: PaginationProps) {
  return (
    <div className="flex items-center justify-between rounded-3xl border border-slate-800 bg-slate-950/80 p-4">
      <p className="text-sm text-slate-400">
        Page {currentPage} of {totalPages}
      </p>
      <div className="flex gap-3">
        <button className="rounded-full border border-slate-800 bg-slate-900 px-4 py-2 text-sm text-slate-300 transition hover:border-brand-500">Previous</button>
        <button className="rounded-full border border-slate-800 bg-slate-900 px-4 py-2 text-sm text-slate-300 transition hover:border-brand-500">Next</button>
      </div>
    </div>
  );
}
`,
  'src/components/testimonials/TestimonialCard.tsx': `import { Testimonial } from '@/types/testimonial';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <article className="rounded-3xl border border-slate-800 bg-slate-950/80 p-6">
      <p className="text-slate-300">“{testimonial.quote}”</p>
      <div className="mt-4 text-sm text-slate-400">
        <p className="font-semibold text-white">{testimonial.author}</p>
        <p>{testimonial.role}</p>
      </div>
    </article>
  );
}
`,
  'src/components/testimonials/TestimonialsGrid.tsx': `import { TestimonialCard } from '@/components/testimonials/TestimonialCard';
import { Testimonial } from '@/types/testimonial';

interface TestimonialsGridProps {
  testimonials: Testimonial[];
}

export function TestimonialsGrid({ testimonials }: TestimonialsGridProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {testimonials.map((testimonial) => (
        <TestimonialCard key={testimonial.id} testimonial={testimonial} />
      ))}
    </div>
  );
}
`,
  'src/components/testimonials/TestimonialsFilter.tsx': `export function TestimonialsFilter() {
  return (
    <div className="flex flex-wrap gap-3 rounded-3xl border border-slate-800 bg-slate-950/80 p-4">
      <button className="rounded-full bg-slate-900 px-4 py-2 text-sm text-slate-300 hover:bg-slate-800">All</button>
      <button className="rounded-full border border-slate-800 px-4 py-2 text-sm text-slate-300 hover:border-brand-500">Enterprise</button>
      <button className="rounded-full border border-slate-800 px-4 py-2 text-sm text-slate-300 hover:border-brand-500">Medium teams</button>
    </div>
  );
}
`,
  'src/components/testimonials/Stats.tsx': `import { stats } from '@/data/stats';

export function Stats() {
  return (
    <div className="grid gap-4 sm:grid-cols-3">
      {stats.map((item) => (
        <div key={item.label} className="rounded-3xl border border-slate-800 bg-slate-950/80 p-6 text-center">
          <p className="text-3xl font-semibold text-white">{item.value}</p>
          <p className="mt-2 text-sm uppercase tracking-[0.2em] text-slate-500">{item.label}</p>
        </div>
      ))}
    </div>
  );
}
`,
  'src/components/contact/ContactForm.tsx': `'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactSchema } from '@/validations/contact.schema';
import { ContactLead } from '@/types/lead';

export function ContactForm() {
  const [status, setStatus] = useState<string>('');
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactLead>({
    resolver: zodResolver(contactSchema),
  });

  async function onSubmit(data: ContactLead) {
    setStatus('Sending...');

    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      setStatus('Message sent successfully.');
      reset();
    } else {
      setStatus('Unable to send message. Please try again later.');
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="space-y-2">
          <span className="text-sm font-medium text-slate-200">Name</span>
          <input
            type="text"
            {...register('name')}
            className="w-full rounded-3xl border border-slate-800 bg-slate-950/80 px-4 py-3 text-slate-100 outline-none transition focus:border-brand-500"
          />
          {errors.name && <p className="text-sm text-rose-400">{errors.name.message}</p>}
        </label>
        <label className="space-y-2">
          <span className="text-sm font-medium text-slate-200">Email</span>
          <input
            type="email"
            {...register('email')}
            className="w-full rounded-3xl border border-slate-800 bg-slate-950/80 px-4 py-3 text-slate-100 outline-none transition focus:border-brand-500"
          />
          {errors.email && <p className="text-sm text-rose-400">{errors.email.message}</p>}
        </label>
      </div>
      <label className="space-y-2">
        <span className="text-sm font-medium text-slate-200">Company</span>
        <input
          type="text"
          {...register('company')}
          className="w-full rounded-3xl border border-slate-800 bg-slate-950/80 px-4 py-3 text-slate-100 outline-none transition focus:border-brand-500"
        />
        {errors.company && <p className="text-sm text-rose-400">{errors.company.message}</p>}
      </label>
      <label className="space-y-2">
        <span className="text-sm font-medium text-slate-200">Message</span>
        <textarea
          rows={6}
          {...register('message')}
          className="w-full rounded-3xl border border-slate-800 bg-slate-950/80 px-4 py-3 text-slate-100 outline-none transition focus:border-brand-500"
        />
        {errors.message && <p className="text-sm text-rose-400">{errors.message.message}</p>}
      </label>
      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex justify-center rounded-full bg-brand-500 px-8 py-3 text-sm font-semibold text-white transition hover:bg-brand-400 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isSubmitting ? 'Sending...' : 'Send message'}
      </button>
      {status && <p className="text-sm text-slate-300">{status}</p>}
    </form>
  );
}
`,
  'src/components/ui/button.tsx': `import * as React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}

export function Button({ className, variant = 'primary', ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-brand-500',
        variant === 'primary' ? 'bg-brand-500 text-white hover:bg-brand-400' : 'border border-slate-800 bg-slate-900 text-slate-100 hover:bg-slate-800',
        className,
      )}
      {...props}
    />
  );
}
`,
  'src/components/ui/card.tsx': `import * as React from 'react';
import { cn } from '@/lib/utils';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Card({ className, ...props }: CardProps) {
  return <div className={cn('rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-sm', className)} {...props} />;
}
`,
  'src/components/ui/badge.tsx': `import * as React from 'react';
import { cn } from '@/lib/utils';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'primary' | 'secondary';
}

export function Badge({ className, variant = 'primary', ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em]',
        variant === 'primary' ? 'bg-brand-500 text-white' : 'bg-slate-800 text-slate-300',
        className,
      )}
      {...props}
    />
  );
}
`,
  'src/components/ui/input.tsx': `import * as React from 'react';
import { cn } from '@/lib/utils';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export function Input({ className, ...props }: InputProps) {
  return <input className={cn('w-full rounded-3xl border border-slate-800 bg-slate-950/80 px-4 py-3 text-slate-100 outline-none transition focus:border-brand-500', className)} {...props} />;
}
`,
  'src/components/ui/textarea.tsx': `import * as React from 'react';
import { cn } from '@/lib/utils';

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

export function Textarea({ className, ...props }: TextareaProps) {
  return <textarea className={cn('w-full rounded-3xl border border-slate-800 bg-slate-950/80 px-4 py-3 text-slate-100 outline-none transition focus:border-brand-500', className)} {...props} />;
}
`,
  'src/components/ui/dialog.tsx': `import * as React from 'react';
import { cn } from '@/lib/utils';

interface DialogProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Dialog({ className, ...props }: DialogProps) {
  return <div className={cn('rounded-3xl border border-slate-800 bg-slate-950/90 p-6 shadow-2xl', className)} {...props} />;
}
`,
  'src/components/ui/skeleton.tsx': `import * as React from 'react';
import { cn } from '@/lib/utils';

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Skeleton({ className, ...props }: SkeletonProps) {
  return <div className={cn('animate-pulse rounded-3xl bg-slate-800/80', className)} {...props} />;
}
`,
  'src/components/ui/separator.tsx': `import * as React from 'react';
import { cn } from '@/lib/utils';

interface SeparatorProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Separator({ className, ...props }: SeparatorProps) {
  return <div className={cn('my-6 h-px bg-slate-800', className)} {...props} />;
}
`,
  'src/services/wordpress.service.ts': `import { wpFetch } from '@/lib/wordpress';
import { BlogPost, Category } from '@/types/blog';

const POSTS_PER_PAGE = 9;

function mapPost(raw: any): BlogPost {
  return {
    id: raw.id,
    title: raw.title?.rendered ?? 'Untitled',
    content: raw.content?.rendered ?? '<p>No content available.</p>',
    excerpt: raw.excerpt?.rendered?.replace(/<[^>]*>/g, '') ?? '',
    slug: raw.slug,
    date: raw.date ? new Date(raw.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) : 'Unknown date',
    categoryId: raw.categories?.[0] ?? 0,
    category: raw._embedded?.['wp:term']?.[0]?.[0]?.name ?? 'News',
    url: raw.link ?? '/',
  };
}

export async function getPosts(page = 1): Promise<BlogPost[]> {
  const data = await wpFetch(`posts?page=${page}&per_page=${POSTS_PER_PAGE}&_embed=true`);
  return Array.isArray(data) ? data.map(mapPost) : [];
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const data = await wpFetch(`posts?slug=${slug}&_embed=true`);
  return Array.isArray(data) && data.length > 0 ? mapPost(data[0]) : null;
}

export async function getFeaturedPost(): Promise<BlogPost> {
  const data = await wpFetch(`posts?per_page=1&orderby=date&order=desc&_embed=true`);
  return Array.isArray(data) && data.length > 0
    ? mapPost(data[0])
    : {
        id: 0,
        title: 'Featured post',
        content: '<p>No featured post found.</p>',
        excerpt: '',
        slug: 'featured',
        date: 'Unknown date',
        categoryId: 0,
        category: 'News',
        url: '/',
      };
}

export async function getRelatedPosts(categoryId: number): Promise<BlogPost[]> {
  if (!categoryId) {
    return [];
  }

  const data = await wpFetch(`posts?categories=${categoryId}&per_page=3&_embed=true`);
  return Array.isArray(data) ? data.map(mapPost) : [];
}

export async function getCategories(): Promise<Category[]> {
  const data = await wpFetch('categories?per_page=20');
  return Array.isArray(data)
    ? data.map((category: any) => ({ id: category.id, name: category.name }))
    : [];
}
`,
  'src/services/testimonial.service.ts': `import { Testimonial } from '@/types/testimonial';
import { testimonials } from '@/data/testimonials';

export function getTestimonials(): Testimonial[] {
  return testimonials;
}
`,
  'src/services/lead.service.ts': `import { ContactLead } from '@/types/lead';

export async function sendLead(lead: ContactLead) {
  console.log('Received lead:', lead);
  return {
    success: true,
    message: 'Lead has been processed in the server-side placeholder.',
  };
}
`,
  'src/lib/wordpress.ts': `const WP_API_BASE = process.env.WORDPRESS_API_URL ?? 'https://example.com/wp-json/wp/v2';

export async function wpFetch(endpoint: string, init?: RequestInit) {
  const url = `${WP_API_BASE}/${endpoint}`;
  const response = await fetch(url, {
    ...init,
    next: { tags: ['blogs'], revalidate: 3600 },
  });

  if (!response.ok) {
    throw new Error(`WordPress fetch failed: ${response.statusText}`);
  }

  return response.json();
}
`,
  'src/lib/utils.ts': `export function cn(...classes: Array<string | undefined | null | false>) {
  return classes.filter(Boolean).join(' ');
}
`,
  'src/lib/metadata.ts': `export const defaultMetadata = {
  title: 'Yelobase',
  description: 'A modern WordPress company website scaffold for enterprise digital teams.',
};
`,
  'src/lib/stripHtml.ts': `export function stripHtml(html: string) {
  return html.replace(/<[^>]*>/g, '').trim();
}
`,
  'src/lib/formatDate.ts': `export function formatDate(value: string | Date) {
  const date = typeof value === 'string' ? new Date(value) : value;
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}
`,
  'src/hooks/usePagination.ts': `import { useMemo } from 'react';

export function usePagination(currentPage: number, totalPages: number) {
  return useMemo(
    () => ({
      canPrevious: currentPage > 1,
      canNext: currentPage < totalPages,
      previousPage: Math.max(1, currentPage - 1),
      nextPage: Math.min(totalPages, currentPage + 1),
    }),
    [currentPage, totalPages],
  );
}
`,
  'src/hooks/useShare.ts': `import { useCallback } from 'react';

export function useShare() {
  return useCallback(async (title: string, url: string) => {
    if (navigator.share) {
      await navigator.share({ title, url });
    } else {
      window.open(
        
` + `'https://twitter.com/intent/tweet?text=' + encodeURIComponent(title) + '&url=' + encodeURIComponent(url)`,
        '_blank',
      );
    }
  }, []);
}
`,
  'src/hooks/useIntersection.ts': `import { useEffect, useState } from 'react';

export function useIntersection(rootMargin = '0px') {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIntersecting(entry.isIntersecting),
      { rootMargin },
    );

    const target = document.querySelector('[data-intersection-target]');
    if (target) {
      observer.observe(target);
    }

    return () => observer.disconnect();
  }, [rootMargin]);

  return isIntersecting;
}
`,
  'src/hooks/useMediaQuery.ts': `import { useEffect, useState } from 'react';

export function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    setMatches(mediaQuery.matches);
    const handler = (event: MediaQueryListEvent) => setMatches(event.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, [query]);

  return matches;
}
`,
  'src/data/services.ts': `import { Service } from '@/types/service';

export const services: Service[] = [
  {
    id: '1',
    title: 'WordPress architecture',
    description: 'Design scalable CMS structures and streamline content workflows for modern teams.',
    category: 'Strategy',
  },
  {
    id: '2',
    title: 'Performance optimization',
    description: 'Reduce page load times and improve Core Web Vitals across WordPress sites.',
    category: 'Engineering',
  },
  {
    id: '3',
    title: 'Launch operations',
    description: 'Support campaigns, product launches, and editorial rollouts with reliable delivery.',
    category: 'Delivery',
  },
];
`,
  'src/data/testimonials.ts': `import { Testimonial } from '@/types/testimonial';

export const testimonials: Testimonial[] = [
  {
    id: 'testimonial-1',
    author: 'Ava Jackson',
    role: 'Head of Marketing',
    quote: 'Yelobase helped our team move faster on WordPress while keeping editorial quality high.',
  },
  {
    id: 'testimonial-2',
    author: 'Diego Ruiz',
    role: 'Product Operations Lead',
    quote: 'Their process is clear, and the team delivered precisely on our launch timeline.',
  },
  {
    id: 'testimonial-3',
    author: 'Mia Chen',
    role: 'Growth Manager',
    quote: 'The integration between CMS and automation workflows made content publishing effortless.',
  },
];
`,
  'src/data/stats.ts': `export const stats = [
  { label: 'Launches delivered', value: '18+' },
  { label: 'Average speed gain', value: '42%' },
  { label: 'Customer NPS', value: '94' },
];
`,
  'src/data/trustedBy.ts': `export const trustedBy = ['Acme', 'Aurora', 'Kin', 'Orbit'];
`,
  'src/types/blog.ts': `export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  date: string;
  categoryId: number;
  category: string;
  url: string;
}

export interface Category {
  id: number;
  name: string;
}
`,
  'src/types/testimonial.ts': `export interface Testimonial {
  id: string;
  author: string;
  role: string;
  quote: string;
}
`,
  'src/types/service.ts': `export interface Service {
  id: string;
  title: string;
  description: string;
  category: string;
}
`,
  'src/types/lead.ts': `export interface ContactLead {
  name: string;
  email: string;
  company: string;
  message: string;
}
`,
  'src/validations/contact.schema.ts': `import { z } from 'zod';

export const contactSchema = z.object({
  name: z.string().min(2, 'Please enter your name.'),
  email: z.string().email('Please enter a valid email address.'),
  company: z.string().min(2, 'Please enter a company name.'),
  message: z.string().min(10, 'Please enter a message.'),
});
`,
  'src/constants/routes.ts': `export const routes = {
  blogs: '/blogs',
  customerStories: '/customer-stories',
  contact: '/contact',
};
`,
  'src/constants/site.ts': `export const siteConfig = {
  name: 'Yelobase',
  description: 'A WordPress enablement partner for modern digital teams.',
  url: 'https://yelobase.example.com',
};
`,
  'src/middleware.ts': `import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const response = NextResponse.next();
  response.headers.set('x-powered-by', 'Yelobase');
  return response;
}

export const config = {
  matcher: ['/', '/blogs/:path*', '/contact', '/customer-stories'],
};
`,
};

for (const relativePath in files) {
  const absolutePath = path.join(root, relativePath);
  const directory = path.dirname(absolutePath);
  fs.mkdirSync(directory, { recursive: true });
  fs.writeFileSync(absolutePath, files[relativePath], 'utf8');
}

const imageDirs = ['public/images/hero', 'public/images/logos', 'public/images/services', 'public/images/testimonials', 'public/images/icons'];
for (const dir of imageDirs) {
  fs.mkdirSync(path.join(root, dir), { recursive: true });
}

console.log('Scaffold created', Object.keys(files).length, 'files.');
