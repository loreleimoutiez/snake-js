class Food { // pour le bloc food
  constructor() {
    this.size = SQUARE_SIZE;
    this.setRandomPosition();
  }

  setRandomPosition() { // pour faire apparaître aléatoirement le bloc de nourriture
    const maxSize = (GAME_SIZE / this.size) - 1;
    this.x = Math.round(Math.random() * GAME_SIZE % maxSize); // 600 x 600 px divisé par 20
    this.y = Math.round(Math.random() * GAME_SIZE % maxSize); // le -1 pour que la food ne sorte pas du canvas de 30 (donc 29)
    console.log(this.x, this.y); 
  } // on génere une var entre 0 et 20 x 600, modulo (opérateur de reste = Il donne le reste quand un nombre (dividende) est divisé par un autre nombre (diviseur)) 30

  draw() { // pour faire apparaître la nourriture
    ctx.fillStyle = '#fed672';
    ctx.fillRect(this.x * this.size, this.y * this.size, this.size, this.size);
  }
}
