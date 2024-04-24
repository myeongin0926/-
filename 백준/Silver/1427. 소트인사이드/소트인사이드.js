const fs = require("fs");
let input = fs.readFileSync("./dev/stdin").toString().split("\n");

let n = input[0];

const cnt = new Array(10).fill(0);

for (let x of n) {
  cnt[Number(x)]++;
}

let answer = "";

for (let i = 9; i >= 0; i--) {
  if (cnt[i] !== 0) answer += String(i).repeat(cnt[i]);
}

console.log(answer);
