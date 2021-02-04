'use strict';

const inputsTextConfig = [
  {
    inputClass: '.js-name',
    cardClass: '.js-preview-name',
    defaultValue: 'Nombre apellidos',
    cardPrefix: '',
    cardElementAttribute: 'innerHTML',
  },
  {
    inputClass: '.js-job',
    cardClass: '.js-preview-job',
    defaultValue: 'Programadora front end',
    cardPrefix: '',
    cardElementAttribute: 'innerHTML',
  },
  {
    inputClass: '.js-email',
    cardClass: '.js-preview-email',
    defaultValue: '',
    cardPrefix: 'mailto:',
    cardElementAttribute: 'href',
  },
  {
    inputClass: '.js-phone',
    cardClass: '.js-preview-phone',
    defaultValue: '',
    cardPrefix: '',
    cardElementAttribute: 'href',
  },
  {
    inputClass: '.js-linkedin',
    cardClass: '.js-preview-linkedin',
    defaultValue: '',
    cardPrefix: 'https://www.linkedin.com/in/',
    cardElementAttribute: 'href',
  },
  {
    inputClass: '.js-github',
    cardClass: '.js-preview-github',
    defaultValue: '',
    cardPrefix: 'https://www.github.com/',
    cardElementAttribute: 'href',
  },
];

function updateAllInputs() {
  // recorro los 6 inputs del array inputsTextConfig
  for (const inputTextConfig of inputsTextConfig) {
    // obtengo el elemento input del formulario
    const inputElement = document.querySelector(inputTextConfig.inputClass);
    // obtengo el elemento del preview
    const cardElement = document.querySelector(inputTextConfig.cardClass);
    // obtengo el valor del input
    let newValue = inputElement.value;

    // compruebo si tengo que usar el innerHTML, es decir si es el nombre o la profesion
    if (inputTextConfig.cardElementAttribute === 'innerHTML') {
      // compruebo si está vacío
      if (inputElement.value === '') {
        newValue = inputTextConfig.defaultValue;
      } else {
        newValue = inputElement.value;
      }

      // actualizo la tarjeta
      cardElement.innerHTML = newValue;
    }

    // si no es de tipo innerHTML, compruebo si tengo que usar el href, es decir si es el email, phone, linkedin o gihtub
    else if (inputTextConfig.cardElementAttribute === 'href') {
      // compruebo si está vacío
      if (inputElement.value === '') {
        newValue = '#';
      } else {
        // limpio el prefijo por si acaso la usuaria ha escrito cosas como:
        // - https://github.com/migueldelmazo en vez de migueldelmazo a secas
        // - https://www.linkedin.com/in/migueldelmazo en vez de migueldelmazo a secas
        newValue = newValue.replace(inputTextConfig.cardPrefix, '');
        // vuelvo a añadir el prefijo https://www.linkedin.com/in/
        newValue = inputTextConfig.cardPrefix + newValue;
      }

      // actualizo la tarjeta
      cardElement.href = newValue;
    }
  }
  //saveInLocalStorage();
}
const inputTextElements = document.querySelectorAll('.js-input-text');
// escucho a cada uno de ellos con un addEventListener
for (const inputTextElement of inputTextElements) {
  inputTextElement.addEventListener('keyup', updateAllInputs);
}

updateAllInputs();

// clear all inputs
const buttonElement = document.querySelector('.js-reset');

function resetAll() {
  //ESTO ESTA MAL HECHO
  for (const inputTextConfig of inputsTextConfig) {
    const inputElement = document.querySelector(inputTextConfig.inputClass);
    const cardElement = document.querySelector(inputTextConfig.cardClass);
    inputElement.value = '';
    cardElement.value = '';
  }
}

buttonElement.addEventListener('click', resetAll);

// //inicializamos el botón reset y llamamlos a los input de la preview card
// const buttonElement = document.querySelector('.js-reset');
// const previewTextElements = document.querySelectorAll('.js-preview-text');

// //añadimos el evento al boton
// buttonElement.addEventListener ('click', resetPreview);

// // creamos la funcion reset para borrar todos los preview
// function resetPreview() {
//   console.log('me quieren borrar');
//   for (const previewElement of previewTextElements) {
//     //reseteamos los innerHTML
//     previewElement.value = '';

//     //reseteramos los href
//     previewElement.href = '#';
// }

// }
