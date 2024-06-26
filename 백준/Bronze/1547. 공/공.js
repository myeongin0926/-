let fs = require("fs");
let input = fs.readFileSync("./dev/stdin").toString().trim().split("\n");

input.shift();

const arr = input.map((el) => el.split(" ").map(Number));

const cupObj = {
  1: 1,
  2: 2,
  3: 3,
};

for (let i = 0; i < arr.length; i++) {
  const [prev, next] = arr[i];
  for (let cupNum in cupObj) {
    if (cupObj[cupNum] === prev) {
      cupObj[cupNum] = next;
    } else if (cupObj[cupNum] === next) {
      cupObj[cupNum] = prev;
    }
  }
}

console.log(cupObj["1"]);
