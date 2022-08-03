"use strict";

const lesson01 = [...GenerateLessonBasic(RomanToBopomofo("as"))];
const lesson02 = [...GenerateLessonBasic(RomanToBopomofo("df"))];
const lesson03 = [...GenerateLessonBasic(RomanToBopomofo("gh"))];
const lesson04 = [...GenerateLessonBasic(RomanToBopomofo("jk"))];
const lesson05 = [...GenerateLessonBasic(RomanToBopomofo("l;"))];
const lesson06 = () => [...GenerateLessonRandom(RomanToBopomofo("asdfghjkl;"))];
const lesson07 = [...GenerateLessonBasic(RomanToBopomofo("qw"))];
const lesson08 = [...GenerateLessonBasic(RomanToBopomofo("er"))];
const lesson09 = [...GenerateLessonBasic(RomanToBopomofo("ty"))];
const lesson10 = [...GenerateLessonBasic(RomanToBopomofo("ui"))];
const lesson11 = [...GenerateLessonBasic(RomanToBopomofo("op"))];
const lesson12 = () => [...GenerateLessonRandom(RomanToBopomofo("qwertyuiop"))];
const lesson13 = [...GenerateLessonBasic(RomanToBopomofo("zx"))];
const lesson14 = [...GenerateLessonBasic(RomanToBopomofo("cv"))];
const lesson15 = [...GenerateLessonBasic(RomanToBopomofo("bn"))];
const lesson16 = [...GenerateLessonBasic(RomanToBopomofo("m,"))];
const lesson17 = [...GenerateLessonBasic(RomanToBopomofo("./"))];
const lesson18 = () => [...GenerateLessonRandom(RomanToBopomofo("zxcvbnm,./"))];
const lesson19 = [...GenerateLessonBasic(RomanToBopomofo("12"))];
const lesson20 = [...GenerateLessonBasic(RomanToBopomofo("34"))];
const lesson21 = [...GenerateLessonBasic(RomanToBopomofo("67"))];
const lesson22 = [...GenerateLessonBasic(RomanToBopomofo("58"))];
const lesson23 = [...GenerateLessonBasic(RomanToBopomofo("90"))];
const lesson24 = [...GenerateLessonBasic(RomanToBopomofo("-1"))];
const lesson25 = () => [...GenerateLessonRandom(RomanToBopomofo("1234567890-"))];
const lesson26 = () => [...GenerateLessonRandom(RomanToBopomofo("1234567890-qwertyuiopasdfghjkl;zxcvbnm,./"))];
const lesson27 = () => [...GenerateLessonRandom(RomanToBopomofo("1234567890-qwertyuiopasdfghjkl;zxcvbnm,./"))];
const lesson28 = () => [...GenerateLessonRandom(RomanToBopomofo("1234567890-qwertyuiopasdfghjkl;zxcvbnm,./"))];
const lesson29 = [
  ..."ㄋㄧˇ ㄨㄛˇ ㄋㄧˇ ㄨㄛˇ ㄋㄧˇ ㄨㄛˇ  ㄋㄧˇ ㄨㄛˇ ㄋㄧˇ ㄨㄛˇ ㄋㄧˇ ㄨㄛˇ  ㄓㄜˋ ㄋㄚˇ ㄓㄜˋ ㄋㄚˇ ㄓㄜˋ ㄋㄚˇ  ㄓㄜˋ ㄋㄚˇ ㄓㄜˋ ㄋㄚˇ ㄓㄜˋ ㄋㄚˇ  ㄏㄠˇ ㄏㄜ ㄏㄠˇ ㄏㄜ ㄏㄠˇ ㄏㄜ ㄔㄚˊ ㄐㄧㄠˋ ㄐㄧㄠˋ ㄐㄧㄠˋ ㄐㄧㄠˋ ㄐㄧㄠˋ ㄏㄜ ㄔㄚˊ ㄏㄜ ㄔㄚˊ ㄏㄜ ㄔㄚˊ ㄑㄧㄥˇㄑㄧㄥˇ ㄑㄧㄥˇ ㄑㄧㄥˇ ㄑㄧㄥˇ ㄑㄧㄥˇ ㄕㄣˊ ˙ㄇㄜ ㄕㄣˊ ˙ㄇㄜ ㄕㄣˊ ˙ㄇㄜ  ㄒㄧㄥˋ ㄒㄧㄥˋ ㄒㄧㄥˋ ㄒㄧㄥˋ ㄒㄧㄥˋ ",
];
const lesson30 = [
  ..."ㄊㄞˊ ㄨㄢ ㄊㄞˊ ㄨㄢ ㄊㄞˊ ㄨㄢ ˙ㄇㄚ ˙ㄇㄚ ˙ㄇㄚ ˙ㄇㄚ ˙ㄇㄚ ˙ㄇㄚ ˙ㄇㄚ  ㄨ ㄌㄨㄥˊ ㄔㄚˊ ㄨ ㄌㄨㄥˊ ㄔㄚˊ ㄧㄠˋㄖˋ ㄅㄣˇ ㄇㄟˇ ㄍㄨㄛˊ ㄩㄝˋ ㄋㄢˊ  ㄖˋ ㄅㄣˇ ㄇㄟˇ ㄍㄨㄛˊ ㄩㄝˋ ㄋㄢˊ  ㄉㄨㄛ ㄕㄠˇ ㄉㄨㄛ ㄕㄠˇ ㄉㄨㄛ ㄕㄠˇ  ㄅㄞˇ ㄎㄨㄞˋ ㄅㄞˇ ㄎㄨㄞˋ ㄓ ㄓ ㄓ  ㄆㄧㄠˋ ㄌㄧㄤˋ ㄆㄧㄠˋ ㄌㄧㄤˋ ㄉㄨㄟˋ ㄉㄨㄟˋ ㄉㄨㄟˋ ㄉㄨㄟˋ ㄉㄨㄟˋ ㄉㄨㄟˋ ㄊㄧㄥ ㄊㄧㄥ ㄊㄧㄥ ㄊㄧㄥ ㄊㄧㄥ ㄊㄧㄥ  ",
];
const lesson31 = [
  ..."ㄍㄨㄟˋ ㄍㄨㄟˋ ㄍㄨㄟˋ ㄍㄨㄟˋ ㄍㄨㄟˋ ㄐㄧㄚ ㄐㄧㄚ ㄐㄧㄚ ㄐㄧㄚ ㄐㄧㄚ ㄐㄧㄚ  ㄗˋ ㄐㄧˇ ㄗˋ ㄐㄧˇ ㄗˋ ㄐㄧˇ ㄗˋ  ㄕˋ ˙ㄚ ㄕˋ ˙ㄚ ㄕˋ ˙ㄚ ㄕˋ ˙ㄚ  ㄎㄜˇ ㄧˇ ㄎㄜˇ ㄧˇ ㄎㄜˇ ㄧˇ ˙ㄉㄜ ㄘㄞˋ ㄘㄞˋ ㄘㄞˋ ㄘㄞˋ ㄘㄞˋ ㄘㄞˋ  ㄕㄤˋ ㄨㄤˇ ㄕㄤˋ ㄨㄤˇ ㄕㄤˋ ㄨㄤˇ  ㄈㄥ ㄐㄧㄥˇ ㄈㄥ ㄐㄧㄥˇ ㄈㄥ ㄐㄧㄥˇ  ㄓㄜˋ ㄌㄧˇ ㄓㄜˋ ㄌㄧˇ ㄓㄜˋ ㄌㄧˇ  ㄒㄩㄝˊ ㄕㄥ ㄒㄩㄝˊ ㄕㄥ ㄒㄩㄝˊ ㄕㄥ  ",
];
const lesson32 = [
  ..."ㄖㄣˊ ㄖㄣˊ ㄖㄣˊ ㄖㄣˊ ㄖㄣˊ ㄖㄣˊ  ㄙㄨˋ ㄕㄜˋ ㄙㄨˋ ㄕㄜˋ ㄙㄨˋ ㄕㄜˋ  ㄑㄩˋ ㄑㄩˋ ㄑㄩˋ ㄑㄩˋ ㄑㄩˋ ㄑㄩˋ  ㄒㄩㄝˊ ㄒㄩㄝˊ ㄒㄩㄝˊ ㄒㄩㄝˊ ㄒㄩㄝˊ ㄕㄡˇ ㄐㄧ ㄕㄡˇ ㄐㄧ ㄕㄡˇ ㄐㄧ ㄐㄧㄡˋㄖㄣˊ ㄖㄣˊ ㄖㄣˊ ㄖㄣˊ ㄖㄣˊ ㄖㄣˊ  ㄙㄨˋ ㄕㄜˋ ㄙㄨˋ ㄕㄜˋ ㄙㄨˋ ㄕㄜˋ  ㄑㄩˋ ㄑㄩˋ ㄑㄩˋ ㄑㄩˋ ㄑㄩˋ ㄑㄩˋ  ㄒㄩㄝˊ ㄒㄩㄝˊ ㄒㄩㄝˊ ㄒㄩㄝˊ ㄒㄩㄝˊ ㄕㄡˇ ㄐㄧ ㄕㄡˇ ㄐㄧ ㄕㄡˇ ㄐㄧ ㄐㄧㄡˋ",
];

