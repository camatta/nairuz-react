

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

  i18n: {
    locales: ['pt-br'],
    defaultLocale: 'pt-br',
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
