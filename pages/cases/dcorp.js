import Head from "next/head";
import Image from "next/image";
import Headergeral from "../../components/Headergeral";
import HeaderMob from "../../components/HeaderMob";
import Footergeral from "../../components/Footergeral";
import NewsletterNz from "../../components/NewsletterNz";
import Script from "next/script";

export default function NovaMedicamentos2() {
  return (
    <div className="page-cases page-case-novamed case-dcorp">
      <Head>
        <title>
          Saiba como a Daros Corp cresceu 81% no tráfego orgânico em 3 meses
        </title>
        <meta
          name="description"
          content="Veja como a Nairuz ajudou a Transpalet alavancar os resultados na geração de leads e promoveu o e-commerce da marca!"
        />
        <meta
          property="og:image"
          content="https://nairuz.com.br/og-nairuz.png"
        />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="600" />
        <meta property="og:image:height" content="400" />
        <meta
          property="og:description"
          content="Veja como a Nairuz ajudou a Transpalet alavancar os resultados na geração de leads e promoveu o e-commerce da marca!"
        />
        <meta
          property="og:site_name"
          content="Transpalet consegue bater meta em 600% investindo em Inbound Marketing"
        />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.png" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css"
          integrity="sha512-tS3S5qG0BlhnQROyJXvNjeEM4UpMXHrQfTGmbQ1gKmelCxlSEBUaxhRBj/EFTzpbP4RVSrpEikbmdJobCvhE3g=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.min.css"
          integrity="sha512-sMXtMNL1zRzolHYKEujM2AqCLUR9F2C4/05cdbxjjLSRvMQIciEPCQZo++nk7go3BtSuK9kfa/s+a4f4i5pLkw=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,300&display=swap"
          rel="stylesheet"
        ></link>
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
                  <h2>
                    Nossos <span>Cases</span>
                  </h2>
                </div>
                <div className="title-case">
                  <h1>
                    Saiba como a Daros Corp cresceu 81% no tráfego orgânico em 3
                    meses
                  </h1>
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
                  <iframe
                    width="850"
                    height="500"
                    src="https://www.youtube.com/embed/Wsvlq1aRc1k?si=RX0-kDEBGiIxYXlS"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="container" id="conteudo-case-dcorp">
          <div className="row align-items-center justify-content-center">
            <div className="col-12 col-md-8">
              <div className="text-center text-estudo-case">
                <p>
                  E se a chamada deste conteúdo já ganhou a sua atenção, vale a
                  pena destacarmos também que esse resultado foi alcançado ainda
                  nos <strong>três primeiros meses de ações.</strong> Sem truque
                  de mágica, sem técnicas infalíveis e, claro, sem nenhum
                  segredo. Afinal, pode até não ser comum observar números tão
                  expressivos no mercado (sabemos que para quem está ingressando
                  agora no marketing digital, esse ainda é um oceano cheio de
                  possibilidades e desafios), mas para nós não há surpresa
                  alguma.
                </p>
              </div>
            </div>
          </div>

          <div className="row align-items-center justify-content-center area-sobre">
            <div className="col-12 col-md-9">
              <div className="area-trafego-organico">
                <p>
                  Isso porque, com nossa experiência em performance e geração de
                  resultados, somos os primeiros a afirmar que é possível sim
                  alcançar as metas mais ousadas e aumentar (e muito) o
                  faturamento de qualquer negócio com conhecimento de mercado,
                  planejamento adequado e{" "}
                  <strong>estratégias de marketing digital</strong> traçadas por
                  especialistas no assunto. E essa é a missão da nossa equipe:
                  entender o seu negócio, desenvolver um planejamento totalmente
                  personalizado e definir as melhores estratégias para seus
                  objetivos.
                </p>
              </div>
            </div>
          </div>

          <div className="row titulo-sobre">
            <div className="col-12">
              <div className="title-trafego-organico title-descobrir">
                <h3>
                  Quer descobrir o que fazer para que<br></br> esse também seja
                  o resultado da sua marca?
                </h3>
              </div>
            </div>
          </div>

          <div className="row align-items-center justify-content-center">
            <div className="col-12 col-md-8">
              <div className="text-center text-estudo-case case-dcorp">
                <div className="icon-note">
                  <Image
                    src="/novaident/cases/daros/notelogo.svg"
                    width={74}
                    height={66}
                    alt="dcorp"
                  />
                </div>
                <p>
                  O primeiro passo é ter um planejamento completo, que
                  funcionará como guia para a criação de estratégias eficientes.
                  Mas se você ainda não sabe por onde começar ou gostaria de
                  contar com uma{" "}
                  <strong>
                    equipe de especialistas em todas as áreas do marketing
                    digital,
                  </strong>{" "}
                  desde o planejamento até a operação de cada estratégia, entre
                  em contato com nossos consultores e saiba qual é a melhor
                  solução para você!
                </p>
              </div>
              <div className="button-resultado-cta">
                <a href="#form-case-nova">
                  Solicite uma avaliação personalizada
                </a>
              </div>
            </div>
          </div>

          <div className="row titulo-sobre segunda-parte">
            <div className="col-12">
              <div className="title-trafego-organico">
                <h3>
                  Entenda como alcançar <strong>98% de redução</strong> na taxa
                  de rejeição e <strong>42% no tempo</strong> de carregamento do
                  site e como isso impacta nos resultados do seu faturamento
                </h3>
              </div>
            </div>
          </div>

          <div className="row sobre">
            <div className="col-6 d-flex align-items-center">
              <div className="banner-empilhadeira">
                <Image
                  src="/dcorp/fundocasedcorp.png"
                  width={714}
                  height={430}
                  alt="Dcorp"
                />
              </div>
            </div>
            <div className="sobre-dcorp col-6">
              <p>
                Quem nunca desistiu de uma compra online ou procurou outra loja
                porque a página demorava demais para carregar, as imagens
                estavam quebradas ou o menu era simplesmente confuso? Assim como
                saímos rapidinho de uma loja física desorganizada e difícil de
                acessar, muitas lojas online sofrem prejuízo em seu faturamento
                por problemas técnicos ligados à plataforma, layout e criativos
                do site.
              </p>
              <p className="texto-destaque">
                Quando falamos sobre e-commerce, os custos de um &quot;espaço
                inacessível e desorganizado&quot; são ainda maiores, uma vez que basta
                o usuário voltar uma página e descobrirá uma série de outras
                lojas que oferecem o mesmo produto, e talvez até com um preço
                elevado, porém a partir de uma experiência de navegação
                agradável, segura e intuitiva.
              </p>
              <p>
                {" "}
                É preciso entender que o{" "}
                <strong>layout do seu site é a primeira impressão</strong> que
                seu potencial cliente terá da sua marca. E ainda que os
                criativos das campanhas e as mídias sociais funcionem como uma
                vitrine, é apenas no momento da seleção e compra do produto ou
                contratação do serviço, que seu cliente poderá atestar a
                credibilidade da marca.
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-12 img-grafico">
              <Image
                src="/dcorp/banner-meiodcorp.png"
                width={1500}
                height={276}
                alt="Hands"
              />
            </div>
          </div>

          <div className="row como-alavancou">
            <div className="col-6 d-flex align-items-center">
              <p>
                Por isso, investir em um <strong>layout personalizado</strong>{" "}
                não só permite identificar a sua marca e transmitir
                confiabilidade, mas também estrutura todo o site de acordo com o
                perfil e necessidades do seu público-alvo. Ou seja, é possível
                desenvolver uma navegação simplificada, organizar suas
                categorias e disposição dos produtos a partir do volume de
                buscas e preços, facilitar todo o processo de checkout e
                aumentar o ticket médio com a recomendação de novos produtos,
                entre outras oportunidades
              </p>
            </div>
            <div className="sobre-transpalet col-6">
              <p>
                Outro ponto interessante é que, a partir de um layout
                personalizado, erros como de carregamento de imagem ou elementos
                podem ser corrigidos com facilidade. Além de tornar seu{" "}
                <strong>site responsivo</strong> aos demais dispositivos móveis,
                como smartphones e tablets, por exemplo. Dessa forma, seu
                cliente pode interagir com a sua marca, encontrar os produtos
                desejados e finalizar a compra em alguns cliques e de qualquer
                lugar.
              </p>
            </div>
          </div>
        </section>

        <section className="container" id="tecnologia-mercado">
          <div className="row titulo-tecnologia">
            <div className="col-12">
              <div className="title-trafego-organico">
                <h3>
                  Tecnologia aliada ao marketing<br></br> digital e as vantagens
                  para o seu negócio
                </h3>
              </div>
            </div>
          </div>

          <div className="row sobre-tec">
            <div className="col-6 align-items-center">
              <p>
                Especialmente para quem está lançando uma loja online no
                mercado, é possível (e diríamos que até frequente) observar
                aumento do tráfego orgânico proporcional ao aumento da taxa de
                rejeição? Há duas razões bem comuns para isso:
              </p>
              <div className="info-enve">
                <div className="iconenvelope">
                  <Image
                    src="/novaident/envelope.svg"
                    width={24}
                    height={24}
                    alt="Envelope"
                  />
                </div>
                <p>
                  Ou suas estratégias de SEO estão desalinhadas em relação ao
                  objetivo da sua marca, com palavras-chave que não condizem com
                  o seu catálogo de produtos, descrições equivocadas ou
                  desinteressantes;
                </p>
              </div>
              <div className="info-enve">
                <div className="iconenvelope">
                  <Image
                    src="/novaident/envelope.svg"
                    width={24}
                    height={24}
                    alt="Envelope"
                  />
                </div>
                <p>
                  Ou há sérios problemas no seu site, seja relacionado à
                  plataforma ou ao layout e à estrutura de categorias e produtos
                  (ou tudo isso de uma só vez!).
                </p>
              </div>
              <p className="mt-4">
                A questão é que, na maioria dos casos, esses problemas são
                percebidos apenas quando os números de taxa de conversão e
                faturamento começam a cair. Afinal, quem melhor do que o cliente
                para indicar quais são os pontos de melhoria ou quais as
                principais dificuldades no processo de escolha e compra?
              </p>
            </div>
            <div className="sobre-transpalet col-6">
              <p>
                Entretanto, esperar os primeiros meses para &quot;identificar e
                resolver o problema&quot; é uma estratégia muito arriscada e
                pode refletir em meses de queda de receita e posicionamento
                orgânico, além de prejudicar a imagem da sua marca e abrir
                espaço para o avanço da concorrência. Especialmente quando
                falamos sobre SEO e aquisição de tráfego orgânico, o tempo é
                essencial.
              </p>
              <p className="mt-4">
                Portanto, um{" "}
                <strong>planejamento bem construído e executado</strong> deve
                prever todas essas questões e, antes mesmo do início das
                operações, promover ações de correção e contenção de danos. É
                preciso alterar a identidade da sua marca? O layout atual é
                confuso e desorganizado? Seu site demora demais para carregar e
                os elementos ficam dispersos?
              </p>
              <p className="mt-4">
                Garanta que todas essas etapas sejam cumpridas ainda no início
                do projeto. E não tem problema colocar em prática todas as
                estratégias, tanto de SEO quanto de mídias pagas em prática,
                afinal, <strong>tecnologia e marketing digital</strong> são a
                combinação ideal para os bons resultados.
              </p>
            </div>
          </div>
        </section>

        <section className="container" id="title-exp">
          <div className="row">
            <div className="col-12">
              <div className="titulo-tecnologia">
                <h4>
                  Quer saber como está a navegação do seu<br></br> site e como
                  otimizar a <strong>experiência do seu usuário?</strong>
                </h4>
              </div>
              <div className="desc-tec">
                <p>
                  Então preencha os campos abaixo e receba o diagnóstico do seu
                  negócio com<br></br> um raio-x completo, feito por um
                  especialista, e repleto de insights estratégicos para
                  impulsionar seus resultados.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="container" id="form-case-nova">
          <div className="row mb-5">
            <div className="col-12">
              <div className="formRd-tema case-covabra">
                <div
                  role="main"
                  id="formulario-case-daros-corp-d5db2a17d2d8a3595a06"
                ></div>
              </div>
            </div>
          </div>
        </section>

        <section className="container" id="estudo-caso">
          <div className="row titulo-sobre segunda-parte">
            <div className="col-12">
              <div className="title-trafego-organico">
                <h3>Estudo de caso - conheça o case Daros Corp</h3>
              </div>
            </div>
          </div>
        </section>

        <section id="notesecao">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="area-note">
                  <div className="notebook-img">
                    <Image
                      src="/dcorp/bannernotesnovo.png"
                      width={897}
                      height={410}
                      alt="Notebooks"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="container" id="estudo-caso">
          <div className="row">
            <div className="texto-estudo col-6">
              <p>
                A Daros Corp é um grupo empresarial do setor pet, focada em
                comércio e desenvolvimento internacional, fundada em 1995, em
                Itajaí /SC. Hoje, a empresa é responsável por importar e
                comercializar as renomadas marcas Oster, Propetz e Choyer.
                Reconhecida como uma das empresas líderes de mercado em sua área
                de atuação, a Daros Corp tem uma trajetória marcada por
                inovação, responsabilidade social e transparência.
              </p>
              <p>
                A necessidade de buscar por uma agência parceira surgiu quando a
                empresa identificou a oportunidade de <strong>aumentar o faturamento</strong> a partir da consolidação
                e expansão de seus principais canais de vendas, o e-commerce das
                suas marcas. Entretanto, para isso seria preciso migrar para uma
                nova plataforma capaz de atender ao fluxo de usuário e que
                oferecesse funcionalidades que otimizassem a navegação e
                facilitassem o processo de compra, além de reduzir o tempo de
                carregamento do site.
              </p>
              <p>
                Nós, da Nairuz, somos especialistas em UX/UI Design,
                certificados nas principais plataformas de e-commerce do mercado
                e, claro, com um time fera no
              </p>
            </div>
            <div className="texto-estudo col-6">
              <p>
                desenvolvimento de layout personalizado. Portanto, nossa
                primeira atuação com o cliente foi no diagnóstico do panorama
                das marcas, a proposta de um novo layout e melhorias que
                contribuíram para a melhor experiência de navegação.
              </p>
              <p>
                O que deu muito certo! Logo nos primeiros meses foi possível
                observar queda expressiva na taxa de rejeição (98%) e aceleração
                no carregamento das páginas (reduzindo o tempo em 42%). O site
                estava pronto para as estratégias de marketing digital.
              </p>
              <p>
                Lembra quando citamos um pouco acima os prejuízos a longo prazo
                do atraso nas correções? Para mudar esse cenário, nossa equipe
                de marketing atuou imediatamente, logo após o início de nossa
                parceria, em ações conjuntas para transformar o ambiente digital
                da marca sem pausar as operações do planejamento estratégico.
              </p>
              <p>
                Resultado? O título do nosso case de sucesso: <strong>
                  crescimento de 81% no tráfego orgânico já nos 3 primeiros
                  meses.
                </strong>
              </p>
            </div>
          </div>
        </section>

        <section className="container" id="conte-conosco">
          <div className="row">
            <div className="col-12">
              <div className="titulo-conosco">
                <h4>
                  Conte com a Nairuz para impulsionar os resultados da sua marca
                </h4>
              </div>
              <div className="descricao-conosco">
                <p>
                  Somos verdadeiros{" "}
                  <strong>
                    especialistas em marketing digital e tecnologia
                  </strong>{" "}
                  e, por isso, acompanhamos todas as<br></br> etapas do
                  planejamento desde o primeiro momento. Agimos dentro do timing
                  ideal e com soluções práticas<br></br> e certeiras! Quer se
                  tornar também um case de sucesso no mercado digital? Então
                  conte conosco!
                </p>
              </div>
              <div className="button-resultado-cta">
                <a href="#form-case-nova">Entre em contato conosco</a>
              </div>
            </div>
          </div>
        </section>

        <NewsletterNz />
      </main>

      <Footergeral />

      <Script
        type="text/javascript"
        src="https://d335luupugsy2.cloudfront.net/js/rdstation-forms/stable/rdstation-forms.min.js"
      ></Script>

      <Script
        src="https://code.jquery.com/jquery-3.6.0.min.js"
        strategy="beforeInteractive"
      />
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"
        strategy="beforeInteractive"
      />

      <Script id="show-bannerx" strategy="lazyOnload">
        {`
          if (window.RDStationForms) {
            new RDStationForms('formulario-case-covabra-9f569fed60a504ff45ae', 'UA-48773259-1').createForm();
          }

        `}
      </Script>
    </div>
  );
}
