import { BlogPost } from '@/types/blog';

interface BlogContentProps {
  post: BlogPost;
}

export function BlogContent({ post }: BlogContentProps) {
  return (
    <article className="space-y-6 rounded-[2rem] border border-slate-800 bg-slate-900/80 p-8 shadow-xl">
      <div className="space-y-3">
        <p className="text-brand-300 text-sm uppercase tracking-[0.24em]">{post.category}</p>
        <h1 className="text-4xl font-semibold text-white">{post.title}</h1>
        <p className="text-sm text-slate-500">Published {post.date}</p>
      </div>
      <div className="prose prose-invert max-w-none text-slate-200" dangerouslySetInnerHTML={{ __html: post.content }} />
    </article>
  );
}
