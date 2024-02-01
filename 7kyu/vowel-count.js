// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

// P: A string
// R: Number of values that are vowels - a, e, i, o, u
// E: "abracadabra" -> 5
// P:
//   - Split the string into an array
//   - Filter it into a new array only values that are a, e, i, o, u
//   - Return the length of that array

function getCount(str) {
  const filtered = str.split("").filter((x) => {
    return x === "a" || x === "e" || x === "i" || x === "o" || x === "u";
  });

  return filtered.length;
}
