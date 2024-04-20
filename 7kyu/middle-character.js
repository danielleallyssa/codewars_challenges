// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

// #Examples:

// Kata.getMiddle("test") should return "es"

// Kata.getMiddle("testing") should return "t"

// Kata.getMiddle("middle") should return "dd"

// Kata.getMiddle("A") should return "A"

function getMiddle(s) {
  const split = s.split("");
  const middle = Math.floor(s.length / 2);
  const newArray = [];

  if (s.length % 2 === 0) {
    newArray.unshift(split[middle - 1], split[middle]);
  } else {
    newArray.unshift(split[middle]);
  }

  return newArray.join("");
}
