// There is a bus moving in the city which takes and drops some people at each bus stop.

// You are provided with a list (or array) of integer pairs. Elements of each pair represent the number of people that get on the bus (the first item) and the number of people that get off the bus (the second item) at a bus stop.

// Your task is to return the number of people who are still on the bus after the last bus stop (after the last array). Even though it is the last bus stop, the bus might not be empty and some people might still be inside the bus, they are probably sleeping there :D

// Take a look on the test cases.

// Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. So the returned integer can't be negative.

// The second value in the first pair in the array is 0, since the bus is empty in the first bus stop.

// P: A list of arrays - the first number in each array element is people getting on and the second is people getting off
// R: A single number value - the number of people left
// E: [ [ 10, 0 ], [ 3, 5 ], [ 5, 8 ] ] -> 5 , (10 - 0) + (3 - 5) + (5 - 8) -> 5
// P:
// - Need to loop through and reduce the inner set of arrays to their difference.
// --- Use a for loop to console.log each inner array
// - Need to loop through the outer array to its sum

const number = (busStops) => {
  let sum = 0;

  for (let stop of busStops) {
    sum += stop.reduce((a, b) => a - b);
  }

  return sum;
};
