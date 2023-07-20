const { createPublicKey } = require("crypto");
const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./test.txt")
  .toString()
  .trim()
  .split("\n");

const arr = input[1].split(" ").map(Number).reverse();
const answer = [0];

for (let i = 0; i < arr.length; i++) {
  if (answer[answer.length - 1] < arr[i]) {
    answer.push(arr[i]);
  } else {
    const index = lowerBound(answer, arr[i], 0, answer.length);
    answer[index] = arr[i];
  }
}
function lowerBound(arr, target, start, end) {
  while (start <= end) {
    const mid = ~~((start + end) / 2);
    if (arr[mid] >= target) end = mid - 1;
    else start = mid + 1;
  }
  return start;
}

console.log(arr.length - (answer.length - 1));
