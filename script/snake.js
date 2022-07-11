const GAME_SIZE = 600; // YOUTUBE VID DU TUTO = https://www.youtube.com/watch?v=EI7XuCxdn6E
const SQUARE_SIZE = 20; // taille d'un bloc dans le snake
const canvas = document.getElementById('game'); // récup le canvas
const ctx = canvas.getContext('2d'); // récup le contexte

const snake = new Snake(SQUARE_SIZE); // snake initialisé
const food = new Food();
let currentDirection = 'right';

function deteckKeyPressed() { // détecter la touche du clavier sur laquelle on appuie
  document.addEventListener('keydown', function(event) {
    // console.log(event.key); -> permet de connaître le nom de la touche pressée pour l'associer
    switch (event.key) {
      case 'ArrowLeft':
        currentDirection = 'left';
        break;
      case 'ArrowRight':
        currentDirection = 'right';
        break;
      case 'ArrowUp':
        currentDirection = 'up';
        break;
      case 'ArrowDown':
        currentDirection = 'down';
        break;
    }
  });
}

function clearScreen() { // permet de clear à chaque refresh pour ne pas que le snake fasse un trait qui ne disparaît jamais
  ctx.clearRect(0, 0, GAME_SIZE, GAME_SIZE);
}

function update() {
  clearScreen();
  food.draw(); // appelle bloc food
  snake.update();
  if(snake.alive) {
    setTimeout(update, 150); // donc vitesse du jeu
  }
} // rafraîchit toutes les 300 millisecondes

function start() {
  deteckKeyPressed();
  update();
}

start(); // appelle la fonction update et permet de commencer le truc
