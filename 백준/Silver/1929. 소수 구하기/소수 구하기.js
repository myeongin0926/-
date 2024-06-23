const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, m] = input[0].split(" ").map((item) => +item);

const prime = { 1: true };

for (let i = 2; i <= Math.sqrt(m); i++) {
  if (prime[i]) continue;
  for (let j = i ** 2; j <= m; j += i) {
    prime[j] = true;
  }
}
const results = [];

for (let i = n; i <= m; i++) {
  if (!prime[i]) results.push(i);
}
console.log(results.join("\n"));