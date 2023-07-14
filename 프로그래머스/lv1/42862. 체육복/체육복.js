// const fs = require("fs");
// const input = fs
//   .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./test.txt")
//   .toString()
//   .trim()
//   .split("\n");

// function solution(n, lost, reserve) {
//   var answer = 0;
//   const clash = reserve.filter((el) => lost.includes(el));
//   lost = lost.filter((el) => !clash.includes(el));
//   reserve = reserve.filter((el) => !clash.includes(el));

//   for (let i = 0; i < lost.length; i++) {
//     const left = reserve.indexOf(lost[i] - 1);
//     const right = reserve.indexOf(lost[i] + 1);
//     if (left !== -1) {
//       reserve.splice(left, 1);
//       answer++;
//     } else if (right !== -1) {
//       reserve.splice(right, 1);
//       answer++;
//     }
//   }
//   return n - lost.length + answer;
// }

function solution(n, lost, reserve) {
  const clash = reserve.filter((el) => lost.includes(el));
  lost = lost.filter((el) => !clash.includes(el));
  reserve = reserve.filter((el) => !clash.includes(el));
  const arr = new Array(n + 1).fill(1);

  for (let i = 1; i < arr.length; i++) {
    if (lost.includes(i)) arr[i] -= 1;
    else if (reserve.includes(i)) arr[i] += 1;
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      if (arr[i - 1] > 1) {
        arr[i - 1]--;
        arr[i]++;
      } else if (arr[i + 1] > 1) {
        arr[i + 1]--;
        arr[i]++;
      }
    }
  }
  return arr.join("").slice(1).split(0).join("").length;
}
