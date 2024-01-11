class Game {
  constructor(trashArr) {
    this.startScreen = document.querySelector("#game-start");
    this.gameScreen = document.querySelector("#game-play");
    this.gameEndLostScreen = document.querySelector("#game-end-lost");
    this.gameEndWinScreen = document.querySelector("#game-end-won");
    this.currentTrashIndex = 0;
    this.height = 500;
    this.width = 500;
    this.trashArr = trashArr;
    this.placeHolder = document.createElement("div");
    this.placeHolder.style.width = "128px";
    this.placeHolder.style.height = "128px";
    this.gameScreen.appendChild(this.placeHolder);
    this.trashImg = document.createElement("img");
    this.trashImg.style.width = "155px";
    this.gameScreen.appendChild(this.trashImg);
    this.hintsCircle = document.createElement("img");
    this.hintsCircle.src = "/the-trash-separator/images/hints-circle.gif";
    this.gameScreen.appendChild(this.hintsCircle);
    this.hintsCircle.style.display = "none"; //do not show hint at the beginning
    this.placeHolder.style.display = "none"; //do not show placeHolder for flexbox at the beginning
    this.score = 0;
    this.lives = 3;
    this.originalTrashArrLength = trashArr.length; //storing the original length
    this.gameIsOver = false;
    this.trashAudio = document.getElementById("trash-sound");
    this.failAudio = document.getElementById("fail-sound");
    this.loseAudio = document.getElementById("lose-sound");
    this.winAudio = document.getElementById("win-sound");
  }

  start() {
    this.gameScreen.style.height = `${this.height}px`;
    this.gameScreen.style.width = `${this.width}px`;
    this.gameScreen.style.display = "flex";
    this.gameScreen.style.flexDirection = "row"; //change when needed
    this.gameScreen.style.justifyContent = "center"; //change when needed
    this.gameScreen.style.alignItems = "center";
    this.startScreen.style.display = "none";
    this.gameShuffle();
    this.trashImg.src = this.trashArr[this.currentTrashIndex].img;
  }

  gameShuffle() {
    for (let i = this.trashArr.length - 1; i > 0; i--) {
      // we don't ever want i to reach index 0 so that we ensure the last element is not swapping with itself
      const j = Math.floor(Math.random() * (i + 1)); // generate a random number between 0 and i (inclusive)
      const temp = this.trashArr[i]; // store the temporary value of where we are in loop
      this.trashArr[i] = this.trashArr[j]; // here we swap the current value for a random position
      this.trashArr[j] = temp; //This line then assigns the original value of this.trashArr[i] (which was stored in the temp variable in step 4) to the element at index j. This completes the swap, ensuring that the elements are shuffled within the array.
    }
  }

  newRound() {
    this.gameScreen.style.justifyContent = "center";
    this.hintsCircle.style.display = "none";
    this.placeHolder.style.display = "none";
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
      this.trashAudio.play();
      //UPDATE BACKGROUND IMAGE HERE
      document.getElementById("game-play").style.backgroundImage =
        "url('/the-trash-separator/game-screen-background-level10plus.png')";
    } else {
      this.score++;
      document.getElementById("show-score").innerHTML++;
      document.getElementById("message").innerHTML = "Yeah, onto the next one!";
      this.trashArr.splice(this.trashArr[0], 1); //updating my trashArr, moving to next Obj
      this.trashImg.src = this.trashArr[0].img; // loading the next img
      this.trashAudio.play();
    }
  }

  lostRound() {
    this.lives--;
    document.getElementById("show-lives").innerHTML--;
    if (this.lives > 0) {
      document.getElementById("message").innerHTML = "Try again! Use the hint.";
      this.failAudio.play();
      this.hintsCircle.style.display = "block"; //display hint
      this.placeHolder.style.display = "block"; //display placeHolder
      this.gameScreen.style.justifyContent = "space-between";

      if (this.trashArr[0].bin === "green") {
        this.gameScreen.style.flexDirection = "column-reverse"; //change when needed
      } else if (this.trashArr[0].bin === "yellow") {
        this.gameScreen.style.flexDirection = "row"; //change when needed
      } else if (this.trashArr[0].bin === "black") {
        //TEST
        this.placeHolder.style.display = "block";
        this.gameScreen.style.flexDirection = "row-reverse"; //change when needed;
      } else {
        this.gameScreen.style.flexDirection = "column"; //change when needed;
      }
    } else {
      this.lostGame();
    }
  }

  lostGame() {
    this.gameIsOver = true;
    this.gameScreen.style.display = "none";
    this.gameEndLostScreen.style.display = "block";
    this.loseAudio.play();
    document.getElementById("message").innerHTML = "Noooo!";
    // attach p loser text into class congrats:
    let loserParagraph = document.querySelector(".loser");
    loserParagraph.innerHTML = `You lose! The ${this.trashArr[0].name} belongs in the ${this.trashArr[0].bin} bin!`;
  }

  wonGame() {
    this.gameIsOver = true;
    this.gameScreen.style.display = "none";
    this.gameEndWinScreen.style.display = "block";
    this.winAudio.play();
  }
}
