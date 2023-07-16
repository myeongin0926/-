const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./test.txt")
  .toString()
  .trim()
  .split("\n");

let data = input.slice(1).map((el) => el.split(""));

function palindrome(arr) {
  let answer = 0;
  let left = 0;
  let right = arr.length - 1;
  for (let i = 0; i < ~~(arr.length / 2); i++) {
    if (arr[left] === arr[right]) {
      left++;
      right--;
    } else if (arr[left] !== arr[right]) {
      let result = false;
      let subLeft = left + 1;
      let subRight = right;
      if (subLeft === subRight) {
        answer = 1;
      } else {
        while (subLeft < subRight) {
          if (arr[subLeft] !== arr[subRight]) break;
          subLeft++;
          subRight--;
          if (subLeft >= subRight) result = true;
        }
        subLeft = left;
        subRight = right - 1;
        while (subLeft < subRight) {
          if (arr[subLeft] !== arr[subRight]) break;
          subLeft++;
          subRight--;
          if (subLeft >= subRight) result = true;
        }
        answer = result ? 1 : 2;
        break;
      }
    }
  }
  return !answer ? 0 : answer === 1 ? 1 : 2;
}

data.forEach((el) => console.log(palindrome(el)));
