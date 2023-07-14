const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./test.txt")
  .toString()
  .trim()
  .split("\n");

const data = +input[0];

let result = 0;
let sum = 0;
let i = 0;

while (result < data) {
  if (result + i > data) break;
  else {
    result += i;
    i++;
  }
}
console.log(i - 1);
