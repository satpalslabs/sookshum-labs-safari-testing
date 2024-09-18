/** @type {import('next').NextConfig} */
const nextConfig = {
  // Other Next.js configuration options
  //  output:"export",
  async headers() {
    const headers = [];

    if (process.env.VERCEL_ENV !== 'production') {
      // For development and preview environments
      headers.push({
        source: "/(.*)", // Apply to all routes
        headers: [
          {
            key: "X-Robots-Tag",
            value: "noindex, nofollow", // Disallow crawling
          },
        ],
      });
    } else {
      // Optionally, set "index, follow" explicitly for production
      headers.push({
        source: "/(.*)",
        headers: [
          {
            key: "X-Robots-Tag",
            value: "index, follow", // Allow crawling
          },
        ],
      });
    }

    return headers;
  },
};

export default nextConfig;