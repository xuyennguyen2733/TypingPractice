"use strict";

// window.onload = function () {
let hours = 0;
let minutes = 0;
let seconds = 0;
let appendSeconds = document.getElementById("seconds");
let appendMinutes = document.getElementById("minutes");
let appendHours = document.getElementById("hours");
let Interval;
document.addEventListener("keypress", StartTiming);
function StartTiming() {
  document.removeEventListener("keypress", StartTiming);
  clearInterval(Interval);
  Interval = setInterval(startTimer, 1000);
}

function StopTiming() {
  clearInterval(Interval);
}

function ResetTimer() {
  document.addEventListener("keypress", StartTiming);
  clearInterval(Interval);
  seconds = 0;
  minutes = 0;
  hours = 0;
  appendHours.innerHTML = "00";
  appendMinutes.innerHTML = "00";
  appendSeconds.innerHTML = "00";
}

function startTimer() {
  seconds++;
  if (seconds <= 9) {
    appendSeconds.innerHTML = "0" + seconds;
  } else if (seconds <= 59) {
    appendSeconds.innerHTML = seconds;
  } else {
    appendSeconds.innerHTML = "00";
    seconds = 0;
    minutes++;
  }
  if (minutes <= 9) {
    appendMinutes.innerHTML = "0" + minutes;
  } else if (minutes <= 59) {
    appendMinutes.innerHTML = minutes;
  } else {
    appendMinutes.innerHTML = "00";
    minutes = 0;
    hours++;
  }
  if (hours <= 9) {
    appendHours.innerHTML = "0" + hours;
  } else {
    appendHours.innerHTML = hours;
  }
}
// };
