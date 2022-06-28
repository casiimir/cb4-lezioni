const cEl = (el) => document.createElement(el);

const userName = prompt('Inserisci il nome utente');
const navBarEl = cEl('nav');
const userNameEl = cEl('h3');

userNameEl.textContent = userName

navBarEl.appendChild(userNameEl);
document.body.appendChild(navBarEl);

try {
  if(!localStorage.getItem('username')) {
    throw new Error('Nessun username presente al localStorage');
  }
} catch (error) {
  console.log(error);
  localStorage.setItem('username', userName);
}

// Sulla base dell'esercitazione del giorno, creare una pagina che mostri una navbar. Questa deve visualizzare:
// - Un nome utente, preso da prompt salvi sul localStorage
// - Lo stesso nome sarà visualizzato all'interno di questa navbar come testo
// - Gli elementi HTML utilizzati dovranno essere dichiarati via JavaScript
// - Bisogna fare un controllo (try) sul nome utente stesso, se non presente nel localStorage allora mostri un errore in console, e successivamente aggiunto (catch)