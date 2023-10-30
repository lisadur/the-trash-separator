window.onload = function () {
  const startButton = document.getElementById("start-button");
  const game = new Game(trash); //actually "calling" the Game class
  startButton.addEventListener("click", function () {
    startGame();
  });

  function startGame() {
    console.log("start game");
    game.start();
  }
};

const trash = [
  {
    name: "pizzabox",
    img: "/the-trash-separator/images/pizza-box.png",
    bin: "black",
  },
  {
    name: "milkcarton",
    img: "/the-trash-separator/images/milk-carton.png",
    bin: "yellow",
  },
  {
    name: "bakingpaper",
    img: "/the-trash-separator/images/baking-paper.png",
    bin: "black",
  },
  {
    name: "eggcarton",
    img: "/the-trash-separator/images/egg-carton.png",
    bin: "blue",
  },
  {
    name: "tissues",
    img: "/the-trash-separator/images/tissues.png",
    bin: "black",
  },
  {
    name: "coffeefilter",
    img: "/the-trash-separator/images/coffee-filter.png",
    bin: "green",
  },
  {
    name: "newspaper",
    img: "/the-trash-separator/images/newspaper.png",
    bin: "blue",
  },
  {
    name: "coffeecup",
    img: "/the-trash-separator/images/coffee-cup.png",
    bin: "yellow",
  },
  {
    name: "lightbulb",
    img: "/the-trash-separator/images/light-bulb.png",
    bin: "black",
  },
  {
    name: "tincan",
    img: "/the-trash-separator/images/tin-can.png",
    bin: "yellow",
  },
  {
    name: "deodorant",
    img: "/the-trash-separator/images/deodorant.png",
    bin: "yellow",
  },
  {
    name: "toothbrush",
    img: "/the-trash-separator/images/toothbrush.png",
    bin: "black",
  },
  {
    name: "razor",
    img: "/the-trash-separator/images/razor.png",
    bin: "black",
  },
  {
    name: "flowers",
    img: "/the-trash-separator/images/flowers.png",
    bin: "green",
  },
  {
    name: "eggshells",
    img: "/the-trash-separator/images/egg-shells.png",
    bin: "green",
  },
];

// <-- game.js --> //

class Game {
  constructor(trashArr) {
    this.startScreen = document.querySelector("#game-start");
    this.gameScreen = document.querySelector("#game-play");
    this.gameEndScreen = document.querySelector("#game-end");
    this.currentTrashIndex = 0;
    this.trashImg;
    this.height = 500;
    this.width = 500;
    this.trashArr = trashArr;
    this.trashImg = document.createElement("img");
    this.trashImg.style.position = "relative";
    this.trashImg.style.width = "155px";
    this.gameScreen.appendChild(this.trashImg);
    this.score = 0;
    this.lives = 2;
    this.gameIsOver = false;
  }

  start() {
    this.gameScreen.style.height = `${this.height}px`;
    this.gameScreen.style.width = `${this.width}px`;
    this.gameScreen.style.display = "grid";
    this.gameScreen.style.placeItems = "center";
    this.startScreen.style.display = "none";
    this.gameShuffle();
    this.gameLoop();
  }

  gameShuffle() {
    for (let i = this.trashArr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = this.trashArr[i];
      this.trashArr[i] = this.trashArr[j];
      this.trashArr[j] = temp;
    }
    const firstTrashObject = this.trashArr[0];
    console.log(firstTrashObject);
    console.log(this.trashArr);
    console.log(this.trashArr[this.currentTrashIndex].img);
  }

  gameLoop() {
    if (this.gameIsOver === true) {
      return;
    }
    this.trashImg.src = this.trashArr[this.currentTrashIndex].img;
    this.currentTrashIndex++;
    if (this.currentTrashIndex >= this.trashArr.length) {
    }
  }
}
