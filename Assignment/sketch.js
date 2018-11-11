var cnv;
var song;
var img;


function centerCanvas() {
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
}

function setup() {
  cnv = createCanvas(400, 300);
  canvas.style = "border: 8px solid grey";
  centerCanvas();
  background(160,119,168);
  var song = loadSound ("SpyroTheme.mp3");
}

function mousePressed()
{
 song.play();
}


function windowResized() {
  centerCanvas();
}

function draw() {
textSize(30);
text('DAT405!', 150,40);






}
