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


  <div className='carrossel-header owl-carousel'>

    <div className="container-fluid" id="bg-carrossel1">
      <div className="container">
        <div className="row" id="carrossel">
          <div className="col-12">
            <div className="carrossel-principal">
              <div className="row">
                <div className="col-12 col-md-5">
                  <div className="left-carrossel">
                    <p>Unimos estratégias de marketing e tecnologia para o <strong>crescimento do seu negócio!</strong></p>
                  </div>
                  <div className="text-left-carrossel">
                    <p>Trabalhamos com soluções integradas para trazer sucesso para os nossos clientes. Deste modo, utilizamos tecnologia para conectar marcas e consumidores, sem perder a essência de um trabalho personalizado.</p>
                  </div>
                  <div className="button-left-carrossel">
                    <button onClick={urlCases}>Saiba Mais</button>
                  </div>
                </div>
                <div className="col-3 desktoponly"></div>
                <div className="col-12 col-md-4">
                  <div className="right-carrossel">
                   
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="container-fluid" id="bg-carrossel2">
      <div className="container">
        <div className="row" id="carrossel">
          <div className="col-12">
            <div className="carrossel-principal">
              <div className="row">
                <div className="col-12 col-md-5">
                  <div className="left-carrossel">
                    <p>Veja como a Maravilhas do Lar <strong>aumentou sua receita em 44%</strong> nos 6 primeiros meses de projeto!</p>
                  </div>
                  <div className="text-left-carrossel">
                    <p>O Marketing Digital, mais uma vez, mostrando-se essencial para o crescimento das empresas, independente do seu porte ou história no mercado, dessa forma trazendo resultados cada vez mais expressivos e entregando o seu produto diretamente ao seu consumidor almejado. Mas como isso foi possível? <strong>Conheça nossos Cases de Sucesso!</strong></p>
                  </div>
                  <div className="img-maravilhas-mobile mobileonly">
                    <Image src="/img-maravilhas-main-topo-mobile.png" alt="Maravilhas do Lar" width={280} height={180} />
                  </div>
                  <div className="button-left-carrossel">
                    <button onClick={urlCases}>Saiba Mais</button>
                  </div>
                </div>
                <div className="col-7 desktoponly">
                  <div className="img-main-topo">
                    <Image src="/img-maravilhas-main-topo.png" alt="Maravilhas do Lar" width={986} height={444} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

   

  </div>

  <div className="container">
    <div className="row">
      <div className="col-12">
        <div className="title-h1-home">
          <h1>Somos uma <strong>agência de marketing digital e tecnologia!</strong></h1>
        </div> 
      </div>
    </div>
  </div> 

</div>
</>
);

export default Headerhome;