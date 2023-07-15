const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./test.txt")
  .toString()
  .trim()
  .split("\n");

const data = input.slice(1).map((el) => el.split(" ").map(Number));

data.forEach((el) => {
  let num = el[0];
  let result = 1;
  for (let i = 0; i < el[1]; i++) {
    result = (result * num) % 10;
  }
  console.log(result === 0 ? 10 : result);
});
