'use strict';

// eslint-disable-next-line no-console
console.log('>> Ready :)');

const menuBtn = document.querySelector('.js__menu');
const modal = document.querySelector('.modal');
const closeBtn = document.querySelector('.close');

function openMenu (){
  modal.classList.add('one');
  modal.classList.remove('out');
}
function closeMenu (){
  //modal.style.display=  'none';
  modal.classList.add('out');
  modal.classList.remove('one');
}
menuBtn.addEventListener('click', openMenu);
closeBtn.addEventListener('click', closeMenu);
