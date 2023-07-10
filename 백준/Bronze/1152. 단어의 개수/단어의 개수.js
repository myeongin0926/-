const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./test.txt")
  .toString()
  .trim()
  .split("\n");

if (!input[0].trim().length) console.log(0);
else {
  console.log(input[0].trim().split(" ").length);
}
