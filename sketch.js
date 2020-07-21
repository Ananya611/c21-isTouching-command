var rect1
var rect2
var rect3
var rect4




function setup() {
  createCanvas(800,400);

  rect1 = createSprite(400, 200, 50, 50);
rect1.shapeColor = "red"

  rect2 = createSprite(350,200,50,50);
rect2.shapeColor = "red"

rect3 = createSprite(200,100,60,60)
rect3.shapeColor = "red"

rect4 = createSprite(200,350,50,50)
rect4.shapeColor = "red"
}

function draw() {
  background("black");

  rect2.x = mouseX
  rect2.y = mouseY

 
  if (isTouching(rect3,rect2)){
    rect2.shapeColor = "cyan"
    rect3.shapeColor = "cyan"

  }
else{
  rect2.shapeColor = "red"
  rect3.shapeColor = "red"

}



  drawSprites();
}



