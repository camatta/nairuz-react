

module.exports = {
  reactStrictMode: true,

  async redirects() {
    return [
      {
        source: '/blog/:path*',
        destination: 'https://blog.nairuz.com.br/:path*',
        permanent: true,
      },
    ]
  },


}
