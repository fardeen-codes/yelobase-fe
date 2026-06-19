import { wpFetch } from '@/lib/wordpress';
import { BlogPost } from '@/types/blog';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function mapPost(raw: Record<string, any>): BlogPost {
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
  const data = await wpFetch(`posts?page=${page}&per_page=9&_embed=true`);
  return Array.isArray(data) ? data.map(mapPost) : [];
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const data = await wpFetch(`posts?slug=${slug}&_embed=true`);
  return Array.isArray(data) && data.length > 0 ? mapPost(data[0]) : null;
}

export async function getRelatedPosts(categoryId: number): Promise<BlogPost[]> {
  if (!categoryId) return [];
  const data = await wpFetch(`posts?categories=${categoryId}&per_page=3&_embed=true`);
  return Array.isArray(data) ? data.map(mapPost) : [];
}
