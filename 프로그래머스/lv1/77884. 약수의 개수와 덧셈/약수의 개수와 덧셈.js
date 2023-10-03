function solution(left, right) {
  let sum = 0;

  while (left <= right) {
    let count = 1;
    for (let i = 1; i <= left / 2; i++) {
      if (!(left % i)) count++;
    }
    sum = count % 2 ? sum - left : sum + left;
    left++;
  }

  return sum;
}