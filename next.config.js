/** @type {import('next').NextConfig} */
const nextConfig = {
  // Deployed as a Node.js Web Service on Render — API routes require a server
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  poweredByHeader: false,
  turbopack: {
    root: __dirname,
  },
};

module.exports = nextConfig;

