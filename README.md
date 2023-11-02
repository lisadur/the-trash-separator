# The Trash Separator - German edition

[Click to play](https://lisadur.github.io/the-trash-separator/)

## Description

The Trash Separator is an educational game in which the player has to dispose tricky everyday items and separate them into the correct trash bins, according to German regulations. For every correctly separated item, the player's score increases. The player has 3 lives - When the lives are used up, the game is lost. BUT: The player will be educated about how to dispose the item correctly and can restart the game!

## MVP

- Trash objects (inside an array) are randomly shuffled at the beginning, then the first one is displayed to the player
- Players separate the trash items by allocating them to the four trash bins by hitting the correct arrow key on their keyboards:
  - By pressing up, the trash item is allocated to the green trash bin (organic waste)
  - By pressing right, the trash item is allocated to the yellow trash bin (plastics / packaging)
  - By pressing down, the trash item is allocated to the blue trash bin (paper / cardboard)
  - By pressing left, the trash item is allocated to the black trash bin (residual waste)
- When the trash item is allocated correctly, the player's score increases, and the next item is shown
- Players have 3 lives
- If an item is placed in the wrong bin, players lose one life and get a message to try again, as well as a hint on which trash bin to choose
- If all lives are used up, the game is over - and players will receive a message about where they should have placed their last trash item correctly. Also, they can restart the game by pressing a restart button.
- Info box in the start screen: How to play, information on waste bins
- Score and lives are tracked locally
- At Score 10, the game goes into "hard mode" - the descriptions are removed from the trash bins
- The maximum score is 15 - if all 15 items were allocated correctly, the game is over and users receive a message congratulating them for being Germany's trash master

## Backlog

- In the start screen: Choose if you have a green or brown trash bin in your region, trash bin shown in the game changes accordingly
- Adding the trash bins as separate images to the game screen to allow manipulating them, e.g. level super hard: move positions of trash bins and change arrow keys accordingly
- Short animation when the correct trash bin is chosen (e.g. GIF: trash bin opens and closes)
- Adding more objects to make the game longer
- Personalized info at the end (when losing) about why last item is placed in that bin

## Data structure

- script.js
  - startGame();
  - restartGame();
  - handleKeydown();
- game.js
  - Game {}
    - constructor();
      - this.startScreen;
      - this.gameScreen;
      - this.gameEndLostScreen;
      - this.gameEndWinScreen;
      - this.currentTrashIndex;
      - this.height;
      - this.width;
      - this.trashArr;
      - this.placeHolder;
      - this.trashImg;
      - this.hintsCircle;
      - this.score;
      - this.lives;
      - this.originalTrashArrLength;
      - this.gameIsOver;
      - this.trashAudio;
      - this.failAudio;
      - this.loseAudio;
      - this.winAudio;
    - start();
    - gameShuffle();
    - newRound();
    - lostRound();
    - lostGame();
    - wonGame();
- trash.js
  - trash [{}];

## States

- Start Screen
- Game Screen
- Game Over Screen: Winning
- Game Over Screen: Losing

## Links

- [Trello Link](https://trello.com/b/BZtx731b/project-the-trash-separator)
- [Slides Link](https://docs.google.com/presentation/d/1usc2Vq_osVqzSkqu9MFdPV4W6kLMnrwa5BM6Wp5dupo/edit?usp=sharing)
- [Github repository Link](https://github.com/lisadur/the-trash-separator)
- [Deployment Link](https://lisadur.github.io/the-trash-separator/)
