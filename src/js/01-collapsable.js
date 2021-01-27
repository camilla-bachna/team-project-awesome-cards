'use strict';
const sectionElement = document.querySelector('.js-collapsable');
const headerElement = document.querySelector('.collapsable__header');

function collapsableHandler () {
  sectionElement.classList.toggle('collapsed');
}

headerElement.addEventListener ('click', collapsableHandler);