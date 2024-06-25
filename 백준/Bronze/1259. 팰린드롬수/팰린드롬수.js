let fs = require("fs");
let input = fs.readFileSync("./dev/stdin").toString().trim().split("\n");

input.pop();

for (let i = 0; i < input.length; i++) {
  const reverseStr = input[i].split("").reverse().join("");

  console.log(input[i] === reverseStr ? "yes" : "no");
}
