class Game {
  constructor(trashArr) {
    this.startScreen = document.querySelector("#game-start");
    this.gameScreen = document.querySelector("#game-play");
    this.gameEndLostScreen = document.querySelector("#game-end-lost");
    this.gameEndWinScreen = document.querySelector("#game-end-won");
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
      document.getElementById("show-score").innerHTML++;
      document.getElementById("message").innerHTML = "HELL YEAH!";
      this.wonGame();
    } else if (this.score === 9) {
      this.score++;
      document.getElementById("show-score").innerHTML++;
      document.getElementById("message").innerHTML = "Next level: HARD MODE!";
      this.trashArr.splice(this.trashArr[0], 1); //updating my trashArr, moving to next Obj
      this.trashImg.src = this.trashArr[0].img;
      //UPDATE BACKGROUND IMAGE HERE
      document.getElementById("game-play").style.backgroundImage =
        "url('/the-trash-separator/images/game-screen-background-level10plus.png')";
    } else {
      this.score++;
      document.getElementById("show-score").innerHTML++;
      document.getElementById("message").innerHTML = "Yeah, onto the next one!";
      this.trashArr.splice(this.trashArr[0], 1); //updating my trashArr, moving to next Obj
      this.trashImg.src = this.trashArr[0].img; // loading the next img
    }
  }

  lostRound() {
    this.lives--;
    document.getElementById("show-lives").innerHTML--;
    if (this.lives > 0) {
      document.getElementById("message").innerHTML = "Try again!";
      console.log("Try again - Use your Joker!");
    } else {
      this.lostGame();
    }
  }

  lostGame() {
    this.gameIsOver = true;
    this.gameScreen.style.display = "none";
    this.gameEndLostScreen.style.display = "block";
    document.getElementById("message").innerHTML = "Noooo!";
    // attach p loser text into class congrats:
    let loserParagraph = document.querySelector(".loser");
    loserParagraph.innerHTML = `You lose! The ${this.trashArr[0].name} belongs in the ${this.trashArr[0].bin} bin!`;
  }

  wonGame() {
    this.gameIsOver = true;
    this.gameScreen.style.display = "none";
    this.gameEndWinScreen.style.display = "block";
    // somehow the restart button will not work if you won the game. Instead make a social share button?
    console.log(`YOU WIN OMG!!!!!!!`);
    console.log("YOUR SCORE IS", this.score);
  }
}
