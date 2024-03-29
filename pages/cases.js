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

const urlLVStore = () => {
  document.location.href = '/cases/lvstore';
}

const urlMinassal = () => {
  document.location.href = '/cases/minassal';
}

const urlInfocards = () => {
  document.location.href = '/cases/infocards';
}

const urlRPM = () => {
  document.location.href = '/cases/lojasrpm';
}

const urlNovaMed = () => {
  document.location.href = '/cases/nova-medicamentos';
}

const urlCSP = () => {
  document.location.href = '/cases/casa-sao-pedro';
}

const urlCovabra = () => {
  document.location.href = '/cases/covabra';
}

const urlBonecario = () => {
  document.location.href = '/cases/bonecario';
}

const urlMaravilhas = () => {
  document.location.href = '/cases/maravilhas-do-lar';
}

const urlTranspalet = () => {
  document.location.href = '/cases/transpalet';
}

const urlDcorp = () => {
  document.location.href = '/cases/dcorp';
}

const urlAthletic = () => {
  document.location.href = '/cases/athletic';
}


export default function Cases() {
  return (
    <div className="page-cases">
      <Head>
        <title>Marcas que fazem parte do nossos Cases de Sucesso!</title>
        <meta name="description" content="Quer impulsionar os resultados da sua empresa ainda hoje com estratégias de marketing digital? Acesse e conheça nossos cases de sucesso!" />
        <meta property="og:image" content="https://nairuz.com.br/og-nairuz.png" />
				<meta property="og:image:type" content="image/png" />
				<meta property="og:image:width" content="600" />
				<meta property="og:image:height" content="400" />
        <meta property="og:description" content="Quer impulsionar os resultados da sua empresa ainda hoje com estratégias de marketing digital? Acesse e conheça nossos cases de sucesso!" />
				<meta property="og:site_name" content="Marcas que fazem parte do nossos Cases de Sucesso!" />
				<meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.png" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css" integrity="sha512-tS3S5qG0BlhnQROyJXvNjeEM4UpMXHrQfTGmbQ1gKmelCxlSEBUaxhRBj/EFTzpbP4RVSrpEikbmdJobCvhE3g==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.min.css" integrity="sha512-sMXtMNL1zRzolHYKEujM2AqCLUR9F2C4/05cdbxjjLSRvMQIciEPCQZo++nk7go3BtSuK9kfa/s+a4f4i5pLkw==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,300&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"></link>
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
              <div className="owl-carousel carrossel-page-cases">
                <div className="case-item">
                  <div className="hide-case">
                    <div className="tags-case">
                      <span>Marketing full-service</span>
                    </div>
                    <div className="descricao-case athletic">
                      <p>A empresa Athletic, líder no mercado de equipamentos fitness na América Latina com mais de três décadas de experiência em oferecer soluções inovadoras para entusiastas de atividades físicas, enfrentou desafios significativos em sua busca por crescimento sustentável. Consciente das constantes mudanças no mercado e das crescentes expectativas dos consumidores,a empresa percebeu a necessidade de reinventar suas estratégias de marketing e presença online.</p>
                    </div>
                    <div className="servicos-case">
                      <ul>
                        <li><Image src="/novaident/cases/athletic/cursor.svg" width={16} height={16} /> <p>+ 105% no faturamento;</p></li>
                        <li><Image src="/novaident/cases/athletic/cash.svg" width={16} height={16} /> <p>+ 221,5% no tráfego do site da empresa.</p></li>
                      </ul>
                    </div>
                  </div>
                  <div className="button-case">
                    <a onClick={urlAthletic}><Image src="/cases/arrow-case.svg" alt="Ver Case" width={35} height={35} /></a>
                  </div>
                  <div className="visible-case">
                    <Image className="img-fluid" src="/novaident/cases/athletic/fundo-case.png" alt="Athletic" width={370} height={533} />
                    <div className="logocase dcorp">
                      <Image className="logo-case" src="/novaident/cases/athletic/logo-athletic.svg" alt="Athletic" width={69} height={48} />
                    </div>
                  </div>
                </div>
                <div className="case-item">
                    <div className="hide-case">
                      <div className="tags-case">
                        <span>Layout Personalizado</span>
                        <span>Marketing full-service</span>
                        <span className='seodcorp'>SEO</span>
                      </div>
                      <div className="descricao-case dcorp">
                        <p>A Daros Corp é um grupo empresarial do setor pet, focada em comércio e desenvolvimento internacional, fundada em 1995, em Itajaí /SC. Hoje, a empresa é responsável por importar e comercializar as renomadas marcas Oster, Propetz e Choyer. Reconhecida como uma das empresas líderes de mercado em sua área de atuação, a Daros Corp tem uma trajetória marcada por inovação, responsabilidade social e transparência.</p>
                      </div>
                      <div className="servicos-case">
                        <ul>
                          <li><Image src="/novaident/cases/iconcaseup.svg" width={16} height={16} /> <p>+ 81% tráfego orgânico;</p></li>
                          <li><Image src="/novaident/cases/iconcasedown.svg" width={16} height={16} /> <p>Queda de 92% na taxa de rejeição;</p></li>
                          <li><Image src="/novaident/cases/iconcomputador.svg" width={16} height={16} /> <p>Redução de 42% no tempo de<br></br> carregamento das páginas.</p></li>
                        </ul>
                      </div>
                    </div>
                    <div className="button-case">
                      <a onClick={urlDcorp}><Image src="/cases/arrow-case.svg" alt="Ver Case" width={35} height={35} /></a>
                    </div>
                    <div className="visible-case">
                      <Image className="img-fluid" src="/novaident/fundocasedcorp.png" alt="Dcorp" width={370} height={533} />
                      <div className="logocase dcorp">
                        <Image className="logo-case" src="/dcorp/icon4.svg" alt="Dcorp" width={69} height={48} />
                      </div>
                    </div>
                </div>
                <div className="case-item">
                  <div className="hide-case">
                    <div className="tags-case">
                      <span>Marketing full-service</span>
                    </div>
                    <div className="descricao-case">
                      <p>A Transpalet é uma empresa que trabalha exclusivamente com os equipamentos de movimentação de carga da marca Paletrans, uma das maiores representantes do mercado mundial. Fundada em 2014 por Leandro Prado, hoje em dia, ela conta com um extenso e variado estoque, com mais de 2 mil itens, como empilhadeiras e transpaleteiras, além das peças de reposição.</p>
                    </div>
                    <div className="servicos-case">
                      <ul>
                        <li><Image src="/novaident/cases/iconcaseuser.svg" width={16} height={16} /> <p>Pontos fora da curva foram detectados<br />e corrigidos;</p></li>
                        <li><Image src="/novaident/cases/iconcasecursor.svg" width={16} height={16} /> <p>1° lugar em vendas de peças de<br />reposição Paletrans;</p></li>
                        <li><Image src="/novaident/cases/iconcaseup.svg" width={16} height={16} /> <p>O faturamento de 2022 foi 17,82%<br /> maior que o faturamento de 2021.</p></li>
                      </ul>
                    </div>
                  </div>
                  <div className="button-case">
                    <a onClick={urlTranspalet}><Image src="/cases/arrow-case.svg" alt="Ver Case" width={35} height={35} /></a>
                  </div>
                  <div className="visible-case">
                    <Image className="img-fluid" src="/novaident/fundocasetranspalet.png" alt="Transpalet" width={370} height={533} />
                    <div className="logocase transpalet">
                      <Image className="logo-case" src="/cases/logo-transpalet.svg" alt="Transpalet" width={69} height={48} />
                    </div>
                  </div>
                </div>
                <div className="case-item">
                  <div className="hide-case">
                    <div className="tags-case">
                      <span>Tráfego Pago</span>
                    </div>
                    <div className="descricao-case">
                      <p>Fundada em 2003, em Jundiaí, interior de São Paulo, a Maravilhas do Lar traz em sua essência a preocupação com a experiência de compra dos clientes. Por isso, em sem e-commerce, não poderia ser diferente. Entrando no site, você já pode ver todas as categorias disponíveis e também as principais promoções do dia.</p>
                    </div>
                    <div className="servicos-case">
                      <ul>
                        <li><Image src="/novaident/cases/iconcaseuser.svg" width={16} height={16} /> <p>20% no aumento de transações;</p></li>
                        <li><Image src="/novaident/cases/iconcasecursor.svg" width={16} height={16} /> <p>9% de aumento em tráfego pago;</p></li>
                        <li><Image src="/novaident/cases/iconcaseup.svg" width={16} height={16} /> <p>Aumento de 44% na receita nos<br />6 primeiros meses de projeto.</p></li>
                      </ul>
                    </div>
                  </div>
                  <div className="button-case">
                    <a onClick={urlMaravilhas}><Image src="/cases/arrow-case.svg" alt="Ver Case" width={35} height={35} /></a>
                  </div>
                  <div className="visible-case">
                    <Image className="img-fluid" src="/novaident/fundocasemaravilhas.png" alt="Maravilhas do Lar" width={370} height={533} />
                    <div className="logocase">
                      <Image className="logo-case" src="/cases/logo-maravilhas.svg" alt="Maravilhas do Lar" width={126} height={78} />
                    </div>
                  </div>
                </div>
                <div className="case-item">
                  <div className="hide-case">
                    <div className="tags-case">
                      <span>Layout para blog</span>
                    </div>
                    <div className="descricao-case">
                      <p>O Covabra está no mercado desde 1989, Hoje com 18 lojas na região metropolitana de Campinas. O primeiro contato com a Nairuz, que deveria ser exclusivamente técnico, evoluiu para o acompanhamento também das estratégias de aquisição de tráfego pago (mídias pagas) e SEO.</p>
                    </div>
                    <div className="servicos-case">
                      <ul>
                        <li><Image src="/novaident/cases/iconcaseup.svg" width={16} height={16} /> <p>+ 127% acessos orgânicos;</p></li>
                        <li><Image src="/novaident/cases/iconcasedolar.svg" width={16} height={16} /> <p>+ 92% de aumento no faturamento<br />do e-commerce;</p></li>
                        <li><Image src="/novaident/cases/iconcasecursor.svg" width={16} height={16} /> <p>ROAS maior que 1100% em campanhas pagas.</p></li>
                      </ul>
                    </div>
                  </div>
                  <div className="button-case">
                    <a onClick={urlCovabra}><Image src="/cases/arrow-case.svg" alt="Ver Case" width={35} height={35} /></a>
                  </div>
                  <div className="visible-case">
                    <Image className="img-fluid" src="/novaident/fundocasecovabra.png" alt="Covabra" width={370} height={533} />
                    <div className="logocase">
                      <Image className="logo-case" src="/cases/logo-covabra.svg" alt="Covabra" width={126} height={78} />
                    </div>
                  </div>
                </div>
                <div className="case-item">
                  <div className="hide-case">
                    <div className="tags-case">
                      <span>Layout Personalizado</span>
                    </div>
                    <div className="descricao-case">
                      <p>A Bonecário é uma loja que envolve, principalmente, a montagem de bonecos personalizados a partir de um fluxo de etapas consecutivas que resultam em um boneco totalmente único. Os usuários conseguem fazer a montagem e acompanhar a visualização do boneco em tempo real.</p>
                    </div>
                    <div className="servicos-case">
                      <ul>
                        <li><Image src="/novaident/cases/iconcasecursor.svg" width={16} height={16} /> <p>Navegação clara e objetiva;</p></li>
                        <li><Image src="/novaident/cases/iconcaseuser.svg" width={16} height={16} /> <p>Layout totalmente personalizado;</p></li>
                        <li><Image src="/novaident/cases/iconcaseup.svg" width={16} height={16} /> <p>Mais de 1000 montagens disponíveis.</p></li>
                      </ul>
                    </div>
                  </div>
                  <div className="button-case">
                    <a onClick={urlBonecario}><Image src="/cases/arrow-case.svg" alt="Ver Case" width={35} height={35} /></a>
                  </div>
                  <div className="visible-case">
                    <Image className="img-fluid" src="/novaident/fundocasebonecario.png" alt="Bonecário" width={370} height={533} />
                    <div className="logocase">
                      <Image className="logo-case" src="/cases/logo-bonecario.svg" alt="Bonecário" width={126} height={78} />
                    </div>
                  </div>
                </div>
                <div className="case-item">
                  <div className="hide-case">
                    <div className="tags-case">
                      <span>Layout para e-commerce</span>
                    </div>
                    <div className="descricao-case">
                      <p>Atuando há mais de 60 anos no ramo de materiais de construção, reforma e acabamento, a Casa São Pedro é uma empresa tradicional. Agora, eles buscam ampliar as suas vendas em São Paulo e região através do e-commerce. Por isso, a importância de investir na experiência do usuário no seu site. Vamos descobrir mais sobre como foi a trajetória da Casa São Pedro com a Nairuz?</p>
                    </div>
                    <div className="servicos-case">
                      <ul>
                        <li><Image src="/novaident/cases/iconcasecalc.svg" width={16} height={16} /> <p>Criação de calculadora intuitiva;</p></li>
                        <li><Image src="/novaident/cases/iconcaseengrenagem.svg" width={16} height={16} /> <p>Personalização de widgets nativos;</p></li>
                        <li><Image src="/novaident/cases/iconcaseup.svg" width={16} height={16} /> <p>Design totalmente responsivo.</p></li>
                      </ul>
                    </div>
                  </div>
                  <div className="button-case">
                    <a onClick={urlCSP}><Image src="/cases/arrow-case.svg" alt="Ver Case" width={35} height={35} /></a>
                  </div>
                  <div className="visible-case">
                    <Image className="img-fluid" src="/novaident/fundocasecsp.png" alt="Casa São Pedro" width={370} height={533} />
                    <div className="logocase">
                      <Image className="logo-case" src="/cases/logo-csp.svg" alt="Casa São Pedro" width={126} height={78} />
                    </div>
                  </div>
                </div>
                <div className="case-item">
                  <div className="hide-case">
                    <div className="tags-case">
                      <span>Layout p/ e-commerce</span>
                      <span>Marketing Full-Service</span>
                    </div>
                    <div className="descricao-case">
                      <p>Criada em 1919 por Alfonso Bialetti, a empresa centenária tem feito grande sucesso pelo mundo inteiro desde então. Isso graças ao seu design único e sua tradição. Assim que a Bialetti Shop nasceu aqui no Brasil, ela contou efetivamente com a ajuda e parceria da Nairuz. Com isso, juntas puderam criar um planejamento eficiente que foi o ponto-chave para o sucesso da empresa. Saiba mais:</p>
                    </div>
                    <div className="servicos-case">
                      <ul>
                        <li><Image src="/novaident/cases/iconcaseuser.svg" width={16} height={16} /> <p>+ de 14mil usuários mensais;</p></li>
                        <li><Image src="/novaident/cases/iconcasedolar.svg" width={16} height={16} /> <p>+ 800% de faturamento;</p></li>
                        <li><Image src="/novaident/cases/iconcasecursor.svg" width={16} height={16} /> <p>27% de vendas em busca orgânica.</p></li>
                      </ul>
                    </div>
                  </div>
                  <div className="button-case">
                    <a onClick={urlBialetti}><Image src="/cases/arrow-case.svg" alt="Ver Case" width={35} height={35} /></a>
                  </div>
                  <div className="visible-case">
                    <Image className="img-fluid" src="/novaident/fundocasebialetti.png" alt="Bialetti" width={370} height={533} />
                    <div className="logocase">
                      <Image className="logo-case" src="/cases/logo-bialetti.svg" alt="Bialetti" width={100} height={50} />
                    </div>
                  </div>
                </div>
                <div className="case-item">
                  <div className="hide-case">
                    <div className="tags-case">
                      <span>Layout p/ e-commerce</span>
                      <span>Marketing Full-Service</span>
                    </div>
                    <div className="descricao-case">
                      <p>Em 2015, Letícia Vaz, a fundadora da LV Store, decidiu começar uma loja especializada em roupas femininas para atender o público jovem e universitário que sempre pedia conselhos sobre o que usar. O sonho tornou-se real com a atuação de nosso time de desenvolvimento e Marketing Digital.</p>
                    </div>
                    <div className="servicos-case">
                      <ul>
                        <li><Image src="/novaident/cases/iconcaseuser.svg" width={16} height={16} /> <p>+ de 60mil usuários mensais;</p></li>
                        <li><Image src="/novaident/cases/iconcasecursor.svg" width={16} height={16} /> <p>48% de vendas em busca orgânica;</p></li>
                        <li><Image src="/novaident/cases/iconcaseup.svg" width={16} height={16} /> <p>+90% de taxa de conversão.</p></li>
                      </ul>
                    </div>
                  </div>
                  <div className="button-case">
                    <a onClick={urlLVStore}><Image src="/cases/arrow-case.svg" alt="Ver Case" width={35} height={35} /></a>
                  </div>
                  <div className="visible-case">
                    <Image className="img-fluid" src="/novaident/fundocaselvstore.png" alt="LV Store" width={370} height={533} />
                    <div className="logocase">
                      <Image className="logo-case" src="/cases/logo-lv.svg" alt="LV Store" width={100} height={50} />
                    </div>
                  </div>
                </div>
                <div className="case-item">
                  <div className="hide-case">
                    <div className="tags-case">
                      <span>Marketing Parcial</span>
                    </div>
                    <div className="descricao-case">
                      <p>Atuando no mercado há 35 anos, a Minassal é uma grande distribuidora especializada no país, sendo eles a distribuidora exclusiva da Mars, proprietária de marcas como Pedigree, Whiskas e Royal Canin. Foi por isso que eles aceitaram o auxílio da Nairuz quando nós chegamos até eles, com o objetivo de sempre trazer a melhor experiência para os seus clientes.</p>
                    </div>
                    <div className="servicos-case">
                      <ul>
                        <li><Image src="/novaident/cases/iconcaseuser.svg" width={16} height={16} /> <p>91% de crescimento na base de leads;</p></li>
                        <li><Image src="/novaident/cases/iconcasecursor.svg" width={16} height={16} /> <p>57,79% em taxa de abertura;</p></li>
                        <li><Image src="/novaident/cases/iconcaseup.svg" width={16} height={16} /> <p>Aumento de 64,58% em CTR.</p></li>
                      </ul>
                    </div>
                  </div>
                  <div className="button-case">
                    <a onClick={urlMinassal}><Image src="/cases/arrow-case.svg" alt="Ver Case" width={35} height={35} /></a>
                  </div>
                  <div className="visible-case">
                    <Image className="img-fluid" src="/novaident/fundocaseminassal.png" alt="Minassal" width={370} height={533} />
                    <div className="logocase">
                      <Image className="logo-case" src="/cases/logo-minassal-2.png" alt="Minassal" width={207} height={60} />
                    </div>
                  </div>
                </div>
                <div className="case-item">
                  <div className="hide-case">
                    <div className="tags-case">
                      <span>Layout Personalizado</span>
                    </div>
                    <div className="descricao-case">
                      <p>Há mais de 20 anos, a Infocards vem atuando na área de gestão de cartões de crédito private label – cartões de loja. Depois de tantos anos de sucesso e conquistas, a Infocards, sempre visando o melhor para os seus clientes, buscou a Nairuz para dar uma repaginada na sua identidade visual. Confira como foi a experiência da empresa com o nosso time!</p>
                    </div>
                    <div className="servicos-case">
                      <ul>
                        <li><Image src="/novaident/cases/iconcaseuser.svg" width={16} height={16} /> <p>Site totalmente renovado e user-friendly;</p></li>
                        <li><Image src="/novaident/cases/iconcasecursor.svg" width={16} height={16} /> <p>Entrega de alta performance;</p></li>
                        <li><Image src="/novaident/cases/iconcaseup.svg" width={16} height={16} /> <p>Site responsivo.</p></li>
                      </ul>
                    </div>
                  </div>
                  <div className="button-case">
                    <a onClick={urlInfocards}><Image src="/cases/arrow-case.svg" alt="Ver Case" width={35} height={35} /></a>
                  </div>
                  <div className="visible-case">
                    <Image className="img-fluid" src="/novaident/fundocaseinfocards.png" alt="Infocards" width={370} height={533} />
                    <div className="logocase">
                      <Image className="logo-case" src="/cases/logo-infocards.png" alt="Infocards" width={187} height={56} />
                    </div>
                  </div>
                </div>
                <div className="case-item">
                  <div className="hide-case">
                    <div className="tags-case">
                      <span>Layout para e-commerce</span>
                      <span>Marketing Full-Service</span>
                    </div>
                    <div className="descricao-case">
                      <p>A Lojas RPM encontra-se há 5 anos localizada na cidade de Jaci, São Paulo, e conta com diversos produtos de qualidade e custo acessível para residências e comércios. Nossa equipe de consultoria em marketing digital encontrou oportunidades de crescimento e, depois de uma cuidadosa análise, definiram-se as estratégias do plano de ação. Confira!</p>
                    </div>
                    <div className="servicos-case">
                      <ul>
                        <li><Image src="/novaident/cases/iconcasedolar.svg" width={16} height={16} /> <p>+407,12% em faturamento;</p></li>
                        <li><Image src="/novaident/cases/iconcasecursor.svg" width={16} height={16} /> <p>+357,10% em taxa de conversão no site;</p></li>
                        <li><Image src="/novaident/cases/iconcaseup.svg" width={16} height={16} /> <p>+241,03% nas transações em mídias pagas.</p></li>
                      </ul>
                    </div>
                  </div>
                  <div className="button-case">
                    <a onClick={urlRPM}><Image src="/cases/arrow-case.svg" alt="Ver Case" width={35} height={35} /></a>
                  </div>
                  <div className="visible-case">
                    <Image className="img-fluid" src="/novaident/fundocaserpm.png" alt="Lojas RPM" width={370} height={533} />
                    <div className="logocase">
                      <Image className="logo-case" src="/cases/logo-rpm.png" alt="Lojas RPM" width={168} height={23} />
                    </div>
                  </div>
                </div>
                <div className="case-item">
                  <div className="hide-case">
                    <div className="tags-case">
                      <span>Marketing Parcial</span>
                    </div>
                    <div className="descricao-case">
                      <p>A Nova Medicamentos é uma loja online, com sede em Vinhedo (SP) e uma unidade em Vila Velha (ES), que atende todo o território nacional a partir da venda e entrega de medicamentos de alto custo. A Nova Medicamentos é um case de sucesso quando falamos sobre estratégias de SEO e aumento do tráfego orgânico. Os resultados:</p>
                    </div>
                    <div className="servicos-case">
                      <ul>
                        <li><Image src="/novaident/cases/iconcaseuser.svg" width={16} height={16} /> <p>139,73% em tráfego orgânico;</p></li>
                        <li><Image src="/novaident/cases/iconcasecursor.svg" width={16} height={16} /> <p>Palavras-chave nas 3 primeiras posições de busca.</p></li>
                        <li><Image src="/novaident/cases/iconcaseup.svg" width={16} height={16} /> <p>63% em vendas orgânicas;</p></li>
                      </ul>
                    </div>
                  </div>
                  <div className="button-case">
                    <a onClick={urlNovaMed}><Image src="/cases/arrow-case.svg" alt="Ver Case" width={35} height={35} /></a>
                  </div>
                  <div className="visible-case">
                    <Image className="img-fluid" src="/novaident/fundocasenova.png" alt="Nova Medicamentos" width={370} height={533} />
                    <div className="logocase">
                      <Image className="logo-case" src="/cases/logo-nova.svg" alt="Nova Medicamentos" width={100} height={50} />
                    </div>
                  </div>
                </div>
                </div>
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
