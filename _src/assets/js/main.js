'use strict';

// eslint-disable-next-line no-console
console.log('>> Ready :)');

const menuBtn = document.querySelector('.js__menu');
const modal = document.querySelector('.modal');
const closeBtn = document.querySelector('.close');
const modalImage = document.querySelectorAll('.image');
const closeProyect = document.querySelectorAll('.close-project');

function openMenu (){
  modal.classList.add('one');
  modal.classList.remove('out');
}
function closeMenu (){
  modal.classList.add('out');
  modal.classList.remove('one');
}
function openInfo(event){
  const target = event.target;
  const parent = target.parentElement.parentElement;
  const modalProject = parent.querySelector('.project__info');
  if (!target.classList.contains('close')){
    modalProject.classList.add('one');
    modalProject.classList.remove('out');
  }
}
function closeInfo(event){
  const target = event.currentTarget;
  const modalSon = target.parentElement;
  const modalProject = modalSon.parentElement;
  if(target.classList && target.classList.contains('close')){
    modalProject.classList.toggle('one');
    modalProject.classList.toggle('out');
  }
}



for(const item of modalImage){
  item.addEventListener('click', openInfo);
}
for(const item of closeProyect){
  item.addEventListener('click', closeInfo);
}
if(menuBtn){
  menuBtn.addEventListener('click', openMenu);
  closeBtn.addEventListener('click', closeMenu);
}
