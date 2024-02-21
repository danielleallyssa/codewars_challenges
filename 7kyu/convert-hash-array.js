// Convert a hash into an array. Nothing more, Nothing less.

// {name: 'Jeremy', age: 24, role: 'Software Engineer'}
// should be converted into

// [["age", 24], ["name", "Jeremy"], ["role", "Software Engineer"]]
// Good Luck!

function convertHashToArray(hash) {
  let array = [];

  for (let el in hash) {
    array.push([el, hash[el]]);
    console.log(el, hash[el]);
  }

  return array;
}
