var fixedRect, movingRect;
var gameObject1, gameObject2, gameObject3, gameObject4;

function setup() {
  createCanvas(600,600);
  fixedRect = createSprite(300, 300, 50, 50);
  fixedRect.shapeColor = "orange";
 
  movingRect = createSprite(800, 400,80,30);
  movingRect.shapeColor = "lightpink";

  gameObject1 = createSprite(100, 100, 50, 50);
  gameObject1.shapeColor = "green";
  gameObject2 = createSprite(200, 100, 50, 50);
  gameObject2.shapeColor = "green";
  gameObject3 = createSprite(100, 500, 50, 50);
  gameObject3.shapeColor = "yellow";
  gameObject4 = createSprite(600, 500, 50, 50);
  gameObject4.shapeColor = "red";

  gameObject4.velocityX = -5;
  gameObject3.velocityX = +5;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  bounceOff(gameObject3,gameObject4);

  if(isTouching(movingRect, gameObject1)){
    movingRect.shapeColor = "blue";
    gameObject1.shapeColor = "blue";
  }
  else {
    movingRect.shapeColor = "lightpink";
    gameObject1.shapeColor = "green";
  }
  drawSprites();
}

