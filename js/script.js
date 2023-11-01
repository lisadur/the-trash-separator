window.onload = function () {
  const startButton = document.getElementById("start-button");
  const restartButton = document.getElementById("restart-button");
  const winRestartButton = document.getElementById("win-restart-button");
  const game = new Game(trash); //actually "calling" the Game class
  let keydownListenerAdded = false; //storing in arrow key functionality was added

  const gameStarted = localStorage.getItem("gameStarted") === "true"; //check if game was already started
  if (gameStarted) {
    startGame();
  }

  startButton.addEventListener("click", function () {
    startGame();
  });

  function startGame() {
    game.start();
    localStorage.setItem("gameStarted", "true"); // Mark game as started before!

    let instructions = document.querySelector(".instructions-bins");
    instructions.style.display = "none"; //removing from game screen
    let scoreCard = document.querySelector(".score-container");
    scoreCard.style.display = "block"; //is display:none in the beginning
    document.getElementById("message").innerHTML =
      "Use the arrow keys on your keyboard!";

    if (!keydownListenerAdded) {
      window.addEventListener("keydown", handleKeydown); //adding now after game.start()
      keydownListenerAdded = true;
    }
  }

  restartButton.addEventListener("click", function () {
    restartGame();
  });

  winRestartButton.addEventListener("click", function () {
    restartGame();
  });

  function restartGame() {
    location.reload();
  }

  function handleKeydown(event) {
    if (game.gameIsOver) {
      window.removeEventListener("keydown", handleKeydown); //remove once game is over
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

      switch (key) {
        case "ArrowLeft":
          if (game.trashArr[0].bin === "black") {
            game.newRound();
          } else {
            game.lostRound();
          }
          break;
        case "ArrowUp":
          if (game.trashArr[0].bin === "green") {
            game.newRound();
          } else {
            game.lostRound();
          }
          break;
        case "ArrowRight":
          if (game.trashArr[0].bin === "yellow") {
            game.newRound();
          } else {
            game.lostRound();
          }
          break;
        case "ArrowDown":
          if (game.trashArr[0].bin === "blue") {
            game.newRound();
          } else {
            game.lostRound();
          }
          break;
      }
    }
  }
};
