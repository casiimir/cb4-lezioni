// const fruit = 'apple';

// const fruits = ['apple', 'orange', 'mango', 'kiwi'];

// // console.log(fruits[3]) // Accedere ad un singolo valore dell'array

// fruits.push('ananas')  // Accoda un elemento alla fine dell'array
// fruits.pop() // Rimuove l'ultimo elemento dell'array
// fruits.shift()  // Rimuove il primo elemento dell'array
// fruits.unshift('orango');

// // fruits.splice(0, 3); // Seleziona un range di valori di un array
// // fruits.slice(0, 3); 

// const numsOne = [1,2,3,4,5];
// const numsTwo = [6,7,8,9,10];

// const numsConcat = numsOne.concat(numsTwo);  // Concatena più array

// fruits.indexOf('mango') // Ritorna l'indice di quel preciso elemento, in questo caso 2

// fruits.includes('mango') // Ritorna true se un elemento è presente dell'array

// fruits.reverse() // Inverte l'ordine dell'array

const fruits = ['apple', 'orange', 'mango', 'kiwi'];

// for(let i = 0; i <= fruits.length - 1; i++) {
//   console.log(i + ': ' + fruits[i])
// }

//1. for(let i = 0; 0 <= 3; i++)  ==> 0: apple
//2. for(let i = 1; 1 <= 3; i++)  ==> 1: orange
//3. for(let i = 2; 2 <= 3; i++)  ==> 2: mango
//4. for(let i = 3; 3 <= 3; i++)  ==> 3: kiwi
// for(let i = 4; 4 <= 3; i++) // Non avverà mai

// for(index in fruits) {
//   console.log(index + ': ' + fruits[index])
// }

for(fruit of fruits) {
  if (fruit === 'orange') {
    alert('Hai ottenuto un\'arancia!')
  } else {
    console.log(fruit)
  }
}

// Struttura fondamentale di un array: index - valore

// console.log('ciao');
// console.log('ciao');
// console.log('ciao');
// console.log('ciao');
// console.log('ciao');
// console.log('ciao');
// console.log('ciao');
// console.log('ciao');
// console.log('ciao');
// console.log('ciao');
// console.log('ciao');
// console.log('ciao');
// console.log('ciao');
// console.log('ciao');
// console.log('ciao');
// console.log('ciao');
// console.log('ciao');
// console.log('ciao');
// console.log('ciao');
// console.log('ciao');
// console.log('ciao');

// for(x = 0; x <= 100; x++) {
//   console.log('ciao')
// }