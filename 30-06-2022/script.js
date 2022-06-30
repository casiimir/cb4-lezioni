import { q, c, createFriendEl, createMessageEl } from './utils.js';
import { GET, POST, DELETE } from './api.js';

const messageBodyPost = {};

const friendsEl = q('.friends');
const messagesEl = q('.messages');
const addNewMessageEl = q('.add-new-message');

const inputTextEl = q('.input-text');
const inputSender = q('.input-sender');
const addMsgBtn = q('.add-new-message-btn');

const filterInput = q('.filter-input');

const messagesListEl = q('.messages-list');
const emptyEl = q('.empty');

// Friends
GET('https://edgemony-backend.herokuapp.com/friends').then((friendList) => {
  friendList.map(friend => createFriendEl(friendsEl, friend.name, friend.photo))
})

// Messages
GET('https://edgemony-backend.herokuapp.com/messages').then((messagesList) => {
  messagesList.reverse().map(({text, sender, date}) => createMessageEl(messagesListEl, text, sender, date)) // Questo è identico a quello che succede in riga 11
})

inputTextEl.addEventListener('input', (e) => messageBodyPost.text = e.target.value);

inputSender.addEventListener('input', (e) => {
  messageBodyPost.sender = e.target.value;
  messageBodyPost.date = new Date().toISOString();
});

addMsgBtn.addEventListener('click', () => {
  POST('https://edgemony-backend.herokuapp.com/messages', messageBodyPost)
    .then(() => document.querySelectorAll('.messageCard').forEach(message => message.remove()))
    .then(() => GET('https://edgemony-backend.herokuapp.com/messages').then((messagesList) => {
      messagesList.reverse().map(({text, sender, date}) => createMessageEl(messagesListEl, text, sender, date))
    }))
})

filterInput.addEventListener('input', (e) => {
  document.querySelectorAll('.messageCard').forEach(message => message.remove());

  GET('https://edgemony-backend.herokuapp.com/messages').then((messagesList) => {
    messagesList
    .reverse()
    .filter(message => message.sender.toLowerCase().includes(e.target.value.toLowerCase()))
    .map(({text, sender, date}) => createMessageEl(messagesListEl, text, sender, date)) // Questo è identico a quello che succede in riga 11
  })
})