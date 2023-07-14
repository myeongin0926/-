const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./test.txt")
  .toString()
  .trim()
  .split("\n");

const data = input[1].split(" ").map(Number);
data.sort((a, b) => b - a);

let sum = 0;
let pointer = data[0];

data.slice(1).forEach((el) => {
  sum += pointer + el;
});

console.log(sum);
