const word = require("fs").readFileSync("/dev/stdin").toString().trim();
const suffix = [];
for (let i=0; i<word.length; i++) suffix.push(word.slice(i));
console.log(suffix.sort().join("\n"));