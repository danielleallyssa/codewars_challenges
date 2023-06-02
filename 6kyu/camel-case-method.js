// Write a method (or function, depending on the language) that converts a string to camelCase, that is, all words must have their first letter capitalized and spaces must be removed.

// Examples (input --> output):
// "hello case" --> "HelloCase"
// "camel case word" --> "CamelCaseWord"

String.prototype.camelCase = function () {
  const arr = this.split(" ").map((x) => x.split(""));

  for (let i = 0; i < arr.length; i++) {
    arr[i].splice(0, 1, arr[i][0].toUpperCase());
  }

  return arr.map((x) => x.join("")).join("");
};
