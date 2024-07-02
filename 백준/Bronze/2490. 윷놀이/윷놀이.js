const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

for (const i of input) {
  let trimedI = i
    .split(' ')
    .map((it) => parseInt(it))
    .reduce((pre, cur) => pre + cur);

  if (trimedI === 4) console.log('E');
  else if (trimedI === 3) console.log('A');
  else if (trimedI === 2) console.log('B');
  else if (trimedI === 1) console.log('C');
  else console.log('D');
}