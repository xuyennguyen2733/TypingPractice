"use strict";

KeysInit();
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
