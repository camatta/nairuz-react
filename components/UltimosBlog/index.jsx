import Image from 'next/image'

const UltimosBlog = ({ img, title, content, date, author, link }) => {

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
    limitePalavras(content, 15);


    // Criar um objeto Date a partir da string da data
    const dateObject = new Date(date);

    // Obter os componentes da data
    const dia = dateObject.getDate();
    const mes = "0" + Number(dateObject.getMonth() + 1); // Adicionar 1 porque os meses começam do zero
    const ano = dateObject.getFullYear();

    // Criar a string formatada
    const dataFormatada = `${dia}.${mes}.${ano}`;

  return (
    <div className="post-blog">
        <div className="img-post">
            <Image src={img} alt={title} width={290} height={182} rel="noopener noreferrer" />
        </div>
        <div className="medium-blog">
            <div className="title-post">
                <h5>{title}</h5>
            </div>
            <div className="content-post">
                <p>{content}</p>
            </div>
        <div className="footer-post">
            <div className="autor-data-post">
            <p>{dataFormatada}</p>
            <p>{author}</p>
            </div>
            <div className="button-post">
                <a href={link} target="_blank" rel="noopener noreferrer">
                    <Image src="/novaident/setinha-direita.svg" alt="Ver Post" width={35} height={35} />
                </a>
            </div>
        </div>
        </div>
    </div>
  )
}

export default UltimosBlog