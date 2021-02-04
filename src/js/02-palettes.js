'use strict';

const paletteElements = document.querySelectorAll('.js-palette');
const cardElement = document.querySelector('.js-card');

function handlerPalette() {
  //remove palette classes
  cardElement.classList.remove('palette-1', 'palette-2', 'palette-3');

  //add js-palette classes
  const checkedPalette = document.querySelector('.js-palette:checked');
  const checkedPaletteValue = checkedPalette.value;
  cardElement.classList.add('palette-' + checkedPaletteValue);
  //saveInLocalStorage();
}

for (const paletteElement of paletteElements) {
  paletteElement.addEventListener('change', handlerPalette);
}

handlerPalette();
