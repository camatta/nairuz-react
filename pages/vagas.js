import Head from 'next/head'
import Headergeral from '../components/Headergeral'
import HeaderMob from '../components/HeaderMob'
import Footergeral from '../components/Footergeral'
import NewsletterNz from '../components/NewsletterNz'
import VagasPopup from '../components/VagasPopup';

export default function Vagas() {
  return (
    <div className="page-vagas">
      <Head>
        <title>Nairuz | Marketing Digital - Vagas</title>
        <meta name="description" content="Está em busca de vagas para analista de marketing digital, vagas para desenvolvedor ou vagas para designer publicitário e UX designer? Seja um funcionairuz!" />
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
        <NewsletterNz />
      </main>
      <Footergeral />
      <VagasPopup />
    </div>
  )
}
