function solution(babbling) {
  var answer = 0;
  const possibleStr = ["aya", "ye", "woo", "ma"];
  for (let i = 0; i < babbling.length; i++) {
    let babble = babbling[i];
    for (let j = 0; j < possibleStr.length; j++) {
      if (babble.includes(possibleStr[j].repeat(2))) break;
      babble = babble.split(possibleStr[j]).join(" ");
    }
    if (babble.split(" ").join("") === "") answer++;
  }
  return answer;
}