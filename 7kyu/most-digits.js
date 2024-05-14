// Find the number with the most digits.

// If two numbers in the argument array have the same number of digits, return the first one in the array.

function findLongest(arr) {
  const lengths = arr.map((x) => x.toString().length),
    longestPos = lengths.indexOf(Math.max(...lengths));

  return arr[longestPos];
}
