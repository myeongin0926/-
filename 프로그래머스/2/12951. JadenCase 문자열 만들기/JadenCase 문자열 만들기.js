function solution(s) {
    let answer = '';
    
    for(let i = 0; i < s.length; i++) {
        const cur = s[i]
        const prev = s[i - 1]
        if(prev === ' ' || prev === undefined) answer += cur.toUpperCase();
        else answer += cur.toLowerCase();
    }
    
    return answer
}