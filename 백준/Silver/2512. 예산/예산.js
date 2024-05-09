let fs = require("fs");
let input = fs.readFileSync("./dev/stdin").toString().split("\n");

const n = +input[0];
const arr = input[1].split(" ").map(Number);
const money = +input[2];

let result = 0;

let start = 0;
let end = Math.max(...arr);
while (start <= end) {
  let mid = parseInt((start + end) / 2);
  let total = 0;

  arr.forEach((num) => (total += Math.min(mid, num)));
  if (total <= money) {
    result = mid;
    start = mid + 1;
  } else {
    end = mid - 1;
  }
}

console.log(result);
