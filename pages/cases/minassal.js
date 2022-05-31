import Head from 'next/head'
import Image from 'next/image'
import Headergeral from '../../components/Headergeral'
import HeaderMob from '../../components/HeaderMob'
import Footergeral from '../../components/Footergeral'
import BehanceNz from '../../components/BehanceNz'
import CarrosselCases from '../../components/CarrosselCases'

export default function Minassal() {
  return (
    <div className="page-cases page-case-minassal">
      <Head>
        <title>Nairuz - Minassal</title>
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

      <Headergeral />
      <HeaderMob />
      <main>
        <section className="container-fluid" id="case-top">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-6">
                <div className="subtitle-case">
                  <h2>Nossos <span>Cases</span></h2>
                </div>
                <div className="title-case">
                  <h1>Marketing B2B: como a Minassal aumentou sua base de leads em 91% em um semestre</h1>
                </div>
                <div className="text-case">
                  <p>É isto que acontece quando uma equipe se dedica para trazer o melhor aos seus clientes: estamos muito satisfeitos em apresentar mais um case de sucesso! Estamos em evolução constante neste projeto, pois somos Data Driven, guiados por dados e neste projeto podemos contribuir com todos os pilares, desde a criação da marca até o marketing digital.</p>
                  <p>Hoje, vamos mostrar um pouco da trajetória da Minassal junto à Nairuz, que começou em 2018.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="container" id="main-case">
          <div className="row">
            <div className="col-12">
              <div className="title-main-case">
                <h3>Case de sucesso Minassal: quem é essa empresa?</h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-6">
              <div className="text-main-case">
                <p>Atuando no mercado há 35 anos, a <a href="https://minassal.com.br/" target="_blank" rel="noopener noreferrer">Minassal</a> é uma grande distribuidora especializada no país.</p>
                <p>Apesar de ter iniciado sua história atuando na produção e distribuição de sal mineral (então o nome), a empresa atualmente se dedica à distribuição de pet food. Sendo eles a distribuidora exclusiva da Mars, proprietária de marcas como Pedigree, Whiskas e Royal Canin.</p>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="text-main-case">
                <p>Com o objetivo de sempre trazer a melhor experiência para os seus clientes, a Minassal está sempre investindo em novas tecnologias para o seu negócio.</p>
                <p>Foi por isso que eles aceitaram o auxílio da Nairuz quando nós chegamos até eles.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="container-fluid" id="banner-full">
          <div className="row">
            <div className="col-12">
              <div className="banner-lojasrpm text-center">
                <Image src="/cases/img-mockup-rpm.png" width={1127} height={439} />
              </div>
            </div>
          </div>
        </section>
        <section className="container" id="main-xcase">
          <div className="row">
            <div className="col-12 col-md-6">
              <div className="post-lojasrpm post-content">
                <div className="title-post">
                  <h4>Quais eram as expectativas do cliente?</h4>
                </div>
                <div className="post-content">
                  <ul>
                    <li><p>Aumentar a credibilidade do site e sua relevância no ramo de móveis.</p></li>
                    <li><p>Crescer o número de conversão em vendas.</p></li>
                    <li><p>Trabalhar formas de coletar listas de e-mails, com ações nas mídias.</p></li>
                  </ul>
                </div>
                <div className="title-post">
                  <h4>Os primeiros passos</h4>
                  <h5>Site e-commerce</h5>
                </div>
                <div className="post-content">
                  <p>O primeiro problema identificado foi o layout do site e-commerce e logo da empresa. A cor e o modelo do layout e logo não passavam credibilidade ao consumidor que acessava o site e isso, na maior parte dos casos, é o motivo da desistência no momento da compra do produto.</p>
                  <p>Colocamos então em ação parte de nosso plano, e reestruturamos o layout do e-commerce. Substituímos a cor, alteramos detalhes importantes do layout e as informações disponíveis na página. Estas modificações ganharam a confiança do consumidor e auxiliaram no <span>aumento das vendas</span> do e-commerce.</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="post-lojasrpm post-content">
                <div className="title-post">
                  <h4>Qual foi nosso plano de ação?</h4>
                </div>
                <div className="post-content">
                  <ul>
                    <li><p>Reestruturação do layout do e-commerce com base no User Experience.</p></li>
                    <li><p>Reestruturação do mobile.</p></li>
                    <li><p>Revitalização do blog com foco em Inbound Marketing.</p></li>
                    <li><p>Campanhas segmentadas para Facebook.</p></li>
                    <li><p>Geração de tráfego e vendas.</p></li>
                  </ul>
                </div>
                <div className="title-post">
                  <h5>Ações nas mídias e e-mail marketing</h5>
                </div>
                <div className="post-content">
                  <p>Trabalhamos também as redes sociais da <span>Lojas RPM</span> (Facebook e Instagram) e o e-mail marketing. Como estamos falando sobre um e-commerce, é essencial que todas as suas vertentes digitais estejam alinhadas, por isso mantemos as publicações nas mídias e e-mails integrados, de maneira a preservar o valor da marca.</p>
                  <p>Uma das melhores estratégias para quem possui e-commerce de móveis é o e-mail marketing. Claro, desde que sua lista seja engajada. A Lojas RPM já trabalhava com envios de newsletter, então apenas otimizamos seu conteúdo e elaboramos um novo layout.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="post-content">
                <div className="title-post">
                  <h4>Após nossa entrada</h4>
                  <h5>Alguns dados sobre crescimento</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-4">
              <div className="post-content">
                <div className="resultados-post">
                  <h6>Crescimento geral</h6>
                  <p>Dados referentes ao crescimento geral da Lojas RPM após a entrada da Nairuz como consultoria digital.</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="post-content">
                <div className="resultados-post">
                  <h6>Crescimento no AdWords</h6>
                  <p>Dados referentes ao crescimento no AdWords da Lojas RPM após a entrada da Nairuz como consultoria digital.</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="post-content">
                <div className="resultados-post">
                  <h6>Crescimento no Facebook</h6>
                  <p>Dados referentes ao crescimento no Facebook da Lojas RPM após a entrada da Nairuz como consultoria digital.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="img-layout-rpm">
                <Image src="/cases/img-layout-rpm.png" width={1500} height={260} />
              </div>
              <div className="info-layout-rpm">
                <p>Protótipo apresentado para o cliente.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-6">
              <div className="post-lojasrpm post-content">
                <div className="title-post">
                  <h4>Hoje somos responsáveis por…</h4>
                </div>
                <div className="post-content">
                  <p>Toda a parte de otimização de performance do site e e-commerce, assim como o posicionamento estratégico de links patrocinados, com o objetivo de aumentar as vendas e o ROI da marca.</p>
                  <p>O SEO, o design, as mídias sociais e o e-mail marketing também são com a gente! Todas as campanhas são alinhadas, desde o banner publicado na rede social até o e-mail marketing disparado para a base de leads segmentada.</p>
                </div>
                <div className="title-post">
                  <h4>Quer saber mais sobre como a consultoria digital pode ajudar seu negócio?</h4>
                </div>
                <div className="post-content">
                  <p>Se seu e-commerce não está gerando os resultados que você espera, ou acredita que há muito o que melhorar, conheça um pouco mais sobre <a href="https://nairuz.com.br/cases" target="_blank" rel="noopener noreferrer">outros cases de sucesso</a> e venha bater um papo com a gente! Temos certeza de que seu negócio pode crescer ainda mais com uma parceria de excelentes resultados.</p>
                  <p>Leia também: <a href="https://blog.nairuz.com.br/5-dicas-melhorar-financas-do-seu-e-commerce/" target="_blank" rel="noopener noreferrer">5 dicas para melhorar as finanças do seu e-commerce</a></p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="post-lojasrpm post-content">
                <div className="title-post">
                  <h4>E para comprovar que mandamos bem no que fazemos</h4>
                </div>
                <div className="post-content">
                  <p>Toda a parte de <span>otimização de performance</span> do site e e-commerce, assim como o posicionamento estratégico de links patrocinados, com o objetivo de aumentar as vendas e o ROI da marca.</p>
                  <p>O SEO, o design, as mídias sociais e o e-mail marketing também são com a gente! Todas as campanhas são alinhadas, desde o banner publicado na rede social até o e-mail marketing disparado para a base de leads segmentada.</p>
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
                    <p>OUTROS CASES <span>DE SUCESSO</span></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <CarrosselCases />
        <BehanceNz />
      </main>

      <Footergeral />
    </div>
  )
}
