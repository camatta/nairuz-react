import Image from "next/image";

const UltimosMateriaisRicos = ({ title, content, author, date, link }) => {

    // Retira as tags que vem no conteudo
    content = content.replace(/<\/?[^>]+(>|$)/g, "");

    const limitePalavras = (texto, limite) => {
        const palavras = texto.split(" ");

        if(palavras.length <= limite) {
            return texto;
        }

        const novoContent = palavras.slice(0, limite).join(" ");

        return content = `${novoContent}...`;
    }
    limitePalavras(content, 30);


    // Criar um objeto Date a partir da string da data
    const dateObject = new Date(date);

    // Obter os componentes da data
    const dia = dateObject.getDate();
    const mes = "0" + Number(dateObject.getMonth() + 1); // Adicionar 1 porque os meses começam do zero
    const ano = dateObject.getFullYear();

    // Criar a string formatada
    const dataFormatada = `${dia}.${mes}.${ano}`;

    return (
      <div className="post-rico">
        <div className="title-rico">
          <h5>{title}</h5>
        </div>
        <div className="content-rico">
          <p>{content}</p>
        </div>
        <div className="footer-rico">
          <div className="autor-data-rico">
            <p>{dataFormatada}</p>
            <p>{author}</p>
          </div>
          <div className="button-rico">
            <a href={link} target="_blank" rel="noopener noreferrer">
              <Image src="/icon-arrow-blog-2.svg" alt="Ver Post" width={35} height={35} />
            </a>
          </div>
        </div>
      </div>
    )
}

export default UltimosMateriaisRicos