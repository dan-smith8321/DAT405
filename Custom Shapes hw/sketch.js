function setup() {
  console.log("Initialization: OK")
  //set canvas size
  createCanvas(400,300);
  background(0)
  frameRate(50);
  noStroke();
}

function draw() {
  customShape();
  customShape2();
  customShape3();
}

function customShape(){
  var x = 400;
  var y = 300;
  size = 50;
  rect(x, y, size, size);
  fill(100);
}

function customShape2(){
  var x2 = 400
  var y2 = 300
  size = 60
  stroke(255);
  strokeWeight(1);
  fill(218,142,68)
  ellipse(x2,y2, size, size);

  strokeWeight(5);
  ellipse(x2,y2, size/2, size/2);
}

function customShape3(){

  var x3 = 200
  var y3 = 100
  size = 60
  stroke(255);
  strokeWeight(1);
  fill(218,142,68)
  ellipse(x3,y3, size, size);

  strokeWeight(5);
  ellipse(x3,y3, size/2, size/2);
}

function keyPressed(){
  if (keyCode == 65){
    customShape();
    if (keyCode == 83){
      customShape2();
      if (keyCode ==51){
        customShape3();
      }
  }
   }
    if (keyCode== 32){
      rect(windowWidth/2, windowHeight/2, 50,50);
      fill(235,244, 65);
      stop();
    }

  }
