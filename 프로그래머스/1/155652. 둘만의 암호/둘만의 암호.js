function solution(s, skip, index) {
    const str = "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz"
    var answer = '';
    s = s.split('')
    for(let i = 0; i < s.length; i++) {
        const el = s[i]
        let idx = str.indexOf(el) + 1
        const arr = []
        while(arr.length < index) {
            if(!skip.includes(str[idx])) arr.push(str[idx])
            idx++
        }
        if (arr.length) answer +=  arr.at(-1)
    }

    return answer;
}


