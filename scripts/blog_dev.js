// Fetch pegando o JSON e colocando no console
fetch('/artigos.json')
  .then(response => {
    return response.json();
  })
  .then(respostaRetornada => console.log(respostaRetornada))

