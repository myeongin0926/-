const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

let [n] = input[0].split(" ")
let data = input[1].split(" ").map(Number);

data.sort((a,b) => a - b);

let answer = 0;
let sum = 0;

for (let i = 0; i < n; i++) {
  sum += data[i];
  answer += sum;
}

console.log(answer);
