// Given a mixed array of number and string representations of integers, add up the non-string integers and subtract the total of the string integers.

// Return as a number.

function divCon(x) {
  const getSum = (arr, type) =>
    arr.filter((x) => typeof x === type).reduce((acc, el) => acc + +el, 0);
  return getSum(x, "number") - getSum(x, "string");
}
