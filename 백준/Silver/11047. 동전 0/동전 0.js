const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./test.txt")
  .toString()
  .trim()
  .split("\n");

const money = +input[0].split(" ")[1];
const coins = input
  .slice(1)
  .map(Number)
  .sort((a, b) => b - a);

console.log(coinCounter1(money));

function coinCounter1(money) {
  if (money < 0) return 0;
  let result = 0;
  for (const coin of coins) {
    result += Math.floor(money / coin);
    money %= coin;
  }
  return result;
}
