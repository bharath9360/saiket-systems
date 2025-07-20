"use strict";
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let currentScore = 10;

function dispMessage(message) {
  document.querySelector(".message").textContent = message;
}
document.querySelector(".check").addEventListener("click", function () {
  // this will happen in each click
  const guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    dispMessage("Please enter a number!");
  } else if (guess === secretNumber) {
    dispMessage("Correct Guess! 🎉");
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".highscore").textContent = Math.max(
      Number(document.querySelector(".highscore").textContent),
      currentScore
    );
  } else {
    guess > secretNumber
      ? dispMessage("📈 Too High!")
      : dispMessage("📉 Too Low!");
    document.querySelector(".score").textContent = --currentScore;
  }
  if (Number(currentScore) === 0) {
    dispMessage("💥 Game Over!..Press Play Again");
    currentScore = 11;
    document.querySelector("body").style.backgroundColor = "#bb1919";
  }
});

document.querySelector(".again").addEventListener("click", function () {
  // this will happen in each click
  dispMessage("Start guessing...");
  currentScore = 10;
  document.querySelector(".score").textContent = currentScore;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".number").textContent = "?";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".guess").value = "";
});
const btnModal = document.querySelector(".show-modal");
const closeModal = document.querySelector(".close-modal");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

const removeHiddenLayer = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
const addHiddenLayer = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};
btnModal.addEventListener("click", removeHiddenLayer);
closeModal.addEventListener("click", addHiddenLayer);
overlay.addEventListener("click", addHiddenLayer);
