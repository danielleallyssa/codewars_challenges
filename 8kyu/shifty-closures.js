// Functional closures can get overly attached. Set them straight!

// Why doesn't greetAbe() actually greet Abe?

// let name = 'Abe'

// const greetAbe = () => 'Hello, ' + name + '!'

// name = 'Ben'

// const greetBen = () => 'Hello, ' + name + '!'

// let name = "";

// const greetAbe = () => {
//   name = "Abe";
//   "Hello, " + name + "!";
// };

// const greetBen = () => {
//   name = "Ben";
//   "Hello, " + name + "!";
// };

const greeting = (name) => "Hello, " + name + "!";

const greetAbe = greeting("Abe");
const greetBen = greeting("Ben");
