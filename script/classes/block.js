class Block {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.oldX = x;
    this.oldY = y; // pour les valeurs précédentes des positions
    this.size = size;
  }

  teleportIfOutOfMap() { // pour que snake ne parte pas vers l'infini et l'au delà (pour qu'il reste dans le canvas)
    const maxSize = GAME_SIZE / this.size;

    if(this.x < 0) {
      this.x = maxSize;
    } else if(this.x > maxSize) {
      this.x = 0;
    }
    if(this.y < 0) {
      this.y = maxSize;
    } else if(this.y > maxSize) {
      this.y = 0;
    }
  }

  setPosition(x, y) {
    this.oldX = this.x;
    this.oldY = this.y; 
    this.x = x;
    this.y = y;
  }

  draw() { // fonction pour afficher un truc à l'écran
    ctx.fillStyle = '#02e6c3';
    ctx.fillRect(this.x * this.size, this.y * this.size, this.size, this.size); // permet de dessiner un rectangle sur l'écran
  }
}
