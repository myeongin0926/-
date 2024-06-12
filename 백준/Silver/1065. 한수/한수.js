const fs = require("fs");
let input = fs.readFileSync("/dev/stdin");
let n = +input;

let cnt = 0;

for(let i=1; i<=n; ++i){
    let numArr = String(i);

    if(numArr.length < 3){
        cnt++;
        continue;
    }else{
        let a = Number(numArr[0]) - Number(numArr[1]);
        let b = Number(numArr[1]) - Number(numArr[2]);
        if(a == b){
            cnt++;
        }
    }
}

console.log(cnt);