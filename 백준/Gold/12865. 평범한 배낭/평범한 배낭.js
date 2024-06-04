const fs = require('fs');
const stdin = 
  fs.readFileSync(0, 'utf-8')
  .trim()
  .split('\n');
const input = (() => {
  let line = 0;
  return () => stdin[line++].split(' ').map(Number);
})();

const [N, K] = input();
const dp = Array(K + 1).fill(0);

for (let i = 0; i < N; i++) {
  const [W, V] = input();
  for (let j = K; j >= W; j--) {
    if (dp[j - W] + V > dp[j]) {
      dp[j] = dp[j - W] + V;
    }
  }
}

console.log(dp[K]);