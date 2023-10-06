function solution(N, stages) {
    var answer = [];
    for(let i = 1; i <= N; i++) {
        const challengePeoples = stages.filter(el => el >= i).length
        let failPeoples = stages.filter(el => el === i).length
        answer.push([failPeoples / challengePeoples , i])
    }
    return answer.sort((a,b) => b[0] - a[0]).map(el => el[1])
}