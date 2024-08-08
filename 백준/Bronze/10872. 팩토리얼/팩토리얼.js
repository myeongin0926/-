let input = require('fs').readFileSync('/dev/stdin').toString();

let result = 1;

for (let i = 1; i <= input * 1; i++) {
    result *= i;
}

console.log(result);