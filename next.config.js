/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',          // Generates /out folder — no Node server required
  trailingSlash: true,       // /services → /services/index.html (Render-compatible)
  images: {
    unoptimized: true,       // Static export cannot use built-in image optimisation server
  },
  poweredByHeader: false,
  turbopack: {
    root: __dirname,
  },
};

module.exports = nextConfig;

