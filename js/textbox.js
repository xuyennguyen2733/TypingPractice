"use strict";

const textbox = document.querySelector(".textbox");
const currentStyle = "color: black; font-weight: bold; text-decoration: underline;";
const incorrectStyle = "color: red; font-weight: bold; text-decoration: underline;";
const correctStyle = "color: green;";
let currentChar, currentIndex, textboxEls, currentLessonIndex, textArr;

function textboxInit(firstLesson = 0) {
  textbox.innerHTML = "";
  currentLessonIndex = firstLesson;
  textArr = lessons[currentLessonIndex];
  currentIndex = 0;
  currentChar = currentMap.get(textArr[currentIndex]);

  textArr.forEach((char) => {
    const charEl = document.createElement("span");
    charEl.textContent = char;
    textbox.appendChild(charEl);
  });
  textboxEls = textbox.children;
  textboxEls[currentIndex].setAttribute("style", currentStyle);
}
function NextCharacter(isCorrect) {
  if (isCorrect) {
    console.log(textboxEls);
    textboxEls[currentIndex].setAttribute("style", correctStyle);
    UnHightlightCurrentKey(currentChar);
    if (currentIndex < textArr.length) currentIndex++;
    if (currentIndex < textArr.length) {
      currentChar = currentMap.get(textArr[currentIndex]);
      textboxEls[currentIndex].setAttribute("style", currentStyle);
    } else {
      currentLessonIndex++;
      if (currentLessonIndex < lessons.length) {
        textboxInit(currentLessonIndex);
      } else {
        currentChar = null;
      }
    }
  } else {
    textboxEls[currentIndex].setAttribute("style", incorrectStyle);
  }
}
