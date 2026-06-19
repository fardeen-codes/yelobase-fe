import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "saddlebrown-gazelle-792645.hostingersite.com",
        pathname: "/wp-content/uploads/**",
      },
      {
        // Gravatar for author avatars
        protocol: "https",
        hostname: "secure.gravatar.com",
      },
    ],
  },
};

export default nextConfig;
