function countOnes(num) {
    // 이진법으로 변환한 문자열에서 1의 개수를 세어 반환합니다.
    return num.toString(2).split('1').length - 1;
}

function solution(n) {
    let answer = 0;
    let nOneCount = countOnes(n); // 주어진 수의 1의 개수를 계산합니다.
    let sOneCount = 0;

    // 주어진 수부터 시작하여 1의 개수를 계산하고,
    // 그 다음 수부터 시작하여 1의 개수를 계산합니다.
    for (let s = n + 1; ; s++) {
        sOneCount = countOnes(s); // 다음 수의 1의 개수를 계산합니다.

        // 1의 개수가 같으면 다음 수를 정답으로 설정하고 반복문을 종료합니다.
        if (nOneCount === sOneCount) {
            answer = s;
            break;
        }
    }

    return answer;
}
