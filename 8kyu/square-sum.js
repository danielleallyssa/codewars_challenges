// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because

const squareSum = (numbers) =>
  numbers.map((x) => Math.pow(x, 2)).reduce((x, y) => x + y, 0);
