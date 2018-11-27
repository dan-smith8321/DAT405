//DAT405 / GAD405
//03_NestedForLoop - Visual

let size = 50;

function setup() {
  createCanvas(500, 500);
  noLoop();
}

function draw() {
  fill(215, 200, 170);
  var x = 0;
  var x2 = width;
  var y = 0;
  var y2 = height

  //Run the nested loop for x, and y
  for (let y = 0; y < 10; y++) {
    for (let x = 0; x < 10; x++) {
      //Draw the shape at the corresponding position
      //This will generate a dynamic position for the x and y
      //The shape is redrawn as many times as the loop says (in this case 100)
      rect(size * x, size * y, size, size);
    }
  }
}


  /*function keyPressed() {
        if (key== 's')
        fill(0);
      } else {
    fill(255);
  }
  rect(0, 1, 50, 50);
}*/
