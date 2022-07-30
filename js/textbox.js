"use strict";

const textbox = document.querySelector(".textbox");
const currentStyle = "";
const incorrectStyle = "";
const correctStyle = "";
const finishMessageStyle = "";
const titleStyle = "";
let currentChar, currentIndex, textboxEls, textArr;

function textboxInit(level = 0, custom = false, customText) {
  finishedMessage.classList.add("hidden");
  currentLessonIndex = level;
  isCustomed = custom;
  if (isCustomed) {
    customText = customText.replaceAll("\n", " ");
    textArr = [...customText];

    title.textContent = `Custom Practice`;
  } else {
    title.textContent = `Level ${currentLessonIndex + 1}`;
    switch (currentLessonIndex) {
      case 5:
      case 11:
      case 16:
      case 23:
      case 24:
      case 25:
      case 26:
        textArr = lessons[currentLessonIndex]();
        break;
      default:
        textArr = lessons[currentLessonIndex];
    }
  }
  for (let i = 0; i < textArr.length; i += 25) {
    if (textArr[i] === " ") textArr.splice(i, 1);
  }
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
  if (currentIndex < textArr.length) {
    if (isCorrect) {
      textboxEls[currentIndex].classList.add("correct-text");
      textboxEls[currentIndex].classList.remove("incorrect-text");
      textboxEls[currentIndex].classList.remove("current-text");
      UnHightlightCurrentKey(currentChar);
      currentIndex++;
      if (
        currentIndex % 25 === 24 &&
        mapObj.currentMap.get(textArr[currentIndex]) === " "
      ) {
        currentIndex++;
      }
      if (currentIndex < textArr.length) {
        currentChar = mapObj.currentMap.get(textArr[currentIndex]);
        textboxEls[currentIndex].classList.add("current-text");
        textboxEls[currentIndex].classList.remove("correct-text");
        textboxEls[currentIndex].classList.remove("incorrect-text");
        HightlightCurrentKey(currentChar);
      } else {
        document.removeEventListener("keypress", StartTiming);
        UnHightlightCurrentKey(currentChar);

        finishedMessage.classList.remove("hidden");

        if (!isCustomed) {
          finishedMessage.querySelector(".message").textContent = `Level ${
            currentLessonIndex + 1
          } Finished! Press 'Enter' to proceed to the next level.`;
          document.addEventListener("keypress", ToNextLessonOnEnter);
        } else {
          finishedMessage.querySelector(".message").textContent =
            "Finished! Click 'Again' to try again, or click 'Previous Level' to get back to Level 1.";
        }
        StopTiming();
      }
    } else {
      textboxEls[currentIndex].classList.add("incorrect-text");
      textboxEls[currentIndex].classList.remove("current-text");
      textboxEls[currentIndex].classList.remove("correct-text");
    }
  }
}
