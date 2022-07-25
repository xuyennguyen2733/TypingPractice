"use strict";

document.addEventListener("keydown", keydownFeedback);
document.addEventListener("keyup", keyupFeedback);

const body = document.querySelector("body");
const keyboard = body.querySelector(".keyboard");
const prevBtn = body.querySelector(".btn-previous");
const nextBtn = body.querySelector(".btn-next");
const againBtn = body.querySelector(".btn-again");
const customizeBtn = body.querySelector(".btn-customize");
const cancelBtn = body.querySelector(".btn-cancel");
const saveBtn = body.querySelector(".btn-save");
const overlay = body.querySelector(".overlay");
const title = body.querySelector(".level-title");
const customContainer = body.querySelector(".custom-container");
const customInput = body.querySelector(".custom-container .custom-text");
const bopomofoBtn = document.querySelector("#bopomofo-mode");
const romanBtn = document.querySelector("#roman-mode");

prevBtn.addEventListener("click", ToPreviousLesson);
nextBtn.addEventListener("click", ToNextLesson);
againBtn.addEventListener("click", ResetLesson);
customizeBtn.addEventListener("click", SetCustomText);
// customContainer.addEventListener("click", CancelCustomText);
cancelBtn.addEventListener("click", CancelCustomText);
saveBtn.addEventListener("click", SaveCustomText);
overlay.addEventListener("click", CancelCustomText);
bopomofoBtn.addEventListener("click", SetPracticeMode);
romanBtn.addEventListener("click", SetPracticeMode);

bopomofoBtn.checked = true;

let currentMap = bopomofoMap;
let currentLessonIndex;
let isCustomed;

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
    const key = keyboard.querySelector(`.key-${keyClassMap.get(e.key.toLowerCase())}`);
    console.log(e.key, currentChar);
    if (e.key === currentChar) {
      key.classList.add("correct");
      NextCharacter(true);
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

function ToPreviousLesson(e) {
  e.preventDefault();
  if (currentLessonIndex - 1 >= 0 && currentLessonIndex < lessons.length) {
    UnHightlightCurrentKey(currentChar);
    textboxInit(currentLessonIndex - 1);
  }
  this.blur();
}
function ToNextLesson(e) {
  e.preventDefault();
  if (currentLessonIndex + 1 < lessons.length && currentLessonIndex >= 0) {
    UnHightlightCurrentKey(currentChar);
    textboxInit(currentLessonIndex + 1);
  }
  this.blur();
}
function ResetLesson(e) {
  e.preventDefault();
  if (isNaN(currentLessonIndex) || currentLessonIndex < 0 || currentLessonIndex >= lessons.length) currentLessonIndex = 0;
  UnHightlightCurrentKey(currentChar);
  textboxInit(currentLessonIndex);
  this.blur();
}
function SetCustomText(e) {
  e.preventDefault();
  customContainer.classList.remove("hidden");
  overlay.classList.remove("hidden");
  document.removeEventListener("keydown", keydownFeedback);
  document.removeEventListener("keyup", keyupFeedback);
}

function CancelCustomText() {
  customContainer.classList.add("hidden");
  overlay.classList.add("hidden");
  document.addEventListener("keydown", keydownFeedback);
  document.addEventListener("keyup", keyupFeedback);
  customInput.value = "";
  bopomofoBtn.checked = true;
}

function SaveCustomText() {
  const tempTextArr = [...customInput.value];
  if (currentMap.get(tempTextArr[0])) {
    UnHightlightCurrentKey(currentChar);
    textboxInit("custom", true, customInput.value);
    CancelCustomText();
  } else {
    customInput.value = "";
    customInput.placeholder = "Errors mapping keys. Check the practice mode.";
    // throw "Error mapping keys. Check the practice mode again";
  }
}

function SetPracticeMode() {
  if (this.value === "bopomofo-mode") {
    currentMap = bopomofoMap;
  } else {
    currentMap = romanMap;
  }
}
