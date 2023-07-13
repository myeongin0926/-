const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./test.txt")
  .toString()
  .trim()
  .split("\n");

// const count = +input[0][2];
// const arr = input[1].split(" ");

// console.log(arr.sort((a, b) => a - b)[count - 1]);

let [n, k] = input[0].split(" ").map(Number);
let arr = input[1].split(" ").map(Number);

arr.sort((a, b) => a - b);
console.log(arr[k - 1]);
