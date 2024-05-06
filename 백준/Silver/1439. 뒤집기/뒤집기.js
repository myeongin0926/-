let fs = require("fs");
let input = fs.readFileSync("./dev/stdin").toString().split("\n");

const n = input[0];

let one = 0;
let zero = 0;

let last = "";
for (let i = 0; i < n.length; i++) {
  if (last !== n[i]) {
    if (n[i] === "1") {
      one++;
      last = "1";
    }
    if (n[i] === "0") {
      zero++;
      last = "0";
    }
  }
}

console.log(Math.min(one, zero));
