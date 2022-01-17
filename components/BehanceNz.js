import Image from 'next/image';

const BehanceNz = () => (
  <section className="container-fluid" id="behance-nairuz">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="behance">
            <div className="text-be">
              <p>Confira os melhores projetos, criações e ideias do nosso time no <span>Behance</span>.</p>
            </div>
            <div className="button-be">
              <a className="d-flex align-items-center" href="https://www.behance.net/Contato40a2" target="_blank" rel="noopener noreferrer"><div className="icon-behance me-2"><Image src="/icon-behance.svg" alt="Logo Behance" width={24} height={24}/></div>Visitar perfil no Behance</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default BehanceNz;