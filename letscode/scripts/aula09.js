function findLetterIndex(){
  let wordInput = document.getElementById('firstWordInput');
  let letterInput = document.getElementById('firstLetterInput');
  let answer = document.getElementById('firstAnswer');
  let wordValue = wordInput.value;
  let letterValue = letterInput.value;

  let cont = 0;
  let result = [];
  
  while (wordValue.length > cont ) {
    if (wordValue[cont] === letterValue) {
      result.push(`A letra ${letterValue} foi encontrada na posição ${cont}`);
    }

    cont++
  }

  return answer.innerHTML = result[0];
}

function findLastLetterIndex(){
  let wordInput = document.getElementById('secondWordInput');
  let letterInput = document.getElementById('secondLetterInput');
  let answer = document.getElementById('secondAnswer');
  let wordValue = wordInput.value;
  let letterValue = letterInput.value;

  let cont = 0;
  let result = [];
  
  while (wordValue.length > cont) {
    if (wordValue[cont] === letterValue) {
      result.push(`A letra ${letterValue} foi encontrada na posição ${cont}`);
    }

    cont++
  }
  let lastIndex = result.length - 1;
  return answer.innerHTML = result[lastIndex];
}

function findLetter() {
  let wordInput = document.getElementById('thirdWordInput');
  let letterInput = document.getElementById('thirdLetterInput');
  let answer = document.getElementById('thirdAnswer');
  let wordValue = wordInput.value;
  let letterValue = letterInput.value;

  let result = [];
  let cont =0;
  while (wordValue.length > cont) {
    if (wordValue[cont] === letterValue){
      result.push(`A letra ${letterValue} foi encontrada na posição ${cont}`)
    } 
    cont++
  }
  const printAllAnswer = `${result[0]} <br> ${result[1]}`;
  return answer.innerHTML = printAllAnswer;
}