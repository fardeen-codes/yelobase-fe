import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import CTASection from "@/components/home/CTASection";
import { formatDate } from "@/lib/formatDate";
import { getPostBySlug, getPosts, getRelatedPosts } from "@/lib/wordpress";
import { BlogPost } from "@/types/blog";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const { posts } = await getPosts(1, 100);

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogArticlePage({ params }: PageProps) {
  const { slug } = await params;

  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const related = await getRelatedPosts([], post.id, 3);

  return (
    <main className="w-full" style={{ backgroundColor: "#FFFCF8" }}>
      <div className="mx-auto max-w-6xl px-6 pb-4 pt-8">
        <Link
          href="/blogs"
          className="inline-flex items-center gap-2 text-sm text-gray-500 transition-colors hover:text-gray-800"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Back to All Blogs
        </Link>
      </div>

      <section className="mx-auto max-w-6xl px-6 pb-12">
        <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-2">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="pt-2">
            <h1 className="mb-4 text-3xl font-bold leading-tight text-gray-900 md:text-4xl">
              {post.title}
            </h1>

            <div className="mb-5 flex flex-wrap gap-2">
              {post.categories.map((cat) => (
                <span
                  key={cat}
                  className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600"
                >
                  {cat}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <div className="relative size-9 shrink-0 overflow-hidden rounded-full">
                <Image
                  src={post.authorAvatar}
                  alt={post.authorName}
                  fill
                  className="object-cover"
                />
              </div>

              <p className="text-sm font-medium text-gray-700">
                {post.authorName}
              </p>

              <span className="text-xs text-gray-300">•</span>

              <p className="text-sm text-gray-400">
                {formatDate(post.date)}
              </p>

              <span className="text-xs text-gray-300">•</span>

              <div className="flex items-center gap-1 text-sm text-gray-400">
                {post.readingTime} min read
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-[1fr_60px]">
          <article
            className="max-w-none wp-content"
            style={{ color: "#000000" }}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <ShareSidebar title={post.title} slug={post.slug} />
        </div>
      </section>

      {related.length > 0 && (
        <section className="mx-auto max-w-6xl px-6 pb-20">
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900">Other Blogs</h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {related.map((item: BlogPost) => (
              <RelatedCard key={item.id} post={item} />
            ))}
          </div>
        </section>
      )}

      <CTASection />
    </main>
  );
}