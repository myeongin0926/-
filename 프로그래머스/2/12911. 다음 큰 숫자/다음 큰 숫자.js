

function solution(n) {
    let answer = 0;
    let nOneCount = n.toString(2).split('1').length - 1;
    let sOneCount = 0;

    // 주어진 수부터 시작하여 1의 개수를 계산하고,
    // 그 다음 수부터 시작하여 1의 개수를 계산합니다.
    for (let s = n + 1; ; s++) {
        sOneCount = s.toString(2).split('1').length - 1;

        if (nOneCount === sOneCount) {
            answer = s;
            break;
        }
    }

    return answer;
}
