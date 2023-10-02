function solution(s) {
  const even = !(s.length % 2);
  const mid = s.length / 2;
  return s.slice(even ? mid - 1 : ~~mid, mid + 1);
}