const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./test.txt")
  .toString()
  .trim()
  .split("\n");

const n = +input[0];
const data = input.slice(1).map((el) => el.split(" ").map(Number));
let start = 0;
let count = 0;

data.sort((a, b) => {
  if (a[1] !== b[1]) {
    return a[1] - b[1];
  } else {
    return a[0] - b[0];
  }
});

for (let i = 0; i < n; i++) {
  if (data[i][0] >= start) {
    start = data[i][1];
    count++;
  }
}
console.log(count);
