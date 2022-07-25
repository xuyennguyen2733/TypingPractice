"use strict";

const lesson01 = [
  ..."ㄅㄅㄅㄅㄅㄅㄅㄅㄅㄅ ㄆㄆㄆㄆㄆㄆㄆㄆㄆㄆ ㄇㄇㄇㄇㄇㄇㄇㄇㄇㄇ ㄈㄈㄈㄈㄈㄈㄈㄈㄈㄈ ㄉㄉㄉㄉㄉㄉㄉㄉㄉㄉ ㄊㄊㄊㄊㄊㄊㄊㄊㄊㄊ ㄋㄋㄋㄋㄋㄋㄋㄋㄋㄋ ㄌㄌㄌㄌㄌㄌㄌㄌㄌㄌ ㄍㄍㄍㄍㄍㄍㄍㄍㄍㄍ ㄎㄎㄎㄎㄎㄎㄎㄎㄎㄎ ㄏㄏㄏㄏㄏㄏㄏㄏㄏㄏ ㄐㄐㄐㄐㄐㄐㄐㄐㄐㄐ ㄑㄑㄑㄑㄑㄑㄑㄑㄑㄑ",
];
const lesson02 = [
  ..."ㄒㄒㄒㄒㄒㄒㄒㄒㄒㄒ ㄓㄓㄓㄓㄓㄓㄓㄓㄓㄓ ㄔㄔㄔㄔㄔㄔㄔㄔㄔㄔ ㄕㄕㄕㄕㄕㄕㄕㄕㄕㄕ ㄖㄖㄖㄖㄖㄖㄖㄖㄖㄖ ㄗㄗㄗㄗㄗㄗㄗㄗㄗㄗ ㄘㄘㄘㄘㄘㄘㄘㄘㄘㄘ ㄙㄙㄙㄙㄙㄙㄙㄙㄙㄙ ㄧㄧㄧㄧㄧㄧㄧㄧㄧㄧ ㄨㄨㄨㄨㄨㄨㄨㄨㄨㄨ ㄩㄩㄩㄩㄩㄩㄩㄩㄩㄩ ㄚㄚㄚㄚㄚㄚㄚㄚㄚㄚ",
];
const lesson03 = [
  ..."ㄛㄛㄛㄛㄛㄛㄛㄛㄛㄛ ㄜㄜㄜㄜㄜㄜㄜㄜㄜㄜ ㄝㄝㄝㄝㄝㄝㄝㄝㄝㄝ ㄞㄞㄞㄞㄞㄞㄞㄞㄞㄞ ㄟㄟㄟㄟㄟㄟㄟㄟㄟㄟ ㄠㄠㄠㄠㄠㄠㄠㄠㄠㄠ ㄡㄡㄡㄡㄡㄡㄡㄡㄡㄡ ㄢㄢㄢㄢㄢㄢㄢㄢㄢㄢ ㄣㄣㄣㄣㄣㄣㄣㄣㄣㄣ ㄤㄤㄤㄤㄤㄤㄤㄤㄤㄤ ㄥㄥㄥㄥㄥㄥㄥㄥㄥㄥ ㄦㄦㄦㄦㄦㄦㄦㄦㄦㄦ",
];
const lesson04 = [
  ..."ㄅㄅㄅ ㄆㄆㄆ ㄇㄇㄇ ㄈㄈㄈ ㄉㄉㄉ ㄊㄊㄊ ㄋㄋㄋ ㄌㄌㄌ ㄍㄍㄍ ㄎㄎㄎ ㄏㄏㄏ ㄐㄐㄐ ㄑㄑㄑ ㄒㄒㄒ ㄓㄓㄓ ㄔㄔㄔ ㄕㄕㄕ ㄖㄖㄖ ㄗㄗㄗ ㄘㄘㄘ ㄙㄙㄙ ㄧㄧㄧ ㄨㄨㄨ ㄩㄩㄩ ㄚㄚㄚ ㄛㄛㄛ ㄜㄜㄜ ㄝㄝㄝ ㄞㄞㄞ ㄟㄟㄟ ㄠㄠㄠ ㄡㄡㄡ ㄢㄢㄢ ㄣㄣㄣ ㄤㄤㄤ ㄥㄥㄥ ㄦㄦㄦ",
];
const lesson05 = [
  ..."ㄑㄑㄩ ㄩㄩㄑ ㄟㄟㄕ ˊˊˊˋˋ ㄥㄥㄏ ㄈㄈㄟ ㄕㄕㄣ ㄆㄆㄖ ㄌㄌㄨ ㄝㄝㄊ ㄋㄋㄆ ㄨㄨㄜ ㄓㄓㄕ ㄠㄠㄓ ㄗㄗㄡ ㄊㄊㄚ ㄔㄔㄘ ㄏㄏㄔ ㄒㄒㄦ ㄇㄇㄒ ㄉㄉㄋ ˋˋˋˇˇ ㄐㄐㄝ ㄞㄞㄠ ˇˇˇ˙˙ ㄚㄚㄤ ㄜㄜㄘ ㄡㄡㄈ ㄎㄎㄌ ˙˙˙ˊˊ ㄦㄦㄗ ㄛㄛㄢ ㄧㄧㄇ ㄢㄢㄞ ㄅㄅㄐ ㄣㄣㄙ ㄘㄎㄍ ㄤㄤㄧ ㄖㄖㄥ ㄍㄍㄛ ㄙㄙㄉ",
];
const lesson06 = [
  ..."ˇˇˇˇˇ ˋˋˋˋˋ ˊˊˊˊˊ ˙˙˙˙˙ ㄟㄓㄟ ㄉㄎㄉ ㄌㄅㄌ ㄐㄝㄐ ㄑㄈㄑ ㄧㄏㄧ ㄆㄢㄆ ㄏㄟㄏ ㄙㄕㄙ ㄩㄤㄩ ㄡㄙㄡ ㄥㄨㄥ ㄦㄑㄦ ㄍㄊㄍ ㄎㄜㄎ ㄝㄇㄝ ㄕㄌㄕ ㄗㄖㄗ ㄖㄆㄖ ㄊㄣㄊ ㄘㄩㄘ ㄤㄉㄤ ㄅㄚㄅ ㄜㄛㄜ ㄔㄠㄔ ㄠㄍㄠ ㄒㄦㄒ ㄢㄗㄢ ㄈㄙㄈ ㄋㄗㄋ ㄣㄧㄣ ㄞㄒㄞ ㄇㄘㄇ ㄓㄞㄓ ㄚㄥㄚ ㄛㄡㄛ ㄨㄔㄨ",
];

