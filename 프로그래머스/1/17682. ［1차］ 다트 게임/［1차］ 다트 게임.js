function bonus(num , type) {
    return  Math.pow(num, type === 'S' ? 1 : type === 'D' ? 2 : 3);
}

function solution(dartResult) {
    var answer = 0;
    const arr = []
    const numIdx = [0]
    for(let i = 2; i < dartResult.length; i++) {
        if(!isNaN(dartResult[i])){ 
            arr.push(dartResult.slice(numIdx.at(-1), i))
            numIdx.push(i)
            i++
        }
    }
    arr.push(dartResult.slice(numIdx.at(-1)))
    const result = []
    arr.forEach((el, idx) => {
         const num = el.match(/\d+/g)[0]
         const [type, option] = el.slice(num.length).split('')
         const sum = bonus(num, type)
         result.push(option === '*' ? sum * 2 : option === '#' ? -sum : sum)
         if(option === '*') result[idx - 1] = result[idx-1] * 2
    })

    return result.reduce((acc,cur) => acc += cur,0)
}