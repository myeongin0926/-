let fs = require("fs");
let input = fs.readFileSync("./dev/stdin").toString().trim().split("\n");

const lowerTxt = input.join(" ").toLowerCase();
const letterObj = {};

[...lowerTxt].forEach((letter) => {
  if (letter !== " ") {
    letterObj[letter] = letterObj[letter] + 1 || 1;
  }
});

let max = 0;

for (let key in letterObj) {
  max = Math.max(max, letterObj[key]);
}

let result = "";

for (let key in letterObj) {
  if (letterObj[key] === max) {
    result += key;
  }
}

console.log(result.split("").sort().join(""));
