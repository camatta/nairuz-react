import Link from 'next/link';
import Image from 'next/image';
import MenuMobile from '../components/MenuMobile'

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
              <Link href="/"><a><Image src="/logo-header.svg" alt="Logo Nairuz" width={120} height={22}/></a></Link>
            </div>
            <div className="wpp-menumob">
              <Link href="/"><a><Image src="/icon-wpp.svg" alt="WhatsApp Nairuz" width={18} height={14}/></a></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <MenuMobile />
  </header>
);

export default HeaderMob;