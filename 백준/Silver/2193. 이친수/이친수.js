const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../ex.txt";
const input = fs.readFileSync(filePath).toString().trim();

const test_num = Number(input);

const dp = new Array(test_num + 1);
dp[0] = [0, 0];
dp[1] = [0, 1];

for (let i = 2; i <= test_num; i++) {
  dp[i] = [];
  dp[i][0] = BigInt(dp[i - 1][0] + dp[i - 1][1]);
  dp[i][1] = BigInt(dp[i - 1][0]);
}

console.log(BigInt(dp[test_num][0] + dp[test_num][1]).toString());