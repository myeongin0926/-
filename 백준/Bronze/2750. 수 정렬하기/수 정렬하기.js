const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./test.txt")
  .toString()
  .trim()
  .split("\n");

input
  .slice(1)
  .map(Number)
  .sort((a, b) => a - b)
  .forEach((el) => console.log(el));
