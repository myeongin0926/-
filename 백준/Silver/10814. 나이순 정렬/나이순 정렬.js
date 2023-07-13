const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./test.txt")
  .toString()
  .trim()
  .split("\n");

const arr = input.slice(1).map((el, i) => {
  const user = el.split(" ");
  return { age: user[0], name: user[1], key: i };
});

let answer = "";

arr
  .sort((a, b) => {
    if (a.age !== b.age) return a.age - b.age;
    else a.index - b.index;
  })
  .forEach((el) => (answer += el.age + " " + el.name + "\n"));

console.log(answer);
