var numTiles = 6;
var allColors = [];
var winningColor;
var headline = document.getElementById("winning-color");
var tiles = document.querySelectorAll(".tile");
var tileBoard = document.querySelector(".tile-board");
var reset = document.querySelector("#reset").addEventListener("click", newGame);

tileBoard.addEventListener("click", function(e){
  if(e.target.classList[1] === "loser"){
    console.log("loser clicked")
    e.target.classList.add("hide-tile");
  } else {
    console.log("winner");
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
  for(var i = 0; i < 6; i++){
    allColors.push(randomColor());
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
  return Math.floor(Math.random()*(numTiles))
}

function addClassToTiles(){
  for(var i = 0; i < tiles.length; i++){
    if(i === winningColor){
      tiles[i].classList.add("winner");
    } else {
      tiles[i].classList.add("loser");
    }
  }
}

function newGame(){
  winningColor = selectWinningColor();
  allColors = [];
  resetWinnerClass();
  generateColorArray();
  generateTiles();
  addClassToTiles();
  headline.innerText = allColors[winningColor];
  // tiles[winningColor].classList.add("winner");
}

newGame();
