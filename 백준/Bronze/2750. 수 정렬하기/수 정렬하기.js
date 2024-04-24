const fs = require("fs");
let input = fs.readFileSync("./dev/stdin").toString().split("\n");

const arr = [];
const n = input[0];

for (let i = 1; i <= n; i++) {
  arr.push(+input[i]);
}

arr.sort((a, b) => a - b);
let answer = "";

for (let i = 0; i < arr.length; i++) {
  answer += arr[i] + "\n";
}

console.log(answer);
