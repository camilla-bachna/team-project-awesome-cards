/* eslint-disable no-undef */

'use strict';

const buttonElement = document.querySelector('.js-reset');

function resetAll() {
  for (const inputTextConfig of inputsTextConfig) {
    const inputElement = document.querySelector(inputTextConfig.inputClass);
    inputElement.value = inputTextConfig.defaultValue;
  }

  clearPhoto();
  updateAllInputs();
  clearInputs();
}

function clearInputs() {
  const inputNameElement = document.querySelector('.js-name');
  const inputJobElement = document.querySelector('.js-job');
  inputJobElement.value = '';
  inputNameElement.value = '';
  shareButton.classList.remove('share__button--dis');
  shareButton.disabled = false;
  shareButton.classList.add('share__button');
  twitterHiddenElement.classList.add('hidden-share');
}

buttonElement.addEventListener('click', resetAll);
