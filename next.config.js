/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['localhost'],
    unoptimized: true,
  },
  output: 'standalone',
  poweredByHeader: false,
  compress: true
}

module.exports = nextConfig 