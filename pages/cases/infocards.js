import Head from 'next/head'
import Image from 'next/image'
import Headergeral from '../../components/Headergeral'
import HeaderMob from '../../components/HeaderMob'
import Footergeral from '../../components/Footergeral'
import BehanceNz from '../../components/BehanceNz'
import CarrosselCases from '../../components/CarrosselCases'

export default function Infocards() {
  return (
    <div className="page-cases page-case-infocards">
      <Head>
        <title>Conheça mais sobre o layout para o site da Infocards!</title>
        <meta name="description" content="Já conhece o novo site da empresa de cartões de crédito Infocards feito pela Nairuz? Confira como ficou o layout para o site da da marca!" />
        <meta property="og:image" content="https://nairuz.com.br/og-nairuz.png" />
				<meta property="og:image:type" content="image/png" />
				<meta property="og:image:width" content="600" />
				<meta property="og:image:height" content="400" />
        <meta property="og:description" content="Já conhece o novo site da empresa de cartões de crédito Infocards feito pela Nairuz? Confira como ficou o layout para o site da da marca!" />
				<meta property="og:site_name" content="Conheça mais sobre o layout para o site da Infocards!" />
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
                  <h1>Nova identidade: conheça mais sobre o layout para o site da Infocards!</h1>
                </div>
                <div className="text-case">
                  <p>Há mais de 20 anos, a Infocards vem atuando na área de gestão de cartões de crédito private label – cartões de loja. Dessa forma, tornando possível as compras de muitos brasileiros.</p>
                  <p>Ainda na década de 1990, o mesmo criador dos Cartões de Crédito da CeA Modas, fundou a companhia que hoje trabalha na prestação de serviços de processamento e gestão de cartões de crédito. Além disso, a empresa se ocupa em desenvolver sistemas para empresas que visam uma operação totalmente independente.</p>
                  <p>Com um capital completamente nacional, a Infocards iniciou o seu histórico no setor varejista alimentar em 1996. Foi nesse momento que se tornou evidente que as suas soluções de crédito atendiam muito bem ao público de baixa renda.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="container" id="main-case">
          <div className="row">
            <div className="col-12">
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-6">
              <div className="text-main-case">
                <p>Foi assim que em 2019, a companhia foi adquirida pelo <a href="https://infocards.com.br/" target="_blank" rel="noopener noreferrer">Grupo DM Cards</a>, uma instituição financeira que administra cartões de crédito, com o intuito de abranger a sua área de atuação.</p>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="text-main-case">
                <p>Depois de tantos anos de sucesso e conquistas, a Infocards, sempre visando o melhor para os seus clientes, buscou a Nairuz para dar uma repaginada na sua identidade visual. Confira, então, como foi a experiência da empresa com o nosso time!</p>
              </div>
            </div>
          </div>
        </section>
        <section className="container-fluid" id="banner-infocards">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-6">
                <div className="text-banner-infocards">
                  <h3>Quais eram as expectativas do cliente?</h3>
                  <p>A Inforcards chegou à Nairuz através de uma indicação de um parceiro (reflexo de anos de trabalho e bons relacionamento com os nossos clientes). A companhia queria uma cara nova para o seu site; algo que trouxesse não só modernidade, mas também confiança.</p>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="img-banner-infocards">
                  <Image src="/cases/img-mockup-infocards.png" width={980} height={562} />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="container" id="main-xcase">
          <div className="row">
            <div className="col-12">
              <div className="post-minassal">
                <div className="post-content">
                  <p>Em um mundo que está em constante <span>evolução tecnológica</span>, é importante que uma empresa esteja antenada nas inovações. Para que dessa forma, ela consiga atender da melhor forma as necessidades de seus clientes. Por isso que o projeto do site deveria ser sólido e arrojado, com uma linguagem de programação contemporânea e ao mesmo tempo segura.</p>
                  <p>Um outro pedido do cliente em relação ao seu site foi que a página transmitisse a <span>cultura da empresa</span>. Ou seja, que o site mostrasse aquilo pelo o que a empresa mais preza, que é a integridade, o comprometimento e a inovação.</p>
                  <p>Era importante para a Infocards também, que o seu novo site fosse responsivo. Para que ele pudesse se adaptar a qualquer tipo de dispositivo, dessa maneira oferecendo o melhor para os usuários.</p>
                </div>
                <div className="post-content">
                  <h4>Como nasceu o novo site da Infocards?</h4>
                </div>
                <div className="post-content">
                  <p>Este foi um caso em que o próprio cliente já sabia o que queria; o requisito inicial de Carlos Tamaki, sócio proprietário da empresa, era de que o projeto fosse desenvolvido em uma tecnologia em alta no mercado.</p>
                  <p>Com isso em mente, os nossos desenvolvedores decidiram pela aplicação de uma tecnologia chamada Node.js. Apesar de ser uma tecnologia recente, muitas empresas como a Netflix e o LinkedIn já utilizam esse sistema. Que é, de fato, um framework de Javascript rodando em ambiente de servidor, que utiliza do mecanismo de JavaScript Google v8.</p>
                  <p>Este é um mecanismo que visa produtividade no desenvolvimento e uma entrega de alta performance. Além disso, podemos destacar a alta capacidade de escalabilidade e a facilidade em possíveis integrações com outros sistemas via API.</p>
                  <p>Para hospedagem, o cliente tinha disponível servidores IIS (Windows). Para que ele pudesse ser utilizado, foi necessário uma configuração específica tratando o IIS como proy reverso. Dessa maneira, permitindo o roteamento do tráfego para o servidor web Node.js.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="layout-infocards">
                <Image src="/cases/img-layout-infocards.png" width={980} height={260} />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="post-minassal">
                <div className="post-content">
                  <h4>Resultado?</h4>
                </div>
                <div className="post-content">
                  <p>Sem dúvidas que com os profissionais de excelência da Nairuz, conseguimos entregar um site totalmente renovado e user-friendly, assim como o cliente solicitou. Além disso, esse novo site conta com um aspecto moderno e ainda valoriza a história da empresa.</p>
                  <p>De acordo com o UX designer responsável pelo projeto, por se tratar de um projeto que necessita passar credibilidade ao usuário de maneira rápida, eles optaram por fazer isso através de uma linguagem própria da marca; de uma forma profissional e ao mesmo tempo divertida.</p>
                  <p>Para isso, os designers utilizaram uma linguagem ilustrativa (em forma de desenhos), com uma paleta de cores criada de acordo com a cor primária da Infocards. Logo, deixando o site todo com uma cara bem minimalista e intuitiva. Além disso, eles deixaram as quebras de seções curvilíneas, evitando uma separação agressiva das seções do site, proporcionando ao usuário uma navegação mais confortável.</p>
                  <p>Como complemento às informações dos elementos visuais apresentados acima, a equipe usou, para os elementos textuais, uma fonte tipográfica com um aspecto minimalista e profissional, tanto nos títulos quanto nos textos mais extensos, garantindo ao site legibilidade e boa leiturabilidade.</p>
                  <p>Então, foi assim que conseguimos mais um cliente satisfeito e um resultado final que alcançou todas as suas expectativas.</p>
                  <p>Enfim, vocês podem conferir como ficou a nova cara da página da Infocards no site da empresa.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="container">
          <div className="row">
            <div className="col-12">
              <div className="outros-cases post-content">
                <p><span>Não deixe de conferir mais cases e as histórias de sucesso dos nossos clientes aqui no <a href="#">blog</a>!</span></p>
                <p>Leia também: <a href="#">Marketing para B2B: como aumentar a relevância da sua marca</a></p>
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
