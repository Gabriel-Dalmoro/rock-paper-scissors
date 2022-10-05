import cfonts from "cfonts";
import * as graphics from "./graphics.js";

export const declareComputerWinner = () =>
  cfonts.say("The winner is the computer", {
    colors: ["red"],
    font: "console",
  });
export const declarePlayerWinner = (name) =>
  cfonts.say(`The winner is ${name}!`, { colors: ["green"], font: "console" });
export const interact = console.log;

const objOfGraphicCombos = {
  Rock: graphics.rockGraphic,
  Paper: graphics.paperGraphic,
  Scissors: graphics.scissorsGraphic,
};

export function logRoundGraphics(playerChoice, computerRandomChoice) {
  interact(`${objOfGraphicCombos[playerChoice]} 
      VS
      ${objOfGraphicCombos[computerRandomChoice]}`);
}

export function bothScores(playerScore, computerScore, name) {
  interact(`
  ${name}'s total score = ${playerScore}.
  The computer's total score = ${computerScore}.
  `);
}
