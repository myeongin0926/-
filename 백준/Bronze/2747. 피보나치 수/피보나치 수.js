const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString().trim().split("\n");

const n = +input.shift();

const fibo = [0, 1];

for (let i = 1; i < n; i++) {
  fibo.push(fibo[i] + fibo[i - 1]);
}

console.log(fibo.at(-1));
