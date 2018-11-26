function setup() {
  console.log("Initialization: OK")
  //set canvas size
  createCanvas(400,300);
  background(0)
  frameRate(50);
  noStroke();
}

function draw() {
  if(keyPressed){
  customShape();
  }
  customShape2();
  customShape3();
}

function customShape(){
stroke(255);
strokeWeight(5);
 ellipse(300,100, 20,20 );
 fill(66,235,244)
 strokeWeight(3);
 ellipse(300,100,25,25);
}

function customShape2(){
  stroke(255);
  strokeWeight(5);
  rect(350,150,40,40)
  fill(105)
  strokeWeight(3);
  rect(350,150,40,40)
}

function customShape3(){
  stroke(255);
  strokeWeight(5);
  triangle(30, 75, 58, 20, 80, 75);
  fill(66,83,244)
  strokeWeight(3);
  triangle(30,75,58,20,80,75);
}

function keyPressed(){
  if (key== "a"){
    customShape1();
    if (keyCode == 83){
      customShape2();
      if (keyCode ==51){
        customShape3();
      }
  }
   }
    }
