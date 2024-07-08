const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString().trim().split("\n");

const n = input.shift();

const arr = input.map((stringNum) => stringNum.split(" ").map(Number));

for (let i = 0; i < n; i++) {
  let [min, max] = arr[i].sort((a, b) => a - b);
  let copyMax = max;
  let boo = true;

  while (boo) {
    if (max % min === 0) {
      console.log(max);
      boo = false;
    } else {
      max += copyMax;
    }
  }
}
