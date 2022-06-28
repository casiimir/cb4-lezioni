import { newEl, createCard, q } from './utils.js';

const BASE_URL = 'https://fakestoreapi.com/products'

const salesEl = q('.sales');
const newCollectionEl = q('.new-collection');
const addProduct = q('.add-product');
const loadingEl = q('.loading');

fetch(BASE_URL)
  .then(res => res.json())
  .then(data => {
    data
      .filter(product => product.price <= 100)
      .map(product => createCard(salesEl, product.image, product.title, product.price))

    data
      .filter(product => product.price >= 100)
      .map(product => createCard(newCollectionEl, product.image, product.title, product.price))
  })
  .then(() => loadingEl.style.display = 'none')


// HTTP - POST
// addProduct.addEventListener('click', () => {
//   fetch('https://fakestoreapi.com/products', {
//     method: 'DELETE',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//       title: 'test product Edgemony',
//       price: 123.5,
//       description: 'lorem ipsum set Edgemony',
//       image: 'https://picsum.photos/200/200',
//       category: 'electronic'
//   })
// })});

// HTTP - DELETE
// addProduct.addEventListener('click', () => {
//   fetch('https://fakestoreapi.com/products/1', {
//     method: 'DELETE',
//     headers: {
//       'Content-Type': 'application/json'
//     },
// })});