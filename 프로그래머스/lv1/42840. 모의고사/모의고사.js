function solution(answers) {
    var answer = [0,0,0];
    const one = [1, 2, 3, 4, 5];
    const two = [2, 1, 2, 3, 2, 4, 2, 5];
    const three = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    answers.forEach((el, idx) => {
        if(one[idx % one.length] == el) answer[0]++
        if(two[idx % two.length] == el) answer[1]++
        if(three[idx % three.length] == el) answer[2]++
    })
    const max = Math.max(...answer)
    const result = []
    answer.forEach((el , idx) => {
        if(el === max) result.push(idx + 1)
    })    
    return result
}