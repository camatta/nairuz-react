const NewsletterNz = () => (
  <section className="container-fluid" id="newsletter">
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-3">
          <div className="text-news mobcenter">
            <p><span className="news-upper">Assine nossa</span><br></br><span className="news-destaque">newsletter</span><br></br>e seja o primeiro a receber conteúdos, dicas e novidades</p>
          </div>
        </div>
        <div className="col-12 col-md-9">
          <div className="form-news">
            <form>
              <div className="form-nome">
                <label htmlFor="nome">Nome</label>
                <input type="text" name="nome" id="nome" placeholder="Digite seu nome aqui..." />
              </div>
              <div className="form-email">
                <label htmlFor="email">E-mail</label>
                <input type="email" className="input-email" name="email" id="email" placeholder="Digite seu e-mail aqui..." />
              </div>
              <input className="button-news" type="submit" value="Enviar" />
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default NewsletterNz;