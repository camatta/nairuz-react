import Head from 'next/head'
import Image from 'next/image'
import Headergeral from '../components/Headergeral'
import HeaderMob from '../components/HeaderMob'
import Footergeral from '../components/Footergeral'
import NewsletterNz from '../components/NewsletterNz'
import Script from 'next/script'


const rollServicos = () => {
  document.location.href = '#apresentacao-performance';
}

const rollOrcamento = () => {
  document.location.href = '#junte-se';
}

const urlHome = () => {
  document.location.href = '/';
}

const rollQuemSomos = () => {
  document.location.href = '#oque-fazemos';
}

const rollComoAtuamos = () => {
  document.location.href = '#como-atuamos';
}

const rollCases = () => {
  document.location.href = '#cases-sucesso';
}

const rollParceirosCertificacoes = () => {
  document.location.href = '#certificacoes';
}

const rollMateriais = () => {
  document.location.href = '#materiaismkt';
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
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"></link>
      </Head>


      <Script id="gtm" dangerouslySetInnerHTML={{ __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KCTM4JN');`}}></Script>

      <div className="page-marketing pg-homologmark">

      <header className="container-fluid" id="header-geral">
  <div className="container">
        <div className="row d-flex align-items-center desktoponly">
          <div className="col-2">
            <div className="logo">
              <div onClick={urlHome}><Image src="/novaident/logonairuznovo.svg" alt="Logo Nairuz" width={129} height={27} /></div>
            </div>
          </div>
          <div className="col-6">
            <div className="menu">
              <nav>
                <ul>
                  <li className="ativo"><button onClick={urlHome}>Início</button></li>
                  <li><button onClick={rollQuemSomos}>O que fazemos</button></li>
                  <li><button onClick={rollComoAtuamos}>Como Atuamos</button></li>
                  <li><button onClick={rollCases}>Cases</button></li>
                  <li><button onClick={rollParceirosCertificacoes}>Parceiros e Certificações</button></li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="col-4 social-contato">
            <div className="contato">
              <button onClick={rollOrcamento} className="btn-fale">Fale Conosco</button>
              <button onClick={rollMateriais} className="btn-fale">Baixar Materiais</button>
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
              <div className="col-12 col-md-8">
                <div className="title-temas">
                  <h1>Marketing<br></br><span>Full <strong>Service</strong></span></h1>
                </div>
                <div className="texto-digital">
                  <p>Em busca de soluções integradas de marketing digital, que conectam marcas e consumidores com serviços personalizados, visando resultados efetivos, com aquele cuidado humano? Então está no lugar certo.</p>
                </div>
                <div className="button-fale">
                  <a className="falar-com" onClick={rollOrcamento}>Falar com um especialista</a>
                </div>
              </div>
              <div className="col-12 col-md-4">
                <div className="logonairuz">
                  <div className="fundo-borda"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="container-fluid" id="oque-fazemos">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-6">
                <div className="imagemquem">
                <Image src="/lpmarketing/quemsomossecao.png" width={635} height={675} />
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="descricao-quem">
                <p className="fazer">O que fazemos?</p>
                <h2>Transformamos oportunidades<br></br>em cases de sucesso!</h2>
                <p>Isso mesmo! Exploramos as possibildades de<br></br> aproximar marcas de seus públicos-alvo, utilizando<br></br>insights derivados de análise de dados, para assim<br></br>criar experiências digitais valiosas e impulsionar o <br></br>crescimentos das receitas. Como parceiros das<br></br>melhores empresas de soluções digitais, nossa<br></br>equipe diversificada de especialistas colabora com<br></br>nossos clientes para garantir acesso ao mercado<br></br>digital, oferencendo estratégias de marketing digital<br></br> de qualidade que alavancam as marcas rumo ao<br></br>sucesso.</p>
                <div className="button-especialista">
                  <a className="fale-com" onClick={rollOrcamento}>Falar com um especialista</a>
                </div>
                </div>
              </div>
            </div>
          </div>
        </section>
          <section className="container-fluid" id="como-atuamos">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="titulo-atuamos">
                    <h3>Como Atuamos</h3>
                    <p>Contamos com uma ampla variedade de soluções para alcançar resultados<br></br> surpreendentes com <strong>excelência e entregar serviços extremamente personalizados.</strong></p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                <div className="carrossel-atuacao owl-carousel owl-default">
                  <div className="box-accordion">
                    <div className="icone-topo">
                    <Image src="/lpmarketing/icon-trafegopago.svg" width={127} height={127} />
                    </div>
                    <div className="titulo-atuacao">
                      <h3>Tráfego Pago</h3>
                    </div>
                    <div className="texto-accordion">
                      <details>
										    <summary>Em multiplataformas</summary>
                          <p>Estratégias de anúncios pagos em diversas plataformas, bem como Google Ads, Meta Ads e LinkedIn Ads, para aumentar a visibilidade e atrair visitantes qualificados ao site.</p>
                          <div className="saibamais">
                            <a className="linkarea" onClick={rollOrcamento}>Saiba Mais</a>
                          </div>
									    </details>
                      <details>
										    <summary>Para E-commerces</summary>
                          <p>Campanhas publicitárias focadas em conversões, visando aumentar as vendas online por meio de anúncios segmentados em plataformas como Google Shopping e mídias sociais.</p>
                          <div className="saibamais">
                            <a className="linkarea" onClick={rollOrcamento}>Saiba Mais</a>
                          </div>
									    </details>
                      <details>
										    <summary>Captação de leads</summary>
                          <p>Utilização de anúncios pagos para coletar informações de contato de potenciais clientes, oferecendo conteúdos valiosos ou promoções em troca dos dados.</p>
                          <div className="saibamais">
                            <a className="linkarea" onClick={rollOrcamento}>Saiba Mais</a>
                          </div>
									    </details>
                      <details>
										    <summary>Reconhecimento de Marca</summary>
                          <p>Investimento em publicidade para aumentar a visibilidade e fortalecer a presença da marca no mercado, utilizando campanhas de alcance e engajamento nas mídias sociais e motores de busca.</p>
                          <div className="saibamais">
                            <a className="linkarea" onClick={rollOrcamento}>Saiba Mais</a>
                          </div>
									    </details>
                    </div>
                  </div>
                  <div className="box-accordion">
                    <div className="icone-topo">
                    <Image src="/lpmarketing/icon-inbound.svg" width={127} height={127} />
                    </div>
                    <div className="titulo-atuacao">
                      <h3>Inbound Marketing</h3>
                    </div>
                    <div className="texto-accordion">
                      <details>
										    <summary>Redação</summary>
                          <p>Criação de conteúdos persuasivos e personalizados para e-mails marketing e Landing Pages, visando atrair, engajar e converter leads, fortalecendo a autoridade da marca e impulsionando ações específicas.</p>
                          <div className="saibamais">
                            <a className="linkarea" onClick={rollOrcamento}>Saiba Mais</a>
                          </div>
									    </details>
                      <details>
										    <summary>Segmentação de leads</summary>
                          <p>Classificação dos leads com base em critérios específicos, como demografia, comportamento, interesses e outros, para personalizar as estratégias de marketing e melhorar a eficácia das campanhas.</p>
                          <div className="saibamais">
                            <a className="linkarea" onClick={rollOrcamento}>Saiba Mais</a>
                          </div>
									    </details>
                      <details>
										    <summary>Fluxos de nutrição</summary>
                          <p>Desenvolvimento de sequências automatizadas de comunicação, como e-mails e conteúdos personalizados, para guiar os leads ao longo da jornada de compra e aumentar as chances de conversão.</p>
                          <div className="saibamais">
                            <a className="linkarea" onClick={rollOrcamento}>Saiba Mais</a>
                          </div>
									    </details>
                    </div>
                  </div>
                  <div className="box-accordion">
                    <div className="icone-topo">
                    <Image src="/lpmarketing/icon-seo.svg" width={127} height={127} />
                    </div>
                    <div className="titulo-atuacao">
                      <h3>SEO</h3>
                    </div>
                    <div className="texto-accordion">
                      <details>
										    <summary>Redação</summary>
                          <p>Produção de conteúdos estruturados e otimizados com palavras-chave relevantes para melhorar o ranking nos motores de busca e gerar tráfego orgânico qualificado.</p>
                          <div className="saibamais">
                            <a className="linkarea" onClick={rollOrcamento}>Saiba Mais</a>
                          </div>
									    </details>
                      <details>
										    <summary>Link building</summary>
                         <p>Táticas para adquirir backlinks de qualidade de outros sites relevantes, aumentando a autoridade do domínio e melhorando a visibilidade nos motores de busca.</p>
                          <div className="saibamais">
                            <a className="linkarea" onClick={rollOrcamento}>Saiba Mais</a>
                          </div>
									    </details>
                      <details>
										    <summary>Otimização On-page</summary>
                          <p>Ajustes técnicos e de conteúdo dentro das páginas do site, incluindo meta tags, cabeçalhos e estrutura de URL, para melhorar a indexação e a relevância nos motores de busca.</p>
                          <div className="saibamais">
                            <a className="linkarea" onClick={rollOrcamento}>Saiba Mais</a>
                          </div>
									    </details>
                    </div>
                  </div>
                  <div className="box-accordion">
                    <div className="icone-topo">
                    <Image src="/lpmarketing/icon-design.svg" width={127} height={127} />
                    </div>
                    <div className="titulo-atuacao">
                      <h3>Design</h3>
                    </div>
                    <div className="texto-accordion">
                      <details>
										    <summary>Design publicitário</summary>
										      <p>Criação de peças visuais impactantes e atraentes para campanhas publicitárias, incluindo banners, anúncios digitais e impressos e vídeos que capturam a atenção e promovem produtos e/ou serviços.</p>
                          <div className="saibamais">
                            <a className="linkarea" onClick={rollOrcamento}>Saiba Mais</a>
                          </div>
									    </details>
                      <details>
										    <summary>Design UX/UI</summary>
                          <p>Desenvolvimento de interfaces visualmente atraentes, intuitivas e agradáveis para sites e plataformas, focando na usabilidade, acessibilidade e eficiência dos sites e aplicativos para melhorar a satisfação do usuário.</p>
                          <div className="saibamais">
                            <a className="linkarea" onClick={rollOrcamento}>Saiba Mais</a>
                          </div>
									    </details>
                      <details>
										    <summary>Marca e Identidade</summary>
                          <p>Construção e manutenção da identidade visual de uma marca, incluindo logotipos, paletas de cores, tipografia e outros elementos gráficos, para garantir uma presença única que ressoa com os consumidores, aumentando a lembrança e a preferência.</p>
                          <div className="saibamais">
                            <a className="linkarea" onClick={rollOrcamento}>Saiba Mais</a>
                          </div>
									    </details>
                    </div>
                  </div>
                  <div className="box-accordion">
                    <div className="icone-topo">
                    <Image src="/lpmarketing/icon-performance.svg" width={127} height={127} />
                    </div>
                    <div className="titulo-atuacao">
                      <h3>Performance</h3>
                    </div>
                    <div className="texto-accordion">
                      <details>
										    <summary>Web Analytics</summary>
										      <p>Coleta, análise e interpretação de dados de navegação para entender o comportamento dos usuários em um site, identificar tendências e tomar decisões informadas.</p>
                          <div className="saibamais">
                            <a className="linkarea" onClick={rollOrcamento}>Saiba Mais</a>
                          </div>
									    </details>
                      <details>
										    <summary>Desk research</summary>
                          <p>Pesquisa em busca de dados, tendências de mercado e sazonalidade para obter insights, apoiar decisões estratégicas e investir em oportunidades.</p>
                          <div className="saibamais">
                            <a className="linkarea" onClick={rollOrcamento}>Saiba Mais</a>
                          </div>
									    </details>
                      <details>
										    <summary>Costumer Success</summary>
                          <p>Especialistas focados em garantir, de perto, que nossos clientes alcancem seus objetivos e tenham uma experiência positiva na busca por seus resultados, de forma personalizada.</p>
                          <div className="saibamais">
                            <a className="linkarea" onClick={rollOrcamento}>Saiba Mais</a>
                          </div>
									    </details>
                    </div>
                  </div>
                </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                <div className="button-especialista">
                    <a className="fale-com" onClick={rollOrcamento}>Falar com um especialista</a>
                  </div>
                </div>
              </div>
            </div>
          </section>

        <section className="container-fluid" id="cases-sucesso">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="titulo-cases">
                    <h3>Cases de Sucesso</h3>
                    <p>Conheça nossos cases de sucesso e veja como a Nairuz <strong>impulsionou diversos negócios online,</strong><br></br> ao passo que descobre por que nossas estratégias e resultados conquistaram nossos clientes.</p>
                  </div>
                </div>
              </div>
              <div className="row">
              <div className="col-12 col-md-3">
                <div className="box-cases athletic">
                <div className="conteudo-cases primeiro">
                  <div className="box-primeiro">
                    <div className="logo-cases">
                      <Image src="/lpmarketing/logo-athletic-cases.png" width={166} height={37} />
                    </div>
                  </div>
                  </div>
                  <div className="conteudo-cases segundo">
                  <div className="box-segundo">
                      <div className="logo-cases">
                        <Image src="/lpmarketing/logo-athletic-cases.png" width={166} height={37} />
                      </div>
                      <div className="conteudo-secao">
                        <ul>
                          <li>• Crescimento de <strong>105,41%</strong></li>
                          <li>• Aumento de <strong>221%</strong> no tráfego do site</li>
                          <li>• Resultados em <strong>1 ano</strong> de parceria</li>
                        </ul>
                      </div>
                    </div>
                    </div>
                  <div className="button-resultados">
                    <p>Ver resultados</p>
                  </div>
                </div>
              </div>
                <div className="col-12 col-md-3">
                  <div className="box-cases nova-med">
                  <div class="conteudo-cases primeiro">
                    <div className="box-primeiro">
                      <div className="logo-cases">
                        <Image src="/lpmarketing/logo-nova-medica-cases.png" width={141} height={48} />
                      </div>
                    </div>
                    </div>
                    <div className="conteudo-cases segundo">
                    <div className="box-segundo">
                      <div className="logo-cases">
                        <Image src="/lpmarketing/logo-nova-medica-cases.png" width={141} height={48} />
                      </div>
                      <div className="conteudo-secao">
                        <ul>
                          <li>• Aumento de <strong>139%</strong> no tráfego orgânico.</li>
                          <li>• <strong>63%</strong> em faturamento orgânico.</li>
                          <li>• <strong>75%</strong> das palavras-chave na primeira posição do Google.</li>
                        </ul>
                      </div>
                    </div>
                    </div>
                    <div className="button-resultados">
                      <p>Ver resultados</p>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-3">
                  <div className="box-cases covabra">
                  <div className="conteudo-cases primeiro">
                    <div className="box-primeiro">
                      <div className="logo-cases">
                        <Image src="/lpmarketing/logo-covabra-cases.png" width={147} height={52} />
                      </div>
                    </div>
                    </div>
                    <div className="conteudo-cases segundo">
                    <div className="box-segundo">
                      <div className="logo-cases">
                        <Image src="/lpmarketing/logo-covabra-cases.png" width={147} height={52} />
                      </div>
                      <div className="conteudo-secao">
                        <ul>
                          <li>• Crescimento de <strong>92%</strong> no faturamento.</li>
                          <li>• Aumento de <strong>127%</strong> nas visitas orgânicas no site.</li>
                          <li>• ROAS maior que <strong>1.100%.</strong></li>
                        </ul>
                      </div>
                    </div>
                    </div>
                    <div className="button-resultados">
                      <p>Ver resultados</p>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-3">
                  <div className="box-cases transpalet">
                    <div className="conteudo-cases primeiro">
                    <div className="box-primeiro">
                      <div className="logo-cases">
                        <Image src="/lpmarketing/logo-transpalet-cases.png" width={104} height={89} />
                      </div>
                    </div>
                    </div>
                    <div className="conteudo-cases segundo">
                    <div className="box-segundo">
                      <div className="logo-cases">
                        <Image src="/lpmarketing/logo-transpalet-cases.png" width={104} height={89} />
                      </div>
                      <div className="conteudo-secao">
                        <ul>
                          <li>• Crescimento de <strong>92%</strong> no faturamento.</li>
                          <li>• Aumento de <strong>127%</strong> nas visitas orgânicas no site.</li>
                          <li>• ROAS maior que <strong>1.100%.</strong></li>
                        </ul>
                      </div>
                    </div>
                    </div>
                    <div className="button-resultados">
                      <p>Ver resultados</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </section>

        <section className="container-fluid" id="carrossel-clientes">
          <div className="container">
            <div className="row">
            <div className="col-12">
                <div className="carrossel-nairuzclientes owl-carousel owl-default">
                  <div className="imagem-cliente">
                    <Image src="/lpmarketing/logoclientes/logo-azul.png" width={162} height={76} />
                  </div>
                  <div className="imagem-cliente">
                    <Image src="/lpmarketing/logoclientes/logo-clark.png" width={162} height={76} />
                  </div>
                  <div className="imagem-cliente">
                    <Image src="/lpmarketing/logoclientes/logo-cybelar.png" width={162} height={76} />
                  </div>
                  <div className="imagem-cliente">
                    <Image src="/lpmarketing/logoclientes/logo-farmelhor.png" width={162} height={76} />
                  </div>
                  <div className="imagem-cliente">
                    <Image src="/lpmarketing/logoclientes/docol-logo.png" width={162} height={76} />
                  </div>
                  <div className="imagem-cliente">
                    <Image src="/lpmarketing/logoclientes/logo-grupocard.png" width={162} height={76} />
                  </div>
                  <div className="imagem-cliente">
                    <Image src="/lpmarketing/logoclientes/logo-farma.png" width={162} height={76} />
                  </div>
                  <div className="imagem-cliente">
                    <Image src="/lpmarketing/logoclientes/logo-athletic.png" width={162} height={76} />
                  </div>
                  <div className="imagem-cliente">
                    <Image src="/lpmarketing/logoclientes/logo-bialetti.png" width={162} height={76} />
                  </div>
                  <div className="imagem-cliente">
                    <Image src="/lpmarketing/logoclientes/logo-candybrown.png" width={162} height={76} />
                  </div>
                  <div className="imagem-cliente">
                    <Image src="/lpmarketing/logoclientes/logo-casasaopedro.png" width={162} height={76} />
                  </div>
                  <div className="imagem-cliente">
                    <Image src="/lpmarketing/logoclientes/logo-choyer.png" width={162} height={76} />
                  </div>
                  <div className="imagem-cliente">
                    <Image src="/lpmarketing/logoclientes/logo-covabra.png" width={162} height={76} />
                  </div>
                  <div className="imagem-cliente">
                    <Image src="/lpmarketing/logoclientes/logo-dronline.png" width={162} height={76} />
                  </div>
                  <div className="imagem-cliente">
                    <Image src="/lpmarketing/logoclientes/logo-dwz.png" width={162} height={76} />
                  </div>
                  <div className="imagem-cliente">
                    <Image src="/lpmarketing/logoclientes/logo-elevage.png" width={162} height={76} />
                  </div>
                  <div className="imagem-cliente">
                    <Image src="/lpmarketing/logoclientes/logo-farmaciaviva.png" width={162} height={76} />
                  </div>
                  <div className="imagem-cliente">
                    <Image src="/lpmarketing/logoclientes/logo-gaggia.png" width={162} height={76} />
                  </div>
                  <div className="imagem-cliente">
                    <Image src="/lpmarketing/logoclientes/logo-gptw.png" width={162} height={76} />
                  </div>
                  <div className="imagem-cliente">
                    <Image src="/lpmarketing/logoclientes/logo-imeltron.png" width={162} height={76} />
                  </div>
                  <div className="imagem-cliente">
                    <Image src="/lpmarketing/logoclientes/logo-lojasrpm.png" width={162} height={76} />
                  </div>
                  <div className="imagem-cliente">
                    <Image src="/lpmarketing/logoclientes/logo-lvstore.png" width={162} height={76} />
                  </div>
                  <div className="imagem-cliente">
                    <Image src="/lpmarketing/logoclientes/logo-maravilhas.png" width={162} height={76} />
                  </div>
                  <div className="imagem-cliente">
                    <Image src="/lpmarketing/logoclientes/logo-minassal.png" width={162} height={76} />
                  </div>
                  <div className="imagem-cliente">
                    <Image src="/lpmarketing/logoclientes/logo-mundomarcolina.png" width={162} height={76} />
                  </div>
                  <div className="imagem-cliente">
                    <Image src="/lpmarketing/logoclientes/logo-novamed.png" width={162} height={76} />
                  </div>
                  <div className="imagem-cliente">
                    <Image src="/lpmarketing/logoclientes/logo-pedigree.png" width={162} height={76} />
                  </div>
                  <div className="imagem-cliente">
                    <Image src="/lpmarketing/logoclientes/logo-propetz.png" width={162} height={76} />
                  </div>
                  <div className="imagem-cliente">
                    <Image src="/lpmarketing/logoclientes/logo-puramagia.png" width={162} height={76} />
                  </div>
                  <div className="imagem-cliente">
                    <Image src="/lpmarketing/logoclientes/logo-samsung.png" width={162} height={76} />
                  </div>
                  <div className="imagem-cliente">
                    <Image src="/lpmarketing/logoclientes/logo-udiaco.png" width={162} height={76} />
                  </div>
                  <div className="imagem-cliente">
                    <Image src="/lpmarketing/logoclientes/logo-venture.png" width={162} height={76} />
                  </div>
                  <div className="imagem-cliente">
                    <Image src="/lpmarketing/logoclientes/logo-chris.png" width={162} height={76} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="container-fluid" id="o-quedizem">
          <div className="container">
            <div className="row">
            <div className="col-12">
                  <div className="titulo-cases">
                    <h3>O que dizem nossos clientes</h3>
                    <p>Leia os depoimentos e experiências que nossos clientes compartilham conosco, ouça<br></br> suas vozes e <strong>descubra como a Nairuz tem impactado positivamente suas empresas.</strong></p>
                  </div>
                </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="oquedizem-clientes owl-carousel owl-default">
                  <div className="box-dizer">
                    <div className="imagem-cliente">
                    <Image src="/lpmarketing/clientes/lv-store.png" width={144} height={144} />
                    </div>
                    <div className="titulo-cliente">
                      <h3>Letícia Vaz</h3>
                      <p>LV Store</p>
                    </div>
                    <div className="descricao-cliente">
                      <p>Fiquei muito feliz ao ver o resultado<br></br> final do projeto e também todo o<br></br> caminho para chegarmos nele. Todas as solicitações e dúvidas<br></br> foram atendidas de prontidão e da<br></br> melhor forma possível.</p>
                    </div>
                  </div>
                  <div className="box-dizer">
                    <div className="imagem-cliente">
                    <Image src="/lpmarketing/clientes/ludka.png" width={144} height={144} />
                    </div>
                    <div className="titulo-cliente">
                      <h3>Marcelo Arruda</h3>
                      <p>Ludka Homewear</p>
                    </div>
                    <div className="descricao-cliente">
                    <p>A Nairuz está com a Ludka desde a<br></br> criação e concepção da nossa<br></br> marca. Estamos construindo juntos<br></br> o nosso futuro. Ainda temos muitos<br></br> passos pela frente, rumo ao nosso<br></br> sucesso!</p>
                    </div>
                  </div>
                  <div className="box-dizer">
                    <div className="imagem-cliente">
                    <Image src="/lpmarketing/clientes/gaggia.png" width={144} height={144} />
                    </div>
                    <div className="titulo-cliente">
                      <h3>Umberto Milo</h3>
                      <p>Gaggia | Bialetti</p>
                    </div>
                    <div className="descricao-cliente">
                    <p>Os projetos superaram todas as<br></br> expectativas, conseguindo<br></br> “transmitir” requinte e sofisticação<br></br> para o nosso público. A<br></br> performance das lojas também<br></br> estão acima das expectativas.</p>
                    </div>
                  </div>
                  <div className="box-dizer">
                    <div className="imagem-cliente">
                    <Image src="/lpmarketing/clientes/casa-sao-pedro.png" width={144} height={144} />
                    </div>
                    <div className="titulo-cliente">
                      <h3>Marcos Tomazi</h3>
                      <p>Casa São Pedro</p>
                    </div>
                    <div className="descricao-cliente">
                    <p>Fiquei muito satisfeito com o nosso projeto, superaram nossas expectativas. Do projeto ao Go-live estiveram presentes em todas etapas. E estão conosco até hoje, mantendo a evolução contínua.</p>
                    </div>
                  </div>
                  <div className="box-dizer">
                    <div className="imagem-cliente">
                    <Image src="/lpmarketing/clientes/congelados-sonia.png" width={144} height={144} />
                    </div>
                    <div className="titulo-cliente">
                      <h3>Adriana Carpegiani</h3>
                      <p>Congelados da Sônia</p>
                    </div>
                    <div className="descricao-cliente">
                    <p>A Nairuz esteve num momento de transição difícil e nos troue soluções. Todas decisões são avaliadas visando um melhor resultado! Recomendo como agência de marketing 360º.</p>
                    </div>
                  </div>
                  <div className="box-dizer">
                    <div className="imagem-cliente">
                    <Image src="/lpmarketing/clientes/rpm.png" width={144} height={144} />
                    </div>
                    <div className="titulo-cliente">
                      <h3>Renato Soares</h3>
                      <p>Lojas RPM</p>
                    </div>
                    <div className="descricao-cliente">
                    <p>A nossa história com a Nairuz tem uma longa jornada, sempre contribuíram conosco em todas as etapas. Recomendamos como agência full service, somos de fato parceiros.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
                <div className="col-12">
                <div className="button-especialista">
                    <a className="fale-com" onClick={rollOrcamento}>Falar com um especialista</a>
                  </div>
                </div>
            </div>
          </div>
        </section>

        <section className="container-fluid" id="sobremark">
          <div className="container">
            <div className="row">
              <div className="box-resultadosmark">
                <ul>
                  <li><p><span>12</span> diferentes<br></br><strong>segmentos</strong> de atuação.</p></li>
                  <li><p><strong>SLA</strong> de resposta dos<br></br>chamados em até <span>1 dia útil.</span></p></li>
                  <li><p>Gerencimento de + <span>RS 3M</span><br></br>em <strong>verbas publicitárias.</strong></p></li>
                  <li><p><strong>NPS</strong> geral em<br></br><span>9,6 pontos.</span></p></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="container-fluid" id="junte-se">
          <div className="container secao-form">
            <div className="row">
              <div className="col-12 col-md-6">
                <div className="area-form">
                <div className="texto-form">
                  <h3>Junte-se a nós!</h3>
                  <p>Não perca mais tempo! Assista seus<br></br> números dispararem rumo ao sucesso.<br></br> Basta deixar suas informações abaixo e<br></br> nossa equipe entrará em contato com<br></br> você!</p>
                </div>
                  <div role="main" id="lp-performance-2022-e3e11f834cac8208347b"></div>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="banner-junte">
                <Image src="/lpmarketing/banner-juntar.png" width={636} height={675} />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="container-fluid" id="certificacoes">
          <div className="container" id="certn">
            <div className="row">
              <div className="col-12">
                <div className="titulo-secao">
                  <h3>Prêmios e certificações</h3>
                </div>
                <div className="descricao-cert">
                <p>Nosso compromisso com a <strong>excelência se traduz em certificações e premiações.</strong><br></br>Que tal confiar em uma agência reconhecida para impulsionar seu negócio?</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-md-6">
                <div className="area-certificados">
                  <div className="btn-cert">
                    Nossos certificados
                  </div>
                </div>
                <div className="box-cert">
                  <ul className="d-flex align-items-center mb-4">
                    <li><Image src="/parcerias/vtexpartner.png" alt="vTex" width={105} height={49} /></li>
                    <li><Image src="/lpmarketing/google-partner.jpg" alt="Google Partner" width={101} height={72} /></li>
                    <li><Image src="/parcerias/hubspot.png" alt="Hubspot" width={105} height={49} /></li>
                  </ul>
                  <ul className="d-flex align-items-center mb-4">
                    <li><Image src="/parcerias/rdplatinum22.png" alt="RD Platinum" width={105} height={49} /></li>
                    <li><Image src="/novaident/parcerias/shopify-partners.svg" alt="Shopify" width={105} height={49} /></li>
                    <li><Image src="/parcerias/ecommerce.png" alt="E-commerce Ouro" width={105} height={49} /></li>
                  </ul>
                  <ul className="d-flex align-items-center mb-4">
                    <li><Image src="/novaident/parcerias/nuvempartners-selo-platinum.svg" alt="Nuvem Partners" width={105} height={49} /></li>
                    <li><Image src="/novaident/parcerias/linx-commerce-selo.svg" alt="Linx Partners" width={105} height={49} /></li>
                  </ul>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="area-certificados parceiros">
                  <div className="btn-cert">
                    Nossos parceiros
                  </div>
                </div>
                <div className="box-cert">
                  <ul className="d-flex align-items-center mb-4">
                      <li><Image src="/parcerias/uol.png" alt="Uol" width={105} height={49} /></li>
                      <li><Image src="/parcerias/biz.png" alt="BizCommerce" width={105} height={49} /></li>
                      <li><Image src="/parcerias/linx.png" alt="Linx Commerce" width={105} height={49} /></li>
                      <li><Image src="/parcerias/mage.png" alt="Mageshop" width={105} height={49} /></li>
                  </ul>
                  <ul className="d-flex align-items-center mb-4">
                    <li><Image src="/novaident/parcerias/Nuvemshop-logo.svg" alt="NuvemShop" width={105} height={49} /></li>
                    <li><Image src="/novaident/parcerias/shopify-partners.svg" alt="Shopify" width={105} height={49} /></li>
                    <li><Image src="/parcerias/vtexpartner.png" alt="vTex" width={105} height={49} /></li>
                  </ul>
                  <ul className="d-flex align-items-center mb-4">
                    <li><Image src="/novaident/parcerias/mercado-pago-logo.svg" alt="MercadoPago" width={105} height={49} /></li>
                    <li><Image src="/novaident/parcerias/PluggTo-Original-Logo-Green.svg" alt="pluggto" width={105} height={49} /></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="container" id="materiaismkt">
            <div className="row">
              <div className="col-12">
                <div className="titulo-secao">
                  <h3>Conteúdos Premium</h3>
                </div>
                <div className="descricao-premios">
                  <p>Explore nossos materiais exclusivos, descubra <strong>insights valiosos e veja como fazemos marketing</strong><br></br> <strong>digital.</strong> Baixe agora e tenha acesso às melhores estratégias com nosso conteúdo especializado.</p>
                </div>
              </div>
            </div>
            <div className="mockups-secao">
                <div className="row">
                  <div className="col-12 col-md-3">
                    <div className="materiais">
                      <div className="imagem-materiais">
                        <Image src="/lpmarketing/mockups/planejamento-projecao.png" alt="Mockup 1" width={800} height={996} />
                      </div>
                      <div className="baixar-material">
                        Baixar Material
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-3">
                    <div className="materiais">
                      <div className="imagem-materiais">
                        <Image src="/lpmarketing/mockups/taxa-absorcao.png" alt="Mockup 2" width={800} height={996} />
                      </div>
                      <div className="baixar-material">
                        Baixar Material
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-3">
                    <div className="materiais">
                      <div className="imagem-materiais">
                        <Image src="/lpmarketing/mockups/importancia-layout-ecommerce.png" alt="Mockup 3" width={800} height={996} />
                      </div>
                      <div className="baixar-material">
                        Baixar Material
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-3">
                    <div className="materiais">
                      <div className="imagem-materiais">
                        <Image src="/lpmarketing/mockups/contratar-agenciamarketing.png" alt="Mockup 4" width={800} height={996} />
                      </div>
                      <div className="baixar-material">
                        Baixar Material
                      </div>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </section>

        <NewsletterNz />
        </main>

        <Script id="carrossel-lp" strategy="lazyOnload">
        {`
        // Carrossel LP Marketing
  $(document).ready(function(){
    $(".carrossel-nairuzclientes.owl-carousel").owlCarousel({
      items: 7,
      dots: true,
      nav: true,
      autoplay:true,
      autoplayTimeout:3000,
      autoplayHoverPause:true,
      responsive:{
          0:{
              items:1,
          },
          800:{
              items:7,
          },
          1000:{
              items:7,
          }
      }
    });
  });`}
        </Script>

        <Footergeral />
        

        </div>

        <Script src="https://code.jquery.com/jquery-3.6.0.min.js"
          strategy="beforeInteractive" />
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js" 
          strategy="beforeInteractive" />

        <Script id="show-bannerx" strategy="lazyOnload">
  {`



$(document).ready(function(){
  $(".box-cases.athletic .button-resultados").click(function(){
    $(".box-cases.athletic .conteudo-cases.primeiro").toggle();
    $(".box-cases.athletic .conteudo-cases.segundo").toggle();
  });

  $(".box-cases.nova-med .button-resultados").click(function(){
    $(".box-cases.nova-med .conteudo-cases.primeiro").toggle();
    $(".box-cases.nova-med .conteudo-cases.segundo").toggle();
  });

  $(".box-cases.covabra .button-resultados").click(function(){
    $(".box-cases.covabra .conteudo-cases.primeiro").toggle();
    $(".box-cases.covabra .conteudo-cases.segundo").toggle();
  });

  $(".box-cases.transpalet .button-resultados").click(function(){
    $(".box-cases.transpalet .conteudo-cases.primeiro").toggle();
    $(".box-cases.transpalet .conteudo-cases.segundo").toggle();
  });

});
 
  if (window.RDStationForms) {
    new RDStationForms('marketing-digital-30c2c87edfdd6cc6aca2', 'UA-48773259-1').createForm();
  }

  if (window.RDStationForms) {
    new RDStationForms('lp-performance-2022-e3e11f834cac8208347b', 'UA-48773259-1').createForm();
  }

  // Carrossel LP Marketing
  $(document).ready(function(){
    $(".carrossel-atuacao.owl-carousel.carrossel").owlCarousel({
      items: 3,
      dots: true,
      nav: false,
      autoplay:true,
      autoplayTimeout:3000,
      autoplayHoverPause:true,
      responsive:{
          0:{
              items:1,
          },
          800:{
              items:1,
          },
          1000:{
              items:3,
          }
      }
    });
  });

  

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
