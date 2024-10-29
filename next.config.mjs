/** @type {import('next').NextConfig} */
const nextConfig = {
  // Other Next.js configuration options
  //  output:"export", 
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
        source: "/shopify-development",
        destination: "/shopify-development-services",
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
        destination: "/magento-development-services",
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
      {
        source: "/contact",
        destination: "/contact-us",
        permanent: true,
      }
    ];
  },
};

export default nextConfig;
