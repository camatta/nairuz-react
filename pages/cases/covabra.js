import Head from 'next/head'
import Image from 'next/image'
import Headergeral from '../../components/Headergeral'
import HeaderMob from '../../components/HeaderMob'
import Footergeral from '../../components/Footergeral'
import NewsletterNz from '../../components/NewsletterNz'
import Script from 'next/script'


export default function NovaMedicamentos2() {
  return (
    <div className="page-cases page-case-novamed case-covabra">
      <Head>
        <title>Nairuz - Case Covabra</title>
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
                  <h1>Como o Covabra cresceu 92% em faturamento e 127% em acessos orgânicos em menos de um ano</h1>
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
                  <iframe width="850" height="500" src="https://www.youtube.com/embed/RgcEgNTjTLg" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="container" id="conteudo-case-nova">
          <div className="row">
            <div className="col-12">
              <div className="resultado-cta">
                <div className="title-resultado-cta case-covabra">
                  <h2>Descubra como um layout personalizado pode garantir o sucesso da sua loja virtual</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-5">
              <div className="img-estudo-case">
                <Image src="/covabra/case-covabra.png" width={669} height={620} alt="Supermercados Covabra" />
              </div>
            </div>
            <div className="col-12 col-md-7">
              <div className="text-estudo-case case-covabra">
                <p>Já pensou em <span>aumentar 127%</span> as visitas em seu supermercado e sem gastar com outdoors, folhetos e até anúncios online? O <span>Covabra Supermercados</span> alcançou essa marca em menos de um ano.</p>
                <p>E o segredo? Investimento em estratégias de SEO e geração de conteúdo qualificado. E paralelamente ao aumento de tráfego orgânico, a loja online conquistou como resultado um <span>crescimento de 92%</span> no faturamento nesse mesmo período.</p>
                <p>Surpreso? Nós não estamos nenhum pouco! Afinal, ainda que o marketing digital não seja uma receita de bolo pronta e que funcione para todas as marcas e segmentos de mercado da mesma forma, os resultados de uma estratégia de SEO bem pensada e aplicada sempre traz bons resultados.</p>
                <p>A verdade é que não existe segredo: basta conhecer o seu próprio negócio e contar com o apoio de uma equipe de especialistas. E nós estamos aqui para te ajudar!</p>
                <p>E se você topar investir em anúncios para aumentar ainda mais o seu faturamento e tornar sua marca reconhecida no mercado e referência em sua área de atuação, você também pode, assim com o Covabra, obter um <span>ROAS maior que 1.100%</span> em campanhas pagas em apenas 8 meses de operação.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="resultado-cta">
                <div className="title-resultado-cta">
                  <h2>Você sabia que esse também pode ser o resultado do seu negócio?</h2>
                </div>
                <div className="text-resultado-cta">
                  <p>Ficou curioso para saber o passo a passo de um planejamento eficiente e que entrega resultados como esses? Então entra em contato com nossa equipe de marketing estratégico de performance e solicite uma avaliação personalizada!</p>
                </div>
                <div className="button-resultado-cta">
                  <a href="#form-case-nova">FALE COM UM CONSULTOR</a>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="title-trafego-organico">
                <h3>Saiba como o SEO e o tráfego pago podem impulsionar o seu negócio e aumentar seu faturamento mensal</h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-6">
              <div className="text-seo-trafego">
                <div className="icon-card-seo">
                  <Image src="/covabra/icon-seo.png" width={80} height={80} alt="Supermercados Covabra" />
                </div>
                <p>Consideramos <span>tráfego orgânico</span> todo acesso ao site que não veio de uma mídia paga, ou seja, não houve investimento financeiro ou custos por clique do usuário. Isso significa que o seu usuário chegou até a sua marca atraído por algum conteúdo textual ou outro tipo de material disponível na web e que despertou seu interesse de alguma forma, seja no blog ou nas mídias sociais.</p>
                <p>Por isso, é <span>fundamental</span> gerar, publicar e divulgar conteúdos de qualidade e que conversem diretamente com o seu <span>público-alvo</span>, respondendo às dúvidas mais frequentes em relação a determinado assunto ou oferecendo a <span>solução</span> para um problema recorrente. Entretanto, para que seu conteúdo tenha visibilidade e seja encontrado pelo seu usuário, é preciso investir também em estratégias de <span>SEO</span> que garantam que suas páginas sejam ranqueadas nos resultados de busca dos mais variados mecanismos e que ocupem as primeiras posições.</p>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="text-seo-trafego">
                <div className="icon-card-seo">
                  <Image src="/covabra/icon-seo.png" width={80} height={80} alt="Supermercados Covabra" />
                </div>
                <p>Já o <span>tráfego pago</span> consiste na aquisição dos usuários por meio de mídias digitais, desde investimentos em anúncios em mídias sociais, portais e aplicativos, até os mecanismos de busca mais populares. Todos os anúncios são exibidos àqueles que pesquisam resultados de busca relacionados às palavras-chave <span>adquiridas</span>. Por isso, ter um planejamento bem definido de palavras-chave relevantes para o seu negócio ou produto é tão importante! </p>
                <p>Ambas as <span>estratégias</span> são muito eficientes na geração de resultados, mas enquanto os anúncios são imediatos, o ranqueamento das <span>palavras-chave</span> de forma orgânica podem levar um tempo um pouco maior. Qual é a diferença? Os anúncios demandam investimento financeiro, mas as palavras ranqueadas organicamente não geram custos de aquisição.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="banner-full-nova">
                <Image src="/covabra/seo-covabra.png" width={1500} height={380} alt="Supermercados Covabra" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="title-numeros-nova case-covabra">
                <h4>Se você estiver se perguntando agora qual dessas opções é melhor para o seu plano de negócios, a reposta é: <span>depende.</span></h4>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="wrapper-resultados">
                <div className="resultado-destaque-nova mt-0">
                  <div className="img-resultado-destaque">
                    <Image src="/novamed/icon-resultados.svg" width={117} height={117} alt="Resultados" />
                  </div>
                  <div className="text-resultado-destaque">
                    <p><span>A decisão</span> varia de acordo com os objetivos da sua <span>marca</span> ou <span>empresa</span>, em quanto tempo você espera alcançá-los, se você conta com uma <span>equipe especializada</span> e qualificada para a operação e aplicação das estratégias e como anda a saúde financeira do seu negócio.</p>
                  </div>
                </div>
                <div className="text-after-result">
                  <p>Preencha os campos abaixo e receba um diagnóstico personalizado do seu negócio com um raio-x completo, repleto de insights estratégicos para impulsionar sua empresa.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="container" id="form-case-nova">
          <div className="row mb-5">
            <div className="col-12">
              <div className="formRd-tema case-covabra">
                <div role="main" id="pagina-de-case-covabra-08044671e4a6652a6bde"></div>
              </div>
            </div>
          </div>
        </section>

        <section className="container-fluid" id="after-case-covabra">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="title-estudo-case">
                  <h3>Estudo de caso - conheça o case Covabra Supermercados</h3>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-md-5">
                <div className="img-estudo-case">
                  <Image src="/covabra/estudo-case-covabra.png" width={580} height={679} alt="Nova Medicamentos" />
                </div>
              </div>
              <div className="col-12 col-md-7">
                <div className="text-estudo-case">
                  <p>O <span>Covabra</span> é uma rede de supermercados localizada no interior de São Paulo, presente em 11 cidades da região metropolitana de Campinas, e que conta com mais de 30 anos de história e experiência no melhor atendimento e oferta de produtos de alta qualidade. Reconhecido pela sua organização, variedade de produtos e entrega rápida e segura, o <span>Covabra</span> continua a crescer ano a ano e a expandir seus negócios e, desde 2020, temos a honra de tê-los entre nossos clientes.</p>
                  <p>A história dessa parceria começou quando o <span>Covabra</span> ainda dava seus primeiros passos no ambiente digital, com sua nova loja online. Apesar de ser uma marca uma conhecida e já consolidada no mercado, o e-commerce ainda não era muito divulgado e sua estrutura era mais simples e pouco trabalhada.</p>
                  <p className="text-destaque">
                  Com o objetivo (e desafio) de fazer com que a excelência da loja física fosse experimentada também na loja online, a marca precisava pensar em novas <span>soluções e estratégias</span>, desde uma plataforma de e-commerce mais robusta e com mais funcionalidades, até o planejamento das ações de marketing com foco na performance e nos resultados.
                  </p>
                  <p>Para isso, a rede de supermercados decidiu contar com o apoio de uma agência especializada, que pudesse prestar suporte em todas as etapas do desenvolvimento do novo projeto. A Nairuz surgiu neste momento decisivo e teve como vantagem competitiva, sobre as demais agências, o <span>atendimento rápido e personalizado</span>, a expertise em soluções práticas e a possibilidade de centralizar as duas frentes em um único lugar: uma agência especializada em tecnologia e marketing digital de performance.</p>
                  <p className="bold-estudo-case">O primeiro contato, que deveria ser exclusivamente técnico, evoluiu para o acompanhamento também das estratégias de aquisição de tráfego pago (mídias pagas) e SEO.</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="resultado-cta">
                  <div className="title-resultado-cta">
                    <h2>Conte com a Nairuz para aumentar o tráfego do seu site</h2>
                  </div>
                  <div className="text-resultado-cta">
                    <p>Somos verdadeiros <span>especialistas em SEO</span> e estratégias para mídias pagas. Acompanhamos todas as etapas do planejamento com estudos de mercado, planejamento de palavras-chave e produção de conteúdo qualificado.</p>
                  </div>
                  <div className="button-resultado-cta">
                    <a href="#form-case-nova">ENTRE EM CONTATO CONOSCO</a>
                  </div>
                </div>
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
            new RDStationForms('pagina-de-case-covabra-08044671e4a6652a6bde', 'UA-48773259-1').createForm();
          }

        `
        }
      </Script>
    </div>

    
  )
}