const lessons = [
  lesson01,
  lesson02,
  lesson03,
  lesson04,
  lesson05,
  lesson06,
  lesson07,
  lesson08,
  lesson09,
  lesson10,
  lesson11,
  lesson12,
  lesson13,
  lesson14,
  lesson15,
  lesson16,
  lesson17,
  lesson18,
  lesson19,
  lesson20,
  lesson21,
  lesson22,
  lesson23,
  lesson24,
  lesson25,
  lesson26,
  lesson27,
  lesson28,
  lesson29,
  lesson30,
  lesson31,
  lesson32,
];

function GenerateLessonRandom(charArr) {
  let lessonStr = "";
  for (let i = 0; i < 50; i++) {
    for (let j = 0; j < 4; j++) {
      const index = Math.trunc(Math.random() * charArr.length);
      lessonStr += charArr[index];
    }
    lessonStr += " ";
  }
  return lessonStr;
}

// u: uniform
// a: alternate groups
// d: alternate within groups with characters repeated twice
// s: alternate within groups
function GenerateLessonBasic(chars) {
  const char1 = chars[0];
  const char2 = chars[1];
  return (
    GenerateLines(char1 + char1, 1, "u") +
    GenerateLines(char2 + char2, 1, "u") +
    GenerateLines(char1 + char2, 1, "a") +
    GenerateLines(char2 + char1, 1, "a") +
    GenerateLines(char1 + char2, 1, "d") +
    GenerateLines(char2 + char1, 1, "d") +
    GenerateLines(char1 + char2, 2, "s") +
    GenerateLines(char2 + char1, 2, "s")
  );
}

function GenerateLines(chars, lines, type) {
  let stringArr = "";
  let temp = "";
  for (let i = 0; i < 5; i++) {
    if (type === "u" || type === "d") {
      for (let j = 0; j < 2; j++) {
        temp += chars[j % 2];
        temp += chars[j % 2];
      }
    } else if (type === "a") {
      for (let j = 0; j < 4; j++) {
        temp += chars[i % 2];
      }
    } else {
      for (let j = 0; j < 4; j++) {
        temp += chars[j % 2];
      }
    }
    temp += " ";
  }
  for (let i = 0; i < lines; i++) {
    stringArr += temp;
  }

  return stringArr;
}
