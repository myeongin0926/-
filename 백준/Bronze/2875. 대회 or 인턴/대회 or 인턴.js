const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./test.txt")
  .toString()
  .trim()
  .split("\n");
//백준대학교에서는 대회에 나갈 때 2명의 여학생과 1명의 남학생이 팀을 결성해서 나가는 것이 원칙이다.
let [woman, man, k] = input[0].split(" ").map(Number);
let total = woman + man;
let count = 0;

while (true) {
  if (total - 3 < k || woman - 2 < 0 || man - 1 < 0) {
    break;
  }
  woman -= 2;
  man--;
  count++;
  total -= 3;
}

console.log(count);
