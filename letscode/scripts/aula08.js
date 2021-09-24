function getNumber() {
  let inputNumber = document.getElementById('number');
  let getNumber = Number(inputNumber.value);
  let answer = document.getElementById('firstAnswer');
  
  let result;
  
  if (getNumber >= 0) {
    result = `O número digitado obedece a primeira condição do exercício - retorno: ${getNumber}`;
  } else {
    result = `O número digitado obedece a primeira condição do exercício - retorno: ${getNumber * -1}`;
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

function convertToCelsius(farenheit) {
  if (typeof farenheit !== "number") {
    return console.log(`farenheit -> ${typeof farenheit}`)
  } else {
    const celsius = (farenheit - 32) / 1.8;
    return celsius;
  }
}

function checkTemperature(value) {
  const celsius = convertToCelsius(value);

  if (celsius >=20){
    return console.log('Esta muito quente')
  } else if (celsius < 10){
    return console.log('Está muito frio')
  } else {
    return console.log('Está morno')
  }
}
