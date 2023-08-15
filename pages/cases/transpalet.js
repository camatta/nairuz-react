import Head from 'next/head'
import Image from 'next/image'
import Headergeral from '../../components/Headergeral'
import HeaderMob from '../../components/HeaderMob'
import Footergeral from '../../components/Footergeral'
import NewsletterNz from '../../components/NewsletterNz'
import Script from 'next/script'


export default function NovaMedicamentos2() {
  return (
    <div className="page-cases page-case-novamed case-transpalet">
      <Head>
        <title>Nairuz - Transpalet</title>
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
        <section className="container-fluid" id="new-case-top">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="subtitle-case">
                  <h2>Nossos <span>Cases</span></h2>
                </div>
                <div className="title-case">
                  <h1>Empresa de equipamentos de movimentação de carga bate meta com mais de 600% em geração de leads</h1>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="container-fluid" id="new-video-case">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="video-case">
                  <iframe width="850" height="500" src="https://www.youtube.com/embed/zZIXg9adnVc" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="container" id="conteudo-case-transpalet">
          <div className="row align-items-center justify-content-center">
            <div className="col-12 col-md-9">
              <div className="text-estudo-case case-transpalet">
              <p>O ramo de equipamentos de movimentação de cargas é de extrema importância para diversos setores do mercado, que dependem inteiramente das paleteiras e empilhadeiras para fazer o seu negócio rodar. Mas, como atingir todos esses clientes? Ou melhor ainda, como saber se eles estão prontos para receber a sua oferta de venda?</p>
              
              <p>É somente através de uma estratégia bem organizada de Inbound Marketing que é possível criar laços com os seus clientes e fazer com que eles sejam fiéis a sua marca. Foi pensando nisso, e no futuro do seu negócio no mundo digital, que a Transpalet chegou até a Nairuz.</p> 
              </div>
            </div> 
          </div>

          <div className="row points-case justify-content-center">
            <div className="text-estudo-case col-4 d-flex flex-column align-items-center gap-4">
              <Image src="/transpalet/persons.svg" width={80} height={80} alt="Persons" />
              <p>A Nairuz faz com que os desvios e pontos fora da curva <span>sejam rapidamente detectados e corrigidos</span> para que os resultados voltem a aparecer.</p>
            </div>
            <div className="text-estudo-case col-4 d-flex flex-column align-items-center gap-4">
              <Image src="/transpalet/cursor.svg" width={80} height={80} alt="Cursor" />
              <p>O trabalho de captação de novos leads nos <span>trouxe novos clientes e mais visibilidade para nossa empresa</span>, que conseguiu se manter em <span>1° lugar</span> em vendas de peças de reposição Paletrans</p>
            </div>
            <div className="text-estudo-case col-4 d-flex flex-column align-items-center gap-4">
              <Image src="/transpalet/growup.svg" width={80} height={80} alt="Grow up" />
              <p>Mesmo com esse cenário desafiador <span>o faturamento de 2022 foi de 17,82% maior que o faturamento de 2021</span>. A média mensal foi de <span>R$560,790</span></p>
            </div>
          </div>

          <div className="row">
            <div className="col-12 d-flex justify-content-center">
              <div className="parceria col-10 d-flex justify-content-center align-items-center">
                <p>Vamos entender um pouco mais sobre a nossa <span>parceria</span>?</p>
              </div>
            </div>
          </div>

          <div className="row titulo-sobre">
            <div className="col-12">
              <div className="title-trafego-organico">
                <h3>Mas, primeiro, vamos conhecer mais sobre a Transpalet...</h3>
              </div>
            </div>
          </div>

          <div className="row sobre">
            <div className="col-6 d-flex align-items-center">
              <div className="banner-empilhadeira">
                <Image src="/transpalet/trabalhador-operando-empilhadeira.png" width={669} height={513} alt="Transpalet" />
              </div>
            </div>
            <div className="sobre-transpalet col-6">
              <p>A <strong>Transpalet</strong> é uma empresa que trabalha exclusivamente com os equipamentos de movimentação de carga da marca Paletrans, uma das maiores representantes do mercado mundial. Fundada em 2014 por Leandro Prado, hoje em dia, ela conta com um extenso e variado estoque, com mais de <strong>2 mil itens</strong>, como empilhadeiras e transpaleteiras, além das peças de reposição.</p>
              <p>Portanto, a <strong>Transpalet</strong> se posiciona como uma empresa totalmente preparada para atender todas as demandas da logística de um negócio, desde o comércio até a logística dos produtos em termos de movimentação e armazenagem.</p>
              <p className="texto-destaque"> Apesar de estar há quase dez anos consolidada no mercado, a empresa ainda não tinha sua presença no mundo digital <strong>100% garantida</strong>. Por isso, eles apareceram com um grande desafio para a Nairuz: não só dar início a um <strong>e-commerce</strong> mais estruturado, como também fazer com que as oportunidades chegassem até o seu novo site.</p>
              <p>Então, após a implementação do novo e-commerce, a Transpalet decidiu investir no <strong>Marketing Digital</strong> com a Nairuz. Desde 2022, estamos trabalhando em parceria para atingir metas e conquistar objetivos. Com uma equipe especializada, a <strong>Nairuz</strong> conseguiu alcançar números <strong>impressionantes</strong> com a Transpalet.</p>
            </div>
          </div>

          <div className="row">
            <div className="col-12 img-grafico">
              <Image src="/transpalet/empresario-desenhar-grafico.png" width={1500} height={201} alt="Grafico" />
            </div>
          </div>

          <div className="row como-alavancou">
            <div className="col-6 d-flex align-items-center">
              <Image src="/transpalet/empreendedor.png" width={669} height={579} alt="Transpalet" />
            </div>
            <div className="sobre-transpalet col-6">
              <h4>Como a Nairuz alavancou os números da Transpalet?</h4>
              <p>Desde o momento em que a Transpalet começou os seus trabalhos de Marketing Digital com a Nairuz, obtivemos, juntos, números muito significativos para a empresa. Contando com a expertise das equipes de Inbound Marketing e Mídias Pagas, conseguimos não só aumentar o tráfego do site, como também fechar diversos negócios e vendas pelo e-commerce.</p>
              <p>Só no primeiro ano de atuação da Nairuz, o faturamento da Transpalet cresceu 18% em relação ao ano anterior de 2021. Assim, fechando o período com uma média mensal de R $560 mil por mês.</p>
              <p>Mas esse aumento do faturamento só foi possível por conta da chegada de leads qualificados no site. Isto é, por conta do trabalho feito pela nossa equipe, conseguimos garantir que uma boa parcela das oportunidades que chegavam até o e-commerce eram, de fato, pessoas querendo fechar negócio.</p>
              <p>Esse aumento constante no número de leads continuou ao longo de 2022, até que em 2023, tivemos um percentual impressionante, e que precisa de destaque: em Abril deste ano (2023), chegamos a bater a meta de oportunidades em 644%.</p>
            </div>
          </div>

          <div className="row d-flex justify-content-center">
            <div className="col-6 text-center d-flex flex-column">
              <p className="text-cta">Quer saber mais sobre a Transpalet e como a Nairuz promoveu o <strong>e-commerce</strong>  dessa marca? Então assista ao vídeo com o depoimento do nosso cliente!</p>

              <a className='text-cta-link' href="#link-para-depoimento">CLIQUE AQUI PARA ASSISTIR</a>

              <p className="text-cta">Então, quer fazer da sua empresa um <strong>case de sucesso</strong> da Nairuz? Entre em contato com os nossos consultores e garanta você também o futuro do seu negócio no mundo digital!</p>

              <div className="button-resultado-cta">
                <a href="#form-case-nova">QUERO SOLICITAR UM ORÇAMENTO</a>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12 d-flex justify-content-center">
              <p className="label-form text-center">Preencha os campos abaixo e receba um diagnóstico personalizado do seu negócio com um raio-x completo, repleto de insights estratégicos para impulsionar sua empresa.</p>
            </div>
          </div>

        </section>

        <section className="container" id="form-case-nova">
          <div className="row mb-5">
            <div className="col-12">
              <div className="formRd-tema case-covabra">
                <div role="main" id="formulario-case-covabra-9f569fed60a504ff45ae"></div>
              </div>
            </div>
          </div>
        </section>

        <NewsletterNz />
      </main>

      <Footergeral />


      <Script type="text/javascript" src="https://d335luupugsy2.cloudfront.net/js/rdstation-forms/stable/rdstation-forms.min.js"></Script>

      <Script src="https://code.jquery.com/jquery-3.6.0.min.js"
          strategy="beforeInteractive" />
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js" 
          strategy="beforeInteractive" />

        <Script id="show-bannerx" strategy="lazyOnload">
        {`
          if (window.RDStationForms) {
            new RDStationForms('formulario-case-covabra-9f569fed60a504ff45ae', 'UA-48773259-1').createForm();
          }

        `
        }
      </Script>
    </div>

    
  )
}