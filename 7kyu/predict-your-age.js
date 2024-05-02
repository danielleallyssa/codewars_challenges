// My grandfather always predicted how old people would get, and right before he passed away he revealed his secret!

// In honor of my grandfather's memory we will write a function using his formula!

// Take a list of ages when each of your great-grandparent died.
// Multiply each number by itself.
// Add them all together.
// Take the square root of the result.
// Divide by two.

function predictAge(age1, age2, age3, age4, age5, age6, age7, age8) {
  const ages = [age1, age2, age3, age4, age5, age6, age7, age8],
    sum = ages.reduce((acc, el) => el ** 2 + acc, 0),
    result = Math.floor(Math.sqrt(sum, 2) / 2);

  return result;
}
