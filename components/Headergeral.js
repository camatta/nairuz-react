import Link from 'next/link';
import Image from 'next/image';

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
  <header className="container-fluid" id="header-geral">
    <div className="container">
      <div className="row d-flex align-items-center">
        <div className="col-2">
          <div className="logo">
            <a onClick={urlHome}><Image src="/logo-header.svg" alt="Logo Nairuz" width={150} height={28}/></a>
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
);

export default Headergeral;