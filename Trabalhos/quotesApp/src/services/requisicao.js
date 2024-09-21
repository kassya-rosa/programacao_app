export const requisicaoCitacao = () => {
     return fetch("https://api.api-ninjas.com/v1/quotes?category=happiness", {
          headers: {
               "X-Api-Key": "gagt2kgKeRy4LJC7zvXwwQ==QOGEMRyesMk4obLa"
          }
     })
     .then((resposta) => resposta.json())
     .then((json) => console.log(json[0]))
}

export const requisicaoImagem = (query) => {
     return fetch(`https://api.unsplash.com/photos/random?query=${query}`, {
          headers: {
               "Authorization": "cZpcFkTlTEymBi14_ccU6BldtA5aP4pcsRORIv-AVz0"
          }
     })
     .then((resposta) => resposta.json())
     .then((json) => console.log(json.urls.small))
     .catch((erro) => console.error(erro))
}

export const obterCitacaoImagem = async () => {
     try {
          const citacao = await requisicaoCitacao();
          const imagem = await requisicaoImagem(citacao.author);
          return {citacao, imagem}
     } catch(erro) {
          console.error(erro);
     }
}