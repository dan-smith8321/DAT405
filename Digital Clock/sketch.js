function setup(){
noCanvas();
}

function showTime(){
  var date = new Date();
  var h = date.getHours(); // 0 - 23
  var m = date.getMinutes(); // 0 - 59
  var s = date.getSeconds(); // 0 - 59

  var time = h + ":" + m + ":" + s;
  document.getElementById("myclockdisplay").innerText = time;
  document.getElementById("myclockdisplay").textContent = time;
}

showTime();
