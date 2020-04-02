var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  obj1 = createSprite(100,100,50,50);
  obj2 = createSprite(200,100,50,50);
  obj3 = createSprite(300,100,50,50);
obj4 = createSprite(400,100,50,50);
obj1.shapeColor = "blue";
obj2 .shapeColor = "purple";
obj3.shapeColor = "white";
obj4.shapeColor = "pink";

}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
if(isTouching(movingRect,obj1)){
  movingRect.shapeColor = "red";
  obj1.shapeColor = "red";
}
else{
  movingRect.shapeColor = "green";
  obj1.shapeColor = "blue";
}

  
  drawSprites();
}
function isTouching(object1,object2){
  if (object1.x - object2.x < object1.width/2 + object2.width/2
  && object2.x - object1.x < object2.width/2 + object1.width/2
  && object1.y - object2.y < object1.height/2 + object2.height/2
  && object2.y - object1.y < object2.height/2 + object1.height/2) {
return true;
}
else {
return false;
}


}
