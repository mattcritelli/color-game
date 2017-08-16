var numTiles = 6;
var allColors = [];
var winningColor = selectWinningColor();
var headline = document.getElementById("rgb-color-display");
var tiles = document.querySelectorAll(".tile");
var tileBoard = document.querySelector(".tile-board");
var message = document.querySelector("#message");
var h1 = document.querySelector("h1");
var reset = document.querySelector("#reset").addEventListener("click", function(){
  winningColor = selectWinningColor();
  newGame();
});
var easy = document.querySelector("#easy").addEventListener("click", function(){
  numTiles = 3;
  newGame();
})
var hard = document.querySelector("#hard").addEventListener("click", function(){
  numTiles = 6;
  newGame();
})

tileBoard.addEventListener("click", function(e){
  if(e.target.classList[1] !== "winner"){
    e.target.classList.add("invisible");
    message.classList.add("show");
    message.innerText = "Try Again."
  } else {
    message.innerText = "Correct!"
    endGameColorChange();
  }
})

function randomColor(){
  var colors = [];
  for(var i = 0; i < 3; i++){
    colors[i] = Math.floor(Math.random()*256);
  }
  return "rgb(" + colors[0] +', ' + colors[1] + ', ' + colors[2] +")"
}

function generateColorArray(){
  allColors = [];
  for(var i = 0; i < 6; i++){
    if(i < numTiles){
      allColors.push(randomColor());
    } else {
      allColors.push("rgb(35, 35, 35)");
    }
  }
}

function generateTiles(){
  for(var i = 0; i < tiles.length; i++){
    tiles[i].style.backgroundColor = allColors[i];
  }
}

function resetWinnerClass(){
  for(var i = 0; i < tiles.length; i++){
    tiles[i].classList.remove("winner");
  }
}

function selectWinningColor(){
  return Math.floor(Math.random()*numTiles)
}

function addClassToTiles(){
  for(var i = 0; i < tiles.length; i++){
    if(i === winningColor){
      tiles[i].classList.add("winner")
    }
  }
}

function endGameColorChange(){
  for(i = 0; i < numTiles; i++){
    tiles[i].classList.remove("invisible");
    tiles[i].style.backgroundColor = allColors[winningColor];
    h1.style.backgroundColor = allColors[winningColor];
  }
}

function newGame(){
  h1.style.backgroundColor = "#232323";
  generateColorArray();
  generateTiles();
  resetWinnerClass();
  addClassToTiles();
  headline.innerText = allColors[winningColor];
}

newGame();
