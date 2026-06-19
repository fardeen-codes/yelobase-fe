export interface WPPost {
  id: number;
  date: string;
  slug: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  content: { rendered: string };
  featured_media: number;
  author: number;
  categories: number[];
  tags: number[];
}

export interface WPCategory {
  id: number;
  name: string;
  slug: string;
}

export interface WPAuthor {
  id: number;
  name: string;
  avatar_urls: { [key: string]: string };
}

export interface WPMedia {
  id: number;
  source_url: string;
  alt_text: string;
}

// Enriched blog post with resolved data
export interface BlogPost {
  id: number;
  slug: string;
  date: string;
  title: string;
  excerpt: string;
  content: string;
  coverImage: string;
  authorName: string;
  authorAvatar: string;
  categories: string[];
  readingTime: number; // minutes
}