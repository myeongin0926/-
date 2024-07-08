const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString().trim().split("\n").map(Number);

const top5 = input
  .map((num, idx) => ({ num, idx: idx + 1 }))
  .sort((a, b) => b.num - a.num)
  .slice(0, 5);

const score = top5.reduce((sum, cur) => sum + cur.num, 0);
const scoreIndex = top5.map(({ idx }) => idx).sort((a, b) => a - b);

console.log(score);
console.log(scoreIndex.join(" "));
