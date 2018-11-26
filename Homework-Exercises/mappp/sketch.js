function setup(){
  createCanvas(windowWidth, windowHeight);


}

function draw(){
  background(0);
var x = map(mouseX, 0 , windowWidth, 0, 255)
var y = map(mouseY, 0 , windowHeight, 0,255)
var x2 = map(mouseX, 0 , windowWidth, 255, 0)
var y2 = map(mouseY, 0, windowHeight, 255, 0)
fill(255,0,0,x)
rect(0, 0, windowWidth/2,windowHeight/2)
fill(0,255,0,y)
rect(0, windowHeight/2 , windowWidth/2, windowHeight/2)
fill(0,0,255,x2)
rect(windowWidth/2, 0 , windowWidth/2, windowHeight/2,)
fill(255,255,0,y2)
rect(windowWidth/2,windowHeight/2,  windowWidth/2, windowHeight/2)
}
