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
  const curFibo = fibo[i];
  let result = [];
  for (let i = 0; i < curFibo.length; i++) {
    if (cur - curFibo[i] >= 0) {
      cur -= curFibo[i];
      result.push(curFibo[i]);
    }
  }
  console.log(result.slice(0, -1).reverse().join(" "));
});
