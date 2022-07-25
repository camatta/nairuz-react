import Head from 'next/head'
import Image from 'next/image'
import Headergeral from '../../components/Headergeral'
import HeaderMob from '../../components/HeaderMob'
import Footergeral from '../../components/Footergeral'
import BehanceNz from '../../components/BehanceNz'
import CarrosselCases from '../../components/CarrosselCases'

const urlCaseMinassal = () => {
  document.location.href = '/cases/minassal';
}

export default function CasaSaoPedro() {
  return (
    <div className="page-cases page-case-csp">
      <Head>
        <title>Nairuz - Casa São Pedro</title>
        <meta name="description" content="Conheça nossa Agência de Marketing Digital e Tecnologia e descubra como transformar os resultados da sua empresa. Acesse e saiba mais!" />
        <meta property="og:image" content="https://nairuz.com.br/og-nairuz.png" />
				<meta property="og:image:type" content="image/png" />
				<meta property="og:image:width" content="600" />
				<meta property="og:image:height" content="400" />
        <meta property="og:description" content="Conheça nossa Agência de Marketing Digital e Tecnologia e descubra como transformar os resultados da sua empresa. Acesse e saiba mais!" />
				<meta property="og:site_name" content="Nairuz | Marketing Digital" />
				<meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.png" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css" integrity="sha512-tS3S5qG0BlhnQROyJXvNjeEM4UpMXHrQfTGmbQ1gKmelCxlSEBUaxhRBj/EFTzpbP4RVSrpEikbmdJobCvhE3g==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.min.css" integrity="sha512-sMXtMNL1zRzolHYKEujM2AqCLUR9F2C4/05cdbxjjLSRvMQIciEPCQZo++nk7go3BtSuK9kfa/s+a4f4i5pLkw==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,300&display=swap" rel="stylesheet"></link>
      </Head>

      <Headergeral />
      <HeaderMob />
      <main>
        <section className="container-fluid" id="case-top">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-6">
                <div className="subtitle-case">
                  <h2>Nossos <span>Cases</span></h2>
                </div>
                <div className="title-case">
                  <h1>Casa São Pedro investiu na experiência do usuário para alavancar suas vendas pelo e-commerce </h1>
                </div>
                <div className="text-case">
                  <p>Estamos entrando em uma era onde a experiência do usuário dentro de e-commerce é tão importante quanto o preço e a qualidade dos produtos no site. Pois, hoje em dia, é preciso que as lojas online busquem um diferencial em relação aos seus concorrentes.</p>
                  <p>Por isso, pensando exatamente em aprimorar a sua loja virtual de forma a oferecer a melhor experiência para os seus clientes, a Casa São Pedro decidiu escolher a <span>Nairuz</span> para embarcar nessa jornada.</p>
                  <p>Com o apoio de uma equipe de desenvolvedores qualificados, atualmente o e-commerce está funcionando a todo vapor!</p>
                  <p><span>Vamos descobrir mais sobre como foi a trajetória da Casa São Pedro com a Nairuz?</span></p>
                  <p><span>Confira!</span></p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="container" id="main-case">
          <div className="row">
            <div className="col-12 col-md-6">
              <div className="title-main-case">
                <h3>Sobre a Casa São Pedro</h3>
              </div>
              <div className="text-main-case">
                <p>Atuando há mais de 60 anos no ramo de materiais de construção, reforma e acabamento, a Casa São João é uma empresa tradicional em Osasco e região. Agora, eles buscam ampliar as suas vendas em São Paulo e região através do e-commerce. Por isso, a importância de <span>investir na experiência do usuário</span> no seu site. </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="title-main-case">
                <h3>Necessidades do e-commerce da Casa São Pedro: </h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-6">
              <div className="text-main-case">
                <p>A percepção do usuário em relação ao seu site é fundamental para que ele continue a <span>navegação</span> por ele, até que finalmente ele esteja pronto para finalizar a compra. Por isso, o cliente apresentou duas importantes alterações para implementar no seu e-commerce.</p>
                <p>Primeiramente, eles demonstraram a necessidade de uma home que apresentasse uma quantidade suficiente de produtos. Porém, sem deixar a página muito extensa e cansativa para o usuário.</p>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="text-main-case">
                <p>Além disso, o cliente destacou a necessidade de um layout o mais limpo possível, para que os usuários não fossem distraídos durante a navegação. Também precisamos mencionar a facilidade da navegação, disponibilizando funcionalidades que deixam a navegação do usuário mais simples para qualquer um.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="container" id="main-xcase">
          <div className="row">
            <div className="col-12">
              <div className="layout-infocards">
                <Image src="/cases/img-csp.png" width={1027} height={439} />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="post-minassal">
                <div className="post-content">
                  <h4>Principais desafios para a nossa equipe:</h4>
                </div>
                <div className="post-content">
                  <p>Decerto que todos os projetos possuem seus desafios, não importa o tamanho que ele seja. Desde a criação de uma marca do zero, até a implementação de um tema; cada um terá as suas dificuldades.</p>
                  <p>Com o site da Casa São Pedro não foi diferente, nossos desenvolvedores encontraram <span>dois grandes desafios</span> em seu caminho. Eles foram:</p>
                  <ul>
                    <li><p>Personalizar widgets nativos da plataforma para que ficassem de fácil administração pelo cliente;</p></li>
                    <li><p>Calculadora intuitiva para o usuário conseguir calcular a quantidade necessária de produtos (pisos e revestimentos) para suprir a demanda da obra.</p></li>
                  </ul>
                  <p>Além disso, podemos citar a escolha da plataforma. Era preciso escolher uma plataforma que oferecesse  flexibilidade necessária para as alterações pedidas pelo cliente. Por conta disso, a plataforma onde o site está atualmente é ideal para o projeto, uma vez que ela é flexível para a <span>personalização</span>.</p>
                </div>
                <div className="post-content">
                  <h4>Experiência do usuário:</h4>
                </div>
                <div className="post-content">
                  <p>Agora, com um novo design e plataforma, o e-commerce da Casa São Pedro possui as seguintes características e funcionalidades:</p>
                  <ul>
                    <li><p>Design <span>totalmente responsivo</span> para melhor experiência do usuário tanto em dispositivos móveis quanto computadores;</p></li>
                    <li><p>Praticamente todas páginas são personalizadas, dessa forma, tornando a <span>navegação ainda mais amigável</span> por todo site.</p></li>
                  </ul>
                  <p>E como principais diferenciais do site, podemos apresentar a calculadora de pisos e revestimentos e a exibição dos últimos posts do Instagram.</p>
                  <p className="citacao-cliente-case">''Migrar de plataforma não é uma decisão fácil, pois requer um planejamento para não termos grandes impactos na performance, e a Nairuz nos deu todo o suporte necessário. Fiquei muito satisfeito com o resultado final do nosso projeto, superaram nossas expectativas. Do projeto ao Go-live, estiveram presentes em todas as etapas. E estão conosco até hoje, mantendo a evolução contínua!'' - <span>Marcos Tomazi - Gerente de Tecnologia da Casa São Pedro</span></p>
                </div>
                <div className="layout-infocards">
                  <Image src="/cases/img-csp2.png" width={1027} height={260} />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="container">
          <div className="row">
            <div className="col-12">
              <div className="outros-cases post-content">
                <p>Assim como a Casa São Pedro, a sua empresa também pode ser um <span>case de sucesso</span> da Nairuz. Quer saber como? Então <span>entre em contato com o nosso time comercial e faça o seu orçamento</span>!</p>
              </div>
            </div>
          </div>
        </section>
        <section className="container-fluid" id="cases-home">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-6">
                <div className="text-cases-home mobcenter">
                  <div className="title-cases-home">
                    <p>OUTROS CASES <span>DE SUCESSO</span></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <CarrosselCases />
        <BehanceNz />
      </main>

      <Footergeral />
    </div>
  )
}
