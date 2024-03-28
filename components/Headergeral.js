import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script'

const urlHome = () => {
  document.location.href = '/';
}

const urlQuemSomos = () => {
  document.location.href = '/quem-somos';
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

const urlVagas = () => {
  document.location.href = '/vagas';
}

const urlCaseVolt = () => {
  document.location.href = '/cases/volt-spieler'
}
const urlAtlhetic = () => {
  document.location.href = '/cases/athletic'
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
        <div className="row d-flex align-items-center desktoponly">
          <div className="col-4">
            <div className="menu">
              <nav>
                <ul>
                  <li className="ativo"><button onClick={urlHome}>Home</button></li>
                  <li><button onClick={urlSobre}>Quem Somos</button></li>
                  <li><button onClick={urlServicos}>Serviços</button></li>
                  <li>
                    <button onClick={urlCases}>Cases</button>
                    <ul className='sub-menu'>
                      <li><button onClick={urlAtlhetic}>Athletic</button></li>
                      <li><button onClick={urlCaseVolt}>Volt/Spieler</button></li>
                      <li><button onClick={urlCases} className='menu-button underline'>Ver todos</button></li>
                    </ul>
                  </li>
                  <li><a href="https://blog.nairuz.com.br" target="_blank" rel="noopener noreferrer">Blog</a></li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="col-4">
            <div className="logo">
              <div onClick={urlHome}><Image src="/novaident/logonairuznovo.svg" alt="Logo Nairuz" width={129} height={27} /></div>
            </div>
          </div>
          <div className="col-4 social-contato">
            <div className="login-topo">
              <ul>
              <li><a href="https://www.linkedin.com/company/nairuz" target='_blank' rel="noreferrer"><Image src="/novaident/linkedinlogo.svg" alt="Logo Nairuz" width={33} height={33} /></a></li>
                <li><a href="https://www.instagram.com/nairuzdigital/" target='_blank' rel="noreferrer"><Image src="/novaident/instalogo.svg" alt="Logo Nairuz" width={33} height={33} /></a></li>
                <li><a href="https://api.whatsapp.com/send?phone=5519991406111" target='_blank' rel="noreferrer"><Image src="/novaident/whatslogo.svg" alt="Logo Nairuz" width={33} height={33} /></a></li>
              </ul>
            </div>
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