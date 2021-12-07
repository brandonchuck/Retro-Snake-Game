// Canvas
let canvas;
let canvasContext;

let gameOver = false;
// 1. Draw board
// 2. Draw Grid

// apple object with coordinates
let apple = {
  posX: null,
  posY: null,
}

// snake object with its properties
let snake = {
  posX: null,
  posY: null,
  speedX: null,
  speedY: null,
  direction: null,
  snakeLength: 1
}


window.onload = function () {
  canvas = document.getElementById("canvas");
  canvasContext = canvas.getContext("2d");

  // Initial snake position and speed
  snake.posX = canvas.width / 2;
  snake.posY = canvas.height / 2;
  snake.speedX = 20;
  snake.speedY = 0;
  snake.direction = "right";

  let framesPerSecond = 10;

  window.addEventListener("keydown", moveSnake);

  // generate random apple coordinates
  generateApple();

  setInterval(() => {
    drawBoard();
    drawSnake();
    moveEverything();
  }, 1000 / framesPerSecond);
};

function drawBoard() {
  drawRect(0, 0, canvas.width, canvas.height, "black");

  for (let i = 0; i <= canvas.width; i += 20) {
    canvasContext.strokeStyle = "white";
    canvasContext.beginPath();
    canvasContext.moveTo(i, 0);
    canvasContext.lineTo(i, canvas.height);
    canvasContext.stroke();
  }

  for (let i = 0; i <= canvas.height; i += 20) {
    canvasContext.strokeStyle = "white";
    canvasContext.beginPath();
    canvasContext.moveTo(0, i);
    canvasContext.lineTo(canvas.width, i);
    canvasContext.stroke();
  }
}

function drawRect(leftX, topY, width, height, color) {
  canvasContext.fillStyle = color;
  canvasContext.fillRect(leftX, topY, width, height);
}

function drawSnake() {
  if (snake.snakeLength === 1){
    canvasContext.fillStyle = "red";
    canvasContext.fillRect(snake.posX, snake.posY, 20, 20);
  } 
  // If body part then draw green square -- incomplete logic
  else {
    canvasContext.fillStyle = "green";
  }
  
}

// update x and y positions
function moveEverything(){
  // also need to check if snake head is same position as the apple
  if (snake.posY >= canvas.height || snake.posY <= 0) {
    alert("game over!");
    resetSnake();
    gameOver = true;
    return;
  }

  if (snake.posX >= canvas.width || snake.posX <= 0) {
    alert("game over!");
    resetSnake();
    gameOver = true;
    return;
  }

  // update snake position
  snake.posX += snake.speedX;
  snake.posY += snake.speedY;
}

// Snake movement
function moveSnake(e) {

  // UP -- prevents movement in opposite directions
  if (e.keyCode == 38 && snake.direction !== "down") {
    snake.speedX = 0;
    snake.speedY = -20;
    snake.direction = "up";
    console.log("Current Direction: " + snake.direction);
  }

  // DOWN
  else if (e.keyCode == 40 && snake.direction !== "up") {
    snake.speedX = 0;
    snake.speedY = 20;
    snake.direction = "down";
    console.log("Current Direction: " + snake.direction);
  }
  
  // RIGHT
  else if (e.keyCode === 39 && snake.direction !== "left") {
    snake.speedX = 20;
    snake.speedY = 0;
    snake.direction = "right";
    console.log("Current Direction: " + snake.direction);
  }

  // LEFT
  else if (e.keyCode === 37 && snake.direction !== "right") {
    snake.speedX = -20;
    snake.speedY = 0;
    snake.direction = "left";
    console.log("Current Direction: " + snake.direction);
  }

}

function eatApple() {
  snake.snakeLength++;

  // relocate apple to random coordinate

  // increase length of snake and draw on canvas
}

function generateApple(){
  apple.posX = randomTwentyInterval();
  apple.posY = randomTwentyInterval();
}

// generates random interval of 20 between 0 and canvas width
function randomTwentyInterval(){
  // return randomInterval;
}

function resetSnake(){
  snake.posX = canvas.width / 2;
  snake.posY = canvas.height / 2;
  snake.speedX = 20;
  snake.speedY = 0;
}
