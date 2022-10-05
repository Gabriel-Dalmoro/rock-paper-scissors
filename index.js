import cfonts from "cfonts";
import rl from "readline-sync";
import {
  declareComputerWinner,
  declarePlayerWinner,
  interact,
  logRoundGraphics,
  bothScores,
} from "./helpers.js";
import {
  arrNumOfGames,
  makeRandomComputerChoice,
  getPlayerChoice,
} from "./constants.js";

//name and welcome:
interact("Welcome! Let's play ");
cfonts.say("Rock | Paper |  Scissors", { font: "tiny" });
const result = rl.question("Are you stoked to play? ");
interact("LETS GO!");
const name = rl.question("What is your name? ");
interact(`Lets see if you can beat my amazing computer...
type number keys [1], [2], [3], etc to select your choice.`);

//select number of games:
const numOfGames =
  arrNumOfGames[
    rl.keyInSelect(
      arrNumOfGames,
      `How many games do you want to play, ${name}? `
    )
  ];
interact(`You selected ${numOfGames} games.`);
let playerScore = 0;
let computerScore = 0;
for (let currentGame = 1; currentGame <= numOfGames; currentGame++) {
  interact("Now you must choose Rock, Paper or Scissors:");
  let playerChoice = getPlayerChoice();
  interact(`You chose: ${playerChoice}.`);
  let computerRandomChoice = makeRandomComputerChoice();
  interact(`The computer chose: ${computerRandomChoice}.`);

  function gameLogic(playerChoice, computerRandomChoice) {
    bothScores(playerScore, computerScore, name);
    if (playerChoice === computerRandomChoice) {
      interact("draw");
      bothScores(playerScore, computerScore, name);
    }
    if (playerChoice === "Rock") {
      if (computerRandomChoice === "Paper") {
        logRoundGraphics(playerChoice, computerRandomChoice);
        declareComputerWinner();
        computerScore++;
        bothScores(playerScore, computerScore, name);
      }
      if (computerRandomChoice === "Scissors") {
        logRoundGraphics(playerChoice, computerRandomChoice);
        declarePlayerWinner(name);
        playerScore++;
        bothScores(playerScore, computerScore, name);
      }
    }
    if (playerChoice === "Paper") {
      if (computerRandomChoice === "Rock") {
        logRoundGraphics(playerChoice, computerRandomChoice);
        declarePlayerWinner(name);
        playerScore++;
        bothScores(playerScore, computerScore, name);
      }
      if (computerRandomChoice === "Scissors") {
        logRoundGraphics(playerChoice, computerRandomChoice);
        declareComputerWinner();
        computerScore++;
        bothScores(playerScore, computerScore, name);
      }
    }
    if (playerChoice === "Scissors") {
      if (computerRandomChoice === "Rock") {
        logRoundGraphics(playerChoice, computerRandomChoice);
        declareComputerWinner();
        computerScore++;
        bothScores(playerScore, computerScore, name);
      }
      if (computerRandomChoice === "Paper") {
        logRoundGraphics(playerChoice, computerRandomChoice);
        declarePlayerWinner(name);
        playerScore++;
        bothScores(playerScore, computerScore, name);
      }
    }
  }
  gameLogic(playerChoice, computerRandomChoice);
}
