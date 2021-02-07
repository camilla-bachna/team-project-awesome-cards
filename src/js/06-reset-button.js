'use strict';

const buttonElement = document.querySelector('.js-reset');

function resetAll() {
  // eslint-disable-next-line no-undef
  for (const inputTextConfig of inputsTextConfig) {
    const inputElement = document.querySelector(inputTextConfig.inputClass);
    inputElement.value = inputTextConfig.defaultValue;
  }
  // eslint-disable-next-line no-undef
  clearPhoto();
  // eslint-disable-next-line no-undef
  updateAllInputs();
  clearInputs();
}
function clearInputs() {
  const inputNameElement = document.querySelector('.js-name');
  const inputJobElement = document.querySelector('.js-job');
  inputJobElement.value = '';
  inputNameElement.value = '';
}

buttonElement.addEventListener('click', resetAll);
