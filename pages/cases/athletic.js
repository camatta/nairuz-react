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
        <title>Descubra como a Athletic conseguiu um aumento de 105% em seu faturamento e 221% de tráfego em seu site</title>
        <meta name="description" content="Com estratégias de Marketing Full e um Design personalizado, a Athletic conseguiu atingir resultados expressivos dentro de 1 ano." />
        <meta property="og:image" content="https://nairuz.com.br/og-nairuz.png" />
				<meta property="og:image:type" content="image/png" />
				<meta property="og:image:width" content="600" />
				<meta property="og:image:height" content="400" />
        <meta property="og:description" content="Com estratégias de Marketing Full e um Design personalizado, a Athletic conseguiu atingir resultados expressivos dentro de 1 ano." />
				<meta property="og:site_name" content="Descubra como a Athletic conseguiu um aumento de 105% em seu faturamento e 221% de tráfego em seu site" />
				<meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.png" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css" integrity="sha512-tS3S5qG0BlhnQROyJXvNjeEM4UpMXHrQfTGmbQ1gKmelCxlSEBUaxhRBj/EFTzpbP4RVSrpEikbmdJobCvhE3g==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.min.css" integrity="sha512-sMXtMNL1zRzolHYKEujM2AqCLUR9F2C4/05cdbxjjLSRvMQIciEPCQZo++nk7go3BtSuK9kfa/s+a4f4i5pLkw==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,300&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"></link>
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
                  <h1>Descubra como a Athletic conseguiu um aumento de 105% em seu faturamento e 221% de tráfego em seu site</h1>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section style={{display: 'none'}} className="container-fluid" id="new-video-case">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="video-case">
                  <iframe width="850" height="500" src="" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="container case-athletic" id="conteudo-case-transpalet">
          <div className="row align-items-center justify-content-center">
            <div className="col-12 col-md-9">
              <div className="text-center mt-5 subtitle-page">
                <h4>Com estratégias de <span>Marketing Full</span> e um <span>Design personalizado</span>, a Athletic conseguiu atingir resultados expressivos dentro de 1 ano.</h4>
              </div>
            </div> 
          </div>

          <div className="row">
            <div className="col-6 d-flex align-items-center">
              <Image src="/novaident/cases/athletic/digitando.svg" width={539} height={386} alt="Athletic" />
            </div>
            <div className="resultados col-6">
              <p>O que inicialmente parecia um marco distante para a Athletic acabou se transformando em uma notável <strong>conquista</strong>, elevando a marca a um dos nossos cases de sucesso de mais relevância. O alcance de metas tão significativas não apenas representa uma conquista significativa para o cliente, mas também reflete o resultado de um notável esforço e comprometimento da Nairuz.</p>

              <p className="texto-destaque">Dentre os benefícios positivos provenientes dessa parceria o <strong>crescimento de 105,41%</strong> é um dos mais notáveis. Além disso, depois da aplicação de nossas estratégias, foi possível atingir um impressionante aumento de 221,15% no tráfego do site da empresa. E, apesar desses números já serem expressivos por si só, ficam ainda mais impressionantes, quando alcançados em apenas 1 ano de parceria</p>

              <p>É isso mesmo! Você não leu errado. Pode até parecer milagre, mas o Marketing Digital ainda não chegou lá. O que se nota aqui, é a eficiência de uma <strong>boa estratégia</strong> e, sobretudo, a capacitação de profissionais experientes.</p>

            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-12 col-md-8">
              <div className="text-center subtitle-page">
                <h4 className='mb-4'><span>Quer saber como transformar também os resultados do seu negócio?</span></h4>
                <p>Não há segredo nenhum! Afinal, estamos aqui para te ajudar a conquistar os seus sonhos, com profissionais capacitados e que, acima de tudo, amam o que fazem. Entre em contato com um de nossos consultores para receber uma avaliação personalizada!</p>
                <div className="btn-default-cta">
                  <a href="#form-case-nova">Fale com a gente!</a>
                </div>
              </div>
            </div>
          </div>

          <div className="row justify-content-center entenda-estrategias">
            <div className="col-12 col-md-8">
              <div className="text-center subtitle-page">
                <h4 className='mb-4'><span>Entenda quais estratégias usamos para alcançar esse sucesso</span></h4>
                <p>Quando abordamos o universo do marketing digital, diversas <strong>estratégias</strong> emergem como peças-chave para impulsionar os negócios. Cada uma dessas estratégias desempenha um papel fundamental na busca pelos objetivos desejados. A essência está em identificar quais estratégias melhor se adequam às necessidades específicas de cada empreendimento. E foi o que fizemos. Após uma análise minuciosa e personalizada, chegamos a conclusão de que a Athletic necessitava de 4 estratégias.</p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12 col-md-6">
              <div className="box-estrategias">
                <div className="icon-estrategias">
                  <Image src="/novaident/cases/athletic/seo.svg" width={66} height={66} alt='seo-icon' />
                </div>
                <h4>Seo</h4>
                <p>O principal propósito com o SEO era gerar tráfego orgânico, criando oportunidades de negócio. Investimos nessa estratégia, a partir da criação de conteúdos relevantes e de qualidade, para melhorar a visibilidade, aumentar o tráfego, construir confiança, elevar o a conversão e fortalecer a presença da marca em outros ambientes. Esses benefícios contribuíram significativamente para o <strong>crescimento das vendas</strong> e do faturamento da Athletic.</p>
              </div>
              <div className="box-estrategias">
                <div className="icon-estrategias">
                  <Image src="/novaident/cases/athletic/inbound.svg" width={66} height={66} alt='inbound-icon' />
                </div>
                <h4>Inbound Marketing</h4>
                <p>A intenção aqui era atrai potenciais leads, adaptando-se ao estágio de compra, facilitando a apresentação de soluções e buscando a fidelização. Como já tínhamos o Tráfego Pago e o SEO atraindo visitantes, precisávamos agora, como o Inbound Marketing, concentrarmos na conversão e retenção deles. Utilizamos, então, diversos formatos de conteúdo para nutri-los e gerar vendas. Essa simbiose, formada por essas três estratégias, constitui o que chamamos de <strong>Marketing Full Service</strong>.</p>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="box-estrategias">
                <div className="icon-estrategias">
                  <Image src="/novaident/cases/athletic/trafego-pago.svg" width={66} height={66} alt='trafego-pago-icon' />
                </div>
                <h4>Tráfego Pago</h4>
                <p>Colocamos também em prática o Tráfego Pago, que envolve a aquisição de usuários por meio de investimentos em mídias digitais, abrangendo anúncios em mídias sociais, portais, aplicativos e nos principais mecanismos de busca. Esses anúncios são exibidos para usuários que buscam resultados relacionados às palavras-chave adquiridas, proporcionando uma <strong>aceleração estratégica</strong> imediata para o SEO.</p>
              </div>
              <div className="box-estrategias ultima-box">
                <div className="icon-estrategias">
                  <Image src="/novaident/cases/athletic/design.svg" width={66} height={66} alt='design-icon' />
                </div>
                <h4>Design</h4>
                <p>E para finalizar o nosso plano de ação, de forma eficaz, temos o Design. Aqui, fazemos com que cada cliente tenha um design <strong>exclusivo para seu e-commerce</strong>, o que oferece vários benefícios para o um negócio, uma vez que a credibilidade da sua marca está intrinsecamente ligada a uma aparência confiável. Portanto, criamos um layout para o site da Athletic, que apresentasse uma estrutura organizada, sendo fundamental para impulsionar suas vendas no ambiente online.</p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12 d-flex justify-content-center">
              <p className="w-75 text-center">Ficou curioso e quer saber como anda o marketing digital da sua empresa? Então Preencha os campos abaixo e receba um diagnóstico personalizado do seu negócio com um raio-x completo, repleto de insights estratégicos para impulsionar sua empresa.</p>
            </div>
          </div>

        </section>

        <section className="container" id="form-case-nova">
          <div className="row mb-5">
            <div className="col-12">
              <div className="formRd-tema case-athletic">
                <div role="main" id="formulario-case-athletic-2de4006b327ff2699e17"></div>
              </div>
            </div>
          </div>
        </section>

        <section className="container case-athletic">
          <div className="row como-tornou-destaque">
            <h4>Case Athletic: como se tornou um destaque?</h4>
            <div className="col-12 col-md-6">
              <div className="imagem-site">
                <Image src="/novaident/cases/athletic/tablet.svg" width={427} height={336} alt='tablet-athletic' />
              </div>
              <p>Os resultados obtidos foram notáveis, como prevíamos. Houve um aumento significativo na receita da Athletic, atingindo a marca dos tão almejados seis dígitos. O tráfego do site experimentou um impressionante crescimento de 221,15%, evidenciando a eficácia das estratégias implementadas. Além disso, as vendas e a receita registraram um <strong>crescimento excepcional de 105,41%</strong>, consolidando a posição da Athletic como líder incontestável no seu segmento.</p>
            </div>
            <div className="col-12 col-md-6">
              <p>A empresa Athletic, líder no mercado de equipamentos fitness na América Latina com mais de três décadas de experiência em oferecer soluções inovadoras para entusiastas de atividades físicas, enfrentou desafios significativos em sua busca por crescimento sustentável. Consciente das constantes mudanças no mercado e das crescentes expectativas dos consumidores, a empresa percebeu a <strong>necessidade de reinventar</strong> suas estratégias de marketing e presença online.</p>
              <p>Foi nesse contexto que a Athletic decidiu estabelecer uma parceria estratégica com a Nairuz, reconhecida pela sua especialização em Marketing e Tecnologia, habilidade em estratégias digitais e histórico comprovado em impulsionar o sucesso dos clientes. O desafio era claro: elevar a posição da Athletic, aumentar sua receita e ampliar significativamente seu tráfego online. Assim sendo, implementamos uma abordagem completa, desenvolvendo <strong>estratégias abrangentes</strong> em todos os canais digitais disponíveis, como a mencionamos anteriormente.</p>
              <p>O case da Athletic destaca como uma abordagem estratégica e integrada ao marketing digital pode superar desafios e impulsionar resultados significativos. Nossa bem-sucedida parceria não apenas aumentou a visibilidade da marca, mas também teve um impacto direto no desempenho financeiro da empresa, solidificando sua posição como líder no setor de equipamentos fitness na América Latina. Por isso, é mais um exemplo de <strong>sucesso</strong>!</p>
            </div>
          </div>
          <div className="row text-center subtitle-page">
            <h4 className='mb-4'>Conte com a Nairuz para <span>impulsionar seus resultados</span></h4>
            <p>A Nairuz é a sua parceira estratégica em busca do sucesso. Com uma abordagem inovadora e soluções personalizadas, estamos aqui para potencializar os seus resultados e elevar o desempenho do seu negócio. Seja qual for o seu desafio, oferecemos conhecimento do mercado, proporcionando visibilidade, engajamento e crescimento. Conte conosco para <strong>transformar metas em conquistas</strong>, impulsionando o seu caminho para o sucesso!</p>
            <div className="btn-default-cta">
              <a href="#form-case-nova">Entre em contato conosco</a>
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
            new RDStationForms('formulario-case-athletic-2de4006b327ff2699e17', 'UA-48773259-1').createForm();
          }

        `
        }
      </Script>
    </div>

    
  )
}