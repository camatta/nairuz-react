import Head from 'next/head'
import Image from 'next/image'
import Headergeral from '../../components/Headergeral'
import HeaderMob from '../../components/HeaderMob'
import Footergeral from '../../components/Footergeral'
import BehanceNz from '../../components/BehanceNz'
import CarrosselCases from '../../components/CarrosselCases'

export default function LVStore() {
  return (
    <div className="page-cases page-case-lvstore">
      <Head>
        <title>Como LV Store se tornou referência entre e-commerces de moda</title>
        <meta name="description" content="Como o e-commerce LV Store aumentou suas vendas e se tornou uma referência no mundo da moda online!" />
        <meta property="og:image" content="https://nairuz.com.br/og-nairuz.png" />
				<meta property="og:image:type" content="image/png" />
				<meta property="og:image:width" content="600" />
				<meta property="og:image:height" content="400" />
        <meta property="og:description" content="Como o e-commerce LV Store aumentou suas vendas e se tornou uma referência no mundo da moda online!" />
				<meta property="og:site_name" content="Como LV Store se tornou referência entre e-commerces de moda" />
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
        <section className="container-fluid" id="case-top">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-6">
                <div className="subtitle-case">
                  <h2>Nossos <span>Cases</span></h2>
                </div>
                <div className="title-case">
                  <h1>Case de sucesso: com crescimento de 20% nas vendas, a LV Store é referência entre os e-commerces de moda!</h1>
                </div>
                <div className="text-case">
                  <p>Foi um grande desafio, mas com muita alegria que fizemos esse e-commerce de moda inovador atingir seus objetivos e se tornar um case de sucesso! Vamos contar um pouquinho da história da LV Store e sobre como todas as melhorias em conjunto com o novo layout da loja, resultaram em 20% de crescimento nas vendas.</p>
                  <p>Apaixonada por moda, Letícia Vaz, a fundadora da LV Store, desde a infância esteve ligada nas tendências e acompanhava as costuras de sua mãe, fazendo bodies e croppeds. Em 2015, enquanto ainda cursava faculdade, ela decidiu começar uma loja especializada em roupas femininas para atender o público jovem e universitário que sempre pedia conselhos sobre o que usar. O sonho tornou-se real primeiramente pelo <span>Instagram</span>, vendendo suas roupas personalizadas e exclusivas desenhadas por ela mesma.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="container" id="main-case">
          <div className="row">
            <div className="col-12">
              <div className="title-main-case">
                <h3>Os desafios desse projeto</h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-6">
              <div className="text-main-case">
                <p>A LV Store já possuía uma identidade visual de luxo e sofisticação, que atendia uma demanda grande de clientes pela internet. Mas com o crescimento das vendas e acessos foi preciso investir em uma plataforma que pudesse comportar todo o fluxo no site.</p>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="text-main-case">
                <p>A Letícia tinha algumas dores com o funcionamento da sua loja, entre elas eram:</p>
                <ul>
                  <li><p>O Layout atual não conversava com a marca da loja;</p></li>
                  <li><p>Dificuldade para finalizar as compras;</p></li>
                  <li><p>Wishlist;</p></li>
                  <li><p>O site não comportava o fluxo de acessos, pois ficava muito pesado.</p></li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="container-fluid" id="banner-full">
          <div className="row">
            <div className="col-12">
              <div className="banner-lvstore text-center">
                <Image src="/cases/img-lvstore.png" width={637} height={343} />
              </div>
            </div>
          </div>
        </section>
        <section className="container" id="main-case">
          <div className="row">
            <div className="col-12 col-md-8">
              <div className="post-lvstore post-content">
                <div className="title-post">
                  <h3>Layout personalizado para e-commerce</h3>
                </div>
                <div className="post-content">
                  <p>A loja online da LV Store está no Magento, plataforma de e-commerce Signativa, e a Nairuz desenvolveu toda a estrutura <span>front-end</span>. Ou seja, um <span>layout personalizado</span>, como a Letícia desejava.</p>
                  <p>Para a elaboração do layout da LV Store, procuramos seguir uma linha tênue entre tendências e modernidade. As tonalidades mais sóbrias aplicadas no conceito estético do projeto, vêm por sua vez agregar luxo e sobriedade no âmbito visual. Desta forma, oferecemos ao site o requinte e sofisticação online, que reflete e conversa com os produtos ofertados.</p>
                  <p>Durante a criação nos colocamos no lugar do cliente da loja. Ou seja, focamos na experiência de estar realmente dentro de uma loja física, com provador, espelho etc. Por isso, implantamos o provador virtual com a tabela de medidas. Nele, a foto da roupa aparece em frente e verso com o exclusivo efeito de movimentá-la.</p>
                  <p>Um dos maiores desafios na etapa de <span>criação do layout</span> foi o mosaico com as principais peças para serem vistas de uma vez, logo no primeiro acesso.</p>
                </div>
                <div className="row">
                  <div className="col-12 col-md-6">
                    <h4>Implantação do Projeto</h4>
                    <p>Etapa de criação concluída, agora o desafio era da nossa <span>equipe de desenvolvimento</span>. Afinal, era o momento de implantar o layout personalizado com as soluções proposta pela nossa equipe de design e solucionar as dores.</p>
                    <h4>Provador frente e costas</h4>
                    <p>O provador frente e costas foi criado para que o cliente possa ter uma experiência real através do virtual. Desta forma, o consumidor pode visualizar todos os detalhes da roupa, tendo mais confiança na sua compra;</p>
                  </div>
                  <div className="col-12 col-md-6">
                    <h4>Tabela de Medidas</h4>
                    <p>Nós implantamos um provador virtual e personalizamos a tabela de medidas, através da tecnologia da Sizebay. Muitas clientes não sabiam se o produto condizia com o tamanho delas e o provador ajuda na hora da compra.</p>
                    <p>Pois com a certeza de que a roupa vai servir, as consumidoras têm mais confiança e a loja, mais credibilidade. A implantação foi um sucesso! Minimizou as dúvidas na hora da compra e reduziu as frustrações, devido ao processo de troca.</p>
                    <h4>Wishlist</h4>
                    <p>A lista de desejos foi um dos pedidos da Letícia que adoramos fazer. Afinal, trouxemos mais uma novidade aos seus clientes, facilitando a compra. E inclusive a interação dos próprios clientes em campanhas específicas.</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <Image src="/cases/lv-summer-glow.png" width={1027} height={260} />
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <h4>Da conversão para experiência</h4>
                    <p>A migração para a Signativa em conjunto com as ações de marketing que implementamos gerou resultados significativos. A LV possui um tráfego qualificado sendo direcionado para uma plataforma agora sem intermitência. A taxa de conversão teve melhorias expressivas, pois agora a plataforma possui uma estrutura robusta que sustenta um grande fluxo.</p>
                    <p>Por fim, como a própria fundadora relata: “Todas as coisas estão casando”, a singularidade do layout, a plataforma, a fluidez nos acessos, está tudo redondo e funcionando, com muita beleza e tecnologia.”</p>
                    <p>Nós da Nairuz, atuando como agência de Marketing, consideramos que as soluções realizadas para a LV Store contribuíram diretamente em melhorias do SEO. Essa parceria resultou em um e-commerce de excelente qualidade e prestígio, uma referência para nós.</p>
                    <p>Quer saber mais sobre os desafios e superações desse e-commerce de sucesso? <span>Acompanhe o vídeo com a entrevista!</span></p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <div className="video-lvstore">
                      <iframe width="560" height="315" src="https://www.youtube.com/embed/ZDT9VV-zI9o" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <div className="outros-cases">
                      <p>E não para por aqui, confira nosso <a href="#">portfólio!</a></p>
                      <p>Leia também: <a href="#">Case de sucesso de layout de e-commerce: Mammy Gestante</a></p>
                      <p><a href="#">Case de sucesso de layout para e-commerce: Bialetti Shop</a></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="img-post-lv">
                <Image src="/cases/img-case-lv.png" width={549} height={619} />
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
