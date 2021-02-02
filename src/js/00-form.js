'use strict';

const inputsTextConfig = [
  {
    inputClass: '.js-name',
    cardClass: '.js-preview-name',
    defaultValue: 'Nombre apellidos',
    cardPrefix: '',
    cardElementAttribute: 'innerHTML'
  },
  {
    inputClass: '.js-job',
    cardClass: '.js-preview-job',
    defaultValue: 'Programadora front end',
    cardPrefix: '',
    cardElementAttribute: 'innerHTML'
  },
  {
    inputClass: '.js-email',
    cardClass: '.js-preview-email',
    defaultValue: '',
    cardPrefix: 'mailto:',
    cardElementAttribute: 'href'
  },
  {
    inputClass: '.js-phone',
    cardClass: '.js-preview-phone',
    defaultValue: '',
    cardPrefix: '',
    cardElementAttribute: 'href'
  },
  {
    inputClass: '.js-linkedin',
    cardClass: '.js-preview-linkedin',
    defaultValue: '',
    cardPrefix: 'https://www.linkedin.com/in/',
    cardElementAttribute: 'href'
  },
  {
    inputClass: '.js-github',
    cardClass: '.js-preview-github',
    defaultValue: '',
    cardPrefix: 'https://www.github.com/',
    cardElementAttribute: 'href'
  }
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
}
const inputTextElements = document.querySelectorAll('.js-input-text');
// escucho a cada uno de ellos con un addEventListener
for (const inputTextElement of inputTextElements) {
  inputTextElement.addEventListener('keyup', updateAllInputs);
}



updateAllInputs();


// clear all inputs
//inicializamos el botón reset y llamamlos a los input de la preview card
const buttonElement = document.querySelector('.js-reset');
const previewTextElements = document.querySelectorAll('.js-preview-text');

//añadimos el evento al boton
buttonElement.addEventListener ('click', resetPreview);

// creamos la funcion reset para borrar todos los preview
function resetPreview() {
  // console.log('me quieren borrar');
  for (const previewElement of previewTextElements) {
    //reseteamos los innerHTML
    previewElement.value = '';

    //reseteramos los href
    previewElement.href = '#';
  }

}



// Name

// const nameElement = document.querySelector('.js-name');
// const namePreviewElement = document.querySelector('.js-preview-name');

// function nameHandler () {
//   const nameValue = nameElement.value;
//   if (nameValue === '') {
//     namePreviewElement.innerHTML = 'Nombre Apellido';
//   } else {
//     namePreviewElement.innerHTML = nameValue;
//   }
// }

// nameElement.addEventListener('keyup', nameHandler);


// //Job

// const jobElement = document.querySelector('.js-job');
// const jobPreviewElement = document.querySelector('.js-preview-job');

// function jobHandler () {
//   const jobValue = jobElement.value;
//   if (jobValue === '') {
//     jobPreviewElement.innerHTML = 'Front-end Unicorn';
//   } else {
//     jobPreviewElement.innerHTML = jobValue;
//   }
// }

// jobElement.addEventListener('keyup', jobHandler);

// // Email

// const emailElement = document.querySelector('.js-email');
// const emailPreviewElement = document.querySelector('.js-preview-email');

// function emailHandler () {
//   const emailValue = emailElement.value;

//   if (emailValue === '') {
//     emailPreviewElement.href = 'mailto:unicorn@developer.es';
//   } else {
//     emailPreviewElement.href = `mailto:${emailValue}`;
//   }
// }


// emailElement.addEventListener('keyup', emailHandler);

// // Teléfono
// const phoneElement = document.querySelector('.js-phone');
// const phonePreviewElement = document.querySelector('.js-preview-phone');

// function phoneHandler () {
//   const phoneValue = phoneElement.value;

//   if (phoneValue === '') {
//     phonePreviewElement.href = '555-55-55-55';
//   } else {
//     phonePreviewElement.href = phoneValue;
//   }
// }


// phoneElement.addEventListener('keyup', phoneHandler);

// // linkedIn
// const linkedinElement = document.querySelector('.js-linkedin');
// const linkedinPreviewElement = document.querySelector('.js-preview-linkedin');

// function linkedinHandler () {
//   const linkedinValue = linkedinElement.value;

//   if (linkedinValue === '') {
//     linkedinPreviewElement.href = 'www.linkedin.com';
//   } else {
//     linkedinPreviewElement.href = linkedinValue;
//   }
// }


// linkedinElement.addEventListener('keyup', linkedinHandler);

// // github
// const githubElement = document.querySelector('.js-github');
// const githubPreviewElement = document.querySelector('.js-preview-github');

// function githubHandler () {
//   const githubValue = githubElement.value;

//   if (githubValue === '') {
//     githubPreviewElement.href = 'www.github.com';
//   } else {
//     githubPreviewElement.href = githubValue;
//   }
// }


// githubElement.addEventListener('keyup', githubHandler);


