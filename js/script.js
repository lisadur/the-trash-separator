window.onload = function () {
  const startButton = document.getElementById("start-button");
  const game = new Game(trash); //actually "calling" the Game class
  let keydownListenerAdded = false; //storing in a variable if the arrow keys were added, should not work before startGame()!!!
  startButton.addEventListener("click", function () {
    startGame();
  });

  function startGame() {
    console.log("start game");
    game.start();

    if (!keydownListenerAdded) {
      window.addEventListener("keydown", handleKeydown); //adding now after game.start()
      keydownListenerAdded = true;
    }
  }

  function handleKeydown(event) {
    if (game.gameIsOver) {
      window.removeEventListener("keydown", handleKeydown); //removing the EventListener once game is over
      return;
    }
    const key = event.key;
    const possibleKeystrokes = [
      "ArrowLeft",
      "ArrowUp",
      "ArrowRight",
      "ArrowDown",
    ];

    if (possibleKeystrokes.includes(key)) {
      event.preventDefault();

      switch (
        key // SHOULD NOT WORK ANYMORE ONCE GAME IS OVER, SHOULD ALSO NOT WORK BEFORE GAMESTART! MOVE IT DOWN
      ) {
        case "ArrowLeft":
          console.log("CURRENT TRASH INDEX", game.currentTrashIndex);
          console.log("CURRENT TRASH IMAGE", game.trashImg.src);
          console.log("CURRENT TRASH OBJ", game.trashArr[0]);
          if (game.trashArr[0].bin === "black") {
            game.newRound();
          } else {
            game.lostRound();
          }
          console.log("WHOLE ARRAY", game.trashArr);
          console.log("Arrow Left");
          break;
        case "ArrowUp":
          console.log("CURRENT TRASH INDEX", game.currentTrashIndex);
          console.log("CURRENT TRASH IMAGE", game.trashImg.src);
          console.log("CURRENT TRASH OBJ", game.trashArr[0]);
          if (game.trashArr[0].bin === "green") {
            game.newRound();
          } else {
            game.lostRound();
          }

          console.log("WHOLE ARRAY", game.trashArr);
          console.log("Arrow Up");
          break;
        case "ArrowRight":
          console.log("CURRENT TRASH INDEX", game.currentTrashIndex);
          console.log("CURRENT TRASH IMAGE", game.trashImg.src);
          console.log("CURRENT TRASH OBJ", game.trashArr[0]);

          if (game.trashArr[0].bin === "yellow") {
            game.newRound();
          } else {
            game.lostRound();
          }
          console.log("WHOLE ARRAY", game.trashArr);
          console.log("Arrow Right");
          break;
        case "ArrowDown":
          console.log("CURRENT TRASH INDEX", game.currentTrashIndex);
          console.log("CURRENT TRASH IMAGE", game.trashImg.src);
          console.log("CURRENT TRASH OBJ", game.trashArr[0]);
          if (game.trashArr[0].bin === "blue") {
            game.newRound();
          } else {
            game.lostRound();
          }
          console.log("WHOLE ARRAY", game.trashArr);
          console.log("Arrow Down");
          break;
      }
    }
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
    this.lives = 3;
    this.originalTrashArrLength = trashArr.length;
    this.gameIsOver = false;
  }

  start() {
    this.gameScreen.style.height = `${this.height}px`;
    this.gameScreen.style.width = `${this.width}px`;
    this.gameScreen.style.display = "grid";
    this.gameScreen.style.placeItems = "center";
    this.startScreen.style.display = "none";
    this.gameShuffle();
    this.trashImg.src = this.trashArr[this.currentTrashIndex].img;
  }

  gameShuffle() {
    for (let i = this.trashArr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = this.trashArr[i];
      this.trashArr[i] = this.trashArr[j];
      this.trashArr[j] = temp;
    }
  }

  newRound() {
    if (this.gameIsOver === true) {
      return;
    } else if (this.score >= this.originalTrashArrLength - 1) {
      this.score++;
      this.wonGame();
    } else {
      this.score++;
      console.log("YOUR SCORE IS", this.score);
      this.trashArr.splice(this.trashArr[0], 1); //updating my trashArr, moving to next Obj
      this.trashImg.src = this.trashArr[0].img; // loading the next img
    }
  }

  lostRound() {
    this.lives--;
    if (this.lives > 0) {
      console.log("Try again - Use your Joker!");
    } else {
      this.lostGame();
    }
  }

  lostGame() {
    this.gameIsOver = true;
    console.log(
      `You lose! The item belongs in the ${this.trashArr[0].bin} bin!`
    );
  }

  wonGame() {
    this.gameIsOver = true;
    console.log(`YOU WIN OMG!!!!!!!`);
    console.log("YOUR SCORE IS", this.score);
  }
}

// NEXT: What happens when lives > 0 and array is empty -> YOU WIN
