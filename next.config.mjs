/** @type {import('next').NextConfig} */
const nextConfig = {
  // Other Next.js configuration options
  //  output:"export",
  async headers() {
    return [
      {
        source: '/(.*)', // Apply to all routes or specific paths
        headers: [
          {
            key: 'Cache-Control',
            value: 'max-age=0, must-revalidate', // Example of more flexible caching
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/ecommerce-development",
        destination: "/ecommerce-development-services",
        permanent: true,
      },
      {
        source: "/mobile-development",
        destination: "/mobile-app-development-services",
        permanent: true,
      },
      {
        source: "/website-development",
        destination: "/website-development-services",
        permanent: true,
      },
      {
        source: "/magento-development",
        destination: "/ecommerce-development-services",
        permanent: true,
      },
      {
        source: "/refund-policy",
        destination: "/privacy-policy",
        permanent: false,
      },
      {
        source: "/request-a-quote",
        destination: "/contact-us",
        permanent: false,
      },
      {
        source: "/magento-development",
        destination: "/ecommerce-development-services",
        permanent: false,
      },
      {
        source: "/shipping-and-delivery-policy",
        destination: "/contact-us",
        permanent: false,
      },
      {
        source: "/about-us",
        destination: "/about",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
