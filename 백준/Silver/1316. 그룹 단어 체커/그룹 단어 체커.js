const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./test.txt")
  .toString()
  .trim()
  .split("\n");

const data = input.splice(1);
let result = 0;

data.forEach((el, i, arr) => {
  const newArr = [];
  const str = el.split("");
  let a = true;
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[i + 1]) {
      if (newArr.includes(str[i])) {
        a = false;
      }
      newArr.push(str[i]);
    }
  }
  result += a ? 1 : 0;
});
console.log(result);
