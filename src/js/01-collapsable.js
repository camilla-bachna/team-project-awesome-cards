'use strict';

const headerElements = document.querySelectorAll('.collapsable__header');

for (const element of headerElements) {
  element.addEventListener('click', collapsableHandler);
}

function collapsableHandler(event) {
  const sectionElement = event.currentTarget.closest('.js-collapsable');

  const sectionElements = document.querySelectorAll('.js-collapsable');
  for (const section of sectionElements) {
    if (sectionElement === section) {
      section.classList.toggle('collapsed');
    } else {
      section.classList.add('collapsed');
    }
  }
}
