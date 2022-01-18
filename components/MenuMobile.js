import Link from 'next/link';
import Image from 'next/image';

const MenuMobile = () => (
  <div className="menu-mob mobileonly" id="menu-mobile">
    <div className="nav-mob">
      <div className="close-menu-mob">
        <button><Image src="/icon-close.svg" alt="Fechar" width={14} height={14} /></button>
      </div>
      <nav>
        <ul>
          <li><Link href="/"><a>Home</a></Link></li>
          <li><Link href="/quem-somos"><a>Quem Somos</a></Link></li>
          <li><Link href="/servicos"><a>Serviços</a></Link></li>
          <li><Link href="/cases"><a>Cases</a></Link></li>
          <li><Link href="/vagas"><a>Funcionairuz</a></Link></li>
          <li><a href="https://blog.nairuz.com.br" target="_blank" rel="noopener noreferrer">Blog</a></li>
        </ul>
      </nav>
      <div className="contato btn-mobile">
        <button className="btn-contato open-popup-contato">Entrar em contato</button>
      </div>
      <div className="logo-menu-mobile">
        <Link href="/"><a><Image src="/logo-header.svg" alt="Logo Nairuz" width={150} height={28}/></a></Link>
      </div>
    </div>
  </div>
);

export default MenuMobile;