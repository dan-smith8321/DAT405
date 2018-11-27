function setup() {
  console.log("Initialization: OK")
  //set canvas size
  createCanvas(400,300);
  background(0)
  frameRate(50);
  noStroke();
}

function draw() {
  //console.log(key);

  //if (key == 'a' || key == 'A') customShape1();
  //if (key == 's' || key == 'S') customShape2();
  //if (key == 'd' || key == 'D') customShape3();

}

function keyPressed(){
  if (key == 'a' || key == 'A') customShape1();
  if (key == 's' || key == 'S') customShape2();
  if (key == 'd' || key == 'D') customShape3();
  if (key == 'z' || key == 'Z') background(0);

}

function customShape1(){
  stroke(255);
  strokeWeight(5);
  fill(66,235,244)
  ellipse(random(width), random(height), 20, 20);
}

function customShape2(){
  stroke(255);
  strokeWeight(5);
  fill(66,235,244);
  rect(random(width), random(height),40,40);
}

function customShape3(){
  stroke(255);
  strokeWeight(5);
  fill(66,83,244);
  triangle(random(width), random(height), 58, 20, 80, 75);
}
