function welcome() {
  return 'Ciao ragazzi!';
}

function sum(numOne, numTwo) {
  //...
  return numOne + numTwo;
}

// function sub(numOne, numTwo) {
//   return numOne - numTwo;
// }

// const PI = 3.14

const sumFiveTwo = sum(5,2);
const sumTenTwo = sum(10,2);

// console.log(welcome())

// --------------------------
function formatText(string) {
  const minuscolina = string.toLowerCase();

  return minuscolina.trim()
}

const user1 = formatText('       CasI-9201');
const user2 = formatText('CasImIrroOO-9211');
const user3 = formatText('           CasI-23211        ');

// const user1 = '       CasI-9201'.toLocaleLowerCase().trim()

// La funzione deve:
//  - accettare una stringa come arg.
//  - aggiungere alla stringa la porzione in farfallino
//    - aggiungere ad ogni vocale presente, una 'f' e la vocale stessa
// 
//  es. 'ciao' => 'cifiafaofo'

function translateInFarf(word) {
  // const word = prompt('Inserisci la tua parola');
  const translatedText = [];

  for(char of word) {
    if (char === 'a'|| char === 'e' || char === 'i' || char === 'o' || char === 'u') {
      translatedText.push(char + 'f' + char)
    }
    else {
      translatedText.push(char)
    }
  }

  return translatedText.join('');
}


// Objects
const myCar = {
  color: 'red',
  brand: 'Ferrari',
  km: 0,
  seats: 3,
  engineRun: function() {
    console.log('Vruuum Vruuum!')
  },
  turnLeft: function() {
    console.log('<===')
  },
  turnRight: function() {
    console.log('===>')
  }
}




















const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const h1El = document.querySelector('h1');

buttonEl.addEventListener('click', () => {
  h1El.textContent = translateInFarf(inputEl.value)
})
