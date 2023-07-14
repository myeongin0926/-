const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./test.txt")
  .toString()
  .trim()
  .split("\n");

const schools = input[1].split(" ").map(Number);
const [one, more] = input[2].split(" ").map(Number);

let sum = 0;
for (let i = 0; i < schools.length; i++) {
  let cur = schools[i];
  cur -= one;
  sum++;
  if (cur > 0) sum += cur % more ? ~~(cur / more) + 1 : cur / more;
}
console.log(sum);
