'use strict';


const counter = document.querySelector('.page__main-counter');
const insertNumber = document.querySelector('.page__main-insert');
const btn = document.querySelector('.btn');
const clue = document.querySelector('.page__main-clue');
let i = 0;

console.log('>> Ready :)');

// Función número aleatorio

function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
  }
  let secretNumber = getRandomNumber(100);
  console.log('>',secretNumber);

// Crear función del listener

const writeClue = () => {
    //Pistas
    const userNumber = parseInt(field.value);
    console.log('nº usuario', userNumber);
    console.log('mi nº', secretNumber);
    if (myRandomNumber === userNumber){
        console.log(`Demasiado alto!`);
    }
    else {}
};

//Listener al botón

btn.addEventListener('click', play);