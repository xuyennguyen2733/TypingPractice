"use strict";

const textbox = document.querySelector(".textbox");
const currentStyle = "";
const incorrectStyle = "";
const correctStyle = "";
const finishMessageStyle = "";
const titleStyle = "";
let currentChar, currentIndex, textboxEls, textArr;

function textboxInit(level = 0, custom = false, customText) {
  currentLessonIndex = level;
  isCustomed = custom;
  if (isCustomed) {
    customText = customText.replaceAll("\n", " ");
    console.log(customText);
    textArr = [...customText];

    title.textContent = `Custom Practice`;
  } else {
    title.textContent = `Level ${currentLessonIndex + 1}`;
    textArr = lessons[currentLessonIndex];
  }
  for (let i = 0; i < textArr.length; i += 25) {
    if (textArr[i] === " ") textArr.splice(i, 1);
  }
  title.classList.remove("finished-title");
  title.classList.add("level-title");
  currentIndex = 0;
  currentChar = mapObj.currentMap.get(textArr[currentIndex]);

  textbox.innerHTML = "";

  textArr.forEach((char, index) => {
    const charEl = document.createElement("span");
    charEl.textContent = char;
    textbox.appendChild(charEl);
  });
  if (mapObj.isBopomofo) {
    textbox.classList.add("text-bopomofo");
    textbox.classList.remove("text-roman");
  } else {
    textbox.classList.remove("text-bopomofo");
    textbox.classList.add("text-roman");
  }
  textboxEls = textbox.children;
  textboxEls[currentIndex].classList.add("current-text");
  textboxEls[currentIndex].classList.remove("correct-text");
  textboxEls[currentIndex].classList.remove("incorrect-text");
  HightlightCurrentKey(currentChar);
}
function NextCharacter(isCorrect) {
  if (isCorrect) {
    textboxEls[currentIndex].classList.add("correct-text");
    textboxEls[currentIndex].classList.remove("incorrect-text");
    textboxEls[currentIndex].classList.remove("current-text");
    UnHightlightCurrentKey(currentChar);
    if (currentIndex < textArr.length) {
      currentIndex++;
      if (currentIndex % 25 === 24 && mapObj.currentMap.get(textArr[currentIndex]) === " ") {
        currentIndex++;
      }
    }
    if (currentIndex < textArr.length) {
      currentChar = mapObj.currentMap.get(textArr[currentIndex]);
      textboxEls[currentIndex].classList.add("current-text");
      textboxEls[currentIndex].classList.remove("correct-text");
      textboxEls[currentIndex].classList.remove("incorrect-text");
      HightlightCurrentKey(currentChar);
    } else {
      currentLessonIndex++;
      if (!isCustomed && currentLessonIndex < lessons.length) {
        UnHightlightCurrentKey(currentChar);
        textboxInit(currentLessonIndex);
      } else {
        title.textContent =
          "Finished! Click 'Again' try again, 'Previous Level' to get back to the previous lesson, or 'Customize Text' to Create a new custom lesson.";
        title.classList.remove("level-title");
        title.classList.add("finished-title");
      }
    }
  } else {
    textboxEls[currentIndex].classList.add("incorrect-text");
    textboxEls[currentIndex].classList.remove("current-text");
    textboxEls[currentIndex].classList.remove("correct-text");
  }
}
