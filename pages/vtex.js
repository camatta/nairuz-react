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
                  <div className="logo-vtex">
                      <Image src="/VTEX_Logo.svg" alt="Logo VTEX" width={120} height={30} />
                  </div>
                  <div className="title-temas">
                    <h1>Está buscando aumentar a performance e vendas do seu e-commerce?</h1>
                  </div>
                  <div className="text-quemsomos">
                    <p>A <span>Nairuz</span> é especialista no assunto e a <span>VTEX</span> é a plataforma certa para isso!</p>
                    <p>Uma plataforma de e-commerce completa, integrada e que permite adaptações rápidas às mudanças no mercado e às necessidades do cliente!</p>
                    <p>Somos uma agência <span>VTEX certificada</span>, entregamos soluções para atender os mais complexos desafios do seu e-commerce.</p>
                  </div>
                  <div className="buttons-temas">
                    <a className="saiba-mais-temas" onClick={rollOrcamento}>Falar com um consultor</a>
                  </div>
                  <div className="selos-vtex">
                    <ul>
                      <li><Image src="/vtexio-selo.png" alt="E-commerce" width={160} height={70} /></li>
                      <li><Image src="/implementation-selo.png" alt="E-commerce" width={160} height={70} /></li>
                      <li><Image src="/sales-selo.png" alt="E-commerce" width={160} height={70} /></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="separator-temas">
              <Image src="/icon-nairuz-full.svg" alt="Logo Nairuz" width={100} height={100} />
            </div>
          </section>
          <section className="container-fluid" id="apresentacao-performance">
            <div className="container">
              <div className="row d-flex align-items-center">
                <div className="col-12">
                  <div className="text-apresentacao">
                    <div className="title-apresentacao">
                      <h2>Vá além do ecommerce tradicional, vendendo em todos os canais, colaborando com parceiros e expandindo sua oferta de produtos.</h2>
                    </div>
                    <div className="text-apresentacao-vtex">
                      <p>As <span>principais marcas globais</span>, incluindo a Sony, Walmart, Whirlpool, Coca-Cola, Stanley Black & Decker, AB InBev e Nestlé, mais 3.200 lojas online ativas em 38 países, confiam na VTEX para <span>acelerar e transformar</span> os seus negócios de comércio.</p>
                      <ul className="marcas-vtex">
                        <li><Image src="/logo-sony.svg" alt="Logo Sony" width={72} height={12} /></li>
                        <li><Image src="/logo-wallmart.svg" alt="Logo Wallmart" width={80} height={19} /></li>
                        <li><Image src="/logo-whirpool.svg" alt="Logo Whirpool" width={76} height={43} /></li>
                        <li><Image src="/logo-cocacola.svg" alt="Logo Coca Cola" width={67} height={22} /></li>
                        <li><Image src="/logo-stanley.svg" alt="Logo Stanley" width={56} height={33} /></li>
                        <li><Image src="/logo-black.svg" alt="Logo Black" width={44} height={28} /></li>
                        <li><Image src="/logo-nestle.svg" alt="Logo Nestle" width={61} height={17} /></li>
                      </ul>
                    </div>
                    <div className="cards-vtex">
                      <div className="card-lojas">
                        <Image src="/icon-cart-vtex.svg" alt="Icon Carrinho" width={40} height={30} />
                        <p><span>+3200</span><br></br>lojas online</p>
                      </div>
                      <div className="card-paises">
                        <Image src="/icon-globo-vtex.svg" alt="Icon Globo" width={40} height={41} />
                        <p><span>38</span><br></br>países</p>
                      </div>
                    </div>  
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-md-6">
                  <div className="img-servico-performance website efeito-vtex">
                    <Image src="/esp-elevage.png" alt="VTEX" width={450} height={452} />
                  <div className="efeito-roll">
                    <Image src="/elevage-layout.png" alt="Layout Elevage" width={600} height={3421} />
                  </div>
                  </div>
                </div>
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
                    <div className="content-loja-rapida">
                      <ul className="loja-rapida d-flex align-items-center justify-content-center">
                        <li><span>1.</span><p>Reduza os riscos</p></li>
                        <li><span>2.</span><p>Construa experiências super rápidas</p></li>
                        <li><span>3.</span><p>Equipe certificada e especializada em VTEX</p></li>
                      </ul>
                    </div>
                    <div className="button-servico-performance">
                      <a onClick={rollOrcamento} className="saiba-mais-temas">FALE COM UM ESPECIALISTA</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
            <section className="container-fluid" id="bg-nos-nairuz">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="text-servico-performance">
                      <div className="title-nos-nairuz">
                        <div className="title-servico-performance vtex">
                          <h4>Nós da Nairuz</h4>
                        </div>
                      </div>
                      <div className="content-servico-performance vtex">
                        <p>Somos uma <span>agência Vtex Partners</span>, especializados e certificados para implementações VTEX! Fazemos a integração, implementação e ajustamos os componentes da plataforma para atender às demandas únicas do seu e-commerce.</p>
                        <p>Unimos tecnologia, estratégias de marketing, performance e know-how de uma equipe de especialistas experientes em entregar soluções e o melhor resultado para nossos parceiros!</p>
                      </div>
                      <div className="button-servico-performance mb-5 desktoponly">
                        <a onClick={rollOrcamento} className="saiba-mais-temas">Entre em contato com uma agência Vtex</a>
                      </div>
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
                  <div className="certificacoes">
                    <ul className="d-flex align-items-center">
                      <li><Image src="/parcerias/vtexpartner.png" alt="vTex" width={105} height={49} /></li>
                      <li><Image src="/parcerias/google-partner-novo.png" alt="Google Partner" width={99} height={97} /></li>
                      <li><Image src="/parcerias/rdplatinum22.png" alt="RD Platinum" width={105} height={49} /></li>
                      <li><Image src="/parcerias/ecommerce.png" alt="E-commerce Ouro" width={105} height={49} /></li>
                      <li><Image src="/parcerias/hubacademy.png" alt="HubSport Academy" width={105} height={49} /></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="container-fluid" id="impulsionar-vtex">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="text-impulse-vtex">
                    <p>Quer descobrir como podemos</p>
                    <h4>IMPULSIONAR O SEU E-COMMERCE?</h4>
                  </div>
                  <div className="button-servico-performance">
                      <a onClick={rollOrcamento} className="saiba-mais-temas">FALE COM UM ESPECIALISTA</a>
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
                    <div role="main" id="lp-vtex-2022-fc8729fa8bc9add52036"></div>
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

 
  if (window.RDStationForms) {
    new RDStationForms('lp-vtex-2022-fc8729fa8bc9add52036', 'UA-48773259-1').createForm();
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

    ;(function() {
          var script = document.createElement('script');
          script.id = '7a4b2d66-bf3e-4e13-8b5d-ed4fe6e475af';
          script.type = 'module';
          script.src = 'https://pageimprove.io';
          document.head.appendChild(script);
      })()
  
  `}
</Script>

<Script type="text/javascript" src="https://d335luupugsy2.cloudfront.net/js/rdstation-forms/stable/rdstation-forms.min.js"></Script>
<Script type="text/javascript" async src="https://d335luupugsy2.cloudfront.net/js/loader-scripts/58f2af1b-9339-4f1e-900b-b1cde4544bb4-loader.js" ></Script>
<noscript dangerouslySetInnerHTML={{ __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KCTM4JN"
height="0" width="0" style="display:none;visibility:hidden"></iframe>`}}></noscript>

    </>

  )
}
