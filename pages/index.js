import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Headerhome from '../components/Headerhome'
import HeaderMob from '../components/HeaderMob'
import Footergeral from '../components/Footergeral'
import NewsletterNz from '../components/NewsletterNz'
import CarrosselCases from '../components/CarrosselCases'
import Script from 'next/script'

const urlHome = () => {
  document.location.href = '/';
}

const urlQuemSomos = () => {
  document.location.href = '/quem-somos';
}

const urlServicos = () => {
  document.location.href = '/servicos';
}

const urlServicosWebsites = () => {
  document.location.href = '/servicos#websites';
}

const urlServicosMidias = () => {
  document.location.href = '/servicos#midias';
}

const urlServicosInbound = () => {
  document.location.href = '/servicos#inbound';
}

const urlServicosSeo = () => {
  document.location.href = '/servicos#seo';
}

const urlCases = () => {
  document.location.href = '/cases';
}

const urlVagas = () => {
  document.location.href = '/vagas';
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Nairuz Agência de Marketing Digital e Tecnologia</title>
        <meta name="description" content="Descubra como a Agência de Marketing Digital e Tecnologia pode alavancar os resultados da sua empresa! Aproveite a oportunidade! Saiba mais agora!" />
        <meta property="og:image" content="https://nairuz.com.br/og-nairuz.png" />
				<meta property="og:image:type" content="image/png" />
				<meta property="og:image:width" content="600" />
				<meta property="og:image:height" content="400" />
        <meta property="og:description" content="Descubra como a Agência de Marketing Digital e Tecnologia pode alavancar os resultados da sua empresa! Aproveite a oportunidade! Saiba mais agora!" />
				<meta property="og:site_name" content="Nairuz Agência de Marketing Digital e Tecnologia" />
				<meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.png" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css" integrity="sha512-tS3S5qG0BlhnQROyJXvNjeEM4UpMXHrQfTGmbQ1gKmelCxlSEBUaxhRBj/EFTzpbP4RVSrpEikbmdJobCvhE3g==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.min.css" integrity="sha512-sMXtMNL1zRzolHYKEujM2AqCLUR9F2C4/05cdbxjjLSRvMQIciEPCQZo++nk7go3BtSuK9kfa/s+a4f4i5pLkw==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,300&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"></link>
      </Head>      

      <div className='page-home'>


      <Headerhome />
      <HeaderMob />

      <main>
      <section className="container-fluid" id="servicos-home">
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-12 col-md-5">
              <div className="desc-servicos mobcenter">
                <ul>
                  <li className="layout li-ativo">
                    <div className="left-li">
                      <h2 className="title-servicos">Nossos <span>Serviços</span></h2>
                      <div className="imgs-servicos-mobile mobileonly">
                        <div className="carrossel-servicos-mobile">
                          <Image src="/servico-layout-mob.png" alt="Layout para e-commerce" width={280} height={255} loading="lazy" />
                          <p>Layout para e-commerce</p>
                        </div>
                      </div>
                      <h3 className="sub-servicos">Layout para e-commerce</h3>
                      <p className="text-servicos">
                      Como oferecer a melhor experiência para os clientes que entram em sua loja online? Um layout para e-commerce original traz diversos benefícios para o seu negócio, já que a credibilidade da sua marca depende de um visual que passe confiança. Os projetos da Nairuz não só ganham destaque no mercado por conta da sua originalidade, como também são pensados especialmente para a persona da sua marca. Afinal, a experiência deles dentro do seu site é um dos grandes fatores que influencia a venda.
                      </p>
                      <div className="buttons-servicos">
                        <span onClick={urlServicos}><button id="detalhes-servicos">Ver Detalhes</button></span>
                        <button id="contratar-servicos" className="open-popup-contato">Quero Contratar!</button>
                      </div>
                    </div>
                  </li>
                  <li className="website">
                    <div className="left-li">
                      <p className="title-servicos">Nossos <span>Serviços</span></p>
                      <h3 className="sub-servicos">Websites</h3>
                      <p className="text-servicos">
                        Desenvolvemos web sites, one pages, landing pages, implementação e desenvolvimento de layout para e-commerce. Somos apaixonados por usabilidade e nossos projetos são todos personalizados, pautados nas boas práticas de User Interface - UI e User Experience - UX com foco nos resultados. Além disso, trabalhamos com as mais recentes tecnologias do mercado.
                      </p>
                      <div className="buttons-servicos">
                        <span onClick={urlServicosWebsites}><button id="detalhes-servicos-website">Ver Detalhes</button></span>
                        <button id="contratar-servicos-website" className="open-popup-contato">Quero Contratar!</button>
                      </div>
                    </div>
                  </li>
                  <li className="midias-pagas">
                    <div className="left-li">
                      <p className="title-servicos">Nossos <span>Serviços</span></p>
                      <h3 className="sub-servicos">Mídias Pagas</h3>
                      <p className="text-servicos">
                      As mídias pagas são as formas de comunicação entre a sua marca e os seus clientes onde ocorre um investimento financeiro para o alcance das metas. Através de estratégias organizadas pelo nosso time de analistas, os seus anúncios trazem os resultados que você almeja, seja mais engajamento com os seus conteúdos, mais seguidores , oportunidades e, finalmente, mais conversões.
                      </p>
                      <div className="buttons-servicos">
                        <span onClick={urlServicosMidias}><button id="detalhes-servicos-midias">Ver Detalhes</button></span>
                        <button id="contratar-servicos-midias" className="open-popup-contato">Quero Contratar!</button>
                      </div>
                    </div>
                  </li>
                  <li className="inbound">
                    <div className="left-li">
                      <p className="title-servicos">Nossos <span>Serviços</span></p>
                      <h3 className="sub-servicos">Inbound Marketing</h3>
                      <p className="text-servicos">
                        O Inbound Marketing, também conhecido como Marketing de Atração, é uma metodologia de marketing digital totalmente focada na conversão dos visitantes do seu negócio em clientes ativos, conduzindo-os pela jornada de compra de forma automatizada.
                      </p>
                      <div className="buttons-servicos">
                        <span onClick={urlServicosInbound}><button id="detalhes-servicos-inbound">Ver Detalhes</button></span>
                        <button id="contratar-servicos-inbound" className="open-popup-contato">Quero Contratar!</button>
                      </div>
                    </div>
                  </li>
                  <li className="seo">
                    <div className="left-li">
                      <p className="title-servicos">Nossos <span>Serviços</span></p>
                      <h3 className="sub-servicos">SEO</h3>
                      <p className="text-servicos">
                        Nossa equipe irá fazer análises de seu site, de concorrentes e palavras-chave. Assim, através de otimizações, produção de conteúdos relevantes e link building, seu site apresentará crescimento organicamente.
                      </p>
                      <div className="buttons-servicos">
                        <span onClick={urlServicosSeo}><button id="detalhes-servicos-seo">Ver Detalhes</button></span>
                        <button id="contratar-servicos-seo" className="open-popup-contato">Quero Contratar!</button>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-md-7 desktoponly">
              <div className="nav-servicos">
                <nav>
                  <ul>
                    <li>
                      <div className="img-li ativo">
                        <Image src="/novaident/hectar.png" alt="Layout para e-commerce" width={245} height={344} loading="lazy" />
                      </div>
                      <button id="layout" className="layout ativo">Layout para e-commerce</button>
                    </li>
                    <li>
                      <div className="img-li">
                        <Image src="/novaident/fundowebsite.png" alt="Websites" width={245} height={344} />
                      </div>
                      <button id="website" className="website">Websites</button>
                    </li>
                    <li>
                      <div className="img-li">
                        <Image src="/novaident/fundomidiaspagas.png" alt="Mídias Pagas" width={245} height={344}  />
                      </div>
                      <button id="midias-pagas" className="midias">Mídias Pagas</button>
                    </li>
                    <li>
                      <div className="img-li">
                        <Image src="/novaident/fundomarketing.png" alt="Inbound Marketing" width={245} height={344} />
                      </div>
                      <button id="inbound" className="inbound">Inbound Marketing</button>
                    </li>
                    <li>
                      <div className="img-li">
                        <Image src="/novaident/fundoseo.png" alt="SEO" width={245} height={344} />
                      </div>
                      <button id="seo" className="seo">SEO</button>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container-fluid" id="clientes-home">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-5">
              <div className="text-clientes mobcenter">
                <div className="title-clientes">
                  <p>NOSSOS <span>CLIENTES</span></p>
                </div>
                <div className="subtitle-clientes">
                  <p>Crescimento mútuo<br></br> e contínuo</p>
                </div>
                <div className="desc-clientes">
                  <p>Veja alguns dos projetos que fazem parte da história<br></br> da Nairuz, permitindo um crescimento recíproco,<br></br> cumprimento de metas e grandes experiências.</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-7">
              <div className="logos-clientes ps-5">
                <ul className="d-flex align-items-center row1-logos mb-5">
                  <li><Image src="/clientes/bialetti.png" alt="BialettiShop" width={116} height={55} loading="eager" /></li>
                  <li><Image src="/clientes/gaggia.png" alt="Gaggia" width={116} height={55} loading="eager" /></li>
                  <li><Image src="/clientes/imeltron.png" alt="Imeltron" width={116} height={55} loading="eager" /></li>
                  <li><Image src="/clientes/lvstore.png" alt="LV Store" width={116} height={55} loading="eager" /></li>
                  <li><Image src="/clientes/gptw.svg" alt="GPTW" width={116} height={55} loading="eager" /></li>
                </ul>
                <ul className="d-flex align-items-center row2-logos mb-5">
                  <li><Image src="/clientes/samsung.png" alt="Samsung CTDI" width={116} height={55} loading="eager" /></li>
                  <li><Image src="/clientes/docol.svg" alt="Docol" width={116} height={55} loading="eager" /></li>
                  <li><Image src="/clientes/pedigree.png" alt="Pedigree" width={116} height={55} loading="eager" /></li>
                  <li><Image src="/clientes/minassal.png" alt="Minassal" width={116} height={55} loading="eager" /></li>
                  <li><Image src="/clientes/cybelar.png" alt="Cybelar" width={116} height={55} loading="eager" /></li>
                </ul>
                <ul className="d-flex align-items-center row3-logos mb-5">
                  {/* <li><Image src="/clientes/gptw.svg" alt="GPTW" width={116} height={55} /></li> */}
                  <li><Image src="/clientes/logo-farma-delivery.png" alt="Farma Delivery" width={110} height={35} /></li>
                  <li><Image src="/clientes/grupo-card.png" alt="Grupo Card" width={116} height={55} /></li>
                  <li><Image src="/clientes/azul.png" alt="Azul" width={116} height={55} /></li>
                  <li><Image src="/clientes/sempreviva.png" alt="Sempre Viva" width={116} height={55} /></li>
                  <li><Image src="/clientes/novamed.png" alt="Nova Medicamentos" width={116} height={55} /></li>
                </ul>
                <ul className="d-flex align-items-center row4-logos">
                  <li><Image src="/clientes/rcrio.png" alt="R-Crio" width={116} height={55} /></li>
                  <li><Image src="/clientes/athletic.svg" alt="Athletic Store" width={116} height={55} /></li>
                  <li><Image src="/clientes/udiaco.png" alt="Udiaço" width={116} height={55} /></li>
                  <li><Image src="/clientes/maravilhas.png" alt="Maravilhas do Lar" width={116} height={55} /></li>
                  <li><Image src="/clientes/covabra.png" alt="Covabra" width={116} height={55} /></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container-fluid" id="cases-home">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6">
              <div className="text-cases-home mobcenter">
                <div className="title-cases-home">
                  <p>CASES <span>DE SUCESSO</span></p>
                </div>
                <div className="desc-cases">
                  <p>Através de estratégias personalizadas, atingimos<br></br> números e objetivos acima do esperado, listamos<br></br> abaixo alguns de nossos cases de sucesso. Que tal<br></br> ser o próximo?</p>
                </div>
                <div className="buttons-cases">
                  <button onClick={urlCases} className="ver-cases">Ver Cases</button>
                  <button className="ser-case open-popup-contato">Quero ser um case de sucesso</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <CarrosselCases />
      <section className="container-fluid" id="bg-clientes-parcerias">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="clientes-nairuz">
                <div className="title-clientes">
                  <h4>O que nossos <br></br>clientes dizem?</h4>
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
                      <Image src="/marcos.png" alt="Marcos" width={96} height={96} />
                    </div>
                    <div className="coment-cliente">
                      <p>Fiquei muito satisfeito com o nosso projeto, superaram nossas expectativas. Do projeto ao Go-live estiveram presentes em todas etapas. E estão conosco até hoje, mantendo a evolução contínua.</p>
                    </div>
                    <div className="assinatura-cliente">
                      <p className="nome-cliente">Marcos Tomazi</p>
                      <p>Casa São Pedro</p>
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
          <div className="row">
            <div className="col-12">
              <div className="title-parcerias">
                <h4>Parcerias e <span>Certificações</span></h4>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="parcerias-certificacoes">
                <div className="parcerias">
                  <ul className="d-flex align-items-center mb-4">
                    <li><Image src="/parcerias/uol.png" alt="Uol" width={105} height={49} /></li>
                    <li><Image src="/parcerias/biz.png" alt="BizCommerce" width={105} height={49} /></li>
                    <li><Image src="/parcerias/bis2bis.png" alt="Bis2Bis" width={105} height={49} /></li>
                    <li><Image src="/parcerias/linx.png" alt="Linx Commerce" width={105} height={49} /></li>
                    <li><Image src="/novaident/parcerias/PluggTo-Original-Logo-Green.svg" alt="pluggto" width={105} height={49} /></li>
                    <li><Image src="/parcerias/mage.png" alt="Mageshop" width={105} height={49} /></li>
                    <li><Image src="/parcerias/vindi.png" alt="Vindi" width={105} height={49} /></li>
                    <li><Image src="/novaident/parcerias/Nuvemshop-logo.svg" alt="NuvemShop" width={105} height={49} /></li>
                  </ul>
                  <ul className="d-flex align-items-center mb-4">
                    <li><Image src="/parcerias/amazon.png" alt="Amazon" width={105} height={49} /></li>
                    <li><Image src="/novaident/parcerias/mercado-pago-logo.svg" alt="MercadoPago" width={105} height={49} /></li>
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
                    <li><Image src="/novaident/parcerias/google-partner-logo.svg" alt="Google Partner" width={99} height={97} /></li>
                    <li><Image src="/parcerias/rdplatinum22.png" alt="RD Platinum" width={105} height={49} /></li>
                    <li><Image src="/parcerias/ecommerce.png" alt="E-commerce Ouro" width={105} height={49} /></li>
                    <li><Image src="/parcerias/hubacademy.png" alt="HubSport Academy" width={105} height={49} /></li>
                    <li><Image src="/novaident/parcerias/shopify-partners.svg" alt="Magento" width={105} height={49} /></li>
                    <li><Image src="/novaident/parcerias/linx-commerce-selo.svg" alt="Linx Partners" width={105} height={49} /></li>
                    <li><Image src="/parcerias/vtexpartner.png" alt="vTex" width={105} height={49} /></li>
                    <li><Image src="/novaident/parcerias/nuvempartners-selo-platinum.svg" alt="Nuvem Partners" width={105} height={49} /></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container-fluid" id="blog-materiais">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6">
              <div className="blog-home">
                <div className="title-cases-home">
                  <p>ÚLTIMAS DO <span>BLOG</span></p>
                </div>
                <div className="cards-blog">
                  <div className="post-blog">
                    <div className="img-post">
                      <Image src="/post1-blog.png" alt="Post Blog" width={290} height={182} />
                    </div>
                    <div className="medium-blog">
                      <div className="title-post">
                        <h5>Campanhas sazonais: Entenda a importância dessa...</h5>
                      </div>
                      <div className="content-post">
                        <p>Quem trabalha com marketing, ou mesmo na área de vendas e planejamentos, já sabe...</p>
                      </div>
                      <div className="footer-post">
                        <div className="autor-data-post">
                          <p>12.04.2022</p>
                          <p>Thaiane Pinha</p>
                        </div>
                        <div className="button-post">
                          <a href="https://blog.nairuz.com.br/conteudos-para-as-midias-sociais/" target="_blank" rel="noopener noreferrer"><Image src="/novaident/setinha-direita.svg" alt="Ver Post" width={35} height={35} /></a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="post-blog">
                    <div className="img-post">
                      <Image src="/post2-blog.png" alt="Post Blog" width={290} height={182} />
                    </div>
                    <div className="medium-blog">
                      <div className="title-post">
                        <h5>Help suporte Nairuz: Conheça nossa solução para o seu...</h5>
                      </div>
                      <div className="content-post">
                        <p>Assim como muitos donos de e-commerce, você deve estar em busca de uma forma...</p>
                      </div>
                      <div className="footer-post">
                        <div className="autor-data-post">
                          <p>05.04.2022</p>
                          <p>Marina Norato</p>
                        </div>
                        <div className="button-post">
                          <a href="https://blog.nairuz.com.br/tik-tok/" target="_blank" rel="noopener noreferrer"><Image src="/novaident/setinha-direita.svg" alt="Ver Post" width={35} height={35} /></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="vermais-blog">
                  <a href="https://blog.nairuz.com.br" target="_blank" rel="noopener noreferrer">Ver mais no blog</a>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="materiais-home">
                <div className="title-cases-home">
                  <p>ÚLTIMOS <span>MATERIAIS RICOS</span></p>
                </div>
                <div className="text-materiais">
                  <p>São guias completos sobre os principais assuntos<br></br> relacionados ao Marketing Digital. Conteúdos que irão<br></br> auxiliar você, empreendedor, a ter melhores resultados.<br></br> E o melhor, é tudo DE GRAÇA.</p>
                </div>
                <div className="cards-ricos">
                  <div className="post-rico">
                    <div className="title-rico">
                      <h5>UX Design: qual a importância para seu e-commerce</h5>
                    </div>
                    <div className="content-rico">
                      <p>Com o passar dos anos, a evolução da tecnologia e da rotina das pessoas fez com que as vendas online crescessem cada vez mais Assim, a maior competitividade também faz com que…</p>
                    </div>
                    <div className="footer-rico">
                      <div className="autor-data-rico">
                        <p>08/06/2021</p>
                        <p>121 downloads</p>
                      </div>
                      <div className="button-rico d-none">
                        <a href="https://blog.nairuz.com.br/ux-design-qual-a-importancia-para-seu-e-commerce/" target="_blank" rel="noopener noreferrer"><Image src="/icon-arrow-blog-2.svg" alt="Ver Post" width={35} height={35} /></a>
                      </div>
                    </div>
                  </div>
                  <div className="post-rico">
                    <div className="title-rico">
                      <h5>Nova identidade: conheça mais sobre o layout para o site da Infocards!</h5>
                    </div>
                    <div className="content-rico">
                      <p>Há mais de 20 anos, a Infocards vem atuando na área de gestão de cartões de crédito private label – cartões de loja. Dessa forma, tornando possível as compras de muitos brasileiros.</p>
                    </div>
                    <div className="footer-rico">
                      <div className="autor-data-rico">
                        <p>07/04/2021</p>
                        <p>096 downloads</p>
                      </div>
                      <div className="button-rico d-none">
                        <a href="https://blog.nairuz.com.br/layout-para-o-site-da-infocards/" target="_blank" rel="noopener noreferrer"><Image src="/icon-arrow-blog-2.svg" alt="Ver Post" width={35} height={35} /></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <NewsletterNz />
      </main>

      <Footergeral />
    </div>
    </>

  )
}
