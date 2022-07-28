"use strict";

document.addEventListener("keydown", keydownFeedback);
document.addEventListener("keyup", keyupFeedback);
document.addEventListener("click", RemoveFinishedMessage);
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
const bopomofoCheckbox = document.querySelector("#bopomofo-mode");
// const romanBtn = document.querySelector("#roman-mode");
const finishedMessage = document.querySelector(".finished-message");

prevBtn.addEventListener("click", ToPreviousLesson);
nextBtn.addEventListener("click", ToNextLesson);
againBtn.addEventListener("click", ResetLesson);
customizeBtn.addEventListener("click", CustomizeButtonClicked);
// bopomofoCheckbox.addEventListener("click", SetPracticeMode);
cancelBtn.addEventListener("click", CancelCustomText);
saveBtn.addEventListener("click", SaveCustomText);
overlay.addEventListener("click", CancelCustomText);

bopomofoCheckbox.checked = true;

const mapObj = {
  currentMap: bopomofoToRoman,
  isBopomofo: true,
};
// let currentMap = ;
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
  if (e.keyCode === 32 && e.target === document.body) {
    e.preventDefault();
  }

  if (currentIndex < textArr.length) {
    const key = keyboard.querySelector(`.key-${keyClassMap.get(e.key.toLowerCase())}`);
    // console.log(e.key, currentChar);
    if (e.key === currentChar) {
      key.classList.add("correct");
      NextCharacter(true);
    } else {
      key.classList.add("incorrect");
      NextCharacter(false);
    }
  }
}

function keyupFeedback(e) {
  const key = keyboard.querySelector(`.key-${keyClassMap.get(e.key.toLowerCase())}`);
  if (key) {
    key.classList.remove("correct");
    key.classList.remove("incorrect");
    if (currentIndex < textArr.length) {
      textboxEls[currentIndex].classList.add("current-text");
    }
    textboxEls[currentIndex].classList.remove("correct-text");
    textboxEls[currentIndex].classList.remove("incorrect-text");
  }
}

function ToPreviousLesson(e) {
  e.preventDefault();
  if (isCustomed) {
    mapObj.currentMap = bopomofoToRoman;
    UnHightlightCurrentKey(currentChar);
    mapObj.isBopomofo = true;
    textboxInit(0);
    ResetTimer();
  } else if (currentLessonIndex - 1 >= 0 && currentLessonIndex < lessons.length) {
    UnHightlightCurrentKey(currentChar);
    textboxInit(currentLessonIndex - 1);
    ResetTimer();
  }
  this.blur();
}
function ToNextLesson(e) {
  e.preventDefault();
  if (currentLessonIndex + 1 < lessons.length && currentLessonIndex >= 0) {
    UnHightlightCurrentKey(currentChar);
    textboxInit(currentLessonIndex + 1);
    ResetTimer();
  }
  this.blur();
}
function ResetLesson(e) {
  e.preventDefault();

  if (isCustomed) {
    UnHightlightCurrentKey(currentChar);
    textboxInit("custom", true, textbox.textContent);
  } else {
    if (isNaN(currentLessonIndex) || currentLessonIndex < 0 || currentLessonIndex >= lessons.length) currentLessonIndex = 0;
    UnHightlightCurrentKey(currentChar);
    textboxInit(currentLessonIndex);
  }
  ResetTimer();
  this.blur();
}
function CustomizeButtonClicked(e) {
  e.preventDefault();
  StopTiming();
  customContainer.classList.remove("hidden");
  overlay.classList.remove("hidden");
  document.removeEventListener("keydown", keydownFeedback);
  document.removeEventListener("keyup", keyupFeedback);
  document.removeEventListener("keypress", StartTiming);
}

function CancelCustomText() {
  customContainer.classList.add("hidden");
  overlay.classList.add("hidden");
  document.addEventListener("keydown", keydownFeedback);
  document.addEventListener("keyup", keyupFeedback);
  document.addEventListener("keypress", StartTiming);
  customInput.placeholder = "";
  customInput.value = "";
  bopomofoCheckbox.checked = true;
}

function SaveCustomText() {
  if (customInput.value.length <= 0) {
    customInput.placeholder = "Text cannot be empty!";
  } else {
    let isValid = true;
    const tempTextArr = [...customInput.value];
    const chosenMap = bopomofoCheckbox.checked ? bopomofoToRoman : romanToRoman;
    tempTextArr.forEach((char) => {
      // console.log(mapObj.currentMap.get(char));
      if (!chosenMap.get(char)) {
        isValid = false;
      }
    });
    if (isValid) {
      SetPracticeMode();
      UnHightlightCurrentKey(currentChar);
      textboxInit("custom", true, customInput.value);
      CancelCustomText();
      ResetTimer();
    } else {
      customInput.value = "";
      customInput.placeholder = "Errors mapping keys. Check the practice mode.";
      // throw "Error mapping keys. Check the practice mode again";
    }
  }
}

function SetPracticeMode() {
  mapObj.isBopomofo = bopomofoCheckbox.checked;
  // console.log(this.value);
  if (mapObj.isBopomofo) {
    mapObj.currentMap = bopomofoToRoman;
  } else {
    mapObj.currentMap = romanToRoman;
  }
}

function RemoveFinishedMessage() {
  finishedMessage.classList.add("hidden");
}
