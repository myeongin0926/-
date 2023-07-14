const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./test.txt")
  .toString()
  .trim()
  .split("\n");

const [a, b] = input[0].split(" ").map(Number);
console.log(a > b ? ">" : a < b ? "<" : "==");
