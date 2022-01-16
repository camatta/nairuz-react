import Link from 'next/link';
import Image from 'next/image';

const Headerhome = () => (
  <div className='owl-carousel carrossel-header'>
    <header className="container-fluid" id="header-home">
      <div className="container">
        <div className="row d-flex align-items-center desktoponly">
          <div className="col-2">
            <div className="logo">
              <Link href="/"><a href="#"><Image src="/logo-header.svg" alt="Logo Nairuz" width={150} height={28} /></a></Link>
            </div>
          </div>
          <div className="col-8">
            <div className="menu">
              <nav>
                <ul>
                  <li className="ativo"><Link href="/"><a>Home</a></Link></li>
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
      <div className="container">
        <div className="row" id="carrossel">
          <div className="col-12">
            <div className="carrossel-principal">
              <div className="row">
                <div className="col-12 col-md-4">
                  <div className="left-carrossel">
                    <p>Veja como a Bialetti Shop <b>aumentou seu faturamento em 800%</b> em menos de um ano!</p>
                  </div>
                </div>
                <div className="col-3 desktoponly">

                </div>
                <div className="col-12 col-md-5">
                  <div className="right-carrossel">
                    <div className="cards d-flex text-center">
                      <div className="card1">
                        <div className="img-card">
                          <Image src="/icon-user-top.svg" alt="Usuários" width={51} height={51} />
                        </div>
                        <div className="title-card">
                          <p>+ de <b>14mil</b> usuários mensais</p>
                        </div>
                        <div className="desc-card">
                          <p>Média mensal de usuários que acessam o e-commerce.</p>
                        </div>
                      </div>
                      <div className="card2">
                        <div className="img-card">
                          <Image src="/icon-money-top.svg" alt="Usuários" width={51} height={51} />
                        </div>
                        <div className="title-card">
                          <p>+ 800% de faturamento</p>
                        </div>
                        <div className="desc-card">
                          <p>Aumento drástico no faturamento da empresa.</p>
                        </div>
                      </div>
                    </div>
                    <div className="descricao-right">
                      <p className="desktoponly">Para isso, a empresa então utilizou o marketing digital de uma maneira construtiva, na qual o seu sucesso aqui no Brasil foi garantido, aumentando suas vendas em diversos patamares. Mas como isso foi possível?</p>
                      <div className="button-right">
                        <button><a href="#">Saiba Mais</a></button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <header className="container-fluid" id="header-home2">
    <div className="container">
      <div className="row d-flex align-items-center desktoponly">
        <div className="col-2">
          <div className="logo">
            <Link href="/"><a href="#"><Image src="/logo-header.svg" alt="Logo Nairuz" width={150} height={28} /></a></Link>
          </div>
        </div>
        <div className="col-8">
          <div className="menu">
            <nav>
              <ul>
                <li className="ativo"><Link href="/"><a>Home</a></Link></li>
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
    <div className="container">
      <div className="row" id="carrossel">
        <div className="col-12">
          <div className="carrossel-principal">
            <div className="row">
              <div className="col-12 col-md-4">
                <div className="left-carrossel">
                  <p>Somos uma empresa de marketing e tecnologia apaixonada por fazer <b>você crescer!</b></p>
                </div>
              </div>
              <div className="col-3 desktoponly">

              </div>
              <div className="col-12 col-md-5">
                <div className="right-carrossel">
                  <div className="cards d-flex text-center">
                    <div className="card1">
                      <div className="img-card">
                        <Image src="/icon-user-top.svg" alt="Usuários" width={51} height={51} />
                      </div>
                      <div className="title-card">
                        <p>+ de <b>14mil</b> usuários mensais</p>
                      </div>
                      <div className="desc-card">
                        <p>Média mensal de usuários que acessam o e-commerce.</p>
                      </div>
                    </div>
                    <div className="card2">
                      <div className="img-card">
                        <Image src="/icon-money-top.svg" alt="Usuários" width={51} height={51} />
                      </div>
                      <div className="title-card">
                        <p>+ 800% de faturamento</p>
                      </div>
                      <div className="desc-card">
                        <p>Aumento drástico no faturamento da empresa.</p>
                      </div>
                    </div>
                  </div>
                  <div className="descricao-right">
                    <p className="desktoponly">Para isso, a empresa então utilizou o marketing digital de uma maneira construtiva, na qual o seu sucesso aqui no Brasil foi garantido, aumentando suas vendas em diversos patamares. Mas como isso foi possível?</p>
                    <div className="button-right">
                      <button><a href="#">Saiba Mais</a></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </header>
  </div>
);

export default Headerhome;