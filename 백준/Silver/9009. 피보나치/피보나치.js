let fs = require("fs");
let input = fs.readFileSync("./dev/stdin").toString().split("\n");

const n = +input[0];
const arr = input.slice(1).map(Number);

// 피보 배열 설정
const fibo = [0, 1];

// 주어진 수 중에 가장 높은 수 저장 ( 피보 여러번 구하지 않기 위해 )
const maxValue = Math.max(...arr);

// 제일 높은 수까지 피보 배열 생성
for (let i = 2; i < maxValue; i++) {
  const sum = fibo[i - 1] + fibo[i - 2];
  if (maxValue >= sum) {
    fibo.push(sum);
  } else break;
}

let result = [];

for (let i = 0; i < n; i++) {
  const queue = [];
  for (let j = fibo.length; j > 0; j--) {
    if (fibo[j] <= arr[i] && arr[i] > 0) {
      queue.unshift(fibo[j]);
      arr[i] = arr[i] - fibo[j];
    }
  }
  result.push(queue);
}

result.forEach((el) => console.log(el.join(" ")));
