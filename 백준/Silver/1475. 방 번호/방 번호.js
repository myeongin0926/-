let fs = require('fs');
const filePath = process.platform === `linux` ? `/dev/stdin` : `예제.txt`; 
let input = fs.readFileSync(filePath).toString().split('\n');
const c = console.log

let str = String(input)

let numbers= [0,0,0,0,0,0,0,0,0]

let count = 0

for(i of str){
    if (i === '9' || i === '6'){
        count +=1
        if(count %2 !== 0){
            numbers[6] +=1
        }
    }
    else{
        numbers[i]+=1
    }
}
const maxValue = Math.max(...numbers)

c(maxValue)