'use strict';

// Name

const nameElement = document.querySelector('.js-name');
const namePreviewElement = document.querySelector('.js-preview-name');

function nameHandler () {
  const nameValue = nameElement.value;
  if (nameValue === '') {
    namePreviewElement.innerHTML = 'Nombre Apellido';
  } else {
    namePreviewElement.innerHTML = nameValue;
  }
}

nameElement.addEventListener('keyup', nameHandler);


//Job

const jobElement = document.querySelector('.js-job');
const jobPreviewElement = document.querySelector('.js-preview-job');

function jobHandler () {
  const jobValue = jobElement.value;
  if (jobValue === '') {
    jobPreviewElement.innerHTML = 'Front-end Unicorn';
  } else {
    jobPreviewElement.innerHTML = jobValue;
  }
}

jobElement.addEventListener('keyup', jobHandler);

// Email

const emailElement = document.querySelector('.js-email');
const emailPreviewElement = document.querySelector('.js-preview-email');

function emailHandler () {
  const emailValue = emailElement.value;

  if (emailValue === '') {
    emailPreviewElement.href = 'mailto:unicorn@developer.es';
  } else {
    emailPreviewElement.href = `mailto:${emailValue}`;
  }
}


emailElement.addEventListener('keyup', emailHandler);