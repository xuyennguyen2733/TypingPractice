"use strict";
const roman = [..."`1234567890-=qwertyuiop[]asdfghjkl;'zxcvbnm,./ "];
const bopomofo = [..."`ㄅㄉˇˋㄓˊ˙ㄚㄞㄢㄦ=ㄆㄊㄍㄐㄔㄗㄧㄛㄟㄣ【】ㄇㄋㄎㄑㄕㄘㄨㄜㄠㄤ「ㄈㄌㄏㄒㄖㄙㄩㄝㄡㄥ "];
const bopomofoToRoman = new Map();
const romanToRoman = new Map();
const romanToBopomofo = new Map();
const keyClassMap = new Map();

function KeysInit() {
  roman.forEach((element, index) => {
    bopomofoToRoman.set(bopomofo[index], element);
    romanToBopomofo.set(element, bopomofo[index]);
    romanToRoman.set(element, element);
    if (element >= "a" && element <= "z") {
      romanToRoman.set(element.toUpperCase(), element.toUpperCase());
    }
    keyClassMap.set(element, index);
  });
}

// This function converts each roman character in the input string
// to its bopomofo keyboard equivalence
//      Example: a => ㄇ; 1 => ㄅ
// Returns an array of characters
function RomanToBopomofo(str) {
  return Convert(romanToBopomofo, str);
}

// This function converts each bopomofo character in the input string
// to its roman keyboard equivalence
//      Example: ㄇ => a; ㄅ => 1
// Returns an array of characters
function BopomofoToRoman(str) {
  return Convert(bopomofoToRoman, str);
}

// This is a helper method that converts the string from one set of
// characters to another using the appropriate converter (map)
// Returns an array of characters
function Convert(converter, str) {
  const charArr = [...str];
  let resultArr = charArr.map((char) => converter.get(char) ?? converter.get(char.toLowerCase()) ?? char);
  return resultArr;
}
