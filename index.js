let randomNUmber1 = Math.floor(Math.random() * 6) + 1;

let randomDiceImage = "dice" + randomNUmber1 + ".png";
let randomImageSource = "images/" + randomDiceImage;

let image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);

let randomNumber2 = Math.floor(Math.random() * 6) + 1;

let randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

if (randomNUmber1 > randomNumber2) {
  document.querySelector("h2").innerHTML = "Player 1 Wins!";
} else if (randomNumber2 > randomNUmber1) {
  document.querySelector("h2").innerHTML = "Player 2 Wins!";
} else {
  document.querySelector("h2").innerHTML = "Draw!";
}
