const fs = require('fs');
const input = fs.readFileSync("./dev/stdin").toString().trim().split('\n');
const N = +input[0]
const card = input[1].split(' ').map(Number)
let dp = [0,...card]
for(let i = 2; i<dp.length; i++){
  for(let j = 1; j<i; j++){
    dp[i] = Math.max(dp[i],(dp[i-j]+dp[j]))
  }
}

console.log(dp[N])