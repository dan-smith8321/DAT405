var cnv;

function centerCanvas() {
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
}

function setup() {
  cnv = createCanvas(400, 300);
  rect(405,305);
  strokeWeight(8);
  centerCanvas();
  background(160,119,168);
}




function windowResized() {
  centerCanvas();
}

function draw() {
textSize(30);
text('DAT405!', 150,40);
rect(0,400);
strokeWeight(5);

function preload() {
  soundFormats('mp3');
  mySound = loadSound('SpyroTheme.mp3');
}

function setup() {
  mySound.setVolume(0.1);
  mySound.play();
}



}
