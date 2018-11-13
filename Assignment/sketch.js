var cnv;
var song;
var x,y;
let img = [];
var i = 0;

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
  img[0] = loadImage("images/spyro1.jpg");
  img[1] = loadImage("images/spyro2.jpg");
  img[2] = loadImage("images/spyro3.jpg");

}

function mousePressed() {
  song.play();
}
function windowResized() {
  centerCanvas();
}

function draw() {

image(img[i], 0, 0, 400, 300 );
textSize(30)
text('DAT405!',150,40);
fill(0)
}

function keyPressed(){
  if  (key == "1")

      i = i+1
      if (i>2)i=0;


}
