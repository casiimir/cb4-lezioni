// console.log('Ciao')

// alert('Ciao')

// let userMsg = prompt('Ciao, chi sei?');

// console.log('Benvenuto', userMsg )

// var pippo = 'Ciao sono Pippo'; Deprecated

// let pippoOne = 'Ciao sono Pippo';
// const pippoTwo = 'Ciao sono Pippo';

// boolean type
// const isOpen = true;  // true or false
// const myName = 'Casi';
// const myAge = 28;
// let something;  // undefined, default value
// null

// const userChoice = prompt('Hey inserisci pure numero');

// IF - ELSE IF - ELSE IF
// if (userChoice >= 10) {
//   console.log('Hai inserito un numero maggiore o uguale a dieci, ovvero:', userChoice)
// } else if (userChoice >= 5 && userChoice <= 9) {
//   console.log('Qualcos altro!', userChoice);
// } else {
//   console.log('Non ci siamo proprio...')
// }

// SWITCH
// switch(userChoice) {
//   case (userChoice >= 10):
//     console.log('Hai inserito un numero maggiore o uguale a dieci, ovvero:', userChoice);
//     break;
//   case (userChoice >= 5 && userChoice <= 9):
//     console.log('Qualcos altro!', userChoice);
//     break;
//   default:
//     console.log('Non ci siamo proprio...');
// }

// Ternary operator
// userChoice >= 10
//   ? console.log('Hai inserito un numero maggiore o uguale a dieci, ovvero:', userChoice)
//   : console.log('Non ci siamo proprio...');



// Calculator - PSEUDO-CODE
// 1. Chiede due numeri da input all'utente
//    - IF l'utente non inserisce uno o entrambi i numeri,
//      ritorna una stringa che ci informa su ciò e interrompe tutto

// 2. Chieda a questo all'utente l'operazione da eseguire
//   - IF l'utente non inserisce alcuna operazione,
//      ritorna una stringa che ci informa su ciò e interrompe tutto

// 3. Venga mostrato all'utente il risultato dell'operazione

// Calculator - CODE
const firstNum = prompt('Inserisci il primo numero:');
const secondNum = prompt('Inserisci il secondo numero:');
const operationChoice = prompt('Inserisci pure l\'operazione desiderata')

const parsedFirstNum = parseInt(firstNum);
const parsedSecondNum = parseInt(secondNum);

if (firstNum.length === 0 || secondNum.length === 0) {
  console.log('Non hai inserito un numero')
}

switch(operationChoice) {
  case 'addizione' || '+':
    console.log('Il risultato della tua operazione è:', parsedFirstNum + parsedSecondNum);
    break;
  case '-':
    console.log('Il risultato della tua operazione è:', parsedFirstNum - parsedSecondNum);
    break;
  case '*':
    console.log('Il risultato della tua operazione è:', parsedFirstNum * parsedSecondNum);
    break;
  case '/' || 'divisione':
    console.log('Il risultato della tua operazione è:', parsedFirstNum / parsedSecondNum);
    break;
  default:
    console.log('Non hai selezionato alcuna operazione.')
}