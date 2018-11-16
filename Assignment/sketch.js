var cnv;
var song;
var x,y;
let img = [];
var i = 0;
var currentTime;
var gif;


function centerCanvas() {
  x = (windowWidth - width) / 2;
  y = (windowHeight - height) / 2;
  cnv.position(x, y);
}

function setup() {
  cnv = createCanvas(400, 300);
  canvas.style = "border: 8px solid purple";
  centerCanvas();
  background(160,119,168);
  song = loadSound ("SpyroTheme.mp3");
  img[0] = loadImage("images/spyro1.jpg");
  img[1] = loadImage("images/spyro2.jpg");
  img[2] = loadImage("images/spyro3.jpg");
  textFont('Digital-7')
  gif = createImg("https://orig00.deviantart.net/c613/f/2015/194/1/8/tumblr_inline_np3mmmvbtd1qd6uv7_500_by_assortedjellies-d917zr8.gif")


}

function mousePressed() {
  song.play();
}
function windowResized() {
  centerCanvas();
}

function draw() {
image(img[i], 0, 0, 400, 300 );
textSize(70)
fill(225);
stroke(0)
strokeWeight(5);
text(currentTime,60,160);
gif.position(720,430)
gif.size(150,100)
for(var b=0; b<height+50; b+=100){
for(var a=0; a<width+50; a+=100){
  fill(79, 4, 60)
  ellipse(a,height-1,20,20)
  ellipse(a,1,20,20)
  ellipse(1,b,20,20)
  ellipse(width-1,b,20,20)

}
}
}

function keyPressed(){
  if  (key == "1")

      i = i+1
      if (i>2)i=0;
  if  (key =="2")
  song.stop();


}
function showTime() {
var time = new Date();
var hr =  time.getHours();
var min = time.getMinutes();
var sec = time.getSeconds();
var am_pm = "AM";

if(hr > 12)
{

    hr == 12;
    am_pm = "PM";
}
if (hr == 0)
{
   hr = 12;
}

hr = (hr<10) ? "0"+hr : hr;
min = (min<10) ? "0"+ min: min;
sec = (sec<10) ? "0"+ sec : sec;



currentTime = hr + ":" + min + ":" + sec + " " + am_pm;
setTimeout(showTime , 1000);
}
showTime();
