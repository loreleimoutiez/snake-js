class Snake {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.blockSize = SQUARE_SIZE; // taille d'un bloc dans le snake
    this.blocks = []; // pour définir le corps du snake en blocs
    this.addBlock(this.x, this.y);
    this.alive = true; // snakosss est vivant par défaut (comme nous tous)
  }

  addBlock(x, y) { // méthode pour incrémenter les blocs
    const block = new Block(x, y, this.blockSize);
    this.blocks.push(block); // ajoute le bloc à la suite
  }

  moveHead() {
    const head = this.blocks[0];
    head.oldX = head.x;
    head.oldY = head.y; // sauvegarde les positions avant de bouger
    switch (currentDirection) {
      case 'left':
        head.x -= 1;
        break;
      case 'right':
        head.x += 1;
        break;
      case 'up':
        head.y -= 1;
        break;
      case 'down':
        head.y +=1;
      break;
    }
    head.teleportIfOutOfMap();
  }

  calculateNewBlockPosition() {
    // const head = this.blocks[0];
    let {x, y} = this.blocks[this.blocks.length - 1]; // = let x = head.x et let y = head.y /
    switch (currentDirection) {
      case 'left':
        x += 1;
        break;
      case 'right':
        x -= 1;
        break;
      case 'up':
        y += 1;
        break;
      case 'down':
        y -= 1;
      break;
    }
    return {x, y};
  }

  eat() { // pour ajouter food au snake
    const head = this.blocks[0];
    if(head.x === food.x && head.y === food.y) { // si la tête du snake est au même endroit que food en x et y
      food.setRandomPosition();
      const {x, y} = this.calculateNewBlockPosition();
      this.addBlock(x, y);
    }
  }

  blockTouchHead(block) { // pour vérifier s'il est mort et si game over tmtc
    const head = this.blocks[0];
    const headX = head.x;
    const headY = head.y;

    return (headX === block.x && headY === block.y); // actif si tête entre en collision en x et y d'un bloc
  }

  update() { // fonction appelée à chaque tour de boucle
    this.moveHead();
    this.eat();
    for (const [index, block] of this.blocks.entries()) {
      if(index > 0) { // si sup à 0 on détermine les nouvelles positions qu'on va donner au block
        const {oldX, oldY} = this.blocks[index - 1];
        block.setPosition(oldX, oldY);
        if(this.blockTouchHead(block)) {
        this.alive = false; // si false, on arrête d'appeler update = stop jeu
      }
      }
      block.draw();
    }
  }
}
