let fs = require("fs");
let input = fs.readFileSync("./dev/stdin").toString().trim().split("\n");

const [b, s] = input[0]
  .split(" ")
  .map(Number)
  .sort((a, b) => b - a);

console.log(((b + s) * (b - s + 1)) / 2);
