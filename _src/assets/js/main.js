'use strict';


const counter = document.querySelector('.page__main-counter');
const insertNumber = document.querySelector('.page__main-insert');
const btn = document.querySelector('.btn');
const clue = document.querySelector('.page__main-clue');

console.log('>> Ready :)');

// Función número aleatorio

function getRandomNumber(max) {
    return Math.ceil(Math.random() * 100);
  }
  
  // Anda, chacho, píntame en la consola un número random hasta 100;
  console.log('> ' + getRandomNumber(100));



// Crear función del listener

const writeNumber = () => {
    counter.innerHTML = insertNumber.value;
}

//Listener al botón

btn.addEventListener('click', writeNumber);