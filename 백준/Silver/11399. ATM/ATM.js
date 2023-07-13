const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./test.txt")
  .toString()
  .trim()
  .split("\n");

const data = input[1].split(" ").map(Number);
data.sort((a, b) => a - b);
let result = 0;

data.reduce((acc, cur) => {
  acc += cur;
  result += acc;
  return acc;
}, 0);

console.log(result);
