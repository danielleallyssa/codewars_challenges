// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

// [10, 343445353, 3453445, 3453545353453] should return 3453455.

function sumTwoSmallestNumbers(numbers) {
  //   P: An array of numbers
  //   R: The sum of the of the lowest two numbers in the array
  //   E: [5, 8, 12, 19, 22] -> 13; [15, 28, 4, 2, 43], 6
  //   P:
  //   - Sort the array from lowest to highest
  //   - Filter array to only include values with and index of 0 and 1
  //   - Reduce the values

  let result = numbers
    .sort((a, b) => a - b)
    .filter((x, i) => i === 0 || i === 1)
    .reduce((a, b) => a + b);

  return result;
}
