function solution(n,a,b)
{
    var answer = 0;
    
    while(true) {
        const max = Math.max(a,b);
        const min = Math.min(a,b);
        if(max % 2 === 0 && max - min === 1) {
            answer++
            break;
        }
        a = Math.ceil(a / 2);
        b = Math.ceil(b / 2);
        answer++
    }

    return answer;
}