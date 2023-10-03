function solution(s) {
  for (el of s) if (isNaN(+el)) return false;
  if (s.length !== 4 && s.length !== 6) return false;
  return true;
}
