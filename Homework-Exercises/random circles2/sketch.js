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
}

function customShape(){
  var x = random(400)
  var y = random(300)
  size = random(60)
  stroke(255)
  strokeWeight(1);
  fill(218,142,68)
  ellipse(x,y, size, size);

  strokeWeight(5);
  ellipse(x,y, size/2, size/2);
}

//for just ellipse; put the code under custom shape back under variables
//fill(random(255), random(255), random(255));
//ellipse(x,y, size, size); take size 2 out.
