let fs = require("fs");
let input = fs.readFileSync("./dev/stdin").toString().split("\n");

const n = +input.shift();
const arr = input.map(Number);

let answer = 0;
arr.reverse();

for (let i = 1; i < arr.length; i++) {
  const data = arr[i];
  const prev = arr[i - 1];
  if (prev <= 0) continue;
  if (data >= prev) {
    const count = data - prev + 1;
    answer += count;
    arr[i] = data - count;
  }
}

console.log(answer);
