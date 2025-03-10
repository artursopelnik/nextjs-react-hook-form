/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix: "/demo-form-static",
  async redirects() {
    return [
      {
        source: '/',
        destination: '/form/step-1', // Matched parameters can be used in the destination
        permanent: true,
      },
      {
        source: '/form',
        destination: '/form/step-1', // Matched parameters can be used in the destination
        permanent: true,
      },
    ]
  }
};

module.exports = nextConfig;
