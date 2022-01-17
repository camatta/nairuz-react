import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script'

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
                <li><a href="/">Home</a></li>
                <li><a href="/quem-somos">Quem Somos</a></li>
                <li><a href="/servicos">Serviços</a></li>
                <li><a href="/cases">Cases</a></li>
                <li><a href="/vagas">Funcionairuz</a></li>
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
    <Script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" />
  </header>
);

export default Headergeral;