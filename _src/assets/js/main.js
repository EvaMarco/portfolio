'use strict';

// eslint-disable-next-line no-console
console.log('>> Ready :)');

const menuBtn = document.querySelector('.js__menu');
const modal = document.querySelector('.modal');
const closeBtn = document.querySelector('.close');

function openMenu (){
  modal.style.display=  'block';
}
function closeMenu (){
  modal.style.display=  'none';
}
menuBtn.addEventListener('click', openMenu);
closeBtn.addEventListener('click', closeMenu);
