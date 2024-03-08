import Head from 'next/head'
import Image from 'next/image'
import Headergeral from '../../components/Headergeral'
import HeaderMob from '../../components/HeaderMob'
import Footergeral from '../../components/Footergeral'
import BehanceNz from '../../components/BehanceNz'
import NewsletterNz from '../../components/NewsletterNz'
import CarrosselCases from '../../components/CarrosselCases'
import Script from 'next/script'

export default function Minassal() {
  return (
    <div className="page-cases page-case-minassal">
      <Head>
        <title>Minassal aumentou base de leads com Marketing B2B: Descubra!</title>
        <meta name="description" content="Conheça o case de sucesso Minassal: como a Nairuz auxiliou essa grande distribuidora no caminho para entrar no mundo digital!" />
        <meta property="og:image" content="https://nairuz.com.br/og-nairuz.png" />
				<meta property="og:image:type" content="image/png" />
				<meta property="og:image:width" content="600" />
				<meta property="og:image:height" content="400" />
        <meta property="og:description" content="Conheça o case de sucesso Minassal: como a Nairuz auxiliou essa grande distribuidora no caminho para entrar no mundo digital!" />
				<meta property="og:site_name" content="Minassal aumentou base de leads com Marketing B2B: Descubra!" />
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
                <h3>Case de sucesso Minassal:<br></br>quem é essa empresa?</h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-6">
              <div className="text-main-case">
                <p>Atuando no mercado há 35 anos, a Minassal é uma grande distribuidora especializada no país.</p>
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
        <section className="container" id="banner-minassal">
          <div className="row">
            <div className="col-12">
              <div className="banner-minassal text-center">
                <Image src="/cases/img-minassal.png" width={1565} height={622} />
              </div>
            </div>
          </div>
        </section>
        <section className="container" id="main-xcase">
          <div className="row">
            <div className="col-12">
              <div className="post-minassal">
                <div className="title-post">
                  <h3>Abordagem ao cliente</h3>
                </div>
                <div className="post-content">
                  <p>A fim de auxiliá-los na jornada de sucesso digital, a Nairuz fez um trabalho de avaliação do cliente para poder oferecer as <span>melhores soluções</span> para o seu negócio.</p>
                  <p>A princípio, quando chegamos até a Minassal, nós identificamos que eles eram uma empresa de grande porte, com grande potencial digital. Entretanto, eles não conseguiam transmitir essa ideia com tanta solidez no seu site. A marca não conseguia representar toda sua <span>experiência e eficiência</span> no online.</p>
                  <p>É importante destacar aqui, o quanto o layout do site de uma empresa é importante, uma vez que ele será a cara da sua empresa no mundo digital. Portanto, é fundamental que ele passe a mensagem certa sobre o seu negócio.</p>
                  <p>Por isso que o principal trabalho, no início, foi nos debruçar sobre a <span>imagem da Minassal</span>. De acordo com Valéria Queiroz, diretora comercial da Nairuz, “o nosso trabalho foi trazer para o digital o que eles tinham no físico. Uma empresa extremamente tradicional e reconhecida”.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-6">
              <div className="post-content">
                <div className="title-post">
                  <h4>Criação do site</h4>
                </div>
                <div className="post-content">
                  <p>A nossa equipe de UX e Desenvolvimento utilizou a tecnologia WordPress para a criação do site da Minassal. Entretanto, foi um projeto exclusivo, que levou em consideração a <span>experiência do usuário</span> alinhada aos objetivos do cliente, sempre buscando um alto resultado na indexação das páginas e no trabalho de SEO. Além disso, eles montaram uma estrutura baseada em um tema Trucking (WordPress) que, neste caso, era a referência do cliente.</p>
                  <p>Dessa forma, a equipe de design recriou todas as telas levando em consideração a estrutura solicitada. Mas adequando toda a identidade visual da marca Minassal.</p>
                  <p>Além do blog, que também foi integrado ao site, um pedido específico do cliente era uma integração com o Maps do Google, mostrando ao usuário toda a área de atuação da empresa.</p>
                </div>
                <div className="title-post">
                  <h4>Blog</h4>
                </div>
                <div className="post-content">
                  <p>Como mencionamos, a equipe de desenvolvimento incorporou um blog ao site da Minassal. Com postagens semanais, o blog da Minassal não só promove uma maior autoridade à marca, como também ajuda os clientes que ainda não estão no momento da compra.</p>
                  <p>Os conteúdos, que são preparados para cada etapa do funil, buscam <span>educar os leads</span> até que eles estejam preparados para fechar negócio com a Minassal. Por isso, o blog é uma grande estratégia de Inbound Marketing. No último mês de abril, o blog da Minassal teve um aumento de 100% de acessos. Tal resultado só foi possível devido ao trabalho em equipe.</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="post-content">
                <div className="title-post">
                  <h4>Trabalho de Marketing</h4>
                </div>
                <div className="post-content">
                  <p>Após o trabalho com o site, a Minassal decidiu deixar os trabalhos de Marketing Digital nas mãos da Nairuz também. Assim, a nossa equipe passou a ficar responsável pelo Inbound Marketing, redes sociais e os conteúdos produzidos no blog.</p>
                </div>
                <div className="title-post">
                  <h4>E-mail marketing</h4>
                </div>
                <div className="post-content">
                  <p>Houveram várias mudanças na parte dos e-mails desde então. Antes, a taxa de abertura de e-mails representava uma média de 6,51%. Porém, após algumas alterações em questões como linguagem (trocamos a linguagem comercial padrão para uma mais amigável e próxima), trouxemos os fluxos, headers animados, uso de variáveis no assunto. Além disso, passamos a fazer disparos de dicas, tanto direcionados aos consumidores finais quanto ao público interno.</p>
                  <p>Todas essas mudanças na linguagem e no conteúdo dos e-mails, fizeram com o relacionamento com os clientes melhorassem. Isso se prova com <span>taxa de abertura</span> que <span>aumentou para 57,79%</span>; e ainda, a taxa de clique aumentou 64,58%. Esses números são análises do segundo semestre de 2020.</p>
                </div>
                <div className="title-post">
                  <h4>Redes sociais</h4>
                </div>
                <div className="post-content">
                  <p>Antes da Nairuz, a Minassal não tinha presença nas redes sociais. Então, em outubro de 2020 nós demos início às postagens, com estratégias como, por exemplo: frequência nos stories, reposts de marcas parceiras e vídeos dos colaboradores que geram bastante engajamento para a marca.</p>
                  <p>Embora as redes sociais da Minassal não possuírem muitos seguidores, queremos destacar que esse não é o nosso foco no momento. Nosso principal objetivo é levar mais leads para o site, dessa forma, aumentando as chances de conversão.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="container-fluid" id="full-minassall">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="img-logo-minassal text-center">
                  <Image src="/cases/logo-minassal.png" width={229} height={154} />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="container">
          <div className="row">
            <div className="col-12">
              <div className="outros-cases post-content">
                <p>Enfim, é assim que a Minassal vem crescendo a cada ano que passa; mesmo sendo uma marca tradicional e com anos no mercado, ela precisou se adaptar ao novo mundo que está se tornando cada vez mais virtual. Para que assim, suas oportunidades nunca parem de crescer.</p>
                <p>Leia também: <a href="#">Case de sucesso de layout de e-commerce: Mammy Gestante</a></p>
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
            new RDStationForms('formulario-case-bonecario-0c8124a798e6d980d81c', 'UA-48773259-1').createForm();
          }

        `
        }
      </Script>
    </div>
  )
}
