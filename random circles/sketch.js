function setup() {
  console.log("Initialization: OK")
  //set canvas size
  createCanvas(400,300);
  background(0)
  frameRate(80);
  noStroke();
}


function draw() {
  customShape();
}

function customShape(){
  var x = random(400)
  var y = random(300)
  size = random(50)
  size2 = random(40)
  fill(random(255), random(255), random(255));
  ellipse(x,y, size, size);
  fill(random(255), random(255), random(255));
  ellipse(x,y, size2, size2);
}

//for just ellipse; put the code under custom shape back under variables
//fill(random(255), random(255), random(255));
//ellipse(x,y, size, size); take size 2 out.
