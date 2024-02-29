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
          <div className="col-4">
            <div className="menu">
              <nav>
                <ul>
                  <li className="ativo"><button onClick={urlHome}>Home</button></li>
                  <li><button onClick={urlSobre}>Quem Somos</button></li>
                  <li><button onClick={urlServicos}>Serviços</button></li>
                  <li><button onClick={urlCases}>Cases</button></li>
                  <li><a href="https://blog.nairuz.com.br" target="_blank" rel="noopener noreferrer">Blog</a></li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="col-4">
            <div className="logo">
              <div onClick={urlHome}><Image src="/novaident/logonairuznovo.svg" alt="Logo Nairuz" width={150} height={50} /></div>
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


  <div className='carrossel-header owl-carousel'>

    <div className="container-fluid" id="bg-carrossel1">
      <div className="container">
        <div className="row" id="carrossel">
          <div className="col-12">
            <div className="carrossel-principal">
              <div className="row">
                <div className="col-12 col-md-5">
                  <div className="left-carrossel">
                    <p>Unimos estratégias de<br></br> marketing e tecnologia para o<br></br> <strong>crescimento do seu negócio!</strong></p>
                  </div>
                  <div className="button-left-carrossel">
                    <button onClick={urlCases}>Conheça nosso trabalho</button>
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
                    <p>Unimos estratégias de<br></br> marketing e tecnologia para o<br></br> <strong>crescimento do seu negócio!</strong></p>
                  </div>
                  <div className="button-left-carrossel">
                    <button onClick={urlCases}>Conheça nosso trabalho</button>
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
   

  </div>

  <div className="container">
    <div className="row">
      <div className="col-12">
        <div className="title-h1-home">
          <h1>Somos uma agência de <strong>marketing digital e tecnologia!</strong></h1>
        </div> 
      </div>
    </div>
  </div> 

</div>
</>
);

export default Headerhome;