"use strict";

const textbox = document.querySelector(".textbox");
const currentStyle = "color: black; font-weight: bold; font-size: 110%;border-bottom: solid 3px; width: 3.7rem";
// const spaceStyle = "width: 3rem";
const incorrectStyle = "color: red; font-weight: bold; font-size: 110%; border-bottom: solid 3px; width: 3.7rem";
const correctStyle = "color: green;";
const finishMessageStyle = "text-align: center;color: green; font-size: 2rem; margin: 2rem";
const titleStyle = "padding-top: 4rem; padding-bottom: 4rem; font-family: sans-serif; font-weight: 900; color: rgb(112, 55, 64); font-size: 5rem;";
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
  title.setAttribute("style", titleStyle);
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
  textboxEls = textbox.children;
  textboxEls[currentIndex].setAttribute("style", currentStyle);
  HightlightCurrentKey(currentChar);
}
function NextCharacter(isCorrect) {
  if (isCorrect) {
    textboxEls[currentIndex].setAttribute("style", correctStyle);
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
      textboxEls[currentIndex].setAttribute("style", currentStyle);
      HightlightCurrentKey(currentChar);
    } else {
      currentLessonIndex++;
      if (!isCustomed && currentLessonIndex < lessons.length) {
        UnHightlightCurrentKey(currentChar);
        textboxInit(currentLessonIndex);
      } else {
        title.textContent = "Finished! Click 'Again' to return to the first lesson or 'Customize Text' to Create a Custom Lesson.";
        title.setAttribute("style", finishMessageStyle);

        mapObj.currentMap = bopomofoMap;
        mapObj.mode = "bopomofo-mode";
      }
    }
  } else {
    textboxEls[currentIndex].setAttribute("style", incorrectStyle);
  }
}
