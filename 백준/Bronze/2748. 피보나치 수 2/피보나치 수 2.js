const n = require('fs').readFileSync('/dev/stdin').toString() * 1;

const DP = [0, 1];

for (let i = 1; i < n; i++) {
    DP[i+1] = BigInt(DP[i]) + BigInt(DP[i-1]);
}

console.log(DP[n].toString());