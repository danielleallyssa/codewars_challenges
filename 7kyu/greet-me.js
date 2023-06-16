// Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.

// Example:

// "riley" --> "Hello Riley!"
// "JACK"  --> "Hello Jack!"

const greet = function (name) {
  const arr = name.split(""),
    final = arr
      .map((x) => (arr.indexOf(x) === 0 ? x.toUpperCase() : x.toLowerCase()))
      .join("");

  return `Hello ${final}!`;
};
