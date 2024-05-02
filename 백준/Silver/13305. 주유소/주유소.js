const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./test.txt")
  .toString()
  .trim()
  .split("\n");

const street = input[1].split(" ").map(Number);
const prices = input[2].split(" ").map(Number);

let result = BigInt(0);
prices.forEach((el, i, arr) => {
  if (arr[i] < arr[i + 1]) prices[i + 1] = prices[i];
});
for (let i = 0; i < prices.length - 1; i++) {
  result += BigInt(prices[i]) * BigInt(street[i]);
}
console.log(String(result));
