import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Headergeral from '../components/Headergeral'
import HeaderMob from '../components/HeaderMob'
import Footergeral from '../components/Footergeral'
import NewsletterNz from '../components/NewsletterNz'

export default function QuemSomos() {
  return (
    <div className="page-quemsomos">
      <Head>
        <title>Nairuz | Marketing Digital - Quem Somos</title>
        <meta name="description" content="Somos uma agência de marketing digital e tecnologia e promovemos soluções integradas para gerar resultado aos nossos clientes! Saiba mais!" />
        <meta property="og:image" content="https://nairuz.com.br/og-nairuz.png" />
				<meta property="og:image:type" content="image/png" />
				<meta property="og:image:width" content="600" />
				<meta property="og:image:height" content="400" />
        <meta property="og:description" content="Conheça nossa Agência de Marketing Digital e Tecnologia e descubra como transformar os resultados da sua empresa. Acesse e saiba mais!" />
				<meta property="og:site_name" content="Nairuz | Marketing Digital" />
				<meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.png" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,300&display=swap" rel="stylesheet"></link>
      </Head>

      <Headergeral />
      <HeaderMob />

      <main>
        <section className="container-fluid" id="quem-somos">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-4">
                <div className="text-quemsomos">
                  <p>Nós somos uma agência de marketing digital e tecnologia, sendo assim, trabalhamos com soluções integradas para trazer resultado para os nossos clientes.<br></br><br></br>Deste modo, utilizamos tecnologia para conectar marcas e consumidores, sem perder a essência de um trabalho personalizado.<br></br><br></br>Afinal, somos pessoas cuidando de pessoas, por isso, levamos no peito nossa cultura. Somos uma empresa feita à mão! Hoje reconhecida por nossos parceiros e clientes como uma das agências referência de marketing digital de performance, desenvolvimento e design no estado de São Paulo.</p>
                </div>
              </div>
              <div className="col-4 desktoponly">
                <div className="title-quemsomos">
                  <h1>Utilizamos tecnologia para conectar marcas e consumidores, sem perder a essência de um trabalho personalizado.</h1>
                </div>
              </div>
              <div className="col-4 desktoponly"></div>
            </div>
          </div>
        </section>
        <section className="container" id="mvv">
          <div className="row">
            <div className="col-12 col-md-4">
              <div className="card missao">
                <div className="icon-mvv mb-2">
                  <Image src="/missao.svg" alt="Ícone Missão" width={32} height={32} />
                </div>
                <h3>Missão</h3>
                <p>Ser indispensável para os nossos clientes através da geração e atingimento de resultados com marketing digital estratégico e novas tecnologias aplicadas a obtenção, análise e uso de dados. Ser reconhecido nacionalmente como um dos líderes em geração de performance e rentabilidade através de dados objetivos.</p>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="card visao">
                <div className="icon-mvv mb-2">
                  <Image src="/visao.svg" alt="Ícone Visão" width={32} height={32} />
                </div>
                <h3>Visão</h3>
                <p>Trabalhar colaborativamente com foco no resultado de nossos clientes, gerando um ambiente sustentável de negócios através da inovação e uso de tecnologia de ponta, resultando no crescimento sólido e constante.</p>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="card valores">
                <div className="icon-mvv mb-2">
                  <Image src="/valores.svg" alt="Ícone Valores" width={32} height={32} />
                </div>
                <h3>Valores</h3>
                <p>Honestidade, Zelo em todos os detalhes, Responsabilidade, Transparência e Inovação, sempre!</p>
              </div>
            </div>
          </div>
        </section>
        <section className="container" id="cultura">
          <div className="row">
            <div className="col-12 col-md-4 order1mob">
              <div className="cultura">
                <div className="title-cultura">
                  <h4>Nossa <span>Cultura</span></h4>
                </div>
                <div className="text-cultura">
                  <p>A continuidade de nosso negócio e o sucesso dos nossos resultados advém, em grande parte, da nossa cultura e dos princípios éticos que adotamos. Não medimos esforços para que todos que se relacionem conosco (clientes, fornecedores, parceiros e funcionários) vivenciem experiências agradáveis! Prezamos pelo relacionamento duradouro. Temos plena convicção que tudo pode mudar, exceto a nossa cultura.</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4 order2mob">
              <div className="img-cultura">
                <Image src="/mao.png" className="img-fluid" alt="Uma empresa feita à mão!" width={350} height={283} />
              </div>
            </div>
            <div className="col-12 col-md-4 order3mob">
              <div className="text-cultura mt-4">
                <p>Apesar de grande parte das nossas ações serem digitais, somos uma empresa baseada em pessoas, por isso vemos o nosso time como o principal fator de sucesso em nossa empresa e acreditamos, também, que cada um é o maior responsável pelo seu próprio desenvolvimento profissional, desta forma desenvolvemos relacionamentos construtivos. Somos uma empresa feita à mão!</p>
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
        <section className="container-fluid" id="bg-video-parcerias">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="video-nairuz">
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/uy0pihIRkKU" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
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
                    <ul className="d-flex align-items-center justify-content-space-around">
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
          </div>
        </section>
      </main>

      <Footergeral />
    </div>
  )
}
