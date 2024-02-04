// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

// Note: a and b are not ordered!

// Examples (a, b) --> output (explanation)
// (1, 0) --> 1 (1 + 0 = 1)
// (1, 2) --> 3 (1 + 2 = 3)
// (0, 1) --> 1 (0 + 1 = 1)
// (1, 1) --> 1 (1 since both are same)
// (-1, 0) --> -1 (-1 + 0 = -1)
// (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)
// Your function should only return a number, not the explanation about how you get that number.

// P: Two numbers
// R: The sum of all the integers between them (including them) OR if the two numbers are equal return the number
// E: (1, 2) --> 3 (1 + 2 = 3), (0, 1) --> 1 (0 + 1 = 1), (1, 1) --> 1 (1 since both are same)
// P:
//   - If the the two values are the same return the two values
//   - Otherwise, create an empty array
//   - Make a for loop to push values into that array
//   - Reduce that array to a sum

function getSum(a, b) {
  if (a == b) return a;

  const arr = [a, b].sort((a, b) => a - b);

  for (i = a; i <= b; i++) {
    arr.push(i);
  }

  console.log(arr);
}
