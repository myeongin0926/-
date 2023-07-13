const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./test.txt")
  .toString()
  .trim()
  .split("\n");

let [start, finish] = input[0].split(" ").map(Number);
let result = 0;

while (start < finish) {
  if (!(finish % 2)) {
    finish = finish / 2;
    result++;
  } else {
    if (finish % 10 !== 1) {
      return console.log(-1);
    } else {
      finish = Math.floor(finish / 10);
      result++;
    }
  }
}

console.log(start === finish ? result + 1 : -1);
