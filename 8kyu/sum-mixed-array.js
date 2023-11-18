// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.

function sumMix(x) {
  console.log(x);

  const numArr = x.map((x) => Number(x));
  const sum = numArr.reduce((x, y) => x + y);

  return sum;
}
