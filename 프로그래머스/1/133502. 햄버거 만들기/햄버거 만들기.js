function solution(ingredient) {
  var answer = 0;
  const stack = [];

  ingredient.forEach((el) => {
    stack.push(el);
    if (stack.slice(-4).join("") === "1231") {
      stack.splice(-4);
      answer++;
    }
  });
  return answer;
}