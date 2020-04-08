

var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6

var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png

var randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png

var image1 = document.querySelectorAll("img")[1]; //select the attribute of dice-image1

image1.setAttribute("src", randomImageSource);

///FOR DICE_IMAGE2/////

var randomNumber2=Math.floor(Math.random()*6)+1;
var randomDiceImage2 = "dice"+randomNumber2+ ".png";
var randomeImageSource2 = "images/"+randomDiceImage2;
var image2 = document.querySelectorAll("img")[2];
image2.setAttribute("src",randomeImageSource2);


///If player 1 wins///
if(randomNumber1>randomNumber2){

  document.querySelector("h1").innerHTML="Player 1 Wins! 🚩";

  document.getElementsByClassName("refree")[0].style.color="#ecf2f9";
document.getElementsByClassName("refree")[0].style.fontSize="50px";
}

else if(randomNumber1<randomNumber2){
document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
document.getElementsByClassName("refree")[0].style.color="#ecf2f9";
document.getElementsByClassName("refree")[0].style.fontSize="50px";
}

else{
    document.querySelector("h1").innerHTML="Draw!! ✨";
    document.getElementsByClassName("refree")[0].style.color="#ecf2f9";
  document.getElementsByClassName("refree")[0].style.fontSize="50px";
}
