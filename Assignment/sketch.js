var cnv;
var song;
var img;
var x,y;

function centerCanvas() {
  x = (windowWidth - width) / 2;
  y = (windowHeight - height) / 2;
  cnv.position(x, y);
}

function setup() {
  cnv = createCanvas(400, 300);
  canvas.style = "border: 8px solid grey";
  centerCanvas();
  background(160,119,168);
  song = loadSound ("SpyroTheme.mp3");
  img = loadImage("images/spyro1.jpg");

}

function mousePressed() {
  song.play();
}
function windowResized() {
  centerCanvas();
}

function draw() {
image(img, 0, 0, img.width+100, img.height+140 );
textSize(30)
text('DAT405!',150,40);
fill(0)
}

function keyPressed(Space){
  if (keyPressed());
  img= loadImage("spyro2.jpg")
}
