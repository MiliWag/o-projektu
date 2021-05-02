'use strict';

const hamburgerMenu = document.querySelector('#hamburger-menu');
const navigation = document.querySelector('#menu');

hamburgerMenu.addEventListener('click', (e) => {
  hamburgerMenu.classList.toggle('change');
  navigation.classList.toggle('menu-show');
  console.log('kliknuto');
});
