/* eslint-disable no-unused-vars */
'use strict';

const shareButton = document.querySelector('.js-share-btn');
const cardResult = document.querySelector('.js-shareclick');
const linkElement = document.querySelector('.js-card-link');

let shareLink = '';

function handleCreateBtn(ev) {
  ev.preventDefault();

  const url = 'https://profileawesome.herokuapp.com/card';
  // eslint-disable-next-line no-undef
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
      // console.log('Server response:', data);
      if (data.success === true) {
        data.cardURL;
        shareLink = data.cardURL;

        linkElement.innerHTML = `<a href="${shareLink}" class="shareclick__text js-shareclick" target="_blank">${shareLink}</a>;`;
      } else {
        cardResult.innerHTML = data.error;
      }
    });
}

shareButton.addEventListener('click', handleCreateBtn);
