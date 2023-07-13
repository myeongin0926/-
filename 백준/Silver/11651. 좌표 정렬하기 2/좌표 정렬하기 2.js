const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./test.txt")
  .toString()
  .trim()
  .split("\n");

const arr = [];

input.slice(1).forEach((el) => arr.push(el.split(" ").map(Number)));

arr.sort((a, b) => {
  if (a[1] === b[1]) return a[0] - b[0];
  return a[1] - b[1];
});
let answer = "";
arr.forEach((el) => (answer += `${el[0] + " " + el[1]}` + "\n"));

console.log(answer);
