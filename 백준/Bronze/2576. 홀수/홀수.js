let fs = require("fs");
let input = fs.readFileSync("./dev/stdin").toString().trim().split("\n");

const arr = input.map(Number);

const result = [];

arr.forEach((num) => {
  if (num & (2 !== 0)) result.push(num);
});

result.sort((a, b) => a - b);

if (result.length > 0) {
  console.log(result.reduce((acc, cur) => acc + cur, 0));
  console.log(result[0]);
} else {
  console.log(-1);
}
