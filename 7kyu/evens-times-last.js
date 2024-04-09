// Given a sequence of integers, return the sum of all the integers that have an even index (odd index in COBOL), multiplied by the integer at the last index.

// Indices in sequence start from 0.

// If the sequence is empty, you should return 0.

function evenLast(numArr) {
  return numArr.length
    ? numArr.filter((x, i) => !(i % 2)).reduce((acc, el) => acc + el, 0) *
        numArr[numArr.length - 1]
    : 0;
}
