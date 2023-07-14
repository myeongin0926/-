const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./test.txt")
  .toString()
  .trim()
  .split("\n");

const street = input[1].split(" ").map(Number);
const prices = input[2].split(" ").map(Number);

let price = 0;
let streetCur = 0;

while (streetCur < street.length) {
  if (prices[streetCur] < prices[streetCur + 1]) {
    // 현재 주유소가 다음 주유소보다 가격이 싸다면
    price += prices[streetCur] * (street[streetCur] + street[streetCur + 1]);
    streetCur += 2;
  } else {
    price += prices[streetCur] * street[streetCur];
    streetCur++;
    // 현재 주유소가 다음 주유소보다 싸거나 같다면
  }
}

console.log(price);
