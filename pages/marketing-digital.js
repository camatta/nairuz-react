import Head from 'next/head'
import Image from 'next/image'
import HeaderMob from '../components/HeaderMob'
import Script from 'next/script'

const rollServicos = () => {
  document.location.href = '#apresentacao-performance';
}

const rollOrcamento = () => {
  document.location.href = '#form-temas';
}



export default function Marketing() {
  return (
    <>
      <Head>
        <title>Nairuz | Marketing Digital</title>
        <meta name="description" content="Conheça nossa Agência de Marketing Digital e Tecnologia e descubra como transformar os resultados da sua empresa. Acesse e saiba mais!" />
        <meta property="og:image" content="https://nairuz.com.br/og-nairuz.png" />
				<meta property="og:image:type" content="image/png" />
				<meta property="og:image:width" content="600" />
				<meta property="og:image:height" content="400" />
        <meta property="og:description" content="Conheça nossa Agência de Marketing Digital e Tecnologia e descubra como transformar os resultados da sua empresa. Acesse e saiba mais!" />
				<meta property="og:site_name" content="Nairuz | Marketing Digital" />
				<meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.png" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css" integrity="sha512-tS3S5qG0BlhnQROyJXvNjeEM4UpMXHrQfTGmbQ1gKmelCxlSEBUaxhRBj/EFTzpbP4RVSrpEikbmdJobCvhE3g==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.min.css" integrity="sha512-sMXtMNL1zRzolHYKEujM2AqCLUR9F2C4/05cdbxjjLSRvMQIciEPCQZo++nk7go3BtSuK9kfa/s+a4f4i5pLkw==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,300&display=swap" rel="stylesheet"></link>
      </Head>


      <Script id="gtm" dangerouslySetInnerHTML={{ __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KCTM4JN');`}}></Script>

      <div className="page-marketing">

        <header className="container-fluid" id="header-geral">
          <div className="container">
            <div className="row d-flex align-items-center">
              <div className="col-2">
                <div className="logo">
                  <Image src="/logo-header.svg" alt="Logo Nairuz" width={150} height={28}/>
                </div>
              </div>
              <div className="col-8">
              </div>
              <div className="col-2 text-right">
                <div className="contato">
                  <button onClick={rollOrcamento} className="btn-contato">Entrar em contato</button>
                </div>
              </div>
            </div>
          </div>
        </header>
        <HeaderMob />
        <main>
          <section className="container-fluid" id="performance">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="title-temas">
                    <h1>Quer vender mais, com um ticket maior, para mais pessoas e em <span>vários canais?</span></h1>
                  </div>
                  <div className="buttons-temas">
                    <a className="saiba-mais-temas" onClick={rollOrcamento}>Quero vender mais</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="separator-temas">
              <Image src="/icon-nairuz-full.svg" alt="Logo Nairuz" width={100} height={100} />
            </div>
          </section>
          <section className="container-fluid" id="problemas-performance">
            <div className="container">
              <div className="row d-flex align-items-center">
                <div className="col-12">
                  <div className="text-apresentacao">
                    <ul>
                      <li><div className="bg-lista"><span>1.</span></div><p>Você tem um e-commerce e realiza vendas na internet, mas sente que não tem crescimento?</p></li>
                      <li><div className="bg-lista"><span>2.</span></div><p>Ou pior, elas estão caindo nos últimos meses?</p></li>
                      <li><div className="bg-lista"><span>3.</span></div><p>Seu faturamento não está como você necessita para ter um negócio saudável?</p></li>
                    </ul>
                    <div className="button-servico-performance">
                      <a onClick={rollOrcamento} className="saiba-mais-temas">FALE COM UM ESPECIALISTA</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="container-fluid" id="cronograma-performance">
            <div className="container">
              <div className="row">
                <div className="col-12 col-md-8">
                  <div className="content-cronograma">
                    <div className="title-cronograma">
                      <p>O digital está cada vez mais presente na vida das pessoas.</p>
                    </div>
                    <div className="text-cronograma">
                      <p>Por isso, estar presente de forma estruturada é o que você precisa para <span>alavancar suas vendas</span>, e nós vamos te ajudar nisso.</p>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-4">
                  <div className="icon-cronograma">
                    <Image src="/icon-digital.svg" width={95} height={95} />
                  </div>
                </div>
              </div>
              <div className="row">
              <div className="col-12 col-md-4">
                  <div className="icon-cronograma">
                    <Image src="/icon-engrenagem.svg" width={95} height={95} />
                  </div>
                </div>
                <div className="col-12 col-md-8">
                  <div className="content-cronograma">
                    <div className="title-cronograma">
                      <p>O que a Nairuz faz?</p>
                    </div>
                    <div className="text-cronograma">
                      <p>Unimos Tecnologia e Marketing Digital, focados em performance, com uma <span>equipe multidisciplinar de especialistas</span> experientes para conquistar o resultado que seu negócio precisa.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-md-8">
                  <div className="content-cronograma">
                    <div className="title-cronograma">
                      <p>Como faz?</p>
                    </div>
                    <div className="text-cronograma">
                      <p className="mb-3">Somos uma agência de marketing digital em São Paulo com mais de uma década de experiência no universo digital.</p>
                      <p>Nossa meta é o <span>crescimento contínuo de nossos clientes</span> parceiros e, por isso, promovemos um atendimento personalizado e planos sólidos de marketing digital, totalmente adaptados às necessidades de cada empresa.</p>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-4">
                  <div className="icon-cronograma">
                    <Image src="/icon-cursor.svg" width={95} height={95} />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <div className="button-servico-performance">
                    <a onClick={rollOrcamento} className="saiba-mais-temas">FALE COM UM ESPECIALISTA</a>
                  </div>
                </div>
              </div>
            </div>
          </section>
            <section className="container-fluid" id="mkt-bialetti">
              <div className="container">
                <div className="row">
                  <div className="col-12 col-md-3">
                    <div className="logo-bialetti-case">
                      <Image src="/logo-mkt-bialetti.svg" width={250} height={250} />
                    </div>
                  </div>
                  <div className="col-12 col-md-7">
                    <div className="text-servico-performance">
                      <div className="title-nos-nairuz">
                        <div className="title-servico-performance vtex">
                          <h4>Case de Sucesso: Bialleti Shop</h4>
                        </div>
                      </div>
                      <div className="resultados-bialetti-mkt">
                        <ul>
                          <li><div className="icon-box"><Image src="/icon-mkt-faturamento.svg" width={22} height={22} /></div><p>+800% de faturamento em menos de um ano!</p></li>
                          <li><div className="icon-box"><Image src="/icon-mkt-user.svg" width={22} height={22} /></div><p>+14mil usuários mensais acessando o e-commerce</p></li>
                          <li><div className="icon-box"><Image src="/icon-mkt-vendas.svg" width={22} height={22} /></div><p>27% de vendas em busca orgânica.</p></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <div className="button-servico-performance">
                      <a onClick={rollOrcamento} className="saiba-mais-temas">QUERO ME TORNAR UM CASE DE SUCESSO</a>
                    </div>
                  </div>
                </div>
              </div>
            </section>

          <section className="container" id="clientes-nz">
            <div className="row">
              <div className="col-12">
                <div className="parcerias-certificacoes">
                  <div className="parcerias">
                    <div className="title-clientes-vtex">
                      <h4>Clientes que confiam em nosso trabalho</h4>
                    </div>
                    <ul className="d-flex align-items-center mb-5">
                      <li><Image src="/clientes/bialetti.png" width={116} height={55} /></li>
                      <li><Image src="/clientes/gaggia.png" width={116} height={55} /></li>
                      <li><Image src="/clientes/imeltron.png" width={116} height={55} /></li>
                      <li><Image src="/clientes/lvstore.png" width={116} height={55} /></li>
                      <li><Image src="/clientes/maquiadoro.png" width={116} height={55} /></li>
                    </ul>
                    <ul className="d-flex align-items-center mb-5">
                      <li><Image src="/clientes/samsung.png" width={116} height={55} /></li>
                      <li><Image src="/clientes/widestock.png" width={116} height={55} /></li>
                      <li><Image src="/clientes/pedigree.png" width={116} height={55} /></li>
                      <li><Image src="/clientes/minassal.png" width={116} height={55} /></li>
                      <li><Image src="/clientes/cybelar.png" width={116} height={55} /></li>
                    </ul>
                    <ul className="d-flex align-items-center mb-5">
                      <li><Image src="/clientes/candy.png" width={116} height={55} /></li>
                      <li><Image src="/clientes/hepta.png" width={116} height={55} /></li>
                      <li><Image src="/clientes/azul.png" width={116} height={55} /></li>
                      <li><Image src="/clientes/sempreviva.png" width={116} height={55} /></li>
                      <li><Image src="/clientes/novamed.png" width={116} height={55} /></li>
                    </ul>
                    <ul className="d-flex align-items-center">
                      <li><Image src="/clientes/rcrio.png" width={116} height={55} /></li>
                      <li><Image src="/clientes/ludka.png" width={116} height={55} /></li>
                      <li><Image src="/clientes/udiaco.png" width={116} height={55} /></li>
                      <li><Image src="/clientes/maravilhas.png" width={116} height={55} /></li>
                      <li><Image src="/clientes/covabra.png" width={116} height={55} /></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="depoimentos">
                  <div className="clientes-nairuz">
                    <div className="title-clientes-vtex">
                      <h4>Veja os depoimentos de nossos clientes:</h4>
                    </div>
                    <div className="carrossel-clientes owl-carousel owl-default">
                      <div className="cliente-nz">
                        <div className="img-cliente">
                          <Image src="/leticia.png" alt="Letícia Vaz" width={96} height={96} />
                        </div>
                        <div className="coment-cliente">
                          <p>Fiquei muito feliz ao ver o resultado final do projeto e também todo o caminho para chegarmos nele. Todas as solicitações e dúvidas foram atendidas de prontidão e da melhor forma possível.</p>
                        </div>
                        <div className="assinatura-cliente">
                          <p className="nome-cliente">Letícia Vaz</p>
                          <p>LV Store</p>
                        </div>
                      </div>
                      <div className="cliente-nz">
                        <div className="img-cliente">
                          <Image src="/marcelo.png" alt="Marcelo Arruda" width={96} height={96} />
                        </div>
                        <div className="coment-cliente">
                          <p>A Nairuz está com a Ludka desde a criação e concepção da nossa marca. Estamos construindo juntos o nosso futuro. Ainda temos muitos passos pela frente, rumo ao nosso sucesso!</p>
                        </div>
                        <div className="assinatura-cliente">
                          <p className="nome-cliente">Marcelo Arruda</p>
                          <p>Ludka Homewear</p>
                        </div>
                      </div>
                      <div className="cliente-nz">
                        <div className="img-cliente">
                          <Image src="/umberto.png" alt="Umberto Milo" width={96} height={96} />
                        </div>
                        <div className="coment-cliente">
                          <p>Os projetos superaram todas as expectativas, conseguindo “transmitir” requinte e sofisticação para o nosso público. A performance das lojas também estão acima das expectativas.</p>
                        </div>
                        <div className="assinatura-cliente">
                          <p className="nome-cliente">Umberto Milo</p>
                          <p>Gaggia | Bialetti</p>
                        </div>
                      </div>
                      <div className="cliente-nz">
                        <div className="img-cliente">
                          <Image src="/adriana.png" alt="Adriana Carpegiani" width={96} height={96} />
                        </div>
                        <div className="coment-cliente">
                          <p>A Nairuz esteve num momento de transição difícil e nos troue soluções. Todas decisões são avaliadas visando um melhor resultado! Recomendo como agência de marketing 360º.</p>
                        </div>
                        <div className="assinatura-cliente">
                          <p className="nome-cliente">Adriana Carpegiani</p>
                          <p>Congelados da Sônia</p>
                        </div>
                      </div>
                      <div className="cliente-nz">
                        <div className="img-cliente">
                          <Image src="/renato.png" alt="Renato Soares" width={96} height={96} />
                        </div>
                        <div className="coment-cliente">
                          <p>A nossa história com a Nairuz tem uma longa jornada, sempre contribuíram conosco em todas as etapas. Recomendamos como agência full service, somos de fato parceiros.</p>
                        </div>
                        <div className="assinatura-cliente">
                          <p className="nome-cliente">Renato Soares</p>
                          <p>Lojas RPM</p>
                        </div>
                      </div>
                      <div className="cliente-nz">
                        <div className="img-cliente">
                          <Image src="/amanda.png" alt="Amanda Corrêa" width={96} height={96} />
                        </div>
                        <div className="coment-cliente">
                          <p>A Nairuz fez parte da jornada que é começar a empreender. Com certeza fez toda diferença uma agência de experiência e performance digital ao nosso lado. Adorei o resultado do projeto!</p>
                        </div>
                        <div className="assinatura-cliente">
                          <p className="nome-cliente">Amanda Corrêa</p>
                          <p>Twenty First</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="container" id="aumentar-vendas">
            <div className="row">
              <div className="col-12">
                <div className="chamada-vendas">
                  <h4>Aumente suas vendas e lucro, sem aumentar a equipe:</h4>
                  <h5>Para fazer o marketing da sua empresa, você precisaria de no MÍNIMO, <span>5 funcionários:</span></h5>
                </div>
                <div className="lista-profissionais">
                  <ul>
                    <li><p><span>1.</span>Profissional de SEO</p></li>
                    <li><p><span>2.</span>Designer gráfico</p></li>
                    <li><p><span>3.</span>Gestor de tráfego</p></li>
                    <li><p><span>4.</span>Profissional de Inbound Marketing</p></li>
                    <li><p><span>5.</span>Consultor de e-commerce</p></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="row align-items-center">
              <div className="col-12 col-md-6">
                <div className="text-aumentar-vendas">
                  <p>Além disso, contamos com uma equipe completa, especializada e certificada pelas melhores e mais buscadas plataformas de e-commerce.</p>
                  <p>Desenvolvemos, integramos e ajustamos os componentes da plataforma para atender às demandas únicas da sua empresa!</p>
                  <p>Aqui na Nairuz você vai ter todo nosso time de especialistas certificados para atender as demandas da sua empresa, reduzindo seu custo em contratar cada um deles, sem falar na otimização do seu tempo para gerir esses profissionais.</p>
                  <p><span>Aqui você terá suporte totalmente dedicado ao seu negócio.</span></p>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="img-aumentar-vendas">
                  <Image src="/aumentar-vendas.png" alt="Analista de E-commerce" width={542} height={432} />
                </div>
              </div>
            </div>
          </section>

          <section className="container" id="parcerias-marketing">
            <div className="row">
              <div className="col-12">
                <div className="parcerias-certificacoes">
                  <div className="parcerias">
                    <ul className="d-flex align-items-center mb-4">
                      <li><Image src="/parcerias/signa.png" alt="Signa" width={105} height={49} /></li>
                      <li><Image src="/parcerias/biz.png" alt="BizCommerce" width={105} height={49} /></li>
                      <li><Image src="/parcerias/bis2bis.png" alt="Bis2Bis" width={105} height={49} /></li>
                      <li><Image src="/parcerias/linx.png" alt="Linx Commerce" width={105} height={49} /></li>
                      <li><Image src="/parcerias/mage.png" alt="Mageshop" width={105} height={49} /></li>
                      <li><Image src="/parcerias/uol.png" alt="Uol" width={105} height={49} /></li>
                      <li><Image src="/parcerias/vindi.png" alt="Vindi" width={105} height={49} /></li>
                      <li><Image src="/parcerias/pagarme.png" alt="pagar.me" width={105} height={49} /></li>
                    </ul>
                    <ul className="d-flex align-items-center mb-4">
                      <li><Image src="/parcerias/amazon.png" alt="Amazon" width={105} height={49} /></li>
                      <li><Image src="/parcerias/jet-logo.png" alt="Jetcommerce" width={105} height={49} /></li>
                      <li><Image src="/parcerias/anymarket.png" alt="AnyMarket" width={105} height={49} /></li>
                      <li><Image src="/parcerias/shopback.png" alt="Shopback" width={105} height={49} /></li>
                      <li><Image src="/parcerias/hubspot.png" alt="Hubspot" width={105} height={49} /></li>
                      <li><Image src="/parcerias/rd.png" alt="RD Station" width={105} height={49} /></li>
                      <li><Image src="/parcerias/semrush.png" alt="SemRush" width={105} height={49} /></li>
                      <li><Image src="/parcerias/appcampinas.png" alt="APP Campinas" width={105} height={49} /></li>
                    </ul>
                  </div>
                  <div className="certificacoes">
                    <ul className="d-flex align-items-center">
                      <li><Image src="/parcerias/google-partner-novo.png" alt="Google Partner" width={99} height={97} /></li>
                      <li><Image src="/parcerias/rdplatinum22.png" alt="RD Platinum" width={105} height={49} /></li>
                      <li><Image src="/parcerias/ecommerce.png" alt="E-commerce Ouro" width={105} height={49} /></li>
                      <li><Image src="/parcerias/hubacademy.png" alt="HubSport Academy" width={105} height={49} /></li>
                      <li><Image src="/parcerias/magento.png" alt="Magento" width={105} height={49} /></li>
                      <li><Image src="/parcerias/linxpartners.png" alt="Linx Partners" width={105} height={49} /></li>
                      <li><Image src="/parcerias/vtexpartner.png" alt="vTex" width={105} height={49} /></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="container-fluid" id="form-temas">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="text-header-form text-center">
                    <p>Vamos juntos AUMENTAR AS VENDAS DO SEU E-COMMERCE?</p>
                    <p className="descricao-form">Preencha o formulário abaixo e receba o contato da nossa equipe</p>
                  </div>
                  <div className="button-servico-performance">
                    <a onClick={rollOrcamento} className="saiba-mais-temas">QUERO VENDER MAIS</a>
                  </div>
                  <div className="formRd-tema performance">
                    <div role="main" id="lp-marketing-2022-16dd24c9f90b7c7f48ec"></div>
                  </div>
                  <div className="form-tema">
                    <form>
                      <div className="linha-form">
                        <div className="form-nome">
                          <label htmlFor="nome">Nome *</label>
                          <input type="text" name="nome" id="nome" placeholder="Digite seu nome completo" />
                        </div>
                        <div className="form-email">
                          <label htmlFor="email">E-mail *</label>
                          <input type="email" className="input-email" name="email" id="email" placeholder="Seu melhor e-mail" />
                        </div>
                      </div>
                      <div className="linha-form">
                        <div className="form-nome">
                          <label htmlFor="nome">Telefone *</label>
                          <input type="text" name="nome" id="nome" placeholder="+55" />
                        </div>
                        <div className="form-email">
                          <label htmlFor="email">Empresa</label>
                          <input type="email" className="input-email" name="email" id="email" placeholder="Nome da sua empresa" />
                        </div>
                      </div>
                      <div className="linha-form">
                        <div className="form-email form-selects">
                          <label htmlFor="email">Qual dos temas mais se assemelha ao seu modelo de negócio?</label>
                          <input type="email" className="input-email" name="email" id="email" placeholder="Selecione" />
                        </div>
                      </div>
                      <div className="button-form-consultor">
                        <input className="button-form-temas" type="submit" value="FALAR COM UM DE NOSSOS CONSULTORES" />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="footer-logo">
                <div className="logo">
                  <Image src="/logo-footer.svg" alt="Nairuz" width={154} height={28} />
                </div>
                <div className="nav-footer">
                  <ul>
                    <li><a href="https://nairuz.com.br">SITE OFICIAL</a></li>
                    <li><a href="https://blog.nairuz.com.br">BLOG</a></li>
                    <li><a href="https://nairuz.com.br/quem-somos">SOBRE NÓS</a></li>
                    <li><a href="https://nairuz.com.br/cases">CASES DE SUCESSO</a></li>
                  </ul>
                </div>
                <div className="sociais">
                  <ul>
                    <li><a href="https://www.facebook.com/NairuzConsultoriaDigital" target="_blank" rel="noopener noreferrer"><Image src="/icon-face-tema.png" alt="Facebook" width={25} height={25} /></a></li>
                    <li><a href="https://www.instagram.com/nairuzconsultoria" target="_blank" rel="noopener noreferrer"><Image src="/icon-instagram-tema.png" alt="Instagram" width={25} height={25}  /></a></li>
                    <li><a href="https://www.youtube.com/channel/UCu70MAqws64Vk2dYQlCFVYg" target="_blank" rel="noopener noreferrer"><Image src="/icon-youtube-tema.png" alt="YouTube" width={25} height={25}  /></a></li>
                    <li><a href="https://www.linkedin.com/company/nairuz" target="_blank" rel="noopener noreferrer"><Image src="/icon-linkedin-tema.png" alt="LinkedIn" width={25} height={25}  /></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid" id="copy-temas">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="copyright d-flex align-items-center justify-content-center mobcenter">
                  <Image src="/selo-br.png" alt="Brasil" width={17} height={12} />
                  <p>Nairuz Marketing e Tecnologia® 2021 / todos os direitos reservados</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        </div>

        <Script src="https://code.jquery.com/jquery-3.6.0.min.js"
          strategy="beforeInteractive" />
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js" 
          strategy="beforeInteractive" />

        <Script id="show-bannerx" strategy="lazyOnload">
  {`

// Carrossel geral
$(document).ready(function(){
  $(".owl-carousel.owl-default").owlCarousel({
    items: 3,
    nav: true,
    navText: ["<img src='/arrow-left.svg'>","<img src='/arrow-right.svg'>"],
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:1,
            nav:false
        },
        1000:{
            items:3,
            nav:true,
            loop:false
        }
    }
  });
});
 
  if (window.RDStationForms) {
    new RDStationForms('lp-marketing-2022-16dd24c9f90b7c7f48ec', 'UA-48773259-1').createForm();
  }

  if($('.overlay-loading').length){
    setTimeout(function() { 
      $('body').addClass('loaded');
  }, 2000);
    setTimeout(function() { 
      $('body').addClass('out');
  }, 3000);
  } else {
    $('body').addClass('loaded');
  }

  (function(h,o,t,j,a,r){
    h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
    h._hjSettings={hjid:445751,hjsv:6};
    a=o.getElementsByTagName('head')[0];
    r=o.createElement('script');r.async=1;
    r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
    a.appendChild(r);
})(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
  
  `}
</Script>

<Script type="text/javascript" src="https://d335luupugsy2.cloudfront.net/js/rdstation-forms/stable/rdstation-forms.min.js"></Script>
<noscript dangerouslySetInnerHTML={{ __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KCTM4JN"
height="0" width="0" style="display:none;visibility:hidden"></iframe>`}}></noscript>

    </>

  )
}
