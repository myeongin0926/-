const fs = require('fs');
const [n, ...input] = fs.readFileSync("./dev/stdin").toString().trim().split('\n');
let answer = 0;
const words = input.map(v => v.trim().split(''));

for (let i = 0; i < n; i++) {
  const word = words[i];
  const temp = [];
  word.forEach(c => {
    if (temp.length == 0) {
      temp.push(c);
    } else if (temp[temp.length - 1] == c) {
      temp.pop();
    } else {
      temp.push(c);
    }
  })

  if (temp.length == 0) {
    answer++;
    continue;
  } else {

    const L = temp.length
    if (L % 2 != 0) {
      continue;
    } else {
      let flag = true;
      for (let i = 0; i < L / 2; i++) {
        if (temp.shift() != temp.pop()) {
          flag = false;
          break;
        }
      }

      if (flag) {
        answer++;
      }

    }
  }
}

console.log(answer)