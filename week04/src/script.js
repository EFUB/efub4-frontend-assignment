"use strict";
const choices = ["rock", "paper", "scissors"];
const btnReset = document.querySelector(".btn--reset");
const score0 = document.getElementById("score--0");
const score1 = document.getElementById("score--1");
const displayResult = document.querySelector(".displayResult");
const choice0 = document.getElementById("choice--0");
const choice1 = document.getElementById("choice--1");

let playerScore = 0;
let computerScore = 0;

const init = function () {
  score0.textContent = 0;
  score1.textContent = 0;
  choice0.classList.add("hidden");
  choice1.classList.add("hidden");
  displayResult.classList.add("hidden");
};
init();

const playGame = function (playerChoice) {
  choice0.classList.remove("hidden");
  choice0.src = `/week04/img/${playerChoice}.png`;
  setTimeout(() => {
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    let result = "게임을 시작하세요";
    if (playerChoice === computerChoice) {
      result = "무승부";
    } else {
      switch (playerChoice) {
        case "rock":
          result = computerChoice === "scissors" ? "🥳승🥳" : "😭패😭";
          break;
        case "paper":
          result = computerChoice === "rock" ? "🥳승🥳" : "😭패😭";
          break;
        case "scissors":
          result = computerChoice === "paper" ? "🥳승🥳" : "😭패😭";
          break;
      }
    }
    displayResult.textContent = result;

    choice1.classList.remove("hidden");
    displayResult.classList.remove("hidden");
    choice1.src = `/week04/img/${computerChoice}.png`;

    switch (result) {
      case "🥳승🥳":
        playerScore++;
        score0.textContent = playerScore;
        break;
      case "😭패😭":
        computerScore++;
        score1.textContent = computerScore;
        break;
    }
  }, 500);
};
