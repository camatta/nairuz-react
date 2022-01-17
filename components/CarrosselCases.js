import Image from 'next/image'

const CarrosselCases = () => (
      <section className="container" id="carrossel-cases">
        <div className="row">
          <div className="col-12">
            <div className="cases-carrossel owl-carousel owl-default">
              <div className="card-cases">
                <div className="card1-case d-flex align-items-center">
                  <div className="logo-case">
                    <Image src="/logo-bialetti-cc.svg" alt="Case Bialetti" width={72} height={35} />
                  </div>
                  <div className="infos-case">
                    <ul>
                      <li><Image src="/cases/icon1-bialetti.svg" width={27} height={27} /> <p>+ de 14mil usuários mensais;</p></li>
                      <li><Image src="/cases/icon2-bialetti.svg" width={27} height={27} /> <p>+ 800% de faturamento;</p></li>
                      <li><Image src="/cases/icon3-bialetti.svg" width={27} height={27} /> <p>27% de vendas em busca orgânica.</p></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="card-cases">
                <div className="card2-case d-flex align-items-center">
                  <div className="logo-case">
                    <Image className="logo-case" src="/cases/logo-lv.svg" alt="LV Store" width={100} height={50} />
                  </div>
                  <div className="infos-case">
                    <ul>
                      <li><Image src="/cases/icon1-bialetti.svg" width={27} height={27} /> <p>+ de 60mil usuários mensais;</p></li>
                      <li><Image src="/cases/icon3-bialetti.svg" width={27} height={27} /> <p>48% de vendas em busca orgânica;</p></li>
                      <li><Image src="/cases/icon-arrow.svg" width={27} height={27} /> <p>+90% de taxa de conversão.</p></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="card-cases">
                <div className="card3-case d-flex align-items-center">
                  <div className="logo-case">
                    <Image className="logo-case" src="/cases/logo-nova.svg" alt="Nova Medicamentos" width={100} height={50} />
                  </div>
                  <div className="infos-case">
                    <ul>
                      <li><Image src="/cases/icon1-bialetti.svg" width={27} height={27} /> <p>+ 1300% de acesso orgânico;</p></li>
                      <li><Image src="/cases/icon3-bialetti.svg" width={27} height={27} /> <p>+ 110% de aumento de venda orgânica;</p></li>
                      <li><Image src="/cases/icon2-bialetti.svg" width={27} height={27} /> <p>+ 35% de aumento de vendas por Inbound.</p></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="card-cases">
                <div className="card4-case d-flex align-items-center">
                  <div className="logo-case">
                    <Image className="logo-case" src="/cases/logo-wide.svg" alt="Widestock" width={100} height={50} />
                  </div>
                  <div className="infos-case">
                    <ul>
                      <li><Image src="/cases/icon-arrow.svg" width={27} height={27} /> <p>+ 400% de taxa de conversão;</p></li>
                      <li><Image src="/cases/icon2-bialetti.svg" width={27} height={27} /> <p>1500% de aumento no faturamento;</p></li>
                      <li><Image src="/cases/icon3-bialetti.svg" width={27} height={27} /> <p>5000% de aumento vendas por mídias pagas.</p></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="card-cases">
                <div className="card5-case d-flex align-items-center">
                  <div className="logo-case">
                    <Image className="logo-case" src="/cases/logo-ctdi.svg" alt="Samsung CTDI" width={100} height={50} />
                  </div>
                  <div className="infos-case">
                    <ul>
                      <li><Image src="/cases/icon1-bialetti.svg" width={27} height={27} /> <p>+ de 60mil usuários mensais;</p></li>
                      <li><Image src="/cases/icon3-bialetti.svg" width={27} height={27} /> <p>48% de vendas em busca orgânica;</p></li>
                      <li><Image src="/cases/icon-arrow.svg" width={27} height={27} /> <p>+90% de taxa de conversão.</p></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
);

export default CarrosselCases;