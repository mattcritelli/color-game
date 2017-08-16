var numTiles = 6;
var allColors = [];
var winningColor;
var headline = document.getElementById("rgb-color-display");
var tiles = document.querySelectorAll(".tile");
var tileBoard = document.querySelector(".tile-board");
var message = document.querySelector("#message");
var h1 = document.querySelector("h1");
var easy = document.querySelector("#easy");
var hard = document.querySelector("#hard");
var reset = document.querySelector("#reset")

reset.addEventListener("click", function(){
  newGame();
});

easy.addEventListener("click", function(){
  numTiles = 3;
  hard.classList.remove("selected")
  easy.classList.add("selected")
  newGame();
})

hard.addEventListener("click", function(){
  easy.classList.remove("selected")
  hard.classList.add("selected")
  numTiles = 6;
  newGame();
})

tileBoard.addEventListener("click", function(e){
  if(e.target.classList[0] === "tile"){
    if(e.target.classList[1] !== "winner"){
      e.target.classList.add("animated");
      e.target.classList.add("fadeOut");
      message.classList.remove("invisible");
      message.innerText = "TRY AGAIN."
    } else {
      message.innerText = "CORRECT!"
      reset.innerText = "PLAY AGAIN?"
      endGameColorChange();
    }
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

function resetGameSettings(){
  for(var i = 0; i < tiles.length; i++){
    tiles[i].classList.remove("winner");
    tiles[i].classList.remove("animated");
    tiles[i].classList.remove("fadeOut");
  }
  message.classList.add("invisible");
  h1.style.backgroundColor = "#587cb5";
  reset.innerText = "NEW COLORS"
}

function selectWinningColor(){
  return Math.floor(Math.random()*numTiles)
}

function addClassToTiles(){
  for(var i = 0; i < tiles.length; i++){
    if(i === winningColor){
      tiles[i].classList.add("winner");
    }
  }
}

function endGameColorChange(){
  for(i = 0; i < numTiles; i++){
    tiles[i].classList.remove("animated");
    tiles[i].classList.remove("fadeOut");
    tiles[i].style.backgroundColor = allColors[winningColor];
    h1.style.backgroundColor = allColors[winningColor];
  }
}

function newGame(){
  winningColor = selectWinningColor();
  generateColorArray();
  resetGameSettings();
  generateTiles();
  addClassToTiles();
  headline.innerText = allColors[winningColor];
}

newGame();
