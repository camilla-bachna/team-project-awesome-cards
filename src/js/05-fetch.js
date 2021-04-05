/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
'use strict';

const shareButton = document.querySelector('.js-share-btn');
const cardResult = document.querySelector('.js-shareclick');
const hiddenElement = document.querySelector('.js-hidden-box');
const twitterHiddenElement = document.querySelector('.js-twitter-share');

let shareLink = '';

function handleCreateBtn(ev) {
  ev.preventDefault();

  fetchAPI();

  shareButton.classList.remove('share__button');
  shareButton.classList.add('share__button--dis');
  shareButton.disabled = true;
  twitterHiddenElement.classList.remove('hidden-share');
}

shareButton.addEventListener('click', handleCreateBtn);

function fetchAPI() {
  const url = 'https://profileawesome.herokuapp.com/card';
  const data = getUserData();
  fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const linkElement = document.querySelector('.js-card-link');
      if (data.success === true) {
        data.cardURL;
        shareLink = data.cardURL;
        linkElement.innerHTML = `<a href="${shareLink}" class="shareclick__text js-shareclick" target="_blank">Pincha aqui para ver tu tarjeta AWESOME.</a>`;
        twitterHiddenElement.classList.remove('hidden-share');
      } else {
        shareButton.disabled = false;
        twitterHiddenElement.classList.add('hidden-share');
        hiddenElement.classList.remove('hidden-share');
      }
    });
}
