const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./test.txt")
  .toString()
  .trim()
  .split("\n");

const count = input[0].split(" ")[1];
const arr = input[1].split(" ").map(Number);
arr.sort((a, b) => a - b);
console.log(arr[count - 1]);
