import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script'


const urlHome = () => {
  document.location.href = '/';
}

const urlVagas = () => {
  document.location.href = '/vagas';
}

const urlSobre = () => {
  document.location.href = '/quem-somos';
}

const urlServicos = () => {
  document.location.href = '/servicos';
}

const urlCases = () => {
  document.location.href = '/cases';
}


const Headerhome = () => (
  <>

<Script id="gtm" dangerouslySetInnerHTML={{ __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KCTM4JN');`}}></Script>

<div className="container-fluid" id="wrapper-header-home">
  <header className="container-fluid" id="header-home">
    <div className="container">
        <div className="row d-flex align-items-center desktoponly">
          <div className="col-2">
            <div className="logo">
              <div onClick={urlHome}><Image src="/novo-logo-header.svg" alt="Logo Nairuz" width={150} height={50} /></div>
            </div>
          </div>
          <div className="col-8">
            <div className="menu">
              <nav>
                <ul>
                  <li className="ativo"><button onClick={urlHome}>Home</button></li>
                  <li><button onClick={urlSobre}>Quem Somos</button></li>
                  <li><button onClick={urlServicos}>Serviços</button></li>
                  <li><button onClick={urlCases}>Cases</button></li>
                  <li><button onClick={urlVagas}>Funcionairuz</button></li>
                  <li><a href="https://blog.nairuz.com.br" target="_blank" rel="noopener noreferrer">Blog</a></li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="col-2 text-right">
            <div className="contato">
              <button className="btn-contato open-popup-contato">Entrar em contato</button>
            </div>
          </div>
        </div>
      </div>
  </header>

  <div className='carrossel-header'>

    <div className="container-fluid" id="bg-carrossel1">
      <div className="container">
        <div className="row" id="carrossel">
          <div className="col-12">
            <div className="carrossel-principal">
              <div className="row">
                <div className="col-12 col-md-4">
                  <div className="left-carrossel topo-h1">
                    <h1>Somos uma <strong>agência de marketing digital e tecnologia!</strong></h1>
                  </div>
                  <div className="left-carrossel">
                    <p>Veja como a Maravilhas do Lar <b>aumentou sua receita em 44%</b> nos 6 primeiros meses de projeto!</p>
                  </div>
                </div>
                <div className="col-3 desktoponly"></div>
                <div className="col-12 col-md-5">
                  <div className="right-carrossel">
                    <div className="cards d-flex text-center">
                      <div className="card1">
                        <div className="img-card">
                          <Image src="/icon-user-top.svg" alt="Usuários" width={51} height={51} />
                        </div>
                        <div className="title-card">
                          <p>+ de <b>46%</b> de aumento em transações</p>
                        </div>
                        <div className="desc-card">
                          <p>Média mensal de transações concluídas no e-commerce.</p>
                        </div>
                      </div>
                      <div className="card2">
                        <div className="img-card">
                          <Image src="/icon-money-top.svg" alt="Usuários" width={51} height={51} />
                        </div>
                        <div className="title-card">
                          <p>+ <b>12%</b> no tráfego</p>
                        </div>
                        <div className="desc-card">
                          <p>Aumento alcançado sem alterações na verba média de Investimento em Ads.</p>
                        </div>
                      </div>
                    </div>
                    <div className="descricao-right">
                      <p className="desktoponly">O Marketing Digital, mais uma vez, mostrando-se essencial para o crescimento das empresas, independente do seu porte ou história no mercado, dessa forma trazendo resultados cada vez mais expressivos e entregando o seu produto diretamente ao seu consumidor almejado. Mas como isso foi possível? Conheça nossos Cases de Sucesso!</p>
                      <div className="button-right">
                        <button onClick={urlCases}>Saiba Mais</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    

  </div>

</div>
</>
);

export default Headerhome;