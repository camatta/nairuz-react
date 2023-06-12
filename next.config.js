

module.exports = {
  reactStrictMode: true,

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.cdninstagram.com',
      },
    ],
  },

  async redirects() {
    return [
      {
        source: '/blog/:path*',
        destination: 'https://blog.nairuz.com.br/:path*',
        permanent: true,
      },
      {
        source: '/blog/:path*',
        destination: 'https://blog.nairuz.com.br/:path*',
        permanent: true,
      }
    ]
  },


}
