"use strict";

const roman = [..."`1234567890-=qwertyuiop[]asdfghjkl;'zxcvbnm,./ "];
const bopomofo = [..."`ㄅㄉˇˋㄓˊ˙ㄚㄞㄢㄦ=ㄆㄊㄍㄐㄔㄗㄧㄛㄟㄣ【】ㄇㄋㄎㄑㄕㄘㄨㄜㄠㄤ「ㄈㄌㄏㄒㄖㄙㄩㄝㄡㄥ "];
const bopomofoToRoman = new Map();
const romanToRoman = new Map();
const romanToBopomofo = new Map();
const keyClassMap = new Map();

roman.forEach((element, index) => {
  bopomofoToRoman.set(bopomofo[index], element);
  romanToBopomofo.set(element, bopomofo[index]);
  romanToRoman.set(element, element);
  if (element >= "a" && element <= "z") {
    romanToRoman.set(element.toUpperCase(), element.toUpperCase());
  }
  keyClassMap.set(element, index);
});

// const str = [..."12345 67890 1234567 12345 678901qaz 2wsx 3edc 4rfv".toLowerCase()];
// let newStr = "";
// for (let i = 0; i < str.length; i++) {
//   let found = false;
//   for (let [key, value] of bopomofoMap.entries()) {
//     if (value === str[i]) {
//       newStr += key;
//       found = true;
//       break;
//     }
//   }
//   if (!found) console.log(str[i]);
// }
// console.log(newStr);
function CreateKeyElement(i, r) {
  const romanText = document.createElement("div");
  romanText.textContent = roman[i].toUpperCase();
  const bopomofoText = document.createElement("div");
  if (bopomofo[i] !== "`" && bopomofo[i] !== "=") bopomofoText.textContent = bopomofo[i];

  const key = document.createElement("div");
  key.appendChild(romanText);
  key.appendChild(bopomofoText);
  key.classList.add(`key-${i}`, "neutral");

  const row = keyboard.querySelector(`.row-${r}`);
  row.appendChild(key);
}

function HightlightCurrentKey(key) {
  if (key) {
    const classNumber = keyClassMap.get(key.toLowerCase());
    const keyEl = document.querySelector(`.key-${classNumber}`);
    keyEl.classList.add("current");
  }
}

function UnHightlightCurrentKey(key) {
  if (key) {
    const classNumber = keyClassMap.get(key.toLowerCase());
    const keyEl = document.querySelector(`.key-${classNumber}`);
    keyEl.classList.remove("current");
  }
}
