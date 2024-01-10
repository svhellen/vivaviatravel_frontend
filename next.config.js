// module.exports = nextConfig
/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  // images: {
  //   domains: ['picsum.photos'],
  // },
    images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        // pathname: '/500/300/?blur=10',
        // https://picsum.photos/500/300/?blur=10
      },
    ],
  },
};

module.exports = nextConfig
