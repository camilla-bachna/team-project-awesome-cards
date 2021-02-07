'use strict';

const formElement = document.querySelector('.js-form');

function preventSubmit(event) {
  event.preventDefault();
}
formElement.addEventListener('submit', preventSubmit);

// eslint-disable-next-line no-undef
getFromLocalStorage();

// eslint-disable-next-line no-undef
updateAllInputs();
// eslint-disable-next-line no-undef
handlerPalette();
// eslint-disable-next-line no-undef
updatePhoto();
