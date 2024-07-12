const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString().trim().split("\n");

const [min, max] = input[0]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

console.log(max - min);
