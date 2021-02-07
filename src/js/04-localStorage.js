'use strict';

function getUserData() {
  return {
    // eslint-disable-next-line no-undef
    photo: photo,
    palette: parseInt(document.querySelector('.js-palette:checked').value),
    name: document.querySelector('.js-name').value,
    job: document.querySelector('.js-job').value,
    email: document.querySelector('.js-email').value,
    phone: document.querySelector('.js-phone').value,
    linkedin: document.querySelector('.js-linkedin').value,
    github: document.querySelector('.js-github').value,
  };
}

// eslint-disable-next-line no-unused-vars
function saveInLocalStorage() {
  const userData = getUserData();
  const userDataInString = JSON.stringify(userData);
  localStorage.setItem('userData', userDataInString);
}

// eslint-disable-next-line no-unused-vars
function getFromLocalStorage() {
  const userDataInString = localStorage.getItem('userData');
  if (userDataInString !== null) {
    const userData = JSON.parse(userDataInString);
    document.querySelector('.js-name').value = userData.name;
    document.querySelector('.js-job').value = userData.job;
    document.querySelector('.js-email').value = userData.email;
    document.querySelector('.js-phone').value = userData.phone;
    document.querySelector('.js-linkedin').value = userData.linkedin;
    document.querySelector('.js-github').value = userData.github;
    // eslint-disable-next-line no-undef
    photo = userData.photo;
    const paletteElements = document.querySelectorAll('.js-palette');
    for (const paletteElement of paletteElements) {
      if (paletteElement.value === userData.palette) {
        paletteElement.checked = true;
      }
    }

    // eslint-disable-next-line no-undef
    updateAllInputs();
    // eslint-disable-next-line no-undef
    handlerPalette();
    // eslint-disable-next-line no-undef
    updatePhoto();
  }
}
