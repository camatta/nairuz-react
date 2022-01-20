import Head from 'next/head'
import Image from 'next/image'
import BehanceNz from '../components/BehanceNz'
import HeaderMob from '../components/HeaderMob'
import Script from 'next/script';

const rollApresentacao = () => {
  document.location.href = '#apresentacao-temas';
}

const rollModelo = () => {
  document.location.href = '#modelos-temas';
}

const rollOrcamento = () => {
  document.location.href = '#form-temas';
}

export default function Temas() {
  return (
    <div className="page-temas">
      <Head>
        <title>Nairuz - Temas para E-commerce</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.png" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,300&display=swap" rel="stylesheet"></link>
      </Head>
        <header className="container-fluid" id="header-geral">
          <div className="container">
            <div className="row d-flex align-items-center">
              <div className="col-2">
                <div className="logo">
                  <Image src="/logo-header.svg" alt="Logo Nairuz" width={150} height={28}/>
                </div>
              </div>
              <div className="col-8">
                <div className="menu">
                  <nav>
                    <ul>
                      <li><button onClick={rollApresentacao}>O que são os temas?</button></li>
                      <li><button onClick={rollModelo}>Nossos temas</button></li>
                      <li><button onClick={rollOrcamento}>Orçamento</button></li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="col-2 text-right">
                <div className="contato">
                  <button onClick={rollOrcamento} className="btn-contato">Entrar em contato</button>
                </div>
              </div>
            </div>
          </div>
        </header>
        <HeaderMob />
      <main>
        <section className="container-fluid" id="temas">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-5">
                <div className="title-temas">
                  <h1>Abra sua loja online e alavanque suas vendas!</h1>
                </div>
                <div className="text-quemsomos">
                  <p>Com nossos temas, você pode abrir seu negócio e expor seus produtos em pouco tempo, bastando apenas aplicar sua identidade em uma de nossas estruturas de negócio pré-prontas. Fale com um de nossos consultores e garanta já seu e-commerce.</p>
                </div>
                <div className="buttons-temas">
                  <a className="saiba-mais-temas" onClick={rollApresentacao}>Saiba mais <Image src="/icon-arrow-down.svg" alt="Seta" width={12} height={12} /></a>
                  <a className="consultor-temas" onClick={rollOrcamento}>Falar com um consultor</a>
                </div>
              </div>
            </div>
          </div>
          <div className="separator-temas">
            <Image src="/icon-separator-nairuz.png" alt="Logo Nairuz" width={100} height={100} />
          </div>
        </section>
        <section className="container-fluid" id="apresentacao-temas">
          <div className="container">
            <div className="row d-flex align-items-center">
              <div className="col-12 col-md-6">
                <div className="text-apresentacao">
                  <div className="title-apresentacao">
                    <h2>o que são temas?</h2>
                  </div>
                  <div className="conteudo-apresentacao">
                    <p>Nossos temas nada mais são do que estruturas de layout pré-montadas e customizáveis. Ou seja, você pode trazer sua marca, sua identidade e seus produtos para um modelo de negócio já funcional. Tudo isso num período curto de tempo, a fim de garantir as primeiras vendas o mais rápido possível. Entre em contato com um de nossos consultores e traga sua loja para o mundo digital!</p>
                  </div>
                  <div className="buttons-apresentacao">
                    <a className="saiba-mais-temas" onClick={rollModelo}>Ver temas</a>
                    <a className="consultor-apresentacao" onClick={rollOrcamento}>Falar com um consultor</a>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="img-apresentacao">
                  <Image src="/img-temas.png" alt="Temas Nairuz" width={500} height={504} />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="container-fluid" id="modelos-temas">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="title-modelos text-center">
                  <h3>Nossos temas</h3>
                </div>
                <div className="text-modelos text-center">
                  <p>Criamos algumas lojas genéricas para exemplificar a flexibilidade visual de nossa estrutura de tema. Confira abaixo alguns exemplos, e veja qual mais se assemelha com o visual que você procura para a sua loja.</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-md-6">
                <div className="modelo-tema-card">
                  <div className="header-modelo">
                    <div className="img-modelo">
                      <Image src="/modelo-diamond.png" alt="Diamond Preview" width={535} height={262} />
                    </div>
                    <div className="logo-modelo">
                      <Image src="/logo-diamond.svg" alt="Diamond Logo" width={120} height={120} />
                    </div>
                    <div className="icon-modelo">
                      <Image src="/icon-modelo.svg" alt="Diamond" width={45} height={45} />
                    </div>
                  </div>
                  <div className="footer-modelo">
                    <div className="descricao-modelo">
                      <p><b>Diamond Clothing</b>: Tema de moda com visual monocromático.</p>
                    </div>
                    <div className="button-modelo">
                      <button className="btn-modelo" id="set-tema-diamond" onClick={rollOrcamento}>Usar Tema</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="modelo-tema-card">
                  <div className="header-modelo">
                    <div className="img-modelo">
                      <Image src="/modelo-decora.png" alt="Decora Preview" width={535} height={262} />
                    </div>
                    <div className="logo-modelo">
                      <Image src="/logo-decora.svg" alt="Decora Logo" width={100} height={100} />
                    </div>
                    <div className="icon-modelo">
                      <Image src="/icon-modelo.svg" alt="Decora" width={45} height={45} />
                    </div>
                  </div>
                  <div className="footer-modelo">
                    <div className="descricao-modelo">
                      <p><b>Decora Shop</b>: Tema de decoração com visual moderno e colorido.</p>
                    </div>
                    <div className="button-modelo">
                      <button className="btn-modelo" id="set-tema-decora" onClick={rollOrcamento}>Usar Tema</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-md-6">
                <div className="modelo-tema-card">
                  <div className="header-modelo">
                    <div className="img-modelo">
                      <Image src="/modelo-food.png" alt="Food Preview" width={535} height={262} />
                    </div>
                    <div className="logo-modelo">
                      <Image src="/logo-food.png" alt="Food Logo" width={100} height={100} />
                    </div>
                    <div className="icon-modelo">
                      <Image src="/icon-modelo.svg" alt="Food" width={45} height={45} />
                    </div>
                  </div>
                  <div className="footer-modelo">
                    <div className="descricao-modelo">
                      <p><b>Easy Food</b>: Tema de congelados com visual divertido e intuitivo.</p>
                    </div>
                    <div className="button-modelo">
                      <button className="btn-modelo" id="set-tema-food" onClick={rollOrcamento}>Usar Tema</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="modelo-tema-card">
                  <div className="header-modelo">
                    <div className="img-modelo">
                      <Image src="/modelo-ruby.png" alt="Ruby Preview" width={535} height={262} />
                    </div>
                    <div className="logo-modelo">
                      <Image src="/logo-ruby.svg" alt="Ruby Logo" width={100} height={100} />
                    </div>
                    <div className="icon-modelo">
                      <Image src="/icon-modelo.svg" alt="Ruby" width={45} height={45} />
                    </div>
                  </div>
                  <div className="footer-modelo">
                    <div className="descricao-modelo">
                      <p><b>Ruby Jewelry</b>: Tema de joalheria com visual minimalista.</p>
                    </div>
                    <div className="button-modelo">
                      <button className="btn-modelo" id="set-tema-ruby" onClick={rollOrcamento}>Usar Tema</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-md-6">
                <div className="modelo-tema-card">
                  <div className="header-modelo">
                    <div className="img-modelo">
                      <Image src="/modelo-athletic.png" alt="Athletic Preview" width={535} height={262} />
                    </div>
                    <div className="logo-modelo">
                      <Image src="/logo-athletic.png" alt="Athletic Logo" width={100} height={100} />
                    </div>
                    <div className="icon-modelo">
                      <Image src="/icon-modelo.svg" alt="Athletic" width={45} height={45} />
                    </div>
                  </div>
                  <div className="footer-modelo">
                    <div className="descricao-modelo">
                      <p><b>Athletic Store</b>: Tema de esportes com visual geométrico e colorido.</p>
                    </div>
                    <div className="button-modelo">
                      <button className="btn-modelo" id="set-tema-athletic" onClick={rollOrcamento}>Usar Tema</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="modelo-tema-card">
                  <div className="header-modelo">
                    <div className="img-modelo">
                      <Image src="/modelo-gaming.png" alt="Gaming Preview" width={535} height={262} />
                    </div>
                    <div className="logo-modelo">
                      <Image src="/logo-gaming.png" alt="Gaming Logo" width={100} height={100} />
                    </div>
                    <div className="icon-modelo">
                      <Image src="/icon-modelo.svg" alt="Gaming" width={45} height={45} />
                    </div>
                  </div>
                  <div className="footer-modelo">
                    <div className="descricao-modelo">
                      <p><b>T Gaming</b>: Tema de informática com fundo escuro e visual geek.</p>
                    </div>
                    <div className="button-modelo">
                      <button className="btn-modelo" id="set-tema-gaming" onClick={rollOrcamento}>Usar Tema</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="button-modelo-footer text-center">
                  <button>QUERO ABRIR MINHA LOJA ONLINE</button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="container-fluid" id="form-temas">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="text-header-form text-center">
                  <p>Transforme sua empresa em um</p>
                  <p><b>Case de sucesso!</b></p>
                  <p><span>Fale conosco!</span></p>
                  <p className="descricao-form">Preencha os campos do formulário e retornaremos o mais breve possível! Não divulgaremos suas informações e nem enviaremos spam.</p>
                </div>
                <div className="formRd-tema">
                  <div role="main" id="lp-temas-2022-f5a70d1232b0935e9145"></div>
                </div>
                <div className="form-tema">
                  <form>
                    <div className="linha-form">
                      <div className="form-nome">
                        <label htmlFor="nome">Nome *</label>
                        <input type="text" name="nome" id="nome" placeholder="Digite seu nome completo" />
                      </div>
                      <div className="form-email">
                        <label htmlFor="email">E-mail *</label>
                        <input type="email" className="input-email" name="email" id="email" placeholder="Seu melhor e-mail" />
                      </div>
                    </div>
                    <div className="linha-form">
                      <div className="form-nome">
                        <label htmlFor="nome">Telefone *</label>
                        <input type="text" name="nome" id="nome" placeholder="+55" />
                      </div>
                      <div className="form-email">
                        <label htmlFor="email">Empresa</label>
                        <input type="email" className="input-email" name="email" id="email" placeholder="Nome da sua empresa" />
                      </div>
                    </div>
                    <div className="linha-form">
                      <div className="form-email form-selects">
                        <label htmlFor="email">Qual dos temas mais se assemelha ao seu modelo de negócio?</label>
                        <input type="email" className="input-email" name="email" id="email" placeholder="Selecione" />
                      </div>
                    </div>
                    <div className="button-form-consultor">
                      <input className="button-form-temas" type="submit" value="FALAR COM UM DE NOSSOS CONSULTORES" />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        <BehanceNz />
        <section className="container" id="plataformas-temas">
          <div className="row">
            <div className="col-12">
              <ul className="d-flex align-items-center justify-content-center">
                <li><Image src="/plataforma-signa.png" alt="Signativa Logo" width={118} height={56} /></li>
                <li><Image src="/plataforma-linx.png" alt="Linx Logo" width={117} height={56} /></li>
                <li><Image src="/plataforma-mage.png" alt="Mageshop Logo" width={117} height={56} /></li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="footer-logo">
              <div className="logo">
                <Image src="/logo-footer.svg" alt="Nairuz" width={154} height={28} />
              </div>
              <div className="nav-footer">
                <ul>
                  <li><a href="https://nairuz.com.br">SITE OFICIAL</a></li>
                  <li><a href="https://blog.nairuz.com.br">BLOG</a></li>
                  <li><a href="https://nairuz.com.br/quem-somos">SOBRE NÓS</a></li>
                  <li><a href="https://nairuz.com.br/cases">CASES DE SUCESSO</a></li>
                </ul>
              </div>
              <div className="sociais">
                <ul>
                  <li><a href="https://www.facebook.com/NairuzConsultoriaDigital" target="_blank" rel="noopener noreferrer"><Image src="/icon-face-tema.png" alt="Facebook" width={25} height={25} /></a></li>
                  <li><a href="https://www.instagram.com/nairuzconsultoria" target="_blank" rel="noopener noreferrer"><Image src="/icon-instagram-tema.png" alt="Instagram" width={25} height={25}  /></a></li>
                  <li><a href="https://www.youtube.com/channel/UCu70MAqws64Vk2dYQlCFVYg" target="_blank" rel="noopener noreferrer"><Image src="/icon-youtube-tema.png" alt="YouTube" width={25} height={25}  /></a></li>
                  <li><a href="https://www.linkedin.com/company/nairuz" target="_blank" rel="noopener noreferrer"><Image src="/icon-linkedin-tema.png" alt="LinkedIn" width={25} height={25}  /></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid" id="copy-temas">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="copyright d-flex align-items-center justify-content-center mobcenter">
                <Image src="/selo-br.png" alt="Brasil" width={17} height={12} />
                <p>Nairuz Marketing e Tecnologia® 2021 / todos os direitos reservados</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Script type="text/javascript" async src="https://d335luupugsy2.cloudfront.net/js/loader-scripts/58f2af1b-9339-4f1e-900b-b1cde4544bb4-loader.js" ></Script>
      <Script type="text/javascript" src="https://d335luupugsy2.cloudfront.net/js/rdstation-forms/stable/rdstation-forms.min.js"></Script>

      <Script id="show-banner" strategy="lazyOnload">
        {`
          if (window.RDStationForms) {
            new RDStationForms('lp-temas-2022-f5a70d1232b0935e9145', 'UA-48773259-1').createForm();
          }
        `
        }
      </Script>

    </div>
  )
}
