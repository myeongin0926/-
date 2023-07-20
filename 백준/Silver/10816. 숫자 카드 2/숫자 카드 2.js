const { createPublicKey } = require("crypto");
const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./test.txt")
  .toString()
  .trim()
  .split("\n");

const cardArr = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);
const search = input[3].split(" ").map(Number);

const binarySearch = (arr, target, start, end) => {
  while (start <= end) {
    const mid = ~~((start + end) / 2);
    if (arr[mid] === target) {
      return upperBound(arr, target, mid, end) - lowerBound(arr, target, start, mid);
    } else if (arr[mid] > target) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
    if (start > end) return 0;
  }
};

const upperBound = (arr, target, start, end) => {
  while (start <= end) {
    const mid = ~~((start + end) / 2);
    if (arr[mid] > target) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return end;
};
const lowerBound = (arr, target, start, end) => {
  while (start <= end) {
    while (start <= end) {
      const mid = ~~((start + end) / 2);
      if (arr[mid] >= target) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }
  }
  return end;
};

let result = "";
search.forEach((el) => (result += binarySearch(cardArr, el, 0, cardArr.length - 1) + " "));
console.log(result);
