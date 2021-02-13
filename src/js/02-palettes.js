'use strict';

const paletteElements = document.querySelectorAll('.js-palette');
const cardElement = document.querySelector('.js-card');
let checkedPalette = 0;

function handlerPalette() {
  cardElement.classList.remove('palette-0', 'palette-1', 'palette-2');
  const checkedPaletteElement = document.querySelector('.js-palette:checked');
  checkedPalette = checkedPaletteElement.value;
  cardElement.classList.add('palette-' + checkedPalette);
  // eslint-disable-next-line no-undef
  saveInLocalStorage();
}

for (const paletteElement of paletteElements) {
  paletteElement.addEventListener('change', handlerPalette);
}

// handlerPalette();
