var counter =0
var timeleft = 120;

function convertSeconds(s) {
 var min = floor(s/ 60);
 var sec = s % 60;
 return nf(min, 2) + ':' + nf(sec, 2);
}


function setup(){
noCanvas();

 var timer = select('#timer');
 timer.html(convertSeconds(timeleft-counter));

 function timeIT() {
  counter++;
  timer.html(convertSeconds(timeleft-counter))
}
 setInterval(timeIT, 1000);


 }
