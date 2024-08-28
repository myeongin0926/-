const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "./text.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");

input.shift(0);
let maxNum = Math.max(...input);
const number = input.map(Number);
let result = [];

// 에라토스테네스의 체
// 배열을 만들어서 maxNum 까지(0부터이기에 +1 해서 maxNum까지 만들어줌) 채우고
// fill()을 사용하여 전부 true변경, 0,1은 소수가 아니기에 false 로 변경
let arr = Array(maxNum + 1)
  .fill(true)
  .fill(false, 0, 2);

// 2,3,5,7배수를 전부 제거해주는 반복문
for (let i = 2; i * i <= maxNum; i++) {
  if (arr[i]) {
    for (let j = i * i; j <= maxNum; j += i) {
      arr[j] = false;
    }
  }
}

// number 배열 반복
for (let value of number) {
  let count = 0;

  //value 값을 두 부분으로 나누기 위해  value/2
  // number에서 임의의 값을 뺀 값과 임의의 값이 모두 소수면 카운트 해줌
  for (let i = 2; i <= value / 2; i++) {
    if (arr[i] && arr[value - i]) count++;
  }
  result.push(count);
}

console.log(result.join("\n"));