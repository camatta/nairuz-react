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
                      <li><Image src="/novaident/caseusericon.svg" alt="Icon Case" width={36} height={36} /> <p>+ de 14mil<br></br> <strong>usuários mensais</strong></p></li>
                      <li><Image src="/novaident/casedolaricon.svg" alt="Icon Case" width={36} height={36} /> <p>+ 800% de<br></br> <strong>faturamento</strong></p></li>
                      <li><Image src="/novaident/casemouseicon.svg" alt="Icon Case" width={36} height={36} /> <p>27% de vendas <br></br><strong>em busca orgânica</strong></p></li>
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
                      <li><Image src="/novaident/caseusericon.svg" alt="Icon Case" width={36} height={36} /> <p>+ de 60mil <br></br> <strong>usuários mensais</strong></p></li>
                      <li><Image src="/novaident/casemouseicon.svg" alt="Icon Case" width={36} height={36} /> <p>48% de vendas em<br></br> <strong>busca orgânica</strong></p></li>
                      <li><Image src="/novaident/caseupicon.svg" alt="Icon Case" width={36} height={36} /> <p>+90% de taxa<br></br> <strong>de conversão</strong></p></li>
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
                      <li><Image src="/novaident/caseusericon.svg" alt="Icon Case" width={36} height={36} /> <p>+ 1300% de acesso<br></br> <strong>orgânico</strong></p></li>
                      <li><Image src="/novaident/casemouseicon.svg" alt="Icon Case" width={36} height={36} /> <p>+ 110% de aumento<br></br> <strong>de venda orgânica</strong></p></li>
                      <li><Image src="/novaident/caseupicon.svg" alt="Icon Case" width={36} height={36} /> <p>+ 35% de aumento de<br></br> <strong>vendas por Inbound</strong></p></li>
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
                      <li><Image src="/novaident/caseupicon.svg" alt="Icon Case" width={36} height={36} /> <p>+ 400% de taxa<br></br> <strong>de conversão</strong> </p></li>
                      <li><Image src="/novaident/casedolaricon.svg" alt="Icon Case" width={36} height={36} /> <p>1500% de aumento no<br></br> <strong>faturamento</strong></p></li>
                      <li><Image src="/novaident/casemouseicon.svg" alt="Icon Case" width={36} height={36} /> <p>5000% de aumento<br></br> <strong>vendas por mídias<br></br> pagas</strong></p></li>
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
                      <li><Image src="/novaident/caseupicon.svg" alt="Icon Case" width={36} height={36} /> <p>+ de 60mil usuários<br></br> <strong>mensais</strong></p></li>
                      <li><Image src="/novaident/casemouseicon.svg" alt="Icon Case" width={36} height={36} /> <p>48% de vendas em<br></br> <strong>busca orgânica</strong></p></li>
                      <li><Image src="/novaident/caseupicon.svg" alt="Icon Case" width={36} height={36} /> <p>+90% de taxa de<br></br> <strong>conversão</strong></p></li>
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