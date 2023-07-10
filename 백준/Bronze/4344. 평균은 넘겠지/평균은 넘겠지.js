const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./test.txt")
  .toString()
  .trim()
  .split("\n");

input.forEach(check);

function check(input, i) {
  if (i === 0) return;
  const arr = input.split(" ");
  const num = arr.splice(0, 1);
  const total = arr.reduce((acc, cur) => +acc + +cur, 0);
  const aboveAverageCount = arr.filter((el) => +el > total / num).length;
  console.log(((aboveAverageCount / num) * 100).toFixed(3) + "%");
}
