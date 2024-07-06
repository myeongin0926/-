let fs = require("fs");
let input = fs.readFileSync("./dev/stdin").toString().trim().split("\n");

input.slice(1).forEach((str) => {
  console.log(str[0].toUpperCase() + str.slice(1));
});
