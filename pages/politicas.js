import Head from 'next/head'
import Headergeral from '../components/Headergeral'
import HeaderMob from '../components/HeaderMob'
import Footergeral from '../components/Footergeral'

export default function Politicas() {
  return (
    <div className="page-politicas">
      <Head>
        <title>Nairuz | Marketing Digital - Políticas</title>
        <meta name="description" content="Políticas" />
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
        <section className="container" id="politicas">
          <div className="row">
            <div className="col-12">
              <div className="politicas-text">
                <h1>Políticas de Privacidade - Nairuz</h1>
                <h2>O que são Cookies?</h2>
                <p>Cookies são pequenos arquivos de texto ou fragmentos de informação que são baixados em seu computador, smartphone ou qualquer outro dispositivo com acesso à internet quando você visita nossa aplicação.</p>
                <p>Eles contêm informações sobre a sua navegação em nossas páginas e retêm apenas informações relacionadas a suas preferências.</p>
                <p>Assim, essa página consegue armazenar e recuperar os dados sobre os seus hábitos de navegação, de forma a melhorar a experiência de uso, por exemplo. É importante frisar que eles não contêm informações pessoais específicas, como dados sensíveis ou bancários.</p>
                <p>O seu navegador armazena os cookies no disco rígido, mas ocupam um espaço de memória mínimo, que não afetam o desempenho do seu computador. A maioria das informações são apagadas logo ao encerrar a sessão, como você verá no próximo tópico.</p>
                <h2>Por que usamos Cookies?</h2>
                <p>A Nairuz utiliza Cookies para fornecer a melhor experiência de uso, tornando nossas aplicações mais fáceis e personalizadas, tendo por base suas escolhas e comportamento de navegação.</p>
                <p>Assim, buscamos entender como você utiliza nossas aplicações e ajustar o conteúdo para torná-lo mais relevante para você, além de lembrar de suas preferências.</p>
                <p>Os Cookies participam deste processo porquanto armazenam, leem e executam os dados necessários para cumprir com o nosso objetivo.</p>
                <h2>Gerenciamento dos Cookies</h2>
                <p>A instalação dos cookies está sujeita ao seu consentimento. Apesar da maioria dos navegadores estar inicialmente configurada para aceitar cookies de forma automática, você pode rever suas permissões a qualquer tempo, de forma a bloqueá-los, aceitá-los ou ativar notificações para quando alguns cookies forem enviados ao seu dispositivo.</p>
                <p>Atualmente, na primeira vez que você acessa nossas aplicações, será requerida a sua concordância com a instalação destes. Apenas após a sua aceitação eles serão ativados.</p>
                <p>Para tanto, utilizamos um sistema de alerta na página inicial de Nairuz. Dessa maneira, não apenas solicitamos sua concordância, mas também informamos que a navegação continuada em nossos sites será entendida como consentimento.</p>
                <p>Como já dito, você pode, a qualquer tempo e sem nenhum custo, alterar as permissões, bloquear ou recusar os Cookies. Você também pode configurá-los caso a caso. Todavia, a revogação do consentimento de determinados Cookies pode inviabilizar o funcionamento correto de alguns recursos da plataforma.</p>
                <p>Para gerenciar os cookies do seu navegador, basta fazê-lo diretamente nas configurações do navegador, na área de gestão de Cookies.</p>
                <h2>Disposições finais</h2>
                <p>Para a Nairuz, a privacidade e confiança são fundamentais para a nossa relação com você. Estamos sempre nos atualizando para manter os mais altos padrões de segurança.</p>
                <p>Assim, reservamo-nos o direito de alterar esta Política de Cookies a qualquer tempo. As mudanças entrarão em vigor logo após a publicação, e você será avisado.</p>
                <p>Ao continuar a navegação nas nossas aplicações após essa mudança se tornar eficaz, você concorda com elas. Aconselhamos que você sempre verifique esta Política, bem como a nossa Política de Privacidade.</p>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footergeral />
    </div>
  )
}
