let fs = require("fs");
let input = fs.readFileSync("./dev/stdin").toString().trim().split("\n");

const n = +input[0];

for (let i = 1; i <= n; i++) {
  console.log("*".repeat(i));
}
