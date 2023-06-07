// When provided with a letter, return its position in the alphabet.

// Input :: "a"

// Ouput :: "Position of alphabet: 1"

function position(letter) {
  let alpha = "abcdefghijklmnopqrstuvwxyz";
  return `Position of alphabet: ${alpha.indexOf(letter) + 1}`;
}
