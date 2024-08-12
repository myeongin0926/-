var fs = require('fs');
var inputs = fs.readFileSync('/dev/stdin').toString().split('\n');
var cases = Number(inputs[0]);
inputs = inputs[1].split(' ').map(v=>Number(v));
var dp = [inputs[0]];
for(var i=1; i<cases; i++){
    dp[i] = inputs[i] > inputs[i] + dp[i-1] ? inputs[i] : inputs[i] + dp[i-1];
}
console.log(Math.max(...dp));