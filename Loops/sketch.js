let size = 50;

//Initialization function
function setup(){
  console.log("Initialization: ok")
  createCanvas(500,500);
  draw();
}

function draw() {
  background(78,56,41);
  fill(215,200,170);
  for(let y=0; y< 500; y++){
    for(let x = 0; x < 500;x++){
      rect(x*size,y*size, size, size);
      rect(x, height/2 - size/2, size,size);
      rect(x, height-Size, size, size);
    }
  }
//Print a message to the console - to view using Chrome:
//View > Developer > Developer Tools > Console
  console.log("Rendering...")
}
