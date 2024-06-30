let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
input = input.map(str => str.trim()) 

const oct = {
    '-': 0,
    '\\': 1,
    '(': 2,
    '@': 3,
    '?': 4,
    '>': 5,
    '&': 6,
    '%': 7,
    '/': -1 
}

const arr = []
for(let i = 0; i < input.length; i++) {
    if(input[i] === '#') break
    let cnt = 0
    let total = 0
    for(let j = input[i].length - 1; j >= 0; j--) {

        total += oct[input[i][j]] * (8 ** cnt)
        cnt++
        // console.log(oct[input[i][j]])
    }

    arr.push(total)
    // console.log(total)
}

console.log(arr.join('\n'))