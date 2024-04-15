/** @type {import('next').NextConfig} */
const nextConfig = {
	output: 'export',
  reactStrictMode: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.dummyjson.com',
        // port: '',
        // pathname: '',
      },
    ],
  },
};

export default nextConfig;