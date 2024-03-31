// Your task is to write an update for a lottery machine. Its current version produces a sequence of random letters and integers (passed as a string to the function). Your code must filter out all letters and return unique integers as a string, in their order of first appearance. If there are no integers in the string return "One more run!"

// Examples
// "hPrBKWDH8yc6Lt5NQZWQ"  -->  "865"
// "ynMAisVpHEqpqHBqTrwH"  -->  "One more run!"
// "555"                   -->  "5"

function lottery(str) {
  let nums = "1234567890".split(""),
    filtered = str.split("").filter((x) => {
      for (let num of nums) {
        if (x === num) {
          return x;
        }
      }
    }),
    final = filtered.filter((x, i) => i === filtered.indexOf(x)).join("");

  return filtered.length ? final : "One more run!";
}
