// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig: import('next').NextConfig = {
  rewrites: async () => {
    return [
      {
        source: '/the-eyes-behind-the-stories',
        destination: '/about',
      },
      {
        source: '/the-eyes-behind-the-stories/:path*', // Untuk semua sub-path
        destination: '/about/:path*',
      },
      // Bisa tambah banyak route lain
      {
        source: '/our-journey',
        destination: '/about',
      },
      {
        source: '/meet-the-team',
        destination: '/team',
      }
    ]
  }
}

module.exports = nextConfig