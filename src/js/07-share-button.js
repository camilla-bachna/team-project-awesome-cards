/* eslint-disable no-undef */
'use strict';

const twitterElement = document.querySelector('.js-twitter-btn');
const twitterLinkElement = document.querySelector('.js-twitter-link');

function handleTwitterShare() {
  twitterLinkElement.href = `https://twitter.com/intent/tweet?ref_src=twsrc%5Etfw&url=${shareLink}`;
}
twitterElement.addEventListener('click', handleTwitterShare);
