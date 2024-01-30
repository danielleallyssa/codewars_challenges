// You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

// Array can contain numbers or strings. X can be either.

// Return true if the array contains the value, false if not.

function check(a, x) {
  // P: An array and a value
  // R: A boolean of whether the array contains the value
  // E: (['t', 'e', 's', 't'], 'e') -> true, ([66, 101], 66) -> true
  // P: Use the includes method on the array to determines if the value is there.

  return a.includes(x);
}
