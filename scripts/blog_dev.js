// Fetch pegando o JSON e colocando no console
//var lista = document.getElementById('menu-lista');

fetch('../artigos.json')
  .then(response => {
    return response.blob();
    }
  )
  .then(response => { 
    console.log(response)
  }
  )

