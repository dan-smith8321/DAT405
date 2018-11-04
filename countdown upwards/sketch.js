
var counter=0
function setup(){
noCanvas();

 var timer = select('#timer');
 timer.html(counter);

 function timeIT() {
  counter++;
  timer.html(counter)
}
 setInterval(timeIT, 1000);


 }
