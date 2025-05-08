/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix: "/demo-form-static",
  devIndicators: false,
  reactStrictMode: false,
  async redirects() {
    return [];
  },
};

module.exports = nextConfig;
