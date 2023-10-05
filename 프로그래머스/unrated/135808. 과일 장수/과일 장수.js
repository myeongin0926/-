function solution(k, m, score) {
    var answer = 0;
    score.sort((a,b) => a < b ? 1 : -1)
    for(let i = 0; i + m <= score.length; i += m) answer += score[i + m - 1] * m
    return answer
}


