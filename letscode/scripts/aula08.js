function getNumber() {
  let inputNumber = document.getElementById('number');
  let getNumber = Number(inputNumber.value);
  let answer = document.getElementById('firstAnswer');
  
  let result = 'O número digitado obedece a ';
  
  if (getNumber >= 0) {
    result += `1ª condição do exercício - retorno: ${getNumber}`;
  } else {
    result += `2ª condição do exercício - retorno: ${getNumber * -1}`;
  }

  return answer.innerHTML = result;
}


function animalSound() {
  let inputText = document.getElementById('animal');
  let animal = inputText.value;
  let answer = document.getElementById('secondAnswer')

  let result;
  switch (animal) {
    case "gato":
      result = `Miau é o som que o ${animal} faz.`;
      break;
    case "cachorro":
      result = `Auau é o som que o ${animal} faz.`;
      break;
    case "peru":
      result = `Gluglu é o som que o ${animal} faz.`;
      break;
    default: 
      result = `Não temos o som de ${animal} cadastrado`;
  }
  
    return answer.innerHTML = result;
}

/**
 * Função para converter farenheit em celsius
 * */

function convertToCelsius() {
  let farenheit = document.getElementById('farenheit');
  let answer = document.getElementById('thirdAnswer');
  let farenheitValue = farenheit.value;

  const celsius = Math.floor((farenheitValue - 32) / 1.8);

  let result;
  if (celsius >= 30){
    result = `${celsius}ºC - Uma praia cai bem agora!`;
  } else if (celsius < 23){
    result = `${celsius}ºC - Cuidado com o clima frio, coloque um agasalho.`;
  } else {
    result = `${celsius}ºC - Clima gostoso para um passeio ao ar livre.`;
  }

  return answer.innerHTML = result;
}
