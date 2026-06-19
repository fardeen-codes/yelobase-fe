import Link from 'next/link';

import { BlogPost } from '@/types/blog';

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="rounded-3xl border border-slate-800 bg-slate-950/80 p-6 transition hover:border-brand-500">
      <p className="text-brand-300 text-sm uppercase tracking-[0.24em]">{post.category}</p>
      <h3 className="mt-3 text-xl font-semibold text-white">{post.title}</h3>
      <p className="mt-4 line-clamp-3 text-slate-400">{post.excerpt}</p>
      <div className="mt-6 flex items-center justify-between text-sm text-slate-500">
        <span>{post.date}</span>
        <Link href={`/blogs/${post.slug}`} className="text-brand-300 hover:text-brand-200">Read more</Link>
      </div>
    </article>
  );
}
