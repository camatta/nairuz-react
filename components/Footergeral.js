import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';
import ContatoPopup from './ContatoPopup';

const Footergeral = () => (
  <>
  <footer className="container-fluid" id="footer">
  <div className="instagram-feed">
    <ul className="insta d-flex justify-content-center">
      <li><Image src="/insta1.png" alt="Instagram Nairuz" width={200} height={200} /></li>
      <li><Image src="/insta2.png" alt="Instagram Nairuz" width={200} height={200} /></li>
      <li><Image src="/insta3.png" alt="Instagram Nairuz" width={200} height={200} /></li>
      <li><Image src="/insta4.png" alt="Instagram Nairuz" width={200} height={200} /></li>
      <li><Image src="/insta5.png" alt="Instagram Nairuz" width={200} height={200} /></li>
      <li><Image src="/insta6.png" alt="Instagram Nairuz" width={200} height={200} /></li>
      <li><Image src="/insta7.png" alt="Instagram Nairuz" width={200} height={200} /></li>
      <li><Image src="/insta8.png" alt="Instagram Nairuz" width={200} height={200} /></li>
    </ul>
  </div>
  <div className="container">
    <div className="row">
      <div className="col-12">
        <div className="footer-logo">
          <div className="logo">
            <Image src="/logo-footer.svg" alt="Nairuz" width={206} height={38} />
          </div>
          <div className="sociais">
            <ul>
              <li><a href="https://www.facebook.com/NairuzConsultoriaDigital" target="_blank" rel="noopener noreferrer"><Image src="/face.svg" alt="Facebook" width={40} height={40} /></a></li>
              <li><a href="https://www.instagram.com/nairuzconsultoria" target="_blank" rel="noopener noreferrer"><Image src="/instagram.svg" alt="Instagram" width={40} height={40}  /></a></li>
              <li><a href="https://www.linkedin.com/company/nairuz" target="_blank" rel="noopener noreferrer"><Image src="/youtube.svg" alt="YouTube" width={40} height={40}  /></a></li>
              <li><a href="https://www.youtube.com/channel/UCu70MAqws64Vk2dYQlCFVYg" target="_blank" rel="noopener noreferrer"><Image src="/linkedin.svg" alt="LinkedIn" width={40} height={40}  /></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div className="row footer-infos">
      <div className="col-12 col-md-3">
        <div className="sitemap-footer mobcenter">
          <ul>
            <li><Link href="/"><a>Home</a></Link></li>
            <li><Link href="/quem-somos"><a>Quem Somos</a></Link></li>
            <li><Link href="/cases"><a>Cases</a></Link></li>
            <li><a href="https://blog.nairuz.com.br" target="_blank" rel="noopener noreferrer">Blog</a></li>
          </ul>
        </div>
      </div>
      <div className="col-12 col-md-3">
        <div className="servicos-footer mobcenter">
          <ul>
            <li><Link href="/servicos"><a className="title-footer">Serviços</a></Link></li>
            <li><Link href="/servicos"><a>Layout para e-commerce</a></Link></li>
            <li><Link href="/servicos"><a>Websites</a></Link></li>
            <li><Link href="/servicos"><a>Mídias Pagas</a></Link></li>
            <li><Link href="/servicos"><a>Inbound Marketing</a></Link></li>
            <li><Link href="/servicos"><a>SEO</a></Link></li>
          </ul>
        </div>
      </div>
      <div className="col-12 col-md-3">
        <div className="funcionairuz-footer mobcenter">
          <ul>
            <li><Link href="/vagas"><a className="title-footer">Funcionairuz</a></Link></li>
            <li><Link href="/vagas"><a>Nosso Time</a></Link></li>
            <li><Link href="/vagas"><a>Vagas</a></Link></li>
          </ul>
        </div>
      </div>
      <div className="col-12 col-md-3">
        <div className="contato-footer mobcenter">
          <ul>
            <li><a className="title-footer" href="#">CONTATO</a></li>
            <div className="tel-footer">
              <div className="icon-tel">
                <Image src="/icon-phone.svg" alt="Telefone" width={12} height={12} />
              </div>
              <div className="phone-footer">
                <li><a href="https://api.whatsapp.com/send?phone=5519991406111" target="_blank" rel="noopener noreferrer">+ 55 19 99140.6111</a></li>
                <li><a href="tel:1932176400">+ 55 19 3217-6400</a></li>
                <li><a href="tel:1147501714">+ 55 11 4750-1714 (São Paulo)</a></li>
              </div>
            </div>
            <div className="mail-footer">
              <Image src="/icon-mail.svg" alt="E-mail" width={12} height={12} />
              <li><a href="mailto:contato@nairuz.com.br">contato@nairuz.com.br</a></li>
            </div>
            <div className="local-footer">
              <Image src="/icon-local.svg" alt="Localização" width={12} height={12} />
              <li><a href="https://goo.gl/maps/vbRekKqcfRnjm1si7" target="_blank" rel="noopener noreferrer">Rua 25 de Janeiro, nº 112 - Centro. Monte Mor - SP</a></li>
            </div>
          </ul>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-12">
        <div className="copyright d-flex align-items-center justify-content-center mobcenter">
          <Image src="/selo-br.png" alt="Brasil" width={17} height={12} />
          <p>Nairuz Marketing e Tecnologia® 2021 / todos os direitos reservados</p>
        </div>
      </div>
    </div>
  </div>
  <div className="wpp-footer">
    <a href="https://api.whatsapp.com/send?phone=5519991406111" target="_blank" rel="noopener noreferrer"><p>Quer ser nosso próximo sucesso? <b>Fale com a gente!</b></p><Image src="/icon-wpp.svg" alt="WhatsApp Nairuz" width={26} height={20}/></a>
  </div>
  <ContatoPopup />
</footer>
<Script src='https://nairuz.com.br/react/script.js' />
</>
);

export default Footergeral;