'use strict';

const formElement = document.querySelector('.js-form');

function preventSubmit(event) {
  event.preventDefault();
}
formElement.addEventListener('submit', preventSubmit);

// recuperamos la info desde el local storage
// eslint-disable-next-line no-undef
getFromLocalStorage();

// arrancamos la página

// eslint-disable-next-line no-undef
updateAllInputs();
// eslint-disable-next-line no-undef
handlerPalette();
// eslint-disable-next-line no-undef
updatePhoto();
