function solution(N, stages) {
    var answer = [];
    for(let i = 1; i <= N; i++) {
        let challengePeoples = 0
        let failPeoples = 0
        stages.forEach(el => {
            if(el >= i) challengePeoples++
            if(el === i) failPeoples++
        })
        answer[i] = [failPeoples / challengePeoples , i]
    }
    return answer.slice(1).sort((a,b) => {
        if(a[0] > b[0]) return -1
        else if(a[0] < b[0]) return 1
        else if(a[0] === b[0]) return a[1] > b[1] ? 1 : -1
    }).map(el => el[1])
}