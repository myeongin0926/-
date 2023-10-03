function solution(n, m) {
    var answer = [];
    let min = 1;
    for(let i = 1; i <= Math.min(n,m); i++) if(!(n % i) && !(m % i)) answer[0] = i
    while(true) {
        if(!(min % n) && !(min % m)) break;
        min++
    }
    return [...answer , min];
}