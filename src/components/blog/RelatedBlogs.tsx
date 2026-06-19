import Link from 'next/link';

import { BlogPost } from '@/types/blog';

interface RelatedBlogsProps {
  posts: BlogPost[];
}

export function RelatedBlogs({ posts }: RelatedBlogsProps) {
  if (!posts.length) return null;

  return (
    <section className="space-y-4 rounded-[2rem] border border-slate-800 bg-slate-900/80 p-8 shadow-xl">
      <h2 className="text-2xl font-semibold text-white">Related articles</h2>
      <div className="grid gap-4 sm:grid-cols-2">
        {posts.map((post) => (
          <Link key={post.id} href={`/blogs/${post.slug}`} className="rounded-3xl border border-slate-800 bg-slate-950/80 p-5 transition hover:border-brand-500">
            <p className="text-brand-300 text-sm uppercase tracking-[0.24em]">{post.categories?.[0]}</p>
            <h3 className="mt-3 text-lg font-semibold text-white">{post.title}</h3>
          </Link>
        ))}
      </div>
    </section>
  );
}
