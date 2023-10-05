function solution(a, b, n) {
  const getBottle = (bottleCount, colaCount, a, b) => {
    if (bottleCount / a < 1) return colaCount;
    const newBottle = ~~(bottleCount / a) * b;
    const remainBottle = bottleCount % a;
    return getBottle(newBottle + remainBottle, colaCount + newBottle, a, b);
  };
  const answer = getBottle(n, 0, a, b);
  return answer;
}