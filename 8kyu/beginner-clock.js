// Clock shows h hours, m minutes and s seconds after midnight.

// Your task is to write a function which returns the time since midnight in milliseconds.

// Example:
// h = 0
// m = 1
// s = 1

// result = 61000
// Input constraints:

// 0 <= h <= 23
// 0 <= m <= 59
// 0 <= s <= 59

past = (h, m, s) => {
  const sec = 1000,
    min = sec * 60,
    hr = min * 60;

  return hr * h + min * m + sec * s;
};
