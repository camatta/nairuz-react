import Link from 'next/link';
import Image from 'next/image';

const Headergeral = () => (
  <header className="container-fluid" id="header-geral">
    <div className="container">
      <div className="row d-flex align-items-center">
        <div className="col-2">
          <div className="logo">
            <Link href="/"><a><Image src="/logo-header.svg" alt="Logo Nairuz" width={150} height={28}/></a></Link>
          </div>
        </div>
        <div className="col-8">
          <div className="menu">
            <nav>
              <ul>
                <li><Link href="/"><a>Home</a></Link></li>
                <li><Link href="/quem-somos"><a>Quem Somos</a></Link></li>
                <li><Link href="/servicos"><a>Serviços</a></Link></li>
                <li><Link href="/cases"><a>Cases</a></Link></li>
                <li><Link href="/vagas"><a>Funcionairuz</a></Link></li>
                <li><Link href="/"><a>Blog</a></Link></li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="col-2 text-right">
          <div className="contato">
            <button className="btn-contato">Entrar em contato</button>
          </div>
        </div>
      </div>
    </div>
  </header>
);

export default Headergeral;