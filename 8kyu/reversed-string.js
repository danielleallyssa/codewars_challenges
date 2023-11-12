// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

let solution = (str) => {
  let newString = str.split("");
  let backwards = newString.reverse();
  return backwards.join("");
};
