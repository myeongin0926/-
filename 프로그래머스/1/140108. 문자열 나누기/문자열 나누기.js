function solution(s) {
  let x = "";
  let accStr = "";
  let answer = 0;

  s = s.split("");

  for (let i = 0; i < s.length; i++) {
    el = s[i];
    if (x === "") {
      x = el;
    } else if (x[0] === el) {
      x += el;
    } else if (x[0] !== el) {
      accStr += el;
    }
    if (x.length === accStr.length) {
      answer++;
      x = "";
      accStr = "";
    }

    if (i + 1 === s.length && x !== "") answer++;
  }
  return answer;
}