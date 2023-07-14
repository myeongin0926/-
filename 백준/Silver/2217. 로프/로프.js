const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./test.txt")
  .toString()
  .trim()
  .split("\n");

const [n, ...l] = input;
const data = l.map(Number);

let avg = 0;

data.sort((a, b) => b - a);
sum = 0;
result = [];

for (let i = 0; i < data.length; i++) {
  result.push(data[i] * (i + 1));
}
console.log(Math.max(...result));
