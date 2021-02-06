'use strict';

const inputsTextConfig = [
  {
    inputClass: '.js-name',
    cardClass: '.js-preview-name',
    defaultValue: 'Mary Shelly',
    cardPrefix: '',
    cardElementAttribute: 'innerHTML',
  },
  {
    inputClass: '.js-job',
    cardClass: '.js-preview-job',
    defaultValue: 'Master of creatures',
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
  for (const inputTextConfig of inputsTextConfig) {
    const inputElement = document.querySelector(inputTextConfig.inputClass);
    const cardElement = document.querySelector(inputTextConfig.cardClass);

    let newValue = inputElement.value;

    if (inputTextConfig.cardElementAttribute === 'innerHTML') {
      if (inputElement.value === '') {
        newValue = inputTextConfig.defaultValue;
      } else {
        newValue = inputElement.value;
      }

      cardElement.innerHTML = newValue;
    } else if (inputTextConfig.cardElementAttribute === 'href') {
      if (inputElement.value === '') {
        newValue = '#';
      } else {
        newValue = newValue.replace(inputTextConfig.cardPrefix, '');
        newValue = inputTextConfig.cardPrefix + newValue;
      }
      cardElement.href = newValue;
    }
  }
  // eslint-disable-next-line no-undef
  saveInLocalStorage();
}
const inputTextElements = document.querySelectorAll('.js-input-text');

for (const inputTextElement of inputTextElements) {
  inputTextElement.addEventListener('keyup', updateAllInputs);
}
