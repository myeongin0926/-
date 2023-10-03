function solution(d, budget) {
  let count = 0;

  d.sort((a, b) => a - b).forEach((el) => {
    if (budget - el >= 0) {
      budget -= el;
      count++;
    }
  });
  return count;
}
