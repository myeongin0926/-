function solution(number, limit, power) {
    var answer = 0;
    for(let i = 1; i <= number; i++) {
        let measure = [];
        for(let j = 1; j <= Math.sqrt(i); j++) {
            if(i % j === 0) {
                measure.push(j)
                if (i / j !== j) measure.push(i / j)
            }            
        }
        answer += measure.length > limit ? power : measure.length
    }
    return answer
}