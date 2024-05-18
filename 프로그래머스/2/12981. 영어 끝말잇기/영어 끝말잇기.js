function solution(n, words) {
    let loop = 1;
    let count = 0;
    let word = [words[0]];
    
    for(let i = 1; i < words.length; i++) {
       if((i) % n === 0) loop++;
       if(word[i-1]?.at(-1) !== words[i][0] || word.includes(words[i]) || words.length <= 1) {
           let remain = (i + 1) % n;
           count = remain || n;
           return [remain || n, loop];
       }
        word.push(words[i])
    }   

    return [0, 0]
}