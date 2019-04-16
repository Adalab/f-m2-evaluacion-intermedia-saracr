'use strict';


const counter = document.querySelector('.page__main-counter');
const insertNumber = document.querySelector('.page__main-insert');
const btn = document.querySelector('.btn');
const clue = document.querySelector('.page__main-clue');
let i = 0;
counter.innerHTML = i;

console.log('>> Ready :)');


// Función número aleatorio
function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

const gameNumber = getRandomNumber(100);
console.log(gameNumber);


const play = () => {
  const playerNumber = parseInt(insertNumber.value);
  console.log('número usuario', playerNumber);
  console.log('número juego', gameNumber);
  if (gameNumber === playerNumber){
    clue.innerHTML = '¡Yasss has acertado 🖖!';
    i= i+1;
    counter.innerHTML = i;
  }
  else if (gameNumber > playerNumber){
    clue.innerHTML = '¡Sube más 👆!';
    i= i+1;
    counter.innerHTML = i;
  }
  else if (gameNumber < playerNumber){
    clue.innerHTML = '¡Te has pasado 👇!';
    i= i+1;
    counter.innerHTML = i;
  }
};

btn.addEventListener('click', play);