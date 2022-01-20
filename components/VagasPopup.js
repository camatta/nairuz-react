import Image from 'next/image';

const VagasPopup = () => (
  <div className="modal-overlay-vagas">
    <div className="secondary-overlay">
    <div className="container vagas-popup" id="vagas-popup">
      <div className="row align-items-center">
        <div className="col-12 col-md-6">
          <div className="left-popup">
            <div className="title-popup">
                <p>Vaga de<br></br><span>Designer Junior</span></p>
            </div>
            <div className="conteudo-vaga">
              <div className="subtitle-vaga-popup">
                <p>DESCRIÇÃO DA VAGA</p>
              </div>
              <div className="text-vaga-popup">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac eros molestie, venenatis mi et, rhoncus justo. Proin a orci tortor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
              </div>
              <div className="subtitle-vaga-popup">
                <p>REQUISITOS</p>
              </div>
              <div className="text-vaga-popup">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac eros molestie, venenatis mi et, rhoncus justo. Proin a orci tortor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
              </div>
              <div className="subtitle-vaga-popup">
                <p>DESEJÁVEL</p>
              </div>
              <div className="text-vaga-popup">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac eros molestie, venenatis mi et, rhoncus justo. Proin a orci tortor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
              </div>
              <div className="subtitle-vaga-popup">
                <p>BENEFÍCIOS</p>
              </div>
              <div className="text-vaga-popup">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac eros molestie, venenatis mi et, rhoncus justo. Proin a orci tortor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6">
          <div className="right-popup">
            <div className="form-popup">
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
                        <label htmlFor="cidade">Cidade</label>
                        <input type="text" className="input-email" name="email" id="cidade" placeholder="Digite sua cidade" />
                      </div>
                    </div>
                    <div className="linha-form grid mb-0">
                      <div className="form-email form-selects">
                        <label htmlFor="email">Linkedin</label>
                        <input type="email" className="input-email mb-4" name="email" id="email" placeholder="URL do perfil" />
                      </div>
                      <div className="form-email form-selects">
                        <label htmlFor="email">Vaga para qual está se candidatando?</label>
                        <input type="email" className="input-email mb-4" name="email" id="email" placeholder="Selecione" />
                      </div>
                      <div className="form-email form-selects upload-curriculo">
                        <label htmlFor="email">Anexe seu currículo abaixo (máximo 3MB - PDF / JPG / DOC)</label>
                        <input type="file" className="input-email mb-4" name="email" id="email" placeholder="Selecione" />
                      </div>
                    </div>
                    <div className="button-form-consultor">
                      <input className="button-form-temas popup" type="submit" value="Enviar Candidatura" />
                    </div>
                  </form>
                </div>
                <div className="close-popup">
                  <button><Image src="/icon-accordion.svg" alt="Fechar" width={14} height={14} /></button>
                </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  </div>
);

export default VagasPopup;