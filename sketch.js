var fixedRect,movingRect;

function setup() {
  createCanvas(800,400);
 fixedRect = createSprite(200, 200, 50, 50);
 fixedRect.shapeColor="green";
 movingRect = createSprite(400,200,80,30)
 movingRect.shapeColor="green";
 
}

function draw() {
  background("white");
  movingRect.x=mouseX;
  movingRect.y=mouseY; 
  console.log(movingRect.x-fixedRect.x) 
 //console.log(fixedRect.width/2+movingRect.width/2)

 if(movingRect.x-fixedRect.x < fixedRect.width/2 + movingRect.width/2 &&
  fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width /2)
  {
movingRect.shapeColor="blue"
fixedRect.shapeColor="blue";
  }
  else {
    movingRect.shapeColor="green"
    fixedRect.shapeColor="green"

  }
 
 
 drawSprites();
}