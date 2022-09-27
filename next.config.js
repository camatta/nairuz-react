

module.exports = {
  reactStrictMode: true,

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
      },
      {
        source: 'https://www.nairuz.com.br/1005-2/',
        destination: 'https://blog.nairuz.com.br/1005-2/',
        permanent: true,
      },
      {
        source: 'https://www.nairuz.com.br/marketing-digital-pos-pandemia/',
        destination: 'https://blog.nairuz.com.br/marketing-digital-pos-pandemia/',
        permanent: true,
      },
      {
        source: 'https://www.nairuz.com.br/melhores-midias-sociais-para-negocio/',
        destination: 'https://blog.nairuz.com.br/melhores-midias-sociais-para-negocio/',
        permanent: true,
      },
      {
        source: 'https://www.nairuz.com.br/o-que-e-marketplace/',
        destination: 'https://blog.nairuz.com.br/o-que-e-marketplace/',
        permanent: true,
      },
      {
        source: 'https://www.nairuz.com.br/persona-entenda-o-significado-e-a-importancia-para-o-sucesso-do-seu-negocio/',
        destination: 'https://blog.nairuz.com.br/persona-entenda-o-significado-e-a-importancia-para-o-sucesso-do-seu-negocio/',
        permanent: true,
      },
      {
        source: 'https://www.nairuz.com.br/porque-voce-deveria-estar-tentando-melhorar-sua-estrategia-de-consultoria-em-marketing-digital/',
        destination: 'https://blog.nairuz.com.br/porque-voce-deveria-estar-tentando-melhorar-sua-estrategia-de-consultoria-em-marketing-digital/',
        permanent: true,
      },

    ]
  },


}
