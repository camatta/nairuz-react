import Head from 'next/head'
import Image from 'next/image'
import Headergeral from '../../components/Headergeral'
import HeaderMob from '../../components/HeaderMob'
import Footergeral from '../../components/Footergeral'
import BehanceNz from '../../components/BehanceNz'
import CarrosselCases from '../../components/CarrosselCases'

const urlCaseBialetti = () => {
  document.location.href = '/cases/bialetti';
}

export default function Mammy() {
  return (
    <div className="page-cases page-case-mammy">
      <Head>
        <title>Nairuz - Mammy Gestante</title>
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
                  <h1>Case de sucesso de layout de e-commerce: Mammy Gestante</h1>
                </div>
                <div className="text-case">
                  <p>Case de sucesso de layout de e-commerce: grávida sim! E na “moda”, também! Certamente esse case de sucesso de layout de e-commerce também conquistou o nosso coração, em todos os sentidos.</p>
                  <p>Antes de mais nada, deixe-me apresentar um pouquinho da história da Mammy gestante!</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="container" id="main-case">
          <div className="row">
            <div className="col-12">
              <div className="title-main-case">
                <h3>Moda gestante</h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-6">
              <div className="text-main-case">
                <p>Criada em 1996 pela empresária Vera Moraes, a Mammy gestante apresentou a proposta de atender ao mercado de luxo, trazendo uma seleção especial de peças importadas das melhores marcas internacionais. Logo tornou-se referência de mercado.</p>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="text-main-case">
                <p>23 anos se passaram, ao longo das últimas décadas foi se aperfeiçoando e produzindo suas próprias coleções, chegando a produtos diferenciados e especiais.</p>
                <p>Desse modo, a marca permanece firme no mercado, produzindo 100% de suas coleções, com um Know How de “responsa”, e o resultado continua lindo de viver!</p>
              </div>
            </div>
          </div>
        </section>
        <section className="container" id="main-xcase">
        <div className="row">
            <div className="col-12">
              <div className="layout-infocards">
                <Image src="/cases/img-banner-mammy-2.png" width={1027} height={439} />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="post-minassal">
                <div className="post-content">
                  <h4>Os desafios desse projeto</h4>
                </div>
                <div className="post-content">
                  <p>A Mammy é uma marca sólida no mercado, reconhecida pelos clientes por sua tradição, qualidade e zelo com as mulheres gestante.</p>
                  <p>Não trata-se apenas de vendas de roupas, mas sim de consultoria para atender as mulheres nesta fase tão bela. Aliás, a marca, nasceu da insatisfação de sua fundadora ao procurar roupas bacanas quando estava grávida e não encontrar.</p>
                  <p>Desse modo, tínhamos um desafio em mãos! Ela já estava presente no digital, com uma <span>loja online</span> funcional, no entanto com algumas “dores”, relatadas por seus próprios clientes:</p>
                  <ul>
                    <li><p>A loja online não traduzia a loja física da Mammy;</p></li>
                    <li><p>Havia dificuldade no processo de compra;</p></li>
                    <li><p>Dificuldade de realizar vendas onlines devido as medidas das peças (tamanho/ tabelas de medidas); </p></li>
                    <li><p>Precisavam de um canal de suporte.</p></li>
                  </ul>
                </div>
                <div className="layout-infocards">
                  <Image src="/cases/img-banner-mammy.png" width={980} height={260} />
                  <div className="info-layout">
                    <p>Case de sucesso de layout de e-commerce: Mammy Gestante.</p>
                  </div>
                </div>
                <div className="post-content">
                  <h4>Um mercado de nicho</h4>
                </div>
                <div className="post-content">
                  <p><span>Nicho de mercado</span>, é um recorte dentro de um determinado segmento, que considera um grupo de pessoas com interesses, necessidades e preferências bastante particulares. É um público com grande potencial específico, mas que não é tão bem atendido. Este é o mercado da Mammy, o mercado de <span>moda gestante</span>.</p>
                  <p>E nosso projeto de <span>layout para loja online</span>, foi todo estruturado pensando em soluções para melhor atender o seu mercado, ou seja seus consumidores.</p>
                  <p>Com intuito de continuar levando excelência, não somente no universo físico, mas também no digital.</p>
                </div>
                <div className="post-content">
                  <h4>Layout personalizado para<br></br>e-commerce: etapa de criação</h4>
                </div>
                <div className="post-content">
                  <p>A loja online da Mammy é <span>Magento</span>, <a href="https://www.signativa.com.br/" target="_blank" rel="noopener noreferrer">plataforma de e-commerce Signativa</a>, nós desenvolvemos toda estrutura <span>front-end</span>, ou seja, um <span>layout personalizado</span>.</p>
                  <p>Para a elaboração do layout da Mammy, seguimos uma linha contemporânea, porém leve. Utilizando tons monocromáticos, deixando um ambiente de navegação simples, intuitivo e elegante.</p>
                  <p>Um dos maiores desafios na etapa de <span>criação do layout</span>, foi encontrar uma família tipográfica que representasse a leveza nos detalhes e fosse bem legível em ambos os contrastes (fundo branco e fundo preto).</p>
                </div>
                <div className="layout-infocards">
                  <Image src="/cases/img-case-mammy-2.png" width={1027} height={260} />
                  <div className="info-layout">
                    <p>Case de sucesso de layout de e-commerce: Mammy Gestante.</p>
                  </div>
                </div>
                <div className="post-content">
                  <h4>Implantação do projeto</h4>
                </div>
                <div className="post-content">
                  <p>Etapa de criação concluída, agora o desafio era da nossa <span>equipe de desenvolvimento</span>, implantar o layout personalizado com as soluções proposta pela nossa equipe de design e solucionar as dores.</p>
                  <p>Tabela de Medidas: Nós implantamos um provador virtual e personalizamos a tabela de medidas, através da tecnologia da <a href="https://sizebay.com/en/" target="_blank" rel="noopener noreferrer">Sizebay</a>. Com o objetivo de minimizar as dúvidas na hora da compra. Bem como, reduzir as frustrações, devido ao processo de troca.</p>
                  <p>Vale ressaltar, que esta frustração não ocorria por parte da equipe da <span>Mammy</span>, pois havia agilidade no processo da troca. No entanto, ela ocorria devido a expectativa do cliente, ou seja de receber o produto e ele dar certo.</p>
                  <p>Comunicação online:<br></br>Estamos falando de um mercado de nicho, cheio de dúvidas e trabalhando com a proposta de consultoria. Dessa maneira, precisamos de um comunicação com agilidade.</p>
                  <p>Com o objetivo de melhorar esta comunicação, implantamos um chat online <span>(Jivochat)</span>, facilitando as conversas e monitorando os visitantes.</p>
                </div>
                <div className="layout-infocards">
                  <Image src="/cases/img-case-mammy-3.png" width={1027} height={260} />
                  <div className="info-layout">
                    <p>Case de sucesso de layout de e-commerce</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="post-minassal">
                <div className="post-content">
                  <h4>Da experiência a conversão:</h4>
                </div>
                <div className="post-content">
                  <p>A <span>experiência de compra online</span> é um aspecto definitivo na hora do consumidor fechar o negócio. Deste modo, este item foi totalmente considerado na concepção e desenvolvimento do projeto.</p>
                  <p>Nós simplificamos as vitrines, ou seja, a home foi voltada para os produtos, dando a possibilidade de visualizar o look completo; Optamos por trabalhar com o fundo branco para dar ênfase aos produtos;</p>
                  <p>Diminuímos os cliques para finalização do pedido, ou seja, ao invés do cliente efetuar vários passos até chegar nesta etapa <span>(carrinho de compras)</span>. Nós desenvolvemos um <span>carrinho lateral</span>, desta forma o cliente é levado diretamente até o checkout otimizado, se já for cadastrado. Caso ainda não seja, disponibilizamos um cadastro simples. Contudo, pudemos chegar a um resultado satisfatório na conclusão do projeto, tanto para versão mobile como desktop.</p>
                  <p>Havendo interação e sinergia de ambas as equipes, tanto por parte da Mammy como da Nairuz, atingindo o objetivo central do projeto, proporcionar para os clientes Mammy a experiência e zelo que elas merecem.</p>
                  <h5>Já ia me esquecendo de um detalhe:</h5>
                  <p>A Mammy, também mergulhou no conceito omnichannel, o cliente pode comprar online e retirar e na loja. A fim de proporcionar a mesma experiência de compra independente do canal utilizado.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="container">
          <div className="row">
            <div className="col-12">
              <div className="outros-cases post-content">
                <p>Veja mais um case de sucesso: <a onClick={urlCaseBialetti}>centenária italiana Bialetti Shop, loja oficial do Brasil.</a></p>
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
