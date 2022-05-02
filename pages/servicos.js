import Head from 'next/head'
import Image from 'next/image'
import Headergeral from '../components/Headergeral'
import HeaderMob from '../components/HeaderMob'
import Footergeral from '../components/Footergeral'
import BehanceNz from '../components/BehanceNz'
import Script from 'next/script'

export default function Servicos() {
  return (
    <>
      <Head>
        <title>Nairuz | Marketing Digital - Serviços</title>
        <meta name="description" content="Temos uma equipe especialista em serviços de SEO, Inbound Marketing, mídias pagas e desenvolvimento de layout para e-commerce. Saiba mais!" />
        <link rel="icon" href="/favicon.png" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,300&display=swap" rel="stylesheet"></link>
      </Head>

      <Script type="text/javascript" src="https://code.jquery.com/jquery-3.2.1.slim.min.js" />

      <div className="page-servicos">

      <Headergeral />
      <HeaderMob />

      <main>
        <section className="container-fluid" id="servicos">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-5">
                <div className="title-cases">
                  <h1>Nossos Serviços</h1>
                </div>
                <div className="text-cases">
                  <p>A era digital está cada vez mais presente na vida das pessoas. Por isso, adentrar esse mundo é o sucesso que você precisa para alavancar suas vendas virtuais e, nada melhor que fazer isso através de estratégias de marketing digital de qualidade, não é mesmo? Por isso, aqui na Nairuz contamos com especialistas no assunto!</p>
                  <p>Mas afinal, como fazemos cada um desses processos de excelência em marketing digital para nossos clientes?<br></br><b>Confira nossos serviços abaixo:</b></p>
                </div>
                <div className="icon-arrow-servico">
                  <Image src="/arrow-down.svg" alt="Veja Abaixo" width={32} height={71}/>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="container" id="botoes-dinamicos">
          <div className="row">
            <div className="col-12">
              <div className="botoes-servicos">
                <ul>
                  <li><button className="layout-svc ativo" id="layout">Layout para e-commerce</button></li>
                  <li><button className="website-svc" id="website">Websites</button></li>
                  <li><button className="midias-pagas-svc" id="midias-pagas">Mídias Pagas</button></li>
                  <li><button className="inbound-svc" id="inbound">Inbound Marketing</button></li>
                  <li><button className="seo-svc" id="seo">SEO</button></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row dinamico layout ativo2">
            <div className="col-12 col-md-6">
              <div className="left-servicos">
                <div className="categoria-nz">
                  <h3>SERVIÇOS DE <span>TECNOLOGIA</span></h3>
                </div>
                <div className="title-servico-nz">
                  <h2>Layout para e-commerce</h2>
                </div>
                <div className="desc-servico-nz">
                  <p>Como oferecer a melhor experiência para os clientes que entram em sua loja online? Um layout para e-commerce original traz diversos benefícios para o seu negócio, já que a credibilidade da sua marca depende de um visual que passe confiança.
                      Por isso, ter um layout para e-commerce que tenha uma estrutura organizada, é essencial para alavancar as suas vendas no meio online.
                      Os projetos da Nairuz não só ganham destaque no mercado por conta da sua originalidade, como também são pensados especialmente para a persona da sua marca. Afinal, a experiência deles dentro do seu site é um dos grandes fatores que influencia a venda.</p>
                  <p>Além disso, a nossa equipe criativa visa sempre a valorização da marca, atribuindo aspectos mais modernos para o layout do seu e-commerce. Com uma estética do site mais profissional, decerto que os seus clientes sentirão segurança para realizar as compras pela sua loja online. Esse aspecto ajuda muito, principalmente se a sua marca é nova no mercado.
                      Desenvolvemos websites, one pages, landing pages, implementação e desenvolvimento de layout para e-commerce. Somos apaixonados por usabilidade e nossos projetos são todos personalizados, pautados nas boas práticas de User Interface - UI e User Experience - UX com foco nos resultados. Além disso, trabalhamos com as mais recentes tecnologias.</p>
                </div>
                <div className="accordion-servico-nz">
                  <div className="title-accordion">
                    <h4>QUAIS TIPOS DE LAYOUT PODEMOS TE OFERECER?</h4>
                  </div>
                  <div className="content-accordion">
                    <div className="accordion">
                      <h5>Layout Personalizado</h5>
                      <p className="accordion-ativo">Ter um layout para e-commerce personalizado permite ao usuário uma conexão mais profunda com a marca, comunicação clara e objetiva da essência do seu negócio, além do acréscimo de funcionalidades e atributos que contribuem diretamente na jornada de compra do seu potencial cliente.
Com um time altamente capacitado e composto por especialistas em experiência do usuário, design inteligente, usabilidade, alta tecnologia, ferramentas e conceitos de marketing digital de performance, entregamos a melhor experiência de navegação com o layout personalizado.</p>
                    </div>
                    <div className="accordion">
                      <h5>Layout Customizado</h5>
                      <p>Os temas customizados são ideias para você que está com um tempo curto e deseja começar o mais rápido possível as suas ações no ambiente virtual. Como os temas customizados não são totalmente fixos, ainda é possível realizar algumas alterações em sua estrutura. Dessa forma, deixando o nosso tema adaptado para a sua loja online.</p>
                    </div>
                    <div className="accordion">
                      <h5>Tema</h5>
                      <p>Precisa colocar sua loja online no ar de forma rápida, mas não abre mão de garantir a melhor usabilidade, experiência do usuário e que fique com a cara da sua marca? Nós temos a solução ideal para você: os temas desenvolvidos pela nossa equipe de tecnologia e UX Design.
O tema oferece uma excelente experiência de navegação, layout intuitivo, estrutura adequada às diretrizes de SEO e pensadas para facilitar a jornada de compra do usuário. Ou seja, um layout padrão, porém adaptável às necessidades mais básicas da sua marca.</p>
                    </div>
                  </div>
                </div>
                <div className="button-orcamento-servico">
                  <button id="orcamento-servico" className="open-popup-contato">Quero fazer um orçamento!</button>
                </div>
              </div>
            </div>
            <div className="col-6 desktoponly">
              <div className="right-servico">
                <div className="imagens-servico">
                  <Image src="/img-layout.png" alt="Layout Personalizado" width={540} height={966} loading="eager" />
                </div>
              </div>
            </div>
          </div>
          <div className="row dinamico website" id="websites">
            <div className="col-12 col-md-6">
              <div className="left-servicos">
                <div className="categoria-nz">
                  <h3>SERVIÇOS DE <span>TECNOLOGIA</span></h3>
                </div>
                <div className="title-servico-nz">
                  <h2>Websites</h2>
                </div>
                <div className="desc-servico-nz">
                  <p>Desenvolvemos web sites, one pages, landing pages, implementação e desenvolvimento de layout para e-commerce. Somos apaixonados por usabilidade e nossos projetos são todos personalizados, pautados nas boas práticas de User Interface - UI e User Experience - UX com foco nos resultados. Além disso, trabalhamos com as mais recentes tecnologias do mercado.</p>
                  <p>Além disso, trabalhamos com as mais recentes tecnologias do mercado.
                      Quer saber como impulsionar os resultados do seu negócio investindo em experiência do usuário, navegação intuitiva e estrutura amigável às técnicas de SEO? Nossa equipe de tecnologia e UX Design, com base em pesquisas de mercado e um estudo aprofundado sobre a marca e sua persona, é capaz de assumir essa missão com maestria.</p>
                </div>
                <div className="button-orcamento-servico">
                  <button id="orcamento-servico" className="open-popup-contato">Quero fazer um orçamento!</button>
                </div>
              </div>
            </div>
            <div className="col-6 desktoponly">
              <div className="right-servico">
                <div className="imagens-servico">
                  <Image src="/img-website.png" alt="Website" width={540} height={882} loading="eager" />
                </div>
              </div>
            </div>
          </div>
          <div className="row dinamico midias-pagas">
            <div className="col-12 col-md-6">
              <div className="left-servicos">
                <div className="categoria-nz">
                  <h3>SERVIÇOS DE <span>MARKETING</span></h3>
                </div>
                <div className="title-servico-nz">
                  <h2>Mídias Pagas</h2>
                </div>
                <div className="desc-servico-nz">
                  <p>As mídias pagas são as formas de comunicação entre a sua marca e os seus clientes onde ocorre um investimento financeiro para o alcance das metas. Isto é, são todas as formas de anúncios que aparecem nas mídias sociais como Instagram e Facebook. Ou até mesmo nas plataformas de busca como o Google e o Bing.</p>
                  <p>Através de estratégias organizadas pelo nosso time de analistas, os seus anúncios chegam até os seus clientes de forma mais rápida e assertiva. Assim, trazendo os resultados que você almeja para a sua marca, seja mais engajamento com os seus conteúdos, mais seguidores nas suas páginas, oportunidades e, finalmente, mais conversões.</p>
                  <p>Ao contrário do SEO, que leva um tempo mais longo para trazer resultados orgânicos, as mídias pagas ajudam a promover resultados mais imediatos para a sua empresa. Por isso, elas funcionam muito bem durante campanhas sazonais.</p>
                  <p>Quer saber como levar o seu negócio até a porta dos seus clientes ideais? Então, entre em contato com o nosso time comercial!</p>
                </div>
                <div className="button-orcamento-servico">
                  <button id="orcamento-servico" className="open-popup-contato">Quero fazer um orçamento!</button>
                </div>
              </div>
            </div>
            <div className="col-6 desktoponly">
              <div className="right-servico">
                <div className="imagens-servico">
                  <Image src="/img-midias.png" alt="Mídias Pagas" width={540} height={575} loading="eager" />
                </div>
              </div>
            </div>
          </div>
          <div className="row dinamico inbound">
            <div className="col-12 col-md-6">
              <div className="left-servicos">
                <div className="categoria-nz">
                  <h3>SERVIÇOS DE <span>MARKETING</span></h3>
                </div>
                <div className="title-servico-nz">
                  <h2>Inbound Marketing</h2>
                </div>
                <div className="desc-servico-nz">
                  <p>O Inbound Marketing, também conhecido como Marketing de Atração, é uma metodologia de marketing digital totalmente focada na conversão dos visitantes do seu negócio em clientes ativos, conduzindo-os pela jornada de compra de forma automatizada.</p>
                  <p>Aqui na Nairuz criamos conteúdos nos mais diversos formatos digitais, de forma a interagir diretamente com a persona da sua marca e utilizamos as mídias sociais, links patrocinados, campanhas de display, e-mail marketing e blog como um canal de entrada para o processo de nutrição e geração de oportunidades de vendas para o seu negócio.</p>
                </div>
                <div className="button-orcamento-servico">
                  <button id="orcamento-servico" className="open-popup-contato">Quero fazer um orçamento!</button>
                </div>
              </div>
            </div>
            <div className="col-6 desktoponly">
              <div className="right-servico">
                <div className="imagens-servico">
                  <Image src="/img-inbound.png" alt="Inbound Marketing" width={540} height={696} loading="eager" />
                </div>
              </div>
            </div>
          </div>
          <div className="row dinamico seo">
            <div className="col-12 col-md-6">
              <div className="left-servicos">
                <div className="categoria-nz">
                  <h3>SERVIÇOS DE <span>MARKETING</span></h3>
                </div>
                <div className="title-servico-nz">
                  <h2>SEO</h2>
                </div>
                <div className="desc-servico-nz">
                  <p>Com base no planejamento estratégico de palavras-chave; produção de conteúdo qualificado, de acordo com técnicas que influenciam diretamente os mecanismos de busca; inteligência de link building e análise constante das métricas, as estratégias de SEO contribuem significativamente para o aumento da receita da sua empresa.</p>
                  <p>Aqui na Nairuz somos especialistas em SEO e responsáveis por avaliar o panorama atual do seu site; desenvolver e aplicar todas as etapas do planejamento estratégico de SEO; definir as palavras-chave relevantes para a sua marca; acompanhar continuamente o posicionamento orgânico do seu site e palavras-chave presentes no planejamento; produção de conteúdos com o objetivo de alcançar o posicionamento orgânico; realizar as configurações de ferramentas de análise e garantir a autoridade do seu site.</p>
                </div>
                <div className="button-orcamento-servico">
                  <button id="orcamento-servico" className="open-popup-contato">Quero fazer um orçamento!</button>
                </div>
              </div>
            </div>
            <div className="col-6 desktoponly">
              <div className="right-servico">
                <div className="imagens-servico">
                  <Image src="/img-seo.png" alt="SEO" width={540} height={597} loading="eager" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <BehanceNz />
      </main>

      <Footergeral />

    </div>
    
    </>

  )
}
