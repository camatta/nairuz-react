import Head from 'next/head'
import Image from 'next/image'
import Headergeral from '../../components/Headergeral'
import HeaderMob from '../../components/HeaderMob'
import Footergeral from '../../components/Footergeral'
import BehanceNz from '../../components/BehanceNz'
import CarrosselCases from '../../components/CarrosselCases'

const urlCaseMinassal = () => {
  document.location.href = '/cases/minassal';
}

export default function NovaMedicamentos() {
  return (
    <div className="page-cases page-case-novamed">
      <Head>
        <title>Nairuz - Nova Medicamentos</title>
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
                  <h1>Como a Nova Medicamentos alcançou 63% em faturamento orgânico com as técnicas de SEO</h1>
                </div>
                <div className="text-case">
                  <p>Para quem tem um negócio online, seja um e-commerce ou site institucional, o tráfego pago é uma métrica que tira o sono. O sonho de todo empreendedor que se aventura pelo universo digital é garantir o acesso à sua marca de forma orgânica e, na medida do possível, gratuita ou com custos muito baixos. Mas afinal, <span>como aumentar o tráfego orgânico com SEO?</span></p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="container" id="main-case">
          <div className="row">
            <div className="col-12 col-md-6">
              <div className="text-main-case">
                <p>Será que é possível definir algum tipo de estratégia que influencie em algo que acontece naturalmente?</p>
                <p>O primeiro passo é compreender o que é, de fato, um tráfego orgânico. Isso porque essa história de que o <span>tráfego orgânico</span> vem naturalmente… Bem, podemos ser sinceros: isso não é totalmente verdade.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="title-main-case">
                <h3>Afinal, o que é tráfego orgânico em SEO?</h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-6">
              <div className="text-main-case">
                <p>O tráfego orgânico é, de uma forma mais simples, todo o tráfego que não foi originado por meio de um anúncio pago ou ferramenta de geração de tráfego. Ou seja, o usuário teve um primeiro contato com o seu site por meio de um mecanismo de pesquisa, alguma publicação no blog ou mídias sociais.</p>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="text-main-case">
                <p>Esse acesso acontece de forma autêntica. O usuário se deparou com o seu conteúdo ou página, seu interesse foi despertado e ele clicou no seu link. Simples assim.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="container" id="main-xcase">
        <div className="row">
            <div className="col-12">
              <div className="layout-infocards">
                <Image src="/cases/img-novamed-1.png" width={1027} height={439} />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="post-minassal">
                <div className="post-content mt-5">
                  <p>Simples assim? Todo esse processo pode parecer muito “tranquilo”, mas na verdade, abre espaço para uma série de dúvidas. Por exemplo: como foi que seu usuário encontrou a sua marca? O que fez com que seu site aparecesse nos resultados de pesquisa? Por que, em meio a outros anúncios e resultados, seu usuário decidiu clicar justo na sua URL?</p>
                  <p>A resposta é muito prática: porque, por trás de todo site muito bem ranqueado, há uma série de estratégias de SEO e muito trabalho. Quem já está há algum tempo na jornada do marketing digital sabe disso, mas para quem está começando agora, precisamos dizer: os bons resultados levam tempo e muita dedicação.</p>
                  <p>Afinal, sua página não aparece simplesmente em primeira posição e tanto o título quanto a meta-descrição, apresentados como resultado de pesquisa, devem chamar a atenção do usuário e levarem a uma conversão. Entretanto, de nada adianta falarmos de teoria sem comprovarmos seus resultados na prática, não é mesmo?</p>
                  <p>Por isso, trouxemos neste conteúdo um dos nossos maiores cases de sucesso: a loja online Nova Medicamentos.</p>
                  <p>Quer saber como a Nova Medicamentos aumentou seu tráfego orgânico em 98,65%? Então continue lendo este conteúdo até o final e descubra!</p>
                </div>
                <div className="post-content">
                  <h4>Saiba como a Nova Medicamentos aumentou seu tráfego orgânico em 139,73% com técnicas de SEO</h4>
                </div>
                <div className="post-content">
                  <p>A Nova Medicamentos é uma loja online, com sede em Vinhedo (SP) e uma unidade em Vila Velha (ES), que atende todo o território nacional a partir da venda e entrega de medicamentos de alto custo. A marca Nova Medicamentos está há três anos no mercado, tendo nascido em 2019, e segue firme em seu propósito de oferecer o melhor atendimento, entrega rápida e segura e produtos de altíssima qualidade a seus clientes e parceiros.</p>
                  <p>Por ser uma farmácia online especializada em medicamentos especiais, a Nova Medicamentos conta com processos muito bem estruturados, uma equipe especializada em cada etapa e segue todas as recomendações e diretrizes dos órgãos regulamentadores.</p>
                  <p>Tudo isso, por si só, já garante a total satisfação de seus clientes. Mas então o que faz da Nova Medicamentos um case de sucesso quando falamos sobre estratégias de SEO e como <span>aumentar o tráfego orgânico?</span> Afinal, três anos é pouco tempo quando falamos de uma marca que já se tornou referência em seu segmento de mercado.</p>
                  <p>É muito comum encontrarmos, logo nas primeiras posições, marcas conhecidas há muito anos, com uma equipe experiente em ações de marketing digital e um domínio com algumas décadas de caminhada. Mas é surpreendente observarmos uma empresa, em seu terceiro ano, dominar as primeiras posições.</p>
                </div>
                <div className="layout-infocards">
                  <Image src="/cases/img-novamed-2.png" width={1027} height={260} />
                </div>
                <div className="post-content">
                  <h4>Vamos falar de números?</h4>
                </div>
                <div className="post-content">
                  <p>Quando falamos sobre como aumentar o tráfego orgânico de um site, precisamos falar sobre números e métricas. Isso porque é preciso conhecer o cenário atual da empresa, os dados disponíveis de mercado e ter em mente exatamente onde se quer chegar.</p>
                  <p>Caso contrário, não é possível mensurar com assertividade todos os resultados e entender se a meta foi alcançada ou se o resultado foi satisfatório. Para isso, você pode contar com o suporte de uma equipe de consultoria em marketing digital, responsável por fazer um verdadeiro raio-x da sua empresa e te direcionar em relação às melhores decisões.</p>
                  <p>Quando a Nova Medicamentos entrou em contato com a Nairuz, a marca ainda dava seus primeiros passos no universo digital. Seu e-commerce era razoavelmente recente e era necessário, junto às estratégias de SEO e Inbound Marketing, desenvolver um plano de introdução e fortalecimento de marca no mercado.</p>
                  <p>Era então o momento de unir forças! A equipe Nova Medicamentos, especialista no produto e com um conhecimento profundo sobre seu público-alvo, trabalhou lado a lado com a equipe Nairuz, especialista em estratégias de performance em marketing digital e planejamento.</p>
                  <p>O resultado não poderia ser melhor: em apenas um ano, a Nova Medicamentos apresentou <span>crescimento de mais de 5.297,84% em tráfego orgânico</span>, além de ser essa a origem de <span>mais de 32% de todas as vendas realizadas</span>.</p>
                  <p>É preciso lembrar aqui que estamos falando, exclusivamente, de tráfego e vendas orgânicas de uma marca ainda em sua fase de introdução no mercado. Simultaneamente às <span>estratégias de SEO</span>, nossa equipe iniciou uma série de novas estratégias alinhadas aos objetivos e metas do cliente, que tornaram a Nova Medicamentos uma marca consolidada.</p>
                </div>
                <div className="post-content">
                  <h4>Crescimento que não para</h4>
                </div>
                <div className="post-content">
                  <p>Mesmo após três anos do início de sua parceria com nossa equipe, a Nova Medicamentos segue em crescimento contínuo. Com novos produtos em seu portfólio e seus valores intrínsecos, que não se alteram com o passar do tempo e servem como base para o melhor atendimento e entrega, as metas para os próximos anos são ainda mais agressivas e nossas projeções são as mais satisfatórias.</p>
                  <p>Do segundo para o terceiro ano a marca apresentou <span>crescimento de mais de 139,73% em acessos orgânicos</span>. Hoje, suas vendas orgânicas são responsáveis por quase 63% do faturamento total. Além disso, contamos com <span>80% das palavras-chave previstas em planejamento na primeira página do Google, sendo 75% delas nas três primeiras posições</span>.</p>
                </div>
                <div className="layout-infocards">
                  <Image src="/cases/img-novamed-3.png" width={1027} height={260} />
                </div>
                <div className="post-content">
                  <h4>Como aumentar o tráfego orgânico com SEO?</h4>
                </div>
                <div className="post-content">
                  <p>Todo o zelo, desde o atendimento até o momento da entrega do produto, dedicado pela Nova Medicamentos garante, de fato, que a marca conquiste seus clientes e seu espaço no mercado. Entretanto, há uma série de outros fatores que contribuem para os resultados da marca.</p>
                  <p>Entre esses fatores, o principal é: uma equipe especializada em <span>estratégias de SEO</span> e técnicas de ranqueamento.</p>
                  <p>Dentre todos os mecanismos de busca, o Google é o mais popular e, basicamente, quem dita as regras do jogo. É claro que ficamos muito satisfeitos com o ranqueamento em outros mecanismos de busca também, mas sendo o Google o mais utilizado pelo público-alvo da nossa marca, é esse o nosso objetivo.</p>
                  <p>Para isso, não basta sair publicando um monte de backlinks em outros portais ou colocar a mesma palavra-chave em cada parágrafo do texto, combinado? Até porque, atualmente, os mecanismos de busca se preocupam muito mais com a qualidade e complexidade do conteúdo, do que com links de referência ou repetição de palavras-chave.</p>
                  <p>É preciso que seu conteúdo seja, de fato, relevante para o usuário. Ah, e inédito, é claro! Por isso, é importante contar com uma <span>equipe de redação qualificada</span>, que compreenda as principais técnicas de SEO e, principalmente, domine todas as principais informações sobre seus produtos.</p>
                </div>
                <div className="post-content">
                  <h4>Conte com a Nairuz para aumentar o tráfego orgânico do seu site</h4>
                </div>
                <div className="post-content">
                  <p>Nós, aqui da <span>Nairuz Marketing Digital e Tecnologia</span>, somos verdadeiros especialistas em SEO, definição de estratégias, planejamento de palavras-chave e produção de conteúdo. Quer se tornar um case de sucesso no mercado digital, assim como a Nova Medicamentos, e aumentar a receita orgânica da sua empresa? Então vem com a gente!</p>
                  <p>Temos uma equipe de profissionais altamente qualificados e preparados para entender a necessidade do seu negócio e traçar a estratégia ideal para a sua marca!</p>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
          <div className="col-12">
            <div className="video-novamedicamentos">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/MJBFkV03N0s" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </div>
            </div>
          </div>

        </section>

        <section className="container">
          <div className="row">
            <div className="col-12">
              <div className="outros-cases post-content">
                <p>Gostou do nosso conteúdo? Então leia também: <a onClick={urlCaseMinassal}>Marketing B2B: como a Minassal aumentou sua base de leads em 91% em um semestre</a>.</p>
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
