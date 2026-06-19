// src/app/blogs/[slug]/page.tsx
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostBySlug, getRelatedPosts, getPosts } from "@/lib/wordpress";
import { BlogPost } from "@/types/blog";
import { formatDate } from "@/lib/formatDate";
import CTASection from "@/components/home/CTASection";

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
      <p className="text-xs text-gray-400 font-medium mb-1">Share</p>
      {/* Email */}
      <a href={`mailto:?subject=${encodeURIComponent(title)}&body=${url}`}
        className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 text-gray-500 hover:border-violet-400 hover:text-violet-600 transition-colors">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
        </svg>
      </a>
      {/* LinkedIn */}
      <a href={`https://linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`} target="_blank" rel="noopener"
        className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 text-gray-500 hover:border-violet-400 hover:text-violet-600 transition-colors">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
        </svg>
      </a>
      {/* Link copy */}
      <a href={url}
        className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 text-gray-500 hover:border-violet-400 hover:text-violet-600 transition-colors">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
        </svg>
      </a>
      {/* Twitter/X */}
      <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`} target="_blank" rel="noopener"
        className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 text-gray-500 hover:border-violet-400 hover:text-violet-600 transition-colors">
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
      <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden mb-4">
        <Image src={post.coverImage} alt={post.title} fill
          className="object-cover group-hover:scale-105 transition-transform duration-500" />
      </div>
      <h3 className="font-bold text-gray-900 text-sm leading-snug mb-2 group-hover:text-violet-600 transition-colors">
        {post.title}
      </h3>
      <div className="flex flex-wrap gap-1.5 mb-3">
        {post.categories.map((cat) => (
          <span key={cat} className="text-[11px] px-2.5 py-0.5 rounded-full bg-gray-100 text-gray-500">{cat}</span>
        ))}
      </div>
      <div className="flex items-center gap-2">
        <div className="relative w-7 h-7 rounded-full overflow-hidden shrink-0">
          <Image src={post.authorAvatar} alt={post.authorName} fill className="object-cover" />
        </div>
        <p className="text-xs text-gray-500">{post.authorName}</p>
        <span className="text-gray-300 text-xs">•</span>
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
      <div className="max-w-6xl mx-auto px-6 pt-8 pb-4">
        <Link href="/blogs" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-800 transition-colors">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          Back to All Blogs
        </Link>
      </div>

      {/* Hero: image + title side by side */}
      <section className="max-w-6xl mx-auto px-6 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden">
            <Image src={post.coverImage} alt={post.title} fill className="object-cover" priority />
          </div>
          <div className="pt-2">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">
              {post.title}
            </h1>
            <div className="flex flex-wrap gap-2 mb-5">
              {post.categories.map((cat) => (
                <span key={cat} className="text-xs font-medium px-3 py-1 rounded-full bg-gray-100 text-gray-600">{cat}</span>
              ))}
            </div>
            <div className="flex items-center gap-3 flex-wrap">
              <div className="relative w-9 h-9 rounded-full overflow-hidden shrink-0">
                <Image src={post.authorAvatar} alt={post.authorName} fill className="object-cover" />
              </div>
              <p className="text-sm font-medium text-gray-700">{post.authorName}</p>
              <span className="text-gray-300 text-xs">•</span>
              <p className="text-sm text-gray-400">{formatDate(post.date)}</p>
              <span className="text-gray-300 text-xs">•</span>
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
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_60px] gap-10 items-start">
          {/* Content */}
          <article
            className="wp-content max-w-none
              wp-content-headings:font-bold wp-content-headings:text-black
              wp-content-p:leading-relaxed
              wp-content-a:text-violet-600
              wp-content-strong:font-bold"
            style={{ color: "#000000" }}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          {/* Share */}
          <ShareSidebar title={post.title} slug={post.slug} />
        </div>
      </section>

      {/* Related / Other Blogs */}
      {related.length > 0 && (
        <section className="max-w-6xl mx-auto px-6 pb-20">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Other Blogs</h2>
            <div className="flex gap-2">
              <button className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-200 text-gray-400 hover:border-violet-400 hover:text-violet-600 transition-colors">‹</button>
              <button className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-200 text-gray-400 hover:border-violet-400 hover:text-violet-600 transition-colors">›</button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {related.map((p) => <RelatedCard key={p.id} post={p} />)}
          </div>
        </section>
      )}

      <CTASection />
    </main>
  );
}