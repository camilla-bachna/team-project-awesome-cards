'use strict';
//const sectionElement = document.querySelector('.js-collapsable');
const headerElements = document.querySelectorAll('.collapsable__header');

for (const element of headerElements) {
  element.addEventListener('click', collapsableHandler);
}

function collapsableHandler(event) {
  const sectionElement = event.currentTarget.closest('.js-collapsable');
  //sectionElement.classList.toggle("collapsed");

  const sectionElements = document.querySelectorAll('.js-collapsable');
  for (const section of sectionElements) {
    // compruebo si es el collapsable pulsado
    if (sectionElement === section) {
      //si es el pulsado, le hago un toggle
      section.classList.toggle('collapsed');
    } else {
      //si no es el pulsado, lo cierro
      section.classList.add('collapsed');
    }
  }
}
