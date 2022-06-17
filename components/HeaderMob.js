import Image from 'next/image';
import MenuMobile from '../components/MenuMobile'

const urlHome = () => {
  document.location.href = '/';
}

const HeaderMob = () => (
  <header className="container-fluid" id="header-mob">
    <div className="container mobileonly" id="header-mobile">
      <div className="row">
        <div className="col-12">
          <div className="headermob">
            <div className="bar-menumob">
              <Image src="/icon-menuburguer.svg" alt="Menu Mobile" width={20} height={28}/>
            </div>
            <div className="logo-menumob">
              <a onClick={urlHome}><Image src="/novo-logo-header.svg" alt="Logo Nairuz" width={120} height={32}/></a>
            </div>
            <div className="wpp-menumob">
              <a href="https://api.whatsapp.com/send?phone=5519991406111" target="_blank" rel="noopener noreferrer"><Image src="/icon-wpp.svg" alt="WhatsApp Nairuz" width={18} height={14}/></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <MenuMobile />
  </header>
);

export default HeaderMob;