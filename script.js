const display = document.getElementById("display");
let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;

function start() {
  if (!isRunning) {
    startTime = Date.now() - elapsedTime;
    timer = setInterval(update, 10); // this will run after 10 milisec
    isRunning = true;
  }
}

function stop() {
  if (isRunning) {
    clearInterval(timer); // clear the timer
    elapsedTime = Date.now() - startTime;
    isRunning = false;
  }
}

function reset() {
  clearInterval(timer);
  startTime = 0; // back to zero
  elapsedTime = 0;
  isRunning = false;
  display.textContent = "00:00:00:00";
}

function update() {
  elapsedTime = Date.now() - startTime;

  let hours = Math.floor(elapsedTime / (1000 * 60 * 60)); // coverts milisec to hrs
  let minutes = Math.floor((elapsedTime / (1000 * 60)) % 60); // covert milisec to mins we did mod we dont want to go beyond
  let seconds = Math.floor((elapsedTime / 1000) % 60); // if we didnt do mod then it will exceed 60
  let milliseconds = Math.floor((elapsedTime % 1000) / 10);

  console.log(hours, minutes, seconds, milliseconds);

  hours = String(hours).padStart(2, "0"); // padstart is func of string padding is applied from the start of this string.
  minutes = String(minutes).padStart(2, "0");
  seconds = String(seconds).padStart(2, "0");
  milliseconds = String(milliseconds).padStart(2, "0");

  display.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`;
}
