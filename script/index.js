var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6

var randomDice = "dice" + randomNumber1 + ".png"; //dice1-6.png

var randomImageSource = "images/" + randomDice; //combining as source

var image1 = document.querySelectorAll("img")[0]; //

image1.setAttribute("src", randomImageSource);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDice2 = "dice" + randomNumber2 + ".png";

var randomImageSource2 = "images/" + randomDice2;

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomImageSource2);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 Wins!"
}
else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 2 Wins!"
}
else if (randomNumber1 === randomNumber2) {
  document.querySelector("h1").innerHTML = "Draw!"
}

function refresh(){
        window.location.reload("Refresh");
      }
