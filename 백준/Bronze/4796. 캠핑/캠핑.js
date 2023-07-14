const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./test.txt")
  .toString()
  .trim()
  .split("\n");

const data = input.map((el) => el.split(" ").map(Number)).slice(0, -1);
const result = [];

for (let i = 0; i < data.length; i++) {
  const [l, p, v] = data[i];
  let sum = ~~(v / p) * l;
  sum += ~~(v % p) > l ? l : ~~(v % p);
  result.push(sum);
}

let answer = "";

result.forEach((el, i) => {
  answer += `Case ${i + 1}: ${el}` + "\n";
});

console.log(answer);
