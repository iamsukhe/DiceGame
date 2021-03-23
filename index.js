
var randomnumber1 = Math.floor(Math.random() * 6) + 1;

var randomDiceimage = "dice" + randomnumber1 + ".png";
var randomDiceSource = "images/" + randomDiceimage;

document.querySelector(".img1").setAttribute("src", randomDiceSource);


var randomnumber2 = Math.floor(Math.random() * 6) + 1;

var randomDiceimage2 = "dice" + randomnumber2 + ".png";
var randomDiceSource2 = "images/" + randomDiceimage2;

document.querySelector(".img2").setAttribute("src", randomDiceSource2);




if (randomnumber1 > randomnumber2) {
    document.querySelector("h1").innerHTML ="Player 1 wins!";
}
else if (randomnumber1 < randomnumber2) {
     document.querySelector("h1").innerHTML = "Player 2 wins!";
}
else if (randomnumber1 === randomnumber2) {
    document.querySelector("h1").innerHTML = "Draw";
}