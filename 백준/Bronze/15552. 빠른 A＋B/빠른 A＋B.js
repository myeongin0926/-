const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(file).toString().split('\n');

let result = '';
for (let i = 1; i <= input[0]; i++){
  let numbers = input[i].split(' ');
  result += Number(numbers[0]) + Number(numbers[1]) + '\n';
}
console.log(result);