import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Headergeral from '../components/Headergeral'
import HeaderMob from '../components/HeaderMob'
import Footergeral from '../components/Footergeral'
import BehanceNz from '../components/BehanceNz'

const urlBialetti = () => {
  document.location.href = '/cases/bialetti';
}

export default function Cases() {
  return (
    <div className="page-cases">
      <Head>
        <title>Nairuz | Marketing Digital - Cases</title>
        <meta name="description" content="Quer impulsionar os resultados da sua empresa por meio das estratégias de marketing digital? Acesse e conheça nossos cases de sucesso!" />
        <meta property="og:image" content="https://nairuz.com.br/og-nairuz.png" />
				<meta property="og:image:type" content="image/png" />
				<meta property="og:image:width" content="600" />
				<meta property="og:image:height" content="400" />
        <meta property="og:description" content="Conheça nossa Agência de Marketing Digital e Tecnologia e descubra como transformar os resultados da sua empresa. Acesse e saiba mais!" />
				<meta property="og:site_name" content="Nairuz | Marketing Digital" />
				<meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.png" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,300&display=swap" rel="stylesheet"></link>
      </Head>

      <Headergeral />
      <HeaderMob />
      <main>
        <section className="container-fluid" id="cases">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-4">
                <div className="title-cases">
                  <h1>Cases de Sucesso</h1>
                </div>
                <div className="text-cases">
                  <p>Através de estratégias personalizadas, atingimos números e objetivos acima do esperado, listamos abaixo alguns de nossos cases de sucesso. Que tal ser o próximo?</p>
                </div>
                <div className="button-cases open-popup-contato">
                  <button>Quero ser um case de sucesso</button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="container" id="nossos-cases">
          <div className="row">
            <div className="col-12">
              <div className="title-nossoscases">
                <h4>Nossos <span>Cases</span></h4>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="cases">
                <ul className="d-flex">
                  <li>
                    <div className="hide-case">
                      <div className="tags-case">
                        <span>Layout p/ e-commerce</span>
                        <span>Marketing Full-Service</span>
                      </div>
                      <div className="descricao-case">
                        <p>A marca centenária de cafeteiras italianas e utensílios para cozinha, Bialetti, marca presença na vida dos brasileiros agora também com loja oficial: a Bialetti Shop.</p>
                      </div>
                      <div className="servicos-case">
                        <ul>
                          <li><Image src="/cases/icon1-bialetti.svg" width={30} height={30} /> <p>+ de 14mil usuários mensais;</p></li>
                          <li><Image src="/cases/icon2-bialetti.svg" width={30} height={30} /> <p>+ 800% de faturamento;</p></li>
                          <li><Image src="/cases/icon3-bialetti.svg" width={30} height={30} /> <p>27% de vendas em busca orgânica.</p></li>
                        </ul>
                      </div>
                    </div>
                    <div className="button-case">
                      <a onClick={urlBialetti}><Image src="/cases/arrow-case.svg" alt="Ver Case" width={35} height={35} /></a>
                    </div>
                    <div className="visible-case">
                      <Image className="img-fluid" src="/cases/case-bialetti.png" alt="Bialetti" width={370} height={533} />
                      <div className="logocase">
                        <Image className="logo-case" src="/cases/logo-bialetti.svg" alt="Bialetti" width={100} height={50} />
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="hide-case">
                      <div className="tags-case">
                        <span>Layout p/ e-commerce</span>
                        <span>Marketing Full-Service</span>
                      </div>
                      <div className="descricao-case">
                        <p>A LV Store é uma marca de moda feminina, assinada pela designer Letícia Vaz. Com produtos únicos e de qualidade, a marca oferece a melhor experiência do usuário em sua loja online.</p>
                      </div>
                      <div className="servicos-case">
                        <ul>
                          <li><Image src="/cases/icon1-bialetti.svg" width={30} height={30} /> <p>+ de 60mil usuários mensais;</p></li>
                          <li><Image src="/cases/icon3-bialetti.svg" width={30} height={30} /> <p>48% de vendas em busca orgânica;</p></li>
                          <li><Image src="/cases/icon-arrow.svg" width={30} height={30} /> <p>+90% de taxa de conversão.</p></li>
                        </ul>
                      </div>
                    </div>
                    <div className="button-case">
                      <a href="#"><Image src="/cases/arrow-case.svg" alt="Ver Case" width={35} height={35} /></a>
                    </div>
                    <div className="visible-case">
                      <Image className="img-fluid" src="/cases/case-lv.png" alt="LV Store" width={370} height={533} />
                      <div className="logocase">
                        <Image className="logo-case" src="/cases/logo-lv.svg" alt="LV Store" width={100} height={50} />
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="hide-case">
                      <div className="tags-case">
                        <span>Marketing Full-Service</span>
                      </div>
                      <div className="descricao-case">
                        <p>A Nova Medicamentos, farmácia de medicamentos de alto custo, proporciona a seus clientes modernidade e praticidade na garantia do bem-estar e qualidade de vida.</p>
                      </div>
                      <div className="servicos-case">
                        <ul>
                          <li><Image src="/cases/icon1-bialetti.svg" width={30} height={30} /> <p>+ 1300% de acesso orgânico;</p></li>
                          <li><Image src="/cases/icon3-bialetti.svg" width={30} height={30} /> <p>+ 110% de aumento de venda orgânica;</p></li>
                          <li><Image src="/cases/icon2-bialetti.svg" width={30} height={30} /> <p>+ 35% de aumento de vendas por Inbound.</p></li>
                        </ul>
                      </div>
                    </div>
                    <div className="button-case">
                      <a href="#"><Image src="/cases/arrow-case.svg" alt="Ver Case" width={35} height={35} /></a>
                    </div>
                    <div className="visible-case">
                      <Image className="img-fluid" src="/cases/case-nova.png" alt="Nova Medicamentos" width={370} height={533} />
                      <div className="logocase">
                        <Image className="logo-case" src="/cases/logo-nova.svg" alt="Nova Medicamentos" width={100} height={50} />
                      </div>
                    </div>
                  </li>
                </ul>
                <ul className="d-flex">
                  <li>
                    <div className="hide-case">
                      <div className="tags-case">
                        <span>Marketing Full-Service</span>
                      </div>
                      <div className="descricao-case">
                        <p>A Wide Stock é referência na distribuição de descartáveis, produtos de limpeza e materiais de escritório. Com entrega para todo o país, é reconhecida pela rapidez e qualidade dos produtos.</p>
                      </div>
                      <div className="servicos-case">
                        <ul>
                          <li><Image src="/cases/icon-arrow.svg" width={30} height={30} /> <p>+ 400% de taxa de conversão;</p></li>
                          <li><Image src="/cases/icon2-bialetti.svg" width={30} height={30} /> <p>1500% de aumento no faturamento;</p></li>
                          <li><Image src="/cases/icon3-bialetti.svg" width={30} height={30} /> <p>5000% de aumento vendas por mídias pagas.</p></li>
                        </ul>
                      </div>
                    </div>
                    <div className="button-case">
                      <a href="#"><Image src="/cases/arrow-case.svg" alt="Ver Case" width={35} height={35} /></a>
                    </div>
                    <div className="visible-case">
                      <Image className="img-fluid" src="/cases/case-wide.png" alt="Widestock" width={370} height={533} />
                      <div className="logocase">
                        <Image className="logo-case" src="/cases/logo-wide.svg" alt="Widestock" width={100} height={50} />
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="hide-case">
                      <div className="tags-case">
                        <span>Website</span>
                        <span>Marketing Full-Service</span>
                      </div>
                      <div className="descricao-case">
                        <p>Com mais de 100 lojas autorizadas no mercado, a CTDI é referência mundial em soluções de assistência técnica e reparação de produtos Samsung.</p>
                      </div>
                      <div className="servicos-case">
                        <ul>
                          <li><Image src="/cases/icon1-bialetti.svg" width={30} height={30} /> <p>+ de 60mil usuários mensais;</p></li>
                          <li><Image src="/cases/icon3-bialetti.svg" width={30} height={30} /> <p>48% de vendas em busca orgânica;</p></li>
                          <li><Image src="/cases/icon-arrow.svg" width={30} height={30} /> <p>+90% de taxa de conversão.</p></li>
                        </ul>
                      </div>
                    </div>
                    <div className="button-case">
                      <a href="#"><Image src="/cases/arrow-case.svg" alt="Ver Case" width={35} height={35} /></a>
                    </div>
                    <div className="visible-case">
                      <Image className="img-fluid" src="/cases/case-samsung.png" alt="Samsung CTDI" width={370} height={533} />
                      <div className="logocase">
                        <Image className="logo-case" src="/cases/logo-ctdi.svg" alt="Samsung CTDI" width={100} height={50} />
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="hide-case">
                      <div className="tags-case">
                        <span>Layout p/ e-commerce</span>
                        <span>Marketing Full-Service</span>
                      </div>
                      <div className="descricao-case">
                        <p>A marca pioneira no desenvolvimento e produção de máquinas de café espresso, Gaggia Milano, faz história no Brasil com sua loja online oficial: Gaggia Shop.</p>
                      </div>
                      <div className="servicos-case">
                        <ul>
                          <li><Image src="/cases/icon1-bialetti.svg" width={30} height={30} /> <p>+ de 25% de vendas de origem orgânica;</p></li>
                          <li><Image src="/cases/icon2-bialetti.svg" width={30} height={30} /> <p>+ de 30% de taxa de abertura de e-mail marketing;</p></li>
                          <li><Image src="/cases/icon3-bialetti.svg" width={30} height={30} /> <p>+ 130% de usuários na loja online por meio do e-mail marketing.</p></li>
                        </ul>
                      </div>
                    </div>
                    <div className="button-case">
                      <a href="#"><Image src="/cases/arrow-case.svg" alt="Ver Case" width={35} height={35} /></a>
                    </div>
                    <div className="visible-case">
                      <Image className="img-fluid" src="/cases/case-gaggia.png" alt="Gaggia" width={370} height={533} />
                      <div className="logocase">
                        <Image className="logo-case" src="/cases/logo-gaggia.svg" alt="Gaggia" width={100} height={50} />
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <BehanceNz />
      </main>

      <Footergeral />
    </div>
  )
}
