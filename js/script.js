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

  function handleKeydown(event) {
    const key = event.key;
    const possibleKeystrokes = [
      "ArrowLeft",
      "ArrowUp",
      "ArrowRight",
      "ArrowDown",
    ];

    if (possibleKeystrokes.includes(key)) {
      event.preventDefault();

      switch (key) {
        case "ArrowLeft":
          console.log("CURRENT TRASH INDEX", game.currentTrashIndex);

          console.log("CURRENT TRASH IMAGE", game.trashImg.src);

          console.log("CURRENT TRASH OBJ", game.trashArr[0]);
          if (game.trashArr[0].bin === "black") {
            game.trashArr.splice(game.trashArr[0], 1);
            game.trashImg.src = game.trashArr[0].img;
          } else {
            // game.gameIsOver = true;
            console.log("GAME IS OVER !!!");
          }

          // VERY VERY IMPORTANT FOR IMAGE CHANGES!
          //   game.trashImg.src = game.trashArr[0].img;

          console.log("WHOLE ARRAY", game.trashArr);
          console.log("Arrow Left");
          break;
        case "ArrowUp":
          console.log("CURRENT TRASH INDEX", game.currentTrashIndex);

          console.log("CURRENT TRASH IMAGE", game.trashImg.src);

          console.log("CURRENT TRASH OBJ", game.trashArr[0]);
          if (game.trashArr[0].bin === "green") {
            game.trashArr.splice(game.trashArr[0], 1);
            game.trashImg.src = game.trashArr[0].img;
          } else {
            // game.gameIsOver = true;
            console.log("GAME IS OVER !!!");
          }

          // VERY VERY IMPORTANT FOR IMAGE CHANGES!
          //   game.trashImg.src = game.trashArr[0].img;

          console.log("WHOLE ARRAY", game.trashArr);
          console.log("Arrow Up");
          break;
        case "ArrowRight":
          console.log("CURRENT TRASH INDEX", game.currentTrashIndex);

          console.log("CURRENT TRASH IMAGE", game.trashImg.src);

          console.log("CURRENT TRASH OBJ", game.trashArr[0]);
          if (game.trashArr[0].bin === "yellow") {
            game.trashArr.splice(game.trashArr[0], 1);
            game.trashImg.src = game.trashArr[0].img; //this is changing my image
          } else {
            // game.gameIsOver = true;
            console.log("GAME IS OVER !!!");
          }

          console.log("WHOLE ARRAY", game.trashArr);
          console.log("Arrow Right");
          break;
        case "ArrowDown":
          console.log("CURRENT TRASH INDEX", game.currentTrashIndex);

          console.log("CURRENT TRASH IMAGE", game.trashImg.src);

          console.log("CURRENT TRASH OBJ", game.trashArr[0]);
          if (game.trashArr[0].bin === "blue") {
            game.trashArr.splice(game.trashArr[0], 1);
            game.trashImg.src = game.trashArr[0].img;
          } else {
            // game.gameIsOver = true;
            console.log("GAME IS OVER !!!");
          }

          console.log("WHOLE ARRAY", game.trashArr);
          console.log("Arrow Down");
          break;
      }
    }
  }
  function handleKeyup(event) {
    //need to pass the event because we need to know which key was pressed, unlike for click where we don't have to "store" what was pressed
    const key = event.key;
    const possibleKeystrokes = [
      "ArrowLeft",
      "ArrowUp",
      "ArrowRight",
      "ArrowDown",
    ];

    if (possibleKeystrokes.includes(key)) {
      event.preventDefault(); //prevent the default behaviour of the keys! NEED THIS

      switch (key) {
        case "ArrowLeft":
          console.log("Keyed up => Arrow left");
          break;
        case "ArrowUp":
          console.log("Keyed up => ArrowUp");
          break;
        case "ArrowRight":
          console.log("Keyed up => ArrowRight");
          break;
        case "ArrowDown":
          console.log("Keyed up => ArrowDown");
          break;
      }
    }
  }

  window.addEventListener("keyup", handleKeyup);

  window.addEventListener("keydown", handleKeydown);
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

// let currentObj;
// let wholeShuffledObjectArray;
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
    this.lives = 1;
    this.gameIsOver = false;
  }

  start() {
    this.gameScreen.style.height = `${this.height}px`;
    this.gameScreen.style.width = `${this.width}px`;
    this.gameScreen.style.display = "grid";
    this.gameScreen.style.placeItems = "center";
    this.startScreen.style.display = "none";
    this.gameShuffle();
    this.update();
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
    // OUTSIDE THE CLASS FOR CLICK EVENTS
    // wholeShuffledObjectArray = this.trashArr;
    // currentObj = firstTrashObject;
  }

  update() {
    if (this.gameIsOver === true) {
      return;
    }
    this.trashImg.src = this.trashArr[this.currentTrashIndex].img;
    if (this.currentTrashIndex >= this.trashArr.length) {
    }
  }
}
