const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./test.txt")
  .toString()
  .trim()
  .split("\n");

let data = input.slice(1).map((el) => el.split(""));

function palindrome(arr) {
  let left = 0;
  let right = arr.length - 1;
  for (let i = 0; i < ~~(arr.length / 2); i++) {
    if (arr[left] !== arr[right]) return false;
    left++;
    right--;
  }
  return true;
}

function pseudosocialSentence(arr) {
  let left = 0;
  let right = arr.length - 1;
  for (let i = 0; i < ~~(arr.length / 2); i++) {
    if (arr[left] === arr[right]) {
      left++;
      right--;
    } else if (arr[left] !== arr[right]) {
      let subLeft = left + 1;
      let subRight = right;
      if (subLeft === subRight) return true;
      while (subLeft < subRight) {
        if (arr[subLeft] !== arr[subRight]) {
          break;
        } else if (subLeft < subRight) {
          subLeft++;
          subRight--;
        }
        if (subLeft >= subRight) {
          return true;
        }
      }
      subLeft = left;
      subRight = right - 1;
      while (subLeft < subRight) {
        if (arr[subLeft] !== arr[subRight]) {
          break;
        } else if (subLeft < subRight) {
          subLeft++;
          subRight--;
        }
        if (subLeft >= subRight) {
          return true;
        }
      }
      return false;
    }
  }
  return false;
}

data.forEach((el) => {
  if (palindrome(el)) console.log(0);
  else if (pseudosocialSentence(el)) console.log(1);
  else console.log(2);
});
