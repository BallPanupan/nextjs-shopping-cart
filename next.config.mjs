/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['cdn.dummyjson.com'],
  },
  source: '/ProductDetail/:productId',
  destination: '/ProductDetail/[productId]',
};

export default nextConfig;
