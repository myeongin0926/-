let fs = require("fs");
let input = fs.readFileSync("./dev/stdin").toString().trim().split("\n");

let answer = "";

input[0].split("").forEach((str) => {
  answer += str === str.toUpperCase() ? str.toLowerCase() : str.toUpperCase();
});

console.log(answer);
