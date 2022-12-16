import Head from 'next/head'
import Image from 'next/image'
import Script from 'next/script'

import HeaderMob from '../components/HeaderMob'
import { ClientsCarousel } from '../components/ClientsCarousel'
import { CertificatesCarousel } from '../components/CertificatesCarousel'
import { SocialMedias } from '../components/SocialMedias'

const rollOrcamento = () => {
  document.location.href = '#contato-topo';
}
const rollOrcamentoRodape = () => {
  document.location.href = '#contato-rodape';
}

import profilePicture from '../public/cases/linx/profile.png'
import fakePlay from '../public/cases/linx/play.png'
import { Player } from '../components/Player'
import { CircularProgress } from '../components/CircularProgressbar'

export default function Linx() {

  return (
    <>
      <Head>
        <title>Nairuz | Marketing Digital - E-commerce LINX</title>
        <meta name="description" content="Uma plataforma completa, integrada e permite adaptações rápidas às mudanças no mercado e às necessidades do cliente! Somos uma agência VTEX certificada, entregamos soluções para atender os mais complexos desafios do seu e-commerce." />
        <meta property="og:image" content="https://nairuz.com.br/og-nairuz.png" />
				<meta property="og:image:type" content="image/png" />
				<meta property="og:image:width" content="600" />
				<meta property="og:image:height" content="400" />
        <meta property="og:description" content="Uma plataforma completa, integrada e permite adaptações rápidas às mudanças no mercado e às necessidades do cliente! Somos uma agência VTEX certificada, entregamos soluções para atender os mais complexos desafios do seu e-commerce." />
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

      <div className="page-temas page-performance vtex linx">
        <main>
          <section className="container-fluid" id="performance">
            <article className='sobre-linx'>
              <header className="container-fluid" id="header-geral">
                <div className="container">
                  <div className="row">
                    <div className='col-12'>
                      <div className='logo-contanto'>
                        <div className="logo">
                          <Image src="/logo-header.svg" alt="Logo Nairuz" title='Nairuz' width={150} height={28}/>
                        </div>

                        <div className="contato">
                          <button onClick={rollOrcamento} className="btn-contato">Entrar em contato</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </header>

              <HeaderMob />

              <div className='container'>
                <div className='row'>
                  <div className="col-12 col-md-6">
                    <div className="logo-linx">
                        <Image src="/cases/linx/linx_logo_branco.png" alt="Logo LINX" width={206} height={122} />
                    </div>
                    <div className="title-temas">
                      <h1>Está <span>buscando aumentar</span> a performance e vendas do seu e-commerce?</h1>
                    </div>
                    <div className="text-quemsomos">
                      <p>A <span>Nairuz</span> é especialista no assunto e a <span>LINX</span> é a plataforma certa para isso!</p>
                      <p>A <span>LINX</span> é uma empresa brasileira especialista em tecnologia para o varejo. São dezenas de soluções em um só lugar. <span>Uma delas é perfeita para você!</span></p>
                    </div>
                  </div>

                  <div className="col-12 col-md-6">
                    <div className="formRd-tema performance rd-linx" id='contato-topo'>
                      <div role="main" id="lp-linx-2022-b5fb78efe0ddcd180da7"></div>
                    </div>
                  </div>
                </div>
              </div>
            </article>

            <article className='solucoes'>
              <div className="container">
                <div className="row">
                  <div className='col-12'>
                    <h3 className='section-title'>Nossas <span>soluções</span></h3>
                      <div className='section-text'>
                        <p><strong>Vá além do e-commerce tradicional, vendendo em todos os canais, colaborando com parceiros e expandindo sua oferta de produtos.</strong></p>

                        <p><small>Mais de <span>60.000 empresas utilizam os nossos serviços.</span> Toda essa experiência é o que nos torna líderes no mercado de softwares de gestão e a escolha certa para o seu negócio.</small></p>
                      </div>
                  </div>

                  <div className='col-12'>
                    <div className='brands'>
                      <ul className="brands-list">
                        <li><Image src="/cases/linx/NIke_logo.png" width={83} height={47} alt="Nike" title="Nike" /></li>
                        <li><Image src="/cases/linx/Pandora_logo.png" width={115} height={24} alt="Pandora" title="Pandora" /></li>
                        <li><Image src="/cases/linx/Logo_natura.png" width={73} height={56} alt="Natura" title="Natura" /></li>
                        <li><Image src="/cases/linx/Logo magalu.png" width={114} height={33} alt="Magalu" title="Magalu" /></li>
                        <li><Image src="/cases/linx/Renner_Logo.png" width={135} height={25} alt="Renner" title="Renner" /></li>
                        <li><Image src="/cases/linx/Samsung_Logo.png" width={132} height={74} alt="Samsung" title="Samsung" /></li>
                      </ul>
                    </div>
                  </div>

                  <div className='col-12'>
                    <div className='marketshare'>
                      <div className='market-card'>
                        <CircularProgress posNumberText='DO MARKET SHARE' percentageValue={45.6} simbol='%' />
                        <p className='market-description'>A <strong>LINX</strong> oferece pelo menos uma de suas ferramentas para quase metade de todo grande varejo nacional.</p>
                      </div>

                      <div className='market-card'>
                        <CircularProgress preNumberText='+' percentageValue={16} posNumberText='países' imgSrc='/cases/linx/globe.svg' />
                        <p className='market-description'>Com a tecnologia em constante evolução a <strong>LINX</strong> tem levado resultados para mais de 16 países através de suas ferramentas.</p>
                      </div>
                    </div>
                  </div>

                  <div className="col-12 col-lg-6">
                    <div className="img-servico-performance website efeito-vtex">
                      <Image src="/esp-vtex.png" alt="VTEX" width={450} height={452} />
                    <div className="efeito-roll">
                      <Image src="/layout-saopedro-efeito.png" alt="Layout Casa São Pedro" width={486} height={1260} />
                    </div>
                    </div>
                  </div>

                  <div className="col-12 col-lg-6">
                    <div className="text-servico-performance">
                      <div className="box-icon-title">
                        <div className="icon-servico-performance">
                          <Image src="/icon-loja.png" alt="E-commerce" width={30} height={30} />
                        </div>
                        <div className="title-servico-performance">
                          <h4>Sim, nós temos o que o seu negócio precisa!</h4>
                        </div>
                      </div>
                      <div className="content-loja-rapida">
                        <ul className="diferenciais">
                          <li><span>1.</span><p>Reduza os riscos</p></li>
                          <li><span>2.</span><p>Construa experiências super rápidas</p></li>
                          <li><span>3.</span><p>Equipe certificada e especializada em LINX</p></li>
                        </ul>
                      </div>
                      <div className="button-servico-performance">
                        <a onClick={rollOrcamento} className="saiba-mais-temas">FALE COM UM CONSULTOR</a>
                      </div>
                    </div>
                  </div>

                  <div className='col-12'>
                    <div className='depoimento'>
                      <div className='depo-video'>
                        <Image src={fakePlay} alt="Fake player" width={80} height={80} />
                      </div>
                      <div className='depo-content'>
                        <div className='pic-content'>
                          <Image src={profilePicture} alt="Marcos Tomazi" width={128} height={128} />
                        </div>

                        <div className='depo-text'>
                          <p>Fiquei muito satisfeito com o nosso projeto, superaram nossas expectativas. Do projeto ao Go-live estiveram presentes em todas etapas. E estão conosco até hoje, mantendo a evolução contínua.</p>
                          <p><strong>Marcos Tomazi |</strong> Casa São Pedro</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className='col-12'>
                    <Player />
                  </div>

                  <div className='col-12'>
                    <div className='solucoes-rodape'>
                      <div className='section-text'>
                        <p><strong>A LINX possui mais de 50 soluções em ERP, PDV, digital, autoatendimento, delivery, entre outros, para ajudar você a transformar complexidade em resultado.</strong></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </section>

          <section className="container-fluid" id="bg-nos-nairuz">
            <article className='nos-nairuz'>
              <div className='container'>
                <div className='row'>
                  <div className="col-12">
                    <div className="sobre-nairuz">
                      <div className="title-nos-nairuz">
                        <h3 className='section-title'>Nós da <strong>Nairuz</strong></h3>
                      </div>
                      <div className="content-sobre-nairuz">
                        <p>Somos <strong>especializados</strong> e certificados para implementações <strong>LINX!</strong> Desenvolvemos, integramos e ajustamos os componentes da plataforma para atender às demandas únicas do seu negócio.</p>
                        <p>Unimos tecnologia, estratégias de marketing, performance e know-how de uma <strong>equipe de especialistas</strong> experientes em entregar soluções e o melhor resultado para nossos parceiros!</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>

            <article className='parcerias-container'>
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="parcerias-nz">
                      <div className="title-clientes">
                        <h4>Clientes que <strong>confiam em nosso trabalho</strong></h4>
                      </div>

                      <ClientsCarousel />
                    </div>

                    <div className="certificacoes">
                      <div className="title-clientes">
                        <h4><strong>Certificados</strong></h4>
                      </div>

                      <CertificatesCarousel />

                    </div>
                  </div>
                </div>
              </div>
            </article>
            
            <article className="container-fluid" id="impulsionar-vtex">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className='impulsionar-linx'>
                      <div className="text-impulse-vtex">
                        <p>Quer descobrir como podemos</p>
                        <h4>IMPULSIONAR O SEU E-COMMERCE?</h4>
                      </div>
                      <div className="button-servico-performance">
                          <a onClick={rollOrcamentoRodape} className="saiba-mais-temas">FALAR COM UM CONSULTOR</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>

            <article className='negocio-fechado'>
              <div className='container'>
                <div className='row'>
                  <div className='col-lg-6'>
                    <div className='texto-redes'>
                      <h3>#negócio fechado</h3>

                      <div className='redes'>
                        <Image src="/logo-header.svg" alt="Logo Nairuz" title='Nairuz' width={171} height={32}/>

                        <SocialMedias />
                      </div>
                    </div>
                  </div>

                  <div className='col-lg-6'>
                    <div className="formRd-tema performance rd-linx" id='#contato-rodape'>
                      <div role="main" id="lp-linx-2022-rodape-8424ee87d7e378c32478"></div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </section>

        </main>

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
    new RDStationForms('lp-linx-2022-b5fb78efe0ddcd180da7', 'UA-48773259-1').createForm();
    new RDStationForms('lp-linx-2022-rodape-8424ee87d7e378c32478', 'UA-48773259-1').createForm();
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
