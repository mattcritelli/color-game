var allColors = [];
var winningColor = selectWinningColor();
var tiles = document.querySelectorAll(".tile");
var reset = document.querySelector("#reset").addEventListener("click", newGame);


function randomColor(){
  var colors = [];
  for(var i = 0; i < 3; i++){
    colors[i] = Math.floor(Math.random()*256);
  }
  return "rgb(" + colors[0] +', ' + colors[1] + ', ' + colors[2] +")"
}

function generateTiles(){
  for(var i = 0; i < 6; i++){
    allColors.push(randomColor());
  }
}

function selectWinningColor(){
  return Math.floor(Math.random()*7)
}

function newGame(){
  allColors = [];
  generateTiles();
  for(var i = 0; i < tiles.length; i++){
    tiles[i].style.background = allColors[i];
  }
}

newGame();
