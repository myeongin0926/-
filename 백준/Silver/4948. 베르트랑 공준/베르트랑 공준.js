const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .slice(0, -1)
  .map(v => +v);

const prime = Array(123456 * 2 + 1).fill(true);
for (let i = 2; i <= 123456 * 2 + 1; i++) {
  if (!prime[i]) continue;
  for (let j = i * 2; j <= 123456 * 2 + 1; j += i) {
    prime[j] = false;
  }
}

const output = [];
for (const n of input) {
  let result = 0;
  for (let i = n + 1; i <= n * 2; i++) {
    if (prime[i]) result++;
  }
  output.push(result);
}
console.log(output.join('\n'));