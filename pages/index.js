import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Headerhome from '../components/Headerhome'
import HeaderMob from '../components/HeaderMob'
import Footergeral from '../components/Footergeral'
import NewsletterNz from '../components/NewsletterNz'
import CarrosselCases from '../components/CarrosselCases'

export default function Home() {
  return (
    <div className='page-home'>
      <Head>
        <title>Nairuz</title>
        <meta name="description" content="Nairuz Digital e Consultoria" />
        <link rel="icon" href="/favicon.png" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css" integrity="sha512-tS3S5qG0BlhnQROyJXvNjeEM4UpMXHrQfTGmbQ1gKmelCxlSEBUaxhRBj/EFTzpbP4RVSrpEikbmdJobCvhE3g==" crossOrigin="anonymous" referrerpolicy="no-referrer" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.min.css" integrity="sha512-sMXtMNL1zRzolHYKEujM2AqCLUR9F2C4/05cdbxjjLSRvMQIciEPCQZo++nk7go3BtSuK9kfa/s+a4f4i5pLkw==" crossOrigin="anonymous" referrerpolicy="no-referrer" />
        <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script>
      </Head>

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
                      <p className="title-servicos">Nossos <span>Serviços</span></p>
                      <div className="imgs-servicos-mobile mobileonly">
                        <div className="carrossel-servicos-mobile">
                          <Image src="/servico-layout-mob.png" alt="Layout para e-commerce" width={280} height={255} />
                          <p>Layout para e-commerce</p>
                        </div>
                      </div>
                      <h3 className="sub-servicos">Layout para e-commerce</h3>
                      <p className="text-servicos">
                        Desenvolvemos web sites, one pages, landing pages, implementação e desenvolvimento de layout para e-commerce. Somos apaixonados por usabilidade e nossos projetos são todos personalizados, pautados nas boas práticas de User Interface - UI e User Experience - UX com foco nos resultados. Além disso, trabalhamos com as mais recentes tecnologias do mercado.
                      </p>
                      <div className="buttons-servicos">
                        <button id="detalhes-servicos">Ver Detalhes</button>
                        <button id="contratar-servicos">Quero Contratar!</button>
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
                        <button id="detalhes-servicos">Ver Detalhes</button>
                        <button id="contratar-servicos">Quero Contratar!</button>
                      </div>
                    </div>
                  </li>
                  <li className="midias-pagas">
                    <div className="left-li">
                      <p className="title-servicos">Nossos <span>Serviços</span></p>
                      <h3 className="sub-servicos">Mídias Pagas</h3>
                      <p className="text-servicos">
                        As mídias sociais também são responsáveis por atrair clientes e, por este motivo, é fundamental estar conectado em redes sociais relevantes para seu nicho de atuação com foco no gerenciamento, vendas, relacionamento e monitoramento de sua empresa.
                      </p>
                      <div className="buttons-servicos">
                        <button id="detalhes-servicos">Ver Detalhes</button>
                        <button id="contratar-servicos">Quero Contratar!</button>
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
                        <button id="detalhes-servicos">Ver Detalhes</button>
                        <button id="contratar-servicos">Quero Contratar!</button>
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
                        <button id="detalhes-servicos">Ver Detalhes</button>
                        <button id="contratar-servicos">Quero Contratar!</button>
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
                        <Image src="/layout.png" alt="Layout para e-commerce" width={247} height={349} />
                      </div>
                      <button id="layout" className="layout ativo">Layout para e-commerce</button>
                    </li>
                    <li>
                      <div className="img-li">
                        <Image src="/websites.png" alt="Websites" width={247} height={349} />
                      </div>
                      <button id="website" className="website">Websites</button>
                    </li>
                    <li>
                      <div className="img-li">
                        <Image src="/midias-pagas.png" alt="Mídias Pagas" width={247} height={349} />
                      </div>
                      <button id="midias-pagas" className="midias">Mídias Pagas</button>
                    </li>
                    <li>
                      <div className="img-li">
                        <Image src="/inbound.png" alt="Inbound Marketing" width={247} height={349} />
                      </div>
                      <button id="inbound" className="inbound">Inbound Marketing</button>
                    </li>
                    <li>
                      <div className="img-li">
                        <Image src="/seo.png" alt="SEO" width={247} height={349} />
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
            <div className="col-12 col-md-4">
              <div className="text-clientes mobcenter">
                <div className="title-clientes">
                  <p>NOSSOS <span>CLIENTES</span></p>
                </div>
                <div className="subtitle-clientes">
                  <p>Crescimento mútuo e contínuo</p>
                </div>
                <div className="desc-clientes">
                  <p>Veja alguns dos projetos que fazem parte da história da Nairuz, permitindo um crescimento recíproco, cumprimento de metas e grandes experiências.</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-8">
              <div className="logos-clientes ps-5">
                <ul className="d-flex align-items-center row1-logos mb-5">
                  <li><Image src="/clientes/bialetti.png" width={116} height={55} /></li>
                  <li><Image src="/clientes/gaggia.png" width={116} height={55} /></li>
                  <li><Image src="/clientes/imeltron.png" width={116} height={55} /></li>
                  <li><Image src="/clientes/lvstore.png" width={116} height={55} /></li>
                  <li><Image src="/clientes/maquiadoro.png" width={116} height={55} /></li>
                </ul>
                <ul className="d-flex align-items-center row2-logos mb-5">
                  <li><Image src="/clientes/samsung.png" width={116} height={55} /></li>
                  <li><Image src="/clientes/widestock.png" width={116} height={55} /></li>
                  <li><Image src="/clientes/pedigree.png" width={116} height={55} /></li>
                  <li><Image src="/clientes/minassal.png" width={116} height={55} /></li>
                  <li><Image src="/clientes/cybelar.png" width={116} height={55} /></li>
                </ul>
                <ul className="d-flex align-items-center row3-logos mb-5">
                  <li><Image src="/clientes/candy.png" width={116} height={55} /></li>
                  <li><Image src="/clientes/hepta.png" width={116} height={55} /></li>
                  <li><Image src="/clientes/rpm.png" width={116} height={55} /></li>
                  <li><Image src="/clientes/sempreviva.png" width={116} height={55} /></li>
                  <li><Image src="/clientes/novamed.png" width={116} height={55} /></li>
                </ul>
                <ul className="d-flex align-items-center row4-logos">
                  <li><Image src="/clientes/rcrio.png" width={116} height={55} /></li>
                  <li><Image src="/clientes/ludka.png" width={116} height={55} /></li>
                  <li><Image src="/clientes/udiaco.png" width={116} height={55} /></li>
                  <li><Image src="/clientes/chrisburguer.png" width={116} height={55} /></li>
                  <li><Image src="/clientes/covabra.png" width={116} height={55} /></li>
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
                  <p>Através de estratégias personalizadas, atingimos números e objetivos acima do esperado, listamos abaixo alguns de nossos cases de sucesso. Que tal ser o próximo?</p>
                </div>
                <div className="buttons-cases">
                  <a href="#" className="ver-cases">Ver Cases</a>
                  <a href="#" className="ser-case">Quero ser um case de sucesso</a>
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
                  <h4>O que nossos clientes dizem?</h4>
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
                      <p>Fiquei muito feliz ao ver o resultado final do projeto e também todo o caminho para chegarmos nele. Todas as solicitações e dúvidas foram atendidas de prontidão e da melhor forma possível.</p>
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
                      <p>A Nairuz está com a Ludka desde a criação e concepção da nossa marca. Estamos construindo juntos o nosso futuro. Ainda temos muitos passos pela frente, rumo ao nosso sucesso!</p>
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
                      <p>Os projetos superaram todas as expectativas, conseguindo “transmitir” requinte e sofisticação para o nosso público. A performance das lojas também estão acima das expectativas.</p>
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
                      <Image src="/post1-blog.png" alt="Post Blog" width={290} height={135} />
                    </div>
                    <div className="medium-blog">
                      <div className="title-post">
                        <h6>COMO PREPARAR SUA LOJA ONLINE PARA AS AÇÕES DE BLACK FRIDAY 2021</h6>
                      </div>
                      <div className="content-post">
                        <p>Há pouco mais de dez anos, as lojas brasileiras se organizam para a chegada da Black Friday no mês de...</p>
                      </div>
                      <div className="footer-post">
                        <div className="autor-data-post">
                          <p>26.10.2021</p>
                          <p>Marina Norato</p>
                        </div>
                        <div className="button-post">
                          <Image src="/icon-arrow-blog-1.svg" alt="Ver Post" width={35} height={35} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="post-blog">
                    <div className="img-post">
                      <Image src="/post2-blog.png" alt="Post Blog" width={290} height={135} />
                    </div>
                    <div className="medium-blog">
                      <div className="title-post">
                        <h6>COMO PREPARAR SUA LOJA ONLINE PARA AS AÇÕES DE BLACK FRIDAY 2021</h6>
                      </div>
                      <div className="content-post">
                        <p>Há pouco mais de dez anos, as lojas brasileiras se organizam para a chegada da Black Friday no mês de...</p>
                      </div>
                      <div className="footer-post">
                        <div className="autor-data-post">
                          <p>26.10.2021</p>
                          <p>Marina Norato</p>
                        </div>
                        <div className="button-post">
                          <Image src="/icon-arrow-blog-1.svg" alt="Ver Post" width={35} height={35} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="vermais-blog">
                  <Link href="/"><a href="#">Ver mais no Blog</a></Link>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="materiais-home">
                <div className="title-cases-home">
                  <p>ÚLTIMOS <span>MATERIAIS RICOS</span></p>
                </div>
                <div className="text-materiais">
                  <p>São guias completos sobre os principais assuntos relacionados ao Marketing Digital. Conteúdos que irão auxiliar você, empreendedor, a ter melhores resultados. E o melhor, é tudo DE GRAÇA.</p>
                </div>
                <div className="cards-ricos">
                  <div className="post-rico">
                    <div className="title-rico">
                      <h6>MANUAL DE OTIMIZAÇÃO DE PRODUTOS</h6>
                    </div>
                    <div className="content-rico">
                      <p>Nele você encontra tudo que precisa saber para cadastrar seus produtos corretamente, além de seguir as melhores práticas de SEO garantindo um melhor ranqueamento!</p>
                    </div>
                    <div className="footer-rico">
                      <div className="autor-data-rico">
                        <p>12/12/2021</p>
                        <p>356 downloads</p>
                      </div>
                      <div className="button-rico">
                        <Image src="/icon-arrow-blog-2.svg" alt="Ver Post" width={35} height={35} />
                      </div>
                    </div>
                  </div>
                  <div className="post-rico">
                    <div className="title-rico">
                      <h6>APRENDA COMO USAR O UX DESIGN PARA OTIMIZAR A INTERAÇÃO DA SUA LOJA</h6>
                    </div>
                    <div className="content-rico">
                      <p>Nele você encontra tudo que precisa saber para cadastrar seus produtos corretamente, além de seguir as melhores práticas de SEO garantindo um melhor ranqueamento!</p>
                    </div>
                    <div className="footer-rico">
                      <div className="autor-data-rico">
                        <p>06/05/2021</p>
                        <p>356 downloads</p>
                      </div>
                      <div className="button-rico">
                        <Image src="/icon-arrow-blog-2.svg" alt="Ver Post" width={35} height={35} />
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
  )
}
