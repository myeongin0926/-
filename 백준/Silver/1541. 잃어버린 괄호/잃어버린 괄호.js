const fs = require("fs");
let input = fs.readFileSync("./dev/stdin").toString().split("\n");

const string = input[0];

const minusGroup = string.split("-");

let answer = 0;

for (let i = 0; i < minusGroup.length; i++) {
  const sum = minusGroup[i].split("+").reduce((sum, num) => +sum + +num, 0);
  if (i === 0) answer += sum;
  else answer -= sum;
}

console.log(answer);
