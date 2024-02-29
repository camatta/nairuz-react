import Head from 'next/head'
import Image from 'next/image'
import Headergeral from '../../components/Headergeral'
import HeaderMob from '../../components/HeaderMob'
import Footergeral from '../../components/Footergeral'
import BehanceNz from '../../components/BehanceNz'
import CarrosselCases from '../../components/CarrosselCases'

export default function Bialetti() {
  return (
    <div className="page-cases page-case-bialettishop">
      <Head>
        <title>Bialetti Shop aumentou seu faturamento em 800% em menos de 1 ano: descubra como</title>
        <meta name="description" content="Venha conferir essa parceria de sucesso entre a Nairuz e a Bialetti Brasil, e como essa marca conseguiu superar suas metas de faturamento em um ano!" />
        <meta property="og:image" content="https://nairuz.com.br/og-nairuz.png" />
				<meta property="og:image:type" content="image/png" />
				<meta property="og:image:width" content="600" />
				<meta property="og:image:height" content="400" />
        <meta property="og:description" content="Venha conferir essa parceria de sucesso entre a Nairuz e a Bialetti Brasil, e como essa marca conseguiu superar suas metas de faturamento em um ano!" />
				<meta property="og:site_name" content="Bialetti Shop aumentou seu faturamento em 800% em menos de 1 ano: descubra como" />
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
                  <h1>Veja como a Bialetti Shop aumentou seu faturamento em 800% em menos de 1 ano</h1>
                </div>
                <div className="text-case">
                  <p>Iniciar uma empresa do zero não é fácil, ainda mais quando a marca a ser vendida e anunciada já é influência em outros diversos países. Esse é o caso da Bialetti Shop, uma empresa que desenvolveu-se no Brasil, mas que carrega até hoje consigo, a responsabilidade de vender uma marca conhecida mundialmente, tendo então como desafio inserir-se no país de forma exclusiva e on-line.</p>
                  <p>Para isso, a empresa então utilizou o marketing digital de uma maneira construtiva, na qual o seu sucesso aqui no Brasil foi garantido, aumentando suas vendas em diversos patamares. Mas como isso foi possível? <span>Saiba agora!</span></p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="container" id="main-case">
          <div className="row">
            <div className="col-12">
              <div className="title-main-case">
                <h3>Sobre a marca Bialetti</h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-6">
              <div className="text-main-case">
                <p>A Bialetti é uma famosa marca italiana, conhecida mundialmente por sua produção de cafés e utensílios especiais que, por sua vez, são utilizados para o preparo do mesmo. Além disso, a empresa também é responsável por produzir linhas especiais de eletroportáteis, panelas e outros diversos itens de cozinha. Tudo isso, através de um design requintado e tradicional.</p>
                <p>Criada em 1919 por Alfonso Bialetti, a empresa centenária tem feito grande sucesso pelo mundo inteiro desde então. Isso graças ao seu design único e sua tradição.</p>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="text-main-case">
                <p>No Brasil, apesar da marca já ser distribuída há um bom tempo pela empresa Imeltron, só teve sua loja oficial no país no ano de 2018, através da representante Bialetti Shop.</p>
                <p>Aqui ela foi planejada e desenvolvida estrategicamente do zero, por meio da consultoria realizada pela Nairuz, uma agência de marketing digital especialista em estratégias voltadas para o crescimento on-line de empresas de diversos segmentos. Tudo isso com o intuito de melhorar as vendas e engajar o cliente de maneira certeira.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-8">
              <div className="mosaico-posts-bialetti">
                <ul>
                  <li><Image src="/cases/post1-bialetti.png" alt="Bialetti - Post Instagram" width={345} height={345} /></li>
                  <li><Image src="/cases/post2-bialetti.png" alt="Bialetti - Post Instagram" width={345} height={345} /></li>
                  <li><Image src="/cases/post3-bialetti.png" alt="Bialetti - Post Instagram" width={345} height={345} /></li>
                </ul>
                <ul>
                  <li><Image src="/cases/post4-bialetti.png" alt="Bialetti - Post Instagram" width={345} height={345} /></li>
                  <li><Image src="/cases/post5-bialetti.png" alt="Bialetti - Post Instagram" width={345} height={345} /></li>
                  <li><Image src="/cases/post6-bialetti.png" alt="Bialetti - Post Instagram" width={345} height={345} /></li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="mockup-bialetti">
                <Image src="/cases/mockup-bialetti.png" alt="Bialetti - E-commerce" width={600} height={690} />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="post-bialetti">
                <div className="title-post">
                  <h3>Nascimento e crescimento mês a mês da Bialetti Shop</h3>
                </div>
                <div className="post-content">
                  <p>Assim que a Bialetti Shop nasceu aqui no Brasil, ela contou efetivamente com a ajuda e parceria da Nairuz. Com isso, juntas puderam criar um planejamento eficiente que foi o ponto-chave para o sucesso da empresa aqui no Brasil.<br></br><br></br>Para início da parceria, foi necessário primeiramente avaliar quem era a empresa, qual já era a influência da marca no Brasil, quem seria seu público-alvo e o mais importante, como seria possível atrair esse público-alvo de maneira qualificada, levando-os à compra dos produtos!<br></br><br></br>Definido isso, foram utilizadas então grandes estratégias que se basearam em:</p>
                  <h4>1. Desenvolvimento do layout e da performance de e-commerce</h4>
                  <p>Por ter iniciado do zero aqui no Brasil, a loja precisava de um e-commerce, até porque através dele, as vendas poderiam ser efetivadas para todo o país. Com isso, estruturou-se todo um layout baseado na inovação, sem perder a identidade da marca já existente.<br></br><br></br>Desta forma, formulou-se um trabalho com o intuito de levar ao visitante uma excelente experiência do usuário. A estratégia deu-se no desenvolvimento de detalhes que, por sua vez, foram essenciais para que o mesmo tivesse sucesso.<br></br><br></br>Além disso, foram desenvolvidos também a arte da caixa na qual os produtos seriam entregues. Onde cada material para a produção foi selecionado com o intuito de levar ao cliente uma experiência agradável, que o fizesse desejar por aquele produto sempre.</p>
                  <h4>2. Criação de estratégias bem implementadas em Inbound Marketing</h4>
                  <p><span>O Inbound Marketing</span>, foi uma estratégia que teve e ainda tem como principal função captar leads que, num futuro próximo, se transformarão em clientes. Para isso, foram elaboradas estratégia por meio de:<br></br><br></br><span>Mídias sociais</span>: com o intuito de levar maior conhecimento sobre a marca e sobre a empresa no Brasil, além de ter feito um papel muito importante para a divulgação de seus produtos oferecidos.<br></br><br></br><span>ADS e SEO</span>: neste caso, foram utilizadas as palavras-chave mais buscadas pelo público-alvo da Bialetti Shop e, através deste levantamento, foi possível criar campanhas pagas, artigos e otimizações com foco SEO, para que assim a empresa pudesse ser vista em todos os lugares, até mesmo em campo de busca da internet.<br></br><br></br><span>E-mail marketing</span>: assim que o resultado de todo o branding foi se transformando em leads, o trabalho através do e-mail marketing passou a ganhar força para deixar esses leads ainda mais engajados, oferecendo conteúdo exclusivo e de qualidade.<br></br><br></br>Cada uma dessas estratégias foi essencial para o crescimento significativo da Bialetti Shop, onde em menos de 12 meses, ela pôde garantir o início de suas vendas <span className="destaque-text-post">e o crescimento em mais de 1.145% no quesito Inbound Marketing</span>.</p>
                  <h4>3. Lançamento de novas campanhas e produtos</h4>
                  <p>Assim que todas as suas redes voltadas para captação de novos clientes já estavam sendo vistas, foram iniciadas então as campanhas com foco em vendas. Até porque esse sempre foi o objetivo inicial da Bialetti Shop.<br></br><br></br>Para isso, foram então criadas novas campanhas, além do lançamento de novos produtos. Ao todo, foram mais de 20 novos produtos em 12 meses e, a cada lançamento, criava-se uma campanha nova para vendê-lo, elaborando então estratégias específicas pensadas no consumidor da marca aqui no Brasil.</p>
                  <h5 className="desafio">Desafio</h5>
                  <p>Assim como em qualquer outra empresa, sempre existem os desafios a serem compreendidos e superados, para então passar a gerar resultados. No caso da Bialetti Shopp, seu principal desafio no Brasil era chegar até seus clientes de maneira on-line, educando-os para entender que a loja era uma representante oficial.<br></br><br></br>Além disso, mesmo se tratando de uma marca centenária, seu início no Brasil seria começado do zero no quesito e-commerce. Ou seja, zero lead e zero engajamento. Por isso, atuar com a plataforma RD Station através de uma excelente estratégia de Inbound Marketing foi essencial para que a empresa passasse a decolar em leads, que por sua vez seriam transformados em vendas.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="title-sucesso-case">
                <h3>O sucesso garantido</h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-6">
              <div className="text-sucesso-case">
                <p>Através de todo o trabalho realizado com a parceria entre Bialetti Shop e a agência de marketing digital Nairuz, o sucesso foi garantido, tanto no processo de inserção da nova loja no Brasil, quanto para a sua performance em vendas.</p><br></br><br></br>
                <p>Cada estratégia implementada foi responsável por um grande resultado positivo, que por sua vez, geraram números vantajosos para a empresa mês a mês.</p><br></br><br></br>
                <p>No Inbound Marketing, por exemplo, foram muitos benefícios conquistados, como:</p><br></br><br></br>
                <p>Um crescimento exemplar no que se diz respeito ao alcance orgânico, o SEO. Foram somados mais de 668% de alcance orgânico ao mês, adquiridos através de um bom levantamento de palavras-chave relevantes, avaliando também o estudo de volume e competitividade desta mesma palavra, que por sua vez tiveram um papel fundamental para este resultado.</p><br></br><br></br>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="text-sucesso-case">
                <p>Isso sem contar a taxa de abertura de e-mails que subiram de 0 para 40%. Uma porcentagem que, se comparada ao mercado, encontra-se bem acima da média, já que uma boa taxa de abertura já se instaura a partir de 20%.</p><br></br><br></br>
                <p>Além disso, cada trabalho de Branding feito através das mídias, também auxiliou para um grande aumento de vendas, além de colaborar para educar os clientes de maneira eficaz, mostrando a verdadeira motivação da marca e seus principais diferenciais.</p><br></br><br></br>
              </div>
            </div>
          </div>
        </section>
        <section className="container-fluid" id="resultados">
          <div className="container">
            <div className="row d-flex align-items-center">
              <div className="col-12 col-md-6">
                <div className="title-resultados">
                  <p>OS <span>RESULTADOS</span></p>
                </div>
                <div className="text-resultados">
                  <p>Atualmente, a Bialetti Shop conta com um grande número de vendas ao mês garantindo um aumento no faturamento de mais de 800%. Tudo isso graças a um excelente trabalho de consultoria em marketing digital, atrelado à captação de leads qualificados, que foram obtidos através da plataforma RD Station.<br></br><br></br> Enfim, foi um grande trabalho realizado através de confiança e parceria, onde através destes, foi possível criar-se um novo projeto que gerou e gera até hoje grandes resultados, tornando-se um case de sucesso e uma parceria vitalícia que permanece em harmonia até os dias atuais.</p>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="icon-resultados">
                  <ul>
                    <li><Image src="/novaident/cases/bialetti/iconpeople.svg" width={38} height={38} /> <p>+ de 14mil usuários mensais;</p></li>
                    <li><Image src="/novaident/cases/bialetti/icondolar.svg" width={38} height={38} /> <p>+ 800% de faturamento;</p></li>
                    <li><Image src="/novaident/cases/bialetti/Cursor.svg" width={38} height={38} /> <p>27% de vendas em busca orgânica.</p></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="button-resultados">
                  <button className="open-popup-contato">Quero ser o próximo case de sucesso</button>
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
