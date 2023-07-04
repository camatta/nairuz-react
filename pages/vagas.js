import Head from 'next/head'
import Headergeral from '../components/Headergeral'
import HeaderMob from '../components/HeaderMob'
import Footergeral from '../components/Footergeral'
import NewsletterNz from '../components/NewsletterNz'
import VagasPopup from '../components/VagasPopup';
import Image from 'next/image';
import TrabalhoPopup from '../components/TrabalhoPopup';
import { useState } from 'react';

export default function Vagas() {
  const ourWork = [
    {
      "image": "/projetos/bravuz.png",
      "name": "Bravuz",
      "description": "O Bravuz foi feito para homenagear os funcionairuz que se destacaram durante todo o ano",
      "popup":{
        "description":"O Bravuz é uma premiação criada pelo próprio CEO da Nairuz, Rafael Queiroz. A nomeação e entrega dos troféus acontece anualmente e visa reconhecer os funcionairuz que se destacaram ao longo do ano, seja na sua área ou pela realização de algum projeto interno. Entre as categorias da premiação estão as metas batidas, as premiações conquistadas e o desenvolvimento de projetos inovadores.",
        "release": "2022",
        "images": "bravuz",
        "organizers":[{"name": "Rafael Queiroz", "job": "CEO"}, {"name": "Mariana Santos", "job": "ANALISTA FINANCEIRO"}]
      }
    },
    {
      "image": "/projetos/aureliuz.png",
      "name": "Auréliuz",
      "description": "Aulas de Língua Portuguesa feitas para que os funcionairuz estejam em constante crescimento profissional e pessoal",
      "popup":{
        "description":"O projeto Auréliuz nasceu da necessidade de reforçar algumas normas gramaticais da Língua Portuguesa que ainda geram dúvidas na hora da escrita e da fala. Muitos erros são cometidos por conta da falta de informação ou por conta do coloquialismo da língua. Por isso, o projeto foi desenvolvido para que esses pequenos erros não ocorressem mais, qualificando ainda mais os profissionais de todos os setores da agência.",
        "release": "2021",
        "images": "aureliuz",
        "organizers":[
          {"name": "Thaiane Pinha", "job": "Redatora"}, 
          {"name": "Marina Norato", "job": "Redatora"},
          {"name": "Claudimar Bezerra", "job": "Desenvolvedor"},
          {"name": "Mariana Santos", "job": "ANALISTA FINANCEIRO"},
          {"name": "Hugo Brito", "job": "CONSULTOR DE NOVOS NEGÓCIOS"},
        ]
      }
    },
    {
      "image": "/projetos/livruz.png",
      "name": "Clube do Livruz",
      "description": "Projeto desenvolvido internamente para que os profissionais desenvolvam o hábito da leitura",
      "popup":{
        "description":"O Clube do Livruz é um projeto criado para estimular a leitura entre os profissionais da Nairuz, expandir o vocabulário, melhorar a escrita e gerar um debate crítico sobre os temas abordados durante as reuniões do clube. Desde que começou, os encontros mensais estão cada vez mais elaborados e contam com a presença de vários funcionairuz.",
        "release": "2022",
        "images": "livruz",
        "organizers":[{"name": "Thaiane Pinha", "job": "Redatora"}]
      
      }
    }
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className="page-vagas">
      <Head>
        <title>Nairuz | Marketing Digital - Vagas</title>
        <meta name="description" content="Está em busca de vagas para analista de marketing digital, vagas para desenvolvedor ou vagas para designer publicitário e UX designer? Seja um funcionairuz!" />
        <meta property="og:image" content="https://nairuz.com.br/og-nairuz.png" />
				<meta property="og:image:type" content="image/png" />
				<meta property="og:image:width" content="600" />
				<meta property="og:image:height" content="400" />
        <meta property="og:description" content="Conheça nossa Agência de Marketing Digital e Tecnologia e descubra como transformar os resultados da sua empresa. Acesse e saiba mais!" />
				<meta property="og:site_name" content="Nairuz | Marketing Digital" />
				<meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.png" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,300&display=swap" rel="stylesheet"></link>
      </Head>

      <Headergeral />
      <HeaderMob />

      <main>
        <section className="container-fluid" id="vagas">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-4">
                <div className="title-funcionairuz">
                  <h1>#Funcionairuz</h1>
                </div>
                <div className="text-quemsomos">
                  <p>Aceleramos o crescimento dos nossos clientes no ambiente digital através de projetos completos e escaláveis. Nossos times de desenvolvimento, design, marketing, atendimento e comercial atuam de forma colaborativa para entregar os melhores resultados de forma crescente e contínua, todos os dias.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="container" id="vagas-disponiveis">
          <div className="row">
            <div className="col-12">
              <p className="title-vagas">Vagas</p>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-4">
              <div className="card">
                <h3>Vaga de<br></br><span>Inbound Marketing</span></h3>
                <h4>DISPONÍVEL ATÉ 31/03/2022</h4>
                <h5>Descrição da vaga:</h5>
                <p>Apoiar no planejamento e execução das ações estratégicas;
                    Desenvolvimento dos fluxos de nutrição das etapas que compreendem um funil de vendas e fluxos de automação;
                    Administração da ferramenta RD Station.</p>
                <h5>Requisitos:</h5>
                <p>Superior Completo em Comunicação;
                    Conhecimento das ferramentas de automação;
                    Perfil Analítico;
                    Organização;
                    Trabalho em equipe;
                    Conhecimento em estratégias de Inbound Marketing e SEO.</p>
                <button className="candidatarme-vaga" id="vaga1">Candidatar-me</button>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="card">
                <h3>Vaga de<br></br><span>Designer Junior</span></h3>
                <h4>DISPONÍVEL ATÉ 15/04/2022</h4>
                <h5>Descrição da vaga:</h5>
                <p>Responsável por criar a comunicação visual dos clientes e avaliar junto a equipe de marketing a eficácia das peças produzidas;
                    Responsável pela comunicação visual institucional da Nairuz.</p>
                <h5>Requisitos:</h5>
                <p>Formado ou formando-se áreas de design e comunicação;
                    Criatividade;
                    Bom gosto e atento ao mercado;
                    Escrever Bem;
                    Gostar de Aprender;
                    Iniciativa;
                    Domínio em PSD, AI, Corel.</p>
                <button className="candidatarme-vaga" id="vaga2">Candidatar-me</button>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="card">
                <h3>Vaga de<br></br><span>Atendimento</span></h3>
                <h4>DISPONÍVEL ATÉ 25/03/2022</h4>
                <h5>Descrição da vaga:</h5>
                <p>Responsável por criar um elo entre os clientes e as equipes;
                    Gerenciar o relacionamento dos processos;
                    Entender as necessidades, expectativas e dores dos clientes;
                    Buscar sempre ser um resolvedor de problemas.</p>
                <h5>Requisitos:</h5>
                <p>Cursos técnicos com certificação ou cursando superior em Marketing, Publicidade;
                    Cursando inglês;
                    Iniciativa;
                    Período de experiência no mínimo um ano (agência ou semelhante);
                    Gestor de crises.</p>
                <button className="candidatarme-vaga" id="vaga3">Candidatar-me</button>
              </div>
            </div>
          </div>
        </section>
        <section className="container" id="vagas-off">
          <div className="row">
            <div className="col-12">
              <div className="outras-vagas">
                <div className="title-outras-vagas">
                  <p>NÃO ENCONTROU A VAGA DESEJADA?</p>
                </div>
                <div className="text-outras-vagas">
                  <p>CADASTRE-SE NO NOSSO BANCO DE TALENTOS. ANALISAREMOS SEU PERFIL E DAREMOS PRIORIDADE NAS FUTURAS VAGAS.</p>
                </div>
                <div className="button-outras-vagas">
                  <button>Cadastrar</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="work" className="container">
          <div className="row row--title">
            <div className="col-lg-12">
              <div className="section--title">
                <p className='title'>Projetos <span>internos</span></p>
                <p className='subtitle'>CONHEÇA NOSSOS PROJETOS INTERNOS</p>
                <p className='section-description'>OS PROJETOS INTERNOS SÃO FEITOS PARA O DESENVOLVIMENTOS PROFISSIONAL E PESSOAL DE CADA FUNCIONAIRUZ</p>
              </div>
            </div>
          </div>
          <div className="row work--row">

            {ourWork.map((el, i)=>{
              return(
                <div className="work-box" key={i}>
                  <div className="headContainer"><Image className="img-fluid" src={el.image} alt={el.name} width={550} height={361} /></div>
                  <div className="bodyContainer">
                      <p className="name">{el.name}</p>
                      <p className="description">{el.description}</p>
                        {/* <button className={`button-${el.name}`} >Saiba mais</button> */}
                      <TrabalhoPopup  isActive={activeIndex === i} onShow={() => setActiveIndex(i)} activeIndex={setActiveIndex} popupInfo={el.popup}/>


                  </div>
                </div>
              );
            })}

            
          </div>
        </section>
        <NewsletterNz />
      </main>
      <Footergeral />
      <VagasPopup />
    </div>
  )
}
