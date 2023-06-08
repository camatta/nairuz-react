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
                <div className="title-resultado-cta">
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
              <div className="text-estudo-case">
                <p>Já pensou em <span>aumentar 127%</span> as visitas em seu supermercado e sem gastar com outdoors, folhetos e até anúncios online? O <span>Covabra Supermercados</span> alcançou essa marca em menos de um ano.</p>
                <p>E o segredo? Investimento em estratégias de SEO e geração de conteúdo qualificado. E paralelamente ao aumento de tráfego orgânico, a loja online conquistou como resultado um <span>crescimento de 92%</span> no faturamento nesse mesmo período.</p>
                <p>Surpreso? Nós não estamos nenhum pouco! Afinal, ainda que o marketing digital não seja uma receita de bolo pronta e que funcione para todas as marcas e segmentos de mercado da mesma forma, os resultados de uma estratégia de SEO bem pensada e aplicada sempre traz bons resultados.</p>
                <p>A verdade é que não existe segredo: basta conhecer o seu próprio negócio e contar com o apoio de uma equipe de especialistas. E nós estamos aqui para te ajudar!</p>
                <p>E se você topar investir em anúncios para aumentar ainda mais o seu faturamento e tornar sua marca reconhecida no mercado e referência em sua área de atuação, você também pode, assim com o Covabra, obter um ROAS maior que 1.100% em campanhas pagas em apenas 8 meses de operação.</p>
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
                <p>Por isso, é <span>fundamental</span> gerar, publicar e divulgar conteúdos de qualidade e que conversem diretamente com o seu público-alvo, respondendo às dúvidas mais frequentes em relação a determinado assunto ou oferecendo a solução para um problema recorrente. Entretanto, para que seu conteúdo tenha visibilidade e seja encontrado pelo seu usuário, é preciso investir também em estratégias de SEO que garantam que suas páginas sejam ranqueadas nos resultados de busca dos mais variados mecanismos e que ocupem as primeiras posições.</p>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="text-seo-trafego">
                <div className="icon-card-seo">
                  <Image src="/covabra/icon-seo.png" width={80} height={80} alt="Supermercados Covabra" />
                </div>
                <p>Já o tráfego pago consiste na aquisição dos usuários por meio de mídias digitais, desde investimentos em anúncios em mídias sociais, portais e aplicativos, até os mecanismos de busca mais populares. Todos os anúncios são exibidos àqueles que pesquisam resultados de busca relacionados às palavras-chave adquiridas. Por isso, ter um planejamento bem definido de palavras-chave relevantes para o seu negócio ou produto é tão importante! </p>
                <p>Ambas as estratégias são muito eficientes na geração de resultados, mas enquanto os anúncios são imediatos, o ranqueamento das palavras-chave de forma orgânica podem levar um tempo um pouco maior. Qual é a diferença? Os anúncios demandam investimento financeiro, mas as palavras ranqueadas organicamente não geram custos de aquisição.</p>
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
              <div className="title-numeros-nova">
                <h4>Vamos falar de números?</h4>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-6">
              <div className="text-numeros-nova">
                <p>Quando falamos sobre como <span>aumentar o tráfego orgânico de um site</span>, precisamos falar sobre números e métricas. Isso porque é preciso conhecer o cenário atual da empresa, os dados disponíveis de mercado e ter em mente exatamente onde se quer chegar.</p>
                <p>Caso contrário, não é possível mensurar com assertividade todos os resultados e entender se a meta foi alcançada ou se o resultado foi satisfatório. Para isso, você pode contar com o suporte de uma equipe de consultoria em marketing digital, responsável por fazer um verdadeiro raio-x da sua empresa e te direcionar em relação às melhores decisões.</p>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="text-numeros-nova">
                <p>Quando a Nova Medicamentos entrou em contato com a Nairuz, a marca ainda dava seus primeiros passos no universo digital. Seu e-commerce era razoavelmente recente e era necessário, junto às estratégias de SEO e Inbound Marketing, <span>desenvolver um plano de introdução e fortalecimento de marca no mercado</span>.</p>
                <p>Era então o momento de unir forças! A equipe Nova Medicamentos, especialista no produto e com um conhecimento profundo sobre seu público-alvo, trabalhou lado a lado com a equipe Nairuz, especialista em estratégias de performance em marketing digital e planejamento.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="resultado-destaque-nova">
                <div className="img-resultado-destaque">
                  <Image src="/novamed/icon-resultados.svg" width={117} height={117} alt="Resultados" />
                </div>
                <div className="text-resultado-destaque">
                  <p>O resultado não poderia ser melhor: em apenas um ano, a Nova Medicamentos apresentou crescimento de mais de <span>5.297,84%</span> em tráfego orgânico, além de ser essa a <span>origem de mais de 32% de todas as vendas realizadas</span>.</p>
                </div>
              </div>
              <div className="text-after-result">
                <p>É preciso lembrar aqui que estamos falando, exclusivamente, de tráfego e vendas orgânicas de uma marca ainda em sua fase de introdução no mercado. Simultaneamente às estratégias de SEO, nossa equipe iniciou uma série de novas estratégias alinhadas aos objetivos e metas do cliente, que tornaram a Nova Medicamentos <span>uma marca consolidada</span>.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="title-numeros-nova">
                <h4>Crescimento que não para</h4>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-6">
              <div className="text-numeros-nova">
                <p>Mesmo após três anos do início de sua parceria com nossa equipe, a Nova Medicamentos segue em crescimento contínuo. Com novos produtos em seu portfólio e seus valores intrínsecos, que não se alteram com o passar do tempo e servem como base para o melhor atendimento e entrega, <span>as metas para os próximos anos são ainda mais agressivas</span> e nossas projeções são as mais satisfatórias.</p>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="text-numeros-nova">
                <p>Do segundo para o terceiro ano a marca apresentou <span>crescimento de mais de 139,73% em acessos orgânicos</span>. Hoje, suas vendas orgânicas são responsáveis por quase <span>63% do faturamento total</span>. Além disso, contamos com 80% das palavras-chave previstas em planejamento na primeira página do Google, sendo 75% delas nas três primeiras posições.</p>
              </div>
            </div>
          </div>
          <div className="row mt-5 mb-2">
            <div className="col-12 col-md-5">
              <div className="img-estudo-case">
                <Image src="/novamed/crescimento-nova.png" width={669} height={620} alt="Nova Medicamentos" />
              </div>
            </div>
            <div className="col-12 col-md-7">
              <div className="title-crescimento-nova">
                <h4>Como aumentar o tráfego orgânico com SEO?</h4>
              </div>
              <div className="text-estudo-case">
                <p>Todo o zelo, desde o atendimento até o momento da entrega do produto, dedicado pela Nova Medicamentos garante, de fato, que a marca conquiste seus clientes e seu espaço no mercado. Entretanto, há uma série de outros fatores que contribuem para os resultados da marca.</p>
                <p>Entre esses fatores, o principal é: uma <span>equipe especializada em estratégias de SEO e técnicas de ranqueamento</span>.</p>
                <p>Dentre todos os mecanismos de busca, o Google é o mais popular e, basicamente, quem dita as regras do jogo. É claro que ficamos muito satisfeitos com o ranqueamento em outros mecanismos de busca também, mas sendo o Google o mais utilizado pelo público-alvo da nossa marca, é esse o nosso objetivo.</p>
                <p>Para isso, não basta sair publicando um monte de backlinks em outros portais ou colocar a mesma palavra-chave em cada parágrafo do texto, combinado? Até porque, atualmente, os mecanismos de busca se preocupam muito mais com a <span>qualidade e complexidade do conteúdo</span>, do que com links de referência ou repetição de palavras-chave.</p>
                <p>É preciso que seu conteúdo seja, de fato, relevante para o usuário. Ah, e inédito, é claro! Por isso, é importante contar com uma <span>equipe de redação qualificada</span>, que compreenda as principais técnicas de SEO e, principalmente, domine todas as principais informações sobre seus produtos.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="title-conte-com-nairuz">
                <h4>Conte com a Nairuz para aumentar o tráfego orgânico do seu site</h4>
              </div>
              <div className="text-conte-com-nairuz">
                <p>Nós, aqui da Nairuz Marketing Digital e Tecnologia, somos verdadeiros <span>especialistas em SEO</span>, definição de estratégias, planejamento de palavras-chave e produção de conteúdo. Quer se tornar um case de sucesso no mercado digital, assim como a Nova Medicamentos, e aumentar a receita orgânica da sua empresa? Então vem com a gente!</p>
              </div>
              <div className="card-conte-com-nairuz">
                <div className="icon-conte-com-nairuz">
                  <Image src="/novamed/icon-conte.svg" width={117} height={117} alt="Conte com a Nairuz" />
                </div>
                <div className="text-card-conte-com-nairuz">
                  <p>Temos uma equipe de profissionais altamente qualificados e preparados para entender a necessidade do seu negócio e traçar a estratégia ideal para a sua marca!</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="container" id="form-case-nova">
          <div className="row mb-5">
            <div className="col-12">
              <div className="formRd-tema">
                <div role="main" id="formulario-case-nova-medicamentos-81ed79d6c674aef1d66a"></div>
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
            new RDStationForms('formulario-case-nova-medicamentos-81ed79d6c674aef1d66a', 'UA-48773259-1').createForm();
          }

        `
        }
      </Script>
    </div>

    
  )
}
