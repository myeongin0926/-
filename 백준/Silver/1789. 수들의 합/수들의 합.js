const fs = require("fs");
let input = fs.readFileSync("./dev/stdin").toString().split("\n");

const n = +input[0];
let sum = 0;
let current = 0;

while (sum <= n) {
  current++;
  sum += current;
}

console.log(current - 1);
