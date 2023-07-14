const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./test.txt")
  .toString()
  .trim()
  .split("\n");

const data = input[1].split(" ").map(Number);

const arrows = [];

for (let i = 0; i < data.length; i++) {
  const cur = data[i];
  let filterArrow = [];
  for (let j = 0; j < arrows.length; j++) {
    if (arrows[j] === cur) {
      filterArrow.push(j);
    }
  }
  if (!filterArrow.length) {
    arrows.push(cur - 1);
    continue;
  } else {
    arrows[filterArrow[0]] = cur - 1;
  }
}

console.log(arrows.length);
