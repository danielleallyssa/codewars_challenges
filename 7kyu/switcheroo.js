// Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). Leave any incidence of c untouched.

// Example:

// 'acb' --> 'bca'
// 'aabacbaa' --> 'bbabcabb'

function switcheroo(x) {
  const str = x
    .split("")
    .map((x) => {
      switch (true) {
        case x === "a":
          return "b";
        case x === "b":
          return "a";
        default:
          return "c";
      }
    })
    .join("");

  return str;
}
