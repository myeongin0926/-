


let obj = {
  '{' : '}',
  '(' : ')',    
  '[' : ']'    
}

const open = ['[' , '{' , '('];
const close = [']' , '}' , ')']

function solution(s) {
    let answer = 0;
  
    s = s.split('')
    for(let i = 0; i<s.length; i++) {
       let success = true;  
       let arr = [];
        
       for(let j = 0; j < s.length; j++) {
          if((arr.length === 0 && close.includes(s[j])) || (arr.length >0 && close.includes(s[j]) && arr.at(-1) !== s[j])) {
              success=false;
              break;
          } else if(open.includes(s[j])) {
              arr.push(obj[s[j]])
          } else if (close.includes(s[j])) {
              arr.pop();
          }

       }
        
        if(success && arr.length === 0) answer++
        s.push(s[0]);
        s.shift();
    }
    
    return answer
}