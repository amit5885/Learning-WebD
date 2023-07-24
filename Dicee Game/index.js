var randomNumber1 = Math.floor(Math.random() * 6) + 1; //random number generation from 1-6;
var randomDiceImg = "./images/dice" + randomNumber1 + ".png"; //making string
var image1 = document.querySelector(".img1");
image1.setAttribute("src", randomDiceImg);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomDiceImg2 = "./images/dice" + randomNumber2 + ".png";
var image2 = document.querySelector(".img2");
image2.setAttribute("src", randomDiceImg2);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player1 Wins!😎";
} else if (randomNumber1 === randomNumber2) {
  document.querySelector("h1").innerHTML = "Draw! 😲";
} else {
  document.querySelector("h1").innerHTML = "Player2 Wins!😎";
}
