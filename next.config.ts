import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  async redirects() {
    return [
      {
        source: '/reviews',
        destination: '/about#press',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
