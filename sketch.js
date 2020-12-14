var fixedRect, movingRect;

var runner
var finishLine

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  runner = createSprite(100, 200, 20, 100);
  runner.shapeColor = "red"
  finishLine = createSprite(1100, 400, 5, 800)
  finishLine.shapeColor = "white"
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect, fixedRect)){
    movingRect.shapeColor = "red"
    fixedRect.shapeColor = "red"
  }
  else{
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
  }

  if(keyDown("right_arrow")){
    runner.velocityX = 3
  }

  if(keyDown("left_arrow")){
    runner.velocityX = -3
  }
 
  if(isTouching(runner, finishLine)){
    runner.shapeColor = "green"
    textSize(25);
    text("You Won!", 600, 400);
  }
  else{
    runner.shapeColor = "red"
  }
  drawSprites();
}



