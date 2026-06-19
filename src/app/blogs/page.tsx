// src/app/blogs/page.tsx
import Image from "next/image";
import Link from "next/link";

import CTASection from "@/components/home/CTASection";
import { formatDate } from "@/lib/formatDate";
import { getPosts } from "@/lib/wordpress";
import { BlogPost } from "@/types/blog";

// ── Blog Card ──────────────────────────────────────────────────────────────
function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blogs/${post.slug}`} className="group flex flex-col">
      {/* Image */}
      <div className="relative mb-4 aspect-[4/3] w-full overflow-hidden rounded-2xl">
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      {/* Title */}
      <h3 className="mb-3 text-base font-bold leading-snug text-gray-900 transition-colors group-hover:text-violet-600">
        {post.title}
      </h3>
      {/* Category tags */}
      <div className="mb-3 flex flex-wrap gap-2">
        {post.categories.map((cat) => (
          <span key={cat} className="rounded-full bg-gray-100 px-2.5 py-1 text-[11px] font-medium text-gray-600">
            {cat}
          </span>
        ))}
      </div>
      {/* Author + date stacked */}
      <div className="mt-auto flex items-center gap-2">
        <div className="relative size-8 shrink-0 overflow-hidden rounded-full">
          <Image src={post.authorAvatar} alt={post.authorName} fill className="object-cover" />
        </div>
        <div className="flex flex-col">
          <p className="text-xs font-medium text-gray-700">{post.authorName}</p>
          <p className="text-xs text-gray-400">{formatDate(post.date)}</p>
        </div>
      </div>
    </Link>
  );
}

// ── Featured Blog ──────────────────────────────────────────────────────────
function FeaturedBlog({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blogs/${post.slug}`}
      className="group mb-16 flex flex-col overflow-hidden rounded-2xl border border-violet-100 transition-shadow hover:shadow-lg md:flex-row"
      style={{ backgroundColor: "#f5f3ff" }}
    >
      {/* Fixed size image — 427×400 */}
      <div
        className="relative w-full shrink-0 md:w-[427px]"
        style={{ height: 400 }}
      >
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Content */}
      <div className="flex  flex-col justify-start p-10">
        <span
          className="mb-5 inline-block w-fit rounded-full px-3 py-1 text-xs font-semibold"
          style={{ backgroundColor: "#fbbf24", color: "#78350f" }}
        >
          Featured Blog
        </span>
        <h2 className="mb-5 text-2xl font-bold leading-snug text-gray-900 transition-colors group-hover:text-violet-700 md:text-3xl">
          {post.title}
        </h2>
        <div className="mb-6 flex flex-wrap gap-2">
          {post.categories.map((cat) => (
            <span
              key={cat}
              className="rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-medium text-gray-600"
            >
              {cat}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <div className="relative size-9 shrink-0 overflow-hidden rounded-full">
            <Image src={post.authorAvatar} alt={post.authorName} fill className="object-cover" />
          </div>
          <div className="flex flex-col">
            <p className="text-sm font-medium text-gray-700">{post.authorName}</p>
            <p className="text-xs text-gray-400">{formatDate(post.date)}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}

// ── Pagination ─────────────────────────────────────────────────────────────
function Pagination({ current, total }: { current: number; total: number }) {
  // Show max 5 page numbers
  const pages = Array.from({ length: Math.min(total, 5) }, (_, i) => i + 1);

  return (
    <div className="mb-10 mt-16 flex items-center justify-center gap-2">
      <Link
        href={`/blogs?page=${Math.max(1, current - 1)}`}
        className="flex size-9 items-center justify-center rounded-full border border-gray-200 text-gray-400 transition-colors hover:border-violet-400 hover:text-violet-600"
        aria-disabled={current === 1}
      >
        ‹
      </Link>

      {pages.map((p) => (
        <Link
          key={p}
          href={`/blogs?page=${p}`}
          className="flex size-9 items-center justify-center rounded-full text-sm font-medium transition-all"
          style={{
            backgroundColor: p === current ? "#7c3aed" : "transparent",
            color: p === current ? "white" : "#374151",
            border: p === current ? "none" : "1px solid #e5e7eb",
          }}
        >
          {p}
        </Link>
      ))}

      <Link
        href={`/blogs?page=${Math.min(total, current + 1)}`}
        className="flex size-9 items-center justify-center rounded-full border border-gray-200 text-gray-400 transition-colors hover:border-violet-400 hover:text-violet-600"
        aria-disabled={current === total}
      >
        ›
      </Link>
    </div>
  );
}

// ── Page ───────────────────────────────────────────────────────────────────
export default async function BlogsPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const params = await searchParams;
  const page = Number(params?.page || 1);
  const { posts, totalPages } = await getPosts(page, 9);

  const featured = page === 1 ? posts[0] : null;
  const rest = page === 1 ? posts.slice(1) : posts;

  return (
    <main className="w-full" style={{ backgroundColor: "#FFFCF8" }}>

      {/* Hero */}
      <section className="mx-auto max-w-2xl px-6 pb-12 pt-20 text-center">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: "#4ecca3" }}>
          Blog
        </p>
        <h1 className="mb-4 text-5xl font-bold text-gray-900 md:text-6xl" style={{ fontFamily: "monospace" }}>
          Yelobase Blog
        </h1>
        <p className="text-base text-gray-500">Insights, trends, and best practices.</p>
      </section>

      <div className="mx-auto max-w-6xl px-6 pb-10">

        {/* Featured */}
        {featured && <FeaturedBlog post={featured} />}

        {/* Section header */}
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900">See what else is new</h2>
          <select
            className="rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-violet-300"
            defaultValue="all"
          >
            <option value="all">All Blogs</option>
          </select>
        </div>

        {/* Blog grid */}
        <div className="grid grid-cols-1 gap-x-6 gap-y-12 md:grid-cols-3">
          {rest.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>

        {/* Pagination — always render if totalPages > 1 */}
        {totalPages > 1 && <Pagination current={page} total={totalPages} />}
      </div>

      <CTASection />
    </main>
  );
}