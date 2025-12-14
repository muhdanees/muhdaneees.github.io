// const withPWA = require('next-pwa')

module.exports = {
  reactStrictMode: true,
  compress: true,
  // SEO & Performance optimizations
  swcMinify: true,
  poweredByHeader: false,
  // Image optimization
  images: {
    formats: ['image/webp', 'image/avif'],
    domains: ['www.codeplayer.me', 'codeplayer.me'],
  },
  // Headers for SEO
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          },
        ],
      },
    ];
  },
  // Redirects
  async redirects() {
    return [
      {
        source: '/contact',
        destination: '/contact-me',
        permanent: true,
      },
      {
        source: '/about',
        destination: '/about-me',
        permanent: true,
      },
    ];
  },
}
