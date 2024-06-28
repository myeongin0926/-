let fs = require("fs");
let input = fs.readFileSync("./dev/stdin").toString().trim().split("\n");

const arr = input.map(Number).sort((a, b) => a - b);

let sum = arr.reduce((sum, cur) => sum + cur, 0);

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr.length; j++) {
    if (sum - arr[i] - arr[j] === 100 && i !== j) {
      arr.forEach((el, index) => {
        if (index !== i && index !== j) console.log(el);
      });
      return;
    }
  }
}
