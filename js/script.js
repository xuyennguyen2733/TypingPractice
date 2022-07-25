"use strict";

document.addEventListener("keydown", keydownFeedback);
document.addEventListener("keyup", keyupFeedback);

const body = document.querySelector("body");
const keyboard = body.querySelector(".keyboard");
const currentMap = bopomofoMap;

for (let i = 0; i < 5; i++) {
  const row = document.createElement("div");
  row.classList.add(`row-${i}`);
  keyboard.appendChild(row);
}

// Create first row's keys
for (let i = 0; i < 13; i++) {
  CreateKeyElement(i, 0);
}

for (let i = 0 + 13; i < 12 + 13; i++) {
  CreateKeyElement(i, 1);
}

for (let i = 0 + 12 + 13; i < 12 + 13 + 11; i++) {
  CreateKeyElement(i, 2);
}

for (let i = 0 + 12 + 13 + 11; i < 12 + 13 + 11 + 10; i++) {
  CreateKeyElement(i, 3);
}

CreateKeyElement(46, 4);
textboxInit();

function keydownFeedback(e) {
  try {
    console.log(currentChar, e.key);
    const key = keyboard.querySelector(`.key-${keyClassMap.get(e.key.toLowerCase())}`);
    console.log(key);
    if (e.key === currentChar) {
      key.classList.add("correct");
      NextCharacter(true);
      HightlightCurrentKey(currentChar);
    } else {
      key.classList.add("incorrect");
      NextCharacter(false);
    }
  } catch {}
}

function keyupFeedback(e) {
  try {
    const key = keyboard.querySelector(`.key-${keyClassMap.get(e.key.toLowerCase())}`);
    if (key) {
      key.classList.remove("correct");
      key.classList.remove("incorrect");
      textboxEls[currentIndex].setAttribute("style", currentStyle);
    }
  } catch {}
}
