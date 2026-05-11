import type { NextConfig } from 'next'

const securityHeaders = [
  { key: 'X-Content-Type-Options',       value: 'nosniff' },
  { key: 'X-Frame-Options',              value: 'SAMEORIGIN' },
  { key: 'X-XSS-Protection',            value: '1; mode=block' },
  { key: 'Referrer-Policy',             value: 'strict-origin-when-cross-origin' },
  { key: 'Permissions-Policy',          value: 'camera=(), microphone=(), geolocation=()' },
  { key: 'Strict-Transport-Security',   value: 'max-age=63072000; includeSubDomains; preload' },
]

const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 31536000,
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
    ]
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
