const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

let data = input[0];
const bag = [5, 3];
let answer = 0;

while (data >= 3) {
  if (data % 5 === 0) {
    answer += data / 5;
    data = 0;
  } else {
    data = data - 3;
    answer++;
  }
}

console.log(data > 0 ? -1 : answer);
