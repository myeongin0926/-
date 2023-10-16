const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim().split("\n");

let [n, cash] = input[0].split(" ").map(Number);
let data = input.slice(1);

let count = 0;

for (let i = n - 1; i >= 0; i--) {
  count += Math.floor(cash / data[i]);
  cash %= data[i];
}

console.log(count);
