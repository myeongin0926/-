const fs = require("fs");
const { EOL } = require("os");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./test.txt")
  .toString()
  .trim()
  .split("\n");

const data = input.slice(1).map(Number);
const fibo = data.map((el, i) => {
  const fibo = [0, 1];
  while (fibo.at(-1) + fibo.at(-2) <= data[i]) fibo.push(fibo.at(-1) + fibo.at(-2));
  return fibo.sort((a, b) => b - a);
});
data.forEach((cur, i) => {
  console.log(
    fibo[i]
      .filter((el) => (cur - el >= 0 ? ((cur -= el), true) : false))
      .reverse()
      .slice(1)
      .join(" ")
  );
});
