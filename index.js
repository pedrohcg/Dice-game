function winner(dice1, dice2){
  if(dice1 > dice2){
    document.querySelector("h1").innerText = "🚩 Player 1 Wins!";
  }
  else if(dice2 > dice1){
    document.querySelector("h1").innerText = "Player 2 Wins! 🚩";
  }
  else{
    document.querySelector("h1").innerText = "Draw!";
  }
}


var dice1 = Math.floor((6 * Math.random())) + 1;
document.querySelector("img.img1").src = "images/dice" + dice1 + ".png";

var dice2 = Math.floor((6 * Math.random())) + 1;
document.querySelector("img.img2").src = "images/dice" + dice2 + ".png";

winner(dice1, dice2);
