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

// Teléfono
const phoneElement = document.querySelector('.js-phone');
const phonePreviewElement = document.querySelector('.js-preview-phone');

function phoneHandler () {
  const phoneValue = phoneElement.value;

  if (phoneValue === '') {
    phonePreviewElement.href = '555-55-55-55';
  } else {
    phonePreviewElement.href = phoneValue;
  }
}


phoneElement.addEventListener('keyup', phoneHandler);

// linkedIn
const linkedinElement = document.querySelector('.js-linkedin');
const linkedinPreviewElement = document.querySelector('.js-preview-linkedin');

function linkedinHandler () {
  const linkedinValue = linkedinElement.value;

  if (linkedinValue === '') {
    linkedinPreviewElement.href = 'www.linkedin.com';
  } else {
    linkedinPreviewElement.href = linkedinValue;
  }
}


linkedinElement.addEventListener('keyup', linkedinHandler);

// github
const githubElement = document.querySelector('.js-github');
const githubPreviewElement = document.querySelector('.js-preview-github');

function githubHandler () {
  const githubValue = githubElement.value;

  if (githubValue === '') {
    githubPreviewElement.href = 'www.github.com';
  } else {
    githubPreviewElement.href = githubValue;
  }
}


githubElement.addEventListener('keyup', githubHandler);