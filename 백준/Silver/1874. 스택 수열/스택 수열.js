const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString().trim().split("\n");

const n = +input.shift();
const arr = input.map(Number);

const stack = [];

const result = [];

let i = 1;

let success = true;

while (arr.length > 0 && success) {
  if (arr[0] === stack.at(-1)) {
    arr.shift();
    stack.pop();
    result.push("-");
  } else if (n >= i) {
    stack.push(i);
    i++;
    result.push("+");
  } else if (n < i) {
    success = false;
  }
}

console.log(success ? result.join("\n") : "NO");
