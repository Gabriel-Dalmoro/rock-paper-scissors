import rl from "readline-sync";
export const arrNumOfGames = [1, 3, 5, 7];
const arrChoices = ["Rock", "Paper", "Scissors"];
export const makeRandomComputerChoice = () =>
  arrChoices[Math.floor(Math.random() * 3)];
export const getPlayerChoice = () =>
  arrChoices[rl.keyInSelect(arrChoices, "choose")];
