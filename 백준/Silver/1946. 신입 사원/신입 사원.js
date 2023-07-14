const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./test.txt")
  .toString()
  .trim()
  .split("\n");

const caseCount = +input[0];
let line = 1;
for (let i = 0; i < caseCount; i++) {
  n = +input[line];
  let arr = [];
  for (let i = line + 1; i <= line + n; i++) {
    let data = input[i].split(" ").map(Number);
    arr.push(data);
  }
  arr.sort((a, b) => a[0] - b[0]);
  let count = 0;
  let minValue = 1000001;
  for (let [x, y] of arr) {
    if (y < minValue) {
      minValue = y;
      count++;
    }
  }
  console.log(count);
  line += 1 + n;
}
