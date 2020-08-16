var rect1,rect2;

function setup() {
  createCanvas(800,400);
  rect1 = createSprite(400, 200, 50, 60);
  rect2 = createSprite(400,200,50,60);
  rect1.velocityX = 2;
  rect1.velocityY = 2;
  rect2.velocityX = -2;
  rect2.velocityY = -2;
  


}

function draw() {
  background("black");



  rect1.shapeColor = "red";
  rect2.shapeColor = "yellow";
  
  if (rect1.x-rect2.x<rect1.width/2+rect2.width/2 && rect2.x-rect1.x<rect1.width/2+rect1.width/2 && rect1.y-rect2.y<rect1.height/2+rect2.height/2 && rect2.y-rect1.y<rect1.height/2+rect1.height/2){
    rect1.shapeColor = "green";
    rect2.shapeColor = "green";
  }

  if (rect1.x-rect2.x<rect1.width/2+rect2.width/2 && rect2.x-rect1.x<rect1.width/2+rect1.width/2 && rect1.y-rect2.y<rect1.height/2+rect2.height/2 && rect2.y-rect1.y<rect1.height/2+rect1.height/2) {
      rect1.velocityX = rect2.velocityX*(-1);
      rect2.velocityX = rect1.velocityX*(-1);

  }
  drawSprites();
}