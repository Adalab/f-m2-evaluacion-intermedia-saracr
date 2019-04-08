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
  
  console.log('> ' + getRandomNumber(100));

// Crear función del listener

const writeClue = () => {
    clue.innerHTML = insertNumber.value;

    const myRandomNumber = getRandomInt(100);
    if (myRandomNumber){
        console.log(`Demasiado alto!`);
    }
    else {}
};

//Listener al botón

btn.addEventListener('click', writeClue);