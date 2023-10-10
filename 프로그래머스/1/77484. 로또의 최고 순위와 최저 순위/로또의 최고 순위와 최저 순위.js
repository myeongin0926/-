function solution(lottos, win_nums) {
    catchCount = 0
    zeroCount = 0
    lottos.forEach(el => {
        if(el === 0) zeroCount++
        else if (win_nums.includes(el))  catchCount++
    })
    return [scoreCheck(catchCount + zeroCount) , scoreCheck(catchCount)]
}

function scoreCheck (count) {
    if(count === 6) return 1
    else if (count === 5) return 2
    else if (count === 4) return 3
    else if (count === 3) return 4
    else if (count === 2) return 5
    else if (count < 2) return 6
}