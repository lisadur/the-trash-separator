window.onload = function () {
  const startButton = document.getElementById("start-button");
  const restartButton = document.getElementById("restart-button");
  const winRestartButton = document.getElementById("win-restart-button");
  const game = new Game(trash); //actually "calling" the Game class
  let keydownListenerAdded = false; //storing if arrow key functionality was added
  const arrowImages = document.querySelectorAll(
    "#arrow-down, #arrow-up, #arrow-right, #arrow-left"
  );

  const gameStarted = localStorage.getItem("gameStarted") === "true"; //check if the game was already started
  if (gameStarted) {
    startGame();
  }

  startButton.addEventListener("click", function () {
    startGame();
  });

  function startGame() {
    game.start();
    localStorage.setItem("gameStarted", "true"); // Mark the game as started

    let instructions = document.querySelector(".instructions-bins");
    instructions.style.display = "none"; //removing from the game screen
    let scoreCard = document.querySelector(".score-container");
    scoreCard.style.display = "block"; //is display:none in the beginning
    document.getElementById("message").innerHTML =
      "Use the arrow keys on your keyboard!";

    if (!keydownListenerAdded) {
      window.addEventListener("keydown", handleKeydown); //adding now after game.start()
      keydownListenerAdded = true;
    }

    // Add event listeners directly to each arrow image
    document
      .getElementById("arrow-down")
      .addEventListener("click", function () {
        handleArrowClick("down");
      });
    document.getElementById("arrow-up").addEventListener("click", function () {
      handleArrowClick("up");
    });
    document
      .getElementById("arrow-right")
      .addEventListener("click", function () {
        handleArrowClick("right");
      });
    document
      .getElementById("arrow-left")
      .addEventListener("click", function () {
        handleArrowClick("left");
      });
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
      window.removeEventListener("keydown", handleKeydown); //remove once the game is over
      return;
    }

    const key = event.key;
    if (key.startsWith("Arrow")) {
      // Check if the key starts with "Arrow"
      const direction = key.substring(5).toLowerCase(); // Extract direction from the key
      handleInput(direction);
      event.preventDefault(); // Prevent default behavior for arrow keys
    }
  }

  function handleArrowClick(direction) {
    handleInput(direction);
  }

  function handleInput(direction) {
    switch (direction) {
      case "left":
        if (game.trashArr[0].bin === "black") {
          game.newRound();
        } else {
          game.lostRound();
        }
        break;
      case "up":
        if (game.trashArr[0].bin === "green") {
          game.newRound();
        } else {
          game.lostRound();
        }
        break;
      case "right":
        if (game.trashArr[0].bin === "yellow") {
          game.newRound();
        } else {
          game.lostRound();
        }
        break;
      case "down":
        if (game.trashArr[0].bin === "blue") {
          game.newRound();
        } else {
          game.lostRound();
        }
        break;
    }
  }
};
