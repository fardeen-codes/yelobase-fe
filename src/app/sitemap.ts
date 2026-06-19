import { MetadataRoute } from 'next';

import { siteConfig } from '@/constants/site';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteConfig.url, lastModified: new Date() },
    { url: siteConfig.url + '/blogs', lastModified: new Date() },
    { url: siteConfig.url + '/customer-stories', lastModified: new Date() },
    { url: siteConfig.url + '/contact', lastModified: new Date() },
  ];
}
