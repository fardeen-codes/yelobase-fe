// src/app/blogs/[slug]/page.tsx
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import CTASection from "@/components/home/CTASection";
import { formatDate } from "@/lib/formatDate";
import { getPostBySlug, getPosts,getRelatedPosts } from "@/lib/wordpress";
import { BlogPost } from "@/types/blog";

// ── Static params for ISR ──────────────────────────────────────────────────
export async function generateStaticParams() {
  const { posts } = await getPosts(1, 100);
  return posts.map((p) => ({ slug: p.slug }));
}

// ── Share Sidebar ──────────────────────────────────────────────────────────
function ShareSidebar({ title, slug }: { title: string; slug: string }) {
  const url = `https://yelobase.com/blogs/${slug}`;
  return (
    <div className="sticky top-28 flex flex-col items-center gap-3">
      <p className="mb-1 text-xs font-medium text-gray-400">Share</p>
      {/* Email */}
      <a href={`mailto:?subject=${encodeURIComponent(title)}&body=${url}`}
        className="flex size-10 items-center justify-center rounded-full border border-gray-200 text-gray-500 transition-colors hover:border-violet-400 hover:text-violet-600">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
        </svg>
      </a>
      {/* LinkedIn */}
      <a href={`https://linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`} target="_blank" rel="noopener"
        className="flex size-10 items-center justify-center rounded-full border border-gray-200 text-gray-500 transition-colors hover:border-violet-400 hover:text-violet-600">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
        </svg>
      </a>
      {/* Link copy */}
      <a href={url}
        className="flex size-10 items-center justify-center rounded-full border border-gray-200 text-gray-500 transition-colors hover:border-violet-400 hover:text-violet-600">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
        </svg>
      </a>
      {/* Twitter/X */}
      <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`} target="_blank" rel="noopener"
        className="flex size-10 items-center justify-center rounded-full border border-gray-200 text-gray-500 transition-colors hover:border-violet-400 hover:text-violet-600">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      </a>
    </div>
  );
}

// ── Related Blog Card ──────────────────────────────────────────────────────
function RelatedCard({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blogs/${post.slug}`} className="group flex flex-col">
      <div className="relative mb-4 aspect-[4/3] w-full overflow-hidden rounded-2xl">
        <Image src={post.coverImage} alt={post.title} fill
          className="object-cover transition-transform duration-500 group-hover:scale-105" />
      </div>
      <h3 className="mb-2 text-sm font-bold leading-snug text-gray-900 transition-colors group-hover:text-violet-600">
        {post.title}
      </h3>
      <div className="mb-3 flex flex-wrap gap-1.5">
        {post.categories.map((cat) => (
          <span key={cat} className="rounded-full bg-gray-100 px-2.5 py-0.5 text-[11px] text-gray-500">{cat}</span>
        ))}
      </div>
      <div className="flex items-center gap-2">
        <div className="relative size-7 shrink-0 overflow-hidden rounded-full">
          <Image src={post.authorAvatar} alt={post.authorName} fill className="object-cover" />
        </div>
        <p className="text-xs text-gray-500">{post.authorName}</p>
        <span className="text-xs text-gray-300">•</span>
        <p className="text-xs text-gray-400">{formatDate(post.date)}</p>
      </div>
    </Link>
  );
}

// ── Page ───────────────────────────────────────────────────────────────────
export default async function BlogArticlePage({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);
  if (!post) notFound();

  const related = await getRelatedPosts([], post.id, 3);

  return (
    <main className="w-full" style={{ backgroundColor: "#FFFCF8" }}>

      {/* Back link */}
      <div className="mx-auto max-w-6xl px-6 pb-4 pt-8">
        <Link href="/blogs" className="inline-flex items-center gap-2 text-sm text-gray-500 transition-colors hover:text-gray-800">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          Back to All Blogs
        </Link>
      </div>

      {/* Hero: image + title side by side */}
      <section className="mx-auto max-w-6xl px-6 pb-12">
        <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-2">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
            <Image src={post.coverImage} alt={post.title} fill className="object-cover" priority />
          </div>
          <div className="pt-2">
            <h1 className="mb-4 text-3xl font-bold leading-tight text-gray-900 md:text-4xl">
              {post.title}
            </h1>
            <div className="mb-5 flex flex-wrap gap-2">
              {post.categories.map((cat) => (
                <span key={cat} className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">{cat}</span>
              ))}
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <div className="relative size-9 shrink-0 overflow-hidden rounded-full">
                <Image src={post.authorAvatar} alt={post.authorName} fill className="object-cover" />
              </div>
              <p className="text-sm font-medium text-gray-700">{post.authorName}</p>
              <span className="text-xs text-gray-300">•</span>
              <p className="text-sm text-gray-400">{formatDate(post.date)}</p>
              <span className="text-xs text-gray-300">•</span>
              <div className="flex items-center gap-1 text-sm text-gray-400">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                </svg>
                {post.readingTime} min read
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article body + share sidebar */}
      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-[1fr_60px]">
          {/* Content */}
          <article
            className="wp-content wp-content-headings:font-bold
              wp-content-headings:text-black wp-content-p:leading-relaxed
              wp-content-a:text-violet-600
              wp-content-strong:font-bold
              max-w-none"
            style={{ color: "#000000" }}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          {/* Share */}
          <ShareSidebar title={post.title} slug={post.slug} />
        </div>
      </section>

      {/* Related / Other Blogs */}
      {related.length > 0 && (
        <section className="mx-auto max-w-6xl px-6 pb-20">
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900">Other Blogs</h2>
            <div className="flex gap-2">
              <button className="flex size-9 items-center justify-center rounded-full border border-gray-200 text-gray-400 transition-colors hover:border-violet-400 hover:text-violet-600">‹</button>
              <button className="flex size-9 items-center justify-center rounded-full border border-gray-200 text-gray-400 transition-colors hover:border-violet-400 hover:text-violet-600">›</button>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {related.map((p) => <RelatedCard key={p.id} post={p} />)}
          </div>
        </section>
      )}

      <CTASection />
    </main>
  );
}