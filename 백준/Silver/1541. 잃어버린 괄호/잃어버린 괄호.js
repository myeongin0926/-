const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./test.txt")
  .toString()
  .trim()
  .split("\n");


const arr = input[0].split("-");
let result = 0;
for (let i = 0; i < arr.length; i++) {
  let cur = arr[i]
    .split("+")
    .map(Number)
    .reduce((acc, cur) => acc + cur);
  if (i === 0) result += cur;
  else result -= cur;
}

console.log(result);
