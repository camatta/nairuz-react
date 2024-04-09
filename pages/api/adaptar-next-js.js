const urlBlog = "https://blog.nairuz.com.br/wp-json/wp/v2/posts/";

// Função para fazer uma solicitação AJAX usando a API Fetch
function fetchData(url) {
  return fetch(url)
    .then(response => response.json())
    .catch(error => console.error('Erro na solicitação:', error));
}

// Função para atualizar os elementos do DOM com os dados obtidos
function updateDOMElements(elements, data) {
  elements.forEach((el, index) => {
    const postData = data[index];

    if (postData) {
      fetchMediaData('https://blog.nairuz.com.br/wp-json/wp/v2/media/' + postData.featured_media)
        .then(mediaData => {
          const imgSelecao = el.querySelector('.box-artigo img');
          console.log(imgSelecao)
          if (imgSelecao) {
            imgSelecao.src = mediaData.source_url;
          }
        });

      el.querySelector('.infos-artigo h3').textContent = postData.title.rendered;

      // Criar um objeto Date a partir da string da data
      const dateObject = new Date(postData.date_gmt);

      // Obter os componentes da data
      const dia = dateObject.getDate();
      const mes = dateObject.getMonth() + 1; // Adicionar 1 porque os meses começam do zero
      const ano = dateObject.getFullYear();

      // Criar a string formatada
      const dataFormatada = `${dia}/${mes}/${ano}`;

      el.querySelector('.autor span').textContent = dataFormatada;
      // el.querySelector('.content-post p').innerHTML = postData.excerpt.rendered;

      const postLink = el.querySelector('.btn-artigo a');
      if (postLink) {
        postLink.href = postData.link;
      }
    }
  });
}

// Função para buscar dados da mídia
function fetchMediaData(url) {
  return fetchData(url);
}

// Função principal para buscar dados e atualizar o DOM
function fetchDataAndPopulate() {
  const postElements = document.querySelectorAll('.box-artigo');
  const fetchDataPromise = fetchData('https://blog.nairuz.com.br/wp-json/wp/v2/posts/');

  fetchDataPromise
    .then(result => {
      console.log(result);
      updateDOMElements(postElements, result);
    });
}

// Chamar a função principal
fetchDataAndPopulate();