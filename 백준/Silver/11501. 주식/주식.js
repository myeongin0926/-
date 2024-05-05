let fs = require("fs");
let input = fs.readFileSync("./dev/stdin").toString().split("\n");

const arr = [];

for (let i = 2; i < input.length; i += 2) {
  arr.push(input[i].split(" ").map(Number));
}

for (let i = 0; i < arr.length; i++) {
  let maxPrice = 0;
  let sum = 0;
  for (let j = arr[i].length - 1; j >= 0; j--) {
    if (maxPrice < arr[i][j]) {
      maxPrice = arr[i][j];
    } else {
      sum += maxPrice - arr[i][j];
    }
  }
  console.log(sum);
}
