const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./test.txt")
  .toString()
  .trim()
  .split("\n");
let [n, k] = input[0].split(" ").map(Number);

let sum = 0;

for (let i = 1; i <= k; i++) {
  sum += i;
}

if (n < sum) console.log(-1);
else {
  n -= sum;
  if (!(n % k)) console.log(k - 1);
  else console.log(k);
}
