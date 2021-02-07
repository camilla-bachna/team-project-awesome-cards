'use strict';

const shareButton = document.querySelector('.js-share-btn');
const cardResult = document.querySelector('.js-shareclick');

function handleCreateBtn(ev) {
  ev.preventDefault();

  const url = 'https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card/';
  // eslint-disable-next-line no-undef
  const data = getUserData();

  fetch(url, {
    method: 'POST',
    mode: 'no-cors',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      // console.log('Server response:', data);
      if (data.success === true) {
        cardResult.innerHTML = data.cardURL;
      } else {
        cardResult.innerHTML = data.error;
      }
    });
}

shareButton.addEventListener('click', handleCreateBtn);
