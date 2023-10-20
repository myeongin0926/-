function solution(s){
  let answer = 0;
    
  for(char of s) {
      if (char === '(') answer++
      else if (answer === 0 && char === ')') return false
      else if (char === ')') answer--
  }
  return answer === 0
}