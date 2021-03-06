'use strict';

// eslint-disable-next-line no-console
console.log('>> Ready :)');

const menuBtn = document.querySelector('.js__menu');
const modal = document.querySelector('.modal');
const closeBtn = document.querySelector('.close');
const modalImage = document.querySelectorAll('.image');
const closeProyect = document.querySelectorAll('.close-project');
const skillLinks = document.querySelectorAll('.skill__link');

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
function changeTab(event){
  const target = event.target.id;
  const div1 = document.getElementsByClassName('1');
  const div2 = document.getElementsByClassName('2');
  const div3 = document.getElementsByClassName('3');
  const div4 = document.getElementsByClassName('4');
  const div5 = document.getElementsByClassName('5');
  div1[0].classList.add('hidden');
  div2[0].classList.add('hidden');
  div3[0].classList.add('hidden');
  div4[0].classList.add('hidden');
  div5[0].classList.add('hidden');
  console.log(target);
  const divTarget = document.getElementsByClassName(target);
  console.log(divTarget);
  divTarget[0].classList.toggle('hidden');
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

for(const item of skillLinks){
  item.addEventListener('click', changeTab);
}
