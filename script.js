var numTiles = 6;
var allColors = [];
var winningColor;
var headline = document.getElementById("rgb-color-display");
var tiles = document.querySelectorAll(".tile");
var tileBoard = document.querySelector(".tile-board");
var message = document.querySelector("#message");
var h1 = document.querySelector("h1");
var difficulty = document.getElementsByClassName("difficulty");
var reset = document.querySelector("#reset");

/*
* Add click event listener to difficulty HTML elements.
* When difficulty is clicked, the selected class is removed from both elements
* and added to clicked item.
*
* If text content of clicked item is EASY, then numTiles variable is set to 3
* Otherwise, difficulty is HARD and numTiles is set to 6.
*/
for(var i = 0; i < difficulty.length; i++){
  difficulty[i].addEventListener("click", function(){
    difficulty[0].classList.remove("selected");
    difficulty[1].classList.remove("selected");
    this.classList.add("selected");
    this.textContent === "EASY" ? numTiles = 3 : numTiles = 6;
    newGame();
  })
}

/*
* Click event listener on reset button calls newGame function
*/
reset.addEventListener("click", function(){
  newGame();
});

/*
* Adds click event listener to tile board. Confirms click is specifically
* on a tile and not space between tiles.
* If incorrect, the tile will fade out and be removed.
* If correct, change message and reset text. Call endGameColorChange function.
*/
tileBoard.addEventListener("click", function(e){
  if(e.target.classList[0] === "tile"){
    if(e.target.classList[1] !== "winner"){
      e.target.classList.add("animated", "fadeOut");
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

/*
* Generates a random color for each tile.
*/
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

/*
* Assigns each color in the allColors array to each tile
*/
function generateTiles(){
  for(var i = 0; i < tiles.length; i++){
    tiles[i].style.backgroundColor = allColors[i];
  }
}

/*
* Removes all css gameplay classes and resets heading-display color.
*/
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

/*
* Generates random number between 0 and numTiles. This tile will be the
* winning tile.
*/
function selectWinningColor(){
  return Math.floor(Math.random()*numTiles)
}

/*
* Adds winner class to the appropriate tile. Winner class
*/
function addClassToTiles(){
  for(var i = 0; i < tiles.length; i++){
    if(i === winningColor){
      tiles[i].classList.add("winner");
    }
  }
}

/*
* When winning tile is clicked, display all tiles and change colors to winning
* color. Change heading-display background to winning color.
*/
function endGameColorChange(){
  for(i = 0; i < numTiles; i++){
    tiles[i].classList.remove("animated", "fadeOut");
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
