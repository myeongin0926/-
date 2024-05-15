function solution(brown, yellow) {
 var answer = [];
    let w = brown / 2 - 1;
    let h = 1;
    while(true) {
        if((w - 2) * h === yellow) {
            answer = [w, h + 2]
            break;
        }
        w--
        h++
    }
    return answer;
}
