var fixedRect, movingRect, rect1;

function setup() {
  createCanvas(1200, 800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800, 80, 30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  rect1 = createSprite(400, 400, 70, 40);
  rect1.shapeColor = "green";
  rect1.debug = true;

  movingRect.velocityY = -5;
  // fixedRect.velocityY = +5;
  rect1.velocityY = +5;

}

function draw() {
  background(0, 0, 0);
  

  
  bounceOff(movingRect, rect1);

  drawSprites();
}

