const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./test.txt")
  .toString()
  .trim()
  .split("\n");

let result = "";
input.forEach((el, i) => interval(el, i));
console.log(result.trim());

function interval([...item], i) {
  const count = item.splice(0, 2)[0];
  result += (i !== 0 ? "\n" : "") + item.reduce((acc, cur) => acc + cur.repeat(count), "");
}
