/**
 * The program makes rock paper scissors
 *
 *
 * By: Peter Gemmell
 * Version: 1.0
 * Since:   2022-09-17
 */

import promptSync from "prompt-sync";
  const prompt = promptSync();
  console.log("Game of rock paper scissors against a robot");
  const gameString = prompt(
    "(Rock = 1, Paper = 2, Scissor = 3) Please pick number from 1-3 :  "
  );
  const rock = 1
  const paper = 2
  const scissor = 3
try {
  const game = parseFloat(gameString);
  if (isNaN(game)) {
    throw new Error("not a number");
  }
  if (game <= 0) {
    throw new Error("negative number");
  }
  if (game > 3) {
    throw new Error("Number Higher than 3");
  }
  // set min & max
  const min = 1;
  const max = 3;
  // use random npm install --save random
  const randomNum = Math.floor(Math.random() * max) + min;
  const robot = randomNum;

  if (robot === game) {
    console.log("It was a tie!");
  } else if (
    (robot === paper && game === rock) ||
    (robot === scissor && game === paper) ||
    (robot === rock && game === scissor)
  ) {
    console.log("A.I wins!");
  } else {
    console.log("You win!");
  }
} catch (e) {
  console.log("Not an acceptable input");
}

console.log("\nDone.");
