//armazena a url na varivel
let requestJSON = '../artigos.json'
//cria uma instancia de objeto
let request = new XMLHttpRequest()
//abre uma solicitação
request.open('GET', requestJSON)

request.responseType = 'json'
request.send()

request.onload = function(){
  let listaArtigos = request.response
  mostrarListaArtigos(listaArtigos)
}

function mostrarListaArtigos(jsonObject) {
  //salva os artigos blog dev do objeto em uma variavel
  let artigos_json = jsonObject['blog_dev']

  let getArticleBox = document.getElementById('list_article')

  for (i = 0; i < artigos_json.length ; i++) {
    let artigo = jsonObject['blog_dev'][i]
    let createButton = document.createElement('button')
    createButton.setAttribute('class','news')
    createButton.setAttribute('type','button')
    let urlArtigo = `window.location.href="${artigo.url}"`
    createButton.setAttribute('onclick', `${urlArtigo}`)
    //Inclusão da imagem
    let createImg = document.createElement('img')
    createImg.setAttribute('src',`${artigo.img_src}`) 
    createImg.setAttribute('alt',`${artigo.img_alt}`) 
    createImg.setAttribute('class', 'article_img')
    createButton.appendChild(createImg)
    //Inclusão do título
    let createP = document.createElement('p')
    createP.textContent = jsonObject['blog_dev'][i].id
    createButton.appendChild(createP)
    //createH6 -> criado e publicado
    let createH6 = document.createElement('h6')
    createH6.textContent = `Escrito por: ${artigo.criado_por} - ${artigo.publicado}`
    createButton.appendChild(createH6)
    getArticleBox.appendChild(createButton)
  }
}
