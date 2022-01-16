import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Headergeral from '../components/Headergeral'
import Footergeral from '../components/Footergeral'
import BehanceNz from '../components/BehanceNz'

export default function Cases() {
  return (
    <div className="page-cases">
      <Head>
        <title>Nairuz - Cases</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Headergeral />

      <main>
        <section className="container-fluid" id="cases">
          <div className="container">
            <div className="row">
              <div className="col-4">
                <div className="title-cases">
                  <h1>Cases de Sucesso</h1>
                </div>
                <div className="text-cases">
                  <p>Através de estratégias personalizadas, atingimos números e objetivos acima do esperado, listamos abaixo alguns de nossos cases de sucesso. Que tal ser o próximo?</p>
                </div>
                <div className="button-cases">
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
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ex ante, eleifend tempus fringilla sit amet, vestibulum at quam. Quisque gravida porta vehicula.</p>
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
                      <a href="#"><Image src="/cases/arrow-case.svg" alt="Ver Case" width={35} height={35} /></a>
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
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ex ante, eleifend tempus fringilla sit amet, vestibulum at quam. Quisque gravida porta vehicula.</p>
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
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ex ante, eleifend tempus fringilla sit amet, vestibulum at quam. Quisque gravida porta vehicula.</p>
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
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ex ante, eleifend tempus fringilla sit amet, vestibulum at quam. Quisque gravida porta vehicula.</p>
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
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ex ante, eleifend tempus fringilla sit amet, vestibulum at quam. Quisque gravida porta vehicula.</p>
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
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ex ante, eleifend tempus fringilla sit amet, vestibulum at quam. Quisque gravida porta vehicula.</p>
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
                      <a href="#"><Image src="/cases/arrow-case.svg" alt="Ver Case" width={35} height={35} /></a>
                    </div>
                    <div className="visible-case">
                      <Image className="img-fluid" src="/cases/case-bialetti.png" alt="Bialetti" width={370} height={533} />
                      <div className="logocase">
                        <Image className="logo-case" src="/cases/logo-bialetti.svg" alt="Bialetti" width={100} height={50} />
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
