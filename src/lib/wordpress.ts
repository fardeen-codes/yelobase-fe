import { WPPost, WPCategory, WPAuthor, WPMedia, BlogPost } from "@/types/blog";

const WP_BASE = "https://saddlebrown-gazelle-792645.hostingersite.com/wp-json/wp/v2";

// ── Helpers ────────────────────────────────────────────────────────────────

function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, "").replace(/&[^;]+;/g, " ").trim();
}

function calcReadingTime(html: string): number {
  const words = stripHtml(html).split(/\s+/).length;
  return Math.max(1, Math.round(words / 200));
}

async function fetchMedia(id: number): Promise<string> {
  if (!id) return "/images/blog/placeholder.jpg";
  try {
    const res = await fetch(`${WP_BASE}/media/${id}`, { next: { revalidate: 3600 } });
    if (!res.ok) return "/images/blog/placeholder.jpg";
    const data: WPMedia = await res.json();
    return data.source_url || "/images/blog/placeholder.jpg";
  } catch {
    return "/images/blog/placeholder.jpg";
  }
}

async function fetchAuthor(id: number): Promise<{ name: string; avatar: string }> {
  try {
    const res = await fetch(`${WP_BASE}/users/${id}`, { next: { revalidate: 3600 } });
    if (!res.ok) return { name: "YeloBase Team", avatar: "/images/team/default.jpg" };
    const data: WPAuthor = await res.json();
    return {
      name: data.name,
      avatar: data.avatar_urls?.["96"] || "/images/team/default.jpg",
    };
  } catch {
    return { name: "YeloBase Team", avatar: "/images/team/default.jpg" };
  }
}

async function fetchCategories(ids: number[]): Promise<string[]> {
  if (!ids.length) return [];
  try {
    const res = await fetch(`${WP_BASE}/categories?include=${ids.join(",")}`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) return [];
    const data: WPCategory[] = await res.json();
    return data
      .map((c) => c.name)
      .filter((name) => name.toLowerCase() !== "uncategorized");
  } catch {
    return [];
  }
}

async function enrichPost(post: WPPost): Promise<BlogPost> {
  const [coverImage, author, categories] = await Promise.all([
    fetchMedia(post.featured_media),
    fetchAuthor(post.author),
    fetchCategories(post.categories),
  ]);

  return {
    id: post.id,
    slug: post.slug,
    date: post.date,
    title: post.title.rendered,
    excerpt: stripHtml(post.excerpt.rendered),
    content: post.content.rendered,
    coverImage,
    authorName: author.name,
    authorAvatar: author.avatar,
    categories,
    readingTime: calcReadingTime(post.content.rendered),
  };
}

// ── Public API ─────────────────────────────────────────────────────────────

/** Fetch paginated posts, sorted latest first (default WP behaviour) */
export async function getPosts(page = 1, perPage = 9): Promise<{
  posts: BlogPost[];
  totalPages: number;
  total: number;
}> {
  const res = await fetch(
    `${WP_BASE}/posts?_embed&orderby=date&order=desc&page=${page}&per_page=${perPage}&status=publish`,
    { next: { revalidate: 60 } }
  );

  if (!res.ok) return { posts: [], totalPages: 1, total: 0 };

  const totalPages = Number(res.headers.get("X-WP-TotalPages") || 1);
  const total = Number(res.headers.get("X-WP-Total") || 0);
  const raw: WPPost[] = await res.json();

  const posts = await Promise.all(raw.map(enrichPost));
  return { posts, totalPages, total };
}

/** Fetch single post by slug */
export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const res = await fetch(`${WP_BASE}/posts?slug=${slug}&status=publish`, {
    next: { revalidate: 60 },
  });
  if (!res.ok) return null;
  const raw: WPPost[] = await res.json();
  if (!raw.length) return null;
  return enrichPost(raw[0]);
}

/** Fetch all categories (for filter dropdown) */
export async function getCategories(): Promise<WPCategory[]> {
  const res = await fetch(`${WP_BASE}/categories?per_page=100`, {
    next: { revalidate: 3600 },
  });
  if (!res.ok) return [];
  const all: WPCategory[] = await res.json();
  return all.filter((c) => c.name.toLowerCase() !== "uncategorized");
}

/** Fetch related posts (same category, exclude current) */
export async function getRelatedPosts(
  categoryIds: number[],
  excludeId: number,
  count = 3
): Promise<BlogPost[]> {
  if (!categoryIds.length) {
    const { posts } = await getPosts(1, count + 1);
    return posts.filter((p) => p.id !== excludeId).slice(0, count);
  }
  const res = await fetch(
    `${WP_BASE}/posts?categories=${categoryIds.join(",")}&exclude=${excludeId}&per_page=${count}&orderby=date&order=desc`,
    { next: { revalidate: 60 } }
  );
  if (!res.ok) return [];
  const raw: WPPost[] = await res.json();
  return Promise.all(raw.map(enrichPost));
}