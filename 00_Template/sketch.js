//https://github.com/stavrosdidakis/DAT-GAD-405_2017
//https://p5js.org

//DAT405 / GAD405
//00_Template
//The purpose of this sketch is to provide a basic template
//for P5.js projects
var img;
//Initialization function
function preload()
{
  // load image
  img = loadImage("Spyro.jpg");
}
function setup() {
  console.log("Initialization: OK")
  //set canvas size
  createCanvas(635,300);
}

// Load the image
//Print a message to the console - to view using Chrome:
  //View > Developer > Developer Tools > Console
  console.log("Initialization: OK")

//Rendering function
function draw() {
  background(255, 25, 90);
  // Displays the image at its actual size at point (0,0)
  image(img, 0, 0);
  // Displays the image at point (0, height/2) at half size

  //Set a background color

//Print a message to the console - to view using Chrome:
  //View > Developer > Developer Tools > Console
  console.log("Rendering...")
  noLoop();
}
