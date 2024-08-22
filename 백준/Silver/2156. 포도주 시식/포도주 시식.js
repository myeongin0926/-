let fs = require("fs");
let wine = fs
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n")
  .map((element) => Number(element));
const number = wine[0];

const dp = new Array(number + 1);
dp[1] = wine[1];
dp[2] = wine[1] + wine[2];
dp[3] = Math.max(wine[1] + wine[2], wine[2] + wine[3], wine[1] + wine[3]);

for (let n = 4; n <= number; n++) {
  dp[n] = Math.max(
    dp[n - 3] + wine[n - 1] + wine[n],
    dp[n - 2] + wine[n],
    dp[n - 1]
  );
}

console.log(dp[number]);