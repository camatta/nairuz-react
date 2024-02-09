import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import HeaderMob from '../components/HeaderMob'
import CarrosselCases from '../components/CarrosselCases'
import Script from 'next/script'

const rollServicos = () => {
  document.location.href = '#apresentacao-performance';
}

const rollClientes = () => {
  document.location.href = '#clientes-performance';
}

const rollResultados = () => {
  document.location.href = '#resultados-performance';
}

const rollOrcamento = () => {
  document.location.href = '#form-temas';
}



export default function Performance() {
  return (
    <>
      <Head>
        <title>Conte com o nosso time de Performance para alcançar suas metas!</title>
        <meta name="description" content="À procura de uma agência de marketing digital que faça o seu e-commerce crescer? Então conheça os serviços da Nairuz, agência de performance!" />
        <meta property="og:image" content="https://nairuz.com.br/og-nairuz.png" />
				<meta property="og:image:type" content="image/png" />
				<meta property="og:image:width" content="600" />
				<meta property="og:image:height" content="400" />
        <meta property="og:description" content="À procura de uma agência de marketing digital que faça o seu e-commerce crescer? Então conheça os serviços da Nairuz, agência de performance!" />
				<meta property="og:site_name" content="Conte com o nosso time de Performance para alcançar suas metas!" />
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

      <div className="page-temas page-performance">

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
                      <li><button onClick={rollClientes}>Clientes</button></li>
                      <li><button onClick={rollServicos}>Serviços</button></li>
                      <li><button onClick={rollResultados}>Resultados</button></li>
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
                <div className="col-12 col-md-5">
                  <div className="title-temas">
                    <h1>Afinal, o que fazemos?</h1>
                  </div>
                  <div className="text-quemsomos">
                    <p>A era digital está cada vez mais presente na vida das pessoas. Por isso, adentrar esse mundo é o sucesso que você precisa para alavancar suas vendas virtuais e, nada melhor que fazer isso através de estratégias de marketing digital de qualidade, não é mesmo? Por isso, aqui na Nairuz contamos com especialistas no assunto!</p>
                  </div>
                  <div className="buttons-temas">
                    <a className="saiba-mais-temas" onClick={rollOrcamento}><Image src="/icon-wpp.svg" alt="WhatsApp" width={12} height={12} /> Fale conosco</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="separator-temas">
              <Image src="/icon-nairuz-full.svg" alt="Logo Nairuz" width={100} height={100} />
            </div>
          </section>
          <section className="container" id="clientes-performance">
            <div className="row">
              <div className="col-12 col-md-6">
                <div className="logos-clientes-performance">
                  <ul className="d-flex align-items-center row1-logos mb-5">
                    <li><Image src="/clientes/bialetti.png" width={116} height={55} /></li>
                    <li><Image src="/clientes/gaggia.png" width={116} height={55} /></li>
                    <li><Image src="/clientes/imeltron.png" width={116} height={55} /></li>
                    <li><Image src="/clientes/lvstore.png" width={116} height={55} /></li>
                  </ul>
                  <ul className="d-flex align-items-center row2-logos mb-5">
                    <li><Image src="/clientes/gptw.svg" width={116} height={55} /></li>
                    <li><Image src="/clientes/samsung.png" width={116} height={55} /></li>
                    <li><Image src="/clientes/docol.svg" width={116} height={55} /></li>
                    <li><Image src="/clientes/pedigree.png" width={116} height={55} /></li>
                  </ul>
                  <ul className="d-flex align-items-center row3-logos mb-5">
                    <li><Image src="/clientes/minassal.png" width={116} height={55} /></li>
                    <li><Image src="/clientes/cybelar.png" width={116} height={55} /></li>
                    <li><Image src="/clientes/logo-farma-delivery.png" alt="Farma Delivery" width={110} height={35} /></li>
                    {/* <li><Image src="/clientes/gptw.svg" width={116} height={55} /></li> */}
                    <li><Image src="/clientes/grupo-card.png" width={116} height={55} /></li>
                  </ul>
                  <ul className="d-flex align-items-center row4-logos mb-5">
                    <li><Image src="/clientes/azul.png" width={116} height={55} /></li>
                    <li><Image src="/clientes/sempreviva.png" width={116} height={55} /></li>
                    <li><Image src="/clientes/novamed.png" width={116} height={55} /></li>
                    <li><Image src="/clientes/rcrio.png" width={116} height={55} /></li>
                  </ul>
                  <ul className="d-flex align-items-center row4-logos">
                    <li><Image src="/clientes/athletic.svg" width={116} height={55} /></li>
                    <li><Image src="/clientes/udiaco.png" width={116} height={55} /></li>
                    <li><Image src="/clientes/maravilhas.png" width={116} height={55} /></li>
                    <li><Image src="/clientes/covabra.png" width={116} height={55} /></li>
                  </ul>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="text-clientes-performance">
                <div className="title-temas">
                    <h2>Clientes que confiam em nosso trabalho!</h2>
                  </div>
                  <div className="text-quemsomos">
                    <p>Ultrapassar as expectativas de nossos clientes: este é o nosso compromisso! Por isso, unimos tecnologia, estratégias de marketing e performance e know-how de uma equipe de especialistas experientes em entregar soluções e o melhor resultado para nossos parceiros! Quer descobrir como podemos impulsionar o seu negócio? Conheça nossos clientes e saiba o que dizem sobre nós!</p>
                  </div>
                  <div className="buttons-temas">
                    <a className="saiba-mais-temas" onClick={rollOrcamento}>Quero me tornar um case de sucesso</a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="container-fluid" id="marketing-performance">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="title-marketing-performance">
                    <h3>Como fazemos Marketing Digital?</h3>
                  </div>
                  <div className="text-marketing-performance">
                    <p>Com mais de uma década de experiência no universo digital, nossa equipe de especialistas atua no planejamento e definição de estratégias singulares para cada segmento de mercado. Através da união de tecnologia avançada e conhecimento prático em marketing digital, garantimos a melhor performance de resultados com foco total na experiência do usuário e conversão de vendas nos mais variados canais.</p>
                    <p>Nossa meta é o crescimento contínuo de nossos clientes parceiros e, por isso, promovemos um atendimento personalizado e planos sólidos de marketing digital, totalmente adaptados às necessidades de cada empresa. Quer saber como sua empresa pode alavancar os resultados com o Jeito Nairuz de desenvolver estratégias objetivas e assertivas para cada tipo de negócio?</p>
                  </div>
                  <div className="button-marketing-performance">
                    <a className="saiba-mais-temas" onClick={rollOrcamento}>Quero alavancar minhas vendas com o marketing digital</a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="container-fluid" id="apresentacao-performance">
            <div className="container">
              <div className="row d-flex align-items-center">
                <div className="col-12 col-md-6">
                  <div className="text-apresentacao">
                    <div className="title-apresentacao">
                      <h2>Mas afinal, quais serviços ofertamos aos nossos clientes?</h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-md-6">
                  <div className="text-servico-performance">
                    <div className="box-icon-title">
                      <div className="icon-servico-performance">
                        <Image src="/icon-layout.png" alt="Layout" width={68} height={68} />
                      </div>
                      <div className="title-servico-performance">
                        <h4>Layout para e-commerce</h4>
                      </div>
                    </div>
                    <div className="content-servico-performance">
                      <p>Como oferecer a melhor experiência para os clientes que entram em sua loja online? Um layout para e-commerce original traz diversos benefícios para o seu negócio, já que a credibilidade da sua marca depende de um visual que passe confiança. Os projetos da Nairuz não só ganham destaque no mercado por conta da sua originalidade, como também são pensados especialmente para a persona da sua marca. Afinal, a experiência deles dentro do seu site é um dos grandes fatores que influencia a venda.</p>
                    </div>
                    <div className="button-servico-performance">
                      <Link href="#"><a className="saiba-mais-temas">ABRIR MINHA LOJA ONLINE</a></Link>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="img-servico-performance right layout">
                    <Image src="/layout-performance.png" alt="Layout" width={400} height={403} />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-md-6">
                  <div className="img-servico-performance website">
                    <Image src="/website-performance.png" alt="Layout" width={400} height={403} />
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="text-servico-performance">
                    <div className="box-icon-title">
                      <div className="icon-servico-performance">
                        <Image src="/icon-website.png" alt="Websites" width={68} height={68} />
                      </div>
                      <div className="title-servico-performance">
                        <h4>Websites</h4>
                      </div>
                    </div>
                    <div className="content-servico-performance">
                      <p>Desenvolvemos web sites, one pages, landing pages, implementação e desenvolvimento de layout para e-commerce. Somos apaixonados por usabilidade e nossos projetos são todos personalizados, pautados nas boas práticas de User Interface - UI e User Experience - UX com foco nos resultados. Além disso, trabalhamos com as mais recentes tecnologias do mercado.</p>
                    </div>
                    <div className="button-servico-performance">
                      <Link href="#"><a className="saiba-mais-temas">PRECISO DE UM SITE</a></Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-md-6">
                  <div className="text-servico-performance">
                    <div className="box-icon-title">
                      <div className="icon-servico-performance">
                        <Image src="/icon-midias.png" alt="Mídias Pagas" width={68} height={68} />
                      </div>
                      <div className="title-servico-performance">
                        <h4>Mídias Pagas</h4>
                      </div>
                    </div>
                    <div className="content-servico-performance">
                      <p>As mídias pagas são as formas de comunicação entre a sua marca e os seus clientes onde ocorre um investimento financeiro para o alcance das metas. Através de estratégias organizadas pelo nosso time de analistas, os seus anúncios trazem os resultados que você almeja, seja mais engajamento com os seus conteúdos, mais seguidores , oportunidades e, finalmente, mais conversões.</p>
                    </div>
                    <div className="button-servico-performance">
                      <Link href="#"><a className="saiba-mais-temas">QUERO ATRAIR MAIS CLIENTES</a></Link>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="img-servico-performance right midias">
                    <Image src="/midias-performance.png" alt="Layout" width={400} height={403} />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-md-6">
                  <div className="img-servico-performance inbound">
                    <Image src="/inbound-performance.png" alt="Layout" width={400} height={403} />
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="text-servico-performance">
                    <div className="box-icon-title">
                      <div className="icon-servico-performance">
                        <Image src="/icon-inbound.png" alt="Inbound Marketing" width={68} height={68} />
                      </div>
                      <div className="title-servico-performance">
                        <h4>Inbound Marketing</h4>
                      </div>
                    </div>
                    
                    <div className="content-servico-performance">
                      <p>O Inbound Marketing, também conhecido como Marketing de Atração, é uma metodologia de marketing digital totalmente focada na conversão dos visitantes do seu negócio em clientes ativos, conduzindo-os pela jornada de compra de forma automatizada.</p>
                    </div>
                    <div className="button-servico-performance">
                      <Link href="#"><a className="saiba-mais-temas">QUERO MAIS CLIENTES ATIVOS</a></Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-md-6">
                  <div className="text-servico-performance">
                    <div className="box-icon-title">
                      <div className="icon-servico-performance">
                        <Image src="/icon-seo.png" alt="SEO" width={68} height={68} />
                      </div>
                      <div className="title-servico-performance">
                        <h4>SEO</h4>
                      </div>
                    </div>
                    <div className="content-servico-performance">
                      <p>Nossa equipe irá fazer análises de seu site, de concorrentes e palavras-chave. Assim, através de otimizações, produção de conteúdos relevantes e link building, seu site apresentará crescimento organicamente.</p>
                    </div>
                    <div className="button-servico-performance">
                      <Link href="#"><a className="saiba-mais-temas">QUERO ESTAR NAS BUSCAS DO GOOGLE</a></Link>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="img-servico-performance right seo">
                    <Image src="/seo-performance.png" alt="Layout" width={400} height={403} />
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="container-fluid" id="resultados-performance">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="icon-resultados">
                    <Image src="/icon-trofeu-resultados.svg" alt="Ícone Troféu" width={70} height={70} />
                  </div>
                  <div className="title-resultados text-center">
                    <h4>Resultados</h4>
                  </div>
                  <div className="text-resultados-performance text-center">
                    <p>Através de estratégias personalizadas, atingimos números e objetivos acima do esperado. Aqui estão alguns de nossos melhores resultados.</p>
                  </div>
                  <div className="carrossel-resultados-performance">
                    <CarrosselCases />
                  </div>
                  <div className="button-resultado-performance text-center">
                      <a className="saiba-mais-temas" onClick={rollOrcamento}>QUERO SER UM CASE DE SUCESSO</a>
                  </div>
                </div>
              </div>
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
                  <div className="quemsomos-nairuz-performance text-center">
                    <div className="title-quemsomos-performance">
                      <h4>Quem é a Nairuz?</h4>
                    </div>
                    <div className="quemsomos-performance">
                    <p>Utilizamos tecnologia para conectar marcas e consumidores, sem perder a essência de um trabalho personalizado. Somos um empresa feita à mão! Hoje reconhecida por nossos parceiros e clientes como uma das agências referência de marketing digital de performance, desenvolvimento e design no estado de São Paulo.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="container" id="title-nossacasa">
          <div className="row">
            <div className="col-12">
              <div className="title-nossacasa">
                <h4>Nossa <span>Casa</span></h4>
              </div>
            </div>
          </div>
        </section>
        <section className="container-fluid" id="fotos-nossacasa">
          <ul>
            <li><Image src="/espaconairuz1.png" alt="Espaço Nairuz" width={475} height={475} /></li>
            <li><Image src="/espaconairuz2.png" alt="Espaço Nairuz" width={475} height={475} /></li>
            <li><Image src="/espaconairuz3.png" alt="Espaço Nairuz" width={475} height={475} /></li>
            <li><Image src="/espaconairuz4.png" alt="Espaço Nairuz" width={475} height={475} /></li>
          </ul>
          <ul>
            <li><Image src="/espaconairuz5.png" alt="Espaço Nairuz" width={475} height={475} /></li>
            <li><Image src="/espaconairuz6.png" alt="Espaço Nairuz" width={475} height={475} /></li>
            <li><Image src="/espaconairuz7.png" alt="Espaço Nairuz" width={475} height={475} /></li>
            <li><Image src="/espaconairuz8.png" alt="Espaço Nairuz" width={475} height={475} /></li>
          </ul>
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
                      <li><Image src="/parcerias/google-partner-novo.png" alt="Google Partner" width={99} height={97} /></li>
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
