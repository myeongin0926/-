const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./test.txt")
  .toString()
  .trim()
  .split("\n");

const [n, k] = input[0].split(" ").map(Number);
const data = input.slice(1);
let arr = [];

for (let i = 0; i < k; i++) {
  let result = {};
  for (let j = 0; j < n; j++) {
    if (!result[data[j][i]]) result[data[j][i]] = 1;
    else result[data[j][i]] += 1;
  }
  arr.push(result);
}

let answer = "";
let sum = 0;
arr.forEach((el) => {
  let max = 0;
  let maxStr = "";
  let total = 0;
  for (let key in el) {
    if (max < el[key]) {
      max = el[key];
      maxStr = key;
    } else if (max === el[key]) {
      if (key < maxStr) maxStr = key;
      if (key > maxStr) maxStr = maxStr;
    }
    total += el[key];
  }
  sum += total - max;
  answer += maxStr;
});

console.log(answer);
console.log(sum);
