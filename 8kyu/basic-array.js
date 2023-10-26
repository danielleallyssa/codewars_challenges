// I've written five functions. Each function receives a parameter arr which is an array. Complete the functions using arr inside the function bodies.

//     1. getLength(arr)    should return length of arr
//     2. getFirst(arr)     should return the first element of arr
//     3. getLast(arr)      should return the last element of arr
//     4. pushElement(arr)  should push an element to arr, and then return arr
//     5. popElement(arr)   should pop an element from arr, and then return arr

//return length of arr
const getLength = (arr) => arr.length;

//return the first element of arr
const getFirst = (arr) => arr[0];

//return the last element of arr
const getLast = (arr) => arr[arr.length - 1];

//push el to arr
const pushElement = (arr) => {
  let el = 1;
  arr.push(el);
  return arr;
};

//pop an element from arr
const popElement = (arr) => {
  arr.pop();
  return arr;
};
