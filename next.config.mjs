/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['127.0.0.1', 'localhost'], // add your backend host here, without protocol
  },
  eslint: {
    ignoreDuringBuilds: true, // <- ignores ESLint warnings/errors during build
  },
};

export default nextConfig;
