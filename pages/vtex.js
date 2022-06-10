import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import HeaderMob from '../components/HeaderMob'
import BehanceNz from '../components/BehanceNz'
import Script from 'next/script'

const rollServicos = () => {
  document.location.href = '#apresentacao-performance';
}

const rollOrcamento = () => {
  document.location.href = '#form-temas';
}



export default function Vtex() {
  return (
    <>
      <Head>
        <title>Nairuz | Marketing Digital - E-commerce VTEX</title>
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

      <div className="page-temas page-performance vtex">

        <header className="container-fluid" id="header-geral">
          <div className="container">
            <div className="row d-flex align-items-center">
              <div className="col-2">
                <div className="logo">
                  <Image src="/logo-header.svg" alt="Logo Nairuz" width={150} height={28}/>
                </div>
              </div>
              <div className="col-8">
                <div className="menu">
                  <nav>
                    <ul>
                      <li><button onClick={rollServicos}>Qual tipo de layout escolher?</button></li>
                      <li><button onClick={rollOrcamento}>Orçamento</button></li>
                    </ul>
                  </nav>
                </div>
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
                <div className="col-12 col-md-6">
                  <div className="title-temas">
                    <h1>Procurando aumentar a performance e vendas do seu e-commerce?</h1>
                  </div>
                  <div className="text-quemsomos">
                    <p>A <span>VTEX</span> é a plataforma certa para isso!</p>
                    <p>Uma plataforma completa, integrada e permite adaptações rápidas às mudanças no mercado e às necessidades do cliente!</p>
                  </div>
                  <div className="buttons-temas">
                    <a className="saiba-mais-temas" onClick={rollOrcamento}>Falar com um consultor</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="separator-temas">
              <Image src="/icon-separator-nairuz.png" alt="Logo Nairuz" width={100} height={100} />
            </div>
          </section>
          <section className="container-fluid" id="apresentacao-performance">
            <div className="container">
              <div className="row d-flex align-items-center">
                <div className="col-12 col-md-8">
                  <div className="text-apresentacao">
                    <div className="title-apresentacao">
                      <h2>Vá além do ecommerce tradicional, vendendo em todos os canais, colaborando com parceiros e expandindo sua oferta de produtos.</h2>
                      <p>As principais marcas globais, incluindo a Sony, Walmart, Whirlpool, Coca-Cola, Stanley Black & Decker, AB InBev e Nestlé, mais 3.200 lojas online ativas em 38 países, confiam na VTEX para acelerar e transformar os seus negócios de comércio.</p>
                      <p>Lance sua loja mais rápido, reduza os riscos e construa experiências super-rápidas com o auxílio de uma equipe certificada e especializada em Vtex.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-md-6">
                  <div className="text-servico-performance">
                    <div className="box-icon-title">
                      <div className="icon-servico-performance">
                        <Image src="/icon-loja.png" alt="E-commerce" width={30} height={30} />
                      </div>
                      <div className="title-servico-performance">
                        <h4>Lance sua loja mais rápido!</h4>
                      </div>
                    </div>
                    <div className="content-servico-performance">
                      <p>Reduza os riscos e construa experiências super-rápidas com o auxílio de uma equipe certificada e especializada em Vtex.</p>
                    </div>
                    <div className="button-servico-performance">
                      <a onClick={rollOrcamento} className="saiba-mais-temas">FALE COM UM ESPECIALISTA</a>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="img-servico-performance right layout">
                    <Image src="/e-commerce-vtex.png" alt="E-commer" width={500} height={400} />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-md-6">
                  <div className="img-servico-performance website">
                    <Image src="/esp-vtex.png" alt="VTEX" width={450} height={452} />
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="text-servico-performance">
                    <div className="box-icon-title">
                      <div className="title-servico-performance vtex">
                        <h4>Nós da Nairuz</h4>
                      </div>
                    </div>
                    <div className="content-servico-performance vtex">
                      <p>Somos <span>especializados</span> e certificados para implementações VTEX! Desenvolvemos, integramos e ajustamos os componentes da plataforma para atender às demandas únicas do seu negócio.</p>
                    </div>
                    <div className="img-text-vtex">
                      <div className="img-caracteristicas">
                        <Image src="/icon-certificacoes.svg" alt="Certificações" width={20} height={20} />
                      </div>
                      <div className="text-caracteristicas">
                        <p>CERTIFICAÇÕES E PARCERIAS<br></br>VTEX, Google, RD e muito mais!</p>
                      </div>
                    </div>
                    <div className="info-button-vtex">
                      <p>Quer descobrir como podemos impulsionar o seu <span>e-commerce?</span></p>
                    </div>
                    <div className="button-servico-performance">
                      <a onClick={rollOrcamento} className="saiba-mais-temas vtex">FALE COM UM ESPECIALISTA</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="container-fluid" id="form-temas">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="formRd-tema performance">
                    <div role="main" id="lp-performance-2022-e3e11f834cac8208347b"></div>
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
          <BehanceNz />
          <section className="container" id="parceiros-temas">
          <div className="row">
            <div className="col-12">
              <div className="title-parcerias">
                <h4>Certificações e <span>Parcerias</span></h4>
              </div>
            </div>
          </div>
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
                      <li><Image src="/parcerias/googlepartner.png" alt="Google Partner" width={105} height={49} /></li>
                      <li><Image src="/parcerias/rdplatinum.png" alt="RD Platinum" width={105} height={49} /></li>
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

 
  if (window.RDStationForms) {
    new RDStationForms('lp-performance-2022-e3e11f834cac8208347b', 'UA-48773259-1').createForm();
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
