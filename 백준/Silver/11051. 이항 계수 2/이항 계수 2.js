const fs = require('fs');
const [N, K] = fs.readFileSync("./dev/stdin").toString().trim().split(" ").map(v => +v);

let dp = Array.from(Array(N + 1), () => new Array(N + 1).fill(0));

dp[0][0] = 1;
dp[1][0] = 1;
dp[1][1] = 1;

for (let i = 2; i <= N; i++) {
  for (let j = 0; j <= i; j++) {
    if (j == 0 || j == i) {
      dp[i][j] = 1
    }
    else dp[i][j] = (dp[i - 1][j - 1] + dp[i - 1][j]) % 10007;
  }
}


console.log(dp[N][K]);