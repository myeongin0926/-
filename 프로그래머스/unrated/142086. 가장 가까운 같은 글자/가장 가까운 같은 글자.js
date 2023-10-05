function solution(s) {
    const split_str = s.split('')
    return split_str.map((el, idx) => {
        if(idx === 0) return -1
        const answer = split_str.lastIndexOf(el , idx - 1)
        return answer < 0 ? -1 : idx - answer
    })
}