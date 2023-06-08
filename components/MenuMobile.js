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


const MenuMobile = () => (
  <div className="menu-mob mobileonly" id="menu-mobile">
    <div className="nav-mob">
      <div className="close-menu-mob">
        <button><Image src="/icon-close.svg" alt="Fechar" width={14} height={14} /></button>
      </div>
      <nav>
        <ul>
          <li className="ativo"><button onClick={urlHome}>Home</button></li>
          <li><button onClick={urlQuemSomos}>Quem Somos</button></li>
          <li><button onClick={urlServicos}>Serviços</button></li>
          <li><button onClick={urlCases}>Cases</button></li>
          <li><button onClick={urlVagas}>Funcionairuz</button></li>
          <li><a href="https://blog.nairuz.com.br" target="_blank" rel="noopener noreferrer">Blog</a></li>
        </ul>
      </nav>
      <div className="contato btn-mobile">
        <button className="btn-contato open-popup-contato">Entrar em contato</button>
      </div>
      <div className="logo-menu-mobile">
        <div onClick={urlHome}><Image src="/logo-header.svg" alt="Logo Nairuz" width={150} height={28}/></div>
      </div>
    </div>
  </div>
);

export default MenuMobile;