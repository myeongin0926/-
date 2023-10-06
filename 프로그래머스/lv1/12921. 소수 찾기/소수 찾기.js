function solution(n) {
  const isPrime = new Array(n + 1).fill(true); // 전부 다 소수라고 가정
  let answer = 0;
  isPrime[0] = isPrime[1] = false; // 0과 1은 소수가 아니기에 false를 채워준다

  for (let i = 2; i <= Math.sqrt(n); i++) {
    // n의 제곱근까지만 반복
      if (isPrime[i]) for (let j = i * i; j <= n; j += i) isPrime[j] = false;
  }

  for (let i = 2; i <= n; i++) {
    if (isPrime[i]) answer++;
  }

  return answer;
}
