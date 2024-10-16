/**
 * @type {import('next').NextConfig}
 */
// import { i18n } from './i18n.config';
const nextConfig = {
  // i18n,
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
      },
    ],
  },
};

export default nextConfig;
