const newEl = (el) => document.createElement(el);

const createCard = (parent, imgLink, title, price) => {
  const wrapperEl = newEl('div');
  const titleEl = newEl('h3');
  const priceEl = newEl('p');
  const imgEl = newEl('img');

  wrapperEl.className = "wrapper"
  titleEl.className = "title"
  priceEl.className = "price"
  imgEl.className = "img"

  imgEl.setAttribute('alt', title);
  imgEl.setAttribute('src', imgLink)

  titleEl.textContent = title
  priceEl.textContent = price

  wrapperEl.append(imgEl, titleEl, priceEl);
  parent.appendChild(wrapperEl);
}

const productList = [
  {
    link: 'https://picsum.photos/200/200?1',
    title: 'Pippo',
    price: 250,
  },{
    link: 'https://picsum.photos/200/200?2',
    title: 'Pluto',
    price: 150,
  },{
    link: 'https://picsum.photos/200/200?3',
    title: 'Topolino',
    price: 220,
  },{
    link: 'https://picsum.photos/200/200?4',
    title: 'Paperino',
    price: 350,
  },{
    link: 'https://picsum.photos/200/200?5',
    title: 'Boh',
    price: 50,
  },
]

const body = document.querySelector('body');   // <------- Da decommentare (try & catch)

// Filter + map
// productList
//   .filter(product => product.price >= 220)
//   .map(product => createCard(body, product.link, product.title, product.price))

// Map e condizione
// productList.map(product => product.price >= 220 && createCard(body, product.link, product.title, product.price))

const userLogIn = prompt('Ciao! Inserisci il tuo nome utente');
const userPassword = prompt('Inserisci la password');

try {
  if(!localStorage.getItem('username')) {
    localStorage.setItem('username', userLogIn)
    localStorage.setItem('userPassword', userPassword)
  }

  if(userPassword === 'pippo') {
    productList.map(product => createCard(body, product.link, product.title, product.price))
  } else {
    throw new Error('Password errata!')
  }
} catch (error) {
  console.log(error);
  document.body.append(document.createElement('p').textContent = 'Loading... controlla la console')
  throw new Error('Si è rotto qualcosa in createCard')
} finally {
  console.log('Questo verrà eseguito in ogni caso');
}

