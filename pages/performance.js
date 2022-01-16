import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Headergeral from '../components/Headergeral'
import HeaderMob from '../components/HeaderMob'
import CarrosselCases from '../components/CarrosselCases'

export default function Performance() {
  return (
    <div className="page-temas page-performance">
      <Head>
        <title>Nairuz - Performance</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.png" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css" integrity="sha512-tS3S5qG0BlhnQROyJXvNjeEM4UpMXHrQfTGmbQ1gKmelCxlSEBUaxhRBj/EFTzpbP4RVSrpEikbmdJobCvhE3g==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.min.css" integrity="sha512-sMXtMNL1zRzolHYKEujM2AqCLUR9F2C4/05cdbxjjLSRvMQIciEPCQZo++nk7go3BtSuK9kfa/s+a4f4i5pLkw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script>
      </Head>

      <Headergeral />
      <HeaderMob />

      <main>
        <section className="container-fluid" id="performance">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-5">
                <div className="title-temas">
                  <h1>Afinal, o que fazemos?</h1>
                </div>
                <div className="text-quemsomos">
                  <p>A era digital está cada vez mais presente na vida das pessoas. Por isso, adentrar esse mundo é o sucesso que você precisa para alavancar suas vendas virtuais e, nada melhor que fazer isso através de estratégias de marketing digital de qualidade, não é mesmo? Por isso, aqui na Nairuz contamos com especialistas no assunto!</p>
                </div>
                <div className="buttons-temas">
                  <Link href="#"><a className="saiba-mais-temas">Fale conosco</a></Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="container" id="clientes-performance">
          <div className="row">
            <div className="col-6">
              <div className="logos-clientes-performance">
                <ul className="d-flex align-items-center row1-logos mb-5">
                  <li><Image src="/clientes/bialetti.png" width={116} height={55} /></li>
                  <li><Image src="/clientes/gaggia.png" width={116} height={55} /></li>
                  <li><Image src="/clientes/imeltron.png" width={116} height={55} /></li>
                  <li><Image src="/clientes/lvstore.png" width={116} height={55} /></li>
                </ul>
                <ul className="d-flex align-items-center row2-logos mb-5">
                  <li><Image src="/clientes/maquiadoro.png" width={116} height={55} /></li>
                  <li><Image src="/clientes/samsung.png" width={116} height={55} /></li>
                  <li><Image src="/clientes/widestock.png" width={116} height={55} /></li>
                  <li><Image src="/clientes/pedigree.png" width={116} height={55} /></li>
                </ul>
                <ul className="d-flex align-items-center row3-logos mb-5">
                  <li><Image src="/clientes/minassal.png" width={116} height={55} /></li>
                  <li><Image src="/clientes/cybelar.png" width={116} height={55} /></li>
                  <li><Image src="/clientes/candy.png" width={116} height={55} /></li>
                  <li><Image src="/clientes/hepta.png" width={116} height={55} /></li>
                </ul>
                <ul className="d-flex align-items-center row4-logos mb-5">
                  <li><Image src="/clientes/rpm.png" width={116} height={55} /></li>
                  <li><Image src="/clientes/sempreviva.png" width={116} height={55} /></li>
                  <li><Image src="/clientes/novamed.png" width={116} height={55} /></li>
                  <li><Image src="/clientes/rcrio.png" width={116} height={55} /></li>
                </ul>
                <ul className="d-flex align-items-center row4-logos">
                  <li><Image src="/clientes/ludka.png" width={116} height={55} /></li>
                  <li><Image src="/clientes/udiaco.png" width={116} height={55} /></li>
                  <li><Image src="/clientes/chrisburguer.png" width={116} height={55} /></li>
                  <li><Image src="/clientes/covabra.png" width={116} height={55} /></li>
                </ul>
              </div>
            </div>
            <div className="col-6">
              <div className="text-clientes-performance">
              <div className="title-temas">
                  <h2>Clientes que confiam em nosso trabalho!</h2>
                </div>
                <div className="text-quemsomos">
                  <p>Ultrapassar as expectativas de nossos clientes: este é o nosso compromisso! Por isso, unimos tecnologia, estratégias de marketing e performance e know-how de uma equipe de especialistas experientes em entregar soluções e o melhor resultado para nossos parceiros! Quer descobrir como podemos impulsionar o seu negócio? Conheça nossos clientes e saiba o que dizem sobre nós!</p>
                </div>
                <div className="buttons-temas">
                  <Link href="#"><a className="saiba-mais-temas">Quero me tornar um case de sucesso</a></Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="container-fluid" id="marketing-performance">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="title-marketing-performance">
                  <h3>Como fazemos Marketing Digital?</h3>
                </div>
                <div className="text-marketing-performance">
                  <p>Com mais de uma década de experiência no universo digital, nossa equipe de especialistas atua no planejamento e definição de estratégias singulares para cada segmento de mercado. Através da união de tecnologia avançada e conhecimento prático em marketing digital, garantimos a melhor performance de resultados com foco total na experiência do usuário e conversão de vendas nos mais variados canais.</p>
                  <p>Nossa meta é o crescimento contínuo de nossos clientes parceiros e, por isso, promovemos um atendimento personalizado e planos sólidos de marketing digital, totalmente adaptados às necessidades de cada empresa. Quer saber como sua empresa pode alavancar os resultados com o Jeito Nairuz de desenvolver estratégias objetivas e assertivas para cada tipo de negócio?</p>
                </div>
                <div className="button-marketing-performance">
                  <Link href="#"><a className="saiba-mais-temas">Quero alavancar minhas vendas com o marketing digital</a></Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="container-fluid" id="apresentacao-performance">
          <div className="container">
            <div className="row d-flex align-items-center">
              <div className="col-6">
                <div className="text-apresentacao">
                  <div className="title-apresentacao">
                    <h2>Mas afinal, quais serviços ofertamos aos nossos clientes?</h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                <div className="text-servico-performance">
                  <div className="box-icon-title">
                    <div className="icon-servico-performance">
                      <Image src="/icon-layout.png" alt="Layout" width={68} height={68} />
                    </div>
                    <div className="title-servico-performance">
                      <h4>Layout para e-commerce</h4>
                    </div>
                  </div>
                  <div className="content-servico-performance">
                    <p>Desenvolvemos web sites, one pages, landing pages, implementação e desenvolvimento de layout para e-commerce. Somos apaixonados por usabilidade e nossos projetos são todos personalizados, pautados nas boas práticas de User Interface - UI e User Experience - UX com foco nos resultados. Além disso, trabalhamos com as mais recentes tecnologias do mercado.</p>
                  </div>
                  <div className="button-servico-performance">
                    <Link href="#"><a className="saiba-mais-temas">ABRIR MINHA LOJA ONLINE</a></Link>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="img-servico-performance right layout">
                  <Image src="/layout-performance.png" alt="Layout" width={400} height={403} />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                <div className="img-servico-performance website">
                  <Image src="/website-performance.png" alt="Layout" width={400} height={403} />
                </div>
              </div>
              <div className="col-6">
                <div className="text-servico-performance">
                  <div className="box-icon-title">
                    <div className="icon-servico-performance">
                      <Image src="/icon-website.png" alt="Websites" width={68} height={68} />
                    </div>
                    <div className="title-servico-performance">
                      <h4>Websites</h4>
                    </div>
                  </div>
                  <div className="content-servico-performance">
                    <p>Desenvolvemos web sites, one pages, landing pages, implementação e desenvolvimento de layout para e-commerce. Somos apaixonados por usabilidade e nossos projetos são todos personalizados, pautados nas boas práticas de User Interface - UI e User Experience - UX com foco nos resultados. Além disso, trabalhamos com as mais recentes tecnologias do mercado.</p>
                  </div>
                  <div className="button-servico-performance">
                    <Link href="#"><a className="saiba-mais-temas">PRECISO DE UM SITE</a></Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                <div className="text-servico-performance">
                  <div className="box-icon-title">
                    <div className="icon-servico-performance">
                      <Image src="/icon-midias.png" alt="Mídias Pagas" width={68} height={68} />
                    </div>
                    <div className="title-servico-performance">
                      <h4>Mídias Pagas</h4>
                    </div>
                  </div>
                  <div className="content-servico-performance">
                    <p>As mídias sociais também são responsáveis por atrair clientes e, por este motivo, é fundamental estar conectado em redes sociais relevantes para seu nicho de atuação com foco no gerenciamento, vendas, relacionamento e monitoramento de sua empresa.</p>
                  </div>
                  <div className="button-servico-performance">
                    <Link href="#"><a className="saiba-mais-temas">QUERO ATRAIR MAIS CLIENTES</a></Link>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="img-servico-performance right midias">
                  <Image src="/midias-performance.png" alt="Layout" width={400} height={403} />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                <div className="img-servico-performance inbound">
                  <Image src="/inbound-performance.png" alt="Layout" width={400} height={403} />
                </div>
              </div>
              <div className="col-6">
                <div className="text-servico-performance">
                  <div className="box-icon-title">
                    <div className="icon-servico-performance">
                      <Image src="/icon-inbound.png" alt="Inbound Marketing" width={68} height={68} />
                    </div>
                    <div className="title-servico-performance">
                      <h4>Inbound Marketing</h4>
                    </div>
                  </div>
                  
                  <div className="content-servico-performance">
                    <p>O Inbound Marketing, também conhecido como Marketing de Atração, é uma metodologia de marketing digital totalmente focada na conversão dos visitantes do seu negócio em clientes ativos, conduzindo-os pela jornada de compra de forma automatizada.</p>
                  </div>
                  <div className="button-servico-performance">
                    <Link href="#"><a className="saiba-mais-temas">QUERO MAIS CLIENTES ATIVOS</a></Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                <div className="text-servico-performance">
                  <div className="box-icon-title">
                    <div className="icon-servico-performance">
                      <Image src="/icon-seo.png" alt="SEO" width={68} height={68} />
                    </div>
                    <div className="title-servico-performance">
                      <h4>SEO</h4>
                    </div>
                  </div>
                  <div className="content-servico-performance">
                    <p>Nossa equipe irá fazer análises de seu site, de concorrentes e palavras-chave. Assim, através de otimizações, produção de conteúdos relevantes e link building, seu site apresentará crescimento organicamente.</p>
                  </div>
                  <div className="button-servico-performance">
                    <Link href="#"><a className="saiba-mais-temas">QUERO ESTAR NAS BUSCAS DO GOOGLE</a></Link>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="img-servico-performance right seo">
                  <Image src="/seo-performance.png" alt="Layout" width={400} height={403} />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="container-fluid" id="resultados-performance">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="icon-resultados">
                  <Image src="/icon-trofeu-resultados.svg" alt="Ícone Troféu" width={70} height={70} />
                </div>
                <div className="title-resultados text-center">
                  <h4>Resultados</h4>
                </div>
                <div className="text-resultados-performance text-center">
                  <p>Através de estratégias personalizadas, atingimos números e objetivos acima do esperado. Aqui estão alguns de nossos melhores resultados.</p>
                </div>
                <div className="carrossel-resultados-performance">
                  <CarrosselCases />
                </div>
                <div className="button-resultado-performance text-center">
                    <Link href="#"><a className="saiba-mais-temas">QUERO SER UM CASE DE SUCESSO</a></Link>
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
        <section className="container" id="parceiros-temas">
          <div className="row">
            <div className="col-12">
              <div className="parcerias-certificacoes">
                <div className="parcerias">
                  <ul className="d-flex align-items-center mb-4">
                    <li><Image src="/parcerias/signa.png" alt="Signa" width={105} height={49} /></li>
                    <li><Image src="/parcerias/biz.png" alt="BizCommerce" width={105} height={49} /></li>
                    <li><Image src="/parcerias/bis2bis.png" alt="Bis2Bis" width={105} height={49} /></li>
                    <li><Image src="/parcerias/linx.png" alt="Linx Commerce" width={105} height={49} /></li>
                    <li><Image src="/parcerias/mage.png" alt="Mageshop" width={105} height={49} /></li>
                    <li><Image src="/parcerias/uol.png" alt="Uol" width={105} height={49} /></li>
                    <li><Image src="/parcerias/vindi.png" alt="Vindi" width={105} height={49} /></li>
                    <li><Image src="/parcerias/pagarme.png" alt="pagar.me" width={105} height={49} /></li>
                  </ul>
                  <ul className="d-flex align-items-center mb-4">
                    <li><Image src="/parcerias/amazon.png" alt="Amazon" width={105} height={49} /></li>
                    <li><Image src="/parcerias/jet-logo.png" alt="Jetcommerce" width={105} height={49} /></li>
                    <li><Image src="/parcerias/anymarket.png" alt="AnyMarket" width={105} height={49} /></li>
                    <li><Image src="/parcerias/shopback.png" alt="Shopback" width={105} height={49} /></li>
                    <li><Image src="/parcerias/hubspot.png" alt="Hubspot" width={105} height={49} /></li>
                    <li><Image src="/parcerias/rd.png" alt="RD Station" width={105} height={49} /></li>
                    <li><Image src="/parcerias/semrush.png" alt="SemRush" width={105} height={49} /></li>
                    <li><Image src="/parcerias/appcampinas.png" alt="APP Campinas" width={105} height={49} /></li>
                  </ul>
                </div>
                <div className="certificacoes">
                  <ul className="d-flex align-items-center">
                    <li><Image src="/parcerias/googlepartner.png" alt="Google Partner" width={105} height={49} /></li>
                    <li><Image src="/parcerias/rdplatinum.png" alt="RD Platinum" width={105} height={49} /></li>
                    <li><Image src="/parcerias/ecommerce.png" alt="E-commerce Ouro" width={105} height={49} /></li>
                    <li><Image src="/parcerias/hubacademy.png" alt="HubSport Academy" width={105} height={49} /></li>
                    <li><Image src="/parcerias/magento.png" alt="Magento" width={105} height={49} /></li>
                    <li><Image src="/parcerias/linxpartners.png" alt="Linx Partners" width={105} height={49} /></li>
                    <li><Image src="/parcerias/vtexpartner.png" alt="vTex" width={105} height={49} /></li>
                  </ul>
                </div>
              </div>
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
                  <li><a href="#">SITE OFICIAL</a></li>
                  <li><a href="#">BLOG</a></li>
                  <li><a href="#">SOBRE NÓS</a></li>
                  <li><a href="#">CASES DE SUCESSO</a></li>
                </ul>
              </div>
              <div className="sociais">
                <ul>
                  <li><a href="#"><Image src="/icon-face-tema.png" alt="Facebook" width={25} height={25} /></a></li>
                  <li><a href="#"><Image src="/icon-instagram-tema.png" alt="Instagram" width={25} height={25}  /></a></li>
                  <li><a href="#"><Image src="/icon-youtube-tema.png" alt="YouTube" width={25} height={25}  /></a></li>
                  <li><a href="#"><Image src="/icon-linkedin-tema.png" alt="LinkedIn" width={25} height={25}  /></a></li>
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
      <script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js" integrity="sha512-bPs7Ae6pVvhOSiIcyUClR7/q2OAsRiovw4vAkX+zJbw3ShAeeqezq50RIIcIURq7Oa20rW2n2q+fyXBNcU9lrw==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
      <script src='https://nairuz.com.br/react/script.js'></script>
    </div>
  )
}
