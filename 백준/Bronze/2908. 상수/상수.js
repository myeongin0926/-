const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./test.txt")
  .toString()
  .trim()
  .split("\n");

console.log(Math.max(...input[0].split(" ").map((el) => el.split("").reverse().join(""))));
