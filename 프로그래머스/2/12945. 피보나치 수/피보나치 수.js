function solution(n) {
  var answer = 0;
  let fibo = [0, 1];
  for (let i = 2; ; i++) {
    const sum = (fibo[i - 1] + fibo[i - 2]) % 1234567;
    if (i === n) {
      answer = sum;
      break;
    }
    fibo.push(sum);
  }
  return answer;
}