const lesson07 = [
  ..."ㄥㄉㄘ ㄌㄩㄝ ㄓㄗㄎ ㄦㄞㄔ ㄕㄡㄒ ㄜㄋㄢ ㄚㄍㄑ ㄏㄣㄠ ㄧㄤㄟ ㄅㄨㄐ ㄛㄇㄊ ㄙㄈㄖ ㄆㄗㄟ ㄎㄝㄢ ㄞㄏㄇ ㄨㄦㄕ ㄅㄆㄑ ㄊㄤㄘ ㄉㄒㄐ ㄙㄥㄍ ㄌㄜㄈ ㄧㄠㄡ ㄔㄓㄩ ㄣㄚㄖ ㄛㄋ",
];
const lesson08 = [
  ..."ㄌㄧˇ ㄨㄛˇ ㄔㄣˊ ㄏㄨㄚˊ ㄐㄧㄠˋ ㄨㄤˊ ㄓㄜˋ ㄨㄣˊ ㄎㄞ ㄐㄧㄝˇ ㄏㄠˇ ˙ㄇㄚ ㄨㄢ ㄐㄧㄝ ㄌㄞˊ ㄕˋ ㄒㄧㄠˇ ㄊㄞˊ ㄏㄨㄢ ㄨㄛˇ ㄇㄟˇ ㄋㄧˇ ㄒㄧㄥˋ ㄇㄧㄥˊ ㄩㄝˋ ˙ㄇㄣ ㄒㄧㄢ ㄕㄥ ㄧㄥˊ ˙ㄇㄣ ㄋㄧˇ",
];
const lesson09 = [
  ..."ㄨ ㄌㄨㄥˊ ㄎㄚ ㄈㄟ ㄔㄚˊ ㄧㄠˋ ㄒㄧˇ ㄏㄨㄢ ㄕㄣˊ ˙ㄇㄜ ㄖㄣˊ ㄏㄠˇ ㄏㄜ ㄅㄨˋ ㄋㄚˇ ㄊㄚ ˙ㄋㄜ ㄖˋ ㄅㄣˇ ㄇㄟˇ ㄍㄨㄛˊ ㄇㄟˇ ㄍㄨㄛˊ ㄉㄨㄟˋ ㄅㄨˋ ㄑㄧˇ ㄖˋ ㄅㄣˇ ㄋㄚˇ ㄍㄨㄛˊ ㄓㄤ ㄧˊ ㄐㄩㄣ",
];
const lesson10 = [
  ..."ㄇㄚˇ ㄢ ㄊㄨㄥˊ ˙ㄉㄜ ㄐㄧㄚ ㄖㄣˊ ㄐㄧㄚ ㄆㄧㄠˋ ㄌㄧㄤˋ ㄓㄠˋ ㄒㄧㄤˋ ㄉㄡ ㄓㄠˋ ㄆㄧㄢ ㄓㄤ ㄏㄠˇ ㄎㄢˋ ㄉㄨㄛ ㄧㄡˇ ㄏㄠˇ ㄈㄤˊ ˙ㄗ ㄗㄨㄛˋ ㄕㄟˊ ㄐㄧㄝˇ ˙ㄐㄧㄝ ㄇㄟˋ ˙ㄇㄟ",
];
const lesson11 = [..."你叫什麼"];
const lesson12 = [..."我叫林雅惠"];
const lesson13 = [..."歡迎妳來臺灣"];
const lesson14 = [..."今天從早上九點到下午三點我有空"];
const lesson15 = [..."我每個週末都去KTV唱歌"];

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
];