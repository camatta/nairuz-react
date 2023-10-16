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
        <title>Temas para e-commerce personalizáveis de acordo com o seu negócio! </title>
        <meta name="description" content="Peça o seu tema para e-commerce para a Nairuz e descubra como as empresas online garantem o seu destaque no mercado digital!" />
        <meta property="og:image" content="https://nairuz.com.br/og-nairuz.png" />
				<meta property="og:image:type" content="image/png" />
				<meta property="og:image:width" content="600" />
				<meta property="og:image:height" content="400" />
        <meta property="og:description" content="Peça o seu tema para e-commerce para a Nairuz e descubra como as empresas online garantem o seu destaque no mercado digital!" />
				<meta property="og:site_name" content="Temas para e-commerce personalizáveis de acordo com o seu negócio! " />
				<meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.png" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,300&display=swap" rel="stylesheet"></link>
      </Head>

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
                      <a href="https://xd.adobe.com/view/93d4c7d5-3f9d-4b45-9960-c4fff2d9fcce-c687/?fullscreen" target="_blank" rel="noopener noreferrer"><Image src="/modelo-diamond.png" alt="Diamond Preview" width={535} height={262} /></a>
                      <div className="efeito-previa">
                        <a href="https://xd.adobe.com/view/93d4c7d5-3f9d-4b45-9960-c4fff2d9fcce-c687/?fullscreen" target="_blank" rel="noopener noreferrer"><div className="image-text"><Image src="/icon-previa.png" alt="Preview" width={45} height={21} /><p>Ver prévia</p></div></a>
                      </div>
                    </div>
                    <div className="logo-modelo">
                      <Image src="/logo-diamond.svg" alt="Diamond Logo" width={120} height={120} />
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
                      <a href="https://xd.adobe.com/view/76c4e754-5a6c-4cd0-9163-dd4ed131a5a3-2397/?fullscreen" target="_blank" rel="noopener noreferrer"><Image src="/modelo-decora.png" alt="Decora Preview" width={535} height={262} /></a>
                      <div className="efeito-previa">
                        <a href="https://xd.adobe.com/view/76c4e754-5a6c-4cd0-9163-dd4ed131a5a3-2397/?fullscreen" target="_blank" rel="noopener noreferrer"><div className="image-text"><Image src="/icon-previa.png" alt="Preview" width={45} height={21} /><p>Ver prévia</p></div></a>
                      </div>
                    </div>
                    <div className="logo-modelo">
                      <Image src="/logo-decora.svg" alt="Decora Logo" width={100} height={100} />
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
                      <a href="https://xd.adobe.com/view/87400f55-f4de-476c-be8b-5491f6a2bd0e-d213/?fullscreen" target="_blank" rel="noopener noreferrer"><Image src="/modelo-food.png" alt="Food Preview" width={535} height={262} /></a>
                      <div className="efeito-previa">
                        <a href="https://xd.adobe.com/view/87400f55-f4de-476c-be8b-5491f6a2bd0e-d213/?fullscreen" target="_blank" rel="noopener noreferrer"><div className="image-text"><Image src="/icon-previa.png" alt="Preview" width={45} height={21} /><p>Ver prévia</p></div></a>
                      </div>
                    </div>
                    <div className="logo-modelo">
                      <Image src="/logo-food.png" alt="Food Logo" width={100} height={100} />
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
                      <a href="https://xd.adobe.com/view/792be5ab-ac35-454a-9c31-c3d3e3f8b195-2c78/?fullscreen" target="_blank" rel="noopener noreferrer"><Image src="/modelo-ruby.png" alt="Ruby Preview" width={535} height={262} /></a>
                      <div className="efeito-previa">
                        <a href="https://xd.adobe.com/view/792be5ab-ac35-454a-9c31-c3d3e3f8b195-2c78/?fullscreen" target="_blank" rel="noopener noreferrer"><div className="image-text"><Image src="/icon-previa.png" alt="Preview" width={45} height={21} /><p>Ver prévia</p></div></a>
                      </div>
                    </div>
                    <div className="logo-modelo">
                      <Image src="/logo-ruby.svg" alt="Ruby Logo" width={100} height={100} />
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
                      <a href="https://xd.adobe.com/view/2d9f6c74-a6d4-4475-ba6d-ef5a49e9564f-78cc/?fullscreen" target="_blank" rel="noopener noreferrer"><Image src="/modelo-athletic.png" alt="Athletic Preview" width={535} height={262} /></a>
                      <div className="efeito-previa">
                        <a href="https://xd.adobe.com/view/2d9f6c74-a6d4-4475-ba6d-ef5a49e9564f-78cc/?fullscreen" target="_blank" rel="noopener noreferrer"><div className="image-text"><Image src="/icon-previa.png" alt="Preview" width={45} height={21} /><p>Ver prévia</p></div></a>                      </div>
                    </div>
                    <div className="logo-modelo">
                      <Image src="/logo-athletic.png" alt="Athletic Logo" width={100} height={100} />
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
                      <a href="https://xd.adobe.com/view/7e3d8b1c-6afe-4996-a465-1ce3a3047b2c-2b6e/?fullscreen" target="_blank" rel="noopener noreferrer"><Image src="/modelo-gaming.png" alt="Gaming Preview" width={535} height={262} /></a>
                      <div className="efeito-previa">
                        <a href="https://xd.adobe.com/view/7e3d8b1c-6afe-4996-a465-1ce3a3047b2c-2b6e/?fullscreen" target="_blank" rel="noopener noreferrer"><div className="image-text"><Image src="/icon-previa.png" alt="Preview" width={45} height={21} /><p>Ver prévia</p></div></a>
                      </div>
                    </div>
                    <div className="logo-modelo">
                      <Image src="/logo-gaming.png" alt="Gaming Logo" width={100} height={100} />
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
                <li><Image src="/plataforma-nexaasSigna.png" alt="Signativa Logo" width={128} height={29} /></li>
                <li><Image src="/plataforma-linx.png" alt="Linx Logo" width={117} height={56} /></li>
                <li><Image src="/plataforma-mage.png" alt="Mageshop Logo" width={117} height={56} /></li>
                <li><Image src="/VTEX_Logo.svg" alt="Vtex Logo" width={128} height={30} /></li>
                <li><Image src="/plataforma-bizcommerce.svg" alt="Bizcommerce Logo" width={128} height={30} /></li>
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

      <Script src="https://code.jquery.com/jquery-3.6.0.min.js"
        strategy="beforeInteractive" />
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js" 
        strategy="beforeInteractive" />

      <Script id="show-banner" strategy="lazyOnload">
        {`
          if (window.RDStationForms) {
            new RDStationForms('lp-temas-2022-f5a70d1232b0935e9145', 'UA-48773259-1').createForm();
          }

          if($('.overlay-loading').length){
            setTimeout(function() { 
              $('body').addClass('loaded');
          }, 2000);
            setTimeout(function() { 
              $('body').addClass('out');
          }, 3000);
          } else {
            $('body').addClass('loaded');
          }

          (function(h,o,t,j,a,r){
            h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
            h._hjSettings={hjid:445751,hjsv:6};
            a=o.getElementsByTagName('head')[0];
            r=o.createElement('script');r.async=1;
            r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
            a.appendChild(r);
        })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');

            ;(function() {
                  var script = document.createElement('script');
                  script.id = '7a4b2d66-bf3e-4e13-8b5d-ed4fe6e475af';
                  script.type = 'module';
                  script.src = 'https://pageimprove.io';
                  document.head.appendChild(script);
              })()
        
        `
        }
      </Script>

      <Script type="text/javascript" src="https://d335luupugsy2.cloudfront.net/js/rdstation-forms/stable/rdstation-forms.min.js"></Script>
      <Script type="text/javascript" async src="https://d335luupugsy2.cloudfront.net/js/loader-scripts/58f2af1b-9339-4f1e-900b-b1cde4544bb4-loader.js" ></Script>
<noscript dangerouslySetInnerHTML={{ __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KCTM4JN"
height="0" width="0" style="display:none;visibility:hidden"></iframe>`}}></noscript>

    </div>
  )
}
