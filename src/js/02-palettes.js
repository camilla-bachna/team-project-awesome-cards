'use strict';

const paletteElements = document.querySelectorAll('.js-palette');
const cardElement = document.querySelector('.js-card');
let checkedPalette = 1;

function handlerPalette() {
  //remove palette classes
  cardElement.classList.remove('palette-1', 'palette-2', 'palette-3');

  //add js-palette classes
  const checkedPaletteElement = document.querySelector('.js-palette:checked');
 checkedPalette = checkedPaletteElement.value;
  cardElement.classList.add('palette-' + checkedPalette);
  saveInLocalStorage();
}

for (const paletteElement of paletteElements) {
  paletteElement.addEventListener('change', handlerPalette);
}

// handlerPalette();
