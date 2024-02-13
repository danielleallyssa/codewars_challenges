function highAndLow(numbers) {
  const splitStr = numbers.split(" ");

  return `${Math.max(...splitStr)} ${Math.min(...splitStr)}`;
}
