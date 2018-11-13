function setup(){
  createCanvas(windowWidth, windowHeight);
  background(255);

}

function draw(){
var x = map(mouseX, 0 , windowWidth, 0, 255)
var y = map(mouseX, 0 , windowHeight, 0,255)
var x2= map(mouseX, 0 , windowWidth, 255, 0)
var y2 = map(mouseX, 0, windowHeight, 0, 255)
rect(0, 0, windowWidth/2,windowHeight/2)
fill(x,x,x)
rect(0, windowHeight/2 , windowWidth/2, windowHeight/2)
fill(y,y,y)
rect(windowWidth/2, 0 , windowWidth/2, windowHeight/2,)
fill(x,x2,y)
rect(windowWidth/2,windowHeight/2,  windowWidth/2, windowHeight/2)
fill(y2,y, x , x2)
}
