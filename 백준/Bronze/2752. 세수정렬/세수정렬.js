const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./test.txt")
  .toString()
  .trim()
  .split("\n");

input[0]
  .split(" ")
  .map(Number)
  .sort((a, b) => +a - +b)
  .forEach((el) => console.log(el));
