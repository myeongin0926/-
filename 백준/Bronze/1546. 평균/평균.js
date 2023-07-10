const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./test.txt")
  .toString()
  .trim()
  .split("\n");

const subject = +input[0];
const scores = input[1].split(" ").map(Number);
const maxScore = Math.max(...scores);

const renewalScores = scores.map((el) => (el / maxScore) * 100);
console.log(renewalScores.reduce((acc, cur) => acc + cur) / subject);
