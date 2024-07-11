const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString().trim().split("\n");

const n = +input.shift();
const arr = input.map(Number);

const stack = [];

for (let i = 0; i < n; i++) {
  if (arr[i] === 0) stack.pop();
  else stack.push(arr[i]);
}

console.log(stack.reduce((acc, cur) => acc + cur, 0));
