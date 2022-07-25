"use strict";

const roman = [..."`1234567890-=qwertyuiop[]asdfghjkl;'zxcvbnm,./ "];
const bopomofo = [..."`ㄅㄉˇˋㄓˊ˙ㄚㄞㄢㄦ=ㄆㄊㄍㄐㄔㄗㄧㄛㄟㄣ【】ㄇㄋㄎㄑㄕㄘㄨㄜㄠㄤ「ㄈㄌㄏㄒㄖㄙㄩㄝㄡㄥ "];
const bopomofoMap = new Map();
const romanMap = new Map();
const keyClassMap = new Map();

roman.forEach((element, index) => {
  bopomofoMap.set(bopomofo[index], element);
  romanMap.set(element, element);
  keyClassMap.set(element, index);
});

function CreateKeyElement(i, r) {
  const romanText = document.createElement("div");
  romanText.textContent = roman[i].toUpperCase();
  const bopomofoText = document.createElement("div");
  bopomofoText.textContent = bopomofo[i];

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
