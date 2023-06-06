import Image from 'next/image';

const ContatoPopup = () => (
  <div className="modal-overlay">
    <div className="secondary-overlay">
    <div className="container contato-popup" id="contato-popup">
      <div className="row">
        <div className="col-12 col-md-5">
          <div className="left-popup">
            <div className="logo-popup">
              <Image src="/logo-popup.png" alt="Nairuz Logo" width={324} height={153} loading="eager" />
            </div>
            <div className="title-popup">
              <p>Transforme sua empresa em um <br></br><span>Case de sucesso!</span></p>
              <p className="fale-conosco">Fale Conosco!</p>
            </div>
            <div className="text-popup">
              <p>Preencha os campos do formulário e retornaremos o mais breve possível! Não divulgaremos suas informações e nem enviaremos spam.</p>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-7">
          <div className="right-popup">
            <div className="formRd-tema">
              <div role="main" id="formulario-contato-atualizado-ed22e1fdee9c4ddfcecd"></div>
            </div>
            {/* <div className="form-popup">
                  <form>
                    <div className="linha-form">
                      <div className="form-nome">
                        <label htmlFor="nome">Nome *</label>
                        <input type="text" name="nome" id="nome" placeholder="Digite seu nome completo" />
                      </div>
                      <div className="form-email">
                        <label htmlFor="email">E-mail *</label>
                        <input type="email" className="input-email" name="email" id="email" placeholder="Seu melhor e-mail" />
                      </div>
                    </div>
                    <div className="linha-form">
                      <div className="form-nome">
                        <label htmlFor="nome">Telefone *</label>
                        <input type="text" name="nome" id="nome" placeholder="+55" />
                      </div>
                      <div className="form-email">
                        <label htmlFor="email">Empresa</label>
                        <input type="text" className="input-email" name="email" id="email" placeholder="Nome da sua empresa" />
                      </div>
                    </div>
                    <div className="linha-form grid mb-0">
                      <div className="form-email form-selects">
                        <label htmlFor="email">Como podemos te ajudar?</label>
                        <input type="text" className="input-email mb-4" name="email" id="email" placeholder="Selecione" />
                      </div>
                      <div className="form-email form-selects">
                        <label htmlFor="email">Quais seus objetivos?</label>
                        <input type="text" className="input-email" name="email" id="email" placeholder="Selecione" />
                      </div>
                    </div>
                    <div className="button-form-consultor">
                      <input className="button-form-temas popup" type="submit" value="Entrar em contato" />
                    </div>
                  </form>
                </div> */}
                <div className="close-popup">
                  <button><Image src="/icon-close.svg" alt="Fechar" width={14} height={14} /></button>
                </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  </div>
);


export default ContatoPopup;