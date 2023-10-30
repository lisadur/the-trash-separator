class Game {
  constructor(trash) {
    this.startScreen = document.querySelector("#game-start");
    this.gameScreen = document.querySelector("#game-play");
    this.gameEndScreen = document.querySelector("#game-end");
    this.height = 650;
    this.width = 650;
    this.trash = trash;
    this.score = 0;
    this.lives = 2;
    this.gameIsOver = false;
  }
//3 methoden: screen erscheinen und wegmachen, sowie shufflen
  start() {
    this.gameScreen.style.height = `${this.height}px`;
    this.gameScreen.style.width = `${this.width}px`;
    this.gameScreen.style.display = "block";
    this.startScreen.style.display = "none";
    //here I need to shuffle my trash cards
    const shuffle (trash) => {
        for (let i = 0; i < this.trash.length; i++) {
        let shuffle = Math.floor(Math.random() * this.trash.length);
        let temp = this.trash[i];
        this.trash[i] = this.trash[shuffle];
        this.trash[shuffle] = temp;
      }
      return this.trash;
    }

    this.gameLoop();
  }

  gameLoop() {
    if (this.gameIsOver === true) {
      return;
    }
    this.update(); //if game is not over, load my next trash item
  }

  update() {
    this.trash.update()
  }
}
