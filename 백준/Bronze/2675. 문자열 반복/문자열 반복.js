const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./test.txt")
  .toString()
  .trim()
  .split("\n");

input.forEach((el, i) => interval(el, i));

function interval([...item], i) {
  if (i === 0) return;
  const count = item.splice(0, 2)[0];
  console.log(item.reduce((acc, cur) => acc + cur.repeat(count), ""));
}
