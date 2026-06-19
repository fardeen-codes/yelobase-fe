// src/app/blogs/page.tsx
import Image from "next/image";
import Link from "next/link";
import { getPosts } from "@/lib/wordpress";
import { BlogPost } from "@/types/blog";
import { formatDate } from "@/lib/formatDate";
import CTASection from "@/components/home/CTASection";

// ── Blog Card ──────────────────────────────────────────────────────────────
function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blogs/${post.slug}`} className="group flex flex-col">
      {/* Image */}
      <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden mb-4">
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      {/* Title */}
      <h3 className="font-bold text-gray-900 text-base leading-snug mb-3 group-hover:text-violet-600 transition-colors">
        {post.title}
      </h3>
      {/* Category tags */}
      <div className="flex flex-wrap gap-2 mb-3">
        {post.categories.map((cat) => (
          <span key={cat} className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-gray-100 text-gray-600">
            {cat}
          </span>
        ))}
      </div>
      {/* Author + date stacked */}
      <div className="flex items-center gap-2 mt-auto">
        <div className="relative w-8 h-8 rounded-full overflow-hidden shrink-0">
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
      className="group flex flex-col md:flex-row rounded-2xl overflow-hidden border border-violet-100 hover:shadow-lg transition-shadow mb-16"
      style={{ backgroundColor: "#f5f3ff" }}
    >
      {/* Fixed size image — 427×400 */}
      <div
        className="relative shrink-0 w-full md:w-[427px]"
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
      <div className="flex  flex-col justify-start px-10 py-10">
        <span
          className="inline-block text-xs font-semibold px-3 py-1 rounded-full mb-5 w-fit"
          style={{ backgroundColor: "#fbbf24", color: "#78350f" }}
        >
          Featured Blog
        </span>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-snug mb-5 group-hover:text-violet-700 transition-colors">
          {post.title}
        </h2>
        <div className="flex flex-wrap gap-2 mb-6">
          {post.categories.map((cat) => (
            <span
              key={cat}
              className="text-xs font-medium px-3 py-1 rounded-full bg-white text-gray-600 border border-gray-200"
            >
              {cat}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <div className="relative w-9 h-9 rounded-full overflow-hidden shrink-0">
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
    <div className="flex items-center justify-center gap-2 mt-16 mb-10">
      <Link
        href={`/blogs?page=${Math.max(1, current - 1)}`}
        className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-200 text-gray-400 hover:border-violet-400 hover:text-violet-600 transition-colors"
        aria-disabled={current === 1}
      >
        ‹
      </Link>

      {pages.map((p) => (
        <Link
          key={p}
          href={`/blogs?page=${p}`}
          className="w-9 h-9 flex items-center justify-center rounded-full text-sm font-medium transition-all"
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
        className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-200 text-gray-400 hover:border-violet-400 hover:text-violet-600 transition-colors"
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
      <section className="text-center px-6 pt-20 pb-12 max-w-2xl mx-auto">
        <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-3" style={{ color: "#4ecca3" }}>
          Blog
        </p>
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4" style={{ fontFamily: "monospace" }}>
          Yelobase Blog
        </h1>
        <p className="text-gray-500 text-base">Insights, trends, and best practices.</p>
      </section>

      <div className="max-w-6xl mx-auto px-6 pb-10">

        {/* Featured */}
        {featured && <FeaturedBlog post={featured} />}

        {/* Section header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-gray-900">See what else is new</h2>
          <select
            className="text-sm border border-gray-200 rounded-lg px-4 py-2 text-gray-600 bg-white focus:outline-none focus:ring-2 focus:ring-violet-300"
            defaultValue="all"
          >
            <option value="all">All Blogs</option>
          </select>
        </div>

        {/* Blog grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-12">
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