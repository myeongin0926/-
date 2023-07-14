const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./test.txt")
  .toString()
  .trim()
  .split("\n");

let data = input[0].split("").map(Number);
const newData = data.sort((a, b) => b - a).join("");

if (!data.includes(0)) {
  console.log(-1);
} else {
  const sum = data.reduce((acc, cur) => acc + cur, 0);
  if (sum % 3 !== 0) {
    console.log(-1);
  } else {
    console.log(newData);
  }
}
