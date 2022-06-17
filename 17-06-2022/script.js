// Esercizio 1 - 16/06/2022
function calculator() {
  const numOne = parseInt(prompt('Inserisci il primo numero'));
  const numTwo = parseInt(prompt('Inserisci il secondo numero'));
  const operation = prompt('Inserisci un\'operazione');
  let result = 0

  switch(operation.toLowerCase()){
    case 'addizione':
    case '+':
      result = numOne + numTwo;
      break;
    case 'sottrazione':
    case '-':
      result = numOne - numTwo;
      break;
    case 'moltiplicazione':
    case '*':
      result = numOne * numTwo;
      break;
    case 'divisione':
    case '/':
      result = numOne / numTwo;
      break;

    default:
      console.log('Operazione o numeri non inseriti!');
  }

  return 'Il risultato finale è: ' + result
}

// console.log(calculator())


// Lezione 17-06-2022

// function sum() {
//   var pizza = 'pizza';
//   return pizza
// }

// if (true) {
//   var pizza = 'pizza';
// }

// console.log(pizza)


function sum(numOne, numTwo) {
  return numOne + numTwo
}

function sub(numOne, numTwo) {
  return numOne - numTwo
}

function mult(numOne, numTwo) {
  return numOne * numTwo
}

function ratio(numOne, numTwo) {
  return numOne / numTwo
}

function calculatorTwo() {
  const numOne = parseInt(prompt('Inserisci il primo numero'));
  const numTwo = parseInt(prompt('Inserisci il secondo numero'));
  const operation = prompt('Inserisci un\'operazione');

  if(operation === 'addizione' || operation === '+') {
    return sum(numOne, numTwo)
  } else if (operation === 'sottrazione' || operation === '-') {
    return sub(numOne, numTwo)
  } else if (operation === 'mu' || operation === '*') {
    return mult(numOne, numTwo)
  } else if (operation === 'rat' || operation === '/') {
    return ratio(numOne, numTwo)
  } 
}

// calculatorTwo()

const personList = ['Pippo', 'Pluto', 'Paperino'];
personList[0];

const personPippo = {
  // key: value
  name: 'Pippo',
  age: 30,
  id: 0
}

const people = [
  {
    name: 'Pippo',
    age: 30,
  },
  {
    name: 'Pluto',
    age: 26,
  },
  {
    name: 'Paperino',
    age: 28,
  }
]

for(info in personPippo) {
  console.log(personPippo[info])
}


// SCOPE Globale e scope Locale in Functions
// function calc() {
//   const numOne = 0;
//   // ...

//   function sum() {
//     const numTwo;
//     return numOne + numTwo;
//   }

//   console.log(numTwo);
//   return sum();
// }