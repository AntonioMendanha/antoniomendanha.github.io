//cria uma instancia de objeto
let request = new XMLHttpRequest()

request.onload = function (){
  populateFooter()
}

function populateFooter() {

let urlSocialMedia = { 
  'linkedin': {
    'url': "https://www.linkedin.com/in/antoniomendanha/",
  },
  'github': {
    'url': "https://github.com/AntonioMendanha",
  },
  'youtube': {
    'url': "https://www.youtube.com/c/KCafebr",
  },
  'twitter': {
    'url': "https://twitter.com/antoniomendanha",
  }
}

let footer = document
  .createElement('footer')
  .setAttribute('class', 'footer');
footer.textContent = `teste`
console.log(footer)

let titleRodape = document
  .createElement('p')
  .setAttribute('class', 'footer')
  .textContent = `Copyright&copy; 2020 - by Antonio Mendanha`;
console.log(titleRodape)
//footer.appendChild(titleRodape)

/*

for (let item in dadosRodape) {
  console.log(`Antes ${dadosRodape}, ${item} -> ${item.url}`)  
    
  if (dadosRodape.hasOwnProperty(item)) {
      console.log(`Depois ${item}, ${dadosRodape.hasOwnProperty(item).label} -> ${item.url}`)  
    }
}
		<p class="rodape"> Copyright&copy; 2020 - by Antonio Mendanha<br>
			<a href="https://www.linkedin.com/in/antoniomendanha/" target="blank">
				<img class="badge" src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="Linkedin_badge" target="blank">
			</a> 
			<a href="https://github.com/AntonioMendanha" target="blank">
				<img class="badge" src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" alt="Github_badge" target="blank">
			</a>
			<a href="https://www.youtube.com/c/KCafebr" target="blank">
				<img class="badge" src="https://img.shields.io/badge/YouTube-FF0000?style=for-the-badge&logo=youtube&logoColor=white" alt="Youtube_badge" target="blank">
			</a> 
			<a href="https://twitter.com/antoniomendanha" target="blank">
				<img class="badge" src="https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white" alt="Twitter_badge" target="blank">
			</a>
		</p>

*/
}