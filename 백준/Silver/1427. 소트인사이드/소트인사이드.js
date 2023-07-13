const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./test.txt")
  .toString()
  .trim()
  .split("\n");

console.log(
  input[0]
    .split("")
    .map(Number)
    .sort((a, b) => b - a)
    .join("")
);
