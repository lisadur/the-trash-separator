# The Trash Separator - German edition

[Click to play](http://github.com)

## Description

The Trash Separator is an educational game in which the player has to dispose tricky everyday items and separate them into the correct trash bins, according to German regulations (2023). For every correctly separated item, the player receives a point. The game ends when an item is added to the wrong trash bin – When this happens, the player will be educated about how to dispose it correctly and can restart the game to test their knowledge!

## MVP

- Trash objects (inside an array) are randomly shuffled at the beginning, then the first one is displayed to the player
- Players separate the trash items by allocating them to the four trash bins by hitting the correct arrow key on their keyboards:
  - By pressing up, the trash item is allocated to the green trash bin
  - By pressing right, the trash item is allocated to the yellow trash bin
  - By pressing down, the trash item is allocated to the blue trash bin
  - By pressing left, the trash item is allocated to the black trash bin
- When the trash item is allocated correctly, the user receives a trash point (score goes up), and the next item is shown
- Players have 2 lives only - so one "joker"
- If for the first time, an item is placed in the wrong bin, users lose one life and get a message to try again
- If for a second time, an item is placed in the wrong bin, the game is over - and users will receive a message about where they should have placed that trash item correctly. Also, they can restart the game by pressing a restart button.
- Info box in the start screen: How to play, information on waste bins
- Score and trash joker (extra life) are tracked locally
- The maximum score is 15 - if all 15 items were allocated correctly, the game is over and users receive a message congratulating them for being Germany's trash master

## Backlog

- In the start screen: Choose if you have a green or brown trash bin in your region, trash bin shown in the game changes accordingly
- Animation when the correct trash bin is chosen (e.g. GIF: trash bin opens and closes)
- Adding more objects to make the game longer

## Data structure

- index.js
- game.js
- trash.js

## States

- Start Screen
- Game Screen
- Game Over Screen

## Task

_List of tasks in order of priority_

## Links

- [Trello Link](https://trello.com)
- [Slides Link](http://slides.com)
- [Github repository Link](http://github.com)
- [Deployment Link](http://github.com)
