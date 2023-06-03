// Given an integer n and two other values, build an array of size n filled with these two values alternating.

// Examples
// 5, true, false     -->  [true, false, true, false, true]
// 10, "blue", "red"  -->  ["blue", "red", "blue", "red", "blue", "red", "blue", "red", "blue", "red"]
// 0, "one", "two"    -->  []

function alternate(n, v1, v2) {
  const arr = [];
  for (let i = 1; i <= n; i++) {
    arr.push(i % 2 ? v1 : v2);
  }
  return arr;
}