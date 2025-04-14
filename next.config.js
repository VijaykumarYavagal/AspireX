module.exports = {
  // ...other config
  async redirects() {
    return [
      {
        source: '/old-path',
        destination: '/new-path',
        permanent: true,
      },
    ]
  }
}
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["randomuser.me"], // Add external image domains here
  },
};

module.exports = nextConfig;
