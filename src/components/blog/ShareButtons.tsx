import { BlogPost } from '@/types/blog';

interface ShareButtonsProps {
  post: BlogPost;
}

export function ShareButtons({ post }: ShareButtonsProps) {
  const encodedUrl = encodeURIComponent(post.url);
  const encodedTitle = encodeURIComponent(post.title);

  return (
    <section className="rounded-[2rem] border border-slate-800 bg-slate-900/80 p-6 shadow-xl">
      <h2 className="text-lg font-semibold text-white">Share this post</h2>
      <div className="mt-4 flex flex-wrap gap-3">
        <a href={`https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`} target="_blank" rel="noreferrer" className="rounded-full border border-slate-800 bg-slate-950/80 px-4 py-2 text-sm text-slate-200 transition hover:border-brand-500 hover:text-white">Twitter</a>
        <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`} target="_blank" rel="noreferrer" className="rounded-full border border-slate-800 bg-slate-950/80 px-4 py-2 text-sm text-slate-200 transition hover:border-brand-500 hover:text-white">LinkedIn</a>
      </div>
    </section>
  );
}
