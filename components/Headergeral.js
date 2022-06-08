import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script'

const urlHome = () => {
  document.location.href = '/';
}

const urlQuemSomos = () => {
  document.location.href = '/quem-somos';
}

const urlServicos = () => {
  document.location.href = '/servicos';
}

const urlCases = () => {
  document.location.href = '/cases';
}

const urlVagas = () => {
  document.location.href = '/vagas';
}

const Headergeral = () => (

  <>
  <Script id="gtm" dangerouslySetInnerHTML={{ __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KCTM4JN');`}}></Script>

  <header className="container-fluid" id="header-geral">
    <div className="container">
      <div className="row d-flex align-items-center">
        <div className="col-2">
          <div className="logo">
            <a onClick={urlHome}><Image src="/novo-logo-header.svg" alt="Logo Nairuz" width={150} height={28}/></a>
          </div>
        </div>
        <div className="col-8">
          <div className="menu">
            <nav>
              <ul>
                <li><a onClick={urlHome}>Home</a></li>
                <li><a onClick={urlQuemSomos}>Quem Somos</a></li>
                <li><a onClick={urlServicos}>Serviços</a></li>
                <li><a onClick={urlCases}>Cases</a></li>
                <li><a onClick={urlVagas}>Funcionairuz</a></li>
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
  </>
);

export default Headergeral;