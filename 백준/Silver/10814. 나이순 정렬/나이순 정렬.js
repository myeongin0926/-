const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./test.txt")
  .toString()
  .trim()
  .split("\n");

const arr = input.slice(1).map((el, i) => {
  const [age, name] = el.split(" ");
  return { age: parseInt(age), name, key: i };
});

const answer = arr
  .sort((a, b) => a.age - b.age || a.key - b.key)
  .map((el) => `${el.age} ${el.name}`)
  .join("\n");

console.log(answer);
