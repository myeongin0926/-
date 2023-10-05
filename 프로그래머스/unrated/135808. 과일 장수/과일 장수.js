function solution(k, m, score) {
    var answer = 0;
    score.sort((a,b) => b>a ? 1 : -1)
    for(let i = 0; i + m <= score.length; i += m) {
        answer += Math.min(...score.slice(i, i+m)) * m
    }
    return answer
}


