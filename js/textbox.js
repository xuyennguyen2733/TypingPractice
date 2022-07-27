"use strict";

const textbox = document.querySelector(".textbox");
const currentStyle = "";
// const spaceStyle = "width: 3rem";
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
    // textArr = lessons[4];
  }
  for (let i = 0; i < textArr.length; i += 25) {
    if (textArr[i] === " ") textArr.splice(i, 1);
  }
  title.classList.remove("finished-title");
  title.classList.add("level-title");
  currentIndex = 0;
  currentChar = mapObj.currentMap.get(textArr[currentIndex]);

  textbox.innerHTML = "";
  // let charCount = 0;
  // let tempTextArr = [];

  textArr.forEach((char, index) => {
    // if (char !== " " || charCount % 25 !== 0) {
    // tempTextArr += char;
    // charCount++;
    const charEl = document.createElement("span");
    charEl.textContent = char;
    textbox.appendChild(charEl);
    // }
    // else {
    //   textArr.replaceAt(index, '');
    // }
  });
  // textArr = tempTextArr;
  if (mapObj.isBopomofo) {
    textbox.classList.add("text-bopomofo");
    textbox.classList.remove("text-roman");
    // currentStyle = "color: black; font-weight: bold; font-size: 110%;border-bottom: solid 3px; width: 3.7rem; text-align: center;";
    // incorrectStyle = "color: red; font-weight: bold; font-size: 110%; border-bottom: solid 3px; width: 3.7rem; text-align: center;";
    // correctStyle = "color: green; width = 3.7rem; text-align-center";
  } else {
    textbox.classList.remove("text-bopomofo");
    textbox.classList.add("text-roman");
    // currentStyle = "color: black; font-weight: bold; font-size: 110%;border-bottom: solid 3px; width: 2rem; text-align-center";
    // incorrectStyle = "color: red; font-weight: bold; font-size: 110%; border-bottom: solid 3px; width: 2rem; text-align-center";
    // correctStyle = "color: green; width = 2rem";
  }
  textboxEls = textbox.children;
  textboxEls[currentIndex].classList.add("current-text");
  textboxEls[currentIndex].classList.remove("correct-text");
  textboxEls[currentIndex].classList.remove("incorrect-text");
  HightlightCurrentKey(currentChar);
}
function NextCharacter(isCorrect) {
  if (isCorrect) {
    // textboxEls[currentIndex].setAttribute("style", correctStyle);
    textboxEls[currentIndex].classList.add("correct-text");
    textboxEls[currentIndex].classList.remove("incorrect-text");
    textboxEls[currentIndex].classList.remove("current-text");
    UnHightlightCurrentKey(currentChar);
    // if (currentIndex < textArr.length) currentIndex++;
    if (currentIndex < textArr.length) {
      currentIndex++;
      if (currentIndex % 25 === 24 && mapObj.currentMap.get(textArr[currentIndex]) === " ") {
        currentIndex++;
      }
    }
    if (currentIndex < textArr.length) {
      currentChar = mapObj.currentMap.get(textArr[currentIndex]);
      // textboxEls[currentIndex].setAttribute("style", currentStyle);
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
        // title.setAttribute("style", finishMessageStyle);

        // mapObj.currentMap = bopomofoMap;
        // mapObj.isBopomofo = true;
      }
    }
  } else {
    // textboxEls[currentIndex].setAttribute("style", incorrectStyle);
    textboxEls[currentIndex].classList.add("incorrect-text");
    textboxEls[currentIndex].classList.remove("current-text");
    textboxEls[currentIndex].classList.remove("correct-text");
  }
}
