const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./test.txt")
  .toString()
  .trim()
  .split("\n");

let m = Number(input[0].split(" ")[1]);
let arr = input[1].split(" ").map(Number);

let start = 0;
let end = Math.max(...arr);
let result = 0;

while (start <= end) {
  let mid = ~~((start + end) / 2);
  let total = 0;
  arr.forEach((el) => (el > mid ? (total += el - mid) : ""));

  if (total < m) {
    end = mid - 1;
  } else {
    result = mid;
    start = mid + 1;
  }
}

console.log(result);
