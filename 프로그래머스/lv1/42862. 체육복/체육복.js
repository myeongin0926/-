function solution(n, lost, reserve) {
  const clash = reserve.filter((el) => lost.includes(el));
  lost = lost.filter((el) => !clash.includes(el));
  reserve = reserve.filter((el) => !clash.includes(el));
  const arr = new Array(n + 1).fill(1);

  for (let i = 1; i < arr.length; i++) {
    if (lost.includes(i)) arr[i] -= 1;
    else if (reserve.includes(i)) arr[i] += 1;
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      if (arr[i - 1] > 1) {
        arr[i - 1]--;
        arr[i]++;
      } else if (arr[i + 1] > 1) {
        arr[i + 1]--;
        arr[i]++;
      }
    }
  }
  return arr.join("").slice(1).split(0).join("").length;
}