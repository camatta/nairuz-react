import Head from 'next/head'
import Image from 'next/image'
import BehanceNz from '../components/BehanceNz'
import HeaderMob from '../components/HeaderMob'
import Script from 'next/script'

const rollEscolher = () => {
  document.location.href = '#escolher-layout';
}

const rollOrcamento = () => {
  document.location.href = '#form-temas';
}

export default function Layout() {
  return (
    <>
      <Head>
        <title>Nairuz | Marketing Digital - Layout para E-commerce</title>
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
      <Script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" />

      <Script id="gtm" dangerouslySetInnerHTML={{ __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KCTM4JN');`}}></Script>

      <div className="page-temas page-layout">
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
                      <li><button onClick={rollEscolher}>Qual tipo de layout escolher?</button></li>
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
                    <h1>Precisa de um ambiente digital para seu negócio? Veio ao lugar certo!</h1>
                  </div>
                  <div className="text-quemsomos">
                    <p>Se você precisa de um ambiente online pra expor sua marca ou vender seus produtos, nós podemos te ajudar! Veja os serviços e soluções que podemos te oferecer e entre em contato com um de nossos consultores.</p>
                  </div>
                  <div className="buttons-temas">
                    <a className="saiba-mais-temas" onClick={rollEscolher}>Ver serviços <Image src="/icon-arrow-down.svg" alt="Seta" width={12} height={12} /></a>
                    <a className="consultor-temas" onClick={rollOrcamento}>Falar com um consultor</a>
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
              <div className="row d-flex align-items-center" id="escolher-layout">
                <div className="col-12 col-md-6">
                  <div className="text-apresentacao">
                    <div className="title-apresentacao">
                      <h2>Saiba qual tipo de layout mais se encaixa em seu negócio.</h2>
                      <p>Confira abaixo as opções de layout que podemos oferecer ao seu projeto</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-md-6">
                  <div className="text-servico-performance">
                    <div className="box-icon-title">
                      <div className="icon-servico-performance">
                        <Image src="/icon-layout-personalizado.svg" alt="Layout" width={68} height={68} />
                      </div>
                      <div className="title-servico-performance">
                        <h4>Layout para e-commerce personalizado</h4>
                      </div>
                    </div>
                    <div className="content-servico-performance">
                      <p>Se você deseja um layout exclusivo, criado do zero, com total fidelidade à sua marca, funcionalidades próprias, visando uma ótima experiência para seu público-alvo, o layout personalizado é a melhor opção para o seu negócio. Após contratado, nossa equipe de Customer Success entrará em contato para colher as informações necessárias, agendar reuniões de apresentação das páginas criadas e acompanhar o projeto até sua finalização.</p>
                    </div>
                    <div className="caracteristicas-layout">
                      <ul>
                        <li>
                          <div className="img-caracteristicas">
                            <Image src="/icon-layout-personalizado2.svg" alt="Layout" width={45} height={45} />
                          </div>
                          <div className="text-caracteristicas">
                            <p>Criação de telas em versões desktop (tela de computador) e mobile (tela de smartphone).</p>
                          </div>
                          </li>
                        <li>
                          <div className="img-caracteristicas">
                            <Image src="/icon-layout-personalizado3.svg" alt="Layout" width={45} height={45} />
                          </div>
                          <div className="text-caracteristicas">
                            <p>Prazo estimado de entrega: 80 dias úteis</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="button-servico-performance">
                      <a className="saiba-mais-temas" onClick={rollOrcamento}>QUERO UM LAYOUT PERSONALIZADO</a>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="img-servico-performance right layout">
                    <Image src="/layout-performance.png" alt="Layout" width={400} height={403} />
                  </div>
                  <div className="info-layouts right">
                    <div className="icon-info-layouts">
                      <Image src="/icon-info.svg" alt="Informação" width={18} height={18} />
                    </div>
                    <div className="text-info-layouts">
                      <p>Layout personalizado criado para a marca Bialetti. Imagem com navegação interativa, posicione o ponteiro sobre a imagem e role para ver a página completa.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-md-6">
                  <div className="img-servico-performance website">
                    <Image src="/layout-website.png" alt="Layout para Website" width={400} height={403} />
                  </div>
                  <div className="info-layouts">
                    <div className="icon-info-layouts">
                      <Image src="/icon-info.svg" alt="Informação" width={18} height={18} />
                    </div>
                    <div className="text-info-layouts">
                      <p>Website criado para a marca Infocards. Imagem com navegação interativa, posicione o ponteiro sobre a imagem e role para ver a página completa.</p>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="text-servico-performance">
                    <div className="box-icon-title">
                      <div className="icon-servico-performance">
                        <Image src="/icon-layout-website.svg" alt="Websites" width={68} height={68} />
                      </div>
                      <div className="title-servico-performance">
                        <h4>Websites</h4>
                      </div>
                    </div>
                    <div className="content-servico-performance">
                      <p>Se você busca por um site institucional, que mostre os valores de sua empresa, os objetivos de sua marca, visando a deixar mais conhecida e acessível, desenvolver um website conosco é a escolha certa! Após contratado, nossa equipe de Customer Success entrará em contato para colher as informações necessárias, agendar reuniões de apresentação das páginas criadas e acompanhar o projeto até sua finalização.</p>
                    </div>
                    <div className="caracteristicas-layout">
                      <ul>
                        <li>
                          <div className="img-caracteristicas">
                            <Image src="/icon-layout-website2.svg" alt="Layout" width={45} height={45} />
                          </div>
                          <div className="text-caracteristicas">
                            <p>Criação de telas em versões desktop (tela de computador) e mobile (tela de smartphone).</p>
                          </div>
                        </li>
                        <li><Image src="/icon-layout-website3.svg" alt="Layout" width={45} height={45} /><p>Prazo estimado de entrega: 50 dias úteis</p></li>
                      </ul>
                    </div>
                    <div className="button-servico-performance">
                      <a className="saiba-mais-temas website" onClick={rollOrcamento}>QUERO UM WEBSITE</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-md-6">
                  <div className="text-servico-performance">
                    <div className="box-icon-title">
                      <div className="icon-servico-performance">
                        <Image src="/icon-layout-pre.svg" alt="Layout Tema Pré-Pronto" width={68} height={68} />
                      </div>
                      <div className="title-servico-performance">
                        <h4>Tema (Layout pré-pronto)</h4>
                      </div>
                    </div>
                    <div className="content-servico-performance">
                      <p>Se você está com o prazo mais curto, e precisa de urgência em colocar seus produtos em uma vitrine virtual, sugerimos a contratação de um de nossos temas. Temas são estruturas pré-prontas de um e-commerce, que serão adaptadas às cores e identidade de sua marca. Ou seja, uma estrutura padrão, porém adaptável às suas necessidades. Após contratado, nossa equipe de Customer Success entrará em contato para colher as informações necessárias (briefing) e acompanhar o projeto até a finalização.</p>
                    </div>
                    <div className="caracteristicas-layout">
                      <ul>
                        <li><Image src="/icon-layout-pre2.svg" alt="Layout Tema Pré-Pronto" width={45} height={45} /><p>Edição de tema em versão responsiva (adaptável).</p></li>
                        <li><Image src="/icon-layout-pre3.svg" alt="Layout Tema Pré-Pronto" width={45} height={45} /><p>Prazo estimado de entrega: 15 dias úteis</p></li>
                      </ul>
                    </div>
                    <div className="button-servico-performance layout-pre">
                      <a className="saiba-mais-temas" href="https://nairuz.com.br/temas-para-ecommerce">VER TEMAS</a>
                      <a className="saiba-mais-temas" onClick={rollOrcamento}>QUERO UM TEMA</a>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="img-servico-performance right midias">
                    <Image src="/layout-tema.png" alt="Tema Pré-Pronto" width={400} height={403} />
                  </div>
                  <div className="info-layouts right">
                    <div className="icon-info-layouts">
                      <Image src="/icon-info.svg" alt="Informação" width={18} height={18} />
                    </div>
                    <div className="text-info-layouts">
                      <p>Tema adaptado para a marca Nutrienergy. Imagem com navegação interativa, posicione o ponteiro sobre a imagem e role para ver a página completa.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-md-6">
                  <div className="img-servico-performance inbound">
                    <Image src="/layout-tema-customizado.png" alt="Tema Customizado" width={400} height={403} />
                  </div>
                  <div className="info-layouts">
                    <div className="icon-info-layouts">
                      <Image src="/icon-info.svg" alt="Informação" width={18} height={18} />
                    </div>
                    <div className="text-info-layouts">
                      <p>Tema customizado para a marca Farmácia Sempre Viva. Imagem com navegação interativa, posicione o ponteiro sobre a imagem e role para ver a página completa.</p>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="text-servico-performance">
                    <div className="box-icon-title">
                      <div className="icon-servico-performance">
                        <Image src="/icon-tema-customizado.svg" alt="Tema Customizado" width={68} height={68} />
                      </div>
                      <div className="title-servico-performance">
                        <h4>Tema Customizado</h4>
                      </div>
                    </div>
                    
                    <div className="content-servico-performance">
                      <p>Se você está com o prazo mais curto, e precisa de urgência em colocar seus produtos em uma vitrine virtual, porém gostaria de algumas mudanças de estrutura do nosso tema, a melhor opção para o seu projeto é a instauração de um tema customizado. Após contratado, nossa equipe de Customer Success entrará em contato para colher as informações necessárias (briefing) e acompanhar o projeto até a finalização.</p>
                    </div>
                    <div className="caracteristicas-layout">
                      <ul>
                        <li>
                          <div className="img-caracteristicas">
                            <Image src="/icon-tema-customizado2.svg" alt="Tema Customizado" width={45} height={45} />
                          </div>
                          <div className="text-caracteristicas">
                            <p>Edição de tema em versão responsiva (adaptável).</p>
                          </div>
                        </li>
                        <li>
                          <div className="img-caracteristicas">
                            <Image src="/icon-tema-customizado3.svg" alt="Tema Customizado" width={45} height={45} />
                          </div>
                          <div className="text-caracteristicas">
                            <p>Prazo estimado de entrega: 25 dias úteis</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="button-servico-performance tema-customizado">
                      <a className="saiba-mais-temas" href="https://nairuz.com.br/temas-para-ecommerce">VER TEMAS</a>
                      <a className="saiba-mais-temas" onClick={rollOrcamento}>QUERO UM TEMA CUSTOMIZADO</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-md-6">
                  <div className="text-servico-performance">
                    <div className="box-icon-title">
                      <div className="icon-servico-performance">
                        <Image src="/icon-personalizado.svg" alt="Serviço Personalizado" width={68} height={68} />
                      </div>
                      <div className="title-servico-performance">
                        <h4>Serviço Personalizado</h4>
                      </div>
                    </div>
                    <div className="content-servico-performance">
                      <p>Precisa de um serviço personalizado que não se encaixa nos exemplos acima? Nós podemos te ajudar! Além dos serviços listados acima, também podemos ajudar seu negócio com o desenvolvimento de blogs, landing pages, one pages, manutenções de site, entre outros.</p>
                    </div>
                    <div className="caracteristicas-layout">
                      <ul>
                        <li><Image src="/icon-personalizado2.svg" alt="Serviço Personalizado" width={45} height={45} /><p>Prazo de entrega variável.</p></li>
                      </ul>
                    </div>
                    <div className="button-servico-performance personalizado">
                      <a className="saiba-mais-temas" onClick={rollOrcamento}>QUERO UM SERVIÇO PERSONALIZADO</a>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="img-servico-performance right seo">
                    <Image src="/layout-personalizado.png" alt="Serviço Personalizado" width={400} height={403} />
                  </div>
                  <div className="info-layouts right">
                    <div className="icon-info-layouts">
                      <Image src="/icon-info.svg" alt="Informação" width={18} height={18} />
                    </div>
                    <div className="text-info-layouts">
                      <p>Blog personalizado para a marca Coffeelover. Imagem com navegação interativa, posicione o ponteiro sobre a imagem e role para ver a página completa.</p>
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
                  <div className="text-header-form text-center">
                    <p>Transforme sua empresa em um</p>
                    <p><b>Case de sucesso!</b></p>
                    <p><span>Fale conosco!</span></p>
                    <p className="descricao-form">Preencha os campos do formulário e retornaremos o mais breve possível! Não divulgaremos suas informações e nem enviaremos spam.</p>
                  </div>
                  <div className="formRd-tema">
                    <div role="main" id="lp-layouts-2022-15a886408a58a9318dc4"></div>
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
        <Script type="text/javascript" src="https://d335luupugsy2.cloudfront.net/js/rdstation-forms/stable/rdstation-forms.min.js"></Script>
        <Script src="https://code.jquery.com/jquery-3.6.0.min.js"
          strategy="beforeInteractive" />
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js" 
          strategy="beforeInteractive" />

        <Script id="show-banner" strategy="lazyOnload">
        {`
          if (window.RDStationForms) {
            new RDStationForms('lp-layouts-2022-15a886408a58a9318dc4', 'UA-48773259-1').createForm();
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

        `
        }
      </Script>

      <Script type="text/javascript" src="https://d335luupugsy2.cloudfront.net/js/rdstation-forms/stable/rdstation-forms.min.js"></Script>
<noscript dangerouslySetInnerHTML={{ __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KCTM4JN"
height="0" width="0" style="display:none;visibility:hidden"></iframe>`}}></noscript>

      </div>

    </>

  )
}
