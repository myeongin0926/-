const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./test.txt")
  .toString()
  .trim()
  .split("\n");

// [...input].sort((a, b) => +a - +b).forEach((el) => console.log(+el));

let n = Number(input[0]);

let arr = [];
for (let i = 1; i <= n; i++) {
  arr.push(+input[i]);
}

arr.sort((a, b) => a - b);

let answer = "";
arr.forEach((el) => {
  answer += el + "\n";
});

console.log(answer);
