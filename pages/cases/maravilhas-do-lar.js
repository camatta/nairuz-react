import Head from 'next/head'
import Image from 'next/image'
import Headergeral from '../../components/Headergeral'
import HeaderMob from '../../components/HeaderMob'
import Footergeral from '../../components/Footergeral'
import NewsletterNz from '../../components/NewsletterNz'
import Script from 'next/script'


export default function NovaMedicamentos2() {
  return (
    <div className="page-cases page-case-novamed case-maravilhas">
      <Head>
        <title>Nairuz - Maravilhas do Lar</title>
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
                <div className="title-case titulo-maravilhas">
                  <h1>Tráfego pago ajudou a Maravilhas do Lar faturar R$ 2 milhões no último semestre de 2022</h1>
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
                  <iframe width="850" height="500" src="https://www.youtube.com/embed/EEkEZIJ8FX4" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="container" id="conteudo-case-maravilhas">
          <div className="row justify-content-center titulo-sobre">
            <div className="col-12 col-md-8">
              <div className="text-center">
                <h4>Investir em tráfego pago é um dos maiores aliados dos e-commerce hoje em dia, não importa o momento em que estão.</h4>
                <p>Se ainda estão na fase de consolidação, essa é uma alternativa para aumentar a visibilidade da marca e gerar mais oportunidades de vendas; marcas já consolidadas no mercado podem aproveitar essa forma de divulgação para promover condições especiais, lançamentos etc., e também se destacar entre os seus concorrentes.</p>
              </div>
            </div>
          </div>

          <div className="row">
              <div className="col-12 d-flex justify-content-center">
                <div className="bg-text box-1 col-12 col-md-8 text-center d-flex flex-column justify-content-center align-items-center">
                  <p>Essa foi a estratégia adotada pela <strong>Maravilhas do Lar em parceria com Nairuz</strong> para trazer mais visitantes para o seu site e, consequentemente, aumentar suas vendas e melhorar a sua presença online. Temos diversos artigos no blog falando sobre a <strong>importância de investir em mídias pagas</strong>, mas hoje, vamos trazer na prática para vocês como investir em <strong>marketing digital é a melhor opção para o seu negócio!</strong></p>
                  <h5>Confira mais esse case de sucesso da Maravilhas do Lar!</h5>
                </div>
              </div>
          </div>

          <div className="row">
              <div className="col-12">
                <div className="title-trafego-organico">
                  <h3>Conheça mais sobre a Maravilhas do Lar</h3>
                </div>
              </div>
          </div>

          <div className="row container-sobre-maravilhas">
              <div className="box-img col-6 d-flex align-items-center">
                <div className="banner-computador">
                  <Image src="/maravilhas/computador.png" width={888} height={666} alt="Maravilhas" />
                  <div className="bg-computador"></div>
                </div>
              </div>
              <div className="sobre-maravilhas col-6">
                <p>Decerto que se você mora no interior do estado de São Paulo, já conhece uma loja física da <strong>Maravilhas do Lar</strong>, pois são mais de 30 lojas espalhadas pelo interior paulista. Mas você sabia, também, que essa loja de itens de utilidade doméstica está no ambiente online?</p>

                <p className="bg-text box-2">Sim, a Maravilha do Lar possui um e-commerce em uma plataforma de um dos nossos parceiros, a <strong>Linx Commerce</strong>. Além disso, lá você pode encontrar todos os artigos necessários para o seu dia a dia, desde utensílios domésticos até o setor de papelaria, limpeza e organização.</p>

                <p>Fundada em 2003, em Jundiaí, interior de São Paulo, a Maravilhas do Lar traz em sua essência a preocupação com a experiência de compra dos clientes. Por isso, em sem <strong>e-commerce</strong>, não poderia ser diferente. Entrando no site, você já pode ver todas as categorias disponíveis e também as principais promoções do dia.</p>
                  
                <p>Isso facilita, e muito, a navegação do usuário que vem através dos anúncios pagos feitos no Google. Dessa forma <strong>facilitando a conversão desse lead.</strong></p>
              </div>
          </div>

          <div className="row">
              <div className="col-12">
                <div className="titulo-parceria">
                  <h3>Como foi a parceria da Nairuz com a Maravilhas do Lar?</h3>
                </div>
              </div>
          </div>

          <div className="row container-parceria-nairuz">
              <div className="col-6 d-flex align-items-center">
                <Image src="/maravilhas/empresarios-apertando-as-maos.png" width={714} height={438} alt="Maravilhas" />
              </div>
              <div className="sobre-maravilhas col-6">
                <p>Assim como diversas grandes marcas com as quais a <strong>Nairuz</strong> já atuou, a Maravilhas do Lar percebeu a necessidade de adaptar as mudanças que estão acontecendo no mercado; somente ter um bom <strong>e-commerce</strong> não é o suficiente para aumentar o tráfego no seu site. Ainda que o também se invista em um bom trabalho de <strong>SEO</strong>, esse retorno pode levar meses para acontecer.</p>

                <p className="bg-text box-2">Por isso, para uma <strong>solução rápida e assertiva</strong>, investir em mídias pagas é o próximo passo para fazer com que o seu negócio cresça no mundo digital. No entanto, para que os anúncios pagos sejam efetivos, é preciso saber como montar essas campanhas e fazer a distribuição de verba.</p>

                <p>Em parceria com a <strong>Nairuz</strong>, a <strong>Maravilhas do Lar encontrou exatamente o que precisava:</strong> uma equipe profissionalizada e especializada em anúncios pagos no Google, canal foco das suas ações da marca. Eles tinham as campanhas e a verba para investir no <strong>Google Ads</strong>, mas não possuíam a mão-de-obra qualificada para fazer com que esses anúncios dessem certo.</p>
              </div>
          </div>

          <div className="row">
              <div className="col-12 img-grafico">
                <Image src="/maravilhas/crm-sistema.png" width={1500} height={423} alt="Maravilhas" />
              </div>
          </div>

          <div className="estrategias row d-flex justify-content-center">
            <div className="texto-destaque col-12 col-md-9 text-center d-flex flex-column">
              <p>Foi assim, que a Nairuz entrou em ação e forneceu o profissional especializado que estava faltando para dar início às estratégias.</p>

              <p>Entre as <strong>principais estratégias</strong> implementadas pela agência, podemos destacar:</p>
            </div>
          </div>

          <div className="bd-bottom row">
              <div className="col-12 d-flex justify-content-center">
                <div className="bg-text box-3 d-flex gap-3 justify-content-center align-items-center">
                  <ul className='lista col-6'>
                    <li>Campanhas voltadas para tráfego e conversão: criação de campanhas, testes, otimização, e mudança de estratégias e lances para atingir o objetivo final;</li>
                    <li>Revisão palavras-chave e termos de pesquisa;</li>
                    <li>Teste de criação de grupo com itens mais vendidos registrado no Analytics;</li>
                    <li>Aplicação da Estratégia de Lance: ajuste de lances nos públicos com maiores taxas de conversão, locais e programação de dias;</li>
                    <li>Correção de extensões de sitelinks reprovados;</li>
                    <li>Remoção de categorias com 0 ou baixo retorno de investimento, focado no resultado de ROAS;</li>
                    <li>Definição de meta da campanha de vendas.</li>
                  </ul>
                  <ul className='lista col-6'>
                    <li>Revisar termos de pesquisa desqualificados fazendo a negativação;</li>
                    <li>Adicionar termos de pesquisa qualificados e com altas taxas de conversão;</li>
                    <li>Pausar palavras-chave não qualificadas com baixo índice de qualidade que afetam o retorno, assim como remover palavras-chave redundantes;</li>
                    <li>Adicionar públicos-alvo para gerar relatórios;</li>
                    <li>Melhorar os títulos e descrições dos anúncios para aumentar a CTR;</li>
                    <li>Definição de objetivo de marketing de vendas nas configurações;</li>
                    <li>Upgrade das suas campanhas inteligentes do Shopping para Performance Max;</li>
                    <li>Correção de produtos reprovados no merchant.</li>
                  </ul>
                </div>
              </div>
          </div>

          <div className="row d-flex justify-content-center">
            <div className="texto-destaque col-12 col-md-9 text-center d-flex flex-column">
              <p><span>A partir da implementação dessas estratégias, houve um <strong>crescimento</strong> não só na geração de tráfego qualificado, como também nas conversões no <strong>e-commerce</strong>.</span></p>

              <p className='texto-black'>Veja só os números:</p>
            </div>
          </div>

          <div className="crescimento bd-bottom row d-flex justify-content-center align-items-center">
              <div className="bg-text box-4 col-9 d-flex gap-4 justify-content-center align-items-center">
                  <div className='col-6 col-md-3 d-flex justify-content-center align-items-center'>
                    <Image src="/novaident/cases/maravilhas/indicativos.svg" width={119} height={119} />
                  </div>
                  <ul className='lista col-6 col-md-9 d-flex flex-column'>
                    <li><strong>20% no aumento</strong> de transações;</li>
                    <li><strong>9% de aumento</strong> em tráfego pago;</li>
                    <li><strong>Aumento de 44% na receita</strong> já nos 6 primeiros meses de projeto;</li>
                    <li><strong>Mais de 46% de aumento</strong> no número de transações médio mensal;</li>
                    <li><strong>Aumento de mais de 12% no tráfego</strong>, sem alterações da verba média;</li>
                    <li><strong>Crescimento de aproximadamente 25%</strong> em receita no último semestre (2022);</li>
                  </ul>
              </div>
          </div>

          <div className="row texto-cta d-flex justify-content-center">
            <div className="col-8 text-center d-flex flex-column">
              <p>Enfim, para saber mais sobre a nossa parceria com a <strong>Maravilhas do Lar</strong>, veja o vídeo com o depoimento de Paulo Savietto, gerente de <strong>e-commerce</strong> da marca!</p>

              <p>Quer ser mais um de nossos <strong>cases de sucesso?</strong> Entre em contato com a nossa equipe comercial e agende um horário com os nossos consultores!</p>

              <div className="button-resultado-cta">
                <a href="#form-case-nova">Quero solicitar um orçamento</a>
              </div>
            </div>
          </div>
          
        </section>

        <section className="container" id="form-case-nova">
          <div className="row mb-5">
            <div className="col-12">
              <div className="formRd-tema case-covabra">
                <div role="main" id="formulario-case-maravilhas-do-lar-96d3eb667c8b892f99ce"></div>
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