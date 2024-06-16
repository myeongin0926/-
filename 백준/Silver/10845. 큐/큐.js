const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const queue = [];
const answer = [];
const len = Number(input[0]);

for(let i=1; i<=len; i++){
    let cmd = input[i].split(' ');
    switch(cmd[0]) {
        case 'push':
            queue.push(cmd[1]);
            break;
        case 'pop':
            answer.push(queue.shift() || -1);
            break;
        case 'size':
            answer.push(queue.length);
            break;
        case 'empty':
            answer.push(queue[0] ? 0 : 1);
            break;
        case 'front':
            answer.push(queue[0] || -1);
            break;
        case 'back':
            answer.push(queue[queue.length-1] || -1);
            break;
    }
}

console.log(answer.join('\n'));