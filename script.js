window.onload = function () {
  
  var tens = 00;
  var seconds = 00;
  var minutes = 00;
  var hours = 00;
  
  var appendTens = document.getElementById("tens")
  var appendSeconds = document.getElementById("seconds")
  var appendMinutes = document.getElementById("minutes")
  var appendHours = document.getElementById("hours")
  
  var buttonStart = document.getElementById('button-start');
  var buttonPause = document.getElementById('button-pause');
  var buttonReset = document.getElementById('button-reset');


  var Interval;
  
  buttonStart.onclick = function () {
      
    clearInterval(Interval);
    Interval = setInterval(startTimer, 10);
  }
    
  buttonPause.onclick = function () {
    clearInterval(Interval);
        
  }

  buttonReset.onclick = function () {
    clearInterval(Interval);
    tens = "00";
    seconds = "00";
    minutes = "00";
    hours = "00";
    appendTens.innerHTML = tens;
    appendSeconds.innerHTML = seconds;
    appendMinutes.innerHTML = minutes;
    appendHours.innerHTML = hours;
  }
  
  function startTimer() {
    tens++;
      
    (tens <= 9) ? appendTens.innerHTML = "0" + tens : appendTens.innerHTML = tens
      
    if (tens > 99) {
      seconds++;
      appendSeconds.innerHTML = "0" + seconds;
      tens = 0;
      appendTens.innerHTML = "0" + 0;
    }
      
    if (seconds > 9) {
      appendSeconds.innerHTML = seconds;
    }

    if (seconds > 59) {
      minutes++
      appendMinutes.innerHTML = minutes;
      seconds = 0
      appendSeconds.innerHTML = "0" + seconds;
      seconds + 1
    }

    if (minutes > 00 && minutes <= 9) {
      appendMinutes.innerHTML = "0" + minutes;
    } 

    if (minutes > 59) {
      hours++
      appendHours.innerHTML = "0" + hours;
      minutes = 00
      appendMinutes.innerHTML = "0" + minutes;
      seconds = 00
    }
  }
}
